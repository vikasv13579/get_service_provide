import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, fullName, companyName, mobileNumber } = body;

    // Get admin emails (supports multiple emails)
    const adminEmails = process.env.ADMIN_EMAIL.split(',').map(email => email.trim());
    
    // Debug: Log emails being sent to
    console.log('📧 Sending registration email to:', adminEmails);

    // HTML email template
    const emailHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f9f9f9;
              border-radius: 8px;
            }
            .header {
              background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
              color: white;
              padding: 30px;
              border-radius: 8px 8px 0 0;
              text-align: center;
            }
            .content {
              background: white;
              padding: 30px;
              border-radius: 0 0  8px 8px;
            }
            .info-row {
              margin: 15px 0;
              padding: 10px;
              background: #f8f9fa;
              border-left: 4px solid #667eea;
            }
            .label {
              font-weight: bold;
              color: #667eea;
              display: inline-block;
              width: 150px;
            }
            .value {
              color: #333;
            }
            .footer {
              text-align: center;
              margin-top: 20px;
              color: #666;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">🎉 New User Registration!</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Someone just signed up on your platform</p>
            </div>
            <div class="content">
              <h2 style="color: #667eea; margin-top: 0;">User Details:</h2>
              
              <div class="info-row">
                <span class="label">👤 Full Name:</span>
                <span class="value">${fullName}</span>
              </div>
              
              <div class="info-row">
                <span class="label">📧 Email:</span>
                <span class="value">${email}</span>
              </div>
              
              <div class="info-row">
                <span class="label">🏢 Company:</span>
                <span class="value">${companyName}</span>
              </div>
              
              <div class="info-row">
                <span class="label">📱 Mobile:</span>
                <span class="value">${mobileNumber}</span>
              </div>
              
              <div class="info-row">
                <span class="label">⏰ Time:</span>
                <span class="value">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</span>
              </div>
              
              <p style="margin-top: 30px; padding: 15px; background: #e8f5e9; border-radius: 4px; border-left: 4px solid #4caf50;">
                <strong>✅ Action Required:</strong> You may want to welcome this new user or verify their account.
              </p>
            </div>
            <div class="footer">
              <p>This is an automated notification from Gem Service Platform</p>
              <p>© ${new Date().getFullYear()} Gem Service. All rights reserved.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send SEPARATE email to EACH admin (better deliverability!)
    const emailPromises = adminEmails.map((adminEmail) =>
      resend.emails.send({
        from: 'onboarding@resend.dev',
        to: adminEmail, // Send individually to each admin
        subject: '🎉 New User Registration - Gem Service',
        html: emailHTML,
      })
    );

    // Wait for all emails to be sent
    const results = await Promise.allSettled(emailPromises);

    // Log results with detailed information
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        const response = result.value;
        console.log(`📧 Full response for ${adminEmails[index]}:`, JSON.stringify(response));
        
        if (response.error) {
          console.error(`❌ Resend error for ${adminEmails[index]}:`, response.error);
        } else if (response.data) {
          console.log(`✅ Email sent to ${adminEmails[index]}:`, response.data);
        } else {
          console.warn(`⚠️ No data/error for ${adminEmails[index]} - Response:`, response);
        }
      } else {
        console.error(`❌ Promise rejected for ${adminEmails[index]}:`, result.reason);
      }
    });

    // Check if at least one email was sent successfully
    const successCount = results.filter(r => r.status === 'fulfilled').length;
    
    if (successCount === 0) {
      return NextResponse.json({ error: 'Failed to send to any admin' }, { status: 500 });
    }

    return NextResponse.json({ 
      success: true, 
      sent: successCount,
      total: adminEmails.length,
      message: `Sent to ${successCount}/${adminEmails.length} admins`
    });

  } catch (error) {
    console.error('❌ API error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}


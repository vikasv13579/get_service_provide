import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * POST /api/contact
 * Handles contact form submissions
 */
export async function POST(request) {
  try {
    const body = await request.json();

    // Validate required fields
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Prepare contact data
    const contactData = {
      name,
      email,
      phone: body.phone || '',
      company: body.company || '',
      subject,
      message,
      userId: body.userId || 'guest',
      userEmail: body.userEmail || email,
      userAuthenticated: body.userAuthenticated || false,
      timestamp: body.timestamp || new Date().toISOString(),
      status: 'new',
    };

    // Log the submission
    console.log('📧 New Contact Form Submission:', contactData.name, '-', contactData.email);

    // Get admin emails (supports multiple emails)
    const adminEmails = process.env.ADMIN_EMAIL.split(',').map(email => email.trim());
    
    // Debug: Log emails being sent to
    console.log('📧 Sending contact form email to:', adminEmails);

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
            }
            .header {
              background: linear-gradient(135deg, #10b981 0%, #059669 100%);
              color: white;
              padding: 30px;
              border-radius: 8px 8px 0 0;
              text-align: center;
            }
            .content {
              background: white;
              padding: 30px;
              border-radius: 0 0 8px 8px;
            }
            .info-row {
              margin: 15px 0;
              padding: 12px;
              background: #f8f9fa;
              border-left: 4px solid #10b981;
              border-radius: 4px;
            }
            .label {
              font-weight: bold;
              color: #10b981;
              display: inline-block;
              width: 120px;
            }
            .value {
              color: #333;
            }
            .message-box {
              margin: 20px 0;
              padding: 20px;
              background: #f0fdf4;
              border: 1px solid #bbf7d0;
              border-radius: 8px;
            }
            .reply-button {
              display: inline-block;
              margin-top: 20px;
              padding: 12px 24px;
              background: #10b981;
              color: white;
              text-decoration: none;
              border-radius: 6px;
              font-weight: bold;
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
              <h1 style="margin: 0;">📩 New Contact Form Submission</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Someone reached out via your contact form</p>
            </div>
            <div class="content">
              <h2 style="color: #10b981; margin-top: 0;">Contact Details:</h2>
              
              <div class="info-row">
                <span class="label">👤 Name:</span>
                <span class="value">${contactData.name}</span>
              </div>
              
              <div class="info-row">
                <span class="label">📧 Email:</span>
                <span class="value"><a href="mailto:${contactData.email}" style="color: #10b981;">${contactData.email}</a></span>
              </div>
              
              ${contactData.phone ? `
              <div class="info-row">
                <span class="label">📱 Phone:</span>
                <span class="value"><a href="tel:${contactData.phone}" style="color: #10b981;">${contactData.phone}</a></span>
              </div>
              ` : ''}
              
              ${contactData.company ? `
              <div class="info-row">
                <span class="label">🏢 Company:</span>
                <span class="value">${contactData.company}</span>
              </div>
              ` : ''}
              
              <div class="info-row">
                <span class="label">📋 Subject:</span>
                <span class="value"><strong>${contactData.subject}</strong></span>
              </div>
              
              <div class="info-row">
                <span class="label">⏰ Time:</span>
                <span class="value">${new Date(contactData.timestamp).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</span>
              </div>
              
              <div class="info-row">
                <span class="label">👥 User Type:</span>
                <span class="value">${contactData.userAuthenticated ? '✅ Registered User' : '👤 Guest'}</span>
              </div>
              
              <h3 style="color: #10b981; margin-top: 30px;">💬 Message:</h3>
              <div class="message-box">
                <p style="margin: 0; white-space: pre-wrap;">${contactData.message}</p>
              </div>
              
              <div style="text-align: center;">
                <a href="mailto:${contactData.email}?subject=Re: ${encodeURIComponent(contactData.subject)}" class="reply-button">
                  Reply to ${contactData.name}
                </a>
              </div>
            </div>
            <div class="footer">
              <p>This is an automated notification from Gem Service Contact Form</p>
              <p>© ${new Date().getFullYear()} Gem Service. All rights reserved.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send SEPARATE email to EACH admin (better deliverability!)
    try {
      const emailPromises = adminEmails.map((adminEmail) =>
        resend.emails.send({
          from: 'onboarding@resend.dev',
          to: adminEmail, // Send individually to each admin
          replyTo: contactData.email, // Admin can reply directly to the user
          subject: `📩 New Contact Form - ${contactData.subject}`,
          html: emailHTML,
        })
      );

      // Wait for all emails to be sent
      const results = await Promise.allSettled(emailPromises);

      // Log results with detailed information
      results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
          const { data, error } = result.value;
          if (error) {
            console.error(`❌ Resend error for ${adminEmails[index]}:`, error);
          } else if (data) {
            console.log(`✅ Contact email sent to ${adminEmails[index]}:`, data);
          } else {
            console.warn(`⚠️ No data returned for ${adminEmails[index]} - might be blocked or invalid`);
          }
        } else {
          console.error(`❌ Promise rejected for ${adminEmails[index]}:`, result.reason);
        }
      });

      const successCount = results.filter(r => r.status === 'fulfilled').length;
      console.log(`📧 Contact form: Sent to ${successCount}/${adminEmails.length} admins`);
    } catch (emailError) {
      console.error('❌ Email error:', emailError);
      // Continue anyway - don't fail the request if email fails
    }

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been received. We will get back to you soon!',
        data: {
          id: Date.now().toString(), // In production, use the actual DB ID
          timestamp: contactData.timestamp,
        },
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('❌ Error processing contact form:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to process your request. Please try again later.',
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/contact
 * Health check endpoint
 */
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    message: 'Contact API is running',
    timestamp: new Date().toISOString(),
  });
}

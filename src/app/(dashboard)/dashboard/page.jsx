import { User, BarChart3, FileText, DollarSign } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-card border border-border rounded-lg shadow p-6">
        <h1 className="text-3xl font-bold text-card-foreground mb-2">
          Dashboard Overview
        </h1>
        <p className="text-muted-foreground">
          Welcome to your AI-powered dashboard. Monitor your business metrics in
          real-time.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Example Card */}
        {[
          {
            title: "Total Users",
            value: "12,345",
            change: "+12%",
            icon: User,
            color: "blue",
          },
          {
            title: "Revenue",
            value: "$45,678",
            change: "+8%",
            icon: DollarSign,
            color: "green",
          },
          {
            title: "Orders",
            value: "1,234",
            change: "+15%",
            icon: FileText,
            color: "purple",
          },
          {
            title: "Analytics",
            value: "98.5%",
            change: "+2%",
            icon: BarChart3,
            color: "orange",
          },
          {
            title: "Analytics",
            value: "98.5%",
            change: "+2%",
            icon: BarChart3,
            color: "orange",
          },
          {
            title: "Total Users",
            value: "12,345",
            change: "+12%",
            icon: User,
            color: "blue",
          },
          {
            title: "Revenue",
            value: "$45,678",
            change: "+8%",
            icon: DollarSign,
            color: "green",
          },
          {
            title: "Orders",
            value: "1,234",
            change: "+15%",
            icon: FileText,
            color: "purple",
          },
          {
            title: "Analytics",
            value: "98.5%",
            change: "+2%",
            icon: BarChart3,
            color: "orange",
          },
          {
            title: "Analytics",
            value: "98.5%",
            change: "+2%",
            icon: BarChart3,
            color: "orange",
          },
          {
            title: "Total Users",
            value: "12,345",
            change: "+12%",
            icon: User,
            color: "blue",
          },
          {
            title: "Revenue",
            value: "$45,678",
            change: "+8%",
            icon: DollarSign,
            color: "green",
          },
          {
            title: "Orders",
            value: "1,234",
            change: "+15%",
            icon: FileText,
            color: "purple",
          },
          {
            title: "Analytics",
            value: "98.5%",
            change: "+2%",
            icon: BarChart3,
            color: "orange",
          },
          {
            title: "Analytics",
            value: "98.5%",
            change: "+2%",
            icon: BarChart3,
            color: "orange",
          },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-card border border-border rounded-lg shadow p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </p>
                <p className="text-2xl font-bold text-card-foreground mt-2">
                  {stat.value}
                </p>
              </div>
              <div className={`p-3 rounded-full bg-${stat.color}-100`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
              </div>
            </div>
            <div className="mt-4 text-sm text-muted-foreground">
              <span className="font-medium text-green-600">{stat.change}</span>{" "}
              from last month
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

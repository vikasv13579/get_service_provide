"use client";
import {
  User,
  BarChart3,
  FileText,
  DollarSign,
  TrendingUp,
  ShoppingBag,
} from "lucide-react";

const DashboardCards = () => {
  const statsData = [
    {
      title: "Total Users",
      value: "2,547",
      change: "+12.5%",
      changeType: "increase",
      icon: User,
      color: "bg-blue-500",
    },
    {
      title: "Revenue",
      value: "$45,231",
      change: "+8.2%",
      changeType: "increase",
      icon: DollarSign,
      color: "bg-green-500",
    },
    {
      title: "Orders",
      value: "1,324",
      change: "+5.4%",
      changeType: "increase",
      icon: ShoppingBag,
      color: "bg-purple-500",
    },
    {
      title: "Growth Rate",
      value: "24.8%",
      change: "+2.1%",
      changeType: "increase",
      icon: TrendingUp,
      color: "bg-orange-500",
    },
    {
      title: "Reports",
      value: "89",
      change: "-2.3%",
      changeType: "decrease",
      icon: FileText,
      color: "bg-red-500",
    },
    {
      title: "Analytics",
      value: "15.2K",
      change: "+18.7%",
      changeType: "increase",
      icon: BarChart3,
      color: "bg-indigo-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {statsData.map((stat, index) => {
        const IconComponent = stat.icon;
        return (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                  {stat.title}
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </p>
                <div className="flex items-center">
                  <span
                    className={`text-sm font-medium ${
                      stat.changeType === "increase"
                        ? "text-green-600 dark:text-green-400"
                        : "text-red-600 dark:text-red-400"
                    }`}
                  >
                    {stat.change}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                    vs last month
                  </span>
                </div>
              </div>
              <div className={`p-3 rounded-full ${stat.color}`}>
                <IconComponent className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardCards;

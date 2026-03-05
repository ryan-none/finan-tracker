import { useState } from "react";
import Sidebar from "../components/ui/Sidebar";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import OverviewCards from "../components/dashboard/OverviewCards";
import QuickActions from "../components/dashboard/QuickActions";
import CategoryGrid from "../components/dashboard/CategoryGrid";
import RecentTransactions from "../components/dashboard/RecentTransactions";
import InsightsGoals from "../components/dashboard/InsightsGoals";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className="flex-1 min-h-screen bg-gray-50 md:ml-64">
        <DashboardHeader onMenuClick={() => setSidebarOpen(true)} />
        <main className="px-6 py-6 space-y-8">
          {/* Overview */}
          <section className="animate-fade-in">
            <OverviewCards />
          </section>

          {/* Quick Actions */}
          <section className="animate-fade-in">
            <QuickActions />
          </section>

          {/* G.R.O.W.T.H Categories */}
          <section className="animate-fade-in">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">G.R.O.W.T.H Categories</h2>
            <CategoryGrid />
          </section>

          {/* Recent Transactions & Insights side by side on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 animate-fade-in h-full">
            <section className="lg:col-span-3 flex flex-col h-full">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Transactions</h2>
              <RecentTransactions className="h-full" />
            </section>
            <section className="lg:col-span-2 flex flex-col h-full">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Insights & Goals</h2>
              <InsightsGoals className="h-full" />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
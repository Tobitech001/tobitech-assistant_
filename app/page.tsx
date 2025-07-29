'use client';

import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import DashboardCard from '@/components/DashboardCard';
import { Bot, CalendarCheck2, SendHorizonal } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />

        <main className="p-6">
          <h1 className="text-2xl font-semibold mb-4">Welcome, Tobiloba 👋</h1>
          <p className="text-gray-400 mb-6">Here’s your system summary today:</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <DashboardCard
              title="AI Assistant Status"
              value="Active"
              icon={<Bot />}
            />
            <DashboardCard
              title="Scheduled Posts"
              value="3 Pending"
              icon={<SendHorizonal />}
            />
            <DashboardCard
              title="Upcoming Tasks"
              value="2 Reminders"
              icon={<CalendarCheck2 />}
            />
          </div>
        </main>
      </div>
    </div>
  );
}

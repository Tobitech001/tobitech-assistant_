'use client';

import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';

export default function HomePage() {
  return (
    <div className="flex min-h-screen bg-gray-950 text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main area */}
      <main className="flex-1 p-6">
        <Topbar />

        {/* Dashboard main content */}
        <div className="mt-6">
          <h1 className="text-3xl font-bold">Your AI Dashboard</h1>
          <p className="mt-2 text-gray-400">Here’s your AI assistant control panel.</p>
        </div>
      </main>
    </div>
  );
}

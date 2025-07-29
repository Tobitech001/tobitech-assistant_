import { ReactNode } from "react";

interface DashboardCardProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

export default function DashboardCard({ title, icon, children }: DashboardCardProps) {
  return (
    <div className="bg-[#1f1f1f] rounded-2xl p-4 shadow-md w-full">
      <div className="flex items-center mb-2 space-x-2">
        <div className="text-white">{icon}</div>
        <h2 className="text-white text-lg font-semibold">{title}</h2>
      </div>
      <div className="text-gray-300 text-sm">{children}</div>
    </div>
  );
}

import React from 'react';

interface CardProps {
  title: string;
  value: string;
  icon?: React.ReactNode;
}

export default function DashboardCard({ title, value, icon }: CardProps) {
  return (
    <div className="bg-gray-800 p-4 rounded-2xl shadow-md flex items-center gap-4 w-full sm:w-64">
      <div className="text-white text-3xl">{icon}</div>
      <div>
        <p className="text-sm text-gray-400">{title}</p>
        <h3 className="text-xl font-bold">{value}</h3>
      </div>
    </div>
  );
}

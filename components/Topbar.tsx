import { Bell } from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex justify-between items-center bg-gray-800 p-4 rounded-xl text-white shadow">
      <h2 className="text-lg font-semibold">Welcome, Tobiloba 👋</h2>
      <div className="flex items-center space-x-4">
        <Bell className="w-5 h-5" />
      </div>
    </header>
  );
}

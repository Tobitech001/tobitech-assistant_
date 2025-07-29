"use client";
import { Bell, SunMoon } from "lucide-react";

export default function Topbar() {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-800 bg-[#1a1a1a]">
      <h1 className="text-white text-xl font-semibold">TOBI TECH Assistant</h1>
      <div className="flex items-center space-x-4">
        <button className="text-white hover:text-gray-300">
          <SunMoon size={20} />
        </button>
        <button className="text-white hover:text-gray-300">
          <Bell size={20} />
        </button>
      </div>
    </div>
  );
}

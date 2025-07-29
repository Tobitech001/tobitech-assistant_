"use client";
import { Home, Bot, Mail, Bell, ClipboardList } from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  const menu = [
    { icon: <Home size={20} />, label: "Home", path: "/" },
    { icon: <Bot size={20} />, label: "AI Assistant", path: "/assistant" },
    { icon: <ClipboardList size={20} />, label: "Tasks", path: "/tasks" },
    { icon: <Mail size={20} />, label: "Emails", path: "/emails" },
    { icon: <Bell size={20} />, label: "Reminders", path: "/reminders" }
  ];

  return (
    <div className="w-64 h-screen bg-[#111] text-white flex flex-col p-4 space-y-6">
      <h2 className="text-xl font-bold">TOBI TECH</h2>
      <nav className="space-y-4">
        {menu.map((item, i) => (
          <Link
            key={i}
            href={item.path}
            className="flex items-center space-x-3 hover:bg-[#222] px-3 py-2 rounded-md"
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}

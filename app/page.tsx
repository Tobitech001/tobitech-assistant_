"use client";

import { Card, CardContent } from "@/components/ui/card";
import DashboardCard from "@/components/DashboardCard";
import {
  MessageSquare,
  Timer,
  Mail,
  Bell,
  Lightbulb,
  User,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-4 md:p-10">
      <h1 className="text-3xl md:text-5xl font-bold mb-8">TOBI TECH Assistant</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DashboardCard title="Platform Content Ideas" icon={<Lightbulb />}>
          Facebook, Instagram, WhatsApp & Twitter posts auto-suggested daily.
        </DashboardCard>

        <DashboardCard title="Auto Telegram Posts" icon={<MessageSquare />}>
          3 daily Telegram posts auto-scheduled & published.
        </DashboardCard>

        <DashboardCard title="Email Sending System" icon={<Mail />}>
          Compose, schedule, and send to 5,000+ emails from rotating senders.
        </DashboardCard>

        <DashboardCard title="AI Ad Composer" icon={<User />}>
          Converts form submissions into ads for 5 social platforms.
        </DashboardCard>

        <DashboardCard title="Assistant Reminders" icon={<Bell />}>
          AI reminds you to post, check forms, or approve ad ideas.
        </DashboardCard>

        <DashboardCard title="Live Scheduler" icon={<Timer />}>
          Auto content queue — hourly Telegram, daily email & social updates.
        </DashboardCard>
      </div>
    </main>
  );
}

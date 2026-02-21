"use client"

import PollCard from "@/components/ui/Pollcard"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0A0F1C] text-white pt-24 px-6">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* ================= LEFT SIDEBAR ================= */}
        <aside className="hidden lg:block space-y-6">

          <div className="bg-[#111827] p-6 rounded-2xl border border-white/10">
            <h3 className="text-lg font-semibold mb-4 text-blue-500">
              Categories
            </h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="hover:text-white cursor-pointer">Economy</li>
              <li className="hover:text-white cursor-pointer">Education</li>
              <li className="hover:text-white cursor-pointer">Healthcare</li>
              <li className="hover:text-white cursor-pointer">National Security</li>
            </ul>
          </div>

          <div className="bg-[#111827] p-6 rounded-2xl border border-white/10">
            <h3 className="text-lg font-semibold mb-4 text-blue-500">
              Trending Topics
            </h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li>#Budget2026</li>
              <li>#FuelReform</li>
              <li>#VotingPolicy</li>
            </ul>
          </div>

        </aside>

        {/* ================= MAIN FEED ================= */}
        <main className="lg:col-span-2 space-y-10">

          <PollCard />
          <PollCard />

        </main>

        {/* ================= RIGHT SIDEBAR ================= */}
        <aside className="hidden lg:block space-y-6">

          <div className="bg-[#111827] p-6 rounded-2xl border border-white/10">
            <h3 className="text-lg font-semibold mb-4 text-blue-500">
              Platform Stats
            </h3>

            <div className="space-y-4 text-sm text-slate-400">
              <div className="flex justify-between">
                <span>Total Votes Today</span>
                <span className="text-blue-500 font-semibold">542</span>
              </div>

              <div className="flex justify-between">
                <span>Active Polls</span>
                <span className="text-blue-500 font-semibold">18</span>
              </div>

              <div className="flex justify-between">
                <span>New Discussions</span>
                <span className="text-blue-500 font-semibold">24</span>
              </div>
            </div>
          </div>

          <div className="bg-[#111827] p-6 rounded-2xl border border-white/10">
            <h3 className="text-lg font-semibold mb-4 text-blue-500">
              Suggested Polls
            </h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li>Should voting age be reduced?</li>
              <li>Is tax reform necessary?</li>
              <li>Should renewable energy subsidies increase?</li>
            </ul>
          </div>

        </aside>

      </div>
    </div>
  )
}
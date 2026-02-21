"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function AdminDashboard() {
  const router = useRouter()

  const logout = () => {
    localStorage.removeItem("auth")
    router.push("/login")
  }

  return (
    <div className="space-y-10">

      {/* Top Action Row */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-white">
          Dashboard Overview
        </h2>

        <Button
          variant="outline"
          className="border-blue-500 text-blue-500 hover:bg-blue-500/10"
          onClick={logout}
        >
          Logout
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <div className="bg-[#111827] p-6 rounded-2xl border border-white/10 hover:border-blue-500/40 transition">
          <h4 className="text-slate-400 text-sm">
            Total Users
          </h4>
          <p className="text-3xl font-bold text-blue-500 mt-3">
            1,250
          </p>
        </div>

        <div className="bg-[#111827] p-6 rounded-2xl border border-white/10 hover:border-blue-500/40 transition">
          <h4 className="text-slate-400 text-sm">
            Active Polls
          </h4>
          <p className="text-3xl font-bold text-blue-500 mt-3">
            18
          </p>
        </div>

        <div className="bg-[#111827] p-6 rounded-2xl border border-white/10 hover:border-blue-500/40 transition">
          <h4 className="text-slate-400 text-sm">
            Votes Today
          </h4>
          <p className="text-3xl font-bold text-blue-500 mt-3">
            542
          </p>
        </div>

      </div>

      {/* Recent Activity */}
      <div className="bg-[#111827] p-6 rounded-2xl border border-white/10">
        <h3 className="text-lg font-semibold text-white mb-6">
          Recent Activity
        </h3>

        <div className="space-y-4 text-slate-400 text-sm">
          <div className="flex justify-between">
            <span>New poll created: Fuel Reform Debate</span>
            <span className="text-blue-400">2h ago</span>
          </div>

          <div className="flex justify-between">
            <span>500+ votes recorded in last hour</span>
            <span className="text-blue-400">1h ago</span>
          </div>

          <div className="flex justify-between">
            <span>12 new users registered today</span>
            <span className="text-blue-400">Today</span>
          </div>
        </div>
      </div>

    </div>
  )
}
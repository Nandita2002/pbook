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
    <div className="space-y-8">

      <div className="flex justify-end">
        <Button
          variant="outline"
          className="border-red-500 text-red-500 hover:bg-red-500/10"
          onClick={logout}
        >
          Logout
        </Button>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <div className="bg-[#111827] p-6 rounded-2xl border border-white/5">
          <h4 className="text-slate-400 text-sm">Total Users</h4>
          <p className="text-3xl font-bold text-red-500 mt-3">1,250</p>
        </div>

        <div className="bg-[#111827] p-6 rounded-2xl border border-white/5">
          <h4 className="text-slate-400 text-sm">Active Polls</h4>
          <p className="text-3xl font-bold text-red-500 mt-3">18</p>
        </div>

        <div className="bg-[#111827] p-6 rounded-2xl border border-white/5">
          <h4 className="text-slate-400 text-sm">Votes Today</h4>
          <p className="text-3xl font-bold text-red-500 mt-3">542</p>
        </div>

      </div>

      <div className="bg-[#111827] p-6 rounded-2xl border border-white/5">
        <h3 className="text-lg font-semibold mb-6">
          Recent Activity
        </h3>

        <div className="space-y-3 text-slate-400 text-sm">
          <p>• New poll created: Fuel Reform Debate</p>
          <p>• 500+ votes recorded in last hour</p>
          <p>• 12 new users registered today</p>
        </div>
      </div>

    </div>
  )
}
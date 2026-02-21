"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function AdminDashboard() {
  const router = useRouter()

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth") || "{}")
    if (!auth.isLoggedIn || auth.role !== "admin") {
      router.push("/login")
    }
  }, [])

  const logout = () => {
    localStorage.removeItem("auth")
    router.push("/login")
  }

  return (
    <div className="min-h-screen bg-[#0B1120] text-white flex">

      {/* Sidebar */}
      <aside className="w-64 bg-black/40 backdrop-blur-lg border-r border-white/10 p-6">
        <h2 className="text-2xl font-bold mb-10">Admin</h2>
        <div className="space-y-6 text-slate-300">
          <p className="hover:text-red-500 cursor-pointer">Dashboard</p>
          <p className="hover:text-red-500 cursor-pointer">Create Poll</p>
          <p className="hover:text-red-500 cursor-pointer">Users</p>
          <p className="hover:text-red-500 cursor-pointer">Reports</p>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 p-10">

        <div className="flex justify-between mb-10">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <Button className="bg-red-600 hover:bg-red-700" onClick={logout}>
            Logout
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-8">
          <div className="bg-[#111827] p-6 rounded-2xl border border-white/5">
            <h4>Total Users</h4>
            <p className="text-3xl font-bold text-red-500 mt-3">1250</p>
          </div>

          <div className="bg-[#111827] p-6 rounded-2xl border border-white/5">
            <h4>Active Polls</h4>
            <p className="text-3xl font-bold text-red-500 mt-3">18</p>
          </div>

          <div className="bg-[#111827] p-6 rounded-2xl border border-white/5">
            <h4>Votes Today</h4>
            <p className="text-3xl font-bold text-red-500 mt-3">542</p>
          </div>
        </div>

      </div>
    </div>
  )
}
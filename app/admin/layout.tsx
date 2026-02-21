"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth") || "{}")
    if (!auth.isLoggedIn || auth.role !== "admin") {
      router.push("/login")
    }
  }, [])

  return (
    <div className="min-h-screen flex bg-[#0B1120] text-white">

      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed z-50 top-0 left-0 h-full w-64 bg-[#111827]
          border-r border-white/10 p-6
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:flex
        `}
      >
        <div className="flex flex-col h-full">
          <h2 className="text-2xl font-bold mb-10">
            Admin Panel
          </h2>

          <nav className="space-y-4 text-slate-400">
            <p className="hover:text-red-500 cursor-pointer">Dashboard</p>
            <p className="hover:text-red-500 cursor-pointer">Create Poll</p>
            <p className="hover:text-red-500 cursor-pointer">Users</p>
            <p className="hover:text-red-500 cursor-pointer">Reports</p>
          </nav>

          <div className="mt-auto text-xs text-slate-500 pt-10">
            PBook Admin v1.0
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Top Header */}
        <header className="h-16 border-b border-white/10 px-6 flex items-center justify-between bg-[#0B1120]">

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>

          <h1 className="text-lg font-semibold">
            Admin Dashboard
          </h1>

        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 md:p-8">
          {children}
        </main>

      </div>
    </div>
  )
}
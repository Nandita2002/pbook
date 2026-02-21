"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

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
      router.replace("/login")
    }
  }, [router])

  return (
    <div className="min-h-screen flex bg-[#0A0F1C] text-white">

      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden"
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

          {/* Logo */}
          <h2 className="text-2xl font-bold mb-12">
            P<span className="text-blue-500">Book</span>
          </h2>

          {/* Navigation */}
          <nav className="space-y-3 text-slate-400">

            <Link
              href="/dashboard"
              className="block px-3 py-2 rounded-lg hover:bg-blue-500/10 hover:text-blue-500 transition"
            >
              Dashboard
            </Link>

            <Link
              href="#"
              className="block px-3 py-2 rounded-lg hover:bg-blue-500/10 hover:text-blue-500 transition"
            >
              Create Poll
            </Link>

            <Link
              href="#"
              className="block px-3 py-2 rounded-lg hover:bg-blue-500/10 hover:text-blue-500 transition"
            >
              Users
            </Link>

            <Link
              href="#"
              className="block px-3 py-2 rounded-lg hover:bg-blue-500/10 hover:text-blue-500 transition"
            >
              Reports
            </Link>

          </nav>

          <div className="mt-auto text-xs text-slate-500 pt-10">
            Admin v1.0
          </div>

        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Header */}
        <header className="h-16 border-b border-white/10 px-6 flex items-center justify-between bg-[#0A0F1C]">

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setOpen(true)}
          >
            ☰
          </button>

          <h1 className="text-lg font-semibold">
            Admin Panel
          </h1>

        </header>

        {/* Content */}
        <main className="flex-1 p-6 md:p-8 bg-[#0A0F1C]">
          {children}
        </main>

      </div>
    </div>
  )
}
"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Navbar from "@/components/navbar"

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth") || "{}")
    if (!auth.isLoggedIn || auth.role !== "user") {
      router.push("/login")
    }
  }, [])

  return (
    <div className="bg-[#0B1120] text-white min-h-screen flex flex-col">

      <Navbar />

      <main className="flex-1 pt-20 px-6">
        {children}
      </main>

      <footer className="bg-black border-t border-white/10 py-6 text-center text-slate-500 text-sm">
        Logged in as User
      </footer>

    </div>
  )
}
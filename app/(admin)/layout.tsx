"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth") || "{}")
    if (!auth.isLoggedIn || auth.role !== "admin") {
      router.push("/login")
    }
  }, [])

  return (
    <div className="bg-[#0B1120] text-white min-h-screen flex flex-col">

      <header className="bg-black border-b border-white/10 px-8 py-4 flex justify-between">
        <h1 className="font-bold">
          Admin Panel
        </h1>
      </header>

      <main className="flex-1 p-10">
        {children}
      </main>

    </div>
  )
}
"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function AuthGuard({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth") || "{}")

    if (!auth.isLoggedIn || auth.role !== "user") {
      router.replace("/login")
    }
  }, [router])

  // Render children immediately.
  // If not authorized, router will redirect.
  return <>{children}</>
}
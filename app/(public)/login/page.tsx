"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function LoginPage() {
  const router = useRouter()
  const [role, setRole] = useState("user")

  const handleLogin = () => {
    localStorage.setItem(
      "auth",
      JSON.stringify({ isLoggedIn: true, role })
    )

    if (role === "admin") {
      router.push("/dashboard")   // Updated route
    } else {
      router.push("/home")
    }
  }

  return (
    <div className="min-h-screen bg-[#0A0F1C] flex items-center justify-center relative overflow-hidden px-6">

      {/* Background Blue Glow */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-3xl"></div>

      {/* Card */}
      <div className="relative w-full max-w-md bg-[#111827] border border-white/10 p-10 rounded-3xl shadow-2xl space-y-8">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">
            Welcome Back
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Access your political dashboard securely
          </p>
        </div>

        {/* Form */}
        <div className="space-y-6">

          <Input
            placeholder="Email"
            className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500"
          />

          <Input
            type="password"
            placeholder="Password"
            className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-blue-500 focus:ring-blue-500"
          />

          {/* Role Selector */}
          <div>
            <label className="text-sm text-slate-400 mb-2 block">
              Select Role
            </label>
            <select
              className="w-full bg-white/10 border border-white/20 rounded-md p-3 text-white focus:outline-none focus:border-blue-500"
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="user" className="text-black">User</option>
              <option value="admin" className="text-black">Admin</option>
            </select>
          </div>

          {/* Login Button */}
          <Button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white transition"
            onClick={handleLogin}
          >
            Login
          </Button>

          {/* Footer Link */}
          <p className="text-center text-sm text-slate-400">
            Don’t have an account?{" "}
            <span
              className="text-blue-500 cursor-pointer hover:underline"
              onClick={() => router.push("/signup")}
            >
              Sign Up
            </span>
          </p>

        </div>
      </div>
    </div>
  )
}
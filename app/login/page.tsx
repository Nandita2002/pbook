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
      router.push("/admin/dashboard")
    } else {
      router.push("/home")
    }
  }

  return (
    <div className="min-h-screen bg-[#0B1120] flex items-center justify-center relative overflow-hidden px-6">

      {/* Background Glows */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow-500/10 rounded-full blur-3xl"></div>

      {/* Card */}
      <div className="relative w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl shadow-2xl">

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white">
            Welcome Back
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Access your political dashboard securely
          </p>
        </div>

        {/* Form */}
        <div className="space-y-6">

          <div>
            <Input
              placeholder="Email"
              className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-red-500 focus:ring-red-500"
            />
          </div>

          <div>
            <Input
              type="password"
              placeholder="Password"
              className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-red-500 focus:ring-red-500"
            />
          </div>

          {/* Role Selector Styled */}
          <div>
            <label className="text-sm text-slate-400 mb-2 block">
              Select Role
            </label>
            <div className="relative">
              <select
                className="w-full bg-white/10 border border-white/20 rounded-md p-3 text-white focus:outline-none focus:border-red-500"
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="user" className="text-black">User</option>
                <option value="admin" className="text-black">Admin</option>
              </select>
            </div>
          </div>

          {/* Primary Button */}
          <Button
            className="w-full bg-red-600 hover:bg-red-700 text-white transition"
            onClick={handleLogin}
          >
            Login
          </Button>

          {/* Footer Link */}
          <p className="text-center text-sm text-slate-400">
            Don’t have an account?{" "}
            <span
              className="text-red-500 cursor-pointer hover:underline"
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
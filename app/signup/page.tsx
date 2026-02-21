"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function SignupPage() {
  const router = useRouter()
  const [role, setRole] = useState("user")

  const handleSignup = () => {
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

      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow-500/10 rounded-full blur-3xl"></div>

      {/* Card */}
      <div className="relative w-full max-w-lg bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl shadow-2xl">

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white">
            Create Your Account
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            Join structured and responsible political discussions
          </p>
        </div>

        <div className="space-y-5">

          <Input
            placeholder="Full Name"
            className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-red-500"
          />

          <Input
            placeholder="Username"
            className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-red-500"
          />

          <Input
            placeholder="Email Address"
            type="email"
            className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-red-500"
          />

          <div className="grid grid-cols-2 gap-4">
            <Input
              type="password"
              placeholder="Password"
              className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-red-500"
            />
            <Input
              type="password"
              placeholder="Confirm Password"
              className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-red-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Input
              placeholder="Country"
              className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-red-500"
            />
            <Input
              placeholder="State / Region"
              className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-red-500"
            />
          </div>

          <Input
            type="date"
            className="bg-white/10 border-white/20 text-white focus:border-red-500"
          />

          {/* Political Interest */}
          <select
            className="w-full bg-white/10 border border-white/20 rounded-md p-3 text-white focus:outline-none focus:border-red-500"
          >
            <option className="text-black">Political Interest</option>
            <option className="text-black">Economy</option>
            <option className="text-black">Education</option>
            <option className="text-black">Healthcare</option>
            <option className="text-black">National Security</option>
          </select>

          {/* Role selector (Demo Only) */}
          <select
            className="w-full bg-white/10 border border-white/20 rounded-md p-3 text-white focus:outline-none focus:border-red-500"
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="user" className="text-black">User</option>
            <option value="admin" className="text-black">Admin (Demo)</option>
          </select>

          {/* Terms */}
          <div className="flex items-start gap-3 text-sm text-slate-400">
            <input type="checkbox" className="mt-1" />
            <span>
              I agree to the Terms of Service and Privacy Policy.
            </span>
          </div>

          <Button
            className="w-full bg-red-600 hover:bg-red-700 text-white transition"
            onClick={handleSignup}
          >
            Create Account
          </Button>

          <p className="text-sm text-center text-slate-400">
            Already have an account?{" "}
            <span
              className="text-red-500 cursor-pointer hover:underline"
              onClick={() => router.push("/login")}
            >
              Login
            </span>
          </p>

        </div>
      </div>
    </div>
  )
}
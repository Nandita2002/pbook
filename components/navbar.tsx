"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#0A0F1C]/70 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight text-white">
            P<span className="text-blue-500">Book</span>
          </span>
        </Link>

        {/* Right Section */}
        <div className="flex items-center gap-6">

          {/* Login */}
          <Link href="/login">
            <Button
              variant="ghost"
              className="text-slate-300 hover:text-white hover:bg-white/10"
            >
              Login
            </Button>
          </Link>

          {/* Primary CTA */}
          <Link href="/signup">
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white px-6"
            >
              Sign Up
            </Button>
          </Link>

        </div>

      </div>
    </nav>
  )
}
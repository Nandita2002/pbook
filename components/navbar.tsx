"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
      
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tight text-white">
            P<span className="text-red-500">Book</span>
          </span>
        </Link>

        {/* Right Section */}
        <div className="flex items-center gap-6">

          {/* Login - subtle */}
          <Link href="/login">
            <Button
              variant="ghost"
              className="text-white hover:bg-white/10 hover:text-white"
            >
              Login
            </Button>
          </Link>

          {/* Primary CTA */}
          <Link href="/signup">
            <Button
              className="bg-red-600 hover:bg-red-700 text-white px-6"
            >
              Sign Up
            </Button>
          </Link>

        </div>

      </div>
    </nav>
  )
}
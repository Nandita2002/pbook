"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  const router = useRouter()

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth") || "{}")
    if (!auth.isLoggedIn || auth.role !== "user") {
      router.push("/login")
    }
  }, [])

  const logout = () => {
    localStorage.removeItem("auth")
    router.push("/login")
  }

  return (
    <div className="min-h-screen bg-[#0B1120] text-white">

      {/* Top Navbar */}
      <header className="sticky top-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/10 px-8 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">
          P<span className="text-red-500">Book</span>
        </h1>

        <Button
          variant="outline"
          className="border-red-500 text-red-500 hover:bg-red-500/10"
          onClick={logout}
        >
          Logout
        </Button>
      </header>

      {/* Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 px-6 py-10">

        {/* Left Sidebar */}
        <aside className="col-span-3 hidden md:block">
          <div className="bg-[#111827] p-6 rounded-2xl border border-white/5 space-y-6">
            <h3 className="font-semibold text-lg">Navigation</h3>
            <div className="space-y-3 text-slate-400">
              <p className="hover:text-red-500 cursor-pointer">Home</p>
              <p className="hover:text-red-500 cursor-pointer">Trending</p>
              <p className="hover:text-red-500 cursor-pointer">My Votes</p>
              <p className="hover:text-red-500 cursor-pointer">Saved</p>
            </div>
          </div>
        </aside>

        {/* Center Feed */}
        <main className="col-span-12 md:col-span-6 space-y-8">

          {/* Poll Card 1 */}
          <div className="bg-[#111827] p-6 rounded-2xl border border-white/5 space-y-5">

            {/* Metadata */}
            <div className="flex justify-between text-sm text-slate-400">
              <span>Posted by Admin • 2h ago</span>
              <span>12,542 votes</span>
            </div>

            <h3 className="text-xl font-semibold">
              Should fuel prices be reduced nationwide?
            </h3>

            {/* Vote Bars */}
            <div className="space-y-4">

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Yes</span>
                  <span>62%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-3">
                  <div className="bg-red-500 h-3 rounded-full w-[62%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>No</span>
                  <span>38%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-3">
                  <div className="bg-yellow-400 h-3 rounded-full w-[38%]"></div>
                </div>
              </div>

            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-4">
              <Button className="bg-red-600 hover:bg-red-700">
                Vote Yes
              </Button>

              <Button
                variant="outline"
                className="border-white/30 text-black hover:bg-white/10"
              >
                Vote No
              </Button>
            </div>

          </div>

          {/* Poll Card 2 */}
          <div className="bg-[#111827] p-6 rounded-2xl border border-white/5 space-y-5">

            <div className="flex justify-between text-sm text-slate-400">
              <span>Posted by Policy Board • 5h ago</span>
              <span>8,921 votes</span>
            </div>

            <h3 className="text-xl font-semibold">
              Should voting be mandatory in national elections?
            </h3>

            <div className="flex gap-4 pt-4">
              <Button className="bg-red-600 hover:bg-red-700">
                Vote Yes
              </Button>

              <Button
                variant="outline"
                className="border-white/30 text-black hover:bg-white/10"
              >
                Vote No
              </Button>
            </div>

          </div>

        </main>

        {/* Right Panel */}
        <aside className="col-span-3 hidden md:block">
          <div className="bg-[#111827] p-6 rounded-2xl border border-white/5 space-y-6">

            <h3 className="font-semibold text-lg">
              Trending Topics
            </h3>

            <div className="space-y-3 text-slate-400 text-sm">
              <p>#TaxReform</p>
              <p>#FuelPriceDebate</p>
              <p>#ElectionPolicy</p>
              <p>#EducationReform</p>
            </div>

          </div>
        </aside>

      </div>
    </div>
  )
}
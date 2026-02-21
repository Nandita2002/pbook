import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="bg-[#0B1120] text-white overflow-hidden">

      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative pt-36 pb-32 overflow-hidden">

        {/* Controlled Background Glow */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-red-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-6xl font-extrabold leading-tight">
              A Structured Platform <br />
              for <span className="text-red-500">Political Engagement</span>
            </h1>

            <p className="text-slate-300 text-lg max-w-lg">
              Participate in verified polls, engage in structured debates,
              and track real-time public sentiment.
            </p>

            <div className="flex gap-5 pt-4">

              {/* Primary CTA */}
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-8 transition"
              >
                Get Started
              </Button>

              {/* Secondary CTA */}
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-black hover:bg-white/10 px-8 transition"
              >
                Explore Polls
              </Button>

            </div>
          </div>

          {/* Glass Poll Preview */}
          <div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">

              <h3 className="text-lg font-semibold mb-6">
                Should fuel prices be reduced nationwide?
              </h3>

              <div className="space-y-5">

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

            </div>
          </div>

        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="py-24 bg-[#111827]">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-16">
            Platform Impact
          </h2>

          <div className="grid md:grid-cols-4 gap-10">

            <div>
              <h3 className="text-5xl font-bold text-red-500">120K+</h3>
              <p className="text-slate-400 mt-3">Registered Users</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-red-500">8.5M+</h3>
              <p className="text-slate-400 mt-3">Votes Cast</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-red-500">950+</h3>
              <p className="text-slate-400 mt-3">Active Polls</p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-red-500">99%</h3>
              <p className="text-slate-400 mt-3">Moderated Discussions</p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-24 bg-[#0B1120]">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-16">
            Why PBook?
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-[#111827] p-8 rounded-2xl border border-white/5 hover:border-red-500/40 transition">
              <h3 className="text-xl font-semibold mb-4 text-red-500">
                Verified Polls
              </h3>
              <p className="text-slate-400">
                Transparent and moderated discussions.
              </p>
            </div>

            <div className="bg-[#111827] p-8 rounded-2xl border border-white/5 hover:border-red-500/40 transition">
              <h3 className="text-xl font-semibold mb-4 text-red-500">
                Real-Time Results
              </h3>
              <p className="text-slate-400">
                Instant participation tracking.
              </p>
            </div>

            <div className="bg-[#111827] p-8 rounded-2xl border border-white/5 hover:border-red-500/40 transition">
              <h3 className="text-xl font-semibold mb-4 text-red-500">
                Structured Debate
              </h3>
              <p className="text-slate-400">
                Focused discussions without chaos.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= PRIVACY & SECURITY ================= */}
      <section className="py-24 bg-[#111827]">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-16">
            Privacy & Vote Integrity
          </h2>

          <div className="grid md:grid-cols-3 gap-10">

            <div className="bg-[#0B1120] p-8 rounded-2xl border border-white/5">
              <h3 className="text-xl font-semibold mb-4 text-red-500">
                Secure Voting
              </h3>
              <p className="text-slate-400">
                Each vote is securely recorded and protected from duplication or manipulation.
              </p>
            </div>

            <div className="bg-[#0B1120] p-8 rounded-2xl border border-white/5">
              <h3 className="text-xl font-semibold mb-4 text-red-500">
                Protected User Identity
              </h3>
              <p className="text-slate-400">
                Participation is safeguarded with strong authentication and privacy controls.
              </p>
            </div>

            <div className="bg-[#0B1120] p-8 rounded-2xl border border-white/5">
              <h3 className="text-xl font-semibold mb-4 text-red-500">
                Moderated Discussions
              </h3>
              <p className="text-slate-400">
                Comments and debates are monitored to ensure respectful engagement.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 bg-red-600 text-center">
        <h2 className="text-4xl font-bold mb-8">
          Join Responsible Political Discussion
        </h2>

        <Button
          size="lg"
          className="bg-white text-red-600 hover:bg-gray-200 px-10"
        >
          Create Free Account
        </Button>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-black py-8 text-center text-slate-500 text-sm">
        © 2026 PBook. All rights reserved.
      </footer>

    </div>
  )
}
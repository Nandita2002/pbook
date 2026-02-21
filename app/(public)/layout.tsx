import Navbar from "@/components/navbar"

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-[#0B1120] text-white min-h-screen flex flex-col">

      <Navbar />

      <main className="flex-1 pt-20">
        {children}
      </main>

      <footer className="bg-black border-t border-white/10 py-8 text-center text-slate-500 text-sm">
        © 2026 PBook. All rights reserved.
      </footer>

    </div>
  )
}
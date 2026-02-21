"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function ProfilePage() {
  const [showName, setShowName] = useState(true)
  const [discoverable, setDiscoverable] = useState(true)
  const [displayName, setDisplayName] = useState("Nandu")

  return (
    <div className="max-w-3xl mx-auto space-y-10">

      <h2 className="text-3xl font-bold">
        Profile Settings
      </h2>

      <div className="bg-[#111827] p-6 rounded-2xl border border-white/5 space-y-6">

        <div>
          <label className="block text-sm text-slate-400 mb-2">
            Profile Display Name
          </label>
          <input
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="w-full bg-white/10 border border-white/20 p-3 rounded-md text-white"
          />
        </div>

        <div className="flex items-center justify-between">
          <span>Show my real name on comments</span>
          <input
            type="checkbox"
            checked={showName}
            onChange={() => setShowName(!showName)}
          />
        </div>

        <div className="flex items-center justify-between">
          <span>Allow others to find my profile</span>
          <input
            type="checkbox"
            checked={discoverable}
            onChange={() => setDiscoverable(!discoverable)}
          />
        </div>

        <Button className="bg-red-600 hover:bg-red-700">
          Save Changes
        </Button>

      </div>
    </div>
  )
}
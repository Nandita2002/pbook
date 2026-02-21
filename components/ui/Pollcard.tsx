"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function PollCard() {
  const [yesVotes, setYesVotes] = useState(62)
  const [noVotes, setNoVotes] = useState(38)
  const [voted, setVoted] = useState(false)
  const [comment, setComment] = useState("")

  const total = yesVotes + noVotes
  const yesPercent = Math.round((yesVotes / total) * 100)
  const noPercent = 100 - yesPercent

  return (
    <div className="bg-[#111827] p-6 rounded-2xl border border-white/10 space-y-6 shadow-md">

      {/* Question */}
      <h3 className="text-lg font-semibold">
        Should fuel prices be reduced nationwide?
      </h3>

      {/* Vote Bars */}
      <div className="space-y-4">

        <div>
          <div className="flex justify-between text-sm text-slate-400 mb-1">
            <span>Yes</span>
            <span>{yesPercent}%</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all"
              style={{ width: `${yesPercent}%` }}
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm text-slate-400 mb-1">
            <span>No</span>
            <span>{noPercent}%</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-2">
            <div
              className="bg-blue-400 h-2 rounded-full transition-all"
              style={{ width: `${noPercent}%` }}
            />
          </div>
        </div>

      </div>

      {/* Vote Buttons */}
      {!voted && (
        <div className="flex gap-4">
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => {
              setYesVotes(yesVotes + 1)
              setVoted(true)
            }}
          >
            Vote Yes
          </Button>

          <Button
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10"
            onClick={() => {
              setNoVotes(noVotes + 1)
              setVoted(true)
            }}
          >
            Vote No
          </Button>
        </div>
      )}

      {/* Comment */}
      <div className="pt-4 border-t border-white/10 space-y-3">
        <Input
          placeholder="Share your thoughts..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
        />
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          Post
        </Button>
      </div>

    </div>
  )
}
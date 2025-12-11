"use client"

import { useState } from "react"
import { Mail } from "lucide-react"

export default function EmailSubscription() {
  const [email, setEmail] = useState("")

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 space-y-6">
      <h3 className="text-2xl font-bold text-gray-900">Email Subscription</h3>
      <p className="text-gray-600">
        Stay updated with the latest news, events, and spiritual guidance from our community.
      </p>
      <form className="space-y-4">
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>
        <button type="submit" className="w-full btn-primary py-3 font-bold">
          Subscribe
        </button>
      </form>
      <p className="text-sm text-gray-500">We respect your privacy. Unsubscribe at any time.</p>
    </div>
  )
}

"use client"

import { useState } from "react"
import MembershipForm from "@/components/membership/membership-form"
import SevaPortal from "@/components/membership/seva-portal"
import MemberBenefits from "@/components/membership/member-benefits"

export default function MembershipPage() {
  const [activeTab, setActiveTab] = useState("membership")

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Membership & Seva</h1>
          <p className="text-blue-100">Join Our Community • Volunteer & Serve (Seva)</p>
        </div>
      </section>

      {/* Tabs */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-4 border-b border-gray-200 mb-8">
          <button
            onClick={() => setActiveTab("membership")}
            className={`px-6 py-4 border-b-2 font-semibold transition-all ${
              activeTab === "membership"
                ? "border-blue-900 text-blue-900"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            New Member Onboarding
          </button>
          <button
            onClick={() => setActiveTab("seva")}
            className={`px-6 py-4 border-b-2 font-semibold transition-all ${
              activeTab === "seva"
                ? "border-blue-900 text-blue-900"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            Seva (Volunteering)
          </button>
          <button
            onClick={() => setActiveTab("benefits")}
            className={`px-6 py-4 border-b-2 font-semibold transition-all ${
              activeTab === "benefits"
                ? "border-blue-900 text-blue-900"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            Member Benefits
          </button>
        </div>

        {/* Tab Content */}
        <div className="space-y-12">
          {activeTab === "membership" && <MembershipForm />}
          {activeTab === "seva" && <SevaPortal />}
          {activeTab === "benefits" && <MemberBenefits />}
        </div>
      </section>
    </main>
  )
}

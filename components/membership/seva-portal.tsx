"use client"

import { useState } from "react"
import { Heart, UtensilsCrossed, Sparkles, Zap, Calendar } from "lucide-react"

export default function SevaPortal() {
  const [selectedSeva, setSelectedSeva] = useState<string | null>(null)

  const sevaRoles = [
    {
      id: "bhojanshala",
      name: "Bhojanshala (Kitchen & Catering)",
      icon: UtensilsCrossed,
      description: "Help prepare and serve meals during events and celebrations",
      commitment: "Flexible - 2-4 times per year",
      skills: "Cooking, Food Preparation, Serving",
      color: "bg-orange-50 border-orange-200",
      color_btn: "bg-orange-100 hover:bg-orange-200 text-orange-900",
    },
    {
      id: "angirachna",
      name: "Angirachna (Temple Decoration)",
      icon: Sparkles,
      description: "Decorate idols and temple spaces for ceremonies and festivals",
      commitment: "Flexible - Special occasions",
      skills: "Artistry, Decoration, Attention to detail",
      color: "bg-purple-50 border-purple-200",
      color_btn: "bg-purple-100 hover:bg-purple-200 text-purple-900",
    },
    {
      id: "logistics",
      name: "Event Logistics & Management",
      icon: Zap,
      description: "Manage parking, shoe arrangements, and event coordination",
      commitment: "2-3 hours per event",
      skills: "Organization, Communication, Problem-solving",
      color: "bg-green-50 border-green-200",
      color_btn: "bg-green-100 hover:bg-green-200 text-green-900",
    },
    {
      id: "community",
      name: "Community Care & Support",
      icon: Heart,
      description: "Visit elderly members, provide support, mentoring",
      commitment: "Weekly or bi-weekly",
      skills: "Compassion, Communication, Reliability",
      color: "bg-red-50 border-red-200",
      color_btn: "bg-red-100 hover:bg-red-200 text-red-900",
    },
  ]

  return (
    <div className="space-y-12">
      {/* Info Banner */}
      <div className="bg-green-50 border-l-4 border-green-900 p-6 rounded-lg space-y-2">
        <p className="text-green-900 font-semibold flex items-center gap-2">
          <Heart className="w-5 h-5" fill="currentColor" />
          Seva - Service with the Heart
        </p>
        <p className="text-sm text-green-900">
          Seva is the cornerstone of Jain community life. Choose a role that resonates with your skills and schedule.
        </p>
      </div>

      {/* Seva Roles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sevaRoles.map((role) => {
          const Icon = role.icon
          return (
            <div
              key={role.id}
              onClick={() => setSelectedSeva(selectedSeva === role.id ? null : role.id)}
              className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                selectedSeva === role.id ? `${role.color} border-current shadow-lg` : `${role.color}`
              }`}
            >
              <div className="flex items-start gap-4 mb-4">
                <Icon className="w-8 h-8 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-lg font-bold">{role.name}</h3>
                  <p className="text-sm opacity-90 mt-1">{role.description}</p>
                </div>
              </div>

              {selectedSeva === role.id && (
                <div className="space-y-4 mt-6 pt-6 border-t border-current border-opacity-30">
                  <div>
                    <h4 className="font-semibold mb-2">Time Commitment</h4>
                    <p className="text-sm">{role.commitment}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Required Skills</h4>
                    <p className="text-sm">{role.skills}</p>
                  </div>
                  <button className={`w-full py-2 rounded-lg font-semibold transition-colors ${role.color_btn}`}>
                    Sign Up for This Seva
                  </button>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Seva Schedule */}
      <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <Calendar className="w-6 h-6 text-orange-500" />
          Upcoming Seva Opportunities
        </h2>

        <div className="space-y-4">
          {[
            {
              event: "Paryushan Preparations",
              date: "August 15-30, 2025",
              roles: ["Angirachna", "Bhojanshala"],
            },
            { event: "Mahaveer Jayanti Celebration", date: "March 30, 2025", roles: ["Event Logistics", "Catering"] },
            {
              event: "Regular Monthly Pujas",
              date: "Every Sunday",
              roles: ["Community Care", "Temple Support"],
            },
          ].map((opp, idx) => (
            <div key={idx} className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded-lg">
              <h4 className="font-bold text-gray-900">{opp.event}</h4>
              <p className="text-sm text-gray-600 mt-1">{opp.date}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {opp.roles.map((role) => (
                  <span key={role} className="text-xs bg-orange-200 text-orange-900 px-2 py-1 rounded-full font-medium">
                    {role}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

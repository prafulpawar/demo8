"use client"

import { useState } from "react"
import { Mail, Phone, Users, Briefcase } from "lucide-react"
import Image from "next/image"

export default function LeadersPage() {
  const [selectedDept, setSelectedDept] = useState("board")

  const leadership = {
    board: [
      {
        id: 1,
        name: "Rajesh Patel",
        title: "President",
        role: "Board of Trustees",
        image: "/leader-1.jpg",
        email: "president@cjcc.org",
        phone: "(416) 555-0001",
        bio: "20+ years of community service and spiritual dedication",
      },
      {
        id: 2,
        name: "Priya Mehta",
        title: "Vice President",
        role: "Board of Trustees",
        image: "/leader-2.jpg",
        email: "vicepresident@cjcc.org",
        phone: "(416) 555-0002",
        bio: "Education committee lead and pathshala coordinator",
      },
      {
        id: 3,
        name: "Arun Desai",
        title: "Treasurer",
        role: "Board of Trustees",
        image: "/leader-3.jpg",
        email: "treasurer@cjcc.org",
        phone: "(416) 555-0003",
        bio: "Financial management and strategic planning expert",
      },
      {
        id: 4,
        name: "Neha Jain",
        title: "Secretary",
        role: "Board of Trustees",
        image: "/leader-4.jpg",
        email: "secretary@cjcc.org",
        phone: "(416) 555-0004",
        bio: "Community relations specialist and outreach coordinator",
      },
    ],
    executive: [
      {
        id: 5,
        name: "Dr. Ashok Kumar",
        title: "Education Director",
        role: "Executive Committee",
        image: "/leader-5.jpg",
        email: "education@cjcc.org",
        phone: "(416) 555-0005",
        bio: "Pathshala curriculum oversight and youth programs",
      },
      {
        id: 6,
        name: "Kavita Singh",
        title: "Facilities Manager",
        role: "Executive Committee",
        image: "/leader-6.jpg",
        email: "facilities@cjcc.org",
        phone: "(416) 555-0006",
        bio: "Building maintenance, events coordination, and operations",
      },
      {
        id: 7,
        name: "Harish Patel",
        title: "Community Events Lead",
        role: "Executive Committee",
        image: "/leader-7.jpg",
        email: "events@cjcc.org",
        phone: "(416) 555-0007",
        bio: "Festival coordination, cultural programs, and celebrations",
      },
      {
        id: 8,
        name: "Anita Kapoor",
        title: "Spiritual Programs Coordinator",
        role: "Executive Committee",
        image: "/leader-8.jpg",
        email: "spiritual@cjcc.org",
        phone: "(416) 555-0008",
        bio: "Religious ceremonies, spiritual guidance, and rituals",
      },
    ],
  }

  const departments = [
    { id: "board", label: "Board of Trustees", icon: Users },
    { id: "executive", label: "Executive Committee", icon: Briefcase },
  ]

  const selectedLeaders = leadership[selectedDept as keyof typeof leadership]

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Our Leaders</h1>
          <p className="text-blue-100">Dedicated to Serving the Jain Community - Sangh Board</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 py-12 space-y-12">
        {/* Department Tabs */}
        <div className="flex gap-4 border-b border-gray-200 overflow-x-auto">
          {departments.map((dept) => {
            const Icon = dept.icon
            return (
              <button
                key={dept.id}
                onClick={() => setSelectedDept(dept.id)}
                className={`flex items-center gap-2 px-6 py-4 border-b-2 font-semibold transition-all whitespace-nowrap ${
                  selectedDept === dept.id
                    ? "border-blue-900 text-blue-900"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                <Icon className="w-5 h-5" />
                {dept.label}
              </button>
            )
          })}
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {selectedLeaders.map((leader) => (
            <div
              key={leader.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="h-56 relative bg-gray-300 overflow-hidden">
                <Image
                  src={leader.image || "/placeholder.svg"}
                  alt={leader.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{leader.name}</h3>
                  <p className="text-lg font-semibold text-orange-500 mb-1">{leader.title}</p>
                  <p className="text-sm text-gray-600 mb-2">{leader.role}</p>
                  <p className="text-sm text-gray-700 italic">"{leader.bio}"</p>
                </div>

                {/* Contact */}
                <div className="space-y-2 pt-4 border-t">
                  <a
                    href={`mailto:${leader.email}`}
                    className="flex items-center gap-3 text-gray-700 hover:text-blue-900 transition-colors"
                  >
                    <Mail className="w-5 h-5 flex-shrink-0 text-orange-500" />
                    <span className="text-sm">{leader.email}</span>
                  </a>
                  <a
                    href={`tel:${leader.phone}`}
                    className="flex items-center gap-3 text-gray-700 hover:text-blue-900 transition-colors"
                  >
                    <Phone className="w-5 h-5 flex-shrink-0 text-orange-500" />
                    <span className="text-sm">{leader.phone}</span>
                  </a>
                </div>

                {/* Quick Actions */}
                <div className="flex gap-3 pt-4">
                  <button className="flex-1 bg-blue-50 text-blue-900 py-2 rounded-lg font-semibold hover:bg-blue-100 transition-colors text-sm">
                    Contact
                  </button>
                  <button className="flex-1 bg-orange-50 text-orange-900 py-2 rounded-lg font-semibold hover:bg-orange-100 transition-colors text-sm">
                    Schedule Meeting
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

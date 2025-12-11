"use client"

import { useState } from "react"
import { Search, Calendar, ArrowRight } from "lucide-react"

export default function NewsEventsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const newsItems = [
    {
      id: 1,
      title: "ICA NY General Body Meeting - Sunday December 14th, 2025",
      category: "announcement",
      date: "December 14, 2025",
      excerpt:
        "We would like to cordially invite all Jain Center of America Life Members to attend the upcoming Annual General Body Meeting...",
      image: "url('/community-meeting-gathering.jpg')",
      content:
        "We would like to cordially invite all Jain Center of America Life Members to attend the upcoming Annual General Body Meeting scheduled for Sunday December 14th, 2025. This is an important occasion where members will have the opportunity to review the organization's activities, discuss future plans, and participate in electing board members. Light refreshments will be served. Agenda and registration details will be sent to all members via email.",
    },
    {
      id: 2,
      title: "Paryushan & Das Lakshan 2025 Celebration",
      category: "festival",
      date: "August-September 2025",
      excerpt: "Join us for the most sacred period in the Jain calendar. Ten days of spiritual reflection and penance.",
      image: "url('/religious-festival-celebration.jpg')",
      content:
        "It is with great pleasure we welcome all of you at CJCC during Paryushan & Das Lakshan celebrations. This sacred period includes daily Vyakhyans (spiritual discourses), Samvatsari Pratikraman, fasting opportunities, and community meals. Complete schedule and details will be posted on the calendar section.",
    },
    {
      id: 3,
      title: "Mahaveer Jayanti Grand Celebration",
      category: "festival",
      date: "March 30, 2025",
      excerpt: "Celebrate the birthday of Lord Mahavir with prayers, meals, and community festivities.",
      image: "url('/festival-celebration-dancing.jpg')",
      content:
        "BOT and EC are pleased to announce the grand celebration of Mahaveer Jayanti. Events include early morning prayers, a full-day feast (Bhojanshala), cultural performances, and special discourses from visiting monks and nuns.",
    },
    {
      id: 4,
      title: "New Pathshala Session Begins",
      category: "education",
      date: "September 2025",
      excerpt: "Register your children for our comprehensive religious and cultural education program.",
      image: "url('/diverse-people-gathering-community-celebration.jpg')",
      content:
        "Our Pathshala program welcomes children ages 5-18 for comprehensive Jain religious and cultural education. Classes cover Jain philosophy, Sanskrit, arts, and practices. Experienced teachers and mentors guide students through age-appropriate curricula. Enrollment is open for the fall session.",
    },
  ]

  const categories = [
    { id: "all", label: "All News" },
    { id: "announcement", label: "Announcements" },
    { id: "festival", label: "Festivals" },
    { id: "education", label: "Education" },
    { id: "community", label: "Community" },
  ]

  const filtered = newsItems.filter(
    (item) =>
      (selectedCategory === "all" || item.category === selectedCategory) &&
      (item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">News & Events</h1>
          <p className="text-blue-100">Stay Updated with Community Activities</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        {/* Search & Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search news and events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none"
            />
          </div>

          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === cat.id
                    ? "bg-blue-900 text-white"
                    : "bg-white border-2 border-gray-300 text-gray-700 hover:border-blue-900"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* News List */}
        <div className="space-y-6">
          {filtered.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-6 p-6 flex-col sm:flex-row">
                {/* Image */}
                <div
                  className="w-full sm:w-48 h-40 rounded-lg flex-shrink-0 bg-cover bg-center"
                  style={{ backgroundImage: item.image }}
                />

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="bg-orange-100 text-orange-900 text-xs font-bold px-3 py-1 rounded-full">
                      {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      {item.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 hover:text-blue-900 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 line-clamp-2">{item.excerpt}</p>

                  <button className="inline-flex items-center gap-2 text-blue-900 font-semibold hover:gap-3 transition-all">
                    Read More <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="bg-white rounded-lg p-12 text-center">
            <p className="text-gray-600 text-lg">No news items found. Try adjusting your search or filters.</p>
          </div>
        )}
      </section>
    </main>
  )
}

"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Search, X } from "lucide-react"
import Image from "next/image"

export default function NewsEvents() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null)

  const allEvents = [
    {
      id: 1,
      title: "ICA NY General Body Meeting - Sunday December 14th, 2025",
      description:
        "We would like to cordially invite all Jain Center of America Life Members to attend the upcoming Annual General Body Meeting...",
      fullDescription:
        "We would like to cordially invite all Jain Center of America Life Members to attend the upcoming Annual General Body Meeting. This is an important opportunity to discuss the year's accomplishments, upcoming plans, and community initiatives. All members are encouraged to participate and share their insights. Light refreshments will be served after the meeting. Registration is recommended at info@cjcc.org",
      image: "/community-meeting-gathering.jpg",
      date: "December 14, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Main Hall, CJCC",
      category: "Meeting",
    },
    {
      id: 2,
      title: "Paryushan & Das Lakshan 2025",
      description:
        "It is with great pleasure we would like to welcome all of you at CJCC during Paryushan & Das Lakshan celebrations...",
      fullDescription:
        "It is with great pleasure we would like to welcome all of you at CJCC during the most sacred festival of Paryushan & Das Lakshan celebrations. This is an 8-10 day period of intense spiritual practice and reflection. We will have daily prayer sessions, scripture recitations, and spiritual discourses. Special meals will be served each evening. This is the perfect time for personal reflection and strengthening our community bonds. Join us for this magnificent celebration of faith.",
      image: "/religious-festival-celebration.jpg",
      date: "August-September 2025",
      time: "6:00 AM - 8:00 PM",
      location: "Main Temple & Pathshala",
      category: "Festival",
    },
    {
      id: 3,
      title: "Mahaveer Jayanti Festival",
      description:
        "BOT and EC are pleased to announce that we plan to celebrate Mahaveer Swami Jayanti with grand celebrations...",
      fullDescription:
        "BOT and EC are pleased to announce that we plan to celebrate Mahaveer Swami Jayanti, the birth anniversary of Lord Mahavira with grand celebrations. This auspicious day marks the beginning of Jainism and is celebrated with great reverence. We will have special pujas, cultural programs, youth performances, and community dinner. The day will start with early morning prayers and conclude with a grand feast. Volunteers are needed for setup and coordination.",
      image: "/festival-celebration-dancing.jpg",
      date: "March 30, 2025",
      time: "6:00 AM - 10:00 PM",
      location: "Main Temple Complex",
      category: "Festival",
    },
    {
      id: 4,
      title: "Pathshala Classes Resume",
      description: "New semester begins with expanded curriculum and activities for all age groups...",
      fullDescription:
        "Our Pathshala Classes are resuming with an expanded curriculum tailored for different age groups. We offer classes for kids aged 4-18, covering Jain philosophy, Sanskrit, music, and cultural traditions. New teachers have been recruited and the curriculum has been updated to include interactive learning methods. Registration is open now at reduced rates for early birds. Come join our vibrant learning community!",
      image: "/jain-temple-interior.jpg",
      date: "January 5, 2025",
      time: "10:00 AM - 2:00 PM",
      location: "Pathshala Wing",
      category: "Education",
    },
    {
      id: 5,
      title: "Community Cleanup Drive",
      description: "Join us for a neighborhood cleanup initiative and community service...",
      fullDescription:
        "We are organizing a community cleanup drive to beautify our neighborhood and promote environmental consciousness. All volunteers are welcome - children can participate with parental supervision. Tools and snacks will be provided. This is a wonderful opportunity to practice Aparigraha (non-attachment) and serve the community. Meet at the temple parking lot.",
      image: "/diverse-people-gathering-community-celebration.jpg",
      date: "February 15, 2025",
      time: "9:00 AM - 12:00 PM",
      location: "Neighborhood Streets",
      category: "Seva",
    },
    {
      id: 6,
      title: "Youth Cultural Night",
      description: "Showcase talents and celebrate Jain culture with music, dance, and drama...",
      fullDescription:
        "Our youth cultural night is an annual celebration showcasing the talents of our young members. This year features Kathak classical dance, contemporary fusion performances, Gujarati folk dances, and English drama. It's a wonderful platform for self-expression and celebrating our cultural heritage. Parents are encouraged to attend and cheer our performers. Dinner will be served after the show.",
      image: "/altar-worship.jpg",
      date: "May 10, 2025",
      time: "6:00 PM - 9:00 PM",
      location: "Main Hall",
      category: "Cultural",
    },
  ]

  const filteredEvents = allEvents.filter(
    (event) =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const displayedEvents = filteredEvents.slice(0, 3)
  const selectedEventData = selectedEvent !== null ? allEvents.find((e) => e.id === selectedEvent) : null

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-bold text-gray-900">News & Events</h2>
          <Link
            href="/news-events"
            className="inline-flex items-center gap-2 text-blue-900 font-semibold hover:gap-3 transition-all"
          >
            View All <ArrowRight size={20} />
          </Link>
        </div>

        <div className="mb-8 relative">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search events by title, category, or keyword..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
          />
        </div>

        {filteredEvents.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No events found matching your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {displayedEvents.map((event) => (
              <article
                key={event.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow card-hover"
              >
                <div className="h-40 relative">
                  <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                  <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {event.category}
                  </span>
                </div>
                <div className="p-6 space-y-4">
                  <time className="text-sm text-orange-500 font-semibold">{event.date}</time>
                  <h3 className="text-lg font-bold text-gray-900 line-clamp-2">{event.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-3">{event.description}</p>
                  <button
                    onClick={() => setSelectedEvent(event.id)}
                    className="text-blue-900 font-semibold text-sm hover:text-blue-700 transition-colors"
                  >
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {selectedEventData && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto">
            {/* Close button */}
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full z-10"
            >
              <X size={24} />
            </button>

            {/* Image */}
            <div className="h-64 relative">
              <Image
                src={selectedEventData.image || "/placeholder.svg"}
                alt={selectedEventData.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-8 space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {selectedEventData.category}
                  </span>
                  <span className="text-sm text-gray-600">{selectedEventData.date}</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedEventData.title}</h2>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-xs text-blue-600 font-semibold mb-1">TIME</p>
                  <p className="font-semibold text-gray-900">{selectedEventData.time}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-xs text-blue-600 font-semibold mb-1">LOCATION</p>
                  <p className="font-semibold text-gray-900">{selectedEventData.location}</p>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">{selectedEventData.fullDescription}</p>

              <button
                onClick={() => setSelectedEvent(null)}
                className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

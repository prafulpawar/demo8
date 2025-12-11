"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, RotateCw } from "lucide-react"
import Image from "next/image"

export default function VirtualTourPage() {
  const [currentTour, setCurrentTour] = useState(0)
  const [autoPlay, setAutoPlay] = useState(false)

  const tours = [
    {
      id: "temple",
      name: "Main Temple",
      description: "Experience the sacred sanctum with stunning 360° views",
      image: "/jain-temple-interior.jpg",
      details:
        "The main temple is the spiritual heart of our community center, featuring traditional Jain architecture and sacred idols.",
    },
    {
      id: "lobby",
      name: "Temple Lobby & Entrance",
      description: "Welcome to our welcoming community space",
      image: "/temple-lobby-entrance.jpg",
      details:
        "The lobby serves as the gateway to our temple, featuring beautiful traditional design and hospitality for all visitors.",
    },
    {
      id: "mahavir",
      name: "Mahavir Temple Chamber",
      description: "Dedicated space for Lord Mahavira worship",
      image: "/altar-worship.jpg",
      details: "A dedicated chamber with beautiful altar arrangements for peaceful prayer and meditation.",
    },
    {
      id: "upashray",
      name: "Upashray Lecture Hall",
      description: "Our community education and gathering space",
      image: "/lecture-hall.png",
      details: "Modern facility equipped for spiritual discourses, educational programs, and community events.",
    },
    {
      id: "adinathi",
      name: "Adinathi Temple",
      description: "Sacred space dedicated to the first Tirthankara",
      image: "/temple-hall.jpg",
      details: "A serene chamber dedicated to Lord Adinatha with intricate decorations and peaceful ambiance.",
    },
    {
      id: "pathshala",
      name: "Pathshala Wing",
      description: "Our educational center for spiritual learning",
      image: "/jain-ceremony.jpg",
      details: "Dedicated space for Pathshala classes and spiritual education for all age groups.",
    },
  ]

  const nextTour = () => setCurrentTour((prev) => (prev + 1) % tours.length)
  const prevTour = () => setCurrentTour((prev) => (prev - 1 + tours.length) % tours.length)

  return (
    <main className="min-h-screen bg-gray-900 text-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Google 360° Virtual Tour</h1>
          <p className="text-gray-300">Explore our sacred temple spaces from anywhere in the world</p>
        </div>
      </section>

      {/* Main Tour Display */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Viewer */}
          <div className="lg:col-span-3">
            <div className="relative bg-gray-800 rounded-lg overflow-hidden h-96 md:h-[500px] mb-6">
              <Image
                src={tours[currentTour].image || "/placeholder.svg"}
                alt={tours[currentTour].name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>

              {/* Navigation Buttons */}
              <button
                onClick={prevTour}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-4 rounded-full transition-all"
                aria-label="Previous tour"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                onClick={nextTour}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-4 rounded-full transition-all"
                aria-label="Next tour"
              >
                <ChevronRight size={28} />
              </button>

              {/* Location Label */}
              <div className="absolute bottom-6 left-6 bg-black bg-opacity-70 px-6 py-3 rounded-lg">
                <p className="font-bold text-lg">{tours[currentTour].name}</p>
                <p className="text-sm text-gray-300">{tours[currentTour].description}</p>
              </div>

              {/* Auto-play Toggle */}
              <button
                onClick={() => setAutoPlay(!autoPlay)}
                className={`absolute bottom-6 right-6 p-3 rounded-full transition-all ${
                  autoPlay ? "bg-orange-500 hover:bg-orange-600" : "bg-gray-700 hover:bg-gray-600"
                }`}
              >
                <RotateCw size={20} className={autoPlay ? "animate-spin" : ""} />
              </button>
            </div>

            {/* Details Section */}
            <div className="bg-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-3">{tours[currentTour].name}</h2>
              <p className="text-gray-300 mb-6">{tours[currentTour].details}</p>
              <div className="flex gap-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors">
                  Explore Room
                </button>
                <button className="bg-gray-700 hover:bg-gray-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar - Tour List */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-lg p-6 space-y-4 sticky top-20">
              <h3 className="text-xl font-bold mb-6">Tour Locations</h3>
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {tours.map((tour, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTour(idx)}
                    className={`w-full text-left p-4 rounded-lg transition-all ${
                      idx === currentTour
                        ? "bg-orange-500 text-white shadow-lg scale-105"
                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                    }`}
                  >
                    <div className="font-semibold text-sm">{tour.name}</div>
                    <div className="text-xs mt-1 opacity-75">{tour.description}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Strip */}
        <div className="mt-8">
          <h3 className="text-lg font-bold mb-4">Quick Navigation</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {tours.map((tour, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentTour(idx)}
                className={`rounded-lg overflow-hidden h-24 relative group transition-all border-2 ${
                  idx === currentTour ? "border-orange-500 scale-105" : "border-gray-700 opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={tour.image || "/placeholder.svg"}
                  alt={tour.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-0 transition-all flex items-center justify-center">
                  <span className="text-white text-xs font-bold text-center px-2">{tour.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Tour Counter */}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            Location {currentTour + 1} of {tours.length}
          </p>
        </div>
      </section>

      {/* Additional Info */}
      <section className="bg-gray-800 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h3 className="text-xl font-bold">How to Use</h3>
              <p className="text-gray-300 text-sm">
                Use the navigation arrows or click locations on the sidebar to explore different areas of our temple.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold">Desktop Experience</h3>
              <p className="text-gray-300 text-sm">
                For the best 360° experience, use a modern web browser on desktop and drag to rotate the view.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-bold">Visit Us In Person</h3>
              <p className="text-gray-300 text-sm">
                Experience the beauty in person. Visit our temple at 123 Bloor Street East, Toronto.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

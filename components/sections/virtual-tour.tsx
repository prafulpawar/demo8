"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function VirtualTour() {
  const [currentTour, setCurrentTour] = useState(0)

  const tours = [
    { name: "JCA Temple", image: "/jain-temple-interior.jpg" },
    { name: "JCA Lobby", image: "/temple-lobby-entrance.jpg" },
    { name: "Mahavir Swami", image: "/altar-worship.jpg" },
    { name: "Upashray Lecture Hall", image: "/lecture-hall.png" },
    { name: "Adinathi Temple", image: "/temple-hall.jpg" },
  ]

  const nextTour = () => setCurrentTour((prev) => (prev + 1) % tours.length)
  const prevTour = () => setCurrentTour((prev) => (prev - 1 + tours.length) % tours.length)

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Google 360° Virtual Tour</h2>

        <div className="relative bg-gray-800 rounded-lg overflow-hidden h-96 md:h-96 mb-8">
          <Image
            src={tours[currentTour].image || "/placeholder.svg"}
            alt={tours[currentTour].name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>

          {/* Navigation */}
          <button
            onClick={prevTour}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-all"
            aria-label="Previous tour"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextTour}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-all"
            aria-label="Next tour"
          >
            <ChevronRight size={24} />
          </button>

          {/* Location Label */}
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 px-4 py-2 rounded-lg">
            <p className="font-semibold">{tours[currentTour].name}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {tours.map((tour, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentTour(idx)}
              className={`rounded-lg overflow-hidden h-20 transition-all border-2 relative ${
                idx === currentTour ? "border-orange-500 scale-105" : "border-gray-700 opacity-70 hover:opacity-100"
              }`}
            >
              <Image src={tour.image || "/placeholder.svg"} alt={tour.name} fill className="object-cover" />
              <span className="sr-only">{tour.name}</span>
            </button>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/virtual-tour"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Start Full Virtual Tour
          </Link>
        </div>
      </div>
    </section>
  )
}

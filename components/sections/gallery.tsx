"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const galleries = [
    { name: "JCA NY", image: "/jain-ceremony.jpg" },
    { name: "Mahaveer Jayanti", image: "/mahaveer-jayanti-celebration.jpg" },
    { name: "Temple Pratishtha", image: "/temple-festival.jpg" },
  ]

  const next = () => setCurrentIndex((prev) => (prev + 1) % galleries.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + galleries.length) % galleries.length)

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-gray-900">Gallery</h2>

        <div className="relative mb-12">
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-900 bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-all"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="rounded-lg h-96 bg-cover bg-center relative overflow-hidden">
            <Image
              src={galleries[currentIndex].image || "/placeholder.svg"}
              alt={galleries[currentIndex].name}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-900 bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-all"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          {galleries.map((gallery, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`rounded-lg h-24 transition-all border-4 relative ${
                idx === currentIndex ? "border-orange-500" : "border-gray-200"
              }`}
            >
              <Image
                src={gallery.image || "/placeholder.svg"}
                alt={gallery.name}
                fill
                className="object-cover rounded-lg"
              />
              <span className="sr-only">{gallery.name}</span>
            </button>
          ))}
        </div>

        <div className="text-center space-y-4">
          <h3 className="text-xl font-semibold">{galleries[currentIndex].name}</h3>
          <Link
            href="/gallery"
            className="inline-block bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800 font-semibold transition-colors"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  )
}

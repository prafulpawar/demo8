"use client"

import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Canadian Jain Community Centre",
      subtitle: "Ithaca Street, Toronto Temple - Unity in Diversity",
      image: "/jain-temple-exterior-with-dome-and-architecture.jpg",
    },
    {
      title: "Spiritual Sanctuary",
      subtitle: "Experience the Sanctity of Our Sacred Derasar",
      image: "/meditation-prayer-spiritual-worship.jpg",
    },
    {
      title: "Community Connection",
      subtitle: "Join Us in Celebrating Faith, Culture, and Togetherness",
      image: "/diverse-people-gathering-community-celebration.jpg",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gray-900">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={idx === 0}
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-white text-center px-4">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-balance">{slides[currentSlide].title}</h1>
          <p className="text-xl md:text-2xl text-blue-100">{slides[currentSlide].subtitle}</p>
          <Link
            href="/virtual-tour"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            <Play size={20} fill="currentColor" />
            Start Virtual Tour
          </Link>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-all"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all ${
              idx === currentSlide ? "bg-white w-8" : "bg-white bg-opacity-50 hover:bg-opacity-75"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

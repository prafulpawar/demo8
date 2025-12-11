"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import Image from "next/image"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [selectedGallery, setSelectedGallery] = useState<string | null>(null)

  const galleries = [
    {
      id: "jca-ny",
      title: "JCA NY Temple",
      description: "Beautiful moments from our main temple sanctuary",
      images: [
        { url: "/jain-ceremony.jpg", caption: "Traditional Jain Ceremony" },
        { url: "/jain-temple-interior.jpg", caption: "Temple Interior" },
        { url: "/altar-worship.jpg", caption: "Altar Worship" },
        { url: "/temple-lobby-entrance.jpg", caption: "Temple Entrance" },
        { url: "/meditation-prayer-spiritual-worship.jpg", caption: "Prayer Session" },
      ],
    },
    {
      id: "festivals",
      title: "Mahaveer Jayanti Celebrations",
      description: "Grand celebrations of Lord Mahavira's birthday",
      images: [
        { url: "/mahaveer-jayanti-celebration.jpg", caption: "Main Celebration" },
        { url: "/festival-celebration-dancing.jpg", caption: "Cultural Dance" },
        { url: "/temple-festival.jpg", caption: "Festival Decorations" },
        { url: "/religious-festival-celebration.jpg", caption: "Religious Gathering" },
      ],
    },
    {
      id: "community",
      title: "Community Events",
      description: "Unity and togetherness in our community",
      images: [
        { url: "/community-meeting-gathering.jpg", caption: "Community Meeting" },
        { url: "/diverse-people-gathering-community-celebration.jpg", caption: "Diverse Community" },
      ],
    },
  ]

  const allImages = galleries.flatMap((g) =>
    g.images.map((img) => ({
      ...img,
      galleryId: g.id,
    })),
  )

  const currentGallery = galleries.find((g) => g.id === selectedGallery)
  const currentImages = currentGallery ? currentGallery.images : []

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % allImages.length)
    }
  }

  const handlePrev = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + allImages.length) % allImages.length)
    }
  }

  const openGalleryImage = (galleryId: string, imageIdx: number) => {
    const globalIndex = allImages.findIndex(
      (img) => img.galleryId === galleryId && currentGallery?.images[imageIdx] === img,
    )
    setSelectedGallery(galleryId)
    setSelectedImage(globalIndex)
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Photo Gallery</h1>
          <p className="text-blue-100">Moments from Our Community - Capture the Spirit</p>
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-4 py-12 space-y-16">
        {galleries.map((gallery) => (
          <div key={gallery.id} className="space-y-6">
            <div className="border-l-4 border-orange-500 pl-4">
              <h2 className="text-3xl font-bold text-gray-900">{gallery.title}</h2>
              <p className="text-gray-600 mt-2">{gallery.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {gallery.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => openGalleryImage(gallery.id, idx)}
                  className="h-48 rounded-lg overflow-hidden group cursor-pointer relative"
                >
                  <Image
                    src={img.url || "/placeholder.svg"}
                    alt={img.caption}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all flex items-center justify-center">
                    <ChevronRight className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all p-3">
                    <p className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100">{img.caption}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-colors z-50"
          >
            <X size={32} />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white hover:bg-opacity-20 rounded-full p-3 transition-colors"
          >
            <ChevronLeft size={32} />
          </button>

          <div className="relative w-full max-w-4xl flex items-center justify-center">
            <Image
              src={allImages[selectedImage]?.url || "/placeholder.svg"}
              alt={allImages[selectedImage]?.caption || "Gallery image"}
              width={1200}
              height={800}
              className="rounded-lg object-contain max-h-96"
              priority
            />
          </div>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white hover:bg-opacity-20 rounded-full p-3 transition-colors"
          >
            <ChevronRight size={32} />
          </button>

          {/* Image Counter and Caption */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center">
            <p className="text-sm font-semibold">{allImages[selectedImage]?.caption}</p>
            <p className="text-xs text-gray-300 mt-1">
              {selectedImage + 1} / {allImages.length}
            </p>
          </div>

          {/* Thumbnail Strip */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 bg-black bg-opacity-50 p-3 rounded-lg max-w-2xl overflow-x-auto">
            {allImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`flex-shrink-0 w-12 h-12 rounded overflow-hidden transition-all border-2 ${
                  idx === selectedImage ? "border-orange-500 scale-110" : "border-gray-500 opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={img.url || "/placeholder.svg"}
                  alt={img.caption}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </main>
  )
}

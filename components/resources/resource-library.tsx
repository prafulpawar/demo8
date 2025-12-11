"use client"

import { useState } from "react"
import { Play, FileText, MessageCircle, Volume2, Search, Star } from "lucide-react"

export default function ResourceLibrary() {
  const [selectedLevel, setSelectedLevel] = useState("beginner")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedResource, setSelectedResource] = useState<number | null>(null)

  const resources = {
    beginner: [
      {
        id: 1,
        type: "audio",
        title: "Jain Principles for Beginners",
        description: "Introduction to the Five Great Vows and basic Jain philosophy",
        duration: "12 min",
        level: "Beginner",
        featured: true,
        fullDescription:
          "A comprehensive introduction to Jainism covering the fundamental principles, the Five Great Vows (Mahavratas), and how to apply Jain teachings in daily life.",
      },
      {
        id: 2,
        type: "video",
        title: "Understanding Ahimsa (Non-Violence)",
        description: "How to practice non-violence in daily life",
        duration: "18 min",
        level: "Beginner",
        featured: false,
        fullDescription:
          "Learn about Ahimsa, the principle of non-violence that lies at the heart of Jainism, and practical ways to incorporate it into your everyday activities.",
      },
      {
        id: 3,
        type: "document",
        title: "Basic Jain Mantras Guide",
        description: "Downloadable guide with transliteration and meanings",
        level: "Beginner",
        featured: false,
        fullDescription:
          "A complete guide to essential Jain mantras with transliteration, pronunciation guides, and detailed explanations of their spiritual significance.",
      },
      {
        id: 4,
        type: "video",
        title: "What is a Jain? Identity and Practice",
        description: "Overview of Jain identity and spiritual practice",
        duration: "22 min",
        level: "Beginner",
        featured: false,
        fullDescription:
          "An overview of what it means to be Jain, covering history, basic beliefs, and the practical application of Jain principles in modern life.",
      },
    ],
    intermediate: [
      {
        id: 5,
        type: "audio",
        title: "Stavan - Sacred Hymns Collection",
        description: "Complete collection of Stavans with lyrics synchronization",
        duration: "45 min",
        level: "Intermediate",
        featured: true,
        fullDescription:
          "A comprehensive collection of traditional Jain Stavans (hymns) with synchronized lyrics in both Sanskrit and English, perfect for daily recitation.",
      },
      {
        id: 6,
        type: "video",
        title: "Pratikraman Ceremony Explained",
        description: "Detailed guide for performing Samvatsari Pratikraman",
        duration: "30 min",
        level: "Intermediate",
        featured: false,
        fullDescription:
          "Step-by-step guidance on performing Pratikraman, the ritual of asking forgiveness, with detailed explanations of each step and spiritual significance.",
      },
      {
        id: 7,
        type: "document",
        title: "Anuprekshas - 12 Reflections",
        description: "Detailed study of the 12 spiritual reflections",
        level: "Intermediate",
        featured: false,
        fullDescription:
          "A comprehensive guide to the 12 Anuprekshas (reflections) used in Jain meditation practice, with explanations and practical meditation techniques.",
      },
      {
        id: 8,
        type: "audio",
        title: "Bhakti Hymns & Devotional Songs",
        description: "Traditional devotional music collection",
        duration: "60 min",
        level: "Intermediate",
        featured: false,
        fullDescription:
          "A collection of beautiful devotional hymns and bhakti songs that deepen spiritual connection and enhance meditation practices.",
      },
    ],
    advanced: [
      {
        id: 9,
        type: "video",
        title: "Advanced Jain Philosophy Discourse",
        description: "Deep dive into Jain metaphysics and karma theory",
        duration: "90 min",
        level: "Advanced",
        featured: true,
        fullDescription:
          "An advanced exploration of Jain philosophy including detailed discussions of karma, reincarnation, and the path to liberation from an academic and spiritual perspective.",
      },
      {
        id: 10,
        type: "document",
        title: "Tattvartha Sutra Commentary",
        description: "Scholarly interpretation of core Jain texts",
        level: "Advanced",
        featured: false,
        fullDescription:
          "A detailed scholarly commentary on the Tattvartha Sutra, one of the most important texts in Jainism, with philosophical analysis and interpretations.",
      },
      {
        id: 11,
        type: "audio",
        title: "Samaysara - Soul's Nature Discourse",
        description: "Detailed explanation of the nature of the soul",
        duration: "75 min",
        level: "Advanced",
        featured: false,
        fullDescription:
          "An in-depth discourse on Samaysara, exploring the true nature of the soul (Jiva), consciousness, and the path to spiritual liberation.",
      },
      {
        id: 12,
        type: "document",
        title: "Moksha Philosophy & Liberation",
        description: "Comprehensive guide to achieving liberation in Jainism",
        level: "Advanced",
        featured: false,
        fullDescription:
          "A thorough exploration of the Jain concept of Moksha (liberation), including the stages of spiritual development and methods for achieving final liberation.",
      },
    ],
  }

  const typeIcons = {
    audio: <Volume2 className="w-5 h-5" />,
    video: <Play className="w-5 h-5" />,
    document: <FileText className="w-5 h-5" />,
    forum: <MessageCircle className="w-5 h-5" />,
  }

  const levels = [
    { id: "beginner", label: "Beginner/Kids" },
    { id: "intermediate", label: "Intermediate" },
    { id: "advanced", label: "Advanced Scholars" },
  ]

  const allResources = [...resources.beginner, ...resources.intermediate, ...resources.advanced]

  const filteredResources = allResources
    .filter((r) => r.level.toLowerCase() === selectedLevel)
    .filter(
      (r) =>
        r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.description.toLowerCase().includes(searchTerm.toLowerCase()),
    )

  const selectedResourceData = selectedResource !== null ? allResources.find((r) => r.id === selectedResource) : null

  return (
    <div className="space-y-8">
      {/* Level Filter */}
      <div className="flex gap-3 mb-8 flex-wrap">
        {levels.map((level) => (
          <button
            key={level.id}
            onClick={() => setSelectedLevel(level.id)}
            className={`px-4 py-2 rounded-full font-medium transition-all ${
              selectedLevel === level.id
                ? "bg-blue-900 text-white"
                : "bg-white border-2 border-blue-900 text-blue-900 hover:bg-blue-50"
            }`}
          >
            {level.label}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="relative mb-8">
        <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search resources by title or keyword..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
        />
      </div>

      {/* Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredResources.map((resource) => (
          <button
            key={resource.id}
            onClick={() => setSelectedResource(resource.id)}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all overflow-hidden border-l-4 border-orange-500 text-left"
          >
            <div className="p-6 space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="text-orange-500">{typeIcons[resource.type as keyof typeof typeIcons]}</div>
                  <span className="text-sm font-semibold text-blue-900 bg-blue-50 px-3 py-1 rounded-full">
                    {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                  </span>
                </div>
                {resource.featured && <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />}
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900">{resource.title}</h3>
                <p className="text-gray-600 text-sm">{resource.description}</p>
              </div>

              {resource.duration && <span className="text-sm text-gray-500 font-medium">⏱️ {resource.duration}</span>}
            </div>
          </button>
        ))}
      </div>

      {filteredResources.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No resources found matching your search.</p>
        </div>
      )}

      {/* Featured Resources Banner */}
      {selectedLevel === "beginner" && (
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8 border border-blue-200 space-y-4">
          <h3 className="text-2xl font-bold text-gray-900">Getting Started?</h3>
          <p className="text-gray-700">
            New to Jainism? Start with our beginner resources to learn fundamental concepts and practices. Our
            structured curriculum will guide you through the basics.
          </p>
          <button className="bg-blue-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
            Start Learning Journey
          </button>
        </div>
      )}

      {/* Special Sections */}
      <div className="bg-white rounded-lg shadow-md p-8 space-y-6 border-l-4 border-purple-500">
        <h3 className="text-2xl font-bold text-gray-900">Pratikraman Helper</h3>
        <p className="text-gray-600">Prepare for Samvatsari Pratikraman with our guided audio and downloadable PDFs</p>
        <div className="grid grid-cols-2 gap-4">
          <button className="bg-purple-50 hover:bg-purple-100 text-purple-900 py-3 rounded-lg font-semibold transition-colors">
            📻 Audio Guide
          </button>
          <button className="bg-purple-50 hover:bg-purple-100 text-purple-900 py-3 rounded-lg font-semibold transition-colors">
            📄 PDF Download
          </button>
        </div>
      </div>

      {/* Q&A Forum */}
      <div className="bg-white rounded-lg shadow-md p-8 space-y-6 border-l-4 border-green-500">
        <h3 className="text-2xl font-bold text-gray-900">Q&A with Scholars</h3>
        <p className="text-gray-600">
          Join our moderated discussion forum to learn from spiritual scholars and community members
        </p>
        <button className="bg-green-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-800 transition-colors">
          💬 Join Discussion Forum
        </button>
      </div>

      {/* Resource Detail Modal */}
      {selectedResourceData && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-blue-900 to-blue-800 text-white p-6 flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  {typeIcons[selectedResourceData.type as keyof typeof typeIcons]}
                  <span className="text-sm font-semibold bg-white bg-opacity-20 px-2 py-1 rounded">
                    {selectedResourceData.type.toUpperCase()}
                  </span>
                </div>
                <h2 className="text-2xl font-bold">{selectedResourceData.title}</h2>
              </div>
              <button
                onClick={() => setSelectedResource(null)}
                className="text-white hover:bg-white hover:bg-opacity-20 rounded p-2"
              >
                ✕
              </button>
            </div>

            <div className="p-8 space-y-6">
              <div>
                <p className="text-gray-700 leading-relaxed">{selectedResourceData.fullDescription}</p>
              </div>

              {selectedResourceData.duration && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Duration</p>
                  <p className="font-semibold text-gray-900">{selectedResourceData.duration}</p>
                </div>
              )}

              <button
                onClick={() => setSelectedResource(null)}
                className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
              >
                {selectedResourceData.type === "audio"
                  ? "▶ Play Audio"
                  : selectedResourceData.type === "video"
                    ? "▶ Watch Video"
                    : "📥 Download"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

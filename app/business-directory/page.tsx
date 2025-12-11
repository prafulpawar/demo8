"use client"

import { useState } from "react"
import { Search, MapPin, Star, Leaf } from "lucide-react"

export default function BusinessDirectoryPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [jainFriendlyOnly, setJainFriendlyOnly] = useState(false)

  const categories = [
    { id: "all", label: "All Businesses", count: 48 },
    { id: "realestate", label: "Real Estate", count: 12 },
    { id: "medical", label: "Medical & Health", count: 8 },
    { id: "legal", label: "Legal Services", count: 6 },
    { id: "tutoring", label: "Tutoring & Education", count: 5 },
    { id: "food", label: "Food & Catering", count: 10 },
    { id: "professional", label: "Professional Services", count: 7 },
  ]

  const businesses = [
    {
      id: 1,
      name: "Sharma Real Estate",
      category: "realestate",
      location: "Mississauga, ON",
      specialization: "Residential & Commercial Properties",
      phone: "(905) 555-0101",
      featured: true,
      jainFriendly: true,
      rating: 4.8,
    },
    {
      id: 2,
      name: "Dr. Patel Dental Clinic",
      category: "medical",
      location: "Toronto, ON",
      specialization: "General & Cosmetic Dentistry",
      phone: "(416) 555-0202",
      featured: false,
      jainFriendly: true,
      rating: 4.9,
    },
    {
      id: 3,
      name: "Jain Catering Services",
      category: "food",
      location: "Toronto, ON",
      specialization: "Vegetarian/Vegan Catering",
      phone: "(416) 555-0303",
      featured: true,
      jainFriendly: true,
      rating: 4.7,
    },
  ]

  const filteredBusinesses = businesses.filter(
    (b) =>
      (selectedCategory === "all" || b.category === selectedCategory) &&
      (jainFriendlyOnly ? b.jainFriendly : true) &&
      (b.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.specialization.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Community Business Directory</h1>
          <p className="text-blue-100">Support Fellow Sadharmik Members • Sadharmik Bhakti Network</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Categories */}
            <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
              <h3 className="font-bold text-lg text-gray-900">Categories</h3>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                    selectedCategory === cat.id
                      ? "bg-blue-900 text-white font-semibold"
                      : "hover:bg-blue-50 text-gray-700"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span>{cat.label}</span>
                    <span className="text-sm opacity-70">{cat.count}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Filter */}
            <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
              <h3 className="font-bold text-lg text-gray-900">Filters</h3>
              <label className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-blue-50 transition-colors">
                <input
                  type="checkbox"
                  checked={jainFriendlyOnly}
                  onChange={(e) => setJainFriendlyOnly(e.target.checked)}
                  className="w-4 h-4"
                />
                <span className="font-medium text-gray-700 flex items-center gap-2">
                  <Leaf className="w-4 h-4 text-green-600" />
                  Jain-Friendly Options
                </span>
              </label>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search businesses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none"
              />
            </div>

            {/* Businesses Grid */}
            <div className="grid gap-6">
              {filteredBusinesses.map((business) => (
                <div
                  key={business.id}
                  className={`rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg ${
                    business.featured ? "border-2 border-orange-500 bg-orange-50" : "bg-white"
                  }`}
                >
                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{business.name}</h3>
                          {business.featured && (
                            <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                              Featured
                            </span>
                          )}
                          {business.jainFriendly && (
                            <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                              <Leaf className="w-3 h-3" />
                              Jain-Friendly
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{business.specialization}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {business.location}
                          </span>
                          <span>{business.phone}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-orange-500 font-bold">
                          <Star className="w-4 h-4 fill-current" />
                          {business.rating}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3 pt-4 border-t">
                      <button className="flex-1 bg-blue-900 text-white py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                        Contact
                      </button>
                      <button className="flex-1 bg-blue-50 text-blue-900 py-2 rounded-lg font-semibold hover:bg-blue-100 transition-colors">
                        View Profile
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredBusinesses.length === 0 && (
              <div className="bg-white rounded-lg p-12 text-center">
                <p className="text-gray-600 text-lg">No businesses found. Try adjusting your filters.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

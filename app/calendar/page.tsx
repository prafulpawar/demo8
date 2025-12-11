"use client"

import { useState } from "react"
import CalendarGrid from "@/components/calendar/calendar-grid"
import EventList from "@/components/calendar/event-list"
import FilterControls from "@/components/calendar/filter-controls"

export default function CalendarPage() {
  const [viewMode, setViewMode] = useState<"gregorian" | "lunar">("gregorian")
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [filters, setFilters] = useState<string[]>([])

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Temple Calendar</h1>
          <p className="text-blue-100">Events, Services, and Spiritual Observances</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        {/* View Toggle */}
        <div className="mb-8 flex gap-4 items-center">
          <span className="text-sm font-semibold text-gray-600">View:</span>
          <div className="flex gap-2 bg-white rounded-lg p-1 shadow-sm">
            <button
              onClick={() => setViewMode("gregorian")}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                viewMode === "gregorian" ? "bg-blue-900 text-white" : "text-gray-600 hover:text-blue-900"
              }`}
            >
              Gregorian Calendar
            </button>
            <button
              onClick={() => setViewMode("lunar")}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                viewMode === "lunar" ? "bg-blue-900 text-white" : "text-gray-600 hover:text-blue-900"
              }`}
            >
              Jain Lunar Calendar
            </button>
          </div>
        </div>

        {/* Info Box */}
        <div className="mb-8 bg-blue-50 border border-blue-200 p-4 rounded-lg">
          <p className="text-sm text-blue-900">
            <span className="font-semibold">Pachkhan Integration:</span> This calendar displays sunrise/sunset times for
            Chovihar (night dining restrictions) and lunar dates for proper festival observance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Filters */}
          <div className="lg:col-span-1">
            <FilterControls filters={filters} setFilters={setFilters} />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Calendar Grid */}
            <CalendarGrid viewMode={viewMode} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />

            {/* Events List */}
            <EventList selectedDate={selectedDate} filters={filters} />
          </div>
        </div>
      </section>
    </main>
  )
}

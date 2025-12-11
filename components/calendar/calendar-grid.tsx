"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CalendarGridProps {
  viewMode: "gregorian" | "lunar"
  selectedDate: Date
  setSelectedDate: (date: Date) => void
}

export default function CalendarGrid({ viewMode, selectedDate, setSelectedDate }: CalendarGridProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date(selectedDate))

  const gregorianMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  const lunarMonths = [
    "Chaitra",
    "Vaishakh",
    "Jyeshtha",
    "Ashadh",
    "Shravan",
    "Bhadrapad",
    "Kartik",
    "Margshirsh",
    "Paush",
    "Magh",
    "Phalgun",
    "Chaitra",
  ]

  const daysInMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  const firstDayOfMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay()

  const days = Array.from({ length: 42 }, (_, i) => {
    const day = i - firstDayOfMonth(currentMonth) + 1
    if (day < 1 || day > daysInMonth(currentMonth)) return null
    return day
  })

  const prevMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
  const nextMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))

  const monthName =
    viewMode === "gregorian" ? gregorianMonths[currentMonth.getMonth()] : lunarMonths[currentMonth.getMonth()]

  const eventsByDate: { [key: number]: Array<{ time: string; title: string; type: string }> } = {
    1: [{ time: "10:00 AM", title: "Pathshala - Advanced", type: "pathshala" }],
    3: [{ time: "6:00 PM", title: "Evening Satsang", type: "community" }],
    5: [
      { time: "10:00 AM", title: "Pathshala Classes", type: "pathshala" },
      { time: "11:00 AM", title: "Adinath Puja", type: "pujas" },
    ],
    8: [{ time: "ALL DAY", title: "Paryushan Festival Begins", type: "festivals" }],
    12: [{ time: "11:00 AM", title: "Adinath Temple - Samuhik Abh", type: "pujas" }],
    15: [{ time: "7:00 PM", title: "Youth Cultural Program", type: "community" }],
    19: [
      { time: "10:00 AM", title: "Morning Pujas", type: "pujas" },
      { time: "6:00 PM", title: "Spiritual Discourse", type: "community" },
    ],
    22: [{ time: "2:00 PM", title: "Community Seva", type: "community" }],
    26: [{ time: "ALL DAY", title: "Mahaveer Jayanti", type: "festivals" }],
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-6">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={prevMonth}
            className="p-2 hover:bg-blue-700 rounded-lg transition-colors"
            aria-label="Previous month"
          >
            <ChevronLeft size={20} />
          </button>
          <h2 className="text-2xl font-bold">
            {monthName} {currentMonth.getFullYear()}
          </h2>
          <button
            onClick={nextMonth}
            className="p-2 hover:bg-blue-700 rounded-lg transition-colors"
            aria-label="Next month"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {viewMode === "lunar" && (
          <p className="text-blue-100 text-sm">
            Jain Lunar Calendar - {lunarMonths[currentMonth.getMonth()]} (Sud/Vad)
          </p>
        )}
      </div>

      {/* Day Headers */}
      <div className="grid grid-cols-7 gap-0 border-b">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="p-3 text-center font-semibold text-gray-700 bg-gray-50 border-r last:border-r-0">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-0">
        {days.map((day, idx) => (
          <div
            key={idx}
            className={`min-h-28 p-2 border-r border-b last:border-r-0 cursor-pointer transition-all ${
              day ? "bg-white hover:bg-blue-50" : "bg-gray-50"
            } ${day === selectedDate.getDate() && currentMonth.getMonth() === selectedDate.getMonth() ? "ring-2 ring-orange-500 ring-inset" : ""}`}
            onClick={() => day && setSelectedDate(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day))}
          >
            {day && (
              <div className="space-y-1">
                <p className="font-semibold text-gray-900 text-sm">{day}</p>
                {eventsByDate[day] && (
                  <div className="space-y-1">
                    {eventsByDate[day].slice(0, 2).map((event, i) => {
                      const typeColors: { [key: string]: string } = {
                        pathshala: "bg-blue-100 text-blue-700",
                        pujas: "bg-orange-100 text-orange-700",
                        festivals: "bg-red-100 text-red-700",
                        community: "bg-green-100 text-green-700",
                      }
                      return (
                        <p
                          key={i}
                          className={`text-xs ${typeColors[event.type] || "bg-gray-100 text-gray-700"} px-2 py-0.5 rounded font-medium truncate`}
                        >
                          {event.time}
                        </p>
                      )
                    })}
                    {eventsByDate[day].length > 2 && (
                      <p className="text-xs text-gray-500 font-medium">+{eventsByDate[day].length - 2} more</p>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Time Info */}
      <div className="bg-blue-50 p-4 border-t">
        <p className="text-sm text-blue-900 font-semibold">
          {selectedDate.toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
          })}
        </p>
        <div className="mt-2 text-sm text-gray-600">
          <p>🌅 Sunrise: 6:42 AM | 🌅 Sunset: 5:12 PM</p>
          <p className="text-orange-600 font-medium mt-1">Chovihar (no eating) after sunset</p>
        </div>
      </div>
    </div>
  )
}

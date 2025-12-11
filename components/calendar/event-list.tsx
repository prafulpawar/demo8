"use client"

interface EventListProps {
  selectedDate: Date
  filters: string[]
}

export default function EventList({ selectedDate, filters }: EventListProps) {
  const allEvents = [
    {
      id: 1,
      time: "10:00 AM",
      title: "Pathshala Classes - Beginners",
      location: "JCA Pathshala Cellar",
      type: "pathshala",
      description: "Classes for children ages 5-12 covering basic Jain philosophy",
      day: 1,
    },
    {
      id: 2,
      time: "11:00 AM",
      title: "Adinath Temple - Samuhik Abh",
      location: "Main Temple",
      type: "pujas",
      description: "Group worship and prayers",
      day: 5,
    },
    {
      id: 3,
      time: "6:00 PM",
      title: "Evening Satsang",
      location: "Lecture Hall",
      type: "community",
      description: "Spiritual discourse and meditation session",
      day: 3,
    },
    {
      id: 4,
      time: "ALL DAY",
      title: "Paryushan Festival",
      location: "All Temples",
      type: "festivals",
      description: "Most sacred festival - 8 days of spiritual practice",
      day: 8,
    },
    {
      id: 5,
      time: "11:00 AM",
      title: "Adinath Puja",
      location: "Main Temple",
      type: "pujas",
      description: "Regular worship ceremony",
      day: 5,
    },
    {
      id: 6,
      time: "7:00 PM",
      title: "Youth Cultural Program",
      location: "Main Hall",
      type: "community",
      description: "Dance, music, and cultural performances",
      day: 15,
    },
    {
      id: 7,
      time: "10:00 AM",
      title: "Morning Pujas",
      location: "Main Temple",
      type: "pujas",
      description: "Daily morning prayers",
      day: 19,
    },
    {
      id: 8,
      time: "ALL DAY",
      title: "Mahaveer Jayanti",
      location: "All Temples",
      type: "festivals",
      description: "Birthday of Lord Mahavira - celebration with cultural programs",
      day: 26,
    },
    {
      id: 9,
      time: "2:00 PM",
      title: "Community Seva (Volunteer Service)",
      location: "Temple Complex",
      type: "community",
      description: "Community service and cleanup activities",
      day: 22,
    },
  ]

  const typeColors: { [key: string]: string } = {
    pathshala: "bg-blue-100 text-blue-800",
    pujas: "bg-orange-100 text-orange-800",
    festivals: "bg-red-100 text-red-800",
    sadhu: "bg-purple-100 text-purple-800",
    community: "bg-green-100 text-green-800",
  }

  const typeLabels: { [key: string]: string } = {
    pathshala: "Class",
    pujas: "Worship",
    festivals: "Festival",
    sadhu: "Event",
    community: "Community",
  }

  const filteredEvents = allEvents.filter((e) => {
    const isDateMatch = e.day === selectedDate.getDate()
    const isFilterMatch = filters.length === 0 || filters.includes(e.type)
    return isDateMatch && isFilterMatch
  })

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-6">
        <h3 className="text-2xl font-bold">
          Events for {selectedDate.toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" })}
        </h3>
      </div>

      <div className="divide-y">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div
              key={event.id}
              className="p-6 hover:bg-gray-50 transition-colors border-l-4 border-transparent hover:border-orange-500"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="font-bold text-blue-900">{event.time}</span>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full ${typeColors[event.type]}`}>
                      {typeLabels[event.type]}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">{event.title}</h4>
                  <p className="text-sm text-gray-600">{event.description}</p>
                  <p className="text-sm text-gray-500 flex items-center gap-2">📍 {event.location}</p>
                </div>
                <button className="px-4 py-2 bg-blue-50 text-blue-900 rounded-lg font-medium hover:bg-blue-100 transition-colors flex-shrink-0 whitespace-nowrap">
                  Count Me In
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="p-12 text-center text-gray-500">
            <p>No events scheduled for this date</p>
          </div>
        )}
      </div>

      {/* Sunrise/Sunset Info */}
      <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 border-t-2 border-orange-200">
        <h4 className="font-bold text-gray-900 mb-3">Pachkhan Information</h4>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-600">🌅 Sunrise</p>
            <p className="font-bold text-gray-900">6:42 AM</p>
          </div>
          <div>
            <p className="text-gray-600">🌅 Sunset</p>
            <p className="font-bold text-gray-900">5:12 PM</p>
          </div>
        </div>
        <p className="text-sm text-orange-800 mt-3 font-medium">
          ⚠️ Chovihar (night dining restrictions) apply after sunset
        </p>
      </div>
    </div>
  )
}

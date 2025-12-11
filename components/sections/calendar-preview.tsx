import Link from "next/link"

export default function CalendarPreview() {
  const events = [
    { time: "11am", title: "JCA Pathshala Cellar & other locations", type: "Class" },
    { time: "10am", title: "Adinath Temple - Samuhik Abh", type: "Worship" },
    { time: "11am", title: "JCA Pathshala Cellar & other locations", type: "Class" },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Info */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">Temple Services & Events</h2>
            <p className="text-lg text-gray-600">
              Our interactive calendar keeps you updated with all temple services, religious observances, and community
              events. Toggle between Gregorian and Jain Lunar calendars.
            </p>
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900">Filter By:</h4>
              <div className="flex flex-wrap gap-2">
                {["Pathshala Classes", "Pujas", "Festivals", "Sadhu Events"].map((filter) => (
                  <button
                    key={filter}
                    className="px-4 py-2 bg-blue-50 text-blue-900 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors"
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-900">
                <span className="font-semibold">Pachkhan Integration:</span> Sunrise/Sunset times for Chovihar
                restrictions
              </p>
            </div>
            <Link href="/calendar" className="inline-block btn-primary">
              View Full Calendar
            </Link>
          </div>

          {/* Right - Calendar Preview */}
          <div className="space-y-6">
            <div className="border rounded-lg p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg">December 2025</h3>
                <button className="text-blue-900 font-semibold text-sm">Bhadrapad (Lunar View)</button>
              </div>
              <div className="space-y-3">
                {events.map((event, idx) => (
                  <div key={idx} className="flex gap-3 p-3 bg-gray-50 rounded-lg items-start">
                    <span className="font-bold text-blue-900 text-sm flex-shrink-0">{event.time}</span>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{event.title}</p>
                      <span className="text-xs text-orange-500 font-semibold">{event.type}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button className="w-full py-2 border-2 border-blue-900 text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
              Count Me In for Meals
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

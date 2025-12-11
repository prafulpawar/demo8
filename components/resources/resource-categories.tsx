"use client"

export default function ResourceCategories() {
  const categories = [
    { id: "all", label: "All Resources", count: 24 },
    { id: "audio", label: "Audio & Hymns", count: 12 },
    { id: "video", label: "Video Sermons", count: 8 },
    { id: "documents", label: "Documents & PDFs", count: 6 },
    { id: "pratikraman", label: "Pratikraman Guides", count: 3 },
    { id: "forum", label: "Q&A Forum", count: "Active" },
  ]

  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-24 space-y-4 h-fit">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Browse Categories</h3>
      {categories.map((cat) => (
        <button key={cat.id} className="w-full text-left px-4 py-3 rounded-lg hover:bg-blue-50 transition-colors group">
          <div className="flex items-center justify-between">
            <span className="font-medium text-gray-700 group-hover:text-blue-900">{cat.label}</span>
            <span className="text-sm bg-gray-200 text-gray-700 px-2 py-1 rounded-full">{cat.count}</span>
          </div>
        </button>
      ))}

      {/* Info Box */}
      <div className="bg-blue-50 p-4 rounded-lg mt-6 border border-blue-200">
        <p className="text-sm text-blue-900 font-semibold mb-2">Swadhyaya Portal</p>
        <p className="text-xs text-blue-800">Self-study and spiritual learning resources for all levels</p>
      </div>
    </div>
  )
}

"use client"

interface FilterControlsProps {
  filters: string[]
  setFilters: (filters: string[]) => void
}

export default function FilterControls({ filters, setFilters }: FilterControlsProps) {
  const filterOptions = [
    { id: "pathshala", label: "Pathshala Classes", color: "bg-blue-100 text-blue-800" },
    { id: "pujas", label: "Regular Pujas", color: "bg-orange-100 text-orange-800" },
    { id: "festivals", label: "Major Festivals", color: "bg-red-100 text-red-800" },
    { id: "community", label: "Community Events", color: "bg-green-100 text-green-800" },
  ]

  const toggleFilter = (id: string) => {
    setFilters(filters.includes(id) ? filters.filter((f) => f !== id) : [...filters, id])
  }

  const clearFilters = () => {
    setFilters([])
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-24 space-y-6 h-fit">
      <div>
        <h3 className="font-bold text-gray-900 mb-4">Filter Events</h3>
        <div className="space-y-3">
          {filterOptions.map((option) => (
            <label key={option.id} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.includes(option.id)}
                onChange={() => toggleFilter(option.id)}
                className="w-4 h-4 text-blue-900 rounded cursor-pointer"
              />
              <span className={`text-sm font-medium px-3 py-1 rounded-full ${option.color}`}>{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="border-t pt-4">
        <h3 className="font-bold text-gray-900 mb-3 text-sm">Quick Info</h3>
        <div className="space-y-2 text-xs text-gray-600">
          <p>• Pathshala: Weekly classes</p>
          <p>• Pujas: Regular worship</p>
          <p>• Festivals: Major celebrations</p>
          <p>• Community: Events & services</p>
        </div>
      </div>

      {filters.length > 0 && (
        <button onClick={clearFilters} className="w-full btn-primary text-sm py-2">
          Clear All Filters
        </button>
      )}
    </div>
  )
}

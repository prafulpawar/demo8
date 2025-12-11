import ResourceLibrary from "@/components/resources/resource-library"
import ResourceCategories from "@/components/resources/resource-categories"

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Spiritual Resource Library</h1>
          <p className="text-blue-100">Swadhyaya Portal - Learn, Grow, and Practice</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Categories */}
          <ResourceCategories />

          {/* Main Content */}
          <div className="lg:col-span-3">
            <ResourceLibrary />
          </div>
        </div>
      </section>
    </main>
  )
}

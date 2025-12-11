export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">About Us</h1>
          <p className="text-blue-100">Serving the Jain Community with Dedication and Compassion</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        {/* Mission */}
        <div className="bg-white rounded-lg shadow-md p-8 space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            The Canadian Jain Community Centre is dedicated to preserving, promoting, and practicing the teachings of
            Lord Mahavira and the principles of Jainism. We serve as a spiritual sanctuary where members of all ages can
            learn, worship, and celebrate our rich cultural heritage.
          </p>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Ahimsa (Non-Violence)", desc: "Respect for all living beings and peaceful coexistence" },
            { title: "Satya (Truth)", desc: "Honesty and integrity in all our dealings" },
            { title: "Asteya (Non-Stealing)", desc: "Respecting others' rights and possessions" },
            { title: "Brahmacharya (Chastity)", desc: "Purity in thought, word, and deed" },
          ].map((value, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md p-6 space-y-2 border-l-4 border-orange-500">
              <h3 className="text-lg font-bold text-gray-900">{value.title}</h3>
              <p className="text-gray-600">{value.desc}</p>
            </div>
          ))}
        </div>

        {/* History */}
        <div className="bg-white rounded-lg shadow-md p-8 space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">Our History</h2>
          <p className="text-gray-600 leading-relaxed">
            The Canadian Jain Community Centre was established to serve the growing Jain diaspora in Canada. Over the
            years, we have built a welcoming sanctuary that combines modern facilities with traditional spiritual
            practices. Our community has grown to include families from across Canada who gather to celebrate our faith,
            support each other, and contribute to Canadian society while maintaining our spiritual roots.
          </p>
        </div>

        {/* Programs */}
        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Pathshala", desc: "Religious education for children ages 5-18" },
              { title: "Pujas & Ceremonies", desc: "Daily and special religious observances" },
              { title: "Festivals", desc: "Celebration of major Jain festivals throughout the year" },
              { title: "Spiritual Discourses", desc: "Teachings from scholars and visiting monks/nuns" },
              { title: "Community Service", desc: "Social outreach and charitable initiatives" },
              { title: "Cultural Events", desc: "Arts, music, and cultural programming" },
            ].map((prog, idx) => (
              <div key={idx} className="border-b-2 border-gray-200 pb-4">
                <h3 className="font-bold text-gray-900 mb-2">{prog.title}</h3>
                <p className="text-gray-600 text-sm">{prog.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Get Involved */}
        <div className="bg-blue-50 border-l-4 border-blue-900 rounded-lg p-8 space-y-4 text-center">
          <h2 className="text-2xl font-bold text-blue-900">Join Our Community</h2>
          <p className="text-blue-900">
            Whether you're looking for spiritual guidance, community connection, or ways to serve, we welcome you to
            join the Canadian Jain Community Centre.
          </p>
          <div className="flex gap-4 justify-center pt-4 flex-wrap">
            <button className="btn-primary">Become a Member</button>
            <button className="btn-secondary">Explore Seva Opportunities</button>
          </div>
        </div>
      </section>
    </main>
  )
}

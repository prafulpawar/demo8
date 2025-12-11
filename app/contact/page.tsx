"use client"

import type React from "react"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Navigation } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "general",
    message: "",
  })

  const subjects = [
    { id: "general", label: "General Inquiry", route: "info@cjcc.org" },
    { id: "hall-rental", label: "Hall Rental", route: "facilities@cjcc.org" },
    { id: "pathshala", label: "Pathshala Classes", route: "education@cjcc.org" },
    { id: "events", label: "Event Sponsorship", route: "events@cjcc.org" },
    { id: "donations", label: "Donations", route: "donations@cjcc.org" },
    { id: "membership", label: "Membership", route: "membership@cjcc.org" },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
          <p className="text-blue-100">We're here to help. Reach out anytime.</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left - Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Address */}
            <div className="bg-white rounded-lg shadow-md p-6 space-y-3">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-orange-500" />
                Our Location
              </h3>
              <div className="space-y-2 text-gray-600">
                <p className="font-semibold">Canadian Jain Centre</p>
                <p>123 Bloor Street East</p>
                <p>Toronto, ON M4W 1A8</p>
                <p>Canada</p>
              </div>
            </div>

            {/* Phone & Email */}
            <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-orange-500" />
                  Phone
                </h4>
                <a href="tel:+14165551234" className="text-blue-900 hover:underline">
                  +1 (416) 555-1234
                </a>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-orange-500" />
                  Email
                </h4>
                <a href="mailto:info@cjcc.org" className="text-blue-900 hover:underline">
                  info@cjcc.org
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-lg shadow-md p-6 space-y-3">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Clock className="w-5 h-5 text-orange-500" />
                Hours
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>
                  <span className="font-semibold">Mon-Fri:</span> 7:00 AM - 7:00 PM
                </p>
                <p>
                  <span className="font-semibold">Sat-Sun:</span> 8:00 AM - 8:00 PM
                </p>
                <p className="text-orange-600 font-medium">Closed on major festivals</p>
              </div>
            </div>

            {/* Accessibility */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 space-y-3">
              <h4 className="font-semibold text-green-900">♿ Accessibility</h4>
              <p className="text-sm text-green-900">
                Wheelchair accessible entrance. Elevator available. Reserved accessible parking.
              </p>
              <p className="text-sm text-green-900 font-medium">Transit: TTC Route #5 (Dundas)</p>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Get In Touch</h2>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none"
                    placeholder="Your name"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none"
                    placeholder="(416) 555-0000"
                  />
                </div>

                {/* Subject - Smart Routing */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none"
                  >
                    {subjects.map((subj) => (
                      <option key={subj.id} value={subj.id}>
                        {subj.label}
                      </option>
                    ))}
                  </select>
                  <p className="text-xs text-gray-500 mt-2">
                    Your inquiry will be automatically routed to the appropriate department
                  </p>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none resize-none"
                    rows={5}
                    placeholder="Tell us how we can help..."
                    required
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white py-3 rounded-lg font-bold hover:bg-blue-800 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Directions Section */}
        <section className="mt-16 bg-white rounded-lg shadow-md p-8 space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Navigation className="w-6 h-6 text-orange-500" />
            Directions & Parking
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-bold text-gray-900">By Car</h3>
              <div className="space-y-2 text-gray-600">
                <p>
                  <span className="font-semibold">From Downtown:</span> Take Avenue Road south to Bloor, turn east.
                  Centre on left.
                </p>
                <p>
                  <span className="font-semibold">Parking:</span> Free parking available on-site. Reserved accessible
                  spots available.
                </p>
                <p className="bg-blue-50 p-3 rounded-lg text-sm">
                  During Diwali/Mahavir Jayanti: Overflow parking managed by event coordinator
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-gray-900">By Public Transit</h3>
              <div className="space-y-2 text-gray-600">
                <p>
                  <span className="font-semibold">TTC Route 5:</span> Dundas car stops directly at Centre
                </p>
                <p>
                  <span className="font-semibold">Closest Subway:</span> Bay Station (10-minute walk)
                </p>
                <p className="bg-green-50 p-3 rounded-lg text-sm text-green-900">
                  All transit stops are wheelchair accessible
                </p>
              </div>
            </div>
          </div>

          <div className="w-full h-96 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.9873946503903!2d-79.39172!3d43.67329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34cb78c1b8cb%3A0xc6cc0b3c2e7e8b8b!2s123%20Bloor%20St%20E%2C%20Toronto%2C%20ON!5e0!3m2!1sen!2sca!4v1702341234567"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </section>
    </main>
  )
}

"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/news-events", label: "News & Events" },
    { href: "/calendar", label: "Calendar" },
    { href: "/resources", label: "Spiritual Resources" },
    { href: "/leaders", label: "Leadership" },
    { href: "/business-directory", label: "Business Directory" },
    { href: "/membership", label: "Membership" },
    { href: "/donate", label: "Donate" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Banner */}
      <div className="bg-blue-900 text-white py-2 px-4 text-center text-sm">
        <span className="font-semibold">Canadian Jain Community Centre</span> • Serving the Jain Diaspora with Spiritual
        Guidance
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-2xl text-blue-900">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-900 to-orange-500 rounded-lg flex items-center justify-center text-white text-sm font-bold">
            JC
          </div>
          <span className="hidden sm:inline">CJCC</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-900 hover:bg-blue-50 rounded-md transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-gray-100"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t bg-white">
          <div className="flex flex-col p-4 gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-900 hover:bg-blue-50 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

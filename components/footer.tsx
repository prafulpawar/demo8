import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-blue-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="text-lg font-bold">Location</h4>
          <div className="space-y-3">
            <div className="flex gap-3 items-start">
              <MapPin size={20} className="flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Canadian Jain Centre</p>
                <p className="text-blue-100">123 Bloor Street East</p>
                <p className="text-blue-100">Toronto, ON M4W 1A8</p>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <Phone size={20} />
              <a href="tel:+14165551234" className="hover:text-blue-200 transition">
                +1 (416) 555-1234
              </a>
            </div>
            <div className="flex gap-3 items-center">
              <Mail size={20} />
              <a href="mailto:info@cjcc.org" className="hover:text-blue-200 transition">
                info@cjcc.org
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-lg font-bold">Quick Links</h4>
          <ul className="space-y-2 text-blue-100">
            <li>
              <Link href="/calendar" className="hover:text-white transition">
                Events Calendar
              </Link>
            </li>
            <li>
              <Link href="/news-events" className="hover:text-white transition">
                News & Events
              </Link>
            </li>
            <li>
              <Link href="/resources" className="hover:text-white transition">
                Spiritual Resources
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-white transition">
                Photo Gallery
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="space-y-4">
          <h4 className="text-lg font-bold">Follow Us</h4>
          <div className="flex gap-4">
            <a href="https://facebook.com" aria-label="Facebook" className="hover:text-blue-200 transition">
              <Facebook size={24} />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" className="hover:text-blue-200 transition">
              <Instagram size={24} />
            </a>
            <a href="https://twitter.com" aria-label="Twitter" className="hover:text-blue-200 transition">
              <Twitter size={24} />
            </a>
            <a href="https://youtube.com" aria-label="YouTube" className="hover:text-blue-200 transition">
              <Youtube size={24} />
            </a>
          </div>
          <div className="pt-4">
            <h5 className="text-sm font-semibold mb-2">Hours</h5>
            <p className="text-blue-100 text-sm">Monday - Friday: 7:00 AM - 7:00 PM</p>
            <p className="text-blue-100 text-sm">Saturday - Sunday: 8:00 AM - 8:00 PM</p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-blue-800 py-6 px-4 text-center text-blue-100">
        <p>&copy; {currentYear} Canadian Jain Community Centre. All rights reserved.</p>
        <div className="mt-2 flex gap-4 justify-center text-sm">
          <Link href="/privacy" className="hover:text-white transition">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white transition">
            Terms of Service
          </Link>
          <Link href="/accessibility" className="hover:text-white transition">
            Accessibility
          </Link>
        </div>
      </div>
    </footer>
  )
}

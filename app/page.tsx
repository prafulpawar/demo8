import Hero from "@/components/sections/hero"
import NewsEvents from "@/components/sections/news-events"
import Calendar from "@/components/sections/calendar-preview"
import VirtualTour from "@/components/sections/virtual-tour"
import Gallery from "@/components/sections/gallery"
import Donation from "@/components/sections/donation"
import EmailSubscription from "@/components/sections/email-subscription"

export default function Home() {
  return (
    <div>
      <Hero />
      <NewsEvents />
      <Calendar />
      <VirtualTour />
      <Gallery />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4 py-12">
        <Donation />
        <EmailSubscription />
      </div>
    </div>
  )
}

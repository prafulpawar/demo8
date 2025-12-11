export default function Donation() {
  return (
    <div className="bg-white border rounded-lg p-8 space-y-6">
      <h3 className="text-2xl font-bold text-gray-900">Donate to CJCC</h3>
      <p className="text-gray-600">Your generous donation helps us maintain our temple and serve the community.</p>
      <div
        className="h-48 bg-cover bg-center rounded-lg"
        style={{
          backgroundImage: "url('/donation-charity.png')",
        }}
      />
      <button className="w-full btn-secondary py-3 font-bold text-lg">Donate Now</button>
    </div>
  )
}

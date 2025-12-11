"use client"

import { useState } from "react"
import { Heart, Building2, BookOpen, Leaf } from "lucide-react"

export default function DonatePage() {
  const [selectedFund, setSelectedFund] = useState<string | null>(null)
  const [amount, setAmount] = useState("")

  const funds = [
    {
      id: "dev-dravya",
      name: "Dev Dravya (Temple Fund)",
      description: "For temple maintenance, idol worship, and sacred ceremonies",
      icon: Building2,
      color: "bg-blue-50 border-blue-200 text-blue-900",
      color_btn: "bg-blue-100 hover:bg-blue-200",
    },
    {
      id: "sadharan",
      name: "Sadharan (General Fund)",
      description: "For community programs, administration, and utilities",
      icon: BookOpen,
      color: "bg-orange-50 border-orange-200 text-orange-900",
      color_btn: "bg-orange-100 hover:bg-orange-200",
    },
    {
      id: "jivdaya",
      name: "Jivdaya (Animal Welfare)",
      description: "Animal sanctuary care and welfare programs",
      icon: Leaf,
      color: "bg-green-50 border-green-200 text-green-900",
      color_btn: "bg-green-100 hover:bg-green-200",
    },
    {
      id: "building",
      name: "Building Fund",
      description: "Capital improvements and facility upgrades",
      icon: Building2,
      color: "bg-purple-50 border-purple-200 text-purple-900",
      color_btn: "bg-purple-100 hover:bg-purple-200",
    },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
            <Heart className="w-10 h-10" fill="currentColor" />
            Support Our Community
          </h1>
          <p className="text-blue-100">Your generous donation helps us serve the Jain community</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        {/* Info Banner */}
        <div className="mb-12 bg-blue-50 border-l-4 border-blue-900 p-6 rounded-lg">
          <p className="text-blue-900 font-semibold">
            ⚠️ Important: In accordance with Jain principles, please select the specific fund for your donation. Dev
            Dravya funds cannot be used for general purposes.
          </p>
        </div>

        {/* Fund Selection */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Select a Fund</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {funds.map((fund) => {
              const Icon = fund.icon
              return (
                <button
                  key={fund.id}
                  onClick={() => setSelectedFund(fund.id)}
                  className={`p-6 rounded-lg border-2 transition-all text-left ${
                    selectedFund === fund.id
                      ? `${fund.color} border-current shadow-lg scale-105`
                      : `bg-white border-gray-200 hover:border-gray-300`
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <Icon className="w-8 h-8 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">{fund.name}</h3>
                      <p className="text-sm opacity-90">{fund.description}</p>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Donation Form */}
        <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl space-y-8">
          <h2 className="text-2xl font-bold text-gray-900">Donation Details</h2>

          {/* Quick Amounts */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">Select Amount</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {["$25", "$50", "$100", "$250", "$500", "$1000", "Other"].map((amt) => (
                <button
                  key={amt}
                  onClick={() => amt !== "Other" && setAmount(amt.replace("$", ""))}
                  className={`py-3 px-4 rounded-lg font-semibold transition-all ${
                    amount === amt.replace("$", "")
                      ? "bg-blue-900 text-white"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  {amt}
                </button>
              ))}
            </div>
          </div>

          {/* Custom Amount */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-2">Or Enter Custom Amount (CAD)</label>
            <div className="flex gap-2">
              <span className="inline-flex items-center px-3 bg-gray-100 text-gray-600 rounded-lg">$</span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none"
              />
            </div>
          </div>

          {/* Payment Methods */}
          <div>
            <label className="block text-sm font-semibold text-gray-900 mb-3">Payment Method</label>
            <div className="space-y-3">
              <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-900 transition-colors">
                <input type="radio" name="payment" className="w-4 h-4" defaultChecked />
                <span className="flex-1 font-medium">Interac e-Transfer (Recommended)</span>
              </label>
              <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-900 transition-colors">
                <input type="radio" name="payment" className="w-4 h-4" />
                <span className="flex-1 font-medium">Credit/Debit Card</span>
              </label>
              <label className="flex items-center gap-3 p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-900 transition-colors">
                <input type="radio" name="payment" className="w-4 h-4" />
                <span className="flex-1 font-medium">Bank Transfer</span>
              </label>
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-start gap-3">
            <input type="checkbox" className="w-4 h-4 mt-1" />
            <p className="text-sm text-gray-600">
              I confirm my donation to the selected fund and authorize automatic CRA-compliant tax receipt generation.
            </p>
          </div>

          {/* Submit */}
          <button
            disabled={!selectedFund || !amount}
            className={`w-full py-4 rounded-lg font-bold text-white text-lg transition-all ${
              selectedFund && amount
                ? "bg-orange-500 hover:bg-orange-600 cursor-pointer"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Proceed to Payment - ${amount || "0"}
          </button>

          {/* Tax Info */}
          <div className="bg-blue-50 p-4 rounded-lg text-sm text-blue-900">
            <p className="font-semibold mb-2">✓ Tax Receipt</p>
            <p>You will receive an official CRA-compliant tax receipt via email immediately after your donation.</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default function MemberBenefits() {
  const benefits = [
    {
      category: "Spiritual Benefits",
      items: [
        "Access to all temple services and ceremonies",
        "Priority seating for festivals and special events",
        "Exclusive spiritual discourse sessions",
        "Pathshala registration for children",
      ],
    },
    {
      category: "Community Benefits",
      items: [
        "Networking opportunities with community members",
        "Access to community business directory",
        "Participation in cultural events and celebrations",
        "Community newsletter and updates",
      ],
    },
    {
      category: "Administrative Benefits",
      items: [
        "Voting rights in annual general meetings",
        "Access to member-only resources",
        "Hall rental discounts",
        "Priority support for community services",
      ],
    },
    {
      category: "Exclusive Benefits (Life Members)",
      items: [
        "Lifetime membership - no renewal fees",
        "VIP seating at major events",
        "Recognition in annual community report",
        "Special recognition plaque in temple",
      ],
    },
  ]

  return (
    <div className="space-y-8">
      <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded-lg">
        <p className="text-blue-900 font-semibold mb-2">Member Privileges</p>
        <p className="text-sm text-blue-900">
          As a valued member, you gain access to exclusive benefits and opportunities to serve the community.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {benefits.map((benefit, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md p-6 space-y-4">
            <h3 className="text-lg font-bold text-gray-900 pb-4 border-b-2 border-orange-500">{benefit.category}</h3>
            <ul className="space-y-3">
              {benefit.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold flex-shrink-0 mt-1">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Membership Types Comparison */}
      <div className="bg-white rounded-lg shadow-md p-8 space-y-6 overflow-x-auto">
        <h3 className="text-2xl font-bold text-gray-900">Membership Types Comparison</h3>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-gray-300">
              <th className="text-left py-3 px-4 font-bold">Feature</th>
              <th className="text-center py-3 px-4 font-bold">Regular</th>
              <th className="text-center py-3 px-4 font-bold">Life Member</th>
              <th className="text-center py-3 px-4 font-bold">Patron</th>
            </tr>
          </thead>
          <tbody>
            {[
              { feature: "Annual Membership", regular: "Yes", life: "Lifetime", patron: "Yes" },
              { feature: "Temple Access", regular: "Yes", life: "Yes", patron: "Yes" },
              { feature: "Voting Rights", regular: "Yes", life: "Yes", patron: "Yes" },
              { feature: "Hall Discount", regular: "10%", life: "25%", patron: "50%" },
              { feature: "Event Priority", regular: "Standard", life: "VIP", patron: "VIP+" },
              { feature: "Newsletter", regular: "Yes", life: "Yes", patron: "Yes" },
              { feature: "Recognition", regular: "No", life: "Yes", patron: "Premium" },
            ].map((row, idx) => (
              <tr key={idx} className={idx % 2 === 0 ? "bg-gray-50" : ""}>
                <td className="py-3 px-4 font-medium">{row.feature}</td>
                <td className="text-center py-3 px-4">{row.regular}</td>
                <td className="text-center py-3 px-4 font-semibold text-blue-900">{row.life}</td>
                <td className="text-center py-3 px-4 font-semibold text-orange-600">{row.patron}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

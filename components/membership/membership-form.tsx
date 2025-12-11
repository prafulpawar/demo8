"use client"

import type React from "react"

import { useState } from "react"
import { Users } from "lucide-react"

export default function MembershipForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    spouseName: "",
    children: [],
    address: "",
    city: "",
    province: "",
    postalCode: "",
    membershipType: "regular",
  })

  const [children, setChildren] = useState([{ name: "", age: "" }])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const addChild = () => {
    setChildren([...children, { name: "", age: "" }])
  }

  const updateChild = (index: number, field: string, value: string) => {
    const updated = [...children]
    updated[index] = { ...updated[index], [field]: value }
    setChildren(updated)
  }

  const removeChild = (index: number) => {
    setChildren(children.filter((_, i) => i !== index))
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Info Banner */}
      <div className="bg-blue-50 border-l-4 border-blue-900 p-6 rounded-lg space-y-2">
        <p className="text-blue-900 font-semibold flex items-center gap-2">
          <Users className="w-5 h-5" />
          Family-Based Membership
        </p>
        <p className="text-sm text-blue-900">
          Complete this form to register your family. Your information will help us with pathshala registration and
          community updates.
        </p>
      </div>

      <form className="bg-white rounded-lg shadow-md p-8 space-y-8">
        {/* Member Type */}
        <div>
          <label className="block text-sm font-semibold text-gray-900 mb-3">Membership Type</label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { id: "regular", label: "Regular Member", desc: "Individual/Family" },
              { id: "life", label: "Life Member", desc: "Lifetime membership" },
              { id: "patron", label: "Patron Member", desc: "Premium benefits" },
            ].map((type) => (
              <label
                key={type.id}
                className="flex items-center p-4 border-2 rounded-lg cursor-pointer hover:border-blue-900 transition-colors"
              >
                <input
                  type="radio"
                  name="membershipType"
                  value={type.id}
                  checked={formData.membershipType === type.id}
                  onChange={handleChange}
                  className="w-4 h-4"
                />
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">{type.label}</p>
                  <p className="text-sm text-gray-600">{type.desc}</p>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Primary Member */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">Primary Member Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">First Name *</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Last Name *</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Phone *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none"
                required
              />
            </div>
          </div>
        </div>

        {/* Spouse */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">Spouse Information (Optional)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Spouse Name</label>
              <input
                type="text"
                name="spouseName"
                value={formData.spouseName}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Children */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">Children (For Pathshala Registration)</h3>
          <div className="space-y-4 mb-4">
            {children.map((child, idx) => (
              <div key={idx} className="flex gap-3 items-end">
                <div className="flex-1">
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Child Name</label>
                  <input
                    type="text"
                    value={child.name}
                    onChange={(e) => updateChild(idx, "name", e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none"
                  />
                </div>
                <div className="w-20">
                  <label className="block text-sm font-semibold text-gray-900 mb-2">Age</label>
                  <input
                    type="number"
                    value={child.age}
                    onChange={(e) => updateChild(idx, "age", e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => removeChild(idx)}
                  className="px-4 py-3 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors font-medium"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={addChild}
            className="px-4 py-2 bg-blue-50 text-blue-900 rounded-lg font-semibold hover:bg-blue-100 transition-colors"
          >
            + Add Child
          </button>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">Address</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Address *</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">City *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Province *</label>
                <input
                  type="text"
                  name="province"
                  value={formData.province}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Postal Code *</label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-900 focus:outline-none"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* Submit */}
        <button type="submit" className="w-full btn-primary py-4 text-lg">
          Complete Membership Registration
        </button>
      </form>
    </div>
  )
}

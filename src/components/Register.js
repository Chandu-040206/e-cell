import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    year: "",
    team: "",
    motivation: "",
    experience: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // later connect backend
    alert("Application submitted successfully!");
  };

  return (
    <div className="pt-7 pb-20 bg-[#f9fafb] min-h-screen">
      <div className="max-w-xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-[#111]">
            Join E-Cell as a Member
          </h1>
          <p className="text-gray-600 mt-2">
            Be a part of RGUKT Ongole’s entrepreneurial ecosystem
          </p>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-lg p-8"
        >

          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="10-digit mobile number"
              className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Department */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Department / Branch
            </label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
              placeholder="CSE, ECE, Mechanical, etc."
              className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Year */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Year of Study
            </label>
            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
              className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option value="">Select year</option>
              <option>1st Year</option>
              <option>2nd Year</option>
              <option>3rd Year</option>
              <option>4th Year</option>
            </select>
          </div>

          {/* Team */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Preferred Team
            </label>
            <select
              name="team"
              value={formData.team}
              onChange={handleChange}
              required
              className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              <option value="">Select a team</option>
              <option>Core Team</option>
              <option>Technical Team</option>
              <option>Marketing & Outreach</option>
              <option>Events & Operations</option>
              <option>Design & Media</option>
            </select>
          </div>

          {/* Motivation */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Why do you want to join E-Cell?
            </label>
            <textarea
              name="motivation"
              rows="4"
              required
              value={formData.motivation}
              onChange={handleChange}
              placeholder="Tell us about your interest in entrepreneurship..."
              className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Experience */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">
              Prior Experience (optional)
            </label>
            <textarea
              name="experience"
              rows="3"
              value={formData.experience}
              onChange={handleChange}
              placeholder="Clubs, startups, projects, internships, etc."
              className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#ff7a00] text-white py-3 rounded-full font-semibold
                       hover:bg-orange-600 transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;

import { useState } from "react";

const ShareIdea = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    ideaTitle: "",
    problem: "",
    solution: "",
    market: "",
    stage: "",
    team: "",
    link: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // connect backend later
    alert("Your idea has been submitted successfully!");
  };

  return (
    <div className="pt-7 pb-20 bg-[#f9fafb] min-h-screen">
      <div className="max-w-xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-[#111]">
            Share Your Startup Idea
          </h1>
          <p className="text-gray-600 mt-2">
            Have an idea? Let us help you validate and build it.
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
              placeholder="Your full name"
              className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Idea Title */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Idea Title
            </label>
            <input
              type="text"
              name="ideaTitle"
              required
              value={formData.ideaTitle}
              onChange={handleChange}
              placeholder="Short and clear title"
              className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Problem */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Problem Statement
            </label>
            <textarea
              name="problem"
              rows="3"
              required
              value={formData.problem}
              onChange={handleChange}
              placeholder="What problem are you solving?"
              className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Solution */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Proposed Solution
            </label>
            <textarea
              name="solution"
              rows="3"
              required
              value={formData.solution}
              onChange={handleChange}
              placeholder="Describe your solution"
              className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Market */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Target Market
            </label>
            <input
              type="text"
              name="market"
              value={formData.market}
              onChange={handleChange}
              placeholder="Students, SMEs, Rural India, etc."
              className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Stage */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Current Stage
            </label>
            <select
              name="stage"
              required
              value={formData.stage}
              onChange={handleChange}
              className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select stage</option>
              <option>Idea Stage</option>
              <option>Prototype Built</option>
              <option>Early Users</option>
              <option>Revenue Generating</option>
            </select>
          </div>

          {/* Team */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Team Members (optional)
            </label>
            <input
              type="text"
              name="team"
              value={formData.team}
              onChange={handleChange}
              placeholder="Names or count"
              className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Link */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">
              Pitch Deck / Drive Link (optional)
            </label>
            <input
              type="url"
              name="link"
              value={formData.link}
              onChange={handleChange}
              placeholder="https://drive.google.com/..."
              className="w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold
                       hover:bg-blue-700 transition"
          >
            Submit Idea
          </button>
        </form>
      </div>
    </div>
  );
};

export default ShareIdea;

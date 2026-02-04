import { useState } from "react";

export default function ShareIdea() {
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
    console.log(formData);
    alert("Your idea has been submitted successfully!");
  };

  return (
    <section className="bg-slate-50 min-h-screen pt-10 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
            Share Your Startup Idea
          </h1>
          <div className="w-12 h-1 bg-blue-600 rounded-full mx-auto mt-3 mb-4" />
          <p className="text-slate-600 text-sm sm:text-base">
            Have an idea? Let us help you validate and build it.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-lg border border-slate-200
                     p-6 sm:p-8 md:p-10 space-y-5"
        >

          {/* Basic Info */}
          <div className="grid sm:grid-cols-2 gap-5">
            <Input label="Full Name" name="name" required onChange={handleChange} />
            <Input label="Email" name="email" type="email" required onChange={handleChange} />
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <Input label="Phone Number" name="phone" required onChange={handleChange} />
            <Input label="Idea Title" name="ideaTitle" required onChange={handleChange} />
          </div>

          <Textarea label="Problem Statement" name="problem" rows={3} required onChange={handleChange} />
          <Textarea label="Proposed Solution" name="solution" rows={3} required onChange={handleChange} />

          <div className="grid sm:grid-cols-2 gap-5">
            <Input label="Target Market" name="market" onChange={handleChange} />
            <Select
              label="Current Stage"
              name="stage"
              required
              options={[
                "Idea Stage",
                "Prototype Built",
                "Early Users",
                "Revenue Generating",
              ]}
              onChange={handleChange}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <Input label="Team Members (optional)" name="team" onChange={handleChange} />
            <Input label="Pitch Deck / Drive Link" name="link" type="url" onChange={handleChange} />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-full
                       font-semibold text-sm sm:text-base
                       hover:bg-blue-700 active:scale-[0.98] transition"
          >
            Submit Idea
          </button>
        </form>
      </div>
    </section>
  );
}

/* ===== Reusable Inputs ===== */

function Input({ label, type = "text", ...props }) {
  return (
    <div>
      <label className="block text-xs sm:text-sm font-medium mb-1 text-slate-700">
        {label}
      </label>
      <input
        type={type}
        {...props}
        className="w-full rounded-lg border border-slate-300 px-4 py-2.5
                   text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

function Textarea({ label, ...props }) {
  return (
    <div>
      <label className="block text-xs sm:text-sm font-medium mb-1 text-slate-700">
        {label}
      </label>
      <textarea
        {...props}
        className="w-full rounded-lg border border-slate-300 px-4 py-2.5
                   text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

function Select({ label, options, ...props }) {
  return (
    <div>
      <label className="block text-xs sm:text-sm font-medium mb-1 text-slate-700">
        {label}
      </label>
      <select
        {...props}
        className="w-full rounded-lg border border-slate-300 px-4 py-2.5
                   text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Select</option>
        {options.map((opt, i) => (
          <option key={i}>{opt}</option>
        ))}
      </select>
    </div>
  );
}
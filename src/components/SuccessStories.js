import React from "react";

const stories = [
  {
    title: "From Campus Idea to Startup Launch",
    name: "Team Ignite (RGUKT Ongole)",
    desc:
      "A 3-member student team validated a problem, built an MVP in 6 weeks, and launched a campus-first product with early traction through E-Cell mentorship and weekly reviews.",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Internship-to-Entrepreneurship Journey",
    name: "Venture Fellows Batch",
    desc:
      "Students gained real startup exposure through projects, pitch practice, and founder sessions. Several members transitioned from internships to building their own solutions.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Pitch Day: Funding & Partnerships",
    name: "E-Cell Demo Day",
    desc:
      "Teams refined storytelling, financials, and product clarity. The top pitches earned incubation support and industry connections for next-stage execution.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  },
];

function StoryCard({ story }) {
  return (
    <article
      className="
        group overflow-hidden rounded-3xl bg-white
        shadow-md hover:shadow-xl
        transition duration-300 hover:-translate-y-2
      "
    >
      {/* Image */}
      <div className="relative h-60 w-full overflow-hidden">
        <img
          src={story.image}
          alt={story.title}
          loading="lazy"
          className="
            h-full w-full object-cover
            transition duration-700
            group-hover:scale-110
          "
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E5F]/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-7">
        <h3 className="text-xl font-bold text-[#0B2E5F] leading-snug">
          {story.title}
        </h3>

        <p className="mt-2 text-sm font-semibold text-orange-600">
          {story.name}
        </p>

        <p className="mt-4 text-gray-600 leading-relaxed text-[15px]">
          {story.desc}
        </p>
      </div>
    </article>
  );
}

export default function SuccessStories() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B2E5F]">
            Our Success Stories
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-orange-500" />

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
            Real progress starts with small steps—ideas, mentorship,
            teamwork, and consistent execution. Here are a few highlights
            from our E-Cell journey.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {stories.map((s) => (
            <StoryCard key={s.title} story={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

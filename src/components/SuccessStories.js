import React from "react";
import { Link } from "react-router-dom";

const stories = [
    {
        title: "From Campus Idea to Startup Launch",
        badge: "Startup",
        name: "Team Ignite (RGUKT Ongole)",
        desc:
            "A 3-member student team validated a problem, built an MVP in 6 weeks, and launched a campus-first product with early traction through E-Cell mentorship and weekly reviews.",
        metrics: [
            { label: "MVP", value: "6 weeks" },
            { label: "Pilot Users", value: "250+" },
            { label: "Mentors", value: "8" },
        ],
        image:
            "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80",
    },
    {
        title: "Internship-to-Entrepreneurship Journey",
        badge: "Career",
        name: "Venture Fellows Batch",
        desc:
            "Students gained real startup exposure through projects, pitch practice, and founder sessions. Several members transitioned from internships to building their own solutions.",
        metrics: [
            { label: "Workshops", value: "12" },
            { label: "Projects", value: "30+" },
            { label: "Founders", value: "15" },
        ],
        image:
            "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    },
    {
        title: "Pitch Day: Funding & Partnerships",
        badge: "Pitch",
        name: "E-Cell Demo Day",
        desc:
            "Teams refined storytelling, financials, and product clarity. The top pitches earned incubation support and industry connections for next-stage execution.",
        metrics: [
            { label: "Teams Pitched", value: "18" },
            { label: "Partnerships", value: "5" },
            { label: "Incubation", value: "3 teams" },
        ],
        image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    },
];

const Badge = ({ children }) => (
    <span className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
        {children}
    </span>
);

const Stat = ({ label, value }) => (
    <div className="rounded-xl bg-white/70 px-3 py-2 ring-1 ring-gray-200">
        <p className="text-[11px] text-gray-500">{label}</p>
        <p className="text-sm font-semibold text-gray-900">{value}</p>
    </div>
);

function StoryCard({ story }) {
    return (
        <article className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 hover:shadow-lg transition">
            <div className="relative h-52 w-full overflow-hidden">
                <img
                    src={story.image}
                    alt={story.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E5F]/80 via-[#0B2E5F]/20 to-transparent" />
                <div className="absolute left-5 top-5">
                    <Badge>{story.badge}</Badge>
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B2E5F]">{story.title}</h3>
                <p className="mt-1 text-sm font-medium text-gray-700">{story.name}</p>

                <p className="mt-4 text-gray-600 leading-relaxed">{story.desc}</p>

                <div className="mt-5 grid grid-cols-3 gap-3">
                    {story.metrics.map((m) => (
                        <Stat key={m.label} label={m.label} value={m.value} />
                    ))}
                </div>

            </div>
        </article>
    );
}

export default function SuccessStories() {
    return (
        <section className="bg-gray-50">
            <div className="max-w-6xl mx-auto px-6 py-16">
                {/* Heading */}
                <div className="text-center">
                    <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-[#0B2E5F]">
                        Our Success Stories
                    </h2>

                    <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-orange-500" />

                    <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
                        Real progress starts with small steps—ideas, mentorship, teamwork, and
                        consistent execution. Here are a few highlights from our E-Cell journey.
                    </p>
                </div>

                {/* Cards */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {stories.map((s) => (
                        <StoryCard key={s.title} story={s} />
                    ))}
                </div>

                {/* CTA (✅ no href="#" warnings) */}
                {/* <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        to="/join"
                        className="rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white hover:opacity-95 transition"
                    >
                        Share your story
                    </Link>

                    <Link
                        to="/success-stories"
                        className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#0B2E5F] ring-1 ring-gray-200 hover:bg-gray-100 transition"
                    >
                        Explore all stories
                    </Link>
                </div> */}
            </div>
        </section>
    );
}

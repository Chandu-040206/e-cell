import React from "react";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import ram from "../utils/images/ram.png";
import nag from "../utils/images/nag.png";
import venu from "../utils/images/venu.png";

const team = [
  {
    name: "Ram Nidamanuri",
    role: "Student Co-ordinator",
    image: ram,
    linkedin: "https://www.linkedin.com/in/ram-charan-nidamanuri-67401534a/",
    instagram: "https://www.instagram.com/charan_nidamanuri/",
    facebook: "#",
  },
  {
    name: "Siva Nagaraju",
    role: "Secretary & Rnd Head",
    image: nag,
    linkedin: "https://www.linkedin.com/in/siva-nagaraju-205433344/",
    instagram: "#",
    facebook: "#",
  },
  {
    name: "Venu Guduri",
    role: "Faculty Co-ordinator",
    image: venu,
    linkedin: "https://www.linkedin.com/in/venu-guduri-16ab29286/",
    instagram: "#",
    facebook: "#",
  },
  {
    name: "AO-Chandra",
    role: "Advisory Board",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=800&q=80",
    linkedin: "#",
    instagram: "#",
    facebook: "#",
  },
  {
    name: "Meeravali",
    role: "Advisory Board",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    linkedin: "#",
    instagram: "#",
    facebook: "#",
  },
  {
    name: "Varshini Dhupati",
    role: "Event Co-ordinator",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    linkedin: "#",
    instagram: "#",
    facebook: "#",
  },
  {
    name: "Sireesha",
    role: "Social Media Manager",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    linkedin: "#",
    instagram: "#",
    facebook: "#",
  },
];

export default function Team() {
  return (
    <section className="bg-slate-50 pt-7 pb-14 md:pb-16">

      {/* Heading — matches Events & Gallery style */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-900">
          Meet the Team
        </h1>

        <div className="w-16 h-1 bg-orange-500 rounded-full mx-auto mt-3 mb-4" />

        <p className="text-slate-600 leading-relaxed text-xl">
          All the work we do is possible only with the cooperation of a
          passionately dedicated team. Meet the members who drive our
          initiatives and make things happen.
        </p>
      </div>

      {/* ===== SAME 2–3–2 CARD LAYOUT — spacing tuned only ===== */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-10">

        <div className="flex justify-center gap-8 flex-wrap">
          {team.slice(0, 2).map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>

        <div className="flex justify-center gap-8 flex-wrap">
          {team.slice(2, 5).map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>

        <div className="flex justify-center gap-8 flex-wrap">
          {team.slice(5, 7).map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>

      </div>
    </section>
  );
}

/* 🔒 TeamCard — unchanged exactly */
function TeamCard({ member }) {
  return (
    <div className="group relative w-72 rounded-xl overflow-hidden shadow-lg">
      <img
        src={member.image}
        alt={member.name}
        loading="lazy"
        className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-end text-center text-white px-4 pb-6">
        <h3 className="text-xl font-semibold">{member.name}</h3>
        <p className="text-sm text-gray-300 mb-3">{member.role}</p>

        <div className="flex gap-4">
          <a href={member.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/20 hover:bg-[#0A66C2] transition">
            <FaLinkedinIn className="text-white" />
          </a>

          <a href={member.instagram} target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/20 hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] transition">
            <FaInstagram className="text-white" />
          </a>

          <a href={member.facebook} target="_blank" rel="noreferrer" className="p-2 rounded-full bg-white/20 hover:bg-[#1877F2] transition">
            <FaFacebookF className="text-white" />
          </a>
        </div>
      </div>
    </div>
  );
}

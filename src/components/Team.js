import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaPlus,
  FaTrash,
} from "react-icons/fa";
import ram from "../utils/images/ram.png";
import nag from "../utils/images/nag.png";
import venu from "../utils/images/venu.png";

const initialTeam = [
  {
    name: "Ram Nidamanuri",
    role: "Student Co-ordinator",
    image: ram,
    linkedin: "https://www.linkedin.com/in/ram-charan-nidamanuri-67401534a/",
    instagram: "https://www.instagram.com/charan_nidamanuri/",
    facebook: "",
  },
  {
    name: "Siva Nagaraju",
    role: "Secretary & Rnd Head",
    image: nag,
    linkedin: "https://www.linkedin.com/in/siva-nagaraju-205433344/",
    instagram: "",
    facebook: "",
  },
  {
    name: "Venu Guduri",
    role: "Faculty Co-ordinator",
    image: venu,
    linkedin: "https://www.linkedin.com/in/venu-guduri-16ab29286/",
    instagram: "",
    facebook: "",
  },
  {
    name: "AO-Chandra",
    role: "Advisory Board",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=800&q=80",
    linkedin: "",
    instagram: "",
    facebook: "",
  },
  {
    name: "Meeravali",
    role: "Advisory Board",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    linkedin: "",
    instagram: "",
    facebook: "",
  },
  {
    name: "Varshini Dhupati",
    role: "Event Co-ordinator",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    linkedin: "",
    instagram: "",
    facebook: "",
  },
  {
    name: "Sireesha",
    role: "Social Media Manager",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    linkedin: "",
    instagram: "",
    facebook: "",
  },
];

export default function Team() {
  const navigate = useNavigate();
  const [team, setTeam] = useState(initialTeam);
  const [showModal, setShowModal] = useState(false);

  const [newMember, setNewMember] = useState({
    name: "",
    role: "",
    image: "",
    linkedin: "",
    instagram: "",
    facebook: "",
  });

  // Check admin state
  const [isAdmin, setIsAdmin] = useState(
    localStorage.getItem("isAdmin") === "true"
  );

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    setIsAdmin(false);
    navigate("/");
  };

  const handleAddMember = () => {
    if (!newMember.name || !newMember.role || !newMember.image) return;
    setTeam([...team, newMember]);
    setNewMember({
      name: "",
      role: "",
      image: "",
      linkedin: "",
      instagram: "",
      facebook: "",
    });
    setShowModal(false);
  };

  const handleDelete = (index) => {
    setTeam(team.filter((_, i) => i !== index));
  };

  return (
    <section className="bg-slate-50 pt-7 pb-14 md:pb-16 relative">
      {/* HEADER */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-10 relative">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-900">
          Meet the Team
        </h1>

        <div className="w-16 h-1 bg-orange-500 rounded-full mx-auto mt-3 mb-4" />

        <p className="text-slate-600 leading-relaxed text-xl">
          All the work we do is possible only with the cooperation of a
          passionately dedicated team.
        </p>

        {/* ADMIN BUTTONS */}
        {isAdmin && (
          <div className="absolute right-6 top-0 flex gap-3">
            <button
              onClick={() => setShowModal(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg"
            >
              <FaPlus />
            </button>

            <button
              onClick={handleLogout}
              className="bg-blue-900 hover:bg-blue-800 text-white p-3 rounded-full shadow-lg"
            >
              Logout
            </button>
          </div>
        )}
      </div>

      {/* TEAM CARDS */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-10">
        {[0, 2, 5].map((start, i) => (
          <div key={i} className="flex justify-center gap-8 flex-wrap">
            {team.slice(start, i === 0 ? 2 : i === 1 ? 5 : 7).map((m, idx) => (
              <TeamCard
                key={idx + start}
                member={m}
                isAdmin={isAdmin}
                onDelete={() => handleDelete(idx + start)}
              />
            ))}
          </div>
        ))}
      </div>

      {/* ADD MODAL */}
      {showModal && isAdmin && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-96 space-y-3">
            <h2 className="text-xl font-semibold text-center">
              Add Team Member
            </h2>

            {["name", "role", "image", "linkedin", "instagram", "facebook"].map(
              (field) => (
                <input
                  key={field}
                  type="text"
                  placeholder={field.toUpperCase()}
                  className="w-full border p-2 rounded"
                  value={newMember[field]}
                  onChange={(e) =>
                    setNewMember({ ...newMember, [field]: e.target.value })
                  }
                />
              )
            )}

            <div className="flex justify-between pt-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleAddMember}
                className="px-4 py-2 bg-orange-500 text-white rounded"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* TEAM CARD */
function TeamCard({ member, isAdmin, onDelete }) {
  const handleClick = (e, link) => {
    if (!link) e.preventDefault();
  };

  const iconBase = "p-2 rounded-full bg-white/20 transition text-white";

  return (
    <div className="group relative w-72 rounded-xl overflow-hidden shadow-lg">
      {isAdmin && onDelete && (
        <button
          onClick={onDelete}
          className="absolute top-3 right-3 z-10 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full"
        >
          <FaTrash size={14} />
        </button>
      )}

      <img
        src={member.image}
        alt={member.name}
        className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-end text-center text-white px-4 pb-6">
        <h3 className="text-xl font-semibold">{member.name}</h3>
        <p className="text-sm text-gray-300 mb-3">{member.role}</p>

        <div className="flex gap-4">
          <a
            href={member.linkedin || "#"}
            onClick={(e) => handleClick(e, member.linkedin)}
            target="_blank"
            rel="noreferrer"
            className={`${iconBase} hover:bg-[#0A66C2]`}
          >
            <FaLinkedinIn />
          </a>

          <a
            href={member.instagram || "#"}
            onClick={(e) => handleClick(e, member.instagram)}
            target="_blank"
            rel="noreferrer"
            className={`${iconBase} hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF]`}
          >
            <FaInstagram />
          </a>

          <a
            href={member.facebook || "#"}
            onClick={(e) => handleClick(e, member.facebook)}
            target="_blank"
            rel="noreferrer"
            className={`${iconBase} hover:bg-[#1877F2]`}
          >
            <FaFacebookF />
          </a>
        </div>
      </div>
    </div>
  );
}
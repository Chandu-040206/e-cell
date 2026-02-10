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
    linkedin: "",
    instagram: "",
    facebook: "",
  },
  {
    name: "Siva Nagaraju",
    role: "Secretary & Rnd Head",
    image: nag,
  },
  {
    name: "Venu Guduri",
    role: "Faculty Co-ordinator",
    image: venu,
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

  const [isAdmin, setIsAdmin] = useState(
    localStorage.getItem("isAdmin") === "true"
  );

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    setIsAdmin(false);
    navigate("/");
  };

  /* ✅ IMAGE PICKER HANDLER */
  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewMember({
        ...newMember,
        image: URL.createObjectURL(file),
      });
    }
  };

  /* ✅ ADD MEMBER */
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
    <section className="bg-slate-50 pt-7 pb-14 relative">
      {/* HEADER */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-10 relative">
        <h1 className="text-4xl font-bold text-blue-900">Meet the Team</h1>

        <p className="text-slate-600 text-lg mt-3">
          All the work we do is possible only with a dedicated team.
        </p>

        {isAdmin && (
          <div className="absolute right-6 top-0 flex gap-3">
            <button
              onClick={() => setShowModal(true)}
              className="bg-orange-500 text-white p-3 rounded-full"
            >
              <FaPlus />
            </button>

            <button
              onClick={handleLogout}
              className="bg-blue-900 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </div>
        )}
      </div>

      {/* TEAM GRID */}
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-8 justify-center">
        {team.map((m, idx) => (
          <TeamCard
            key={idx}
            member={m}
            isAdmin={isAdmin}
            onDelete={() => handleDelete(idx)}
          />
        ))}
      </div>

      {/* ✅ ADD MEMBER MODAL */}
      {showModal && isAdmin && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-96 space-y-3">
            <h2 className="text-xl font-semibold text-center">
              Add Team Member
            </h2>

            <input
              type="text"
              placeholder="Name"
              className="w-full border p-2 rounded"
              value={newMember.name}
              onChange={(e) =>
                setNewMember({ ...newMember, name: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Role"
              className="w-full border p-2 rounded"
              value={newMember.role}
              onChange={(e) =>
                setNewMember({ ...newMember, role: e.target.value })
              }
            />

            {/* ✅ FILE PICKER */}
            <input
              type="file"
              accept="image/*"
              className="w-full border p-2 rounded"
              onChange={handleImageSelect}
            />

            <input
              type="text"
              placeholder="LinkedIn"
              className="w-full border p-2 rounded"
              value={newMember.linkedin}
              onChange={(e) =>
                setNewMember({ ...newMember, linkedin: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Instagram"
              className="w-full border p-2 rounded"
              value={newMember.instagram}
              onChange={(e) =>
                setNewMember({ ...newMember, instagram: e.target.value })
              }
            />

            <input
              type="text"
              placeholder="Facebook"
              className="w-full border p-2 rounded"
              value={newMember.facebook}
              onChange={(e) =>
                setNewMember({ ...newMember, facebook: e.target.value })
              }
            />

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
  const iconBase = "p-2 rounded-full bg-white/20 text-white";

  return (
    <div className="group relative w-72 rounded-xl overflow-hidden shadow-lg">
      {isAdmin && (
        <button
          onClick={onDelete}
          className="absolute top-3 right-3 bg-red-500 text-white p-2 rounded-full z-10"
        >
          <FaTrash size={14} />
        </button>
      )}

      <img
        src={member.image}
        alt={member.name}
        className="h-80 w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-end text-white pb-6">
        <h3 className="text-xl font-semibold">{member.name}</h3>
        <p className="text-sm text-gray-300 mb-3">{member.role}</p>

        <div className="flex gap-4">
          {member.linkedin && (
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className={iconBase} />
            </a>
          )}
          {member.instagram && (
            <a href={member.instagram} target="_blank" rel="noopener noreferrer">
              <FaInstagram className={iconBase} />
            </a>
          )}
          {member.facebook && (
            <a href={member.facebook} target="_blank" rel="noopener noreferrer">
              <FaFacebookF className={iconBase} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

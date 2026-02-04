import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import intro2 from "../utils/images/6.jpeg";
import intro3 from "../utils/images/11.jpeg";
import img3 from "../utils/images/1.jpeg";
import img4 from "../utils/images/2.jpeg";
import img5 from "../utils/images/4.jpeg";
import img6 from "../utils/images/9.jpeg";
import img7 from "../utils/images/7.jpeg";
import img8 from "../utils/images/12.jpeg";
import img9 from "../utils/images/8.jpeg";

/* ---------- INITIAL DATA ---------- */
const initialGalleryData = [
  { title: "Startup Challenge", date: "March 2025", img: intro2 },
  { title: "Networking Meet", date: "Feb 2025", img: intro3 },
  { title: "Pitch Day", date: "April 2025", img: img3 },
  { title: "Funding Workshop", date: "April 2025", img: img4 },
  { title: "Hackathon", date: "Mar 2025", img: img5 },
  { title: "Ideation Workshop", date: "March 2025", img: img6 },
  { title: "Team Meetup", date: "Feb 2025", img: img7 },
  { title: "Meetup Session", date: "Feb 2025", img: img8 },
  { title: "Startup Fair", date: "Mar 2025", img: img9 },
];

/* ---------- CARD ---------- */
function GalleryCard({ item, isAdmin, onDelete, onView }) {
  return (
    <div
      className="relative group rounded-lg overflow-hidden shadow-md cursor-pointer"
      onClick={onView}
    >
      <img
        src={item.img}
        alt={item.title}
        className="
          w-full object-cover transition duration-300 group-hover:scale-105
          h-28 min-[360px]:h-32 sm:h-40 md:h-48 lg:h-56
        "
      />

      {isAdmin && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          className="absolute top-1.5 right-1.5 z-10 bg-red-600 text-white p-1 rounded-full text-xs"
        >
          🗑️
        </button>
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition" />

      <div className="pointer-events-none absolute bottom-1.5 left-1.5 right-1.5 text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition">
        <h3 className="text-[10px] min-[360px]:text-[11px] sm:text-sm font-semibold leading-tight">
          {item.title}
        </h3>
        <p className="text-[9px] min-[360px]:text-[10px] text-gray-300">
          {item.date}
        </p>
      </div>
    </div>
  );
}

/* ---------- MAIN COMPONENT ---------- */
export default function Gallery() {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [galleryData, setGalleryData] = useState(initialGalleryData);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ title: "", date: "", img: null });

  /* 🔹 image popup state */
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    setIsAdmin(localStorage.getItem("isAdmin") === "true");
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/");
  };

  const handleAddImage = (e) => {
    e.preventDefault();
    const newItem = {
      title: formData.title,
      date: formData.date,
      img: URL.createObjectURL(formData.img),
    };
    setGalleryData([newItem, ...galleryData]);
    setShowModal(false);
    setFormData({ title: "", date: "", img: null });
  };

  const handleDelete = (index) => {
    setGalleryData((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <section className="bg-slate-50 py-5 sm:py-7">
      {/* ---------- HEADER ---------- */}
      <div className="relative max-w-3xl mx-auto px-3 sm:px-5 text-center mb-6">
        {isAdmin && (
          <button
            onClick={handleLogout}
            className="absolute right-3 top-0 bg-red-600 text-white px-3 py-1.5 rounded-md text-xs sm:text-sm"
          >
            Logout
          </button>
        )}

        <h1 className="font-bold text-blue-900 text-lg min-[360px]:text-xl sm:text-4xl">
          Moments That Matter
        </h1>

        <div className="w-12 sm:w-16 h-1 bg-orange-500 mx-auto mt-3 mb-4 rounded-full" />

        <p className="text-slate-600 text-[11px] min-[360px]:text-xs sm:text-base">
          Capturing innovation, leadership and unforgettable experiences from
          our events, workshops and startup journeys.
        </p>

        {isAdmin && (
          <button
            onClick={() => setShowModal(true)}
            className="mt-4 bg-blue-600 text-white text-lg px-4 py-2 rounded-md"
          >
            ➕
          </button>
        )}
      </div>

      {/* ---------- GALLERY ---------- */}
      <div
        className="
          max-w-6xl mx-auto px-3 sm:px-5 md:px-8
          grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4
          gap-3 sm:gap-4
        "
      >
        {galleryData.map((item, index) => (
          <GalleryCard
            key={index}
            item={item}
            isAdmin={isAdmin}
            onDelete={() => handleDelete(index)}
            onView={() => setSelectedImage(item)}
          />
        ))}
      </div>

      {/* ---------- IMAGE POPUP ---------- */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="bg-white rounded-lg overflow-hidden max-w-3xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* X button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-white bg-orange-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg hover:bg-red-700 transition"
            >
              ✕
            </button>

            <img
              src={selectedImage.img}
              alt={selectedImage.title}
              className="w-full max-h-[70vh] object-contain bg-black"
            />

            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">
                {selectedImage.title}
              </h3>
              <p className="text-sm text-gray-500">
                {selectedImage.date}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ---------- ADD IMAGE MODAL ---------- */}
      {isAdmin && showModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-3">
          <div className="bg-white rounded-lg p-4 sm:p-6 w-full max-w-sm">
            <h2 className="text-sm sm:text-lg font-bold mb-3">
              Add Gallery Image
            </h2>

            <form onSubmit={handleAddImage} className="space-y-3">
              <input
                type="text"
                placeholder="Event Name"
                className="w-full border px-3 py-2 rounded text-sm"
                required
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />

              <input
                type="text"
                placeholder="Event Date"
                className="w-full border px-3 py-2 rounded text-sm"
                required
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
              />

              <input
                type="file"
                accept="image/*"
                required
                onChange={(e) =>
                  setFormData({ ...formData, img: e.target.files[0] })
                }
              />

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="border px-3 py-1.5 rounded text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-3 py-1.5 rounded text-sm"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
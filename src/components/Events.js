import { useState, useEffect } from "react";
import image1 from "../utils/images/1.jpeg";
import image2 from "../utils/images/5.jpeg";
import image3 from "../utils/images/10.jpeg";
import image4 from "../utils/images/2.jpeg";
import image5 from "../utils/images/3.jpeg";
import image6 from "../utils/images/6.jpeg";
import image7 from "../utils/images/7.jpeg";
import image8 from "../utils/images/8.jpeg";
import image9 from "../utils/images/9.jpeg";
import image10 from "../utils/images/10.jpeg";
import image11 from "../utils/images/11.jpeg";
import image12 from "../utils/images/12.jpeg";

const upcomingEvents = [
  {
    id: 1,
    title: "Anniversary Event",
    date: "February 27, 2026",
    desc: "Compete with innovative founders and pitch your startup idea.",
    image: image1,
  },
  {
    id: 2,
    title: "Startup Weekend",
    date: "March 15, 2026",
    desc: "Learn how to raise funds and talk to investors confidently.",
    image: image2,
  },
  {
    id: 3,
    title: "Business Quiz",
    date: "April 8, 2026",
    desc: "Show your knowledge and have some fun.",
    image: image3,
  },
];

const pastEvents = [
  {
    id: 1,
    title: "Incubator Meeting",
    date: "September 22,2025",
    desc: "An evening of professional networking and collaboration.",
    images: [image1, image2, image3],
    details:
      "This event focused on creating meaningful connections. Attendees engaged in networking activities, panel discussions, and interactive workshops.",
  },
  {
    id: 2,
    title: "Annual Meet",
    date: "September 20,2025",
    desc: "An evening of professional networking and collaboration.",
    images: [image4, image5, image6],
    details:
      "This event focused on creating meaningful connections. Attendees engaged in networking activities, panel discussions, and interactive workshops.",
  },
  {
    id: 3,
    title: "E-Cell Hack Arena",
    date: "September 8,2025",
    desc: "An evening of professional networking and collaboration.",
    images: [image8, image7, image9],
    details:
      "This event focused on creating meaningful connections. Attendees engaged in networking activities, panel discussions, and interactive workshops.",
  },
  {
    id: 4,
    title: "Enterpreneurial Talk",
    date: "July 30,2025",
    desc: "An evening of professional networking and collaboration.",
    images: [image10, image5, image12],
    details:
      "This event focused on creating meaningful connections. Attendees engaged in networking activities, panel discussions, and interactive workshops.",
  },
  {
    id: 5,
    title: "Startup Expo",
    date: "February 29,2025",
    desc: "Industry leaders shared insights on latest technologies.",
    images: [image11, image2, image4],
    details:
      "Developers and entrepreneurs discussed AI, blockchain, and modern software architecture.",
  },
];

export default function Events() {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "Student",
    reason: "",
  });

  /* ✅ lock background scroll when modal opens */
  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  const handleFormChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registered for ${selectedEvent.title}`);
    setShowModal(false);
  };

  const openModal = (event, type) => {
    setSelectedEvent(event);
    setModalType(type);
    setShowModal(true);
    if (event.images) setSelectedImage(event.images[0]);
  };

  return (
    <section className="bg-slate-50 pt-7 pb-14 md:pb-16">

      {/* Heading */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-900">
          Our Events
        </h1>

        <div className="w-16 h-1 bg-orange-500 rounded-full mx-auto mt-3 mb-4" />

        <p className="text-slate-600 text-xl">
          Explore our upcoming programs and highlights from past events.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-3 mb-10 px-6">
        {["upcoming", "past"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              px-7 py-2.5 rounded-full font-semibold text-sm transition border
              ${activeTab === tab
                ? "bg-blue-900 text-white border-blue-900 shadow"
                : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
              }
            `}
          >
            {tab === "upcoming" ? "Upcoming Events" : "Past Events"}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="px-6 max-w-7xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">

        {activeTab === "upcoming" &&
          upcomingEvents.map((e) => (
            <Card key={e.id} event={e} onClick={() => openModal(e, "register")} btn="Register" btnStyle="blue" />
          ))}

        {activeTab === "past" &&
          pastEvents.map((e) => (
            <Card key={e.id} event={{ ...e, image: e.images[0] }} onClick={() => openModal(e, "details")} btn="Learn More" btnStyle="orange" />
          ))}
      </div>

      {/* Modal */}
      {showModal && selectedEvent && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 p-4 overflow-y-auto">
          <div className="min-h-full flex items-center justify-center pt-10">

            <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl p-8 relative animate-fadeIn">

              <button
                onClick={() => setShowModal(false)}
                className="absolute right-5 top-5 text-slate-400 hover:text-slate-800 text-xl"
              >
                ✕
              </button>

              {/* Register */}
              {modalType === "register" && (
                <>
                  <h2 className="text-2xl font-bold mb-6 text-blue-900">
                    Register for {selectedEvent.title}
                  </h2>

                  <form className="grid md:grid-cols-2 gap-5" onSubmit={handleSubmit}>
                    <Input label="Full Name" name="name" onChange={handleFormChange} />
                    <Input label="Email" name="email" type="email" onChange={handleFormChange} />
                    <Input label="Phone" name="phone" onChange={handleFormChange} />

                    <div>
                      <label className="label">Role</label>
                      <select name="role" onChange={handleFormChange} className="input">
                        <option>Student</option>
                        <option>Professional</option>
                        <option>Entrepreneur</option>
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label className="label">Why attend?</label>
                      <textarea name="reason" rows="4" onChange={handleFormChange} className="input" />
                    </div>

                    <button className="md:col-span-2 submitBtn">
                      Submit Registration
                    </button>
                  </form>
                </>
              )}

              {/* Details */}
              {modalType === "details" && (
                <>
                  <h2 className="text-3xl font-bold text-blue-900 mb-2">
                    {selectedEvent.title}
                  </h2>

                  <span className="inline-block bg-slate-100 px-3 py-1 rounded-full text-sm text-slate-600 mb-5">
                    {selectedEvent.date}
                  </span>

                  <img
                    src={selectedImage}
                    alt=""
                    className="w-full h-64 object-cover rounded-2xl shadow-md mb-6"
                  />

                  <div className="bg-slate-50 rounded-xl p-5 text-slate-700 mb-6">
                    {selectedEvent.details}
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {selectedEvent.images.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt=""
                        onClick={() => setSelectedImage(img)}
                        className={`cursor-pointer h-24 w-full object-cover rounded-xl border-2 ${selectedImage === img
                            ? "border-blue-900"
                            : "border-transparent"
                          }`}
                      />
                    ))}
                  </div>
                </>
              )}

            </div>
          </div>
        </div>
      )}

      <style>{`
        .input {
          width:100%;
          border:1px solid #e5e7eb;
          padding:12px 14px;
          border-radius:12px;
          outline:none;
        }
        .input:focus {
          border-color:#1e3a8a;
          box-shadow:0 0 0 2px rgba(30,58,138,.15);
        }
        .label {
          font-size:14px;
          font-weight:600;
          margin-bottom:6px;
          display:block;
          color:#334155;
        }
        .submitBtn {
          background:#1e3a8a;
          color:white;
          padding:14px;
          border-radius:14px;
          font-weight:600;
        }
        @keyframes fadeIn {
          from {opacity:0; transform:scale(.95)}
          to {opacity:1; transform:scale(1)}
        }
        .animate-fadeIn {
          animation: fadeIn .25s ease-out forwards;
        }
      `}</style>
    </section>
  );
}

/* Card — unchanged structure */
function Card({ event, onClick, btn, btnStyle }) {
  const color =
    btnStyle === "blue"
      ? "bg-blue-900 hover:bg-blue-800"
      : "bg-orange-500 hover:bg-orange-600";

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden hover:-translate-y-1 transition">
      <img src={event.image} className="h-44 w-full object-cover" alt="" />
      <div className="p-5">
        <h3 className="text-lg font-semibold text-slate-800">{event.title}</h3>
        <p className="text-sm text-slate-500">{event.date}</p>
        <p className="mt-2 text-slate-600">{event.desc}</p>
        <button
          onClick={onClick}
          className={`mt-4 px-5 py-2 rounded-full text-white text-sm font-medium ${color}`}
        >
          {btn}
        </button>
      </div>
    </div>
  );
}

function Input({ label, ...props }) {
  return (
    <div>
      <label className="label">{label}</label>
      <input {...props} className="input" />
    </div>
  );
}

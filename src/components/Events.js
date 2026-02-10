import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Trash2, Check } from "lucide-react";

/* Images */
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

export default function Events() {
  const navigate = useNavigate();

  /* ADMIN */
  const [isAdmin, setIsAdmin] = useState(
    localStorage.getItem("isAdmin") === "true"
  );

  /* UI STATE */
  const [activeTab, setActiveTab] = useState("upcoming");
  const [showAddEvent, setShowAddEvent] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");

  /* UPCOMING EVENTS */
  const [upcomingEvents, setUpcomingEvents] = useState([
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
  ]);

  /* PAST EVENTS */
  const [pastEvents, setPastEvents] = useState([
    {
      id: 1,
      title: "Incubator Meeting",
      date: "September 22, 2025",
      desc: "An evening of professional networking and collaboration.",
      images: [image1, image2, image3],
      details:
        "This event focused on creating meaningful connections and collaboration.",
    },
    {
      id: 2,
      title: "Annual Meet",
      date: "September 20, 2025",
      desc: "An evening of professional networking and collaboration.",
      images: [image4, image5, image6],
      details:
        "Panel discussions, startup showcases and networking sessions.",
    },
    {
      id: 3,
      title: "E-Cell Hack Arena",
      date: "September 8, 2025",
      desc: "Hackathon focused on innovation and problem solving.",
      images: [image8, image7, image9],
      details: "Students collaborated to solve real-world challenges.",
    },
    {
      id: 4,
      title: "Entrepreneurial Talk",
      date: "July 30, 2025",
      desc: "Talk by experienced entrepreneurs and startup mentors.",
      images: [image10, image5, image12],
      details: "Insights into startup journeys and failures.",
    },
    {
      id: 5,
      title: "Startup Expo",
      date: "February 29, 2025",
      desc: "Industry leaders shared insights on latest technologies.",
      images: [image11, image2, image4],
      details: "AI, Blockchain and modern startup ecosystems.",
    },
  ]);

  /* LOCK SCROLL */
  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  /* LOGOUT */
  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    setIsAdmin(false);
    navigate("/");
  };

  /* ADD EVENT */
  const addEvent = (e) => {
    e.preventDefault();
    const form = e.target;

    const file = form.image.files[0];

    const newEvent = {
      id: Date.now(),
      title: form.title.value,
      date: form.date.value,
      desc: form.desc.value,
      image: file ? URL.createObjectURL(file) : "",
    };

    setUpcomingEvents([...upcomingEvents, newEvent]);
    setShowAddEvent(false);
    form.reset();
  };


  /* DELETE */
  const deleteUpcomingEvent = (id) =>
    setUpcomingEvents(upcomingEvents.filter((e) => e.id !== id));

  const deletePastEvent = (id) =>
    setPastEvents(pastEvents.filter((e) => e.id !== id));

  /* MODAL OPEN */
  const openModal = (event, type) => {
    setSelectedEvent(event);
    setModalType(type);
    setShowModal(true);
    if (event.images) setSelectedImage(event.images[0]);
  };

  return (
    <section className="bg-slate-50 pt-8 pb-20">
      {/* HEADER */}
      <div
        className={`max-w-7xl mx-auto px-6 mb-10 ${isAdmin
            ? "flex justify-between items-center"
            : "text-center"
          }`}
      >
        <div className={`${!isAdmin ? "mx-auto" : ""}`}>
          <h1 className="text-4xl font-bold text-blue-900">
            Our Events
          </h1>
          <p className="text-slate-600">
            Explore upcoming and past events
          </p>
        </div>

        {isAdmin && (
          <div className="flex gap-3">
            <button
              onClick={() => setShowAddEvent(true)}
              className="bg-blue-900 text-white px-5 py-2 rounded-xl"
            >
              + Add Event
            </button>
            <button
              onClick={handleLogout}
              className="bg-orange-500 text-white px-5 py-2 rounded-xl"
            >
              Logout
            </button>
          </div>
        )}
      </div>

      {/* TABS */}
      <div className="flex justify-center mb-10">
        {["upcoming", "past"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 mx-2 rounded-full font-semibold
              ${activeTab === tab
                ? "bg-blue-900 text-white"
                : "bg-white text-slate-700"
              }`}
          >
            {tab === "upcoming" ? "Upcoming Events" : "Past Events"}
          </button>
        ))}
      </div>

      {/* EVENTS */}
      <div className="max-w-7xl mx-auto px-6 grid gap-6 md:grid-cols-3">
        {(activeTab === "upcoming" ? upcomingEvents : pastEvents).map((e) => (
          <EventCard
            key={e.id}
            event={e}
            isAdmin={isAdmin}
            type={activeTab}
            onDelete={() =>
              activeTab === "upcoming"
                ? deleteUpcomingEvent(e.id)
                : deletePastEvent(e.id)
            }
            onAction={() =>
              openModal(e, activeTab === "upcoming" ? "register" : "details")
            }
          />
        ))}
      </div>

      {/* REGISTER / DETAILS MODAL */}
      {showModal && selectedEvent && (
        <Modal
          event={selectedEvent}
          type={modalType}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          close={() => setShowModal(false)}
        />
      )}

      {/* ADD EVENT MODAL */}
      {showAddEvent && (
        <ModalAddEvent
          close={() => setShowAddEvent(false)}
          onSubmit={addEvent}
        />
      )}
    </section>
  );
}

/* EVENT CARD */
function EventCard({ event, isAdmin, type, onDelete, onAction }) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-xl relative overflow-hidden">
      {isAdmin && (
        <div className="absolute top-3 right-3 flex gap-2">

          {/* Tick button */}
          <button
            // onClick={onTick} // your tick handler
            className="bg-white p-2 rounded shadow"
          >
            <Check className="w-5 h-5 text-green-500" />
          </button>

          {/* Trash button */}
          <button
            onClick={onDelete}
            className="bg-white p-2 rounded shadow"
          >
            <Trash2 className="w-5 h-5 text-red-500" />
          </button>

        </div>
      )}


      <img
        src={event.image || event.images?.[0]}
        className="h-44 w-full object-cover"
        alt=""
      />

      <div className="p-5">
        <h3 className="font-semibold text-lg">{event.title}</h3>
        <p className="text-sm text-slate-500">{event.date}</p>
        <p className="mt-2 text-sm text-slate-600">{event.desc}</p>

        {!isAdmin && (
          <button
            onClick={onAction}
            className={`mt-4 px-5 py-2 rounded-full text-white
              ${type === "upcoming"
                ? "bg-blue-900"
                : "bg-orange-500"
              }`}
          >
            {type === "upcoming" ? "Register" : "Learn More"}
          </button>
        )}
      </div>
    </div>
  );
}

/* REGISTER + DETAILS MODAL */
function Modal({ event, type, selectedImage, setSelectedImage, close }) {
  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
      <div className="bg-white max-w-3xl w-full rounded-2xl p-8 relative">
        <button onClick={close} className="absolute top-4 right-4">✕</button>

        {type === "register" && (
          <>
            <h2 className="text-2xl font-bold mb-4">
              Register for {event.title}
            </h2>
            <form className="grid md:grid-cols-2 gap-4">
              <input placeholder="Name" className="input" />
              <input placeholder="Email" className="input" />
              <input placeholder="Phone" className="input" />
              <select className="input">
                <option>Student</option>
                <option>Professional</option>
                <option>Entrepreneur</option>
              </select>
              <textarea
                className="input md:col-span-2"
                rows="4"
                placeholder="Why attend?"
              />
              <button className="md:col-span-2 bg-blue-900 text-white py-3 rounded-xl">
                Submit
              </button>
            </form>
          </>
        )}

        {type === "details" && (
          <>
            <h2 className="text-3xl font-bold mb-2">{event.title}</h2>
            <p className="mb-4">{event.details}</p>

            <img
              src={selectedImage}
              className="h-64 w-full object-cover rounded-xl mb-4"
              alt=""
            />

            <div className="grid grid-cols-3 gap-3">
              {event.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setSelectedImage(img)}
                  className="h-20 w-full object-cover rounded cursor-pointer"
                  alt=""
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/* ADD EVENT MODAL */
function ModalAddEvent({ close, onSubmit }) {
  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center">
      <form
        onSubmit={onSubmit}
        className="bg-white rounded-2xl p-6 w-full max-w-md space-y-4"
      >
        <h2 className="text-xl font-bold">Add Event</h2>

        <input
          name="title"
          placeholder="Event Name"
          className="input"
          required
        />

        <input
          name="date"
          type="date"
          className="input"
          required
        />

        <input
          name="image"
          type="file"
          accept="image/*"
          className="input"
          required
        />

        <textarea
          name="desc"
          placeholder="Description"
          className="input"
          required
        />

        <div className="flex justify-end gap-3">
          <button type="button" onClick={close}>
            Cancel
          </button>

          <button className="bg-orange-500 text-white px-4 py-2 rounded">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}


/* INPUT STYLE */
// const input =
//   "w-full border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-900";
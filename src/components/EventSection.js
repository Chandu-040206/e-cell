import event1 from "../utils/images/12.jpeg";
import event2 from "../utils/images/6.jpeg";
import event3 from "../utils/images/8.jpeg";

const EventSection = () => {
  const events = [
    {
      title: "Startup Challenge",
      date: "April 13, 2025",
      desc: "A campus-level startup competition where students pitch innovative ideas and compete for recognition and mentorship.",
      image: event1,
    },
    {
      title: "Funding Workshop",
      date: "March 14, 2025",
      desc: "An interactive workshop guiding students on startup funding, investor pitching, and building sustainable business models.",
      image: event2,
    },
    {
      title: "Networking Meet",
      date: "March 28, 2025",
      desc: "A networking session connecting students with entrepreneurs, alumni, and industry experts to build valuable connections.",
      image: event3,
    },
  ];

  return (
    <section className="bg-white py-6 md:py-8">
      <div className="mx-auto max-w-6xl px-4">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B2E5F] tracking-tight">
            Our Events
          </h2>
          <div className="mx-auto mt-3 h-1 w-14 rounded-full bg-orange-500" />
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {events.map((e, idx) => (
            <div
              key={idx}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative h-44 w-full overflow-hidden">
                <img
                  src={e.image}
                  alt={e.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-extrabold text-[#0B2E5F]">
                  {e.title}
                </h3>

                <p className="mt-2 text-sm text-slate-500">{e.date}</p>

                <p className="mt-4 text-slate-600 leading-7">{e.desc}</p>

                {/* <button className="mt-6 inline-flex items-center gap-2 rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 active:scale-[0.98]">
                  Learn More <span aria-hidden>→</span>
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventSection;

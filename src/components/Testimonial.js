import { useState, useEffect } from "react";
import sir from "../utils/images/sir.jpg";
import mam from "../utils/images/mam.jpg";

const AUTO_DELAY = 5000;
const SWIPE_THRESHOLD = 50;

const data = [
  {
    name: "Prof. Sireesha",
    role: "Faculty Co-ordinator, RGUKT ONGOLE",
    image: mam,
    text: `The power to think differently and ahead of the times for the betterment of mankind is what sets entrepreneurs apart. India’s young generation today has that power. E-Cells provide early exposure to entrepreneurship and help students realize their potential as innovators and leaders.`,
  },
  {
    name: "Prof. Meeravali",
    role: "Industry Advisor, RGUKT ONGOLE",
    image: sir,
    text: `Student entrepreneurship platforms are the strongest launchpads for future founders. Structured mentorship and peer collaboration accelerate real innovation and practical learning.`,
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // swipe state
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const prev = () =>
    setIndex((i) => (i === 0 ? data.length - 1 : i - 1));

  const next = () =>
    setIndex((i) => (i === data.length - 1 ? 0 : i + 1));

  const t = data[index];

  /* ---------------- AUTO SLIDE ---------------- */
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(next, AUTO_DELAY);
    return () => clearInterval(interval);
  }, [isPaused]);

  /* ---------------- SWIPE ---------------- */
  const handleTouchStart = (e) =>
    setTouchStartX(e.targetTouches[0].clientX);

  const handleTouchMove = (e) =>
    setTouchEndX(e.targetTouches[0].clientX);

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;

    const distance = touchStartX - touchEndX;

    if (distance > SWIPE_THRESHOLD) next();
    if (distance < -SWIPE_THRESHOLD) prev();

    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <section className="bg-slate-50 pb-14 md:pb-16">

      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
          Testimonials
        </h2>
        <div className="w-16 h-1 bg-orange-500 rounded-full mx-auto mt-3" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative">

        {/* Card */}
        <div
          className="
            bg-gradient-to-r from-[#0B2E5F] via-[#4a76b4] to-[#0B2E5F]
            rounded-3xl
            px-8 md:px-12
            py-10 md:py-12
            text-center text-white
            shadow-xl
            transition-all duration-500
          "
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >

          {/* Avatar */}
          <img
            src={t.image}
            alt={t.name}
            className="w-24 h-24 rounded-full object-cover mx-auto mb-5 border-4 border-white/20"
          />

          {/* Name */}
          <h3 className="text-xl md:text-2xl font-bold text-orange-400">
            {t.name}
          </h3>

          {/* Role */}
          <p className="text-white/80 text-sm md:text-base mb-6">
            {t.role}
          </p>

          {/* Quote */}
          <p className="max-w-3xl mx-auto text-white/90 leading-relaxed text-sm md:text-base">
            “ {t.text} ”
          </p>
        </div>

        {/* Arrows (Hidden on Mobile) */}
        <button
          onClick={prev}
          className="
            hidden md:flex
            absolute left-0 md:-left-2 top-1/2 -translate-y-1/2
            w-10 h-10 rounded-full
            bg-white shadow-md
            items-center justify-center
            text-blue-900 font-bold text-2xl
            hover:bg-slate-100 transition
          "
        >
          ‹
        </button>

        <button
          onClick={next}
          className="
            hidden md:flex
            absolute right-0 md:-right-2 top-1/2 -translate-y-1/2
            w-10 h-10 rounded-full
            bg-white shadow-md
            items-center justify-center
            text-blue-900 font-bold text-2xl
            hover:bg-slate-100 transition
          "
        >
          ›
        </button>

      </div>
    </section>
  );
}

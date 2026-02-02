import React, { useMemo, useState, useEffect } from "react";

const AUTO_DELAY = 4000; // 4 seconds

const InfoSlider = ({ slides = [], className = "" }) => {
  const safeSlides = useMemo(() => slides.filter(Boolean), [slides]);
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = safeSlides.length;

  const goPrev = () =>
    setActive((p) => (p === 0 ? total - 1 : p - 1));

  const goNext = () =>
    setActive((p) => (p === total - 1 ? 0 : p + 1));

  // 🔁 Auto slide (ALWAYS called)
  useEffect(() => {
    if (!total || isPaused) return;

    const interval = setInterval(() => {
      setActive((p) => (p === total - 1 ? 0 : p + 1));
    }, AUTO_DELAY);

    return () => clearInterval(interval);
  }, [isPaused, total]);

  // ⛔ render guard AFTER hooks
  if (!total) return null;

  const current = safeSlides[active];

  return (
    <section className={`bg-white py-6 ${className}`}>
      <div className="mx-auto max-w-6xl px-6">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B2E5F]">
            {current.title}
          </h2>
        </div>

        {/* Slider */}
        <div
          className="relative mt-3 rounded-3xl border border-[#0B2E5F]/10 bg-white shadow-sm overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Prev */}
          <button
            onClick={goPrev}
            aria-label="Previous slide"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 md:h-12 md:w-12 rounded-full bg-white border border-[#0B2E5F]/15 shadow flex items-center justify-center text-[#0B2E5F] text-2xl hover:bg-white"
          >
            ‹
          </button>

          {/* Next */}
          <button
            onClick={goNext}
            aria-label="Next slide"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 h-10 w-10 md:h-12 md:w-12 rounded-full bg-white border border-[#0B2E5F]/15 shadow flex items-center justify-center text-[#0B2E5F] text-2xl hover:bg-white"
          >
            ›
          </button>

          {/* Track */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {safeSlides.map((s, idx) => (
              <div
                key={idx}
                className="min-w-full px-10 py-5 md:px-14 md:py-6"
              >
                <div
                  className={`grid gap-6 md:grid-cols-5 ${
                    s.reverse ? "md:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  {/* Image */}
                  <div className="md:col-span-2 overflow-hidden rounded-2xl border border-[#0B2E5F]/10 shadow-md">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="h-[170px] md:h-[260px] w-full object-cover"
                    />
                  </div>

                  {/* Text */}
                  <div className="md:col-span-3 rounded-2xl border border-[#0B2E5F]/10 bg-[#0B2E5F]/[0.04] p-6 md:p-8">
                    {s.heading && (
                      <h3 className="text-xl md:text-2xl font-bold text-[#0B2E5F]">
                        {s.heading}
                      </h3>
                    )}
                    <p className="mt-4 text-base md:text-lg leading-8 text-slate-700">
                      {s.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="pb-5 flex justify-center gap-2">
            {safeSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  active === i
                    ? "bg-[#0B2E5F] w-6"
                    : "bg-[#0B2E5F]/25 w-2.5"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSlider;

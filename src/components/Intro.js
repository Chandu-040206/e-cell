import React, { useEffect, useState } from "react";

const Intro = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="mt-0">
      {/* decreased height: smaller padding */}
      <div className="bg-gradient-to-r from-[#0B2E5F] via-[#4a76b4] to-[#0B2E5F] py-4 md:py-6">
        <div className="mx-auto max-w-6xl px-4 text-center text-white">
          <h2
            className={[
              "text-[11px] md:text-sm font-semibold tracking-wide text-white/90",
              show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2",
              "transition-all duration-700",
            ].join(" ")}
          >
            Entrepreneurship cell-RGUKT Ongole
          </h2>

          <h1
            className={[
              "mt-1 text-2xl md:text-4xl font-extrabold tracking-tight leading-tight",
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
              "transition-all duration-700 delay-100",
            ].join(" ")}
          >
            Building Future Entrepreneurs
          </h1>

          <p
            className={[
              "mt-2 text-sm md:text-base text-white/90",
              show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3",
              "transition-all duration-700 delay-200",
            ].join(" ")}
          >
            Inspire. Innovate. Achieve.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;

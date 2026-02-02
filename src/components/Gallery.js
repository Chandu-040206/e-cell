import intro2 from "../utils/images/6.jpeg";
import intro3 from "../utils/images/11.jpeg";
import img3 from "../utils/images/1.jpeg";
import img4 from "../utils/images/2.jpeg";
import img5 from "../utils/images/4.jpeg";
import img6 from "../utils/images/9.jpeg";
import img7 from "../utils/images/7.jpeg";
import img8 from "../utils/images/12.jpeg";
import img9 from "../utils/images/8.jpeg";

const galleryData = [
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

function GalleryCard({ item, height }) {
  return (
    <div className="group relative rounded-xl overflow-hidden shadow-xl">
      <img
        src={item.img}
        alt={item.title}
        className={`w-full ${height} object-cover transform group-hover:scale-110 transition duration-500`}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

      <div className="absolute bottom-4 left-4 right-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300 text-white">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="text-sm text-gray-300">{item.date}</p>
      </div>
    </div>
  );
}

function Gallery() {
  return (
    <section className="bg-slate-50 py-7 md:py-7">

      {/* Heading */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900">
          Moments That Matter
        </h1>

        <div className="w-20 h-1 bg-orange-500 rounded-full mx-auto mt-4 mb-6" />

        <p className="text-lg text-slate-600 leading-relaxed">
          Capturing innovation, leadership and unforgettable experiences from
          our events, workshops and startup journeys.
        </p>
      </div>

      {/* Gallery Grid — UNCHANGED STRUCTURE */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryData.slice(0, 2).map((item, index) => (
            <GalleryCard key={index} item={item} height="h-56" />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryData.slice(2, 5).map((item, index) => (
            <GalleryCard key={index} item={item} height="h-52" />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryData.slice(5, 7).map((item, index) => (
            <GalleryCard key={index} item={item} height="h-56" />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryData.slice(7, 9).map((item, index) => (
            <GalleryCard key={index} item={item} height="h-52" />
          ))}
        </div>

      </div>


    </section>
  );
}

export default Gallery;

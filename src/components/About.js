import { motion } from "framer-motion";
import img3 from "../utils/images/1.jpeg";
import img4 from "../utils/images/7.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function App() {
  return (
    <section className="bg-slate-50 pt-7 pb-14 md:pb-16">

      {/* Heading — same pattern as other pages */}
      <div className="max-w-4xl mx-auto px-6 text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-900">
          About Us
        </h1>

        <div className="w-16 h-1 bg-orange-500 rounded-full mx-auto mt-3 mb-4" />

        <p className="text-slate-600 text-xl">
          We bring people together to learn, connect, and build what’s next.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-10 items-center bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <InfoCard
              icon="https://img.icons8.com/?size=100&id=12244&format=png&color=000000"
              title="Our Vision"
              text="To create a dynamic and inclusive entrepreneurial ecosystem that fosters innovation, leadership, creativity, and a strong startup mindset among students."
            />
            <InfoCard
              icon="https://img.icons8.com/?size=100&id=1SdGNGe0ekDI&format=png&color=000000"
              title="Our Mission"
              text="To empower students with entrepreneurial skills through mentorship, training, industry exposure, and practical experiences."
            />
          </motion.div>

          <motion.img
            src={img3}
            alt="team"
            className="rounded-xl shadow-md w-full max-w-md mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />
        </div>

        {/* Who We Are */}
        <div className="grid md:grid-cols-2 gap-10 items-center bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              Who We Are
            </h2>

            <p className="text-slate-600 leading-relaxed">
              The Entrepreneurship Cell is a student-driven initiative dedicated
              to promoting innovation, creativity, and entrepreneurial thinking,
              while providing platforms to transform ideas into real-world ventures.
            </p>
          </motion.div>

          <motion.img
            src={img4}
            alt="discussion"
            className="rounded-xl shadow-md w-full max-w-md mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />
        </div>

        {/* What We Offer */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200"
        >
          <h2 className="text-2xl font-semibold text-blue-900 text-center mb-8">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard icon="https://img.icons8.com/?size=100&id=81473&format=png&color=000000" title="Interactive Events" />
            <FeatureCard icon="https://cdn-icons-png.flaticon.com/512/3135/3135800.png" title="Skill Development" />
            <FeatureCard icon="https://img.icons8.com/?size=100&id=117483&format=png&color=000000" title="Strong Networks" />
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200"
        >
          <h2 className="text-2xl font-semibold text-blue-900 mb-8">
            Our Values
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <ValueCard icon="https://img.icons8.com/?size=100&id=UeT94dCyirJ7&format=png&color=000000" title="Collaboration" points={["Team-first mindset","Shared success","Supportive community"]} />
            <ValueCard icon="https://cdn-icons-png.flaticon.com/512/3135/3135810.png" title="Learning by Doing" points={["Hands-on experiences","Real-world skills","Practical outcomes"]} />
            <ValueCard icon="https://cdn-icons-png.flaticon.com/512/1077/1077063.png" title="Inclusivity" points={["Open communities","Diverse perspectives","Safe learning spaces"]} />
            <ValueCard icon="https://img.icons8.com/?size=100&id=47783&format=png&color=000000" title="Actionable Insights" points={["No fluff content","Clear takeaways","Immediate application"]} />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

/* Cards — styling unified */

function InfoCard({ icon, title, text }) {
  return (
    <div className="p-6 rounded-xl border border-slate-200 bg-slate-50">
      <div className="flex items-center gap-3 mb-2">
        <img src={icon} className="w-8 h-8" alt={title} />
        <h3 className="font-semibold text-slate-800">{title}</h3>
      </div>
      <p className="text-slate-600">{text}</p>
    </div>
  );
}

function FeatureCard({ icon, title }) {
  return (
    <div className="p-8 rounded-xl border border-slate-200 bg-slate-50 hover:-translate-y-1 transition shadow-sm">
      <img src={icon} className="w-10 h-10 mb-4" alt={title} />
      <h3 className="font-semibold text-slate-800 mb-2">{title}</h3>
      <p className="text-slate-600 text-sm">
        Interactive programs and practical exposure to build real entrepreneurial skills.
      </p>
    </div>
  );
}

function ValueCard({ icon, title, points }) {
  return (
    <div className="flex gap-4 p-6 rounded-xl border border-slate-200 bg-slate-50">
      <img src={icon} className="w-10 h-10" alt={title} />
      <div>
        <h4 className="font-semibold text-slate-800 mb-2">{title}</h4>
        <ul className="list-disc list-inside text-slate-600 space-y-1 text-sm">
          {points.map((p, i) => <li key={i}>{p}</li>)}
        </ul>
      </div>
    </div>
  );
}

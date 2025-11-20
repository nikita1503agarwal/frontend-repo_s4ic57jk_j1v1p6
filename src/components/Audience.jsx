import { motion } from "framer-motion";

export default function Audience() {
  const groups = [
    {
      title: "Students",
      desc: "Affordable, homely meals before exams and classes.",
      emoji: "🎒",
    },
    {
      title: "Office Workers",
      desc: "Skip takeout. Eat better even on busy days.",
      emoji: "💼",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-emerald-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-800 text-center">
          Made for students and office-goers
        </h2>
        <p className="mt-2 text-center text-emerald-700/80">
          Balanced flavours, budget-friendly, and super convenient.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ y: 12, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-3xl p-6 bg-white border border-amber-100 shadow-xl shadow-amber-100/40 flex items-start gap-4"
            >
              <div className="text-5xl">{g.emoji}</div>
              <div>
                <h3 className="font-bold text-emerald-900 text-xl">{g.title}</h3>
                <p className="text-emerald-700/80">{g.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

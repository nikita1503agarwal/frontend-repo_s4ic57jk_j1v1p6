import { motion } from "framer-motion";

const items = [
  { name: "Afsana (NSU)", text: "Tastes like home. Saved so much time during finals!", stars: 5 },
  { name: "Rafi (Uttara)", text: "Chopping-free cooking is a blessing. Fresh and fast.", stars: 5 },
  { name: "Nadia (Dhanmondi)", text: "Great portions and super convenient after office.", stars: 4 },
];

export default function Testimonials() {
  return (
    <section id="stories" className="py-16 bg-gradient-to-b from-emerald-50/40 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-800 text-center">
          What our friends say
        </h2>
        <p className="mt-2 text-center text-emerald-700/80">
          Clean, comforting meals that fit your schedule.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ y: 12, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-3xl p-6 bg-white border border-amber-100 shadow-xl shadow-amber-100/40"
            >
              <div className="text-amber-400 text-lg">{"★".repeat(t.stars)}{"☆".repeat(5 - t.stars)}</div>
              <p className="mt-3 text-emerald-800/90">“{t.text}”</p>
              <p className="mt-4 font-semibold text-emerald-900">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

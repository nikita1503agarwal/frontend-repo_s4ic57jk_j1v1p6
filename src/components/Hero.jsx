import Spline from "@splinetool/react-spline";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-emerald-800"
          >
            Healthy Bengali Meals Made Easy
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-lg text-emerald-700/80"
          >
            Fresh, homely, and student-friendly meal kits delivered across Dhaka.
            Just stir, simmer, and enjoy in minutes.
          </motion.p>

          <div className="mt-8 flex gap-4">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#kits"
              className="px-5 py-3 rounded-xl bg-gradient-to-br from-amber-400 to-orange-400 text-white font-semibold shadow-lg shadow-orange-200"
            >
              Explore Meal Kits
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#plans"
              className="px-5 py-3 rounded-xl bg-white text-emerald-800 font-semibold border border-amber-200 shadow-sm hover:shadow-md"
            >
              Start Subscription
            </motion.a>
          </div>

          <p className="mt-6 text-sm text-emerald-700/70">
            Dhanmondi • Bashundhara • Uttara
          </p>
        </div>

        <div className="relative h-[420px] md:h-[520px] rounded-3xl overflow-hidden shadow-xl shadow-amber-100 border border-amber-100 bg-white">
          {/* 3D animated meal-kit scene using Spline (lightweight embed) */}
          <Spline scene="https://prod.spline.design/6wJb0D7L3mWQ7pXb/scene.splinecode" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/0 via-white/0 to-white/0" />
        </div>
      </div>

      {/* floating veggies/utensils */}
      <FloatingDecor />
    </section>
  );
}

function FloatingDecor() {
  const items = [
    { emoji: "🥕", delay: 0 },
    { emoji: "🍅", delay: 0.2 },
    { emoji: "🧅", delay: 0.4 },
    { emoji: "🍛", delay: 0.6 },
    { emoji: "🍳", delay: 0.8 },
    { emoji: "🚚", delay: 1.0 },
  ];
  return (
    <div className="absolute inset-0 pointer-events-none">
      {items.map((it, i) => (
        <motion.span
          key={i}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: [40, -10, 40], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 6 + i, repeat: Infinity, delay: it.delay, ease: "easeInOut" }}
          className="text-3xl absolute"
          style={{
            left: `${10 + i * 12}%`,
            top: `${15 + (i % 3) * 25}%`,
            filter: "drop-shadow(0 8px 20px rgba(234,179,8,0.25))",
          }}
        >
          {it.emoji}
        </motion.span>
      ))}
    </div>
  );
}

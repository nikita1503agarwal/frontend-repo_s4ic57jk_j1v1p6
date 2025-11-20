import { motion } from "framer-motion";

const kits = [
  { name: "Chicken Curry Kit", time: 20, price: 380, emoji: "🍗" },
  { name: "Daal & Rice Kit", time: 15, price: 250, emoji: "🍚" },
  { name: "Egg Khichuri Kit", time: 18, price: 300, emoji: "🥚" },
  { name: "Mixed Vegetable Tarkari Kit", time: 17, price: 280, emoji: "🥦" },
  { name: "Paneer Curry Kit", time: 20, price: 400, emoji: "🧀" },
];

export default function MealKits() {
  return (
    <section id="kits" className="py-16 bg-gradient-to-b from-emerald-50/40 to-amber-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-800 text-center">
          Meal kits you'll love
        </h2>
        <p className="mt-2 text-center text-emerald-700/80">
          Homely flavours, prepped ingredients, 15–20 minutes to table.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {kits.map((k, i) => (
            <motion.div
              key={k.name}
              whileHover={{ y: -6, rotateX: 2, rotateY: -2 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="group rounded-3xl p-5 bg-white border border-amber-100 shadow-xl shadow-amber-100/50"
            >
              <div className="relative h-40 rounded-2xl bg-gradient-to-br from-amber-100 to-emerald-100 grid place-items-center overflow-hidden">
                <motion.div
                  initial={{ y: 10, scale: 0.9, rotate: -6 }}
                  whileInView={{ y: 0, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-6xl"
                >
                  {k.emoji}
                </motion.div>
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute bottom-2 left-3 text-lg"
                >
                  🧅🥔🍅
                </motion.div>
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 2.8, repeat: Infinity, delay: 0.6 }}
                  className="absolute top-3 right-4 text-lg"
                >
                  🍳🔪
                </motion.div>
              </div>

              <div className="mt-4">
                <h3 className="font-bold text-emerald-900">{k.name}</h3>
                <div className="mt-2 flex items-center justify-between text-sm text-emerald-700/80">
                  <span>⏱️ {k.time} min</span>
                  <span>৳{k.price}</span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <button className="px-3 py-2 rounded-xl bg-gradient-to-br from-amber-400 to-orange-400 text-white font-semibold shadow-md shadow-orange-200">
                    Add to Cart
                  </button>
                  <button className="px-3 py-2 rounded-xl border border-amber-200 text-emerald-800 font-semibold bg-white hover:shadow-md">
                    View Recipe
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

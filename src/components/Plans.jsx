import { motion } from "framer-motion";

const plans = [
  {
    name: "Weekly",
    price: 1399,
    tagline: "For quick resets",
    perks: ["5 kits/week", "Flexible deliveries", "Student-friendly"],
    highlight: false,
  },
  {
    name: "Monthly",
    price: 4990,
    tagline: "Best value for busy weeks",
    perks: ["20 kits/month", "Priority slots", "Free spice refills"],
    highlight: true,
  },
  {
    name: "Semester",
    price: 12990,
    tagline: "Set it and thrive",
    perks: ["16 weeks", "Pause anytime", "Healthy routine"],
    highlight: false,
  },
];

export default function Plans() {
  return (
    <section id="plans" className="py-16 bg-gradient-to-b from-amber-50/40 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-800 text-center">
          Subscriptions built for Dhaka life
        </h2>
        <p className="mt-2 text-center text-emerald-700/80">
          Save time, eat well, and keep your routine steady.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <motion.div
              key={p.name}
              whileHover={{ y: -8 }}
              className={`rounded-3xl p-6 border shadow-xl ${
                p.highlight
                  ? "bg-gradient-to-br from-amber-100 to-orange-100 border-amber-200 shadow-orange-100"
                  : "bg-white border-amber-100 shadow-amber-100/60"
              }`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-emerald-900 font-extrabold text-xl">{p.name}</h3>
                {p.highlight && (
                  <span className="px-2 py-1 rounded-full text-xs bg-emerald-100 text-emerald-800 font-semibold">
                    Popular
                  </span>
                )}
              </div>
              <p className="text-emerald-700/80 mt-1">{p.tagline}</p>
              <p className="mt-4 text-3xl font-extrabold text-emerald-900">৳{p.price}</p>
              <ul className="mt-4 space-y-2 text-emerald-800/90">
                {p.perks.map((perk) => (
                  <li key={perk}>• {perk}</li>
                ))}
              </ul>
              <button className="mt-6 w-full px-4 py-3 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white font-bold shadow-md">
                Start {p.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

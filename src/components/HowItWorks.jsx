import { motion } from "framer-motion";
import { Box, Truck, Timer } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      title: "Choose your meal kit",
      desc: "Pick from homely Bengali favourites — perfect for students and busy days.",
      Icon: Box,
    },
    {
      title: "We deliver fresh chopped ingredients",
      desc: "Prepped, portioned, and labelled. No market trips, no chopping.",
      Icon: Truck,
    },
    {
      title: "Cook in 15 minutes",
      desc: "Simple steps on the card. Less time cooking, more time living.",
      Icon: Timer,
    },
  ];

  return (
    <section id="how" className="py-16 bg-gradient-to-b from-white to-emerald-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-emerald-800 text-center">
          How it works
        </h2>
        <p className="mt-2 text-center text-emerald-700/80">
          Fresh, quick, and comforting — your kitchen friend in Dhaka.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map(({ title, desc, Icon }, i) => (
            <motion.div
              key={title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl p-6 bg-white border border-amber-100 shadow-lg shadow-amber-100/40"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-400 grid place-items-center text-white shadow-md">
                <Icon />
              </div>
              <h3 className="mt-4 font-bold text-emerald-800 text-lg">{title}</h3>
              <p className="text-emerald-700/80 mt-1">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

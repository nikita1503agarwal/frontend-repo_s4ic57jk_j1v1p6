import { Menu } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-amber-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <motion.div
            initial={{ rotate: -10, y: -6 }}
            animate={{ rotate: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-orange-400 shadow-md shadow-orange-200 grid place-items-center"
          >
            <span className="text-white text-lg font-black">RB</span>
          </motion.div>
          <div className="">
            <p className="text-lg sm:text-xl font-extrabold tracking-tight text-emerald-700">
              Rannaghor Bondhu
            </p>
            <p className="text-xs text-emerald-600/70 -mt-1">Your Kitchen Friend</p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8 text-emerald-700">
          <a href="#kits" className="hover:text-emerald-900 transition">Meal Kits</a>
          <a href="#how" className="hover:text-emerald-900 transition">How it works</a>
          <a href="#plans" className="hover:text-emerald-900 transition">Plans</a>
          <a href="#stories" className="hover:text-emerald-900 transition">Stories</a>
          <a href="#contact" className="hover:text-emerald-900 transition">Contact</a>
        </div>
        <button className="md:hidden p-2 rounded-lg hover:bg-emerald-50 text-emerald-700">
          <Menu size={22} />
        </button>
      </div>
    </div>
  );
}

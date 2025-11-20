import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import MealKits from "./components/MealKits";
import Plans from "./components/Plans";
import Audience from "./components/Audience";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-emerald-950">
      <Navbar />
      <Hero />
      <HowItWorks />
      <MealKits />
      <Plans />
      <Audience />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;

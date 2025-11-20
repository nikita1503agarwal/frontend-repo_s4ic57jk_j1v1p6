export default function Footer() {
  return (
    <footer id="contact" className="bg-emerald-900 text-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <p className="text-xl font-extrabold">Rannaghor Bondhu</p>
          <p className="text-emerald-100/80 mt-2">Your Kitchen Friend</p>
          <p className="text-emerald-200/70 mt-4 text-sm">Fresh, homely meal kits for Dhaka.</p>
        </div>
        <div>
          <p className="font-semibold text-amber-300">About Us</p>
          <ul className="mt-2 space-y-1 text-emerald-100/80 text-sm">
            <li>Our Story</li>
            <li>Food Safety</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-amber-300">Service Areas</p>
          <ul className="mt-2 space-y-1 text-emerald-100/80 text-sm">
            <li>Dhanmondi</li>
            <li>Bashundhara</li>
            <li>Uttara</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-amber-300">Contact</p>
          <ul className="mt-2 space-y-1 text-emerald-100/80 text-sm">
            <li>hello@rannaghorbondhu.com</li>
            <li>+880 1XXX-XXXXXX</li>
          </ul>
          <div className="mt-4 flex gap-3 text-emerald-50/90">
            <a className="hover:text-amber-300" href="#">Facebook</a>
            <a className="hover:text-amber-300" href="#">Instagram</a>
            <a className="hover:text-amber-300" href="#">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="border-t border-emerald-800 py-4 text-center text-emerald-100/70 text-sm">
        © {new Date().getFullYear()} Rannaghor Bondhu. All rights reserved.
      </div>
    </footer>
  );
}

import Logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <img 
            src={Logo} 
            alt="CampusCrib Logo"
            className="w-40 p-0 md:w-48 mb-4"   // Bigger logo, clean spacing
          />
          <p className="text-gray-400 text-sm leading-relaxed">
            Making student accommodation simple, safe, and stress-free.  
            Find verified hostels and book with confidence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-400 transition">Home</a></li>
            <li><a href="#featured-hostels" className="hover:text-orange-400 transition">Browse Hostels</a></li>
            <li><a href="#about" className="hover:text-orange-400 transition">About Us</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">List Your Hostel</a></li>
          </ul>
        </div>

        {/* Legal & Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-400 transition">Contact Us</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Privacy Policy</a></li>
            <li><a href="#faq" className="hover:text-orange-400 transition">Help & FAQs</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} CampusCrib. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
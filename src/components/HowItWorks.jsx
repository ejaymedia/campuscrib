import { FaSearch, FaHome, FaCheckCircle } from "react-icons/fa";

function HowItWorks() {
  return (
    <section className="py-16 bg-gray-50 pt-28" id="how-it-works">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Step 1 */}
          <div className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition">
            <div className="flex justify-center mb-4">
              <FaSearch className="text-orange-500 text-5xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Search Hostels</h3>
            <p className="text-gray-600 text-sm">
              Explore verified hostels around campus with detailed pictures and pricing.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition">
            <div className="flex justify-center mb-4">
              <FaCheckCircle className="text-orange-500 text-5xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Book Instantly</h3>
            <p className="text-gray-600 text-sm">
              Reserve your preferred hostel online with a seamless booking process.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition">
            <div className="flex justify-center mb-4">
              <FaHome className="text-orange-500 text-5xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Move In</h3>
            <p className="text-gray-600 text-sm">
              Secure your space, pack your bags, and move into your new campus home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
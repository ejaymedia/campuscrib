import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function HostelBookingCard() {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 h-fit md:sticky md:top-32">

      {/* CONTACT AGENT */}
      <div className="mb-6">
        <h3 className="text-lg text-gray-800 mb-2">
          Need More Info?
        </h3>

        <p className="text-sm text-gray-600 mb-4">
          Speak directly with the hostel agent to ask questions, confirm availability, 
          or request a physical inspection.
        </p>

        <div className="flex flex-col gap-3">
          {/* Call Agent */}
          <button className="w-full flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-xl text-sm text-gray-700 hover:bg-gray-100 transition">
            <FaPhoneAlt className="text-orange-600" />
            Call Agent
          </button>

          {/* WhatsApp Agent */}
          <button className="w-full flex items-center justify-center gap-2 py-3 border border-green-500 text-green-600 rounded-xl text-sm hover:bg-green-50 transition">
            <FaWhatsapp />
            Chat on WhatsApp
          </button>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-200 my-6"></div>

      {/* BOOKING */}
      <div>
        <h3 className="text-lg text-gray-800 mb-4">
          Ready to Book?
        </h3>

        <button className="w-full py-3 bg-orange-600 text-white rounded-xl text-sm hover:bg-orange-700 transition">
          Rent Now
        </button>
      </div>

    </div>
  );
}
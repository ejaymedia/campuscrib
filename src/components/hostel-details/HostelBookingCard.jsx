export default function HostelBookingCard() {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 h-fit md:sticky md:top-32">

      <h3 className="text-lg text-gray-800 mb-4">
        Ready to Book?
      </h3>

      <button className="w-full py-3 bg-orange-600 text-white rounded-xl text-sm hover:bg-orange-700 transition">
        Rent Now
      </button>

    </div>
  );
}
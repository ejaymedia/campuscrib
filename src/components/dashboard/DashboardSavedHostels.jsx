import hostel1 from "../../assets/hostel1.jpg";

export default function DashboardSavedHostels() {
  return (
    <section>
      <h2 className="text-lg text-gray-800 mb-4">
        Saved Hostels
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-white border rounded-2xl overflow-hidden"
          >
            <img
              src={hostel1}
              alt="Hostel"
              className="h-36 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="text-gray-800">
                Peace Lodge
              </h3>

              <p className="text-sm text-gray-600">
                Under-G, Ogbomosho
              </p>

              <button className="mt-4 w-full py-2 border border-orange-500 text-orange-600 rounded-lg text-sm hover:bg-orange-50 transition">
                View Hostel
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
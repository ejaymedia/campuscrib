export default function DashboardBookings() {
  return (
    <section>
      <h2 className="text-lg text-gray-800 mb-4">
        My Bookings
      </h2>

      <div className="space-y-4">
        {[1, 2].map((i) => (
          <div
            key={i}
            className="bg-white border rounded-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div>
              <h3 className="text-gray-800">
                Crystal Hostel
              </h3>
              <p className="text-sm text-gray-600">
                Yoaco Area • ₦120,000 / year
              </p>
            </div>

            <span className="text-sm px-4 py-2 bg-green-100 text-green-700 rounded-lg w-fit">
              Active
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
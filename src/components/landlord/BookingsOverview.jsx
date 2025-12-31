export default function BookingsOverview() {
  return (
    <section className="bg-white border rounded-2xl p-6 scroll-mt-28" id="bookings">
      <h2 className="text-lg text-gray-900 mb-4">
        Bookings
      </h2>

      <div className="space-y-4">
        {[1, 2].map(i => (
          <div
            key={i}
            className="border rounded-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div>
              <h3 className="text-gray-800">Crystal Hostel</h3>
              <p className="text-sm text-gray-500">
                Student: John Doe
              </p>
            </div>

            <div className="flex gap-3">
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm">
                Confirm
              </button>
              <button className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm">
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default function ManageListings() {
  return (
    <section className="bg-white border rounded-2xl p-6 scroll-mt-28" id="listings">
      <h2 className="text-lg text-gray-900 mb-4">
        Manage Listings
      </h2>

      <div className="space-y-4">
        {[1, 2].map(i => (
          <div
            key={i}
            className="border rounded-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div>
              <h3 className="text-gray-800">Peace Lodge</h3>
              <p className="text-sm text-gray-500">
                ₦150,000 • Available
              </p>
            </div>

            <div className="flex gap-3">
              <button className="px-4 py-2 border rounded-lg text-sm">
                Edit
              </button>
              <button className="px-4 py-2 border rounded-lg text-sm">
                Mark Occupied
              </button>
              <button className="px-4 py-2 border border-red-500 text-red-500 rounded-lg text-sm">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
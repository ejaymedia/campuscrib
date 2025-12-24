export default function AddHostelForm() {
  return (
    <section className="bg-white border rounded-2xl p-6">
      <h2 className="text-lg text-gray-900 mb-4">
        Add New Hostel
      </h2>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <input
          type="text"
          placeholder="Hostel Name"
          className="border rounded-lg px-4 py-3 text-sm"
        />

        <input
          type="number"
          placeholder="Price per year (₦)"
          className="border rounded-lg px-4 py-3 text-sm"
        />

        <textarea
          placeholder="Description"
          rows="3"
          className="md:col-span-2 border rounded-lg px-4 py-3 text-sm"
        />

        <input
          type="file"
          multiple
          className="md:col-span-2 text-sm"
        />

        <div className="md:col-span-2 flex flex-wrap gap-3">
          {["WiFi", "Water", "Light", "Security"].map(a => (
            <label key={a} className="flex items-center gap-2 text-sm">
              <input type="checkbox" />
              {a}
            </label>
          ))}
        </div>

        <button
          type="button"
          className="md:col-span-2 mt-4 bg-orange-600 text-white py-3 rounded-xl text-sm hover:bg-orange-700 transition"
        >
          Add Hostel
        </button>

      </form>
    </section>
  );
}
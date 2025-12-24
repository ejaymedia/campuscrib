export default function DashboardProfile() {
  return (
    <section className="bg-white border border-gray-200 rounded-2xl p-6">
      <h2 className="text-lg text-gray-800 mb-4">
        My Profile
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Full Name"
          className="border rounded-lg px-4 py-3 text-sm"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="border rounded-lg px-4 py-3 text-sm"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="border rounded-lg px-4 py-3 text-sm"
        />

        <input
          type="text"
          placeholder="School / Department"
          className="border rounded-lg px-4 py-3 text-sm"
        />
      </div>

      <button className="mt-6 px-6 py-3 bg-orange-600 text-white rounded-xl text-sm hover:bg-orange-700 transition">
        Update Profile
      </button>
    </section>
  );
}
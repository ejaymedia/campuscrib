export default function EarningsSummary() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {[
        { title: "Total Listings", value: "4" },
        { title: "Rent Received", value: "₦1,200,000" },
        { title: "Platform Fees", value: "₦120,000" },
      ].map((item, i) => (
        <div
          key={i}
          className="bg-white border rounded-2xl p-6"
        >
          <p className="text-sm text-gray-500">{item.title}</p>
          <h3 className="text-xl text-gray-900 mt-2">{item.value}</h3>
        </div>
      ))}
    </section>
  );
}
export default function HostelAmenities() {
  return (
    <div>
      <h3 className="text-md text-gray-800 mb-3">
        Amenities
      </h3>

      <div className="flex flex-wrap gap-3">
        {["WiFi", "Water", "Electricity"].map(a => (
          <span
            key={a}
            className="px-4 py-2 rounded-full bg-orange-50 text-orange-600 text-sm"
          >
            {a}
          </span>
        ))}
      </div>
    </div>
  );
}
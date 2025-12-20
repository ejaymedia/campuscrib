import { useState } from "react";
import { FaWifi, FaTint, FaBolt, FaFilter, FaMinus, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import hostel1 from "../assets/hostel1.jpg";

export default function AvailableHostels() {
  const allHostels = [
    { id: 1, name: "Sunrise Hostel", location: "Adenike", price: 120000, amenities: ["WiFi", "Water"], image: hostel1 },
    { id: 2, name: "Peace Lodge", location: "Under G", price: 150000, amenities: ["Light", "Water"], image: hostel1 },
    { id: 3, name: "Crystal Hostel", location: "Yoaco", price: 100000, amenities: ["WiFi"], image: hostel1 },
    { id: 4, name: "Maple Residence", location: "Aroje", price: 130000, amenities: ["Water"], image: hostel1 },
    { id: 5, name: "Elite Hostel", location: "Stadium Area", price: 140000, amenities: ["Light"], image: hostel1 },
    { id: 6, name: "Green Villa", location: "General Area", price: 110000, amenities: ["WiFi", "Light"], image: hostel1 },
    { id: 7, name: "Royal Stay", location: "Adenike", price: 170000, amenities: ["Water"], image: hostel1 },
    { id: 8, name: "Blue Gate Lodge", location: "Under G", price: 125000, amenities: ["WiFi"], image: hostel1 },
    { id: 9, name: "Palm Court", location: "Yoaco", price: 115000, amenities: ["Light"], image: hostel1 },
    { id: 10, name: "Victory Hostel", location: "Aroje", price: 135000, amenities: ["Water"], image: hostel1 },
    { id: 11, name: "Haven Homes", location: "Lautech Area", price: 160000, amenities: ["WiFi", "Light"], image: hostel1 },
    { id: 12, name: "Comfort Lodge", location: "Under G", price: 105000, amenities: ["Water"], image: hostel1 },
  ];

  /* ---------------- STATES ---------------- */
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedAmenity, setSelectedAmenity] = useState("");
  const [maxPrice, setMaxPrice] = useState(180000);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  const itemsPerPage = 4;
  const priceStep = 5000;
  const minPrice = 80000;
  const maxAllowedPrice = 500000;

  const locations = [...new Set(allHostels.map(h => h.location))];
  const amenities = ["WiFi", "Water", "Light"];

  /* ---------------- FILTER LOGIC ---------------- */
  const filteredHostels = allHostels.filter(h => {
    const matchLocation = selectedLocation === "" || h.location === selectedLocation;
    const matchAmenity = selectedAmenity === "" || h.amenities.includes(selectedAmenity);
    const matchPrice = h.price <= maxPrice;
    return matchLocation && matchAmenity && matchPrice;
  });

  /* ---------------- PAGINATION ---------------- */
  const totalPages = Math.ceil(filteredHostels.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentHostels = filteredHostels.slice(startIndex, startIndex + itemsPerPage);

  const amenityIcons = {
    WiFi: <FaWifi />,
    Water: <FaTint />,
    Light: <FaBolt />,
  };

  const increasePrice = () => {
    setMaxPrice(p => Math.min(p + priceStep, maxAllowedPrice));
    setCurrentPage(1);
  };

  const decreasePrice = () => {
    setMaxPrice(p => Math.max(p - priceStep, minPrice));
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSelectedLocation("");
    setSelectedAmenity("");
    setMaxPrice(180000);
    setCurrentPage(1);
  };

  /* ---------------- FILTER UI ---------------- */
  const FilterContent = () => (
    <div className="flex flex-col md:flex-row md:items-end gap-4">
      {/* Location */}
      <div className="md:flex-1">
        <label className="text-sm text-gray-600">Location</label>
        <select
          value={selectedLocation}
          onChange={(e) => { setSelectedLocation(e.target.value); setCurrentPage(1); }}
          className="w-full mt-1 border rounded-lg px-4 py-3 text-sm"
        >
          <option value="">All Locations</option>
          {locations.map(loc => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>
      </div>

      {/* Price */}
      <div className="md:flex-1">
        <label className="text-sm text-gray-600">Max Price</label>
        <div className="flex items-center gap-3 mt-2">
          <button
            onClick={decreasePrice}
            className="p-3 border rounded-lg text-gray-600"
          >
            <FaMinus />
          </button>

          <div className="flex-1 text-center border rounded-lg py-3 text-sm">
            ₦{maxPrice.toLocaleString()}
          </div>

          <button
            onClick={increasePrice}
            className="p-3 border rounded-lg text-gray-600"
          >
            <FaPlus />
          </button>
        </div>
      </div>

      {/* Amenity */}
      <div className="md:flex-1">
        <label className="text-sm text-gray-600">Amenity</label>
        <select
          value={selectedAmenity}
          onChange={(e) => { setSelectedAmenity(e.target.value); setCurrentPage(1); }}
          className="w-full mt-1 border rounded-lg px-4 py-3 text-sm"
        >
          <option value="">Any Amenity</option>
          {amenities.map(a => (
            <option key={a} value={a}>{a}</option>
          ))}
        </select>
      </div>

      {/* Clear */}
      <button
        onClick={clearFilters}
        className="w-full md:w-auto border border-orange-500 text-orange-600 py-3 px-6 rounded-lg text-sm"
      >
        Clear
      </button>
    </div>
  );

  return (
    <section className="bg-white pt-28 pb-16" id="available-hostels">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        <h2 className="text-3xl md:text-4xl text-center text-gray-800 mb-10">
          Available Hostels
        </h2>

        {/* MOBILE FILTER BUTTON */}
        <div className="md:hidden mb-6">
          <button
            onClick={() => setShowFilters(true)}
            className="w-full flex items-center justify-center gap-2 border rounded-lg py-3 text-sm"
          >
            <FaFilter /> Filter Hostels
          </button>
        </div>

        {/* DESKTOP FILTER */}
        <div className="hidden md:block mb-12">
          <FilterContent />
        </div>

        {/* MOBILE FILTER MODAL */}
        {showFilters && (
          <div className="fixed inset-0 bg-black/40 z-50 flex items-end">
            <div className="bg-white w-full rounded-t-2xl p-6">
              <div className="flex justify-between mb-4">
                <h3 className="text-lg">Filters</h3>
                <button onClick={() => setShowFilters(false)}>Close</button>
              </div>
              <FilterContent />
              <button
                onClick={() => setShowFilters(false)}
                className="mt-6 w-full bg-orange-500 text-white py-3 rounded-lg"
              >
                Apply Filters
              </button>
            </div>
          </div>
        )}

        {/* HOSTEL GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {currentHostels.map(hostel => (
            <div key={hostel.id} className="bg-gray-50 rounded-2xl border overflow-hidden">
              <img src={hostel.image} alt={hostel.name} className="w-full h-40 object-cover" />

              <div className="p-4">
                <h3 className="text-lg text-gray-800">{hostel.name}</h3>
                <p className="text-sm text-gray-600">{hostel.location}</p>

                <div className="flex gap-3 mt-2 text-orange-500">
                  {hostel.amenities.map(a => (
                    <span key={a}>{amenityIcons[a]}</span>
                  ))}
                </div>

                <p className="mt-3 text-orange-600">
                  ₦{hostel.price.toLocaleString()} / year
                </p>

                <Link to="/hostel-details">
                  <button className="mt-4 w-full py-2 bg-orange-500 text-white rounded-xl text-sm">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-12">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(p => p - 1)}
              className="px-5 py-2 border rounded-lg text-sm disabled:opacity-40"
            >
              Previous
            </button>

            <span className="text-sm text-gray-600">
              Page {currentPage} of {totalPages}
            </span>

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(p => p + 1)}
              className="px-5 py-2 bg-orange-500 text-white rounded-lg text-sm disabled:opacity-40"
            >
              Next
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
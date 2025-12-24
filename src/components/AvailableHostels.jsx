import { useState } from "react";
import {
  FaWifi,
  FaTint,
  FaBolt,
  FaFilter,
  FaPlus,
  FaMinus,
  FaMapMarkerAlt,
  FaTimes,
} from "react-icons/fa";
import hostel1 from "../assets/hostel1.jpg";
import { Link } from "react-router-dom";

function AvailableHostels() {
  const allHostels = [
    { id: 1, name: "Sunrise Hostel", location: "Adenike", price: 120000, distance: 0.8, amenities: ["WiFi", "Water"], image: hostel1 },
    { id: 2, name: "Peace Lodge", location: "Under G", price: 150000, distance: 1.2, amenities: ["Light", "Water"], image: hostel1 },
    { id: 3, name: "Crystal Hostel", location: "Yoaco", price: 100000, distance: 1.8, amenities: ["WiFi"], image: hostel1 },
    { id: 4, name: "Maple Residence", location: "Aroje", price: 130000, distance: 2.0, amenities: ["Water"], image: hostel1 },
    { id: 5, name: "Elite Hostel", location: "Stadium Area", price: 140000, distance: 2.4, amenities: ["Light"], image: hostel1 },
    { id: 6, name: "Green Villa", location: "General Area", price: 110000, distance: 1.5, amenities: ["WiFi", "Light"], image: hostel1 },
    { id: 7, name: "Royal Stay", location: "Adenike", price: 170000, distance: 0.6, amenities: ["Water"], image: hostel1 },
    { id: 8, name: "Blue Gate Lodge", location: "Under G", price: 125000, distance: 1.0, amenities: ["WiFi"], image: hostel1 },
    { id: 9, name: "Palm Court", location: "Yoaco", price: 115000, distance: 1.9, amenities: ["Light"], image: hostel1 },
    { id: 10, name: "Victory Hostel", location: "Aroje", price: 135000, distance: 2.2, amenities: ["Water"], image: hostel1 },
    { id: 11, name: "Haven Homes", location: "Lautech Area", price: 160000, distance: 0.4, amenities: ["WiFi", "Light"], image: hostel1 },
    { id: 12, name: "Comfort Lodge", location: "Under G", price: 105000, distance: 1.3, amenities: ["Water"], image: hostel1 },
  ];

  /* ---------------- STATES ---------------- */
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedAmenity, setSelectedAmenity] = useState("");
  const [maxPrice, setMaxPrice] = useState(180000);
  const [maxDistance, setMaxDistance] = useState(2);
  const [sortType, setSortType] = useState(""); // "price" | "distance" | ""
  const [sortOrder, setSortOrder] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);

  const itemsPerPage = 4;

  const locations = [...new Set(allHostels.map(h => h.location))];
  const amenities = ["WiFi", "Water", "Light"];

  /* ---------------- FILTER ---------------- */
  let filteredHostels = allHostels.filter(h => {
    const matchLocation = !selectedLocation || h.location === selectedLocation;
    const matchAmenity = !selectedAmenity || h.amenities.includes(selectedAmenity);
    const matchPrice = h.price <= maxPrice;
    const matchDistance = !sortType || sortType !== "distance" || h.distance <= maxDistance;

    return matchLocation && matchAmenity && matchPrice && matchDistance;
  });

  /* ---------------- SORT ---------------- */
  if (sortType === "price") {
    filteredHostels.sort((a, b) =>
      sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );
  }

  if (sortType === "distance") {
    filteredHostels.sort((a, b) =>
      sortOrder === "asc" ? a.distance - b.distance : b.distance - a.distance
    );
  }

  /* ---------------- PAGINATION ---------------- */
  const totalPages = Math.ceil(filteredHostels.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const currentHostels = filteredHostels.slice(start, start + itemsPerPage);

  const amenityIcons = {
    WiFi: <FaWifi />,
    Water: <FaTint />,
    Light: <FaBolt />,
  };

  const clearFilters = () => {
    setSelectedLocation("");
    setSelectedAmenity("");
    setMaxPrice(180000);
    setMaxDistance(2);
    setSortType("");
    setSortOrder("asc");
    setCurrentPage(1);
  };

  /* ---------------- FILTER UI ---------------- */
  const FilterContent = () => (
    <div className="flex flex-col md:flex-row md:items-end gap-4">

      {/* LOCATION */}
      <div className="md:flex-1">
        <label className="text-sm text-gray-600">Location</label>
        <select
          value={selectedLocation}
          onChange={e => { setSelectedLocation(e.target.value); setCurrentPage(1); }}
          className="w-full mt-1 border rounded-lg px-4 py-3 text-sm"
        >
          <option value="">All Locations</option>
          {locations.map(loc => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>
      </div>

      {/* AMENITIES */}
      <div className="md:flex-1">
        <label className="text-sm text-gray-600">Amenity</label>
        <select
          value={selectedAmenity}
          onChange={e => { setSelectedAmenity(e.target.value); setCurrentPage(1); }}
          className="w-full mt-1 border rounded-lg px-4 py-3 text-sm"
        >
          <option value="">Any Amenity</option>
          {amenities.map(a => (
            <option key={a} value={a}>{a}</option>
          ))}
        </select>
      </div>

      {/* PRICE */}
      <div className="md:flex-1">
        <label className="text-sm text-gray-600">Max Price</label>
        <div className="mt-1 flex items-center justify-between border rounded-lg px-4 py-3">
          <button onClick={() => setMaxPrice(p => Math.max(80000, p - 5000))}>
            <FaMinus />
          </button>
          <span className="text-sm font-medium">₦{maxPrice.toLocaleString()}</span>
          <button onClick={() => setMaxPrice(p => p + 5000)}>
            <FaPlus />
          </button>
        </div>
      </div>

      {/* DISTANCE */}
      <div className="md:flex-1">
        <label className="text-sm text-gray-600">Max Distance (km)</label>
        <div className="mt-1 flex items-center justify-between border rounded-lg px-4 py-3">
          <button onClick={() => setMaxDistance(d => Math.max(0.5, d - 0.1))}>
            <FaMinus />
          </button>
          <span className="text-sm font-medium">{maxDistance.toFixed(1)} km</span>
          <button onClick={() => setMaxDistance(d => d + 0.1)}>
            <FaPlus />
          </button>
        </div>
      </div>

      {/* SORT TYPE */}
      <div className="md:flex-1">
        <label className="text-sm text-gray-600">Sort By</label>
        <select
          value={sortType}
          onChange={e => setSortType(e.target.value)}
          className="w-full mt-1 border rounded-lg px-4 py-3 text-sm"
        >
          <option value="">None</option>
          <option value="price">Price</option>
          <option value="distance">Distance</option>
        </select>
      </div>

      {/* SORT ORDER */}
      <div className="md:flex-1">
        <label className="text-sm text-gray-600">Order</label>
        <select
          value={sortOrder}
          onChange={e => setSortOrder(e.target.value)}
          disabled={!sortType}
          className="w-full mt-1 border rounded-lg px-4 py-3 text-sm disabled:opacity-40"
        >
          <option value="asc">Lowest → Highest</option>
          <option value="desc">Highest → Lowest</option>
        </select>
      </div>

      {/* CLEAR */}
      <button
        onClick={clearFilters}
        className="border border-orange-500 text-orange-600 px-6 py-3 rounded-lg text-sm hover:bg-orange-50 transition"
      >
        Clear
      </button>
    </div>
  );

  return (
    <section id="available-hostels" className="bg-white pt-28 pb-16">
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
          <div className="fixed inset-0 bg-black/40 z-50 flex justify-center items-end">
            <div className="bg-white w-full rounded-t-2xl p-6 max-h-[85vh] overflow-y-auto">

              {/* HEADER */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Filters</h3>
                <button onClick={() => setShowFilters(false)}>
                  <FaTimes />
                </button>
              </div>

              <FilterContent />

              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => setShowFilters(false)}
                  className="w-full border py-3 rounded-lg"
                >
                  Cancel
                </button>

                <button
                  onClick={() => setShowFilters(false)}
                  className="w-full bg-orange-600 text-white py-3 rounded-lg"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        )}

        {/* HOSTEL GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {currentHostels.map(h => (
            <div key={h.id} className="bg-gray-50 rounded-2xl border overflow-hidden">
              <img src={h.image} className="w-full h-40 object-cover" />

              <div className="p-4">
                <h3 className="text-lg text-gray-800">{h.name}</h3>
                <p className="text-sm text-gray-600 flex items-center gap-1">
                  <FaMapMarkerAlt /> {h.distance} km from school
                </p>

                <div className="flex gap-3 mt-2 text-orange-500 text-sm">
                  {h.amenities.map(a => (
                    <span key={a}>{amenityIcons[a]}</span>
                  ))}
                </div>

                <p className="mt-3 text-orange-600">
                  ₦{h.price.toLocaleString()} / year
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
          <div className="flex justify-center gap-4 mt-12">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(p => p - 1)}
              className="px-5 py-2 border rounded-lg text-sm disabled:opacity-40"
            >
              Previous
            </button>

            <span className="text-sm text-gray-600 pt-2">
              Page {currentPage} of {totalPages}
            </span>

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(p => p + 1)}
              className="px-5 py-2 bg-orange-600 text-white rounded-lg text-sm disabled:opacity-40"
            >
              Next
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

export default AvailableHostels;
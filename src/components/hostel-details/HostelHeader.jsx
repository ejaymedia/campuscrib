import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaHeart, FaRegHeart, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";

export default function HostelHeader() {
  const navigate = useNavigate();

  // TEMP: favourite state (replace with Firebase later)
  const [isFavourite, setIsFavourite] = useState(false);

  return (
    <div className="mb-6">

      {/* TOP ROW */}
      <div className="flex items-center justify-between mb-4">

        {/* BACK BUTTON */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-600 transition"
        >
          <FaArrowLeft />
          Back
        </button>

        {/* FAVOURITE */}
        <button
          onClick={() => setIsFavourite(!isFavourite)}
          className="text-xl text-orange-600 hover:scale-110 transition"
          aria-label="Save hostel"
        >
          {isFavourite ? <FaHeart /> : <FaRegHeart />}
        </button>

      </div>

      {/* HOSTEL INFO */}
      <h1 className="text-2xl md:text-3xl text-gray-900">
        Peace Lodge
      </h1>

      <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
        <FaMapMarkerAlt />
        <span>Under-G, Ogbomosho (LAUTECH Area)</span>
        <span className="mx-1">•</span>
        <span className="text-gray-600 font-medium">1.2 km from campus</span>
      </div>

    </div>
  );
}
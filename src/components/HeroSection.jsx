export default function HeroSection() {
  return (
    <section
      className="
        w-full 
        min-h-screen 
        flex 
        items-center 
        justify-center
        text-center
        pt-32 
        pb-20 
        bg-gradient-to-b 
        from-blue-50 
        to-white
        px-4 md:px-8
        overflow-hidden
      "
    >
      <div className="max-w-3xl flex flex-col items-center">
        
        <h1 className="text-3xl md:text-5xl font-semibold leading-tight text-gray-900">
          Find Your Ideal Hostel
          <span className="text-orange-600"> Around LAUTECH</span>
        </h1>

        <p className="mt-4 text-gray-600 text-sm md:text-lg max-w-lg">
          Explore secure, comfortable and affordable off-campus hostels across 
          Adenike, Under-G, Aroje, Youaco and other top locations.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl text-sm font-medium hover:bg-gray-100 transition">
            Register
          </button>

          <button className="px-6 py-3 bg-orange-600 text-white rounded-xl text-sm font-medium hover:bg-orange-700 transition">
            Login
          </button>
        </div>

      </div>
    </section>
  );
}
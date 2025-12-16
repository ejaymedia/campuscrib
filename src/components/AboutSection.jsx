function AboutSection() {
  return (
    <section className="py-16 pt-28 bg-gray-50" id="about">
      <div className="max-w-5xl mx-auto px-6 text-center">
        
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
          Why CampusCrib?
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
          CampusCrib is built to make student accommodation simple, safe, and stress-free.
          We connect students with verified hostel landlords, eliminating scammers and unreliable agents.  
          Our mission is to create a trusted platform where booking accommodation is as easy as tapping a button.
        </p>

        {/* Highlight cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          
          <div className="bg-white shadow-md border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-orange-500 mb-2">Secure Bookings</h3>
            <p className="text-gray-600 text-sm">
              Pay with confidence using our escrow system — your money is safe until you confirm check-in.
            </p>
          </div>

          <div className="bg-white shadow-md border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-orange-500 mb-2">Verified Hostels</h3>
            <p className="text-gray-600 text-sm">
              Every listing is reviewed by our team to ensure accurate photos, pricing, and descriptions.
            </p>
          </div>

          <div className="bg-white shadow-md border border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-orange-500 mb-2">Student-Friendly</h3>
            <p className="text-gray-600 text-sm">
              Built specifically for university students — easy search filters, chat support, and real reviews.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutSection;
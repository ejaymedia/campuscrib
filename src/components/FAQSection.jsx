import { useState } from "react";
import { HiPlus, HiMinus } from "react-icons/hi";

function FAQSection() {
  const faqs = [
    {
      question: "How do I search for hostels?",
      answer:
        "Use the search bar on the homepage. Filter by location, price range, and amenities like Wi-Fi, water, and security. Browse photos and details, then reserve instantly."
    },
    {
      question: "Is my payment safe on CampusCrib?",
      answer:
        "Yes. Your money is held securely until you confirm the rental. Once verified, the payment is released to the landlord. You're protected at every step."
    },
    {
      question: "How do I list my hostel?",
      answer:
        "Create a landlord account, upload photos, add details, set prices, and publish. CampusCrib verifies your listing before it appears on the platform."
    },
    {
      question: "What if I have issues with a rental?",
      answer:
        "Contact our support team anytime. We resolve disputes quickly and fairly. Your safety and experience matter to us."
    },
    {
      question: "Can I save my favorite hostels?",
      answer:
        "Absolutely. Save hostels to your favorites and compare them later. Your saved list stays with you so you can take your time deciding."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="w-full px-6 pt-28 md:px-12 py-20 font-[Poppins] bg-gray-50"
    >
      {/* TITLE */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Everything you need to know about finding and listing hostels on
          CampusCrib.
        </p>
      </div>

      {/* ACCORDION */}
      <div className="max-w-3xl mx-auto flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            {/* QUESTION ROW */}
            <div className="flex items-center justify-between">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                {faq.question}
              </h3>

              <span className="text-orange-600 text-2xl">
                {openIndex === index ? <HiMinus /> : <HiPlus />}
              </span>
            </div>

            {/* ANSWER */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-40 mt-3" : "max-h-0"
              }`}
            >
              <p className="text-gray-600">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CONTACT BOX */}
      <div className="text-center mt-16">
        <h3 className="text-2xl font-bold text-gray-800">
          Still have questions?
        </h3>
        <p className="text-gray-600 mt-2">
          Reach out to us anytime. We’re here to help.
        </p>

        <button className="mt-6 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">
          Contact Us
        </button>
      </div>
    </section>
  );
}

export default FAQSection;
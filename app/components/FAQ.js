import { useState } from "react";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is TunaCRM?",
      answer:
        "TunaCRM is a powerful customer relationship management tool designed to help businesses streamline their sales, manage contacts, and grow efficiently.",
    },
    {
      question: "How do I get started with TunaCRM?",
      answer:
        "Simply sign up for an account, choose a plan that suits your needs, and start managing your contacts and sales pipeline right away!",
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time from your account settings. Changes will take effect immediately.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a 14-day free trial for all new users. No credit card is required to start your trial.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "We offer 24/7 email and chat support for all users. Premium plans include priority support and dedicated account managers.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-indigo-900 mb-4 animate-fade-in-up">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 animate-fade-in-up delay-100">
            Find answers to common questions about TunaCRM.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
              >
                <h3 className="text-lg font-semibold text-indigo-900">
                  {faq.question}
                </h3>
                <span className="text-purple-600">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  activeIndex === index ? "max-h-40" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 px-6 pb-6">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

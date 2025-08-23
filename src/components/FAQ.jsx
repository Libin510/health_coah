import { useState } from "react";

export default function FAQ({ data, isAdmin }) {
  const [faqs, setFaqs] = useState(data); 
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleQuestionChange = (index, value) => {
    const updated = [...faqs];
    updated[index].question = value;
    setFaqs(updated);
  };

  const handleAnswerChange = (index, value) => {
    const updated = [...faqs];
    updated[index].answer = value;
    setFaqs(updated);
  };

  return (
    <section className="py-20 px-6 bg-[#FCFCFD]">
      <div className="text-center mb-12 md:max-w-[31vw] w-full mx-auto">
        <p className="text-2xl sm:text-4xl md:text-5xl font-semibold text-center mb-2">
          Frequently Asked Questions
        </p>
        <p className="text-center text-sm sm:text-lg font-medium text-[#777E90] mb-10">
          Get answers to common questions about our AI health assistant app
        </p>
      </div>

      <div className="space-y-4 max-w-3xl mx-auto bg-white">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`${index !== faqs.length - 1 ? "border-b" : ""} ${
              index === 0 ? "border-t" : "border-b"
            } py-2`}
          >
            <button
              className="w-full flex justify-between items-center py-4 px-3 font-medium text-left"
              onClick={() => toggle(index)}
            >
              {isAdmin ? (
                <input
                  type="text"
                  value={faq.question}
                  onChange={(e) => handleQuestionChange(index, e.target.value)}
                  className="w-full outline-none text-black font-medium text-xl md:text-[32px]"
                />
              ) : (
                <span className="text-black font-medium text-xl md:text-[32px]">
                  {faq.question}
                </span>
              )}
              <span className=" text-[#000000] text-lg">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>

            {activeIndex === index && (
              <div className="pb-4 text-gray-600">
                {isAdmin ? (
                  <textarea
                    value={faq.answer}
                    onChange={(e) => handleAnswerChange(index, e.target.value)}
                    className="w-full outline-none"
                  />
                ) : (
                  <span className="text-gray-300 font-medium text-xl md:text-[32px]">
                    {faq.answer}
                  </span>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

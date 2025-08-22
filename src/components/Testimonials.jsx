"use client";

import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Testimonials({ data, isAdmin }) {
  const [current, setCurrent] = useState(0);
  const [testimonials, setTestimonials] = useState(data);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleEdit = (index, field, value) => {
    const updated = [...testimonials];
    updated[index][field] = value;
    setTestimonials(updated);
  };

  return (
    <section className="py-12 sm:py-20 bg-[#F4F5F6] px-4 sm:px-10">
      <div className="text-center mb-8 sm:mb-12 max-w-full sm:max-w-[31vw] mx-auto">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold">
          Our Users Feel the Transformation
        </h2>
        <p className="font-medium text-[#777E90] text-sm sm:text-lg mt-2">
          Real Stories from People Empowered by Personalized <br className="hidden sm:block"/> Wellness
        </p>
      </div>

      <div className="flex items-center justify-center max-w-full sm:max-w-4xl mx-auto relative">
        <button
          onClick={prevSlide}
          className="absolute left-0 -translate-x-1/2 sm:translate-x-0 size-10 sm:size-[62px] p-2 sm:p-3 rounded-full border border-gray-300 hover:border-none bg-white hover:bg-blue-500 text-gray-400 hover:text-white"
        >
          <FaChevronLeft className="mx-auto" />
        </button>

        <div className="bg-white rounded-2xl w-full sm:max-w-[70vw] md:max-w-[49vw] shadow p-4 sm:p-8 text-center mx-12 sm:mx-0">
          <p
            className="text-gray-700 mb-6 font-medium text-base sm:text-lg text-center whitespace-pre-line text-balance max-w-full sm:max-w-2xl mx-auto outline-none"
            contentEditable={isAdmin}
            suppressContentEditableWarning={true}
            onBlur={(e) =>
              handleEdit(current, "testimonial", e.target.innerText)
            }
          >
            {testimonials[current].testimonial}
          </p>

          <div className="flex gap-2 items-center justify-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FFBC99]" />
            <div className="text-left">
              <p
                className="font-semibold text-lg sm:text-xl outline-none"
                contentEditable={isAdmin}
                suppressContentEditableWarning={true}
                onBlur={(e) =>
                  handleEdit(current, "name", e.target.innerText)
                }
              >
                {testimonials[current].name}
              </p>
              <p
                className="text-xs sm:text-sm text-gray-500 outline-none"
                contentEditable={isAdmin}
                suppressContentEditableWarning={true}
                onBlur={(e) =>
                  handleEdit(current, "role", e.target.innerText)
                }
              >
                {testimonials[current].role}
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 translate-x-1/2 sm:translate-x-0 size-10 sm:size-[62px] border border-gray-300 hover:border-none bg-white hover:bg-blue-500 text-gray-400 hover:text-white p-2 sm:p-3 rounded-full shadow"
        >
          <FaChevronRight className="mx-auto " />
        </button>
      </div>

      <div className="flex flex-col sm:flex-row justify-center mt-6 sm:mt-8 gap-3 sm:gap-2">
        {testimonials.map((item, index) => (
          <button
            key={index}
            className={`px-4 sm:px-6 py-3 sm:py-[18px] rounded-[20px] flex gap-3 items-center bg-white shadow text-center transition ${
              current === index ? "" : "opacity-50"
            }`}
            onClick={() => setCurrent(index)}
          >
            <div className="w-8 h-8 sm:w-[2.3vw] sm:h-[5vh] rounded-full bg-[#FFBC99]" />
            <div className="text-left">
              <p className="font-medium text-sm sm:text-xl">{item.name}</p>
              <p className="text-xs sm:text-base text-[#909DA2]">{item.role}</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

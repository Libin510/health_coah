"use client";

import { LuClock7 } from "react-icons/lu";
import { TfiAlarmClock } from "react-icons/tfi";
import { HiPlay } from "react-icons/hi2";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";

export default function About({ data, isAdmin }) {
  const [heading, setHeading] = useState(
    data?.heading || "Maximizing Your Health Potential Together"
  );
  const [paragraph, setParagraph] = useState(
    "Your AI-powered health companion transforms the way you approach wellness, making healthy living effortless and personalized. Our advanced system creates tailored plans to help you stay on track while ensuring flexibility for your lifestyle."
  );

  return (
    <section className="py-12 px-4 sm:px-6 bg-white w-full">
      {/* Top Logos */}
      <div className="w-full py-8 sm:py-12 px-4 sm:px-20">
        <div className="w-full flex flex-wrap justify-center sm:justify-between gap-4 sm:gap-6">
          {[
            { src: "/Vector (1).png", text: "Logoipsum" },
            { src: "/Vector.png", text: "Logoipsum" },
            { src: "/Vector.png", text: "Logoipsum" },
            { src: "/Vector (2).png", text: "Logoipsum" },
            { src: "/Vector (3).png", text: "Logoipsum" },
          ].map((logo, index) => (
            <div
              key={index}
              className="text-gray-500 font-bold text-base sm:text-lg flex gap-2 items-center"
            >
              <img
                src={logo.src}
                alt={logo.text}
                className="h-5 w-5 sm:h-6 sm:w-6"
              />
              <p>{logo.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center py-12 sm:py-20 px-4 sm:px-10">
        {/* Left Text */}
        <div className="text-left md:text-left">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 leading-snug outline-none"
            contentEditable={isAdmin}
            suppressContentEditableWarning={true}
            onBlur={(e) => setHeading(e.target.innerText)}
          >
            {heading}
          </h2>

          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-800">
            Smart Nutrition Planning
          </h3>

          <p
            className="text-gray-600 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base outline-none"
            contentEditable={isAdmin}
            suppressContentEditableWarning={true}
            onBlur={(e) => setParagraph(e.target.innerText)}
          >
            {paragraph}
          </p>

          <button className="px-5 sm:px-6 py-2 sm:py-3 bg-white border border-[#FFFFFF] rounded-full shadow-sm hover:shadow-md transition text-sm sm:text-base">
            Read More
          </button>
        </div>

        <div className="flex justify-center w-full">
          <div className="bg-[#F4F5F6] p-6 sm:p-10 rounded-[20px] w-full max-w-full md:max-w-[35vw]">
            <div className="bg-white rounded-[20px] mx-auto shadow-[0_10px_40px_0_rgba(0,0,0,0.08)] p-4 sm:p-6 w-full max-w-full md:max-w-[29vw]">
              <div className="flex justify-between items-center mb-3 sm:mb-4">
                <h4 className="flex items-center gap-2 text-sm sm:text-[17px] font-medium text-[#1F2937]">
                  <TfiAlarmClock className="size-5 sm:size-6" /> Time Tracker
                </h4>
                <button className="text-xs sm:text-[13px] flex gap-1 items-center border text-[#1F2937] border-[#EDEDED] px-2 py-1 rounded-full hover:text-gray-800">
                  <LuClock7 className="text-[#1F2937]" /> History
                </button>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center bg-[#F1F3F5] rounded-3xl p-4 sm:p-[19px] gap-4 sm:gap-0">
                <div className="text-center sm:text-left">
                  <p className="font-medium text-xs sm:text-[13px]">
                    Design System
                  </p>
                  <p className="text-3xl sm:text-[51px] font-bold text-gray-900">
                    10:34:<span className="text-[#2073F9]">00</span>
                  </p>
                </div>
                <button className="bg-[#2073F9] text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-md">
                  <HiPlay />
                </button>
              </div>

              <div className="mt-4 sm:mt-6">
                <p className="text-xs sm:text-[13px] font-medium text-[#1F2937] mb-2">
                  Previous Tasks
                </p>
                {[
                  { title: "Loom UI Design System", time: "1:20:35" },
                  { title: "Loom UI / UX Designer", time: "1:45:35" },
                ].map((task, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between py-2"
                  >
                    <div className="flex items-center gap-2">
                      <div className="size-8 sm:size-[39px] rounded-full bg-[#E5F0FF] flex items-center justify-center text-[#2073F9] text-xs">
                        <img
                          src="/sybol.png"
                          alt="Task Icon"
                          className="size-5 sm:size-[22px]"
                        />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-gray-700">
                          {task.title}
                        </p>
                        <p className="text-[10px] sm:text-xs text-gray-500">
                          {task.time}
                        </p>
                      </div>
                    </div>
                    <BsThreeDotsVertical className="text-gray-600" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

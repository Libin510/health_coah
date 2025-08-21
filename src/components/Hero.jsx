"use client";

import { useEffect, useRef } from "react";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import BasicGauges from "./BasicGauges";
import { IoCheckmarkCircleSharp, IoCloseCircle } from "react-icons/io5";
import WorkAnalyticsCard from "./WorkAnalyticsCard";
import WorkHoursChart from "./WorkHoursChart";
import { PiWarningCircleFill } from "react-icons/pi";
import gsap from "gsap";
import { FaApple } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";
import { FaRegCalendarDays } from "react-icons/fa6";

export default function Hero() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const phoneRef = useRef(null);
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);
  const logoRef = useRef(null);
  const statsRef = useRef(null);
  const buttonsRef = useRef(null);
  const partnersRef = useRef(null);
  const imgRef = useRef(null);
  useEffect(() => {
    // Simple fade-in animations without GSAP
    const animateElement = (element, delay = 0) => {
      if (element) {
        element.style.opacity = "0";
        element.style.transform = "translateY(30px)";
        element.style.transition = "all 0.8s ease-out";

        setTimeout(() => {
          element.style.opacity = "1";
          element.style.transform = "translateY(0)";
        }, delay);
      }
    };

    animateElement(logoRef.current, 100);
    animateElement(titleRef.current, 200);
    animateElement(subtitleRef.current, 400);
    animateElement(leftCardRef.current, 600);
    animateElement(phoneRef.current, 800);
    animateElement(rightCardRef.current, 1000);
    animateElement(statsRef.current, 1200);
    animateElement(buttonsRef.current, 1400);
    animateElement(partnersRef.current, 1600);

    if (imgRef.current) {
      gsap.to(imgRef.current, {
        rotate: 360,
        duration: 4, // speed of one full rotation
        repeat: -1, // infinite loop
        ease: "linear", // smooth constant speed
      });
    }
  }, []);
 const leftCard_Data = {
  count: 20,
  total: 40,
  datas: [
    { date: "Mar 20, 2024", type: "Annual", status: "Confirmed" },
    { date: "Mar 21, 2024", type: "Sick", status: "Rejected" },
    { date: "Mar 22, 2024", type: "Casual", status: "Rejected" },
  ],
};
  return (
    <div className="min-h-screen bg-[#F9F9F9]">
      {/* Header */}
      <header className="flex justify-between items-center px-6 py-4">
        <div ref={logoRef} className="flex items-center gap-2">
          <div className="w-8 h-8 flex items-center justify-center">
            <img
              src="/logo.png"
              ref={imgRef}
              alt="Logo"
              className="w-7 h-7 rounded-sm"
            />
          </div>
          <span className="text-[22px] font-semibold text-[#0C0C13] font-manrope">
            Reppoo
          </span>
        </div>
        <button className="text-gray-600 text-lg hover:text-gray-800 bg-[#FFFFFF] rounded-full py-[10.62px] px-[31.86] font-bold">
          Admin login
        </button>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center px-6 py-12">
        {/* Hero Section */}
        <section className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-26">
          {/* Left Card */}
          <div
            ref={leftCardRef}
            className="z-10 bg-white rounded-2xl shadow-lg p-4 w-full max-w-sm transform -rotate-6 hover:rotate-0 transition-transform duration-300"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#EDEDED] pb-2">
              <span className="text-sm font-medium text-gray-700 flex items-center gap-1">
                <FaRegCalendarDays className="text-gray-500" />
                Day Off
              </span>
              <button className="text-[10px] font-bold border border-[#EDEDED] py-[6px] px-[8px] rounded-full ">
                See All <AiOutlineRight className="inline-block ml-1" />
              </button>
            </div>

            {/* Gauge */}
            <div className="flex justify-center">
              <BasicGauges total={leftCard_Data.total} count={leftCard_Data.count} />
            </div>

            {/* Leave Status List */}
            <div className="space-y-3 text-sm">
              {leftCard_Data.datas.map((item, index) => (
              
              <div className="flex items-center justify-between border-t border-gray-200 py-2">
                <div className="flex items-center gap-2">
                  {item.status === "Confirmed" ? (
                    <span className="text-green-500">
                      <IoCheckmarkCircleSharp />
                    </span>
                  ) : (
                    <span className="text-red-500">
                      <IoCloseCircle />
                    </span>
                  )}
                  <span className="text-gray-700">{item.date} ({item.type})</span>
                </div>
                <span className={`text-[10px] ${item.status === "Confirmed" ? "bg-[#11B54014]" : "bg-[#E6000014]"} px-2 py-0.5 rounded-lg`}>
                  {item.status}
                </span>
              </div>)
              )}

              {/* <div className="flex items-center justify-between border-t border-gray-200 py-2">
                <div className="flex items-center gap-2">
                  <span className="text-red-500">
                    <IoCloseCircle />
                  </span>
                  <span className="text-gray-700">Mar 20, 2024 (Sick)</span>
                </div>
                <span className="text-[10px] bg-[#E6000014] px-2 py-0.5 rounded-lg">
                  Rejected
                </span>
              </div> */}

              {/* <div className="flex items-center justify-between border-t border-gray-200 py-2">
                <div className="flex items-center gap-2">
                  <span className="text-red-500">
                    <IoCloseCircle />
                  </span>
                  <span className="text-gray-700">Mar 20, 2024 (Casual)</span>
                </div>
                <span className="text-[10px] bg-[#E6000014] px-2 py-0.5 rounded-lg">
                  Rejected
                </span>
              </div> */}
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="z-20 flex-shrink-0">
            <img
              src="/phone.png"
              alt="Phone Mockup"
              className="w-[320px] lg:w-[26.67vw] h-auto"
            />
          </div>

          {/* Right Card */}
          <div
            ref={rightCardRef}
            className="z-10 bg-white rounded-2xl shadow-lg w-full max-w-sm transform rotate-6 hover:rotate-0 transition-transform duration-300 py-4"
          >
            <div className="flex items-center justify-between px-4">
              <span className="text-xs font-medium text-gray-700">
                Workout Analysis
              </span>
              <span className="text-xs text-gray-500 hover:text-gray-700">
                See All
              </span>
            </div>

            <WorkHoursChart />

            <div className="flex items-center gap-2 px-4 mt-2 text-xs text-gray-500">
              <div className="w-4 h-4 rounded-full bg-foreground flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-background" />
              </div>
              <PiWarningCircleFill className="text-gray-400" />
              <span>Total work hours include extra hours.</span>
            </div>
          </div>
        </section>

        {/* Title and Description */}
        <section className="text-center mt-16 mb-8 max-w-2xl">
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Your AI Health Coach
          </h1>
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl text-gray-600 leading-relaxed"
          >
            Transform your wellness journey with personalized AI-powered
            guidance that adapts to your unique needs.
          </p>
        </section>

        {/* User Stats */}
        <section
          ref={statsRef}
          className="flex items-center gap-4 mb-8 text-gray-700"
        >
          <div className="flex -space-x-2">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
              alt="User"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
              alt="User"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face"
              alt="User"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
          </div>
          <div className="text-sm">
            <span className="font-semibold">59,182</span>
            <span className="ml-1">Happy Users</span>
          </div>
        </section>

        {/* Download Buttons */}
        <section ref={buttonsRef} className="flex gap-4 mb-16">
          <button className="bg-white text-black py-3 px-6 rounded-full flex items-center gap-3 shadow hover:bg-gray-800 hover:text-white transition-colors">
            <FaApple className="text-2xl" />
            <div className="text-left">
              <div className="font-semibold">Download</div>
            </div>
          </button>
          <button className="bg-white text-black py-3 px-6 rounded-full flex items-center gap-3 shadow hover:bg-gray-800 hover:text-white transition-colors">
            <img src="/playstore.png" className="w-6 h-6" />
            <div className="text-left">
              <div className="font-semibold">Google Play</div>
            </div>
          </button>
        </section>
      </main>
    </div>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import BasicGauges from "./BasicGauges";
import { IoCheckmarkCircleSharp, IoCloseCircle } from "react-icons/io5";
import WorkHoursChart from "./WorkHoursChart";
import { PiWarningCircleFill } from "react-icons/pi";
import gsap from "gsap";
import { FaApple } from "react-icons/fa";
import { AiOutlineRight } from "react-icons/ai";
import { FaRegCalendarDays } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export default function Hero({isAdmin}) {
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
  const router = useRouter();

  const [title, setTitle] = useState("Your AI Health Coach");
  const [subtitle, setSubtitle] = useState(
    "Transform your wellness journey with personalized AI-powered guidance that adapts to your unique needs."
  );
  const [phoneImage, setPhoneImage] = useState("/phone.png");
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [adminEmail, setAdminEmail] = useState(null);

  const handlePhoneImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPhoneImage(url);
    }
  };

  useEffect(() => {
    const role = localStorage.getItem("role");
    const username = localStorage.getItem("username");
    const email = localStorage.getItem("email");
    setAdminEmail(email);
    if (role === "admin" && username) {
      setLoggedInUser(username);
    }
  }, []);

  useEffect(() => {
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
        duration: 4,
        repeat: -1,
        ease: "linear",
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

        {loggedInUser ? (
          <div className=" flex items-center justify-center">
            <div className="flex items-center gap-3 px-4 py-2">
              <div className="w-10 h-10 rounded-full bg-gray-200" />

              <div className="">
                <h3 className="text-base font-semibold text-[#101828]">
                  {loggedInUser}
                </h3>
                <p className="text-xs text-gray-500">{adminEmail}</p>
              </div>

              <button
                onClick={() => {
                  localStorage.clear("role");
                  localStorage.clear("username");
                  localStorage.clear("email");
                  setLoggedInUser(null);
                  window.location.href = "/";
                }}
                className="ml-4 px-4 py-1 text-xs font-medium border border-blue-400 text-blue-500 rounded-full hover:bg-blue-50"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => {
              router.push("/login");
            }}
            className="text-gray-600 text-lg hover:text-gray-800 bg-[#FFFFFF] rounded-full py-[10.62px] px-[31.86px] font-bold cursor-pointer"
          >
            Admin login
          </button>
        )}
      </header>

      <main className="flex flex-col items-center px-6 py-12">
        <section className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-26">
          <div className="relative flex justify-center items-center">
            <div className="absolute w-[400px] h-[400px] rounded-full bg-[#70D9FF40] blur-3xl"></div>
            <div
              ref={leftCardRef}
              className="z-10 bg-white rounded-3xl shadow-lg p-4 w-full max-w-sm transform -rotate-6 hover:rotate-0 transition-transform duration-300"
            >
              <div className="flex items-center justify-between border-b border-[#EDEDED] pb-2">
                <span className="text-sm font-medium text-gray-700 flex items-center gap-1">
                  <FaRegCalendarDays className="text-gray-500" />
                  Day Off
                </span>
                <button className="text-[10px] font-bold border border-[#EDEDED] py-[6px] px-[8px] rounded-full ">
                  See All <AiOutlineRight className="inline-block ml-1" />
                </button>
              </div>
              <div className="flex justify-center">
                <BasicGauges />
              </div>
              <div className="space-y-3 text-sm">
                {leftCard_Data.datas.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-t border-gray-200 py-2"
                  >
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
                      <span className="text-gray-700">
                        {item.date} ({item.type})
                      </span>
                    </div>
                    <span
                      className={`text-[10px] ${
                        item.status === "Confirmed"
                          ? "bg-[#11B54014]"
                          : "bg-[#E6000014]"
                      } px-2 py-0.5 rounded-lg`}
                    >
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="z-20 flex-shrink-0 flex flex-col items-center">
            <img
              src={phoneImage}
              alt="Phone Mockup"
              className="w-[320px] lg:w-[26.67vw] h-auto"
            />
            {isAdmin && (
              <input
                type="file"
                className="mt-2"
                onChange={handlePhoneImageUpload}
              />
            )}
          </div>

          <div className="relative flex justify-center items-center">
            <div className="absolute w-[400px] h-[400px] rounded-full bg-[#FFE5AA] blur-3xl"></div>
            <div
              ref={rightCardRef}
              className="z-10 bg-white rounded-3xl shadow-lg w-full max-w-sm transform rotate-6 hover:rotate-0 transition-transform duration-300 py-4 px-3"
            >
              <div className="flex items-center justify-between border-b border-[#EDEDED] pb-2">
                <span className="text-sm font-medium text-gray-700 flex items-center gap-1">
                  <FaRegCalendarDays className="text-gray-500" />
                  Work Hour Analysis
                </span>
                <button className="text-[10px] font-bold border border-[#EDEDED] py-[6px] px-[8px] rounded-full ">
                  See All <AiOutlineRight className="inline-block ml-1" />
                </button>
              </div>
              <WorkHoursChart />
              <div className="flex items-center gap-2 px-4 mt-2 text-xs text-gray-500">
                <PiWarningCircleFill className="text-gray-400" />
                <span>Total work hours include extra hours.</span>
              </div>
            </div>
          </div>
        </section>

        <section
          ref={statsRef}
          className="flex items-center gap-4 mt-16 mb-8 text-gray-700"
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
          <div className="flex items-center gap-1">
            <span className="font-bold text-black text-2xl">59,182</span>
            <span className="ml-1 text-base">Happy Users</span>
          </div>
        </section>

        <section className="text-center mb-8 max-w-2xl">
          {isAdmin ? (
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-4xl md:text-[64px] font-semibold text-gray-900 mb-6 text-center bg-transparent border-none focus:outline-none w-full"
            />
          ) : (
            <h1
              ref={titleRef}
              className="text-4xl md:text-[64px] font-semibold text-gray-900 mb-6"
            >
              {title}
            </h1>
          )}

          {isAdmin ? (
            <textarea
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              className="text-base md:text-lg text-gray-600 font-medium leading-relaxed text-center bg-transparent border-none focus:outline-none w-full resize-none"
            />
          ) : (
            <p
              ref={subtitleRef}
              className="text-base md:text-lg text-gray-600 font-medium leading-relaxed"
            >
              {subtitle}
            </p>
          )}
        </section>

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

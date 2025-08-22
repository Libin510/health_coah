"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  FaApple,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { PiThumbsUp, PiChatsCircle } from "react-icons/pi";
import { BsChatSquareText } from "react-icons/bs";

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from(".floating-icon", {
        y: 30,
        opacity: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.6)",
        stagger: 0.3,
        delay: 0.5,
      });
      tl.to(
        ".floating-icon",
        {
          y: "+=15",
          repeat: -1,
          yoyo: true,
          duration: 3,
          ease: "sine.inOut",
          stagger: { each: 0.5, repeatRefresh: true },
        },
        "-=0.5"
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col bg-white text-gray-900">
      <section className="flex-1 flex flex-col items-center justify-center text-center py-20 sm:py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-48 sm:w-80 h-48 sm:h-80 rounded-full border border-gray-300 opacity-40 absolute"></div>
          <div className="w-64 sm:w-[450px] h-64 sm:h-[450px] rounded-full border border-gray-300 opacity-30 absolute"></div>
          <div className="w-80 sm:w-[600px] h-80 sm:h-[600px] rounded-full border border-gray-300 opacity-20 absolute"></div>
          <div className="w-96 sm:w-[750px] h-96 sm:h-[750px] rounded-full border border-gray-300 opacity-10 absolute"></div>
        </div>

        <div className="absolute inset-0 pointer-events-none hidden sm:block">
          <div className="absolute bg-white border border-gray-300 rounded-[20px] p-5 -rotate-10 top-16 left-[10%] sm:left-[26%] floating-icon">
            <IoDocumentTextOutline size={24} className="text-black" />
          </div>
          <div className="absolute top-1/2 left-[12%] sm:left-[27%] floating-icon bg-white border border-gray-300 rounded-[20px] p-5 rotate-12">
            <PiChatsCircle size={24} className="text-black" />
          </div>
          <div className="absolute top-24 right-[12%] sm:right-[25%] floating-icon bg-white border border-gray-300 rounded-[20px] p-5 rotate-12">
            <BsChatSquareText size={24} className="text-black" />
          </div>
          <div className="absolute bottom-32 right-[15%] sm:right-[30%] floating-icon bg-white border border-gray-300 rounded-[20px] p-5 -rotate-12">
            <PiThumbsUp size={24} className="text-black" />
          </div>
        </div>

        <div className="relative z-10 max-w-xl mx-auto px-2 sm:px-0">
          <p className="text-sm sm:text-base font-medium tracking-widest text-[#23262F] mb-3 uppercase">
            Special Launch Offer
          </p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-medium mb-4 leading-tight">
            Your journey to better <br className="hidden sm:block" />
            health starts now
          </h1>
          <p className="text-base sm:text-lg text-[#777E90] font-medium mb-8">
            Get 50% off your first 3 months when you start your trial today!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black py-3 px-6 rounded-full flex items-center justify-center gap-3 shadow hover:bg-gray-800 hover:text-white transition-colors">
              <FaApple className="text-xl sm:text-2xl" />
              App Store
            </button>
            <button className="bg-white text-black py-3 px-6 rounded-full flex items-center justify-center gap-3 shadow hover:bg-gray-800 hover:text-white transition-colors">
              <img src="/playstore.png" className="w-5 h-5 sm:w-6 sm:h-6" />
              <div className="font-semibold">Google Play</div>
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-white">
        <div className="px-4 sm:px-8 mx-auto py-12">
          <div className="flex flex-col lg:flex-row justify-between gap-12">
            <div className="max-w-sm text-center lg:text-left mx-auto lg:mx-0">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                <img src="/logo.png" alt="Logo" className="w-[30px] h-[30px] rounded-sm" />
                <h3 className="text-2xl font-semibold text-gray-900">Reppoo</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Innovative health assistant app that leverages AI to provide personalized wellness recommendations.
              </p>
              <p className="text-gray-800 font-medium text-sm">hello@reppoo.com</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 lg:gap-16 text-center sm:text-left mx-auto lg:mx-0">
              {[
                { title: "Company", links: ["Home", "Early Access", "404"] },
                { title: "App", links: ["Download for iOS", "Download for Android"] },
                { title: "Legal", links: ["Privacy Policy", "Terms & Conditions"] },
              ].map((col, i) => (
                <div key={i}>
                  <h4 className="font-bold text-base text-gray-900 mb-4">{col.title}</h4>
                  <ul className="space-y-3">
                    {col.links.map((link, idx) => (
                      <li key={idx}>
                        <a href="#" className="text-[#696B68] text-sm hover:text-gray-900">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t max-w-[96%] mx-auto border-gray-200 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} Reppoo</p>
            <div className="flex gap-4 sm:gap-6">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-[#23262F] rounded-full border border-gray-400 size-10 sm:size-12 flex items-center justify-center hover:text-blue-600"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

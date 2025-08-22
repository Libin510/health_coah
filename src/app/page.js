"use client";

import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import { useEffect, useState } from "react";

export default function Home() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const role = localStorage.getItem("role");
    setIsAdmin(role === "admin"); 
    setLoading(false); 
  }, []);

  const testimonialsData = [
    {
      testimonial:
        "I’ve tried countless health apps, but none come close to this. The AI truly understands my needs...",
      name: "Ava L.",
      role: "Marketing Executive",
    },
    {
      testimonial:
        "This app changed my routine completely. I feel more productive every day!",
      name: "Namo Serlina",
      role: "CEO, Delego",
    },
  ];

  const faqData = [
    {
      question: "What is the AI Health Assistant app?",
      answer:
        "Our AI Health Assistant app helps users monitor their health, track symptoms, and get personalized recommendations based on AI analysis.",
    },
    {
      question: "Is my personal health data secure?",
      answer:
        "Yes, we use end-to-end encryption and strict privacy protocols to ensure your health data is safe and secure.",
    },
    {
      question: "Can the app replace a doctor?",
      answer:
        "No, the app provides guidance and recommendations but does not replace professional medical advice. Always consult a doctor for serious concerns.",
    },
    {
      question: "Which devices are compatible with the app?",
      answer:
        "The app is compatible with iOS and Android devices, and can integrate with most wearable health trackers.",
    },
    {
      question: "Is there a free version of the app?",
      answer:
        "Yes, we offer a free version with basic features. A premium version is available with advanced analytics and personalized insights.",
    },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <main className="overflow-x-hidden">
      <Hero isAdmin={isAdmin} />
      <About isAdmin={isAdmin} />
      <Testimonials data={testimonialsData} isAdmin={isAdmin} />
      <FAQ data={faqData} isAdmin={isAdmin} />
      <Footer />
    </main>
  );
}

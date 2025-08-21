"use client";

import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import {useState } from "react";

export default function Home() {
  const [content, setContent] = useState(null);



  return (
   <main className="overflow-x-hidden">
      <Hero  />
      {/* <About  />
      <Testimonials  />
      <FAQ /> */}
    </main>
  );
}

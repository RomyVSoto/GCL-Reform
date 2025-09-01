"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./components/ui/button";
import { Code } from "lucide-react";
import { BrushCleaning } from "lucide-react";
import { Cable } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const heroImages = [
    "/hero/carousel-image-1.jpg",
    "/hero/carousel-image-2.jpg",
    "/hero/carousel-image-3.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="flex flex-col gap-20 md:gap-32 lg:gap-40">
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="absolute inset-0 bg-black/50 z-10" />
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url('${image}')`,
                }}
              />
            </div>
          ))}
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 lg:h-48 bg-gradient-to-t from-white via-white/80 to-transparent z-20" />

        <div className="absolute inset-0 opacity-20 z-15">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="relative z-30 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center min-h-[80vh]">
          <div className="mb-4 sm:mb-6 lg:mb-8">
            <Image
              src="/logos/Logo.png"
              width={400}
              height={200}
              className="mx-auto w-48 h-auto sm:w-64 md:w-80 lg:w-96 xl:w-[400px] object-contain"
            />
          </div>

          <h1 className="font-roboto text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Global Communications Link
          </h1>

          <p className="font-montserrat text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
            Connecting you globally.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-sky-500 hover:bg-sky-800 text-white px-6 sm:px-8 py-3 text-base sm:text-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/contact">Request a Consultation</Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-2 border-sky-500 text-blue-400 hover:bg-blue-500 hover:text-white px-6 sm:px-8 py-3 text-base sm:text-lg font-medium transition-all duration-300 bg-transparent"
            >
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-24 sm:bottom-32 lg:bottom-36 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? "bg-sky-500 scale-110"
                  : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="absolute bottom-8 sm:bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
          <a href="#home">
            <svg
              className="w-10 h-10 text-sky-300 hover:text-sky-500 transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </section>

      <div id="home"></div>

      <section className="flex flex-col gap-12 md:gap-16 lg:gap-22 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
          <h2 className="font-roboto font-semibold text-3xl sm:text-4xl lg:text-5xl">
            Our Core Services
          </h2>
          <p className="font-montserrat text-sky-700 text-base sm:text-lg lg:text-xl max-w-4xl mx-auto">
            Transform your network infrastructure with Global Communications
            Link comprehensive fiber optic and cabling services. Our expert team
            ensures seamless connectivity, optimal performance, and reliable
            solutions that support your business growth and technological
            advancement.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-16">
          <div className="flex flex-col gap-8 sm:gap-12 lg:gap-20 p-6 sm:p-8 border rounded-xl">
            <span className="bg-sky-500 rounded-xl px-8 sm:px-20 lg:px-40 py-4 mx-auto">
              <Code className="text-white w-6 h-6 sm:w-12 sm:h-8" />
            </span>
            <span className="text-start flex flex-col gap-3 sm:gap-4">
              <h2 className="font-montserrat font-semibold text-xl sm:text-2xl lg:text-3xl">
                Fiber Optic Cabling
              </h2>
              <p className="font-roboto text-base sm:text-lg lg:text-xl font-thin text-gray-500 mb-4">
                Professional fiber optic installation and testing for
                high-performance network infrastructure with certified quality
                standards.
              </p>
            </span>
          </div>
          <div className="flex flex-col gap-8 sm:gap-12 lg:gap-20 p-6 sm:p-8 border rounded-xl">
            <span className="bg-sky-500 rounded-xl px-8 sm:px-20 lg:px-40 py-4 mx-auto">
              <BrushCleaning className="text-white w-6 h-6 sm:w-8 sm:h-8" />
            </span>
            <span className="text-start flex flex-col gap-3 sm:gap-4">
              <h2 className="font-montserrat font-semibold text-xl sm:text-2xl lg:text-3xl">
                Server Cleaning
              </h2>
              <p className="font-roboto text-base sm:text-lg lg:text-xl font-thin text-gray-500 mb-4">
                Specialized server maintenance and cleaning services to optimize
                performance and prevent overheating issues.
              </p>
            </span>
          </div>
          <div className="flex flex-col gap-8 sm:gap-12 lg:gap-20 p-6 sm:p-8 border rounded-xl">
            <span className="bg-sky-500 rounded-xl px-8 sm:px-20 lg:px-40 py-4 mx-auto">
              <Cable className="text-white w-6 h-6 sm:w-8 sm:h-8" />
            </span>
            <span className="text-start flex flex-col gap-3 sm:gap-4">
              <h2 className="font-montserrat font-semibold text-xl sm:text-2xl lg:text-3xl">
                Cable Management
              </h2>
              <p className="font-roboto text-base sm:text-lg lg:text-xl font-thin text-gray-500 mb-4">
                Expert cable organization solutions that ensure proper airflow,
                easy maintenance, and professional appearance.
              </p>
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl text-center px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:gap-6">
          <h2 className="font-roboto font-semibold text-3xl sm:text-4xl lg:text-5xl">
            Ready to enhance your connectivity?
          </h2>
          <p className="font-montserrat text-gray-500 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto">
            Upgrade your network today. Professional fiber optic installation,
            expert testing, and reliable maintenance services that ensure your
            business stays connected and competitive.
          </p>
        </div>
        <Button className="w-full sm:w-auto font-montserrat font-semibold text-base sm:text-lg lg:text-xl cursor-pointer bg-sky-500 hover:bg-sky-800 transition-all duration-200 p-6 sm:p-7 mt-12 sm:mt-16 lg:mt-20">
          <Link href="/contact">Contact Us Now</Link>
        </Button>
      </section>
    </div>
  );
}

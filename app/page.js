import Image from "next/image";
import { Button } from "./components/ui/button";
import { Code } from "lucide-react";
import { BrushCleaning } from "lucide-react";
import { Cable } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-40">
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-black/50">
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/images/server-room.jpg')",
            }}
          />
        </div>

        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-montserrat text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Reliable Fiber Optic & Server Solutions
          </h1>

          <p className="font-roboto text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Ensure your business stays connected with our expert services. We
            specialize in fiber optic cabling, server cleaning, and cable
            management for ultimate network performance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              Request a Consultation
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 text-lg font-medium transition-all duration-300 bg-transparent"
            >
              Our Services
            </Button>
          </div>
        </div>

        {/* Elementos decorativos */}
        <div
          id="home"
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <a href="#home">
            <svg
              className="w-6 h-6 text-white/70"
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

      <section className="flex flex-col gap-22 text-center max-w-4xl mx-auto">
        <div className="flex flex-col gap-8">
          <h2 className="font-roboto font-semibold text-5xl">
            Our Core Services
          </h2>
          <p className="font-montserrat text-sky-700 text-xl">
            Transform your network infrastructure with Global Communications
            Link comprehensive fiber optic and cabling services. Our expert team
            ensures seamless connectivity, optimal performance, and reliable
            solutions that support your business growth and technological
            advancement.
          </p>
        </div>
        <div className="flex justify-center gap-16">
          <div className="flex flex-col gap-20 p-8 border rounded-xl">
            <span className="bg-sky-500 rounded-xl px-40 py-4">
              <Code className="text-white" />
            </span>
            <span className="text-start flex flex-col gap-4 text-3xl">
              <h2 className="font-montserrat font-semibold">
                Fiber Optic Cabling
              </h2>
              <p className="font-roboto text-xl font-thin text-gray-500 mb-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Inventore, iure ex pariatur obcaecati cumque dolore repellendus
                incidunt
              </p>
            </span>
          </div>
          <div className="flex flex-col gap-20 p-8 border rounded-xl">
            <span className="bg-sky-500 rounded-xl px-40 py-4">
              <BrushCleaning className="text-white" />
            </span>
            <span className="text-start flex flex-col gap-4 text-3xl">
              <h2 className="font-montserrat font-semibold">Server Cleaning</h2>
              <p className="font-roboto text-xl font-thin text-gray-500 mb-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Inventore, iure ex pariatur obcaecati cumque dolore repellendus
                incidunt
              </p>
            </span>
          </div>
          <div className="flex flex-col gap-20 p-8 border rounded-xl">
            <span className="bg-sky-500 rounded-xl px-40 py-4">
              <Cable className="text-white" />
            </span>
            <span className="text-start flex flex-col gap-4 text-3xl">
              <h2 className="font-montserrat font-semibold">
                Cable Management
              </h2>
              <p className="font-roboto text-xl font-thin text-gray-500 mb-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Inventore, iure ex pariatur obcaecati cumque dolore repellendus
                incidunt
              </p>
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl text-center">
        <div className="flex flex-col gap-4">
          <h2 className="font-roboto font-semibold text-5xl">
            Ready to enchance your conectivity?
          </h2>
          <p className="font-montserrat text-gray-500 text-xl">
            Upgrade your network today. Professional fiber optic installation,
            expert testing, and reliable maintenance services that ensure your
            business stays connected and competitive.
          </p>
        </div>
        <Button className="font-montserrat font-semibold text-xl cursor-pointer bg-sky-500 hover:bg-sky-800 transition-all duration-200 p-7 mt-20">
          Contact Us Now
        </Button>
      </section>
    </div>
  );
}

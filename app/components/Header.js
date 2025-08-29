'use client'

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full h-20 bg-white relative z-50">
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-20 xl:mx-40 px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/logos/Logo_wname-dark.png"
              width={150}
              height={60}
              alt="GCL Logo"
              className="h-auto w-24 sm:w-32 md:w-36 lg:w-40 xl:w-[150px]"
            />
          </Link>
        </div>

        <div className="hidden md:flex justify-between gap-4 lg:gap-6 xl:gap-8 items-center">
          <div>
            <ul className="flex gap-3 lg:gap-4 xl:gap-6 font-montserrat text-sky-500 text-sm lg:text-base">
              <li className="hover:underline underline-offset-8 hover:underline-offset-4 decoration-2 decoration-neutral-500 transition-all duration-200 cursor-pointer">
                <Link href="/about">About Us</Link>
              </li>
              <li className="hover:underline underline-offset-8 hover:underline-offset-4 decoration-2 decoration-neutral-500 transition-all duration-200 cursor-pointer">
                <Link href="/services">Services</Link>
              </li>
              <li className="hover:underline underline-offset-8 hover:underline-offset-4 decoration-2 decoration-neutral-500 transition-all duration-200 cursor-pointer">
                <Link href="/codes">Codes & Standards</Link>
              </li>
              <li className="hover:underline underline-offset-8 hover:underline-offset-4 decoration-2 decoration-neutral-500 transition-all duration-200 cursor-pointer">
              <Link href="/certifications">Certifications</Link>
              </li>
            </ul>
          </div>

          <div>
            <Button className="font-montserrat font-semibold cursor-pointer bg-sky-500 hover:bg-sky-800 transition-all duration-200 p-3 lg:p-4 xl:p-5 text-sm lg:text-base">
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>

        {/* Botón de menú móvil con animación */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative w-10 h-10 flex items-center justify-center"
          >
            <div className="w-6 h-6 relative">
              {/* Línea superior */}
              <span 
                className={`absolute left-0 top-1 w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen 
                    ? 'rotate-45 translate-y-2' 
                    : 'rotate-0 translate-y-0'
                }`}
              />
              {/* Línea media */}
              <span 
                className={`absolute left-0 top-2.5 w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen 
                    ? 'opacity-0 scale-0' 
                    : 'opacity-100 scale-100'
                }`}
              />
              {/* Línea inferior */}
              <span 
                className={`absolute left-0 top-4 w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen 
                    ? '-rotate-45 -translate-y-2' 
                    : 'rotate-0 translate-y-0'
                }`}
              />
            </div>
          </Button>
        </div>
      </div>

      {/* Menú móvil */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg absolute top-full left-0 w-full z-50">
          <div className="px-4 py-6 space-y-4">
            <ul className="space-y-4 font-montserrat text-sky-500">
              <li>
                <Link 
                  href="/about"
                  className="block py-2 hover:text-sky-700 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/services"
                  className="block py-2 hover:text-sky-700 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/codes"
                  className="block py-2 hover:text-sky-700 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Codes & Standards
                </Link>
              </li>
              <li>
                <Link 
                  href="/certifications"
                  className="block py-2 hover:text-sky-700 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Certifications
                </Link>
              </li>
            </ul>
            
            <div className="pt-4 border-t border-gray-200">
              <Button className="w-full font-montserrat font-semibold bg-sky-500 hover:bg-sky-800 transition-all duration-200 p-3">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
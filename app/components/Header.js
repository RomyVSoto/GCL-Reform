import Image from "next/image";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <nav className="w-full h-20 bg-white">
      <div className="mx-40 px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
        <div className="flex-shrink-0">
          <Image
            src="/logos/Logo_wname-dark.png"
            width={150}
            height={60}
            alt="GCL Logo"
            className="h-auto"
          />
        </div>

        <div className="hidden md:flex justify-between gap-8 items-center">
          <div>
            <ul className="flex gap-6 font-montserrat text-sky-500 font-medium text-md">
              <li className="hover:underline underline-offset-8 hover:underline-offset-4 decoration-2 decoration-gray-500 transition-all duration-200 cursor-pointer">
                About Us
              </li>
              <li className="hover:underline underline-offset-8 hover:underline-offset-4 decoration-2 decoration-gray-500 transition-all duration-200 cursor-pointer">
                Services
              </li>
              <li className="hover:underline underline-offset-8 hover:underline-offset-4 decoration-2 decoration-gray-500 transition-all duration-200 cursor-pointer">
                Codes & Standards
              </li>
              <li className="hover:underline underline-offset-8 hover:underline-offset-4 decoration-2 decoration-gray-500 transition-all duration-200 cursor-pointer">
                Certifications
              </li>
            </ul>
          </div>

          <div>
            <Button className="font-montserrat cursor-pointer bg-sky-500 hover:bg-sky-800 transition-all duration-200 p-5">
              Get a Quote
            </Button>
          </div>
        </div>

        {/* Botón de menú móvil (opcional) */}
        <div className="md:hidden">
          <Button variant="ghost" size="sm">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  );
}
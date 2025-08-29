import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bottom-0 w-full text-gray-600 py-6 sm:py-8 lg:py-4 font-roboto bg-white border-t mt-20 sm:mt-32 lg:mt-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-2">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-2 items-start sm:items-center">
            <div className="flex-shrink-0">
              <Image 
                src="/logos/Logo.png" 
                width={150} 
                height={50} 
                alt="Logo"
                className="w-32 sm:w-36 lg:w-[150px] h-auto"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <span className="font-montserrat font-semibold text-base sm:text-lg">
                Global Communications Link
              </span>
              <span className="text-sky-500 text-sm sm:text-base">Connecting you globally</span>
            </div>
          </div>
          
          <div className="min-w-0">
            <span className="font-bold block mb-2 sm:mb-3 font-montserrat text-lg lg:text-xl text-black">Quick Links</span>
            <ul className="cursor-pointer space-y-1 sm:space-y-2">
              <li className="hover:text-sky-500 transition-all duration-200 text-sm sm:text-base">About Us</li>
              <li className="hover:text-sky-500 transition-all duration-200 text-sm sm:text-base">Services</li>
              <li className="hover:text-sky-500 transition-all duration-200 text-sm sm:text-base">Codes & Standards</li>
              <li className="hover:text-sky-500 transition-all duration-200 text-sm sm:text-base">Certifications</li>
            </ul>
          </div>
          
          <div className="min-w-0">
            <span className="font-bold font-montserrat block mb-2 sm:mb-3 text-lg lg:text-xl text-black">Contact</span>
            <ul className="space-y-1 sm:space-y-2">
                <li className="text-sm sm:text-base break-all sm:break-normal">malmonte@globalclink.com</li>
                <li className="text-sm sm:text-base">+1 (929) 384-2944</li>
            </ul>
          </div>
        </section>

        <section className="text-center mt-6 sm:mt-8 pt-4 border-t border-gray-200 text-sm sm:text-base">
          &copy; 2025 Global Communications Link. All rights reserved.
        </section>
      </div>
    </footer>
  );
}
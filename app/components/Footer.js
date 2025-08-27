import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bottom-0 w-full text-gray-600 py-4 font-roboto bg-white border-t mt-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="flex justify-between flex-wrap gap-2">
          <div className="flex gap-2 items-center">
            <div>
              <Image src="/logos/Logo.png" width={150} height={50} alt="Logo" />
            </div>
            <div className="flex flex-col block space-y-1">
              <span className="font-montserrat font-semibold">
                Global Communications Link
              </span>
              <span className="text-sky-500">Connecting you globally</span>
            </div>
          </div>
          
          <div className="min-w-0">
            <span className="font-bold block mb-2 font-montserrat">Quick Links</span>
            <ul className="cursor-pointer space-y-1">
              <li className="hover:text-sky-500 transition-all duration-200">About Us</li>
              <li className="hover:text-sky-500 transition-all duration-200">Services</li>
              <li className="hover:text-sky-500 transition-all duration-200">Codes & Standards</li>
              <li className="hover:text-sky-500 transition-all duration-200">Certifications</li>
            </ul>
          </div>
          
          <div className="min-w-0">
            <span className="font-bold font-montserrat block mb-2">Contact</span>
            <ul className="space-y-1">
                <li>malmonte@globalclink.com</li>
                <li>+1 (929) 384-2944</li>
            </ul>
          </div>
        </section>

        <section className="text-center mt-6 pt-4 border-t border-gray-200">
          &copy; 2025 Global Communications Link. All rights reserved.
        </section>
      </div>
    </footer>
  );
}
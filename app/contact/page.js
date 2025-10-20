import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { MapPin } from "lucide-react";
import ContactForm from "../components/ContactForm";

export default function Codes() {
  return (
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-24 mx-4 sm:mx-8 lg:mx-16 xl:mx-32 my-16 sm:my-20 lg:my-24">
      <div className="flex flex-col gap-8 lg:gap-10 w-full lg:w-1/2 lg:pr-8">
        <section className="flex flex-col gap-4 lg:gap-6">
          <h2 className="font-roboto font-semibold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-neutral-900">
            Get in Touch
          </h2>
          <p className="font-montserrat font-normal text-base lg:text-lg text-gray-500">
            {"Ready to start your next network project? Contact our experienced team today to discuss your fiber optic installation, testing, or maintenance needs. We're here to help you achieve optimalconnectivity."}
          </p>
        </section>
        <section className="flex flex-col gap-6 lg:gap-8">
          <div className="flex gap-4 items-center">
            <span className="p-3 rounded-full bg-sky-100 flex-shrink-0">
              <Phone className="text-sky-800 w-6 h-6" />
            </span>
            <div className="flex flex-col gap-1">
              <h2 className="font-roboto font-semibold text-neutral-700 text-xl lg:text-2xl">
                Phone
              </h2>
              <p className="font-montserrat font-normal text-base text-gray-500">
                +1 (929) 384-2944
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <span className="p-3 rounded-full bg-sky-100 flex-shrink-0">
              <Mail className="text-sky-800 w-6 h-6" />
            </span>
            <div className="flex flex-col gap-1">
              <h2 className="font-roboto font-semibold text-neutral-700 text-xl lg:text-2xl">
                Email
              </h2>
              <p className="font-montserrat font-normal text-base text-gray-500">
                malmonte@globalclink.com
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <span className="p-3 rounded-full bg-sky-100 flex-shrink-0">
              <MapPin className="text-sky-800 w-6 h-6" />
            </span>
            <div className="flex flex-col gap-1">
              <h2 className="font-roboto font-semibold text-neutral-700 text-xl lg:text-2xl">
                Address
              </h2>
              <p className="font-montserrat font-normal text-base text-gray-500">
                Bronx, New York
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="w-full lg:w-1/2">
        <ContactForm />
      </div>
    </div>
  );
}

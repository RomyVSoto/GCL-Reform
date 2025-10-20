import { ShieldCheck } from "lucide-react";
import { Cable } from "lucide-react";
import { Cpu } from "lucide-react";
import { GaugeCircle } from "lucide-react";
import { Wrench } from "lucide-react";
import { AlertTriangle } from "lucide-react";
import { ChevronsLeftRightEllipsis } from "lucide-react";

const certifications = [
  {
    icon: <ShieldCheck size={32} className="text-blue-700" />,
    title: "SST",
    subtitle: "Site Safety Training",
    description: "Workplace safety training.",
  },
  {
    icon: <ChevronsLeftRightEllipsis size={32} className="text-blue-700" />,
    title: "PCT",
    subtitle: "Panduit Certified Technician",
    description: "Técnico certificado en redes de cobre y fibra.",
  },
  {
    icon: <Cable size={32} className="text-blue-700" />,
    title: "FSM-16S",
    subtitle: "Fujikura Splicing Certification",
    description: "Certified copper and fiber network technician.",
  },
  {
    icon: <GaugeCircle size={32} className="text-blue-700" />,
    title: "NOYES",
    subtitle: "M700 Certification",
    description: "Using fiber test and measurement equipment.",
  },
  {
    icon: <Wrench size={32} className="text-blue-700" />,
    title: "3M",
    subtitle: "Installation Certification",
    description: "Certification in graphics and vinyl installation.",
  },
  {
    icon: <AlertTriangle size={32} className="text-blue-700" />,
    title: "Confined Space",
    subtitle: "OSHA 1910.146",
    description: "Confined space safety awareness.",
  },
];

export default function Certifications() {
  return (
    <div className="flex flex-col gap-10 md:gap-20 my-10 md:my-20 lg:my-30 mx-4 md:mx-8 lg:mx-40">
      <section className="flex flex-col gap-3 text-center max-w-2xl mx-auto">
        <h2 className="font-roboto font-bold text-4xl text-neutral-900">
          Certifications & Warranties
        </h2>
        <p className="font-montserrat font-extralight text-2xl">
          Your assurance of quality and reliability in every connection we make.
        </p>
      </section>

      <section className="flex flex-col gap-4 items-center">
        <div className="flex flex-col gap-10">
          <section className="font-roboto font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-neutral-900 leading-tight">
            Our Certifications
          </section>
          <section className="flex flex-col">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-14 text-center">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="flex flex-col gap-10 items-center px-24 py-5 bg-gray-100 rounded-lg border border-sky-300 shadow-xl hover:shadow-2xl transition-all duration-200"
                >
                  <span className="p-5 bg-sky-100 rounded-full">
                    {cert.icon}
                  </span>

                  <span className="flex flex-col gap-2">
                    <p className="font-roboto font-semibold text-2xl text-gray-700">
                      {cert.title}
                    </p>
                    <span className="flex flex-col gap-4">
                      <p className="font-montserrat italic text-base text-gray-600">
                        {cert.subtitle}
                      </p>
                      <p className="font-montserrat text-xs text-gray-500">
                        {cert.description}
                      </p>
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>

      <section className="flex flex-col gap-10 bg-white py-12">
        <div>
          <h2 className="font-roboto text-3xl font-bold font-roboto font-semibold text-3xl text-neutral-800 text-center">
            Our Commitment to Quality: Work Warranty
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-5 bg-gray-50 border border-sky-300 rounded-xl p-6 text-gray-700 leading-relaxed shadow-sm">
            <section className="flex flex-col">
              <h3 className="font-montserrat font-semibold text-lg text-neutral-800">
                CDIS proudly stands behind the quality and reliability of our
                cabling installation services.
              </h3>
              <p className="font-montserrat font-normal">
                We offer a comprehensive warranty to ensure our clients can
                continue their business operations with confidence.
              </p>
            </section>

            <section className="flex flex-col">
              <h3 className="font-montserrat font-semibold text-lg text-neutral-800">
                Workmanship Warranty
              </h3>
              <p className="font-montserrat font-normal text-gray-700">
                <strong>100% of all cabling installations</strong> performed by
                CDIS. This warranty is designed to provide peace of mind by
                ensuring that our installations meet both functionality and
                safety standards. Should any issue arise from workmanship, we
                will promptly address and resolve it at no additional cost.
              </p>
            </section>

            <section className="flex flex-col">
              <h3 className="font-montserrat font-semibold text-lg text-neutral-800">
                Business Continuity Commitment
              </h3>
              <p className="font-montserrat font-normal text-gray-700">
                We understand how critical network infrastructure is to daily
                operations. That’s why our warranty ensures minimal downtime and
                uninterrupted service for your business. Our commitment is to
                keep your systems running effectively through dependable
                installations and responsive support.
              </p>
            </section>

            <section className="flex flex-col">
              <h3 className="font-montserrat font-semibold text-lg text-neutral-800">
                Licensing & Insurance
              </h3>
              <p className="font-montserrat font-normal text-gray-700">
                <strong>Licensed to operate across multiple states</strong> and
                is fully insured. This means your project is protected under
                professional coverage and executed by certified technicians
                adhering to regulatory standards.
              </p>
            </section>

            <section className="flex flex-col">
              <p className="font-montserrat font-thin text-gray-700">
                  For more details about your specific warranty coverage, please
                  refer to your service agreement or contact our customer
                  support team. At CDIS, we are committed to delivering quality
                  work and long-lasting results — and our warranty is a
                  reflection of that promise.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

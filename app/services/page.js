import {
  Wrench,
  Building,
  ArrowDownUp,
  Cable,
  Hammer,
  Cctv,
  CircleCheck,
} from "lucide-react";

const servicesData = [
  {
    id: 1,
    icon: Wrench,
    title: "Fiber Optic Design & Installation",
    description:
      "Comprehensive fiber optic solutions from concept to deployment for high-speed, reliable connectivity.",
    services: [
      {
        title: "Network Design & Engineering",
        description:
          "Customized solutions tailored to your specific infrastructure needs.",
      },
      {
        title: "Professional Installation",
        description:
          "Expert Cat6, Cat6a, Cat5e, Cat3 cable installation and termination.",
      },
      {
        title: "Custom Infrastructure",
        description:
          "Duct plowing, micro duct placement, and structured cabling systems.",
      },
    ],
  },
  {
    id: 2,
    icon: Building,
    title: "Data Center & Server Maintenance",
    description:
      "Professional cleaning to maintain performance and prevent hardware failures by removing dust and debris.",
    services: [
      {
        title: "Professional Server Cleaning",
        description:
          "Thorough cleaning of server to prevent hardware failures.",
      },
      {
        title: "Internal Component Cleaning",
        description:
          "Safe cleaning of all internal server systems and critical components.",
      },
      {
        title: "Airflow and Cooling Systems",
        description:
          "Environmental optimization ensuring proper airflow and cooling efficiency.",
      },
    ],
  },
  {
    id: 3,
    icon: ArrowDownUp,
    title: "Network Testing & Certification",
    description:
      "End-to-end testing services to ensure optimal network performance with comprehensive validation.",
    services: [
      {
        title: "End-to-End Performance Test",
        description:
          "Complete network connectivity verification and performance analysis.",
      },
      {
        title: "Professional Cable Testing",
        description:
          "Reel testing, splice testing, and power meter validation services.",
      },
      {
        title: "Network Certification Reports",
        description:
          "Comprehensive testing documentation and network certification services.",
      },
    ],
  },
  {
    id: 4,
    icon: Cable,
    title: "Cable Installation & Management",
    description:
      "Expert services for organized, efficient cabling systems, reducing clutter and improving accessibility.",
    services: [
      {
        title: "New Cable Installation Service",
        description:
          "Professional installation for indoor and outdoor network environments.",
      },
      {
        title: "Cable Replacement",
        description:
          "Safe and efficient removal of old or unused cable infrastructure.",
      },
      {
        title: "Cable Management",
        description:
          "Organized routing management for accessible infrastructure.",
      },
    ],
  },
  {
    id: 5,
    icon: Hammer,
    title: "Network Repair & Restoration",
    description:
      "Expert troubleshooting and repair services with comprehensive restoration and upgrade capabilities.",
    services: [
      {
        title: "Cable Fault and Repair Service",
        description:
          "Professional troubleshooting and repair of network connectivity issues.",
      },
      {
        title: "Network Restoration Services",
        description:
          "Complete connectivity restoration with hardware replacement support.",
      },
      {
        title: "System Upgrades",
        description:
          "Network expansion services to meet growing business demands.",
      },
    ],
  },
  {
    id: 6,
    icon: Cctv,
    title: "Security & Monitoring Solutions",
    description:
      "Advanced security infrastructure installation with monitoring systems and access control integration.",
    services: [
      {
        title: "Security Camera Installation",
        description:
          "Professional surveillance system installation and configuration services.",
      },
      {
        title: "Network Monitoring and Setup",
        description:
          "Advanced monitoring solution deployment with real-time tracking.",
      },
      {
        title: "Access Control and Integration",
        description:
          "Security system integration with 24/7 monitoring capabilities.",
      },
    ],
  },
];

export default function Services() {
  return (
    <div className="flex flex-col gap-12 sm:gap-16 lg:gap-20 items-center my-16 sm:my-20 lg:my-30 px-4 sm:px-6 lg:px-8">
      <section className="flex flex-col gap-4 sm:gap-6 text-center max-w-2xl items-center">
        <h2 className="font-roboto font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-neutral-900 leading-tight">Our Services</h2>
        <p className="font-montserrat text-base sm:text-lg lg:text-2xl text-gray-700 font-extralight px-4">
          Global Communications Link offers a comprehensive suite of services to
          meet all your fiber optic cabling and network infrastructure needs.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-8 lg:gap-12 xl:gap-15 w-full max-w-7xl">
        {servicesData.map((service) => {
          const IconComponent = service.icon;

          return (
            <div
              key={service.id}
              className="flex flex-col gap-8 sm:gap-10 lg:gap-12 shadow-xl hover:shadow-2xl transition-all duration-200 px-6 sm:px-8 py-6 sm:py-8 rounded-2xl w-full max-w-sm"
            >
              <div className="flex flex-col gap-4 sm:gap-5 my-2 sm:my-4">
                <div className="flex items-start sm:items-center gap-3 flex-col sm:flex-row">
                  <span className="bg-sky-100 rounded-full p-3 flex-shrink-0">
                    <IconComponent className="text-sky-500 w-5 h-5 sm:w-6 sm:h-6" />
                  </span>
                  <h2 className="font-roboto font-semibold text-lg sm:text-xl lg:text-2xl text-gray-700">
                    {service.title}
                  </h2>
                </div>
                <div>
                  <p className="font-montserrat font-normal text-sm sm:text-base text-gray-700">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:gap-6">
                {service.services.map((subService, index) => (
                  <div key={index} className="flex flex-col gap-1 sm:gap-2">
                    <span className="flex gap-3 items-start">
                      <CircleCheck className="text-sky-500 w-5 h-5 mt-0.5 flex-shrink-0" />
                      <h3 className="font-roboto font-semibold text-base sm:text-lg lg:text-xl text-gray-700">
                        {subService.title}
                      </h3>
                    </span>
                    <span className="ml-8">
                      <p className="font-roboto text-gray-500 font-light text-sm sm:text-base">
                        {subService.description}
                      </p>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
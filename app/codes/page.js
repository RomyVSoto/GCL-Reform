import { 
  Cable, 
  Server, 
  ShieldCheck, 
  Zap, 
  Globe, 
  Wrench, 
  Cpu, 
  Award,
  Building,
  Hammer,
  HardHat,
  Thermometer,
  Network
} from "lucide-react";

export default function Codes() {
  const fiberOpticStandards = [
    {
      icon: ShieldCheck,
      title: "TIA/EIA-568",
      description: "Commercial building telecommunications cabling standard for structured wiring systems."
    },
    {
      icon: Zap,
      title: "NEC (NFPA 70)",
      description: "National electrical code governing safe electrical installations and fiber optic cabling requirements."
    },
    {
      icon: Globe,
      title: "ISO/IEC 11801",
      description: "International standard for information technology cabling for customer premises."
    },
    {
      icon: Wrench,
      title: "TIA/EIA-526",
      description: "Optical fiber cable test procedures for installation and field testing."
    },
    {
      icon: Cpu,
      title: "IEEE 802.3",
      description: "Ethernet standards for fiber optic network transmission and connectivity."
    },
    {
      icon: Award,
      title: "UL 1666",
      description: "Safety standard for cables used in air handling spaces and plenum applications."
    }
  ];

  const serverMaintenanceStandards = [
    {
      icon: Building,
      title: "NYCEC",
      description: "New York City electrical code for commercial building electrical systems and data centers."
    },
    {
      icon: Hammer,
      title: "ICBO",
      description: "Building code standards for commercial construction and electrical infrastructure."
    },
    {
      icon: HardHat,
      title: "OSHA",
      description: "Occupational safety and health standards for electrical work and server maintenance."
    },
    {
      icon: Zap,
      title: "NFPA 70E",
      description: "Electrical safety standards for workplace practices and arc flash protection."
    },
    {
      icon: Thermometer,
      title: "ASHRAE TC 9.9",
      description: "Environmental guidelines for data center cooling, humidity, and air quality control."
    },
    {
      icon: Network,
      title: "BICSI 002",
      description: "Data center design and implementation best practices for ICT infrastructure."
    }
  ];

  return (
    <div className="flex flex-col gap-10 md:gap-20 my-10 md:my-20 lg:my-30 mx-4 md:mx-8 lg:mx-40">
      <section className="flex flex-col gap-3 text-center max-w-2xl mx-auto px-4">
        <h2 className="font-roboto font-bold text-2xl md:text-3xl lg:text-4xl text-neutral-900">
          Codes and Standards
        </h2>
        <p className="font-montserrat font-extralight text-lg md:text-xl lg:text-2xl">
          We follow industry-leading standards in every fiber optic
          installation, server maintenance, and network service we provide
        </p>
      </section>
      
      <section className="flex flex-col xl:flex-row gap-10 xl:gap-30 mx-auto w-full max-w-7xl">
        <div className="space-y-6 flex-1">
          <div className="flex items-start sm:items-center gap-3">
            <span className="flex-shrink-0">
              <Cable className="text-sky-800 size-6 md:size-8" />
            </span>
            <h2 className="font-roboto font-bold text-xl md:text-2xl text-neutral-700">
              Fiber Optic Cable Standards
            </h2>
          </div>
          <div className="space-y-4 md:space-y-6">
            {fiberOpticStandards.map((standard, index) => {
              const IconComponent = standard.icon;
              return (
                <div key={index} className="flex p-3 md:p-4 gap-3 md:gap-4 border border-gray-300 rounded-xl shadow-xs hover:shadow-xl transition-all duration-200 max-w-full lg:max-w-lg items-start">
                  <span className="p-2 md:p-4 bg-sky-100 rounded-md flex-shrink-0">
                    <IconComponent className="text-sky-800 size-5 md:size-6" />
                  </span>
                  <span className="flex flex-col flex-1 min-w-0">
                    <h2 className="font-roboto font-semibold font-medium text-lg md:text-xl text-neutral-700">
                      {standard.title}
                    </h2>
                    <p className="font-montserrat font-base text-gray-700 text-sm md:text-base">
                      {standard.description}
                    </p>
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-6 flex-1">
          <div className="flex items-start sm:items-center gap-3">
            <span className="flex-shrink-0">
              <Server className="text-sky-800 size-6 md:size-8" />
            </span>
            <h2 className="font-roboto font-bold text-xl md:text-2xl text-neutral-700">
              Server Maintenance Standards
            </h2>
          </div>
          <div className="space-y-4 md:space-y-6">
            {serverMaintenanceStandards.map((standard, index) => {
              const IconComponent = standard.icon;
              return (
                <div key={index} className="flex p-3 md:p-4 gap-3 md:gap-4 border border-gray-300 rounded-xl shadow-xs hover:shadow-xl transition-all duration-200 max-w-full lg:max-w-lg items-start">
                  <span className="p-2 md:p-4 bg-sky-100 rounded-md flex-shrink-0">
                    <IconComponent className="text-sky-800 size-5 md:size-6" />
                  </span>
                  <span className="flex flex-col flex-1 min-w-0">
                    <h2 className="font-roboto font-semibold font-medium text-lg md:text-xl text-neutral-700">
                      {standard.title}
                    </h2>
                    <p className="font-montserrat font-base text-gray-700 text-sm md:text-base">
                      {standard.description}
                    </p>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
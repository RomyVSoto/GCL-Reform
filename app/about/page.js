import Image from "next/image";

export default function Services() {
  return (
    <div className="flex flex-col gap-10 md:gap-20 my-10 md:my-20 lg:my-30 mx-4 md:mx-8 lg:mx-40">
      {/* Hero Section */}
      <section className="flex flex-col gap-3 md:gap-4 text-center max-w-4xl mx-auto px-4">
        <h2 className="font-roboto font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-neutral-900 leading-tight">
          About Global Communications Link
        </h2>
        <p className="font-montserrat font-extralight text-base md:text-lg lg:text-xl xl:text-2xl text-neutral-600 max-w-3xl mx-auto">
          Pioneering the future of connectivity with reliable and innovative
          fiber optic and server solutions.
        </p>
      </section>

      {/* Main Content Section */}
      <section className="flex flex-col lg:flex-row gap-10 lg:gap-16 xl:gap-20 items-center">
        {/* Text Content */}
        <div className="flex flex-col gap-8 md:gap-10 w-full lg:w-1/2 xl:max-w-xl">
          <div className="flex flex-col gap-3">
            <h3 className="font-roboto font-semibold text-xl md:text-2xl lg:text-3xl text-neutral-700">
              Our Story
            </h3>
            <p className="font-montserrat font-light text-sm md:text-base lg:text-lg text-neutral-600 leading-relaxed">
              Since 2016, Global Communications Link has pioneered innovative
              solutions for high definition video extenders, switches and signal
              management. Our technology serves public, private and governmental
              organizations worldwide from our Bronx, New York headquarters.
            </p>
          </div>
          
          <div className="flex flex-col gap-3">
            <h3 className="font-roboto font-semibold text-xl md:text-2xl lg:text-3xl text-neutral-700">
              Our Mission
            </h3>
            <p className="font-montserrat font-light text-sm md:text-base lg:text-lg text-neutral-600 leading-relaxed">
              To empower businesses and individuals with innovative technology
              solutions that drive growth, efficiency, and positive change in
              the world.
            </p>
          </div>
          
          <div className="flex flex-col gap-3">
            <h3 className="font-roboto font-semibold text-xl md:text-2xl lg:text-3xl text-neutral-700">
              Our Vision
            </h3>
            <p className="font-montserrat font-light text-sm md:text-base lg:text-lg text-neutral-600 leading-relaxed">
              To be the global leader in transformative technology, shaping a
              future where innovation enhances every aspect of life and
              business.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 max-w-lg lg:max-w-none">
          <div className="relative w-full aspect-square lg:aspect-[4/5]">
            <Image
              src="/personal/about.jpg"
              fill
              className="object-cover rounded-2xl shadow-xl"
              alt="About Global Communications Link"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="flex flex-col gap-10 md:gap-16 lg:gap-20 text-center">
        <h2 className="font-roboto font-semibold text-2xl md:text-3xl lg:text-4xl text-neutral-900">
          Meet Our Team
        </h2>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 md:gap-12 lg:gap-16 xl:gap-20">
          {/* Team Member 1 */}
          <div className="flex flex-col gap-4 shadow-xl p-6 md:p-8 lg:px-12 xl:px-20 rounded-xl bg-white hover:shadow-2xl transition-shadow duration-300 max-w-xs w-full">
            <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto">
              <Image
                src="/personal/Manuel.png"
                fill
                className="rounded-full object-cover"
                alt="President"
              />
            </div>
            <h3 className="font-montserrat font-semibold text-lg md:text-xl text-neutral-800">
              Manuel Almonte
            </h3>
            <p className="font-thin text-base md:text-lg lg:text-xl text-neutral-600">
              President
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="flex flex-col gap-4 shadow-xl p-6 md:p-8 lg:px-12 xl:px-20 rounded-xl bg-white hover:shadow-2xl transition-shadow duration-300 max-w-xs w-full">
            <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto">
              <Image
                src="/personal/Dary.jpg"
                fill
                className="rounded-full object-cover"
                alt="CEO"
              />
            </div>
            <h3 className="font-montserrat font-semibold text-lg md:text-xl text-neutral-800">
              Dariel Soto
            </h3>
            <p className="font-thin text-base md:text-lg lg:text-xl text-neutral-600">
              CEO
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
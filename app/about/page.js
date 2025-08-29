import Image from "next/image";

export default function Services() {
  return (
    <div className="flex flex-col gap-48 my-30 mx-40">
      <secction className="flex flex-col gap-3 text-center max-w-2xl mx-auto">
        <h2 className="font-roboto font-semibold text-4xl text-neutral-900">
          About Global Communications Link
        </h2>
        <p className="font-montserrat font-extralight text-2xl">
          Pionnering the future of connectivity with reliable and innovative
          fiber optic and server solutions.
        </p>
      </secction>
      <secction className="flex mx-20 gap-20">
        <div className="flex flex-col gap-10 max-w-xl">
          <span className="flex flex-col gap-2">
            <h2 className="font-roboto font-semibold text-3xl text-neutral-700">Our Story</h2>
            <p className="font-montserrat font-light text-lg">
              Since 2016, Global Communications Link has pioneered innovative
              solutions for high definition video extenders, switches and signal
              management. Our technology serves public, private and governmental
              organizations worldwide from our Bronx, New York headquarters.
            </p>
          </span>
          <span className="flex flex-col gap-2">
            <h2 className="font-roboto font-semibold text-3xl text-neutral-700">Our Mission</h2>
            <p className="font-montserrat font-light text-lg">
              To empower businesses and individuals with innovative technology
              solutions that drive growth, efficiency, and positive change in
              the world.
            </p>
          </span>
          <span className="flex flex-col gap-2">
            <h2 className="font-roboto font-semibold text-3xl text-neutral-700">Our Vision</h2>
            <p className="font-montserrat font-light text-lg">
              To be the global leader in transformative technology, shaping a
              future where innovation enhances every aspect of life and
              business.
            </p>
          </span>
        </div>
        <div>
          <Image
            src="/personal/about.jpg"
            width={1000}
            height={1000}
            className="h-full w-full object-cover rounded-2xl shadow-xl"
          />
        </div>
      </secction>
      <secction className="flex flex-col gap-20 text-center">
        <h2 className="font-roboto font-semibold text-4xl text-neutral-900">Meet Our Team</h2>
        <div className="flex justify-center gap-70">
          <span className="flex flex-col gap-4 shadow-xl p-8 px-20 rounded-xl">
            <Image
              src="/personal/Manuel.png"
              width={100}
              height={150}
              className="w-50 h-50 rounded-full object-cover"
            />
            <h2 className="font-montserrat font-semibold text-xl ">
              Manuel Almonte
            </h2>
            <p className="font-thin text-xl">President</p>
          </span>
          <span className="flex flex-col gap-4 shadow-xl p-8 px-20 rounded-xl">
            <Image
              src="/personal/Dary.jpg"
              width={100}
              height={150}
              className="w-50 h-50 rounded-full object-cover"
            />
            <h2 className="font-montserrat font-semibold text-xl ">
              Dariel Soto
            </h2>
            <p className="font-thin text-xl">CEO</p>
          </span>
        </div>
      </secction>
    </div>
  );
}

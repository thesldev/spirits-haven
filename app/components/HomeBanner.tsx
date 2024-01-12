import Image from "next/image";

const HomeBanner = () => {
  return (
    <div className="relative mt-2">
      <div className="flex justify-evenly">
        <div className="relative h-[600px] w-full overflow-hidden">
          <Image
            src="https://media.danmurphys.com.au/dmo/e-commerce/foundation/jack-daniels-glass-bg-banner-desk.jpg"
            alt="Jack Daniels Banner"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;

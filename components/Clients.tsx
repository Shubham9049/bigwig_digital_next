"use client";

import { useEffect, useRef } from "react";
import "../src/app/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { usePathname } from "next/navigation";

const images = [
  "https://riverfront.vercel.app/assets/Logo%20for%20riverfront%20-CAIVvev0.png",
  "https://i1.sndcdn.com/avatars-zrGoOnkGJPMFqycp-NUkwhg-t1080x1080.jpg",
  "https://aylesforddubai.com/wp-content/uploads/2024/11/aylesford.svg",
  "https://www.shoutlo.com/assets/images/merchant_images/merchant-133212-5c65208474154.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/3/3e/Park_Inn_by_Radisson_logo.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs8ZV5K7FxPkLchCy1bSLTfp6aqptcTl8vGg&s",
  "https://searchlogovector.com/wp-content/uploads/2018/11/park-plaza-logo-vector.png",
  "https://companieslogo.com/img/orig/BIDU_BIG-fd4001c8.png?t=1720244491",
  "https://pngimg.com/d/skoda_PNG12322.png",
  "https://static.vecteezy.com/system/resources/previews/019/766/250/non_2x/bajaj-logo-bajaj-icon-transparent-free-png.png",
  "https://freelogopng.com/images/all_img/1680513237airtel-logo-png.png",
  "https://companieslogo.com/img/orig/DABUR.NS-f750fc64.png?t=1720244491",
  "https://cdn.freebiesupply.com/logos/thumbs/2x/cnn-international-logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/c/c7/Ford-Motor-Company-Logo.png",
  "https://brandlogos.net/wp-content/uploads/2014/11/barclays-logo_brandlogos.net_2xdee-512x512.png",
  "https://images.seeklogo.com/logo-png/30/1/itz-cash-logo-png_seeklogo-305185.png",
  "https://www.cablewirefair.com/wp-content/uploads/2024/08/99-electrical-world.png",
  "https://pngimg.com/d/bitcoin_PNG36.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/CARE_Logo_Orange.png/384px-CARE_Logo_Orange.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/GAIL.svg/2560px-GAIL.svg.png",
];

const Client = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Scroll to hash section if exists
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const sectionId = hash.replace("#", "");
      const section = document.getElementById(sectionId);
      if (section) {
        const offset = 120;
        const sectionTop =
          section.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: sectionTop, behavior: "smooth" });
      }
    }
  }, [pathname]);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      mirror: false,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);

  // Split images into chunks for mobile carousel
  const chunks = Array.from({ length: Math.ceil(images.length / 12) }, (_, i) =>
    images.slice(i * 12, i * 12 + 12)
  );

  // Auto scroll mobile carousel
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth
      ) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: container.clientWidth, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pb-6 w-11/12 mx-auto">
      <div className="px-4 pb-5 mx-auto">
        <h2 className="text-5xl font-bold text-white text-center my-12">
          Our Clients
        </h2>

        {/* Mobile Carousel */}
        <div
          ref={scrollRef}
          className="block lg:hidden overflow-x-auto scrollbar-hide"
        >
          <div className="flex snap-x snap-mandatory">
            {chunks.map((chunk, idx) => (
              <div
                key={idx}
                className="w-full flex-shrink-0 snap-start grid grid-cols-4 grid-rows-3 gap-4 px-2"
              >
                {chunk.map((img, i) => (
                  <div
                    key={i}
                    className="aspect-square flex items-center justify-center"
                    data-aos="zoom-in"
                  >
                    <img
                      src={img}
                      alt={`Client ${idx * 12 + i + 1}`}
                      className="w-4/5 object-contain"
                      draggable={false}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-10 gap-6">
          {images.slice(0, 30).map((img, index) => (
            <div
              key={index}
              className="aspect-square flex items-center justify-center"
              data-aos="zoom-in"
            >
              <img
                src={img}
                alt={`Client ${index + 1}`}
                className="w-4/5 object-contain"
                draggable={false}
              />
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="mt-4 flex justify-center">
          <a
            href="/clients"
            className="inline-block mt-4 bg-[#1752B4] text-white px-5 py-2.5 rounded-lg shadow-md hover:bg-blue-700 text-sm"
          >
            Show More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Client;

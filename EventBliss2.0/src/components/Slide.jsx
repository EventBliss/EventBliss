import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import { useEffect, useRef, useState } from "react";

export function Slide() {
  const imagenes = [
    "https://elolivar.es/olivar-content/uploads/2021/06/salones-para-eventos.png",
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGV2ZW50JTIwcGxhbm5pbmd8ZW58MHx8MHx8fDA%3D",
    "https://images.pexels.com/photos/313715/pexels-photo-313715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/2253831/pexels-photo-2253831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/6479590/pexels-photo-6479590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  ];

  const [scrollOffset, setScrollOffset] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-fixed" ref={containerRef}>
      <Swiper
        className="swiper-container h-[550px]"
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3200,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}>
        {imagenes.map((imagen, index) => (
          <SwiperSlide className="text-white relative" key={index}>
            <div
              className="absolute inset-0 bg-black z-20 w-full h-40vh opacity-60"
              style={{
                transform: `translateY(${scrollOffset * 0.4}px)`,
              }} />
            <img
              src={imagen}
              className="w-full h-full object-cover z-10"
              style={{
                transform: `translateY(${scrollOffset * 0.2}px)`,
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

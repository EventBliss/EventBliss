import { Link } from "react-router-dom";
import { useListCategory } from "../../components/api/category/get";
import { useListOrganizers } from "../../components/api/organizer/get";
import { DataBackend } from "../../components/api/DataBackend";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

export function User() {
  DataBackend()
  const { data: organizerData } = useListOrganizers();
  const { data: categoryData } = useListCategory();  

  return (
    <div className="bg-[#E6E5E4]">
      <div className="md:w-auto p-16 pl-10 bg-gray-800">
        <h2 className="text-5xl md:text-center w-full mt-6 font-bold text-white pl-10">
          Get to know our{" "}
          <span className="text-[#FD8B11]">Organizers</span>
        </h2>
      </div>
      {organizerData && categoryData && categoryData.map((category, index) => {
          const organizersForCategory = organizerData.filter(
            (organizer) => organizer.event_types.includes(category.id)
          );
          if (organizersForCategory.length === 0) {
            // No organizers for this category, skip rendering
            return null;
          }
          return (
            <div key={index}>
              <h2 className="text-2xl md:text-2xl lg:text-3xl w-full p-6 font-bold text-black">
                {category.name}
              </h2>
              <Swiper
                spaceBetween={10}
                slidesPerView={4}
                breakpoints={{
                  200: {
                    slidesPerView: 1,
                  },
                  400: {
                    slidesPerView: 1,
                  },
                  640: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  1024: {
                    slidesPerView: 4,
                  },
                }}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                modules={[Navigation]}
                className="pl-7"
              >
                {organizersForCategory.map((organizer, subIndex) => (
                  <SwiperSlide key={subIndex}>
                    <Link
                      to={`details/${organizer.id}`}
                      className="bg-white rounded-lg overflow-hidden group relative shadow-md"
                    >
                      <img
                        src={organizer.profile_photo}
                        className="w-full h-60 object-cover object-center mb-8"
                      />
                      <div className="absolute h-full w-full bg-black bg-opacity-50 -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-200 p-4 cursor-pointer">
                        <h3 className="text-xl text-[#FD8B11] font-semibold mb-2">
                          {organizer.name}
                        </h3>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
                <div className="swiper-button-next text-[#FD8B11]"></div>
                <div className="swiper-button-prev text-[#FD8B11]"></div>
              </Swiper>
            </div>
          );
        })}
    </div>
  );
}

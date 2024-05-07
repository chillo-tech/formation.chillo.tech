import { testimonialCards } from "@/data";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { DetailsCard } from "./DetailsCard";

const BigCarousel = () => {
  return (
    <div className="max-w-[98vw] overflow-hidden">
      <div className="w-[87%] overflow-x-hidden h-full mx-auto relative">
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          effect="coverflow"
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          grabCursor
          centeredSlides
          loop
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            scale: 0.8,
            slideShadows: false,
            modifier: 2.5,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="swiper_container_testimonials"
        >
          {testimonialCards.map((card, index) => {
            return (
              <SwiperSlide key={`testimonial-card-${index}`}>
                <DetailsCard {...card} />
              </SwiperSlide>
            );
          })}
          <div className="slider-controller">
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export { BigCarousel };

import { testimonialCards } from "@/data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { TestimonialCard } from "./Card";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

const TestimonialCarousel = () => {
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
          slidesPerView={3}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            scale: 0.8,
            slideShadows: false,
            modifier: 2.5,
          }}
          className="swiper_container_testimonials"
        >
          {testimonialCards.map((card, index) => {
            return (
              <SwiperSlide key={`testimonial-card-${index}`}>
                <TestimonialCard {...card} />
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

export { TestimonialCarousel };

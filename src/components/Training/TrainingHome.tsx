import { ApplicationContext } from "@/context";
import { testimonialCards } from "@/data";
import { ITraining } from "@/types";
import { capitalize } from "@/utils";
import { getRateLabel } from "@/utils/getRateLabel";
import { useContext, useEffect, useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ListCard, SmallMessageCard, TrainingHero } from "..";
import { Accordion, BreadCrumbs, YellowRate } from "../commons";

import { FaChevronLeft, FaChevronRight, FaPlay } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
const TrainingHome = ({
  trainings,
  training,
}: {
  trainings: ITraining[];
  training: ITraining;
}) => {
  const { dispatch } = useContext(ApplicationContext);
  const [swiper, setSwiper] = useState<any>();
  useEffect(() => {
    dispatch({
      type: "SET_TRAININGS",
      payload: trainings,
    });
    dispatch({ type: "SET_ACTUAL_TRAINING", payload: training });
  }, []);

  return (
    <div>
      <section className="container mx-auto">
        <header>
          <BreadCrumbs
            links={[
              { label: "Tous les cours", path: "/trainings" },
              { label: training.title },
            ]}
          />
        </header>
        <div className="flex flex-col lg:flex-row gap-6 justify-between">
          <main className="max-w-[98vw] lg:max-w-[600px] xl:max-w-[800px] 2xl:max-w-[1000px] lg:pr-[60px] lg:border-r lg:border-r-[#80808044]">
            <TrainingHero />
            <hr className="my-8 border-[#80808044]" />
            <h4 className="text-heading !font-heading fontF-heading text-2xl mt-4">
              Description
            </h4>
            <p
              dangerouslySetInnerHTML={{ __html: training.description }}
              className="text-justify"
            />
            <hr className="my-8 border-[#80808044]" />
            <h4 className="text-center sm:text-justify text-heading !font-heading fontF-heading text-2xl mt-4">
              Ce que disent nos étudiants{" "}
            </h4>
            <div className="flex flex-col sm:flex-row gap-5 items-center my-5">
              <div className="flex flex-col items-center gap-2">
                <p className="text-2xl">
                  {capitalize(getRateLabel(training.rate))}
                </p>
                <YellowRate
                  rate={training.rate}
                  props={{ size: 35, color: "yellowgreen" }}
                />
                <p>
                  Basé sur{" "}
                  <span className="border-b border-b-heading">
                    {training.reviews} votes
                  </span>
                </p>
              </div>
              <div
                className="hidden sm:block"
                style={{
                  maxWidth: "calc(100% - 220px)",
                }}
              >
                <Swiper
                  modules={[Navigation]}
                  pagination={{ clickable: true }}
                  grabCursor
                  centeredSlides
                  slidesPerView={1}
                  loop
                  className="swiper_container"
                  onSwiper={(swiper) => {
                    setSwiper(swiper);
                  }}
                  // spaceBetween={1}
                >
                  {testimonialCards.map((card, index) => {
                    return (
                      <SwiperSlide key={`testimonial-card-${index}`}>
                        <SmallMessageCard
                          date="Septembre 19"
                          description={card.message}
                          name={card.name}
                          rate={card.rate}
                          title="Très bon cours"
                        />
                      </SwiperSlide>
                    );
                  })}
                  <div className="flex absolute top-0 items-center justify-between left-0 h-full z-[99] ">
                    <div
                      className="button-prev bg-white p-2 border-2 rounded-[50%]"
                      onClick={() => {
                        if (swiper) {
                          swiper.slidePrev();
                        }
                      }}
                    >
                      <FaChevronLeft />
                    </div>
                  </div>
                  <div className="flex absolute top-0 items-center justify-between right-0 h-full z-[99] ">
                    <div
                      className="button-next bg-white p-2 border-2 rounded-[50%]"
                      onClick={() => {
                        if (swiper) {
                          swiper.slideNext();
                        }
                      }}
                    >
                      <FaChevronRight />
                    </div>
                  </div>
                </Swiper>
              </div>
            </div>
            <hr className="my-8 border-[#80808044]" />
            <Accordion />
          </main>
          <aside className="lg:sticky top-[120px] h-fit">
            <div>
              <div className="relative">
                <video
                  className="rounded-xl"
                  poster={
                    training.promotionVideo?.thumbnail[0]?.image_id.link ||
                    training.image?.link
                  }
                >
                  <source src={training.promotionVideo?.link}></source>
                </video>
                <div className="p-5 bg-[#00000075] backdrop-blur-sm rounded-[50%] absolute w-fit h-fit top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                  <FaPlay color={"white"} size={27} />
                </div>
              </div>
              <div className="my-4 space-y-2">
                <p className="text-heading !font-heading fontF-heading text-2xl ">
                  Accédez à tous les cours premium de Chillo tech.
                </p>
                <p>
                  Vous aurez accès à plus de 75 cours premium, à plus de 500
                  laboratoires pratiques et à plus de 65 terrains de jeux.
                </p>
                <button className="rounded-[25px] py-2 px-4 bg-gradient-to-r from-blue-500 to-violet-400 text-white w-full">
                  Abonnez-vous maintenant
                </button>
              </div>
            </div>
            <hr className="my-8 border-[#80808044]" />
            <div>
              <ListCard />
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export { TrainingHome };

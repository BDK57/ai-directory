import React from "react";
import Slider from "../../../components/common/Slider";
import { SwiperSlide } from "swiper/react";
import CardBox from "../../../components/common/card-box";
import SliderOne from "../../../assets/slider-1.webp";
import sliderBg from "../../../assets/detail-page/bg-slider-section.webp";
const SliderSection = ({ data, title, description, className }) => {

  const cardSlides = [
    {
      name: "Chat GPT",
      category: "Writing",
      rating: 4.7,
      description:
        "It provides many special services in the field of image generation through artificial intelligence, such as converting text into an image.",
      learnMoreLink: "#",
      image: SliderOne,
    },
    {
      name: "Copy.ai",
      category: "Writing",
      rating: 4.7,
      description:
        "It provides many special services in the field of image generation through artificial intelligence, such as converting text into an image.",
      learnMoreLink: "#",
      image: SliderOne,
    },
    {
      name: "Gemini.ai",
      category: "Writing",
      rating: 4.7,
      description:
        "It provides many special services in the field of image generation through artificial intelligence, such as converting text into an image.",
      learnMoreLink: "#",
      image: SliderOne,
    },
    {
      name: "Gemini.ai",
      category: "Writing",
      rating: 4.7,
      description:
        "It provides many special services in the field of image generation through artificial intelligence, such as converting text into an image.",
      learnMoreLink: "#",
      image: SliderOne,
    },
  ];
  return (
    <div
      className={` bg-primary-black bg-fade-gradient relative z-[1]`}
    >
      <div className={`container border-x border-x-primary-white-20  pt-12 ${className}`}>
        <div className="content-bx flex flex-col gap-y-8 items-center">
          <h2 className="sub-heading ">{title}</h2>
          <p className="default-paragraph ">{description}</p>
        </div>
        <Slider
          slides={cardSlides}
         slidesPerView={3.1}
          spaceBetween={40}
          speed={1000}
          autoplay={{
            enabled: false,
            delay: 1000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}

          breakpoints={{
            320: {
              slidesPerView: 1.2,
              spaceBetween: 20,

            },
            640: {
              slidesPerView: 1.5,
              spaceBetween: 20,

            },
            768: {
              slidesPerView: 2.2,
              spaceBetween: 30,
              centeredSlides:false
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 30,
              centeredSlides:false
            },
            1280: {
              slidesPerView: 3.1,
              spaceBetween: 40
            }
          }}
          className="w-full lg:w-[89%] mx-auto mt-12 pb-12"
        >
          {data?.map((tool, index) => (
            <SwiperSlide key={index}>
              <CardBox data={tool} />
            </SwiperSlide>
          ))}
        </Slider>
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-[-1]">
        <img src={sliderBg} alt="play" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default SliderSection;

import React from "react";
import Slider from "./common/Slider";
import { SwiperSlide } from "swiper/react";
import CardBox from "./common/card-box";
import SliderOne from "../assets/slider-1.webp";
const FeatureSection = () => {
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
    <div className=" bg-primary-black bg-fade-gradient ">
      <div className="container border-x border-x-primary-white-20  pt-12 pb-16">
        <div className="content-bx flex flex-col gap-y-8 items-center">
          <h2 className="sub-heading ">Featured Tools Section</h2>
          <p className="default-paragraph ">
            Handpicked tools that are trending and highly rated by our
            community.
          </p>
        </div>
        <Slider
          slides={cardSlides}
          slidesPerView={3}
          spaceBetween={40}
          speed={1000}
          autoplay={{
            enabled: false,
            delay: 1000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          className="w-[89%] mx-auto mt-12 pb-12"
        >
          {cardSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <CardBox img={slide.image} />
            </SwiperSlide>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeatureSection;

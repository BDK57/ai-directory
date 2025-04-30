import React, { useEffect, useState } from "react";
import heroBg from "../../../assets/detail-page/bg-inner.webp";
import shadeThree from "../../../assets/shade-bottom.svg";

import { Button } from "@heroui/button";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
const HeroSection = ({data:tools}) => {

  const CameraIcon = ({
    fill = "currentColor",
    size,
    height,
    width,
    ...props
  }) => {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="16" cy="16" r="16" fill="#1C212A" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20.4092 10.8039C20.5718 10.8072 20.7265 10.8748 20.8392 10.9921C20.9519 11.1093 21.0135 11.2665 21.0104 11.4291L20.8749 18.3709C20.8762 18.4533 20.8609 18.5351 20.8299 18.6115C20.7989 18.6879 20.7528 18.7572 20.6944 18.8154C20.636 18.8735 20.5665 18.9193 20.4901 18.9501C20.4136 18.9808 20.3317 18.9958 20.2493 18.9942C20.1669 18.9926 20.0857 18.9744 20.0105 18.9407C19.9352 18.907 19.8676 18.8585 19.8115 18.7981C19.7554 18.7377 19.7121 18.6666 19.6841 18.5891C19.6561 18.5116 19.644 18.4293 19.6485 18.347L19.7551 12.886L11.3861 20.9346C11.2688 21.0474 11.1115 21.109 10.9487 21.1058C10.786 21.1026 10.6312 21.0349 10.5184 20.9176C10.4056 20.8003 10.344 20.643 10.3471 20.4802C10.3503 20.3175 10.418 20.1627 10.5353 20.0499L18.9043 12.0014L13.4434 11.8948C13.361 11.8961 13.2792 11.8808 13.2028 11.8497C13.1265 11.8187 13.0571 11.7727 12.999 11.7143C12.9408 11.6559 12.895 11.5864 12.8643 11.5099C12.8335 11.4334 12.8185 11.3516 12.8201 11.2692C12.8218 11.1868 12.8399 11.1055 12.8736 11.0303C12.9073 10.9551 12.9558 10.8874 13.0162 10.8314C13.0766 10.7753 13.1477 10.732 13.2252 10.704C13.3027 10.676 13.385 10.6639 13.4673 10.6684L20.4092 10.8039Z"
          fill="white"
        />
      </svg>
    );
  };
  return (
    <>
      <section id="hero" className="border-t border-t-primary-white-20 ">
        <div className="flex flex-row  gap-y-8 justify-start items-start text-white w-full   mx-auto container relative z-30 border-x border-x-primary-white-20 h-[61.5vh] min-h[586px]">
          <div className="flex w-full h-full  flex-col justify-center items-start text-white w-4/5">
            <h1 className="font-clash-display font-semibold  text-start text-4xl md:text-5xl lg:text-5xl xl:text-6xl  -tracking-[3%] leading-tight  w-full xl:w-2/4 2xl:w-11/12">
              About
            </h1>
            <h2 className="font-clash-display font-semibold  text-start text-4xl md:text-5xl lg:text-5xl xl:text-[80px]  -tracking-[3%] !leading-[100px]  w-full text-primary-yellow">
              {tools?.data?.aitool?.name}
            </h2>
            <p className="w-full xl:w-[50%]  font-[400] text-start text-sm xl:text-base  font-montserrat leading-7 tracking-wide text-primary-white-50 mt-7">
            {tools?.data?.aitool?.introductory_des}
            </p>
            <div className="flex w-full gap-x-3 mt-[22px] flex-wrap lg:flex-nowrap gap-y-4 lg:gap-y-0">
              {tools?.data?.aitool?.categories?.map((category) => (
                <p key={category} className="bg-pills-color rounded-full px-3 py-2 font-montserrat text-xs flex items-center justify-center h-[30px] ">
                {category?.name}
              </p>
              ))}

            </div>

            <Button
              className="text-primary-white font-montserrat py-7 mt-5"
              variant="bordered"
              size="lg"
              radius="sm"
              endContent={<CameraIcon />}
            >
              Request Modifications
            </Button>
          </div>
        </div>
        <img
          id="hero-video"
          src={`${import.meta.env.VITE_SITE_URL}${tools?.data?.aitool?.bg_image}`}
          className="w-screen h-full absolute top-0 right-0 -z-[1] object-cover"
        />

        <img
          src={shadeThree}
          alt=""
          className="absolute -bottom-1/2 left-1/2 -translate-x-1/2  -z-[2]"
        />
      </section>
    </>
  );
};

export default HeroSection;

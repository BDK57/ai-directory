import React from "react";
import playIcon from "../../../assets/detail-page/play.webp";

const VideoSection = ({title, description, image}) => {
  return (
    <div className=" bg-primary-black bg-fade-gradient ">
      <div className="container border-x border-x-primary-white-20  pt-12 pb-16">
        <div className="content-bx flex flex-col gap-y-8 items-center">
          <h2 className="sub-heading ">{title}</h2>
          <p className="default-paragraph w-[52.5%] text-center">
          {description}
          </p>
          <div className="img-bx relative">
          <img src={image} alt="thumbnail" />
          <div className="absolute top-0 left-0 w-full h-full bg-primary-black/50 flex items-center justify-center">
            <div className="flex items-center justify-center">
              <img src={playIcon} alt="play" />
            </div>
          </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default VideoSection;

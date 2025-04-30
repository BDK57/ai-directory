import React from "react";
import taskOne from "../../../assets/detail-page/task-1.webp";
import taskTwo from "../../../assets/detail-page/task-2.webp";
import taskThree from "../../../assets/detail-page/task-3.webp";
import taskFour from "../../../assets/detail-page/task-4.webp";
const UsesSection = ({ data: tools }) => {
  return (
    <div className=" bg-primary-black bg-fade-gradient ">
      <div className="container border-x border-x-primary-white-20  pt-12 pb-16">
        <div className="content-bx flex flex-col gap-y-8 items-center justify-center">
          <h2 className="sub-heading">Uses</h2>
          <div className="flex w-full gap-x-[72px] justify-center flex-wrap lg:flex-nowrap gap-y-8 lg:gap-y-0">
            <div className="flex flex-col gap-y-2 justify-center items-center">
              <img
                src={taskOne}
                alt=""
                className="max-w-[120.54px]  min-h-[135px] h-[135px]"
              />
              <p className="text-primary-white-50 text-sm">Automate tasks</p>
            </div>
            <div className="flex flex-col gap-y-2 justify-center items-center">
              <img
                src={taskTwo}
                alt=""
                className="max-w-[228.54px]  min-h-[135px] h-[135px]"
              />
              <p className="text-primary-white-50 text-sm">
                Project organization
              </p>
            </div>
            <div className="flex flex-col gap-y-2 justify-center items-center">
              <img
                src={taskThree}
                alt=""
                className="max-w-[150.54px]  min-h-[135px] h-[135px]"
              />
              <p className="text-primary-white-50 text-sm">Create summaries</p>
            </div>
            <div className="flex flex-col gap-y-2 justify-center items-center">
              <img
                src={taskFour}
                alt=""
                className="max-w-[150.54px]  min-h-[135px] h-[135px]"
              />
              <p className="text-primary-white-50 text-sm">
                Data storage and analysis
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsesSection;

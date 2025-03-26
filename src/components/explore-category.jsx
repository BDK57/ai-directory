import React from "react";
import BaseTab from "./common/base-tab";
import CardBox from "./common/card-box";
import PhotoIcon from "../assets/edit-icon.svg";

import SliderOne from "../assets/slider-1.webp";
import SliderTwo from "../assets/slider-2.webp";
import SliderThree from "../assets/slider-3.webp";
import shadeOne from "../assets/explore-shade-one.svg";
import shadeTwo from "../assets/explore-shade-two.svg";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./common/Loader";
const ExploreCategory = () => {
  // const tabItems = [
  //   {
  //     id: "1",
  //     title: "Photos",
  //     content: (
  //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
  //         <CardBox img={SliderOne} />
  //         <CardBox img={SliderOne} />
  //         <CardBox img={SliderOne} />
  //         <CardBox img={SliderOne} />
  //         <CardBox img={SliderOne} />
  //         <CardBox img={SliderOne} />
  //         <CardBox img={SliderOne} />
  //         <CardBox img={SliderOne} />
  //         <CardBox img={SliderOne} />

  //         <CardBox img={SliderOne} />
  //         <CardBox img={SliderOne} />
  //         <CardBox img={SliderOne} />
  //       </div>
  //     ),
  //   },
  //   {
  //     id: "2",
  //     title: "Music",
  //     content: (
  //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
  //         <CardBox img={SliderTwo} />
  //         <CardBox img={SliderTwo} />
  //         <CardBox img={SliderTwo} />
  //         <CardBox img={SliderTwo} />
  //         <CardBox img={SliderTwo} />
  //         <CardBox img={SliderTwo} />
  //         <CardBox img={SliderTwo} />
  //         <CardBox img={SliderThree} />
  //         <CardBox img={SliderThree} />

  //         <CardBox img={SliderThree} />
  //         <CardBox img={SliderThree} />
  //         <CardBox img={SliderThree} />
  //       </div>
  //     ),
  //   },

  // ];
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchTools = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://admin.the-expert.ai/api/categories"
        );
        setCategories(response.data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch tools data");
        console.error("Error fetching tools:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTools();
  }, []);

  if (loading) {
    return <Loader/>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Basic usage

  return (
    <div className=" bg-primary-black relative z-[1]">
      <div className="container border-x border-x-primary-white-20  py-12 pb-64 ">
        <div className="content-bx flex flex-col gap-y-8 items-center ">
          <h2 className="sub-heading ">Explore by Category</h2>
          <p className="default-paragraph ">
            Find the right tool for your specific needs.
          </p>
        </div>

        <BaseTab
          items={categories?.data}
          variant="light"
          color="primary"
          radius="lg"
          size="lg"
          classNames={{
            cursor: "bg-black",
            tab: "data-[selected=true]:bg-primary-black data-[selected=true]:text-primary-white data-[selected=true]:shadow-[0px_14px_29px_rgba(151,71,255,0.2)] transition-all my-9 mx-3 border border-primary-white-30 rounded-[10px]",
            tabList: "gap-0 ",
          }}
          className={"w-[89%] mx-auto"}
          onSelectionChange={(key) => console.log("Selected:", key)}
        />
         <img
          src={shadeOne}
          alt=""
          className="absolute bottom-0 left-0 -z-[2] max-h-[972px]"
        />
        <img
          src={shadeTwo}
          alt=""
          className="absolute bottom-0 right-0 -z-[2] max-h-[972px]"
        />
      </div>
    </div>
  );
};

export default ExploreCategory;

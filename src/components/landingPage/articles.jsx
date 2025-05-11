import React from "react";
import Button from "../button/largeButton";
import FeaturedArticle from "../../components/landingPage/featureArticles.jsx";
import ArticleCard from "../../components/landingPage/articleCard.jsx";
import CardImage from '../../assets/cardImage1.png'

const categories = [
  "Entertainment",
  "Travel",
  "Search",
  "Marketing",
  "Health",
  "Artificial Intelligence",
  "Programming",
  "Writing",
];
const articles = [
    {
      image: CardImage,
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet consectetur. Id eu ipsum urna sed consectetur aliquam scelerisque. Aliquam mauris ullamcorper sed amet curabitur ........",
    },
    {
      image: CardImage,
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet consectetur. Id eu ipsum urnased consectetur aliquam scelerisque. Aliquam mauris ullamcorper sed amet curabitur ........",
    },
    {
      image: CardImage,
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet consectetur. Id eu ipsum urna sed consectetur aliquam scelerisque. Aliquam mauris ullamcorper sed amet curabitur ........",
    },
  ];

const Articles = () => {
  return (
    <section className=" bg-primary-black text-white  h-full  relative">
      <div className="container flex flex-col items-center text-center border-x border-x-primary-white-20 py-12">
        <div className="absolute w-[54vw] h-[610px] left-[-219px] -bottom-10 bg-[#4A4588] opacity-60 blur-[107px] backdrop-blur-[22px]"></div>
        <div className="flex justify-between flex-col lg:flex-row items-start lg:items-center w-full z-20" >
      <div className="  text-left">
        <h2 className="md:sub-heading sub-heading-sm">
          <span className="">Your</span>directory.ai/
          <span className="text-white">Articles</span>
        </h2>
        <p className="default-paragraph mt-4  max-w-5xl">
          Lorem ipsum dolor sit amet consectetur. Id eu ipsum urna sed consectetur aliquam
          scelerisque. Aliquam mauris ullamcorper sed amet curabitur bibendum eu phasellus
          ullamcorper. Egestas feugiat malesuada ultricies ac consectetur.
        </p>
      </div>

        <Button text="Explore More" />
        </div>
      {/* Category Tags */}
      <div className="mt-8 flex flex-wrap gap-6 lg:gap-0 lg:justify-between w-full z-20 ">
        {categories.map((category, index) => (
          <div
            key={index}
            className="px-6 py-2 bg-[#4A4588] text-white rounded-lg font-medium  font-montserrat text-base lg:text-lg"
          >
            {category}
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-8 mt-8  text-white w-full pb-[235px]">
      {/* Left side - Featured Article */}
      <div className="flex-1">
        <FeaturedArticle />
      </div>

      {/* Right side - List of Articles */}
      <div className="flex-1 flex flex-col gap-6  ">
        {articles.map((article, index) => (
          <ArticleCard key={index} {...article} />
        ))}
      </div>
    </div>
    </div>
    </section>
  );
};

export default Articles;

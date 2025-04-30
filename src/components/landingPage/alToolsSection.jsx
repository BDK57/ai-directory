import OpenAiLogo from "../../assets/aitools/openai.png";
import MidJourney from "../../assets/aitools/midjourney.png";
import MurfAi from "../../assets/aitools/murf-ai_logo.png";
import Jasper from "../../assets/aitools/jasperlogo.png";
import Adobe from "../../assets/aitools/adobe-firefly-logo-png_seeklogo-525287.png";
import AvatarImage from "../../assets/avatar.png";
import OpenAi from "../../assets/openai.png";
import communityImage from "../../assets/communityimage.png";
import MidJourney1 from "../../assets/aitools/image.svg";
import MidJourney2 from "../../assets/aitools/image1.svg";
import MidJourney3 from "../../assets/aitools/image3.svg";
import MidJourney4 from "../../assets/aitools/image4.svg";
import EntertainmentIcon from "../../assets/icons/Entairtainment.svg";
import WritingIcon from "../../assets/icons/fluent-emoji_writing-hand.svg";
import ProgrammingIcon from "../../assets/icons/programing.svg";
import SearchIcon from "../../assets/icons/Search.svg";
import StarIcon from "../../assets/icons/star.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEffect, useRef, useState } from "react";
import CustomButton from "../button/button";
import Button from "../button/largeButton";
import { Avatar, AvatarGroup } from "@heroui/avatar";
import { useTranslation } from "react-i18next";
import CustomButtonWithIcon from "../button/largeButton";
import { useNavigate } from "react-router-dom";
import BaseTab from "../common/base-tab";

const tabs = ["Trending", "Top Discussions", "Latest"];
const data = {
  Trending: [
    {
      image: MidJourney1,
      title: "Midjourney AI image generator",
      rating: "4.7 Rating",
      description:
        "Lorem ipsum dolor sit amet consectetur. Id eu ipsum urna sed consectetur aliquam scelerisque.",
      users: ["user1.png", "user2.png"],
    },
    {
      image: MidJourney4,
      title: "Microsoft Copilot",
      rating: "4.7 Rating",
      description:
        "Lorem ipsum dolor sit amet consectetur. Id eu ipsum urna sed consectetur aliquam scelerisque.",
      users: ["user1.png", "user2.png"],
    },
    {
      image: MidJourney2,
      title: "Microsoft Copilot",
      rating: "4.7 Rating",
      description:
        "Lorem ipsum dolor sit amet consectetur. Id eu ipsum urna sed consectetur aliquam scelerisque.",
      users: ["user1.png", "user2.png"],
    },
    {
      image: MidJourney3,
      title: "Microsoft Copilot",
      rating: "4.7 Rating",
      description:
        "Lorem ipsum dolor sit amet consectetur. Id eu ipsum urna sed consectetur aliquam scelerisque.",
      users: ["user1.png", "user2.png"],
    },
  ],
  "Top Discussions": [
    {
      image: MidJourney1,
      title: "Gemini AI",
      rating: "4.7 Rating",
      description:
        "Lorem ipsum dolor sit amet consectetur. Id eu ipsum urna sed consectetur aliquam scelerisque.",
      users: ["user1.png", "user2.png"],
    },
    {
      image: MidJourney2,
      title: "Grammarly",
      rating: "4.7 Rating",
      description:
        "Lorem ipsum dolor sit amet consectetur. Id eu ipsum urna sed consectetur aliquam scelerisque.",
      users: ["user1.png", "user2.png"],
    },
  ],
  Latest: [
    {
      image: MidJourney3,
      title: "ChatGPT",
      rating: "4.7 Rating",
      description:
        "Lorem ipsum dolor sit amet consectetur. Id eu ipsum urna sed consectetur aliquam scelerisque.",
      users: ["user1.png", "user2.png"],
    },
    {
      image: MidJourney4,
      title: "Copy.ai",
      rating: "4.7 Rating",
      description:
        "Lorem ipsum dolor sit amet consectetur. Id eu ipsum urna sed consectetur aliquam scelerisque.",
      users: ["user1.png", "user2.png"],
    },
  ],
};

const menuItems = [
  "ENTERTAINMENT",
  "TRAVEL",
  "WRITING",
  "SEARCH",
  "PROGRAMMING",
];

// logos section ai
const AiLogos = ({ logos }) => {
  return (
    <div className="flex justify-between w-full items-center gap-6 mt-8 opacity-80 z-20 overflow-auto">
      {logos.map((logo, index) => (
        <img
          key={index}
          src={logo.src}
          alt={logo.alt}
          className=" min-w-[147.33px] object-contain"
        />
      ))}
    </div>
  );
};

// shades

const Shades = () => {
  return (
    <>
      <div className="absolute w-full h-auto lg:w-[498px] lg:h-[200px] left-1/2 -translate-x-1/2 top-0 bg-[#4A4588] blur-[137px] rounded-full"></div>
      <div className="absolute w-full h-auto lg:w-[710px] lg:h-[60vh] left-[-219px] bottom-0 bg-[#4A4588] opacity-60 blur-[107px] backdrop-blur-[22px] z-10"></div>
    </>
  );
};
// swiper cards


const cateogories = [
        {
            "id": 1,
            "name": "Writing",
            "name_ar": "كتابة",
            "slug": "writing",
            "aitools": [
                {
                    "id": 1,
                    "name": "CHAT GPT",
                    "name_ar": "أداة الذكاء الاصطناعي 1",
                    "description": "This is a sample AI tool.",
                    "description_ar": "هذه أداة ذكاء اصطناعي نموذجية.",
                    "image": "documents/ai_tools/1.png",
                    "bg_image": "documents/ai_tools/bg_img.png",
                    "introductory_link": "https://example.com/tool1",
                    "introductory_des": "Introductory description for AI Tool 1.",
                    "introductory_des_ar": "وصف تمهيدي لأداة الذكاء الاصطناعي 1.",
                    "educational_link": "https://example.com/tool1/education",
                    "educational_des": "Educational description for AI Tool 1.",
                    "educational_des_ar": "وصف تعليمي لأداة الذكاء الاصطناعي 1.",
                    "is_featured": 1,
                    "status": 1,
                    "created_at": "2025-03-22T21:22:29.000000Z",
                    "updated_at": "2025-03-22T21:22:29.000000Z",
                    "pivot": {
                        "category_id": 1,
                        "aitool_id": 1
                    }
                },
                {
                    "id": 2,
                    "name": "Copy.ai",
                    "name_ar": "أداة الذكاء الاصطناعي 2",
                    "description": "This is another sample AI tool.",
                    "description_ar": "هذه أداة ذكاء اصطناعي نموذجية أخرى.",
                    "image": "documents/ai_tools/2.png",
                    "bg_image": "documents/ai_tools/bg_img.png",
                    "introductory_link": "https://example.com/tool2",
                    "introductory_des": "Introductory description for AI Tool 2.",
                    "introductory_des_ar": "وصف تمهيدي لأداة الذكاء الاصطناعي 2.",
                    "educational_link": "https://example.com/tool2/education",
                    "educational_des": "Educational description for AI Tool 2.",
                    "educational_des_ar": "وصف تعليمي لأداة الذكاء الاصطناعي 2.",
                    "is_featured": 1,
                    "status": 1,
                    "created_at": "2025-03-22T21:22:29.000000Z",
                    "updated_at": "2025-03-22T21:22:29.000000Z",
                    "pivot": {
                        "category_id": 1,
                        "aitool_id": 2
                    }
                },
                {
                    "id": 3,
                    "name": "Gemini",
                    "name_ar": "أداة الذكاء الاصطناعي 3",
                    "description": "This is another sample AI tool.",
                    "description_ar": "هذه أداة ذكاء اصطناعي نموذجية أخرى.",
                    "image": "documents/ai_tools/3.png",
                    "bg_image": "documents/ai_tools/bg_img.png",
                    "introductory_link": "https://example.com/tool2",
                    "introductory_des": "Introductory description for AI Tool 2.",
                    "introductory_des_ar": "وصف تمهيدي لأداة الذكاء الاصطناعي 2.",
                    "educational_link": "https://example.com/tool2/education",
                    "educational_des": "Educational description for AI Tool 2.",
                    "educational_des_ar": "وصف تعليمي لأداة الذكاء الاصطناعي 2.",
                    "is_featured": 1,
                    "status": 1,
                    "created_at": "2025-03-22T21:22:29.000000Z",
                    "updated_at": "2025-03-22T21:22:29.000000Z",
                    "pivot": {
                        "category_id": 1,
                        "aitool_id": 3
                    }
                }
            ]
        },
        {
            "id": 2,
            "name": "Traveling",
            "name_ar": "سفر",
            "slug": "traveling",
            "aitools": [
                {
                    "id": 2,
                    "name": "Copy.ai",
                    "name_ar": "أداة الذكاء الاصطناعي 2",
                    "description": "This is another sample AI tool.",
                    "description_ar": "هذه أداة ذكاء اصطناعي نموذجية أخرى.",
                    "image": "documents/ai_tools/2.png",
                    "bg_image": "documents/ai_tools/bg_img.png",
                    "introductory_link": "https://example.com/tool2",
                    "introductory_des": "Introductory description for AI Tool 2.",
                    "introductory_des_ar": "وصف تمهيدي لأداة الذكاء الاصطناعي 2.",
                    "educational_link": "https://example.com/tool2/education",
                    "educational_des": "Educational description for AI Tool 2.",
                    "educational_des_ar": "وصف تعليمي لأداة الذكاء الاصطناعي 2.",
                    "is_featured": 1,
                    "status": 1,
                    "created_at": "2025-03-22T21:22:29.000000Z",
                    "updated_at": "2025-03-22T21:22:29.000000Z",
                    "pivot": {
                        "category_id": 2,
                        "aitool_id": 2
                    }
                },
                {
                    "id": 3,
                    "name": "Gemini",
                    "name_ar": "أداة الذكاء الاصطناعي 3",
                    "description": "This is another sample AI tool.",
                    "description_ar": "هذه أداة ذكاء اصطناعي نموذجية أخرى.",
                    "image": "documents/ai_tools/3.png",
                    "bg_image": "documents/ai_tools/bg_img.png",
                    "introductory_link": "https://example.com/tool2",
                    "introductory_des": "Introductory description for AI Tool 2.",
                    "introductory_des_ar": "وصف تمهيدي لأداة الذكاء الاصطناعي 2.",
                    "educational_link": "https://example.com/tool2/education",
                    "educational_des": "Educational description for AI Tool 2.",
                    "educational_des_ar": "وصف تعليمي لأداة الذكاء الاصطناعي 2.",
                    "is_featured": 1,
                    "status": 1,
                    "created_at": "2025-03-22T21:22:29.000000Z",
                    "updated_at": "2025-03-22T21:22:29.000000Z",
                    "pivot": {
                        "category_id": 2,
                        "aitool_id": 3
                    }
                }
            ]
        },
        {
            "id": 3,
            "name": "Search",
            "name_ar": "بحث",
            "slug": "search",
            "aitools": [
                {
                    "id": 1,
                    "name": "CHAT GPT",
                    "name_ar": "أداة الذكاء الاصطناعي 1",
                    "description": "This is a sample AI tool.",
                    "description_ar": "هذه أداة ذكاء اصطناعي نموذجية.",
                    "image": "documents/ai_tools/1.png",
                    "bg_image": "documents/ai_tools/bg_img.png",
                    "introductory_link": "https://example.com/tool1",
                    "introductory_des": "Introductory description for AI Tool 1.",
                    "introductory_des_ar": "وصف تمهيدي لأداة الذكاء الاصطناعي 1.",
                    "educational_link": "https://example.com/tool1/education",
                    "educational_des": "Educational description for AI Tool 1.",
                    "educational_des_ar": "وصف تعليمي لأداة الذكاء الاصطناعي 1.",
                    "is_featured": 1,
                    "status": 1,
                    "created_at": "2025-03-22T21:22:29.000000Z",
                    "updated_at": "2025-03-22T21:22:29.000000Z",
                    "pivot": {
                        "category_id": 3,
                        "aitool_id": 1
                    }
                },
                {
                    "id": 2,
                    "name": "Copy.ai",
                    "name_ar": "أداة الذكاء الاصطناعي 2",
                    "description": "This is another sample AI tool.",
                    "description_ar": "هذه أداة ذكاء اصطناعي نموذجية أخرى.",
                    "image": "documents/ai_tools/2.png",
                    "bg_image": "documents/ai_tools/bg_img.png",
                    "introductory_link": "https://example.com/tool2",
                    "introductory_des": "Introductory description for AI Tool 2.",
                    "introductory_des_ar": "وصف تمهيدي لأداة الذكاء الاصطناعي 2.",
                    "educational_link": "https://example.com/tool2/education",
                    "educational_des": "Educational description for AI Tool 2.",
                    "educational_des_ar": "وصف تعليمي لأداة الذكاء الاصطناعي 2.",
                    "is_featured": 1,
                    "status": 1,
                    "created_at": "2025-03-22T21:22:29.000000Z",
                    "updated_at": "2025-03-22T21:22:29.000000Z",
                    "pivot": {
                        "category_id": 3,
                        "aitool_id": 2
                    }
                }
            ]
        },
        {
            "id": 4,
            "name": "Entertainment",
            "name_ar": "ترفيه",
            "slug": "entertainment",
            "aitools": [
                {
                    "id": 1,
                    "name": "CHAT GPT",
                    "name_ar": "أداة الذكاء الاصطناعي 1",
                    "description": "This is a sample AI tool.",
                    "description_ar": "هذه أداة ذكاء اصطناعي نموذجية.",
                    "image": "documents/ai_tools/1.png",
                    "bg_image": "documents/ai_tools/bg_img.png",
                    "introductory_link": "https://example.com/tool1",
                    "introductory_des": "Introductory description for AI Tool 1.",
                    "introductory_des_ar": "وصف تمهيدي لأداة الذكاء الاصطناعي 1.",
                    "educational_link": "https://example.com/tool1/education",
                    "educational_des": "Educational description for AI Tool 1.",
                    "educational_des_ar": "وصف تعليمي لأداة الذكاء الاصطناعي 1.",
                    "is_featured": 1,
                    "status": 1,
                    "created_at": "2025-03-22T21:22:29.000000Z",
                    "updated_at": "2025-03-22T21:22:29.000000Z",
                    "pivot": {
                        "category_id": 4,
                        "aitool_id": 1
                    }
                },
                {
                    "id": 2,
                    "name": "Copy.ai",
                    "name_ar": "أداة الذكاء الاصطناعي 2",
                    "description": "This is another sample AI tool.",
                    "description_ar": "هذه أداة ذكاء اصطناعي نموذجية أخرى.",
                    "image": "documents/ai_tools/2.png",
                    "bg_image": "documents/ai_tools/bg_img.png",
                    "introductory_link": "https://example.com/tool2",
                    "introductory_des": "Introductory description for AI Tool 2.",
                    "introductory_des_ar": "وصف تمهيدي لأداة الذكاء الاصطناعي 2.",
                    "educational_link": "https://example.com/tool2/education",
                    "educational_des": "Educational description for AI Tool 2.",
                    "educational_des_ar": "وصف تعليمي لأداة الذكاء الاصطناعي 2.",
                    "is_featured": 1,
                    "status": 1,
                    "created_at": "2025-03-22T21:22:29.000000Z",
                    "updated_at": "2025-03-22T21:22:29.000000Z",
                    "pivot": {
                        "category_id": 4,
                        "aitool_id": 2
                    }
                },
                {
                    "id": 3,
                    "name": "Gemini",
                    "name_ar": "أداة الذكاء الاصطناعي 3",
                    "description": "This is another sample AI tool.",
                    "description_ar": "هذه أداة ذكاء اصطناعي نموذجية أخرى.",
                    "image": "documents/ai_tools/3.png",
                    "bg_image": "documents/ai_tools/bg_img.png",
                    "introductory_link": "https://example.com/tool2",
                    "introductory_des": "Introductory description for AI Tool 2.",
                    "introductory_des_ar": "وصف تمهيدي لأداة الذكاء الاصطناعي 2.",
                    "educational_link": "https://example.com/tool2/education",
                    "educational_des": "Educational description for AI Tool 2.",
                    "educational_des_ar": "وصف تعليمي لأداة الذكاء الاصطناعي 2.",
                    "is_featured": 1,
                    "status": 1,
                    "created_at": "2025-03-22T21:22:29.000000Z",
                    "updated_at": "2025-03-22T21:22:29.000000Z",
                    "pivot": {
                        "category_id": 4,
                        "aitool_id": 3
                    }
                }
            ]
        },
        {
            "id": 5,
            "name": "Programming",
            "name_ar": "برمجة",
            "slug": "programming",
            "aitools": [
                {
                    "id": 1,
                    "name": "CHAT GPT",
                    "name_ar": "أداة الذكاء الاصطناعي 1",
                    "description": "This is a sample AI tool.",
                    "description_ar": "هذه أداة ذكاء اصطناعي نموذجية.",
                    "image": "documents/ai_tools/1.png",
                    "bg_image": "documents/ai_tools/bg_img.png",
                    "introductory_link": "https://example.com/tool1",
                    "introductory_des": "Introductory description for AI Tool 1.",
                    "introductory_des_ar": "وصف تمهيدي لأداة الذكاء الاصطناعي 1.",
                    "educational_link": "https://example.com/tool1/education",
                    "educational_des": "Educational description for AI Tool 1.",
                    "educational_des_ar": "وصف تعليمي لأداة الذكاء الاصطناعي 1.",
                    "is_featured": 1,
                    "status": 1,
                    "created_at": "2025-03-22T21:22:29.000000Z",
                    "updated_at": "2025-03-22T21:22:29.000000Z",
                    "pivot": {
                        "category_id": 5,
                        "aitool_id": 1
                    }
                },
                {
                    "id": 3,
                    "name": "Gemini",
                    "name_ar": "أداة الذكاء الاصطناعي 3",
                    "description": "This is another sample AI tool.",
                    "description_ar": "هذه أداة ذكاء اصطناعي نموذجية أخرى.",
                    "image": "documents/ai_tools/3.png",
                    "bg_image": "documents/ai_tools/bg_img.png",
                    "introductory_link": "https://example.com/tool2",
                    "introductory_des": "Introductory description for AI Tool 2.",
                    "introductory_des_ar": "وصف تمهيدي لأداة الذكاء الاصطناعي 2.",
                    "educational_link": "https://example.com/tool2/education",
                    "educational_des": "Educational description for AI Tool 2.",
                    "educational_des_ar": "وصف تعليمي لأداة الذكاء الاصطناعي 2.",
                    "is_featured": 1,
                    "status": 1,
                    "created_at": "2025-03-22T21:22:29.000000Z",
                    "updated_at": "2025-03-22T21:22:29.000000Z",
                    "pivot": {
                        "category_id": 5,
                        "aitool_id": 3
                    }
                }
            ]
        }
    ]
const SwiperCards = ({ index, activeIndex }) => {
  return (
    <div
      key={index}
      className={`relative p-[1px] rounded-xl ${
        index === activeIndex
          ? "bg-gradient-to-r from-[#8C292F] to-[#4A4588] shadow-[10px_24px_29px_2px_rgba(151,71,255,0.2)]" // Gradient on first item
          : "bg-[#FFFFFF38]" // Default border for other items
      }`}
    >
      <div className="bg-[#1A1628] rounded-xl p-6  ">
        <div className="flex justify-center mb-6 relative">
          <img
            src={OpenAi}
            alt="ChatGPT logo"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute top-3 left-2 bg-[#F8A408] text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.99039 11.6044L3.60171 13.6457C3.45201 13.741 3.2955 13.7818 3.13219 13.7682C2.96888 13.7546 2.82598 13.7002 2.7035 13.6049C2.58102 13.5096 2.48575 13.3907 2.41771 13.2481C2.34966 13.1054 2.33605 12.9454 2.37688 12.7679L3.27509 8.90974L0.27426 6.31719C0.138168 6.1947 0.0532466 6.05507 0.0194958 5.89829C-0.014255 5.74152 -0.00418422 5.58855 0.0497082 5.43939C0.103601 5.29024 0.185256 5.16775 0.294674 5.07194C0.404091 4.97614 0.553792 4.9149 0.743777 4.88822L4.70405 4.54119L6.23508 0.907533C6.30313 0.744223 6.40874 0.62174 6.55191 0.540085C6.69508 0.45843 6.84124 0.417603 6.99039 0.417603C7.13955 0.417603 7.28571 0.45843 7.42888 0.540085C7.57205 0.62174 7.67766 0.744223 7.7457 0.907533L9.27674 4.54119L13.237 4.88822C13.4275 4.91544 13.5772 4.97668 13.6861 5.07194C13.795 5.16721 13.8766 5.28969 13.9311 5.43939C13.9855 5.58909 13.9959 5.74233 13.9621 5.89911C13.9284 6.05589 13.8432 6.19525 13.7065 6.31719L10.7057 8.90974L11.6039 12.7679C11.6447 12.9449 11.6311 13.1049 11.5631 13.2481C11.495 13.3912 11.3998 13.5102 11.2773 13.6049C11.1548 13.6996 11.0119 13.7541 10.8486 13.7682C10.6853 13.7824 10.5288 13.7415 10.3791 13.6457L6.99039 11.6044Z"
                fill="white"
              />
            </svg>
            <span className="text-white text-xs font-montserrat font-normal tracking-[-0.01em] ml-2 leading-none">
              {" "}
              4.7 Rating
            </span>
          </div>
          <div className="absolute top-3 right-2 bg-[rgba(0,0,0,0.30)]    p-2 w-10 h-10 rounded-xl flex items-center justify-center">
            <svg
              width="16"
              height="21"
              viewBox="0 0 16 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-50"
            >
              <path
                d="M1 0.0942383H15C15.2652 0.0942383 15.5196 0.199595 15.7071 0.387131C15.8946 0.574668 16 0.829022 16 1.09424V20.2372C16.0001 20.3266 15.9763 20.4144 15.9309 20.4915C15.8855 20.5685 15.8204 20.632 15.7421 20.6753C15.6639 20.7186 15.5755 20.7402 15.4861 20.7377C15.3968 20.7352 15.3097 20.7088 15.234 20.6612L8 16.1242L0.766 20.6602C0.690368 20.7078 0.603387 20.7341 0.514102 20.7367C0.424817 20.7392 0.336486 20.7177 0.258295 20.6746C0.180104 20.6314 0.114907 20.568 0.0694828 20.4911C0.0240588 20.4142 6.64708e-05 20.3266 0 20.2372V1.09424C0 0.829022 0.105357 0.574668 0.292893 0.387131C0.48043 0.199595 0.734784 0.0942383 1 0.0942383Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div className="flex w-full justify-between mt-4">
          <h2 className="text-[#EFEEF6] font-clash-display text-2xl font-semibold mb-2">
            ChatGPT
          </h2>
          <div className="bg-[#252343] text-white text-sm font-montserrat font-normal tracking-[-0.01em] px-3 py-[6px] rounded-full inline-block mb-4">
            Writing
          </div>
        </div>
        <p className="text-[#C0BCDC] mb-4 text-start text-base !leading-relaxed ">
          It provides many special services in the field of image generation
          through artificial intelligence, such as converting text into an image
        </p>
        <div className="flex items-center">
          <a
            href="#"
            className="text-primary-white text-base font-montserrat font-medium tracking-[-0.01em] flex items-center underline"
          >
            Learn More <i className="fas fa-arrow-right ml-2"></i>
          </a>
          <svg
            width="16"
            height="12"
            viewBox="0 0 16 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.1082 5.65254C15.2253 5.76972 15.291 5.92858 15.291 6.0942C15.291 6.25983 15.2253 6.41868 15.1082 6.53587L10.1082 11.5359C10.051 11.5973 9.98201 11.6465 9.90535 11.6807C9.82868 11.7148 9.74592 11.7332 9.662 11.7347C9.57808 11.7362 9.49472 11.7207 9.4169 11.6893C9.33908 11.6579 9.26838 11.6111 9.20903 11.5517C9.14968 11.4924 9.1029 11.4217 9.07146 11.3439C9.04003 11.266 9.02459 11.1827 9.02607 11.0988C9.02755 11.0148 9.04592 10.9321 9.08008 10.8554C9.11424 10.7788 9.16349 10.7098 9.2249 10.6525L13.1582 6.7192L1.33323 6.7192C1.16747 6.7192 1.0085 6.65336 0.89129 6.53614C0.774079 6.41893 0.708232 6.25996 0.708232 6.0942C0.708232 5.92844 0.774079 5.76947 0.89129 5.65226C1.0085 5.53505 1.16747 5.4692 1.33323 5.4692L13.1582 5.4692L9.2249 1.53587C9.16349 1.47865 9.11424 1.40965 9.08008 1.33299C9.04592 1.25632 9.02755 1.17356 9.02607 1.08964C9.02459 1.00572 9.04003 0.922362 9.07146 0.844539C9.1029 0.766715 9.14968 0.69602 9.20903 0.636671C9.26838 0.577322 9.33908 0.530535 9.4169 0.499101C9.49472 0.467667 9.57808 0.45223 9.662 0.453711C9.74592 0.455191 9.82868 0.473559 9.90535 0.507719C9.98201 0.541879 10.051 0.591131 10.1082 0.652537L15.1082 5.65254Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default function AISection() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Trending");
  const [activeIndextab, setActiveIndextab] = useState(2);
  const logos = [
    { src: Adobe, alt: "Adobe Firefly" },
    { src: Jasper, alt: "Jasper" },
    { src: MurfAi, alt: "Murf AI" },
    { src: OpenAiLogo, alt: "OpenAI" },
    { src: MidJourney, alt: "MidJourney" },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    { title: "ChatGPT", rating: "4.7", category: "Writing" },
    { title: "Copy.ai", rating: "4.7", category: "Writing" },
    { title: "Jasper AI", rating: "4.6", category: "Writing" },
    { title: "Rytr", rating: "4.5", category: "Writing" },
  ];

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.params.navigation.prevEl = prevRef.current;
      swiperRef.current.swiper.params.navigation.nextEl = nextRef.current;
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, []);
  const getLeftSpacing = (index) => {
    if (index === activeIndextab) return 24; // More spacing for active item
    const spacings = [8, 16, 24, 12, 8]; // Define left margins per index
    return spacings[index] || 8; // Default to 8px if index is out of range
  };
  const { t, i18n } = useTranslation();
  return (
    <>
      <section className="relative bg-primary-black text-white">
        <div className="border absolute border-primary-white-20 right-0 w-full top-0  z-20" />
        <Shades />

        <div className="container border-x border-x-primary-white-20 py-16 lg:pb-16 pb-20 ">
          {/* Header Section */}
          <div className="text-center z-20 relative">
            <h2 className="sub-heading ">{t("home.aiToolsTitle")}</h2>
            <p className="mt-3  mx-auto  default-paragraph max-w-3xl">
              {t("home.aiToolsDescription")}
            </p>
          </div>

          {/* AI Tool Logos */}
          <AiLogos logos={logos} />

          <div className="text-white mt-16 flex flex-col lg:flex-row justify-between items-center ">
            {/* Title */}
            <div className="z-20">
              <h2 className="sub-heading ">Your directory.ai</h2>

              {/* Description */}
              <p className="mt-4 max-w-4xl default-paragraph  z-20">
                Lorem ipsum dolor sit amet consectetur. Id eu ipsum urna sed
                consectetur aliquam scelerisque. Aliquam mauris ullamcorper sed
                amet curabitur bibendum eu pharellus ullamcorper. Egestas
                feugiat malesuada ultricies ac consectetur.
              </p>
            </div>

            {/* Button */}
            <div className="mt-6">
              <CustomButtonWithIcon
                text={"Explore More"}
                onClick={() => navigate("/directory")}
              />
            </div>
          </div>

          {/* Main Content */}

          <div className="grid grid-cols-4 lg:gap-12 gap-y-8 lg:gap-y-0 mt-12 relative z-20 lg:ps-16">
            {/* Sidebar Navigation */}
            <div className="col-span-12 lg:col-span-1 z-20">
          <BaseTab
          items={cateogories}
          variant="light"
          color="primary"
          radius="lg"
          size="lg"
          classNames={{
            cursor: "bg-[linear-gradient(90deg,#2D2B52_48.79%,rgba(45,43,82,0)_100%)] rounded-[0] bg-[#2D2B5200] text-start text-[background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 91.67%)] ",
            tab: "data-[selected=true]:bg-[linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%)] data-[selected=true]:text-[24px] text-[20px] text-lg data-[selected=true]:text-primary-white rounded-[0]  w-[500px]  font-montserrat transition-all my-3   mx-3 data-[selected=true]:border-y  data-[selected=true]:border-[1px_0px_1px_0px] data-[selected=true]:border-solid py-6 z-20",
            tabList: "gap-0 mt-[120px] p-0 -ms-[42px] z-20",
          }}
          className={"w-[100%] mx-auto "}
          onSelectionChange={(key) => console.log("Selected:", key)}
          isVertical={true}
          getLeftSpacing={getLeftSpacing}
          isSwiper={true}
          background={true}
        />

          {/* <div className="grid md:grid-cols-4 gap-12 mt-12 relative z-20 ps-16">
         
            <div className="col-span-1 z-20">
              <ul className="space-y-3 text-lg z-20 mt-16">
                {menuItems.map((item, index) => {
                  
                  const leftSpacing = index * 8; // Adjust this value for spacing

                  return (
                    <li
                      key={index}
                      className={`transition px-4 py-2  flex items-center gap-4 cursor-pointer font-montserrat lg:ml-6
              ${
                index === activeIndextab
                  ? "text-white font-semibold  px-6 border-y border-white-500"
                  : "text-gray-400"
              }
              ${index !== activeIndextab ? "opacity-70 hover:opacity-100" : ""}
            `}
                      style={{
                        // marginLeft: `${getLeftSpacing(index)}px`,
                        background:
                          index === activeIndextab
                            ? "linear-gradient(90deg, #2D2B52 48.79%, rgba(45, 43, 82, 0) 100%)"
                            : "transparent", // Apply gradient only to active item
                      }}
                      onClick={() => setActiveIndextab(index)}
                    >
                      {item}{" "}
                      {index === activeIndextab && item === "WRITING" && (
                        <span className="">
                          <img className="w-6 h-6" src={WritingIcon} alt="" />
                        </span>
                      )}
                      {index === activeIndextab && item === "ENTERTAINMENT" && (
                        <span className="">
                          {" "}
                          <img
                            className="w-6 h-6"
                            src={EntertainmentIcon}
                            alt=""
                          />
                        </span>
                      )}
                      {index === activeIndextab && item === "PROGRAMMING" && (
                        <span className="">
                          {" "}
                          <img
                            className="w-6 h-6"
                            src={ProgrammingIcon}
                            alt=""
                          />
                        </span>
                      )}
                      {index === activeIndextab && item === "SEARCH" && (
                        <span className="">
                          {" "}
                          <img className="w-6 h-6" src={SearchIcon} alt="" />
                        </span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* AI Tools Slider */}
            <div className="col-span-12 lg:col-span-3 relative lg:ps-40">
              <Swiper
                ref={swiperRef}
                modules={[Navigation]}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                pagination={false} // Disable default pagination

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
              >
                {slides.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <SwiperCards index={index} activeIndex={activeIndex} />
                  </SwiperSlide>
                ))}
              </Swiper>

            
              <div className="flex justify-between items-center my-6">
               
                <div className="flex justify-center  space-x-2">
                  {slides.slice(1).map((_, index) => (
                    <div
                      key={index}
                      style={{
                        border: "1px solid white",
                        width: "16px",
                        height: "16px",
                      }}
                      className={` rounded-full border border-white transition-all duration-300 ${
                        activeIndex === index
                          ? "bg-[#9747FF]  "
                          : "bg-transparent"
                      }`}
                      onClick={() => swiperRef.current.swiper.slideTo(index)}
                    />
                  ))}
                </div>
                <div className=" flex gap-4">
                  
                  <button
                    ref={prevRef}
                    onClick={() => swiperRef.current.swiper.slidePrev()}
                    className={`w-9 h-9 flex items-center justify-center rounded-md border transition-all
      ${
        activeIndex > 0
          ? "border-white bg-gradient-to-br from-[#D851A3] to-[#9747FF]"
          : "border-gray-600"
      }
    `}
                  >
                    <svg
                      width="12"
                      height="24"
                      viewBox="0 0 12 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.54801 6.57999L8.48701 5.51999L2.70801 11.297C2.61486 11.3896 2.54093 11.4996 2.49048 11.6209C2.44003 11.7421 2.41406 11.8722 2.41406 12.0035C2.41406 12.1348 2.44003 12.2648 2.49048 12.3861C2.54093 12.5073 2.61486 12.6174 2.70801 12.71L8.48701 18.49L9.54701 17.43L4.12301 12.005L9.54801 6.57999Z"
                        fill="#4A4588"
                      />
                    </svg>
                  </button>

                  
                  <button
                    ref={nextRef}
                    onClick={() => swiperRef.current.swiper.slideNext()}
                    className={`w-9 h-9 flex items-center justify-center rounded-md border transition-all
      ${
        activeIndex < slides.length - 1
          ? "border-white bg-gradient-to-br from-[#D851A3] to-[#9747FF]"
          : "border-gray-600"
      }
    `}
                  >
                    <svg
                      width="12"
                      height="24"
                      viewBox="0 0 12 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.45199 6.57999L3.51299 5.51999L9.29199 11.297C9.38514 11.3896 9.45907 11.4996 9.50952 11.6209C9.55997 11.7421 9.58594 11.8722 9.58594 12.0035C9.58594 12.1348 9.55997 12.2648 9.50952 12.3861C9.45907 12.5073 9.38514 12.6174 9.29199 12.71L3.51299 18.49L2.45299 17.43L7.87699 12.005L2.45199 6.57999Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
      <div className="bg-primary-black ai-section ">
        <div className="relative   w-full ">
          <div className="absolute right-0 bottom-0 w-full ">
            <img
              src={communityImage}
              alt=""
              className="w-full h-full object-cover"
              style={{ filter: "grayscale(0.9)" }}
            />
          </div>
          {/* <div className="absolute inset-0  h-full w-full " style={{
  background: `radial-gradient(97.41% 128.7% at 50% -28.7%, #090810 61.28%, rgba(0, 0, 0, 0) 100%), url(${communityImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat:"no-repeat",
  filter: "grayscale(0.9)"
}}/> */}
          <div className="border-x border-x-primary-white-20 container z-20 relative h-full`">
            <div className="w-full  text-white py-10 relative z-20">
              <h1 className="sub-heading ">
                Yourdirectory.ai <br /> Community
              </h1>
              <div className="flex justify-between flex-col lg:flex-row">
                <div className="w-[60%] ">
                  <p className="default-paragraph  mt-2">
                    Lorem ipsum dolor sit amet consectetur. Id eu ipsum urna sed
                    consectetur <br /> aliquam scelerisque.
                  </p>
                </div>
                {/* Tabs */}
                <div className="flex    z-20 cursor-pointer   mt-6 border-b border-gray-700 w-full gap-x-7 lg:w-[40%]">
                  {tabs.map((tab) => (
                    <div
                      key={tab}
                      className={`pb-2 text-xl text-center font-medium font-montserrat w-max lg:w-full relative ${
                        activeTab === tab ? "text-white" : "text-gray-400"
                      }`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                      {activeTab === tab && (
                        <div className="h-1 w-full bg-[#9747FF] absolute -bottom-[2px] left-0" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Content Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {data[activeTab].map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#161027] p-4 rounded-xl flex flex-col lg:flex-row items-center gap-4 w-full border border-[#FFFFFF38]"
                  >
                    {/* Image Section */}
                    <div className="w-[188px] h-[188px] rounded-lg overflow-hidden">
                      <img
                        src={item.image} // Replace with your image path
                        alt="Midjourney AI"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content Section */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-sm text-white font-semibold">
                        <span className="px-3 py-1   bg-[#F8A408] text-white text-xs font-semibold  rounded-full flex items-center">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.99039 11.6044L3.60171 13.6457C3.45201 13.741 3.2955 13.7818 3.13219 13.7682C2.96888 13.7546 2.82598 13.7002 2.7035 13.6049C2.58102 13.5096 2.48575 13.3907 2.41771 13.2481C2.34966 13.1054 2.33605 12.9454 2.37688 12.7679L3.27509 8.90974L0.27426 6.31719C0.138168 6.1947 0.0532466 6.05507 0.0194958 5.89829C-0.014255 5.74152 -0.00418422 5.58855 0.0497082 5.43939C0.103601 5.29024 0.185256 5.16775 0.294674 5.07194C0.404091 4.97614 0.553792 4.9149 0.743777 4.88822L4.70405 4.54119L6.23508 0.907533C6.30313 0.744223 6.40874 0.62174 6.55191 0.540085C6.69508 0.45843 6.84124 0.417603 6.99039 0.417603C7.13955 0.417603 7.28571 0.45843 7.42888 0.540085C7.57205 0.62174 7.67766 0.744223 7.7457 0.907533L9.27674 4.54119L13.237 4.88822C13.4275 4.91544 13.5772 4.97668 13.6861 5.07194C13.795 5.16721 13.8766 5.28969 13.9311 5.43939C13.9855 5.58909 13.9959 5.74233 13.9621 5.89911C13.9284 6.05589 13.8432 6.19525 13.7065 6.31719L10.7057 8.90974L11.6039 12.7679C11.6447 12.9449 11.6311 13.1049 11.5631 13.2481C11.495 13.3912 11.3998 13.5102 11.2773 13.6049C11.1548 13.6996 11.0119 13.7541 10.8486 13.7682C10.6853 13.7824 10.5288 13.7415 10.3791 13.6457L6.99039 11.6044Z"
                              fill="white"
                            />
                          </svg>
                          <span className="text-white text-xs font-montserrat font-normal tracking-[-0.01em] ml-2 leading-none">
                            {" "}
                            4.7 Rating
                          </span>
                        </span>
                      </div>
                      <h3 className="text-[20px] font-[600] font-clash-display leading-[40px] tracking-[0%] text-white mt-2">
                        {item.title}
                      </h3>

                      <p className="text-[14px] font-[500] font-montserrat leading-[100%] tracking-[0%] text-gray-300 mt-1">
                        Lorem ipsum dolor sit amet consectetur. Id eu ipsum urna
                        sed consectetur aliquam scelerisque.
                      </p>

                      <div className="flex items-center gap-2 mt-2">
                        <AvatarGroup isBordered size="sm">
                          <Avatar src={AvatarImage} />
                          <Avatar src={AvatarImage} />
                        </AvatarGroup>
                        <span className="text-[12px] font-[500] font-montserrat leading-[100%] tracking-[0%] text-gray-400">
                          Abdullah, Ali, Abdulaziz & 88 more...
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="pb-8 ">
              <CustomButtonWithIcon text={"Join Our Thriving Community"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

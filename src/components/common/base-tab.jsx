import { Tabs, Tab } from "@heroui/tabs";
import { useEffect, useRef, useState } from "react";
import CardBox from "./card-box";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BaseTab = ({
  items = [],
  defaultSelectedKey = "1",
  variant = "underlined", // bordered, light, underlined
  color = "primary", // primary, secondary, success, warning, danger
  radius = "md", // none, sm, md, lg, full
  size = "md", // sm, md, lg
  className = "",
  onSelectionChange = () => {},
  classNames = {},
  isVertical = false,
  getLeftSpacing,
  background = false,
  isSwiper = false,
}) => {
  const [selected, setSelected] = useState(defaultSelectedKey);

  const handleSelectionChange = (key) => {
    setSelected(key);
    onSelectionChange(key);
  };

  // Default classNames
  const defaultClassNames = {
    tabList: "gap-2",
    tab: "data-[selected=true]:bg-red-500 data-[selected=true]:text-primary-white transition-colors ",
    tabContent: "group-data-[selected=true]:text-primary-white",
    cursor: "bg-red-500",
  };

  // Merge default and custom classNames (override only `cursor` if provided)
  const mergedClassNames = {
    ...defaultClassNames,
    ...classNames, // Overrides only the provided keys (e.g., cursor)
  };
  const [activeIndex, setActiveIndex] = useState(0);
const swiperRef = useRef(null);
const prevRef = useRef(null);
  const nextRef = useRef(null);
  useEffect(() => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.params.navigation.prevEl = prevRef.current;
        swiperRef.current.swiper.params.navigation.nextEl = nextRef.current;
        swiperRef.current.swiper.navigation.init();
        swiperRef.current.swiper.navigation.update();
      }
    }, []);

  return (
    <div className={className}>
      <Tabs
        selectedKey={selected}
        onSelectionChange={handleSelectionChange}
        variant={variant}
        color={color}
        radius={radius}
        size={size}
        aria-label="Dynamic Tabs"
        classNames={mergedClassNames}
        isVertical={isVertical}

      >
        {items.map((item, index) => (
          <Tab
            key={item.id}
            id={item.id}
            title={
              <div className="flex items-center gap-2">
                <span>{item.name}</span>
                {item.icon && <span>{item.icon}</span>}
                {item.count && (
                  <span className="text-xs bg-primary-white-20 px-2 py-1 rounded-full">
                    {item.count}
                  </span>
                )}
              </div>
            }
            style={{
              marginLeft: getLeftSpacing && `${getLeftSpacing(index)}px`,
              background: background &&
                index === selected
                  ? "linear-gradient(90deg, #2D2B52 48.79%, rgba(45, 43, 82, 0) 100%)"
                  : "transparent", // Apply gradient only to active item
            }}
            disabled={item.disabled}
          >
            {isSwiper ?  
              <div className="p-4 mt-10 -me-[30px] ms-20 z-20 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 ">
              <div>
              <Swiper
                ref={swiperRef}
                modules={[Navigation]}
                spaceBetween={30}
                speed={1000}
                autoplay={{
                  enabled: false,
                  delay: 1000,
                  disableOnInteraction: true,
                  pauseOnMouseEnter: true,
                }}
                slidesPerView={2}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                pagination={false} // Disable default pagination
                breakpoints={{
                  640: { slidesPerView: 1 },
                  1024: { slidesPerView: 2 },
                }}
              >
                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 w-full">
                {item?.aitools?.map((tool) => (
                  <CardBox key={tool.id} data={tool} />
                ))}
              </div> */}
              <div className="w-full">
               {item?.aitools?.map((tool, index) => (
                                <SwiperSlide key={index}>
                                   <CardBox key={tool.id} data={tool} />
                                </SwiperSlide>
                              ))}
                              </div>
              </Swiper>

              {/* Custom Navigation Buttons */}
              <div className="flex justify-between items-center my-6">
                {/* Custom Pagination */}
                <div className="flex justify-center  space-x-2">
                  {item?.aitools?.slice(1)?.map((_, index) => (
                    <div
                      key={index}
                      style={{
                        border: "1px solid white",
                        width: "16px",
                        height: "16px",
                      }}
                      className={` rounded-full border border-white transition-all duration-300 cursor-pointer ${
                        activeIndex === index
                          ? "bg-[#9747FF]  "
                          : "bg-transparent"
                      }`}
                      onClick={() => swiperRef.current.swiper.slideTo(index)}
                    />
                  ))}
                </div>
                <div className=" flex gap-4">
                  {/* Left Button - Previous Slide */}
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

                  {/* Right Button - Next Slide */}
                  <button
                    ref={nextRef}
                    onClick={() => swiperRef.current.swiper.slideNext()}
                    className={`w-9 h-9 flex items-center justify-center rounded-md border transition-all
      ${
        activeIndex < item?.aitools?.length - 1
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
            </div>
            </div>
             :
            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                {item?.aitools.map((tool) => (
                  <CardBox key={tool.id} data={tool} />
                ))}
              </div>
            </div>
}
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default BaseTab;

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = ({

  slidesPerView = 1,
  spaceBetween = 30,
  autoplay = {
    enabled: false,
    delay: 3500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true
  },
  loop = true,
  className = "",

  showNavigation = false,
  showPagination = true,
  speed = 1000,
  children
}) => {
  const autoplayConfig = autoplay.enabled
    ? {
        delay: autoplay.delay,
        disableOnInteraction: autoplay.disableOnInteraction,
        pauseOnMouseEnter: autoplay.pauseOnMouseEnter,
      }
    : false;
  return (
    <div className={`relative  ${className}`}>
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        centeredSlides={false}
        loop={loop}
        speed={speed}
        autoplay={autoplayConfig}
        pagination={
          showPagination
            ? {
                clickable: true,
              }
            : false
        }
        navigation={showNavigation}
        className="mySwiper !static"
      >
       {children}
      </Swiper>
    </div>
  );
};

export default Slider;

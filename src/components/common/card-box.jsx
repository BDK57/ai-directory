import React from "react";
import { Link } from "react-router-dom";

const CardBox = ({ data, className }) => {
  console.log(data, "tools");
  return (
    <div className={`flex items-center justify-center bg-gradient-to-r hover:from-[#8C292F] hover:to-[#4A4588]  from-primary-white-20 to-primary-white-20  hover:shadow-[0px_14px_29px_2px_rgba(151,71,255,0.2)] relative rounded-2xl p-[1px]   ${className}`}>
      <div className="bg-[#1C1A32] p-3 rounded-2xl  relative  ">
        <div className="absolute top-4 right-4 bg-purple-500 text-white text-xs font-semibold p-2 rounded-full">
          <i className="fas fa-bookmark"></i>
        </div>
        <div className="flex justify-center mb-6 relative">
          <img
            src={`${import.meta.env.VITE_SITE_URL}${data?.image}`}
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
        <div className="flex w-full justify-between items-baseline xsm:items-start">
          <h2 className="text-[#EFEEF6] font-clash-display xs:text-sm xsm:text-2xl font-semibold mb-2">
            {data?.name || data?.title}
          </h2>
          <div className="bg-[#252343] text-white text-sm font-montserrat font-normal tracking-[-0.01em] px-3 py-[6px] rounded-full inline-block mb-4">
            Writing
          </div>
        </div>

        <p className="text-[#C0BCDC] mb-4 text-start text-sm xsm:text-base !leading-relaxed ">
          It provides many special services in the field of image generation
          through artificial intelligence, such as converting text into an image
        </p>
        <div className="flex items-center">
          {data?.is_featured == 1  ? <Link
            to={`/directory/${data?.id}`}
            className="text-primary-white text-sm xsm:text-base font-montserrat font-medium tracking-[-0.01em] flex items-center underline"
          >
            Learn More <i className="fas fa-arrow-right ml-2"></i>
          </Link> : <p

            className="text-primary-white text-base font-montserrat font-medium tracking-[-0.01em] flex items-center underline"
          >
            Learn More 2 <i className="fas fa-arrow-right ml-2"></i>
          </p>}

          <svg
            width="16"
            height="12"
            viewBox="0 0 16 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.1082 5.65254C15.2253 5.76972 15.291 5.92858 15.291 6.0942C15.291 6.25983 15.2253 6.41868 15.1082 6.53587L10.1082 11.5359C10.051 11.5973 9.98201 11.6465 9.90535 11.6807C9.82868 11.7148 9.74592 11.7332 9.662 11.7347C9.57808 11.7362 9.49472 11.7207 9.4169 11.6893C9.33908 11.6579 9.26838 11.6111 9.20903 11.5517C9.14968 11.4924 9.1029 11.4217 9.07146 11.3439C9.04003 11.266 9.02459 11.1827 9.02607 11.0988C9.02755 11.0148 9.04592 10.9321 9.08008 10.8554C9.11424 10.7788 9.16349 10.7098 9.2249 10.6525L13.1582 6.7192L1.33323 6.7192C1.16747 6.7192 1.0085 6.65336 0.89129 6.53614C0.774079 6.41893 0.708232 6.25996 0.708232 6.0942C0.708232 5.92844 0.774079 5.76947 0.89129 5.65226C1.0085 5.53505 1.16747 5.4692 1.33323 5.4692L13.1582 5.4692L9.2249 1.53587C9.16349 1.47865 9.11424 1.40965 9.08008 1.33299C9.04592 1.25632 9.02755 1.17356 9.02607 1.08964C9.02459 1.00572 9.04003 0.922362 9.07146 0.844539C9.1029 0.766715 9.14968 0.69602 9.20903 0.636671C9.26838 0.577322 9.33908 0.530535 9.4169 0.499101C9.49472 0.467667 9.57808 0.45223 9.662 0.453711C9.74592 0.455191 9.82868 0.473559 9.90535 0.507719C9.98201 0.541879 10.051 0.591131 10.1082 0.652537L15.1082 5.65254Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CardBox;

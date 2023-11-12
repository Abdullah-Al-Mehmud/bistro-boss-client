import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import HeadingTitle from "../../Shared/HeadingTitle/HeadingTitle";

const Category = () => {
  return (
    <div>
      <section>
        <HeadingTitle
          heading={"ORDER ONLINE"}
          subHeading={"---From 11:00am to 10:00pm---"}></HeadingTitle>

        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper ">
          <SwiperSlide>
            <img src={slide1} alt="" />
            <p className="text-center text-4xl -mt-16 font-bold text-white">
              Salads
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="" />
            <p className="text-center text-4xl -mt-16 font-bold text-white">
              Pizza
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="" />
            <p className="text-center text-4xl -mt-16 font-bold text-white">
              Soup
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="" />
            <p className="text-center text-4xl -mt-16 font-bold text-white">
              Cake
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide5} alt="" />
            <p className="text-center text-4xl -mt-16 font-bold text-white">
              Salad
            </p>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default Category;

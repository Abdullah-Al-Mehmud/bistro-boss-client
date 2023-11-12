import HeadingTitle from "../../Shared/HeadingTitle/HeadingTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
import quoteImg from "../../../assets/icon/quote-left 1.png";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="my-10">
      <section>
        <HeadingTitle
          heading="TESTIMONIALS"
          subHeading="---What Our Clients Say---"></HeadingTitle>
        <div>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            {reviews.map((review) => (
              <SwiperSlide key={review?._id} className="px-20 text-center">
                <div className="flex justify-center py-5">
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={review?.rating}
                    readOnly
                  />
                </div>
                <div className="flex justify-center">
                  <img className="w-20 py-5" src={quoteImg} alt="" />
                </div>
                <p>{review?.details}</p>
                <p className="font-bold text-2xl mt-4 text-yellow-500">
                  {review?.name}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;

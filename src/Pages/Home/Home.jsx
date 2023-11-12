import Category from "./Category/Category";
import FeaturedItems from "./FeaturedItems/FeaturedItems";
import PopularMenu from "./PopularMenu/PopularMenu";
import Slider from "./Slider/Slider";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <FeaturedItems></FeaturedItems>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;

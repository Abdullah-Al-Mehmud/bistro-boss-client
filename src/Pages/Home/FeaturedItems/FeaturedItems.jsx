import HeadingTitle from "../../Shared/HeadingTitle/HeadingTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./featuredItems.css";

const FeaturedItems = () => {
  return (
    <div className="featured">
      <section className="py-16 px-16 bg-black bg-opacity-75 text-white">
        <HeadingTitle
          heading="FROM OUR MENU"
          subHeading="---Check it out---"></HeadingTitle>
        <div className="md:flex  items-center gap-10">
          <div className="w-full">
            <img src={featuredImg} alt="" />
          </div>
          <div className="w-full space-y-6">
            <p className="text-2xl fnt-medium">
              March 20, 2023 <br /> WHERE CAN I GET SOME?{" "}
            </p>

            <p className="font-medium">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="bg-transparent border-2 border-white px-6 py-3">
              Read More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedItems;

import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuBg from "../../assets/menu/banner3.jpg";
import dessertBg from "../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../assets/menu/pizza-bg.jpg";
import saladsBg from "../../assets/menu/salad-bg.jpg";
import soupBg from "../../assets/menu/soup-bg.jpg";

import useMenu from "../../Hooks/useMenu";
import HeadingTitle from "../Shared/HeadingTitle/HeadingTitle";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
  const [menus] = useMenu();
  const desserts = menus.filter((item) => item.category === "dessert");
  const salad = menus.filter((item) => item.category === "salad");
  const pizza = menus.filter((item) => item.category === "pizza");
  const soup = menus.filter((item) => item.category === "soup");
  const offered = menus.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* main cover */}
      <Cover
        img={menuBg}
        title="OUR MENU"
        details="Would you like to try a dish?"></Cover>
      {/* main heading */}
      <HeadingTitle
        heading={`TODAY'S OFFER`}
        subHeading={`---Don't miss---`}></HeadingTitle>
      {/* offered menus */}
      <MenuCategory items={offered}></MenuCategory>
      {/* desserts menu */}
      <MenuCategory
        items={desserts}
        coverImg={dessertBg}
        title={`dessert`}
        details={`Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}></MenuCategory>
      {/* pizza menu */}
      <MenuCategory
        items={pizza}
        coverImg={pizzaBg}
        title={`pizza`}
        details={`Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}></MenuCategory>
      {/* salad menu*/}
      <MenuCategory
        items={salad}
        coverImg={saladsBg}
        title={`salad`}
        details={`Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}></MenuCategory>
      {/* soup menu*/}
      <MenuCategory
        items={soup}
        coverImg={soupBg}
        title={`soup`}
        details={`Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}></MenuCategory>
    </div>
  );
};

export default Menu;

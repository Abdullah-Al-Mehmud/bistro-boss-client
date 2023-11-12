import Cover from "../Shared/Cover/Cover";
import orderImg from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../Hooks/useMenu";
import FoodCard from "../../Components/FoodCard/FoodCard";
import OrderCategory from "./OrderCategory/OrderCategory";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menus] = useMenu();

  const desserts = menus.filter((item) => item.category === "dessert");
  const salad = menus.filter((item) => item.category === "salad");
  const pizza = menus.filter((item) => item.category === "pizza");
  const soup = menus.filter((item) => item.category === "soup");
  const drink = menus.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order</title>
      </Helmet>
      <Cover
        img={orderImg}
        title={`OUR SHOP`}
        details={`Would you like to try a dish?`}></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salads</Tab>
          <Tab> Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drink</Tab>
        </TabList>
        <TabPanel>
          <OrderCategory items={salad}></OrderCategory>
        </TabPanel>
        <TabPanel>
          <OrderCategory items={pizza}></OrderCategory>
        </TabPanel>
        <TabPanel>
          <OrderCategory items={soup}></OrderCategory>
        </TabPanel>
        <TabPanel>
          <OrderCategory items={desserts}></OrderCategory>
        </TabPanel>
        <TabPanel>
          <OrderCategory items={drink}></OrderCategory>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;

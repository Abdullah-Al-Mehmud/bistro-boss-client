import HeadingTitle from "../../Shared/HeadingTitle/HeadingTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
  const [menus] = useMenu();
  const popular = menus.filter((item) => item.category === "popular");

  return (
    <div>
      <section className="mt-10">
        <HeadingTitle
          heading="FROM OUR MENU"
          subHeading="---Check it out---"></HeadingTitle>
        <div className="grid grid-cols-2 gap-5 mb-10">
          {popular.map((menu) => (
            <MenuItems key={menu?._id} menu={menu}></MenuItems>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PopularMenu;

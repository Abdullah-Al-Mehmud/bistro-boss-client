import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItems from "../../Shared/MenuItems/MenuItems";

const MenuCategory = ({ items, coverImg, title, details }) => {
  return (
    <div>
      {title && <Cover img={coverImg} title={title} details={details}></Cover>}

      <div className="grid grid-cols-2 gap-5 mb-10">
        {items.map((menu) => (
          <MenuItems key={menu?._id} menu={menu}></MenuItems>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="text-white font-bold px-6 py-3 bg-red-400">
          Order Now
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;

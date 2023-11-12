const MenuItems = ({ menu }) => {
  const { name, image, price, recipe } = menu;
  return (
    <div className="flex space-x-6">
      <img
        className="w-[118px] h-[104px] rounded-tr-full rounded-br-full rounded-bl-full"
        src={image}
        alt=""
      />
      <div>
        <p>{name}----------------</p>
        <p className="w-80">{recipe}</p>
      </div>
      <p className="font-bold text-yellow-500">$ {price}</p>
    </div>
  );
};

export default MenuItems;

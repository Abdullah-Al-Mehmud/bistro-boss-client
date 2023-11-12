const HeadingTitle = ({ heading, subHeading }) => {
  return (
    <div>
      <div className="text-center pt-2 pb-10">
        <p className="font-bold text-yellow-500">{subHeading}</p>
        <p className="text-3xl border-y-4 py-3 max-w-xs mt-4 mx-auto font-bold ">
          {heading}
        </p>
      </div>
    </div>
  );
};

export default HeadingTitle;

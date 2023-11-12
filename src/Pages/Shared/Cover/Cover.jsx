const Cover = ({ img, title, details }) => {
  return (
    <div className="mb-20">
      <div
        className="hero h-[600px]"
        style={{
          backgroundImage: `url(${img})`,
        }}>
        {/* <div className="hero-overlay bg-opacity-60"></div> */}
        <div className="hero-content text-center text-neutral-content bg-black px-48 py-16 bg-opacity-50">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5">{details}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;

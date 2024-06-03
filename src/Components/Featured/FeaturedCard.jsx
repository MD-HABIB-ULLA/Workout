const FeaturedCard = ({image, title, featureDes}) => {
  return (
    <div className="h-56 flex items-center justify-center px-4 text-center rounded-xl border-white border bg-black bg-opacity-10 backdrop-blur-md duration-500 text-white">
      <div>
        <div className="feature-card space-y-3">
          <img src={image} className="h-14 m-auto" alt="" />
          <h3>{title}</h3>
          <p>{featureDes}</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;

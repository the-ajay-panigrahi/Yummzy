import { restaurantCardImageUrl } from "../utils/constants";

const RestaurantCard = ({ data }) => {
  const {
    name,
    avgRating,
    cloudinaryImageId,
    costForTwo,
    cuisines,
    areaName,
    locality,
  } = data.info;

  return (
    <div class="shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),_0px_30px_60px_-30px_rgba(0,0,0,0.3),_0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)] rounded-3xl overflow-hidden w-72 h-[435px] cursor-pointer hover:scale-110 transition-all duration-200 ">
      <img
        className="h-64 w-full object-cover object-top"
        src={restaurantCardImageUrl + cloudinaryImageId}
      />
      <div className="px-3 py-3">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="flex gap-4 font-medium text-slate-800">
          <span>⭐ {avgRating}</span>
          <span>{costForTwo}</span>
        </p>
        <p className="text-slate-950 italic">{cuisines.join(", ")}</p>
        <p className="font-thin">{locality}</p>
        <p className="font-medium">{areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;

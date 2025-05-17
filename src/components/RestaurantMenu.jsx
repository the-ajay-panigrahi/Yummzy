import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { restaurantMenuUrl } from "../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurantMenu, setRestaurantMenu] = useState();

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    const resMenu = await fetch(restaurantMenuUrl + resId);
    const jsonResMenuData = await resMenu.json();
    {
      console.log(jsonResMenuData?.data);
    }
    setRestaurantMenu(jsonResMenuData?.data);
  };

  const {
    name,
    areaName,
    costForTwoMessage,
    cuisines,
    avgRating,
    totalRatingsString,
  } = restaurantMenu?.cards[2]?.card?.card?.info ?? {};

  return (
    <div className="flex flex-col justify-center items-center max-w-7xl mx-auto text-slate-700 gap-5 my-10">
      <h1 className="text-5xl font-bold ">{name}</h1>
      <div className="font-medium text-xl flex gap-5">
        <p>
          <span>⭐{avgRating} </span> <span> ({totalRatingsString})</span>
        </p>
        <span className="text-black text-lg font-medium">
          {costForTwoMessage}
        </span>
      </div>

      <div className="flex gap-3">
        {console.log(areaName + " area")}
        <p className="text-md font-medium">{cuisines && cuisines.join(", ")}</p>
        <p className="text-black text-md font-medium">{areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantMenu;

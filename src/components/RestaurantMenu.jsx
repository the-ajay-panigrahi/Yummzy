import { useEffect, useState } from "react";
import { restaurantMenuApiUrl } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";

const RestaurantMenu = () => {
  const [restaurantMenuData, setRestaurantMenuData] = useState([]);
  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    const resData = await fetch(restaurantMenuApiUrl);
    const jsonResData = await resData.json();
    console.log(
      jsonResData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setRestaurantMenuData(
      jsonResData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return (
    <div className="flex gap-7 flex-wrap max-w-6xl mx-auto justify-center items-center my-10">
      {restaurantMenuData.map((individualResData) => {
        return (
          <RestaurantCard
            key={individualResData.info.id}
            data={individualResData}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;

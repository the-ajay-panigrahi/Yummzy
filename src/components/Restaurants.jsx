import { useEffect, useState } from "react";
import { restaurantApiUrl } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router";
import ShimmerHome from "./ShimmerHome";

const Restaurants = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    const resData = await fetch(restaurantApiUrl);
    const jsonResData = await resData.json();
    console.log(
      jsonResData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );

    setRestaurantData(
      jsonResData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  if (restaurantData.length === 0) {
    return <ShimmerHome />;
  }

  return (
    <div className="flex gap-7 flex-wrap max-w-6xl mx-auto justify-center items-center my-10">
      {restaurantData.map((individualResData) => {
        return (
          <Link
            to={"/restaurant/" + individualResData.info.id}
            key={individualResData.info.id}
          >
            <RestaurantCard data={individualResData} />
          </Link>
        );
      })}
    </div>
  );
};

export default Restaurants;

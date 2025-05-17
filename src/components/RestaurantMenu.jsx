import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { restaurantMenuUrl } from "../utils/constants";
import ShimmerResMenu from "./ShimmerResMenu";
import Accordion from "./Accordion";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurantMenu, setRestaurantMenu] = useState(null);
  const [categories, setCategories] = useState([]);
  const [showItems, setShowItems] = useState(false);
  const [showIndex, setShowIndex] = useState();

  useEffect(() => {
    fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    const resMenu = await fetch(restaurantMenuUrl + resId);
    const jsonResMenuData = await resMenu.json();
    {
      console.log(
        jsonResMenuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR
          ?.cards
      );
    }
    setRestaurantMenu(jsonResMenuData?.data);

    const filteredCategories =
      jsonResMenuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
        (list) => {
          return (
            list?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
          );
        }
      );
    setCategories(filteredCategories);
  };

  if (!restaurantMenu) {
    return <ShimmerResMenu />;
  }

  const {
    name,
    areaName,
    costForTwoMessage,
    cuisines,
    avgRating,
    totalRatingsString,
  } = restaurantMenu?.cards[2]?.card?.card?.info ?? {};

  return (
    <>
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
          <p className="text-md font-medium">
            {cuisines && cuisines.join(", ")}
          </p>
          <p className="text-black text-md font-medium">{areaName}</p>
        </div>
      </div>
      <div className="">
        {categories.map((category, index) => {
          return (
            <Accordion
              key={index}
              data={category}
              showItems={index === showIndex}
              setShowIndex={() => {
                setShowIndex(index);
              }}
            />
          );
        })}
      </div>
    </>
  );
};

export default RestaurantMenu;

import { restaurantCardImageUrl } from "../utils/constants";

const Accordion = ({ data, showItems, setShowIndex }) => {
  const handleAccordion = () => {
    setShowIndex();
  };

  return (
    <div
      className=" bg-slate-100 max-w-6xl shadow-lg mb-3 mx-auto rounded-lg hover:cursor-pointer flex flex-col"
      onClick={handleAccordion}
    >
      <div className="flex justify-between px-10 py-4 items-center ">
        <h2 className="text-2xl text-slate-700 font-medium ">
          {data?.card?.card?.title} ({data?.card?.card?.itemCards.length})
        </h2>
        <span className="text-2xl">⬇️</span>
      </div>
      {showItems && (
        <div>
          {data?.card?.card?.itemCards.map((itemList) => {
            const { name, description, imageId, defaultPrice, ratings, price } =
              itemList?.card?.info ?? {};

            return (
              <div className="flex justify-between items-center mb-3 border-b-2 border-slate-200 px-10 py-3 gap-7">
                <div>
                  <p className="text-lg font-medium">{name}</p>
                  <p className="mt-4 mb-2 text-slate-800">{description}</p>
                  {ratings?.aggregatedRating?.rating && (
                    <p className="flex gap-2 ml-[-2px] mt-1 mb-2">
                      <span className="font-medium text-slate-500">
                        ⭐{ratings?.aggregatedRating?.rating}
                      </span>
                      <span className="font-medium text-slate-500">
                        ({ratings?.aggregatedRating?.ratingCountV2})
                      </span>
                    </p>
                  )}
                  <p className="font-bold text-lg text-slate-800">
                    ₹{defaultPrice / 100 || price / 100}
                  </p>
                </div>
                <div className="relative min-w-36 h-52 ">
                  <img
                    className="object-cover w-full h-full rounded-xl border-2 border-slate-300"
                    src={restaurantCardImageUrl + imageId}
                    alt=""
                  />
                  <button className="bg-white border-2 border-slate-200 w-[90%] left-[5%] rounded-lg shadow-2xl font-medium text-lg absolute py-2 bottom-[-10px] hover:bg-slate-300 transition-all duration-150">
                    Add
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Accordion;

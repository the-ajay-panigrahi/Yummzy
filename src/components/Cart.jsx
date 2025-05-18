import { useDispatch, useSelector } from "react-redux";
import { restaurantCardImageUrl } from "../utils/constants";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => {
    return store.cart.items;
  });

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5 min-h-[78vh]">
      {cartItems.length !== 0 ? (
        <>
          <h1 className="text-4xl text-center mt-7 font-bold">Cart</h1>
          <button
            onClick={handleClearCart}
            className="bg-red-400 text-white p-2 text-sm hover:bg-red-500 cursor-pointer transition-all duration-150 rounded-xl"
          >
            Clear Cart
          </button>
          <div className=" max-w-6xl mx-auto rounded-2xl">
            {cartItems.map((itemList, index) => {
              const {
                name,
                description,
                imageId,
                defaultPrice,
                ratings,
                price,
              } = itemList?.card?.info ?? {};

              return (
                <div
                  className="flex justify-between items-center mb-3 border-b-2 border-slate-200 px-10 py-3 gap-7 cursor-pointer rounded-2xl transition-all duration-150 bg-slate-200 hover:scale-105"
                  key={index}
                >
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
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <div className="text-4xl text-slate-700 font-bold">
          No items in the 🛒 please add some to proceed!
        </div>
      )}
    </div>
  );
};

export default Cart;

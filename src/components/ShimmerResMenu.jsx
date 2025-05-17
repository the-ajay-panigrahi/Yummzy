const ShimmerResMenu = () => {
  return (
    <div className="max-w-7xl mx-auto flex justify-center items-center my-13">
      <div role="status" class="animate-pulse">
        <div class="h-7 bg-gray-200 rounded-full dark:bg-gray-700 w-96 mb-8"></div>
        <div className="flex gap-3 mb-5">
          <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-full "></div>
          <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-full "></div>
        </div>
        <div className="flex gap-3 mb-4 justify-center">
          <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-5/12 "></div>
          <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-5/12 "></div>
        </div>

        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default ShimmerResMenu;

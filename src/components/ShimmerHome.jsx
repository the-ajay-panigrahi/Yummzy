const ShimmerHome = () => {
  const ShimmerCard = () => {
    return (
      <div
        role="status"
        class="max-w-sm border border-gray-200 animate-pulse dark:border-gray-700 shadow-[0px_50px_100px_-20px_rgba(50,50,93,0.25),_0px_30px_60px_-30px_rgba(0,0,0,0.3),_0px_-2px_6px_0px_inset_rgba(10,37,64,0.35)] rounded-3xl overflow-hidden w-72 h-[435px] cursor-pointer hover:scale-110 transition-all duration-200  flex flex-col gap-2"
      >
        <div class="flex items-center justify-center bg-gray-300 dark:bg-gray-700">
          <svg
            class="max-h-65 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 20"
          >
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
          </svg>
        </div>
        <div className="p-2 flex flex-col gap-2 mt-3">
          <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-3"></div>
          <div className="flex gap-2  mb-2.5">
            <div class="h-2 w-full bg-gray-200 rounded-full dark:bg-gray-700"></div>
            <div class="h-2 w-full bg-gray-200 rounded-full dark:bg-gray-700"></div>
          </div>
          <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          <div class="flex items-center mt-4 gap-2">
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full "></div>
            <div class="w-full h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          </div>
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    );
  };
  return (
    <div className="flex gap-7 flex-wrap max-w-6xl mx-auto justify-center items-center my-10">
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
    </div>
  );
};

export default ShimmerHome;

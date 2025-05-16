import { useRouteError } from "react-router";

const Error = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-orange-200 gap-5">
      <h1 className="text-5xl">Oops! something went wrong.</h1>
      <p className="text-3xl">
        {error.status} - {error.statusText}
      </p>
      <p className="text-2xl">{error.data}</p>
    </div>
  );
};

export default Error;

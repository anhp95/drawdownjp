import React from "react";
import { AiOutlineHome } from "react-icons/ai";
const Home = () => {
  return (
    <>
      <div className="flex-auto p-5 w-1/3 bg-red-100">
        <h1 className="text-md ">Home Page</h1>
      </div>
      <div className="flex-auto p-5 w-1/3 bg-yellow-100">
        <h1 className="text-sm float-right">Home </h1>
        <AiOutlineHome className="float-right" />
      </div>
    </>
  );
};

export default Home;

import React from "react";
import { AiOutlineHome } from "react-icons/ai";
const Home = () => {
  return (
    <div className="grid grid-cols-4 w-full">
      <div className=" p-5 bg-red-100">
        <h1 className="text-md ">Home Page</h1>
      </div>
      <div className=" p-5 col-start-4 bg-green-100">
        <h1 className="text-sm float-right">Home</h1>
        <AiOutlineHome className="float-right" />
      </div>
    </div>
  );
};

export default Home;

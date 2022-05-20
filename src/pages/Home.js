import React from "react";
import { AiOutlineHome } from "react-icons/ai";

const Header = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="flex w-full md:w-1/3 p-5 h-10 items-center">
          <h1 className="text-sm md:text-xl font-medium">Home Page</h1>
        </div>
        <div className="flex w-full md:w-2/3 items-center justify-start md:justify-end p-5 h-10">
          <AiOutlineHome className="float-left" />
          <h1 className="float-left text-sm">Home </h1>
        </div>
      </div>
    </>
  );
};

const PageContent = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row w-full">
        <div className="flex flex-col p-10 m-2 w-full border-t-2 border-slate-400 font-medium">
          <p>
            Drawdown is the future point in time when levels of greenhouse gases
            (GHG) in the atmosphere stop climbing and start to steadily decline
            - Project Drawdown
          </p>
          <br></br>
          <p>
            Drawdown Japan provides Emission Tracker and Drawdown Model to
            constantly monitor the progress toward zero GHG emission in 2050 of
            Japan
          </p>
        </div>
      </div>
      <div className="flex w-full"></div>
    </>
  );
};

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <PageContent />
    </div>
  );
};

export default Home;

import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { RiArrowRightSFill } from "react-icons/ri";
import { GoDash } from "react-icons/go";

import DeckScatterPlot from "../components/DeckScatterPlot_PowerPlant";
import Plot, { Plot2 } from "../components/Plot";
import PlotGg, { SteppedArea } from "../components/PlotGg";

const Header = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="flex w-full md:w-1/3 p-5 h-10 items-center">
          <h1 className="text-sm md:text-xl font-medium">
            Electricity Generation
          </h1>
        </div>
        <div className="flex w-full md:w-2/3 items-center justify-start md:justify-end p-5 h-10">
          <AiOutlineHome className="float-left" />
          <h1 className="float-left text-sm">Home </h1>
          <RiArrowRightSFill className="float-left text-sm" />
          <h1 className="float-left text-sm">Emission Tracker</h1>
          <RiArrowRightSFill className="float-left text-sm" />
          <h1 className="text-sm font-semibold underline float-left">
            Electricity Generation
          </h1>
        </div>
      </div>
    </>
  );
};

const PageContent = () => {
  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(true);
  const [toggle3, setToggle3] = useState(true);
  const [toggle4, setToggle4] = useState(false);
  const [toggle5, setToggle5] = useState(false);

  return (
    <>
      <div className="flex flex-col md:flex-row w-full">
        <div className="flex flex-col m-2 md:w-1/3 border-t-2 border-slate-400">
          <div className="bg-white border-b-3">
            <h1 className="text-sm font-semibold float-left">
              Sample Line Figure
            </h1>
            <button
              className="float-right"
              onClick={() => setToggle1(!toggle1)}
            >
              <GoDash className="text-xl" />
            </button>
          </div>

          <div
            className={`text-center h-70 bg-green-100 ${
              toggle1 ? "hidden bg-slate-100" : ""
            }`}
          >
            <Plot />
          </div>
        </div>
        <div className="flex flex-col m-2 md:w-1/3 border-t-2 border-slate-400">
          <div className="bg-white border-b-3">
            <h1 className="text-sm font-semibold float-left">
              Sample Stepped Area Figure
            </h1>
            <button
              className="float-right"
              onClick={() => setToggle2(!toggle2)}
            >
              <GoDash className="text-xl" />
            </button>
          </div>

          <div
            className={`text-center h-70 bg-red-100 ${
              toggle2 ? "hidden bg-slate-100" : ""
            }`}
          >
            <SteppedArea />
          </div>
        </div>
        <div className="flex flex-col m-2 md:w-1/3 border-t-2 border-slate-400">
          <div className="bg-white border-b-3">
            <h1 className="text-sm font-semibold float-left">
              Sample Treemap Figure
            </h1>
            <button
              className="float-right"
              onClick={() => setToggle3(!toggle3)}
            >
              <GoDash className="text-xl" />
            </button>
          </div>

          <div
            className={`text-center h-70 bg-red-100 ${
              toggle3 ? "hidden bg-slate-100" : ""
            }`}
          >
            <Plot2 />
          </div>
        </div>
      </div>
      <div className="flex w-full">
        <div className="flex flex-col w-full m-2 border-t-2">
          <div className="bg-white border-b-2">
            <h1 className="text-sm font-semibold float-left">
              Power Power Plant Distribution
            </h1>
            <button
              className="float-right bg-white"
              onClick={() => setToggle4(!toggle4)}
            >
              <GoDash className="text-xl" />
            </button>
          </div>
          <div
            className={`relative ${
              toggle1 && toggle2 && toggle3 ? "h-[700px]" : "h-[400px]"
            }
          } ${toggle4 ? "hidden bg-slate-100" : ""}`}
          >
            <DeckScatterPlot />
          </div>
        </div>
      </div>
    </>
  );
};

const EmissionElectricity = () => {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <PageContent />
    </div>
  );
};

export default EmissionElectricity;

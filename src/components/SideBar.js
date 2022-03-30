import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/index.css";
import { BiDownArrowAlt } from "react-icons/bi";

import img_toggle from "../assets/arrow.png";
import img_company from "../assets/company.png";
import img_drawdown from "../assets/drawdown.png";
import img_electricity from "../assets/electricity.png";
import img_emission from "../assets/emission.png";
import img_forestry from "../assets/forestry.png";
import img_logo from "../assets/logo.png";
import img_overview from "../assets/overview.png";

const SideBar = () => {
  const [sideBar, setSideBar] = useState(true);
  const [dropDown, setDropDown] = useState(false);

  const emission_child = [
    {
      title: "Overview",
      src: img_overview,
      link: "/emission/overview",
      key: 1,
    },
    {
      title: "Forestry Sequestration",
      src: img_forestry,
      link: "/emission/forestry_sequestration",
      key: 2,
    },
    {
      title: "Electricity Generation ",
      src: img_electricity,
      link: "/emission/electricity_generation",
      key: 3,
    },
    {
      title: "Direct Emission",
      src: img_company,
      link: "/emission/direct_emission",
      key: 4,
    },
  ];

  return (
    <>
      <div
        className={`bg-sky-900 p-5 pt-2 relative duration-150 ${
          sideBar ? "w-72" : "w-28"
        } `}
      >
        <img
          src={img_toggle}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
          border-2 rounded-full  ${!sideBar && "rotate-180"}`}
          onClick={() => setSideBar(!sideBar)}
        />
        <div className="flex gap-x-4 items-center" title="DrawDown Japan">
          <img
            src={img_logo}
            className={`cursor-pointer duration-500 ${
              sideBar && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !sideBar && "scale-0"
            }`}
          >
            DrawDown Japan
          </h1>
        </div>
        <div className="w-full border-t border-gray-300"></div>
        <ul className="pt-6 block">
          <li
            key="emission"
            className="flex text-md rounded-md p-1 cursor-pointer hover:bg-emerald-600 text-white items-center gap-x-1"
            title="Emission Tracker"
            onClick={() => setDropDown(!dropDown)}
          >
            <img src={img_emission} />
            <span
              className={`origin-left duration-200 ${!sideBar && "hidden"}`}
            >
              Emission Tracker
              <Link to="/emission"></Link>
            </span>
            <BiDownArrowAlt className={"text-white"} />
          </li>
          <ul className={`pt-2 pl-4 ${dropDown ? "hidden" : "block"}`}>
            {emission_child.map((item) => (
              <Link to={item.link} key={item.key}>
                <li
                  key={item.key}
                  className="flex text-sm rounded-md p-2 cursor-pointer hover:bg-emerald-600 text-white items-center gap-x-4"
                  title={item.title}
                >
                  <img src={item.src} key={item.src} alt={item.src} />
                  <span
                    className={`origin-left duration-200 ${
                      !sideBar && "hidden"
                    }`}
                    key={item.key}
                  >
                    {item.title}
                  </span>
                </li>
              </Link>
            ))}
          </ul>
          <Link to="/drawdown">
            <li
              className="flex text-md rounded-md p-1 cursor-pointer hover:bg-emerald-600 text-white items-center gap-x-4"
              title="Carbon Neutrality"
            >
              <img src={img_drawdown} />
              <span
                className={`origin-left duration-200 ${!sideBar && "hidden"}`}
              >
                Carbon Neutrality
              </span>
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default SideBar;

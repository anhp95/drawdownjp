import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const header_item = [
    { title: "HOME", link: "/home", key: "home" },
    { title: "SOLUTIONS", link: "/solutions", key: "solutions" },
    {
      title: "PARTNERSHIPS",
      link: "/parnerships",
      key: "parnerships",
    },
    { title: "ABOUT", link: "/about", key: "about" },
  ];
  return (
    <nav className="relative items-center justify-between py-3">
      <div className="container-fluid w-full flex flex-row items-center justify-between px-6">
        <ul className="flex">
          {header_item.map((item) => (
            <li key={item.key} className="mr-6">
              <Link
                className="hover:text-blue-800 font-semibold text-sky-700 text-sm"
                to={item.link}
                key={item.key}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;

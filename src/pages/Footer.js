import React from "react";

const Footer = () => {
  return (
    <footer className="fixed p-2 bottom-0 bg-lime-300 w-screen">
      <span className="text-sm text-slate-500 sm:text-center">
        © 2022 Powered by{" "}
        <a href="http://gis.chubu.ac.jp/" className="hover:underline">
          <strong>Chubu Univerisity </strong>
        </a>
      </span>
    </footer>
  );
};

export default Footer;

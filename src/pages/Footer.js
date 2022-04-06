import React from "react";

const Footer = () => {
  return (
    <footer className="p-2">
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

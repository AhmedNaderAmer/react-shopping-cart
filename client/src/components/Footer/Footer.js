/** @format */

import React from "react";
import "../../css/Footer/Footer.css";
import { words } from "./../../words";
const year = new Date().getFullYear();
const Footer = () => {
  return (
    <footer>
      {words.footerTitle} &copy; {year}{" "}
    </footer>
  );
};

export default Footer;

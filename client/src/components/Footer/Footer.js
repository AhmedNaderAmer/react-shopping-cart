/** @format */

import React from "react";
import "../../css/Footer/Footer.css";
const year = new Date().getFullYear();
const Footer = () => {
  return (
    <footer>CopyWright &copy; {year} </footer>
  );
};

export default Footer;

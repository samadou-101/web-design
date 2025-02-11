import React from "react";
import { motion } from "framer-motion";
import style from "../styles/home-header.module.css";
const Header: React.FC = () => {
  return (
    <div className={style["header-container"]}>
      <motion.h3
        className={style["logo"]}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        BankHotel
      </motion.h3>
      <motion.ul
        className={style["nav"]}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <li>HOME</li>
        <li>ABOUTS</li>
        <li>ROOMS</li>
        <li>RESTAURANT</li>
        <li>CONFERENCE HALL</li>
        <li>CONTACTS</li>
      </motion.ul>
      <motion.span
        className={style["phone-number"]}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        +38 032 297 50 20
      </motion.span>
      <div className={style["menu-icon"]}></div>
    </div>
  );
};

export default Header;

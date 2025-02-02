import React from "react";
import style from "../styles/home.module.css";
const Header: React.FC = () => {
  return (
    <div className={style["header-container"]}>
      <h3 className={style["logo"]}>BankHotel</h3>
      <ul className={style["nav"]}>
        <li>HOME</li>
        <li>ABOUTS</li>
        <li>ROOMS</li>
        <li>RESTAURANT</li>
        <li>CONFERENCE HALL</li>
        <li>CONTACTS</li>
      </ul>
      <span className={style["phone-number"]}>+38 032 297 50 20</span>
    </div>
  );
};

export default Header;

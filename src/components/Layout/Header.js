import React, { Fragment } from "react";
import mealsImage from "./../../images/euroleague.jpg";
import classes from "./Header.module.css";
import HeaderCartIcon from "./HeaderCartIcon";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>BasketBallShop</h1>
        <HeaderCartIcon />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="main img" />
      </div>
    </Fragment>
  );
};

export default Header;

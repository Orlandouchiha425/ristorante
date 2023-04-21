import React from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <h1>Menu Meals</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="table of food" />
      </div>
    </>
  );
}

export default Header;

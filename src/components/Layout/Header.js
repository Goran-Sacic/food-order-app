import React, { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

export default function Header(props) {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>GoGo Food!</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="Stol prepun ukusne hrane!" />
      </div>
    </Fragment>
  );
}

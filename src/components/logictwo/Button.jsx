import React from "react";
import styles from "./gametwo.module.css";

const Button = ({ onClick }) => {
  return (
    <button className={styles.restart} onClick={onClick}>
      Play again
    </button>
  );
};

export default Button;

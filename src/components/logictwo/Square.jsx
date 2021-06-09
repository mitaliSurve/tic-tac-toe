import React from "react";
import styles from "./gametwo.module.css";
import PropTypes from "prop-types";

const Square = ({ value, onClick }) => {
  return (
    <button className={styles.square} onClick={onClick}>
      {value}
    </button>
  );
};

Square.propTypes = {
  value: PropTypes.object,
  onClick: PropTypes.func,
};

export default Square;

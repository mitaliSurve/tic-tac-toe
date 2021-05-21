import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

import styles from "./game.module.css";

const Button = ({ title, handleClear, className }) => {
  return (
    <button className={cx(styles.button_clear, className)} onClick={handleClear}>
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  handleClear: PropTypes.func.isRequired,
  className: PropTypes.objectOf(PropTypes.object),
};

export default Button;

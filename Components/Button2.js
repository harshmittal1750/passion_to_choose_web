import React from "react";
import { ButtonToggle } from "reactstrap";
import boxStyles from "../styles/Box.module.css";

const Button2 = () => {
  return (
    <>
      <ButtonToggle
        size="lg"
        block
        color="warning"
        className={boxStyles.button}
        onClick={() => nextBtn()}
      >
        <span>
          <i className="fa fa-arrow-left p-3"></i>
          Previous
        </span>
        <span>
          Next
          <i className="fa fa-arrow-right p-3"></i>
        </span>
      </ButtonToggle>
    </>
  );
};

export default Button2;

import React from "react";
import { ButtonToggle } from "reactstrap";
import boxStyles from "../styles/Box.module.css";

const nextBtn = () => {
  location.href = "/page";
};

const Button1 = () => {
  return (
    <>
      <ButtonToggle
        size="lg"
        block
        color="warning"
        className={boxStyles.button}
        onClick={() => nextBtn()}
      >
        Next1
        <i className="fa fa-arrow-right p-3"></i>
      </ButtonToggle>
    </>
  );
};

export default Button1;

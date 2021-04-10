import React from "react";
import { ButtonToggle } from "reactstrap";
import boxStyles from "../styles/Box.module.css";

const prevBtn = () => {
  location.href = "/";
};

const Button2 = () => {
  return (
    <>
      <div className="bg-warning">
        <ButtonToggle
          size="lg"
          color="warning"
          className={boxStyles.button}
          style={{ width: "25%", float: "left", padding: "0" }}
          onClick={() => prevBtn()}
        >
          <i className="fa fa-arrow-left py-3 px-1"></i>
          Previous
        </ButtonToggle>
        <ButtonToggle
          size="lg"
          color="warning"
          className={boxStyles.button}
          style={{ width: "25%", float: "right", padding: "0" }}
        >
          Next
          <i className="fa fa-arrow-right py-3 px-1"></i>
        </ButtonToggle>
      </div>
    </>
  );
};

export default Button2;

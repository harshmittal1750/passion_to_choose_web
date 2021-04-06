import React from "react";
import { ButtonToggle } from "reactstrap";
import boxStyles from "../styles/Box.module.css";

const Button2 = () => {
  return (
    <>
      <div  className="bg-warning">
        <ButtonToggle
          size="lg"
          
          color="warning"
          className={boxStyles.button}
          style={{ width: "25%", float: "left", padding: "0" }}
        >
          <i className="fa fa-arrow-left p-3"></i>
          Previous
        </ButtonToggle>
        <ButtonToggle
          size="lg"
         
          color="warning"
          className={boxStyles.button}
          style={{ width: "25%", float: "right", padding: "0" }}
        >
          Next
          <i className="fa fa-arrow-right p-3"></i>
        </ButtonToggle>
      </div>
    </>
  );
};

export default Button2;

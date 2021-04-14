import React from "react";
import { ButtonToggle } from "reactstrap";
import boxStyles from "../styles/Box.module.css";

const prevBtn = () => {
  location.href = "/";
};

const Button2 = () => {
  return (
    <>
      <div
        className="bg-warning"
        style={{
          borderRadius: "10px",
          borderTopLeftRadius: "0",
          borderTopRightRadius: "0",
        }}
      >
        <ButtonToggle
          size="lg"
          color="warning"
          className={boxStyles.button}
          style={{ width: "25%", float: "left", padding: "0" }}
          onClick={() => document.querySelector(".swiper-button-prev").click()}
        >
          <i className="fa fa-arrow-left py-3 px-1"></i>
          <span className="d-none d-md-inline">Previous</span>
        </ButtonToggle>

        <ButtonToggle
          size="lg"
          color="warning"
          className={boxStyles.button}
          style={{ width: "25%", float: "right", padding: "0" }}
          onClick={() => document.querySelector(".swiper-button-next").click()}
        >
          <span className="d-none d-md-inline">Next</span>
          <i className="fa fa-arrow-right py-3 px-1"></i>
        </ButtonToggle>
      </div>
    </>
  );
};

export default Button2;

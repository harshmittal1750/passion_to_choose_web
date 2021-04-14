import React from "react";
import { ButtonToggle } from "reactstrap";
import boxStyles from "../styles/Box.module.css";

const nextBtn = () => {
  let username = prompt("Enter your name: ");
  console.log(username);
  if (username !== "") {
    location.href = "/page";
    window.localStorage.setItem("Username", username);
  } else {
    alert("Please fill the name");
  }
};

function Button1() {
  return (
    <>
      <ButtonToggle
        size="lg"
        block
        color="warning"
        className={boxStyles.button}
        onClick={() => nextBtn()}
      >
        <div className="d-none d-md-inline">Next</div>
        <i className="fa fa-arrow-right py-3 px-1"></i>
      </ButtonToggle>
    </>
  );
}

export default Button1;

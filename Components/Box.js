import React from "react";
import boxStyles from "../styles/Box.module.css";
import { Container, ButtonToggle } from "reactstrap";
import "font-awesome/css/font-awesome.css";

const nextBtn = () => {
  alert("Next button clicked");
};

const Box = () => {
  return (
    <Container className={boxStyles.centreBox}>
      <div className={boxStyles.centerHeading}>
        <h2>Ready for the quiz</h2>
        <h4>These question will help you choose the path of your life</h4>
        <h5>No. of questions: 14</h5>
      </div>
      <ButtonToggle
        size="lg"
        block
        color="warning"
        className={boxStyles.button}
        onClick={() => nextBtn()}
      >
        Next
        <i className="fa fa-arrow-right p-3"></i>
      </ButtonToggle>
    </Container>
  );
};

export default Box;

import React from "react";
import boxStyles from "../styles/Box.module.css";
import { Container, ButtonToggle } from "reactstrap";
import "font-awesome/css/font-awesome.css";

const Box = () => {
  return (
    <Container className={boxStyles.centreBox}>
      <h2 className={boxStyles.headTwo}>Ready for the quiz</h2>
      <h4 className={boxStyles.headTwo}>
        Make sure to watch all of the videos above before starting!
      </h4>
      <ButtonToggle
        size="lg"
        block
        color="warning"
        className="p-0"
        style={{ borderTopLeftRadius: "0", borderTopRightRadius: "0" }}
      >
        Next
        <span>
          <i className="fa fa-arrow-right p-3"></i>
        </span>
      </ButtonToggle>{" "}
    </Container>
  );
};

export default Box;

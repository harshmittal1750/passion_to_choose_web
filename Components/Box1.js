import React from "react";
import boxStyles from "../styles/Box.module.css";
import { Container } from "reactstrap";

import Button2 from "./Button2";

const Box1 = () => {
  return (
    <Container className={boxStyles.rowWrapper}>
      <div className={boxStyles.centreBox}>
        <div className={boxStyles.centerHeading}>
          <h2>Ready for the quiz</h2>
          <h4>These question will help you choose the path of your life</h4>
          <h5>No. of questions: 14</h5>
        </div>
        <Button2 />
      </div>
    </Container>
  );
};

export default Box1;

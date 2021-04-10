import React from "react";
import boxStyles from "../styles/Box.module.css";
import { Container } from "reactstrap";

import Button1 from "./Button1";

const Box = () => {
  return (
    <React.Fragment>
      <Container>
        <div className={boxStyles.rowWrapper}>
          <div className={boxStyles.centreBox}>
            <div className={boxStyles.centerHeading}>
              <h3>Ready for the quiz</h3>
              <h4>These question will help you choose the path of your life</h4>
              <h5>No. of questions: 14</h5>
            </div>
            <Button1 />
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Box;

import React from "react";
import boxStyles from "../styles/Box.module.css";
import { Container } from "reactstrap";

import Button2 from "./Button2";

const Box1 = (props) => {
  return (
    <Container className={boxStyles.rowWrapper}>
      <div className={boxStyles.centreBox}>
        <div className={boxStyles.centerHeading}>
          <h4 className="pb-3">
            Q{props.id}. {props.ques}
          </h4>
          <div className={boxStyles.gridContainer}>
            {props.ans.map((ans, index) => {
              return (
                <button
                  id="btn"
                  type="submit"
                  onClick={(a) => {
                    a.preventDefault;
                    console.log(a.target.innerText);
                  }}
                  key={index}
                  className={boxStyles.gridItems}
                >
                  {ans}
                </button>
              );
            })}
          </div>
        </div>
        <Button2 />
      </div>
    </Container>
  );
};


export default Box1;

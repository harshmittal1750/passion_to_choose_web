import React from "react";
import headerStyles from "../styles/Layout.module.css";

const Header = () => {
  return (
    <React.Fragment>
      <div className={headerStyles.headBg}>
        <h1 className={headerStyles.heading}>Passion To Choose</h1>
        <p>A way to test your capabilities</p>
      </div>
    </React.Fragment>
  );
};

export default Header;

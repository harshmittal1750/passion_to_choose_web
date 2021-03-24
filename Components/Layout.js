import React from "react";

import Meta from "./Meta";
import Header from "./Header";
import Footer from "./Footer";
import Box from "./Box";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Meta />
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Meta from "./Meta";
import Header from "./Header";
import Footer from './Footer'
import Box from './Box'

const Layout = () => {
  return (
    <React.Fragment>
      <Meta />
      <Header />
      <Box/>
      <Footer/>
    </React.Fragment>
  );
};

export default Layout;

/* 
TODO: iss file mai sabko call krke pages/index.js mai send kr rha hu 
<Meta/>: ismai sabhi meta tags and title tag hai
<Header/>: ismai heading of the page hai
<Box/>: ismai box ka material hai
<Footer/>: ismai footer strip hai
*/
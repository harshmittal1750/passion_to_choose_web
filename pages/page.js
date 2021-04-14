import React from "react";
import Slider from "../Components/Slider";

const page = () => {
  return (
    <React.Fragment>
      {/* <h4
        style={{
          textAlign: "center",
        }}
      >
        Welcome, {data} 
      </h4>*/}
      <Slider />
    </React.Fragment>
  );
};

// page.getInitialProps = async (ctx) => {
//   let data = localStorage.getItem("Username");
//   return { session: data };
// };

export default page;

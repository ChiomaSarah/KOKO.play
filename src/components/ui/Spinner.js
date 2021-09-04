import React from "react";
import Loader from "./img/spinner2.gif";

const Spinner = () => {
  return (
    <img
      src={Loader}
      style={{ width: "35rem", margin: "auto", display: "block", background: "transparent" }}
      alt="Loading..."
    />
  );
};
export default Spinner;

import React from "react";

import logo from "../../../assets/images/logo.png";

const StarwarsLogo = ({ id, className, width }) => (
  <div>
    <img
      src={logo}
      id={id}
      className={className}
      width={width}
      alt="Star wars logo"
    />
  </div>
);

export default StarwarsLogo;

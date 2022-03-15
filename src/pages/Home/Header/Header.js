import React from "react";

import logo from "../../../assets/logo1.png";
import "./header.css";

function Header() {
  return (
    <>
      <div className="header_container">
        <img className="logo" src={logo} alt="logo ahtivados" />
        <p className="header_description">Controle de pausas</p>
      </div>
    </>
  );
}

export default Header;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import Writebtn from "./Writebtn";

function Header() {
  return (
    <div className="flex">
      <div className="font mr-800 ml-10">Nopainogaini</div>
      <div className="flex">
        <FontAwesomeIcon icon={faMoon} />
        <h3>Dark Mode</h3>
        <Writebtn />
      </div>
    </div>
  );
}

export default Header;

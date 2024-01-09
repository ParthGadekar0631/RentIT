import React from "react";
import "./Footer.css";
import { LinkedIn, GitHub } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

function Footer() {
  return (
    <div className="footer">
      <h5>Developed with ❤️</h5>
      <br />
      <p>Durva Kavathkar</p>
      <p>Parth Gadekar</p>
      <p>Shreyasi Patil</p>
      <p>Spandan Ghosh</p>
    </div>
  );
}

export default Footer;

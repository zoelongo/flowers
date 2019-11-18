import React from "react";
import "./Header.css";

const Header = props => (
  <div className="header">
    <div className="title">Flower Clicky</div>
    <div className="scores">
      Score: {props.score} Highscore: {props.highscore}
    </div>
  </div>
);

export default Header;
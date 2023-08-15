import React from "react";
import "./BuyAndLearnMoreButton.css";

const BuyAndLearnMoreButton = ({
  onClick = () => {},
  onButtonClick=()=>{},
  text = "",
  isLearnMore = false,
}) => {
  return (
    <ul className="links">
      <li>
        <button className="button" onClick={onButtonClick}>{text}</button>
      </li>
      {isLearnMore && (
        <li>
          <a className="link" onClick={onClick}>
            Learn More
          </a>
        </li>
      )}
    </ul>
  );
};

export default BuyAndLearnMoreButton;

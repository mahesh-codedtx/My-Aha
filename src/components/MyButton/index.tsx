import React from "react";
import "./index.css";
interface IButtonProps {
  btntext: string;
  bgColor: "orange" | "black";
  className: string;
}
const AhaButton = (props: IButtonProps) => {
  return (
    <button
      className={`aha-btn ${props.className} ${
        props.bgColor === "orange" ? "orange-bg" : "black-bg"
      }`}
    >
      {props.btntext}
    </button>
  );
};

export default AhaButton;

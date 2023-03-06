import React from "react";
import "./Slider.css";
// import { LeftArrow } from "../slider/icons/left-arrow.js";
// import { RightArrow } from "../slider/icons/right-arrow.js";

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img
        src={
          direction === "next"
            ? "/icons/right-arrow.svg"
            : "/icons/left-arrow.svg"
        }
      />
      {/* {direction === "next" ? ">" : "<"} */}
    </button>
  );
}

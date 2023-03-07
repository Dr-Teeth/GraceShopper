import React from "react";
import "./Slider.css";

export default function BtnSlider({ direction, moveSlide }) {
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
    </button>
  );
}

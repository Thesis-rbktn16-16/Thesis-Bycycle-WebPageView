import React from "react";
import bike from "../assets/bike.mp4";
function Background() {
  return (
    <div class="video">
      <video autoPlay loop muted id="video">
        <source src={bike} type="video/mp4" />
      </video>
    </div>
  );
}

export default Background;

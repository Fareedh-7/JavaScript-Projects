"use strict";

const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
  const pos_X = event.offsetX;
  const pos_Y = event.offsetY;
  const spanEl = document.createElement("span");
  spanEl.style.left = pos_X + "px";
  spanEl.style.top = pos_Y + "px";
  const size = Math.random() * 100;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";
  bodyEl.appendChild(spanEl);
  
  setTimeout(() => {
    spanEl.remove();
  }, 3000);
});

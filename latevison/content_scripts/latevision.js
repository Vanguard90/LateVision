
window.onload = colorChange;

function colorChange () {

const body = document.querySelector("body");

body.style = "background: rgba(247,230,213,0.3) !important ";

};

/*
let colorStyle = document.getElementById("latevision-style");
let modal = document.getElementById("latevison-modal");
let head = document.documentElement || document.head || document.querySelector("head");

if (!modal) {
  modal = document.createElement("div");
  modal.setAttribute("class", "style");
  modal.setAttribute("id", "latevision-modal");
  if (head) head.insertBefore(modal, head.firstChild);
}

if (!colorStyle) {
  colorStyle = document.createElement("style");
  colorStyle.setAttribute("type", "text/css");
  colorStyle.setAttribute("id", "latevision-style");
  if (head) head.insertBefore(colorStyle, head.firstChild);
}
  if (colorStyle) {
      colorStyle.textContent = 
        '.style {' + 
        '  top: -10% !important;' + 
        '  margin: 0 !important;' + 
        '  opacity: 1 !important;' + 
        '  padding: 0 !important;' + 
        '  right: -10% !important;' + 
        '  width: 120% !important;' + 
        '  height: 120% !important;' + 
        '  display: block !important;' + 
        '  position: fixed !important;' + 
        '  border-radius: 0 !important;' + 
        '  z-index: 2147483647 !important;' + 
        '  pointer-events: none !important;' + 
        '  transition: opacity 0.1s !important;' + 
        '  mix-blend-mode: multiply !important;' + 
        '  background: rgb(247,230,213,0.3) !important;' + 
        '}';
  };

  */
let controlsslider = document.getElementsByClassName("controlsslider");
let rightarrow = document.getElementById("right");
let leftarrow = document.getElementById("left");
let acc = document.getElementsByClassName("accordion");
let iterated;

for (iterated = 0; iterated < acc.length; iterated++) {
  acc[iterated].addEventListener("click", function myfunction() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

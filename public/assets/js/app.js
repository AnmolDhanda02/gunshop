const hamburger = document.querySelector(".hamburger");
const navlinksul = document.querySelector(".navlinksul");
const slidercontainerid = document.getElementById("slidercontainerid");
let rightarrow = document.getElementById("right");
let leftarrow = document.getElementById("left");
let acc = document.getElementsByClassName("accordion");
let iterated;

hamburger.addEventListener("click", function navbaropenclose() {
  hamburger.classList.toggle("activenavbar");
  navlinksul.classList.toggle("activenavbar");
});

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

rightarrow.addEventListener("click", function myfunction() {
  slidercontainerid.style.transform = "translateX(629px)";
});

leftarrow.addEventListener("click", function myfunction() {
  slidercontainerid.style.transform = "translateX(-629px)";
});

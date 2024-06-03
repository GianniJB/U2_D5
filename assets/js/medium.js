window.addEventListener("scroll", function () {
  let header = document.getElementsByTagName("header")[0];
  let hero = document.getElementsByClassName("hero")[0];
  let firstButton = document.getElementsByTagName("button")[0];
  if (window.scrollY > 300) {
    header.style.backgroundColor = "white";
    hero.style.backgroundColor = "white";
    firstButton.style.backgroundColor = "#538724";
  } else {
    header.style.backgroundColor = "#ffc017";
    hero.style.backgroundColor = "#ffc017";
    firstButton.style.background = "black";
  }
});

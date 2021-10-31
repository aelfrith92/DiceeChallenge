function randomSide() {
  var side1 = Math.floor(Math.random() * 6) + 1;
  document.querySelectorAll("img")[0].setAttribute("src", "images/dice" +
    side1 + ".png");
  var side2 = Math.floor(Math.random() * 6) + 1;
  document.querySelectorAll("img")[1].setAttribute("src", "images/dice" +
    side2 + ".png");
  if (side1 === side2) {
    document.querySelector("h1").innerHTML =
      "Draw!";
  } else if (side1 > side2) {
    document.querySelector("h1").innerHTML =
      "🚩 Player 1 wins";
  } else {
    document.querySelector("h1").innerHTML =
      "Player 2 wins 🚩";
  }
}

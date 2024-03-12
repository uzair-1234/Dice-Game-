var randomNumber1 = Math.floor(Math.random()*6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";//dice image1 - dice image6.

var randomImageSource = "images/" + randomDiceImage;//images/dice-image1 -- images/dice-image6.

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random()*6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 +".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 win!";
}
else if(randomNumber2>randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 win!🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw";
}
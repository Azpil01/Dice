var randomNumber1 = Math.floor(Math.random() * 6) + 1; //Crea un número aleatorio entre 1 y 6

var randomDiceImage = "dice" + randomNumber1 + ".png"; // selecciona una imagen aleatoria con base al número anterior

var randomImageSource = "images/" + randomDiceImage; // crea la frase para obtener la imagene "images/dice1.png"

var image1 = document.querySelectorAll("img")[0]; //Variable creada para atrapar lo que hay en la posición 0 delñ query img

image1.setAttribute("src", randomImageSource); //asigina el nuevo atributo de "src" a randomImageSource

// esta es la opción directa
// document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "Player 1 wins";
}
else if (randomNumber1 == randomNumber2){
  document.querySelector("h1").textContent = "Draw";
}
else{
  document.querySelector("h1").textContent = "Player 2 wins";
}

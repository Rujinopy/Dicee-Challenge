function randomDice() {
    var diceA = Math.floor(Math.random() * 6) + 1 ;
    var diceB = Math.floor(Math.random() * 6) + 1;
    var randomDiceImage1 = "images/" + "dice" + diceA + ".png" 
    var randomDiceImage2 = "images/" + "dice" + diceB + ".png" 
    document.querySelector(".img1").setAttribute("src", randomDiceImage1);
    document.querySelector(".img2").setAttribute("src", randomDiceImage2);
    if (diceA > diceB) {
        document.querySelector("h1").innerHTML = "Player 1 WINS!";
    }
    if (diceA < diceB) {
        document.querySelector("h1").innerHTML = "Player 2 WINS!";
    }
    else if (diceA === diceB) {
        document.querySelector("h1").innerHTML = "DRAW!";
    }
}

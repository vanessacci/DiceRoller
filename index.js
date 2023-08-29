function rollDice(){
    var randomNumber1;
    var randomNumber2;
for (let i = 0; i < 10; i++){
    setTimeout(function(){
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    document.querySelector(".dice .img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
    document.querySelector(".dice .img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");
    if (i == 9){
        determineWinner(randomNumber1, randomNumber2)
    }
}, i*80);
}
}
function determineWinner(player1, player2){
    var header = document.querySelector("h1")
    if (player1 > player2){
        header.innerHTML = "Player 1 Wins!";
    } else if (player1 < player2){
        header.innerHTML = "Player 2 Wins!";
    } else {
        header.innerHTML = "~Draw~";
    }
}
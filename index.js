var player1Score= Math.floor(Math.random()*6+1);
var player2Score= Math.floor(Math.random()*6+1);
var pathForP1= ( "images/" + player1Score + ".png" );
var pathForP2= ( "images/" + player2Score + ".png" );
document.querySelector(".p1").setAttribute("src",pathForP1);
document.querySelector(".p2").setAttribute("src",pathForP2);

if(player1Score > player2Score) {
  document.querySelector("h1").innerHTML = "🎆 Player 1 Wins";
} else if(player1Score < player2Score) {
  document.querySelector("h1").innerHTML = "Player 2 Wins 🎆";
} else {
  document.querySelector("h1").innerHTML = "Tie";
}

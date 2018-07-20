//business logic
var player1 = "";
var player2 = "";
var throw dice = function(){
    return Math.floor(6 * Math.random())+1;
}
function Player(turn){
    this.roll = 0;
    this.tempscore = 0;
    this.totalscore = 0;
    this.turn = turn;
    this.playername;
}

Player.prototype.rollone = function(){
    if(this.roll === 1) {
        this.tempscore = 0;
        alert("Sorry" + this.playerName + " you rolled a 1! Your turn is over!")
    }else {
        this.tempscore += this.roll;
    }
}
Player.prototype.hold = function(){
    this.totalscore += this.tempscore;
    this.tempscore = 0;
    alert(this.playerName + " your turn is over! Please pass the mouse!");
}
Player.prototype.winnercheck = function(){
    if (this.totalscore>= 100){
        alert(this.playerName + "you are the winner!")
    }
    
}
Player.prototype.newGame = function(){
    this.roll = 0;
    this.tempscore = 0;
    this.totalscore = 0;
    this.playerName ="";
}
//User interface
$(document).ready(function(){
    $("button#start").click(function(event){
        player1 = newPlayer(true);
        player2 = newPlayer(false);
        $("player-console").show();
        $(".start-menu").hide();
    })
})
var player1 = $(".player1Name").val;
$(."player1Name").text(player1Name);

player1.playerName = player1;
player2.playerNmae = player2;


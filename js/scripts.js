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
    }
}
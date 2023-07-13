let ops=["ROCK", "PAPER", "SCISSOR"];
function getComputerChoice (){

    return ops[Math.floor(Math.random()*ops.length)];
}
let playerScore=0;
let pcScore=0;
function round(player,pc){
    if (player===pc){
        return `This round is a tie!You both chose ${player}`;
    }
    else if (player==="ROCK" && pc==="PAPER" || player==="PAPER" && pc==="SCISSOR" || player==="SCISSOR" && pc==="ROCK"){
        pcScore++;
        return `You lost this round! ${pc} beats ${player}`
    }
    else if (pc==="ROCK" && player==="PAPER" || pc==="PAPER" && player==="SCISSOR" || pc==="SCISSOR" && player==="ROCK"){
        playerScore++;
        return `You won this round! ${player} beats ${pc}`;
    }
    else{
        return "You enter an invalid option! Try again";
    }
}

function game (){
    const times=parseInt(prompt("De cuantas rondas queres que sea?"));
    for (let i=1;i<=times;i++){
        const playerSelection = prompt("Ingrese Rock, Paper o Scissor").toUpperCase();
        console.log(round(playerSelection,getComputerChoice()));
        console.log(`Round ${i}. Pc=${pcScore} -- Player=${playerScore}`); 
    }
    if (pcScore>playerScore){
        console.log("You lost the match!");
    }
    else if (playerScore>pcScore){
        console.log("You won the match!");
    }
    else{
        console.log("The match is a tie!")
    }
}
game()

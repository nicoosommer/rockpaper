let ops=["ROCK", "PAPER", "SCISSOR"];
function getComputerChoice (){

    return ops[Math.floor(Math.random()*ops.length)];
}

function round(player,pc){
    if (player===pc){
        return "It's a tie";
    }
    else if (player==="ROCK" && pc==="PAPER" || player==="PAPER" && pc==="SCISSOR" || player==="SCISSOR" && pc==="ROCK"){
        return `You lose! ${pc} beats ${player}`
    }
    else if (player==="ROCK"){
        return "You won"
    }
}
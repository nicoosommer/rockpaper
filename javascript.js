let ops=["ROCK", "PAPER", "SCISSOR"];
function getComputerChoice (){

    return ops[Math.floor(Math.random()*ops.length)];
}
let playerScore=0;
let pcScore=0;
const mostrar1=document.querySelector(".pcPuntos");
const mostrar2=document.querySelector(".playerPuntos");
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

function ganador(){
    if (pcScore<5 && playerScore<5){    
        mostrar1.textContent=pcScore;
        mostrar2.textContent=playerScore;
    }
    else{
        if(playerScore>pcScore){
            div.textContent=`Con un resultado de ${playerScore} a ${pcScore}, usted es el ganador`;
        }
        else{
            div.textContent=`Con un resultado de ${pcScore} a ${playerScore}, la maquina es la ganadora`;
        }
        
    }
}

const div=document.querySelector(".resultado");

const rock=document.getElementById("rock");
rock.addEventListener("click",()=>{
    div.textContent=round("ROCK",getComputerChoice());
    // mostrar1.textContent=pcScore;
    // mostrar2.textContent=playerScore;
    ganador()
})

const paper=document.getElementById("paper");
paper.addEventListener("click",()=>{
    div.textContent=round("PAPER",getComputerChoice());
   ganador()
})

const scissor=document.getElementById("scissor");
scissor.addEventListener("click",()=>{
    div.textContent=round("SCISSOR",getComputerChoice());
    // mostrar1.textContent=pcScore;
    // mostrar2.textContent=playerScore;
    ganador()
})
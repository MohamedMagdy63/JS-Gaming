let userScore=0
let compScore=0
var userScore_span=document.getElementById("userScore")
const compScore_span=document.getElementById("compScore")
const scoreBoard_div=document.querySelector(".scoreBoard")
const result_div    =document.querySelector(".result")
const rock_div      =document.getElementById("rock")
const paper_div     =document.getElementById("paper")
const scissor_div   =document.getElementById("scissor")

main()
function main(){
    rock_div.addEventListener('click',function(){
        game("r")
    })
    
    paper_div.addEventListener('click',function(){
        game("p")
    })
    
    scissor_div.addEventListener('click',function(){
        game("s")
    })    
}
function game(userChoice){
    let compChoice=computerChoice()
    switch(userChoice + compChoice){
        // user win
        case "pr":
        case "rs":
        case "sp":
            wins(userChoice,compChoice)
            break;
        case "rp":
        case "sr":
        case "ps":
            lose(userChoice,compChoice)
            break;
        case "pp":
        case "rr":
        case "ss":
            draw(userChoice,compChoice)
    }
    
}
function computerChoice(){
    const choicesArray=['r','p','s']
    const randomVar=Math.floor(Math.random()*3)
    return choicesArray[randomVar]
}
function convertToWord(letter){
    if (letter==="r") return "Rock"
    if (letter==="p") return "Paper"
    return "scissor"
}
function wins(WinUser,winComp){
    userScore++
    userScore_span.innerHTML=userScore
    compScore_span.innerHTML=compScore
    result_div.innerHTML=convertToWord(WinUser) +" "+"Beat (winning)"+" "+ convertToWord(winComp) 
}
function lose(losingUser,losingComp){
    compScore++
    userScore_span.innerHTML=userScore
    compScore_span.innerHTML=compScore
    result_div.innerHTML=convertToWord(losingUser) +" "+"Beat (losing)"+" "+ convertToWord(losingComp) 

}
function draw(drawUser,drawComp){
    result_div.innerHTML="Draw with the computer choice"+" "+convertToWord(drawComp) 
}
function remove(){
    compScore=0
    userScore=0
    userScore_span.innerHTML=userScore
    compScore_span.innerHTML=compScore
}
remove()
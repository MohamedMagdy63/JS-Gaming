let gridDisplay =document.getElementById("gridId")
function createSquare(){
    for(let i=0; i<=9 ;i++){
        let square =document.createElement("div")
        square.setAttribute("class","squareClass")
        square.setAttribute("id",i)
        square.setAttribute("data-id",i)
        gridDisplay.append(square)
    }
    
}
createSquare()

let gameRes =document.getElementById('resId')
let sqClass=document.querySelectorAll('.squareClass')
let monster =document.querySelectorAll(".monster")
function randomMove(){
    sqClass.forEach(element => {
        element.classList.remove("monster")
    });

    let rand =sqClass[Math.floor(Math.random()*9)]
    rand.classList.add("monster")
    rand.addEventListener("click",catchMonster())
}
function movMonster(){
    let mover =null
    mover=setInterval(randomMove,1000)
}
function catchMonster(){
    console.log("catch")
}
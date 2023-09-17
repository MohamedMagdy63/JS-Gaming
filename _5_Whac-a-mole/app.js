let squares =document.querySelectorAll('.square')
let mole =document.querySelectorAll('.mole')
let score =document.getElementById('score')
let time =document.getElementById('time')

let result =0
let hitPosition
let currentTIme=60
let timerId = null

function randomSelect(){
    squares.forEach(square=>{
        square.classList.remove('mole')
    })

    let randomSquare =squares[Math.floor(Math.random()*9)]
    randomSquare.classList.add('mole')
    hitPosition=randomSquare.id
}

squares.forEach(square =>{
    square.addEventListener('mousedown',()=>{
        if(square.id=hitPosition){
            result++
            score.innerHTML=result
            hitPosition=null
        }
    })
})
function movMole(){
    timerId =setInterval(randomSelect,500)
}
movMole()

function countDown(){
    currentTIme--
    time.innerHTML=currentTIme

    if(currentTIme==0){
        clearInterval(currentTimeId)
        clearInterval(timerId)
        alert("Game Over your final score is ="+result)
    }
}
let currentTimeId =setInterval(countDown,1000)
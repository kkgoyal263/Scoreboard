let num1El = document.getElementById("num1-el")
let num2El = document.getElementById("num2-el")

let count = 0
function add1ToHome(){
    count += 1
    num1El.textContent = count
}
function add2ToHome(){
    count += 2
    num1El.textContent = count
}
function add3ToHome(){
    count += 3
    num1El.textContent = count
}
function add1ToGuest(){
    count += 1
    num2El.textContent = count
}
function add2ToGuest(){
    count += 2
    num2El.textContent = count
}
function add3ToGuest(){
    count += 3
    num2El.textContent = count
}
function resetScores(){
    count = 0
    num1El.textContent = 0
    num2El.textContent = 0
}

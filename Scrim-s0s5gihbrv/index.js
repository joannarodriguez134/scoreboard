let homeNum = 12
let homeEl = document.getElementById("homeEl")

let guestNum = 5
let guestEl = document.getElementById("guestEl")

function homeAddOne() {
    homeNum += 1
    homeEl.textContent = homeNum
}

function homeAddTwo() {
    homeNum += 2
    homeEl.textContent = homeNum
}

function homeAddThree() {
    homeNum += 3
    homeEl.textContent = homeNum
}

function guestAddOne() {
   guestNum += 1
    guestEl.textContent = guestNum 
}

function guestAddTwo() {
   guestNum += 2
    guestEl.textContent = guestNum 
}

function guestAddThree() {
   guestNum += 3
    guestEl.textContent = guestNum 
}
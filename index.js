// let incOne=document.getElementById("btn-by-one")
let homeCh=document.getElementById("home-ch")
let digitH=0;

function increOne(){
    digitH+=1
    homeCh.textContent=digitH
}
function increTwo(){
    digitH+=2
    homeCh.textContent=digitH
}
function increThr(){
    digitH+=3
    homeCh.textContent=digitH
}

let guestCh=document.getElementById("guest-ch")
let digitHH=0;

function increeOne(){
    digitHH+=1
    guestCh.textContent=digitHH
}
function increeTwo(){
    digitHH+=2
    guestCh.textContent=digitHH
}
function increeThr(){
    digitHH+=3
    guestCh.textContent=digitHH
}
function restart(){
    guestCh.textContent=0
    homeCh.textContent=0
    digitH=0
    digitHH=0
}
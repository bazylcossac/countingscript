let number = document.getElementById("number")
let number2 = document.getElementById("number2")
let score = 0
let score2 = 0

function add1(){
    score = score + 1
    number.innerHTML = score   
    
}
function add3(){
    score = score + 3
    number.innerHTML = score
    
}
function add5(){
    score = score + 5
    number.innerHTML = score
    
}function add1s(){
    score2 +=1
    number2.innerHTML = score2
      
}
function add3s(){
    score2 += 3
    number2.innerHTML = score2
    
}
function add5s(){
    score2 +=5
    number2.innerHTML = score2
    
}
function resets(){
    score = 0
    score2 = 0
    number2.innerHTML = score2
    number.innerHTML = score
}


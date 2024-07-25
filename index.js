let countH = 0
let countG = 0
let sBox = document.getElementById("sbox")
let fBox = document.getElementById("fbox")

function fbtn(){
 countH += 1
 fBox.textContent = countH   
}

function sbtn(){
    countH += 2
    fBox.textContent = countH
}

function tbtn(){
    countH += 3
    fBox.textContent = countH
}

function ftbtn(){
    countG += 1
    sBox.textContent = countG
}
function fivbtn(){
    countG += 2
    sBox.textContent = countG
}

function stbtn(){
    countG += 3
    sBox.textContent = countG
}

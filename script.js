
// Id - players:

const playerBlue = document.getElementById('playerBlue')
const playerWhite = document.getElementById('playerWhite');
const playerOrange = document.getElementById('playerOrange');
const playerYellow = document.getElementById('playerYellow');
const playerGreen = document.getElementById('playerGreen');
const playerRed = document.getElementById('playerRed');


const bluePlayerRow = document.getElementById('bluePlayerRow');
const whitePlayerRow = document.getElementById('whitePlayerRow');
const orangePlayerRow = document.getElementById('orangePlayerRow');
const yellowPlayerRow = document.getElementById('yellowPlayerRow');
const greenPlayerRow = document.getElementById('greenPlayerRow');
const redPlayerRow = document.getElementById('redPlayerRow');


// Display the rows:

playerBlue.onclick = ()=>{
    bluePlayerRow.style.display = 'block';
};

playerWhite.onclick = ()=>{
    whitePlayerRow.style.display = 'block';
};

playerOrange.onclick = ()=>{
    orangePlayerRow.style.display = 'block';
};

playerYellow.onclick = ()=>{
    yellowPlayerRow.style.display = 'block';
};

playerGreen.onclick = ()=>{
    greenPlayerRow.style.display = 'block';
};

playerRed.onclick = ()=>{
    redPlayerRow.style.display = 'block';
};


// Add an event listener for the change event
const radioButtons = document.querySelectorAll('input[name="phase"]');
for(const radioButton of radioButtons){
    radioButton.addEventListener('change', showSelected);
}        

// Show only selected phase

function showSelected(e) {
    const radioA = document.getElementById("radio-label-phasea"); 
    const radioB = document.getElementById("radio-label-phaseb"); 
    const radioC = document.getElementById("radio-label-phasec"); 

    const columnA = document.getElementsByClassName("a-column");
    const columnB = document.getElementsByClassName("b-column");
    const columnC = document.getElementsByClassName("c-column");
    const walls = document.getElementsByClassName("wall");
    if (this.value === "a") {
       for (let i = 0; i < columnA.length; i++) {
            columnA[i].classList.replace("hide","column-a");
            columnB[i].classList.replace("column-b","hide");
            columnC[i].classList.replace("column-c","hide");
            walls[i].classList.replace("hide","show")
       }
       this.parentElement.classList.add("checked-radio");
       radioB.classList.remove("checked-radio");
       radioC.classList.remove("checked-radio");
    } else if (this.value === "b") {
        for (let i = 0; i < columnA.length; i++) {
            columnA[i].classList.replace("column-a","hide");
            columnB[i].classList.replace("hide","column-b");
            columnC[i].classList.replace("column-c","hide");
            walls[i].classList.replace("hide","show")
       }
       this.parentElement.classList.add("checked-radio");
       radioA.classList.remove("checked-radio");
       radioC.classList.remove("checked-radio");
    } else {
        for (let i = 0; i < columnA.length; i++) {
            columnA[i].classList.replace("column-a","hide");
            columnB[i].classList.replace("column-b","hide");
            columnC[i].classList.replace("hide","column-c");
            walls[i].classList.replace("hide","show")
       }
       this.parentElement.classList.add("checked-radio");
       radioB.classList.remove("checked-radio");
       radioA.classList.remove("checked-radio");
    } 
}
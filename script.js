
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


//Radio button functionality

// add an event listener for the change event
const radioButtons = document.querySelectorAll('input[name="phase"]');
for(const radioButton of radioButtons){
    radioButton.addEventListener('change', showSelected);
}        

function showSelected(e) {
    const columnA = document.getElementsByClassName("a-column");
    const columnB = document.getElementsByClassName("b-column");
    const columnC = document.getElementsByClassName("c-column");
    if (this.checked && this.value === "a") {
       for (let i = 0; i < columnA.length; i++) {
            columnA[i].classList.replace("hide","column-a")
            columnB[i].classList.replace("column-b","hide")
            columnC[i].classList.replace("column-c","hide")
       }
    } else if (this.checked && this.value === "b") {
        for (let i = 0; i < columnA.length; i++) {
            columnA[i].classList.replace("column-a","hide")
            columnB[i].classList.replace("hide","column-b")
            columnC[i].classList.replace("column-c","hide")
       }
    } else {
        for (let i = 0; i < columnA.length; i++) {
            columnA[i].classList.replace("column-a","hide")
            columnB[i].classList.replace("column-b","hide")
            columnC[i].classList.replace("hide","column-c")
       }
    }
}
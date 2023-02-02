
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
    import ('./playerblue.js');
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
    if (this.checked && this.value === "a") {
       const columnA = document.getElementsByClassName("column-a");
       columnA.classList.add("show");
        console.log("It worked with a")
    } else if (this.checked && this.value === "b") {
        console.log("It worked with b")
    } else {
        console.log("It worked with c")
    }
}
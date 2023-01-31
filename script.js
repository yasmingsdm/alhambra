
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

//NEED to fix layout
playerBlue.onclick = ()=>{
    bluePlayerRow.style.display = 'block';
    //import ('./playerblue'); //need to fix it
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
// Id-points player blue:
const blueABlue = document.getElementById('blueA-blue');
const redABlue= document.getElementById('redA-blue');
const brownABlue= document.getElementById('brownA-blue');
const whiteABlue= document.getElementById('whiteA-blue');
const greenABlue= document.getElementById('greenA-blue');
const purpleABlue= document.getElementById('purpleA-blue');

const blueB1Blue = document.getElementById('blueB1-blue');
const redB1Blue = document.getElementById('redB1-blue');
const brownB1Blue= document.getElementById('brownB1-blue');
const whiteB1Blue= document.getElementById('whiteB1-blue');
const greenB1Blue= document.getElementById('greenB1-blue');
const purpleB1Blue= document.getElementById('purpleB1-blue');

const totalBlue= document.getElementById('totalBlue');

// Points player blue:
let bluePoint = 0 
 blueABlue.onclick = ()=>{
    bluePoint+=1;
    totalBlue.innerHTML = bluePoint;
}

redABlue.onclick = ()=>{
    bluePoint+=2;
    totalBlue.innerHTML = bluePoint;
}

brownABlue.onclick = ()=>{
    bluePoint+=3;
    totalBlue.innerHTML = bluePoint;
}

whiteABlue.onclick = ()=>{
    bluePoint+=4;
    totalBlue.innerHTML = bluePoint;
}

greenABlue.onclick = ()=>{
    bluePoint+=5;
    totalBlue.innerHTML = bluePoint;
}

purpleABlue.onclick = ()=>{
    bluePoint+=6;
    totalBlue.innerHTML = bluePoint;
}

blueB1Blue.onclick = ()=>{
    bluePoint+=8;
    totalBlue.innerHTML = bluePoint;
}

redB1Blue.onclick = ()=>{
    bluePoint+=9;
    totalBlue.innerHTML = bluePoint;
}

brownB1Blue.onclick = ()=>{
    bluePoint+=10;
    totalBlue.innerHTML = bluePoint;
}

whiteB1Blue.onclick = ()=>{
    bluePoint+=11;
    totalBlue.innerHTML = bluePoint;
}

greenB1Blue.onclick = ()=>{
    bluePoint+=12;
    totalBlue.innerHTML = bluePoint;
}

purpleB1Blue.onclick = ()=>{
    bluePoint+=13;
    totalBlue.innerHTML = bluePoint;
}

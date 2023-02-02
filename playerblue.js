//Id columns:
// const columnA = document.getElementsByClassName('column-a');
// const columnB1 = document.getElementsByClassName('column-b1');
// const columnB2 = document.getElementsByClassName('column-b2');
// const columnC1 = document.getElementsByClassName('column-c1');
// const columnC2 = document.getElementsByClassName('column-c2');
// const columnC3 = document.getElementsByClassName('column-c3');


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

const blueB2Blue = document.getElementById('blueB2-blue');
const redB2Blue = document.getElementById('redB2-blue');
const brownB2Blue= document.getElementById('brownB2-blue');
const whiteB2Blue= document.getElementById('whiteB2-blue');
const greenB2Blue= document.getElementById('greenB2-blue');
const purpleB2Blue= document.getElementById('purpleB2-blue');

const blueC1Blue = document.getElementById('blueC1-blue');
const redC1Blue = document.getElementById('redC1-blue');
const brownC1Blue= document.getElementById('brownC1-blue');
const whiteC1Blue= document.getElementById('whiteC1-blue');
const greenC1Blue= document.getElementById('greenC1-blue');
const purpleC1Blue= document.getElementById('purpleC1-blue');

const blueC2Blue = document.getElementById('blueC2-blue');
const redC2Blue = document.getElementById('redC2-blue');
const brownC2Blue= document.getElementById('brownC2-blue');
const whiteC2Blue= document.getElementById('whiteC2-blue');
const greenC2Blue= document.getElementById('greenC2-blue');
const purpleC2Blue= document.getElementById('purpleC2-blue');

const blueC3Blue = document.getElementById('blueC3-blue');
const redC3Blue = document.getElementById('redC3-blue');
const brownC3Blue= document.getElementById('brownC3-blue');
const whiteC3Blue= document.getElementById('whiteC3-blue');
const greenC3Blue= document.getElementById('greenC3-blue');
const purpleC3Blue= document.getElementById('purpleC3-blue');

const totalBlue= document.getElementById('totalBlue');


// Functions points for blue player:

const points= value=>{
    bluePoint+=value;
    totalBlue.innerHTML = bluePoint;
}

// Points player blue:

let bluePoint = 0;

blueABlue.onclick = points(1);
redABlue.onclick = points(2);
brownABlue.onclick = points(3);
whiteABlue.onclick = points(4);
greenABlue.onclick = points(5);
purpleABlue.onclick = points(6);

blueB1Blue.onclick = points(8);
redB1Blue.onclick = points(9); 
brownB1Blue.onclick = points(10);
whiteB1Blue.onclick = points(11);
greenB1Blue.onclick = points(12);
purpleB1Blue.onclick = points(13);

blueB2Blue.onclick = points(1);
redB2Blue.onclick = points(2);
brownB2Blue.onclick = points(3);
whiteB2Blue.onclick = points(4);
greenB2Blue.onclick = points(5);
purpleB2Blue.onclick = points(6);

blueC1Blue.onclick = points(16);
redC1Blue.onclick = points(17); 
brownC1Blue.onclick = points(18);
whiteC1Blue.onclick = points(19);
greenC1Blue.onclick = points(20);
purpleC1Blue.onclick = points(21);

blueC2Blue.onclick = points(8);
redC2Blue.onclick = points(9); 
brownC2Blue.onclick = points(10);
whiteC2Blue.onclick = points(11);
greenC2Blue.onclick = points(12);
purpleC2Blue.onclick = points(13);

blueC3Blue.onclick = points(1);
redC3Blue.onclick = points(2);
brownC3Blue.onclick = points(3);
whiteC3Blue.onclick = points(4);
greenC3Blue.onclick = points(5);
purpleC3Blue.onclick = points(6);
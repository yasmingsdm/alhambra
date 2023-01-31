//Id columns:
const columnA = document.getElementsByClassName('column-a');
const columnB1 = document.getElementsByClassName('column-b1');
const columnB2 = document.getElementsByClassName('column-b2');
const columnC1 = document.getElementsByClassName('column-c1');
const columnC2 = document.getElementsByClassName('column-c2');
const columnC3 = document.getElementsByClassName('column-c3');


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

const blue1= ()=>{
    bluePoint+=1;
    totalBlue.innerHTML = bluePoint;
}
const red2 = ()=>{
    bluePoint+=2;
    totalBlue.innerHTML = bluePoint;
}

const brown3= ()=>{
    bluePoint+=3;
    totalBlue.innerHTML = bluePoint;
}

const white4 = ()=>{
    bluePoint+=4;
    totalBlue.innerHTML = bluePoint;
}

const green5 = ()=>{
    bluePoint+=5;
    totalBlue.innerHTML = bluePoint;
}

const blue8 = ()=>{
    bluePoint+=8;
    totalBlue.innerHTML = bluePoint;
}

const red9 = ()=>{
    bluePoint+=9;
    totalBlue.innerHTML = bluePoint;
}

const brown10 = ()=>{
    bluePoint+=10;
    totalBlue.innerHTML = bluePoint;
}

const white11 = ()=>{
    bluePoint+=11;
    totalBlue.innerHTML = bluePoint;
}

const green12 = ()=>{
    bluePoint+=12;
    totalBlue.innerHTML = bluePoint;
}

const blue16 = ()=>{
    bluePoint+=16;
    totalBlue.innerHTML = bluePoint;
}

const red17 = ()=>{
    bluePoint+=17;
    totalBlue.innerHTML = bluePoint;
}

const brown18 = ()=>{
    bluePoint+=18;
    totalBlue.innerHTML = bluePoint;
}

const white19 = ()=>{
    bluePoint+=19;
    totalBlue.innerHTML = bluePoint;
}

const green20 = ()=>{
    bluePoint+=20;
    totalBlue.innerHTML = bluePoint;
}

// Points player blue:

let bluePoint = 0;

blueABlue.onclick = blue1;
redABlue.onclick = red2;
brownABlue.onclick = brown3;
whiteABlue.onclick = white4;
greenABlue.onclick = green5;
purpleABlue.onclick = ()=>{
    bluePoint+=6;
    totalBlue.innerHTML = bluePoint;
    for (i=0; i<columnA.length;i++){
        columnA[i].style.display ='none';
    }
};

blueB1Blue.onclick = blue8;
redB1Blue.onclick = red9; 
brownB1Blue.onclick = brown10;
whiteB1Blue.onclick = white11;
greenB1Blue.onclick = green12;
purpleB1Blue.onclick  = ()=>{
    bluePoint+=13;
    totalBlue.innerHTML = bluePoint;
    for (i=0; i<columnB1.length;i++){
        columnB1[i].style.display ='none';
    }
};

blueB2Blue.onclick = blue1;
redB2Blue.onclick = red2;
brownB2Blue.onclick = brown3;
whiteB2Blue.onclick = white4;
greenB2Blue.onclick = green5;
purpleB2Blue.onclick = ()=>{
    bluePoint+=6;
    totalBlue.innerHTML = bluePoint;
    for (i=0; i<columnA.length;i++){
        columnB2[i].style.display ='none';
    }
};

blueC1Blue.onclick = blue16;
redC1Blue.onclick = red17; 
brownC1Blue.onclick = brown18;
whiteC1Blue.onclick = white19;
greenC1Blue.onclick = green20;
purpleC1Blue.onclick  = ()=>{
    bluePoint+=20;
    totalBlue.innerHTML = bluePoint;
    for (i=0; i<columnB1.length;i++){
        columnC1[i].style.display ='none';
    }
};

blueC2Blue.onclick = blue8;
redC2Blue.onclick = red9; 
brownC2Blue.onclick = brown10;
whiteC2Blue.onclick = white11;
greenC2Blue.onclick = green12;
purpleC2Blue.onclick  = ()=>{
    bluePoint+=13;
    totalBlue.innerHTML = bluePoint;
    for (i=0; i<columnB1.length;i++){
        columnC2[i].style.display ='none';
    }
};

blueC3Blue.onclick = blue1;
redC3Blue.onclick = red2;
brownC3Blue.onclick = brown3;
whiteC3Blue.onclick = white4;
greenC3Blue.onclick = green5;
purpleC3Blue.onclick = ()=>{
    bluePoint+=6;
    totalBlue.innerHTML = bluePoint;
    for (i=0; i<columnA.length;i++){
        columnC3[i].style.display ='none';
    }
};
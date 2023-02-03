// Functions points for blue player:

const points= (value, player)=>{
    switch (player) {
        case blue:
            player=bluePoint;
            total=totalBlue;
            break;
        case white:
            player = whitePoint;
            total = totalWhite;
            break;
        default:
            player=redPoint;
            total=totalRed;    
    }
    player+=value;
    total.innerHTML = player;
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
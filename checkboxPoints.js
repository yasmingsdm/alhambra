const playerList = ["blue", "white", "orange", "yellow", "green", "red"];
const pointsColors = ["blue", "red", "brown", "white" , "green" , "purple"];
const bluePoints = {
    ablue: 0,
    ared: 0,
    abrown: 0,
    awhite: 0,
    agreen: 0,
    apurple: 0,
    b1blue: 0,
    b1red: 0,
    b1brown: 0,
    b1white: 0,
    b1green: 0,
    b1purple: 0,
    b2blue: 0,
    b2red: 0,
    b2brown: 0,
    b2white: 0,
    b2green: 0,
    b2purple: 0,
    c1blue: 0,
    c1red: 0,
    c1brown: 0,
    c1white: 0,
    c1green: 0,
    c1purple: 0,
    c2blue: 0,
    c2red: 0,
    c2brown: 0,
    c2white: 0,
    c2green: 0,
    c2purple: 0,
    c3blue: 0,
    c3red: 0,
    c3brown: 0,
    c3white: 0,
    c3green: 0,
    c3purple: 0,
};

const whitePoints = {
    ablue: 0,
    ared: 0,
    abrown: 0,
    awhite: 0,
    agreen: 0,
    apurple: 0,
    b1blue: 0,
    b1red: 0,
    b1brown: 0,
    b1white: 0,
    b1green: 0,
    b1purple: 0,
    b2blue: 0,
    b2red: 0,
    b2brown: 0,
    b2white: 0,
    b2green: 0,
    b2purple: 0,
    c1blue: 0,
    c1red: 0,
    c1brown: 0,
    c1white: 0,
    c1green: 0,
    c1purple: 0,
    c2blue: 0,
    c2red: 0,
    c2brown: 0,
    c2white: 0,
    c2green: 0,
    c2purple: 0,
    c3blue: 0,
    c3red: 0,
    c3brown: 0,
    c3white: 0,
    c3green: 0,
    c3purple: 0,
};

const orangePoints = {
    ablue: 0,
    ared: 0,
    abrown: 0,
    awhite: 0,
    agreen: 0,
    apurple: 0,
    b1blue: 0,
    b1red: 0,
    b1brown: 0,
    b1white: 0,
    b1green: 0,
    b1purple: 0,
    b2blue: 0,
    b2red: 0,
    b2brown: 0,
    b2white: 0,
    b2green: 0,
    b2purple: 0,
    c1blue: 0,
    c1red: 0,
    c1brown: 0,
    c1white: 0,
    c1green: 0,
    c1purple: 0,
    c2blue: 0,
    c2red: 0,
    c2brown: 0,
    c2white: 0,
    c2green: 0,
    c2purple: 0,
    c3blue: 0,
    c3red: 0,
    c3brown: 0,
    c3white: 0,
    c3green: 0,
    c3purple: 0,
};

const yellowPoints = {
    ablue: 0,
    ared: 0,
    abrown: 0,
    awhite: 0,
    agreen: 0,
    apurple: 0,
    b1blue: 0,
    b1red: 0,
    b1brown: 0,
    b1white: 0,
    b1green: 0,
    b1purple: 0,
    b2blue: 0,
    b2red: 0,
    b2brown: 0,
    b2white: 0,
    b2green: 0,
    b2purple: 0,
    c1blue: 0,
    c1red: 0,
    c1brown: 0,
    c1white: 0,
    c1green: 0,
    c1purple: 0,
    c2blue: 0,
    c2red: 0,
    c2brown: 0,
    c2white: 0,
    c2green: 0,
    c2purple: 0,
    c3blue: 0,
    c3red: 0,
    c3brown: 0,
    c3white: 0,
    c3green: 0,
    c3purple: 0,
};

const greenPoints = {
    ablue: 0,
    ared: 0,
    abrown: 0,
    awhite: 0,
    agreen: 0,
    apurple: 0,
    b1blue: 0,
    b1red: 0,
    b1brown: 0,
    b1white: 0,
    b1green: 0,
    b1purple: 0,
    b2blue: 0,
    b2red: 0,
    b2brown: 0,
    b2white: 0,
    b2green: 0,
    b2purple: 0,
    c1blue: 0,
    c1red: 0,
    c1brown: 0,
    c1white: 0,
    c1green: 0,
    c1purple: 0,
    c2blue: 0,
    c2red: 0,
    c2brown: 0,
    c2white: 0,
    c2green: 0,
    c2purple: 0,
    c3blue: 0,
    c3red: 0,
    c3brown: 0,
    c3white: 0,
    c3green: 0,
    c3purple: 0,
};

const redPoints = {
    ablue: 0,
    ared: 0,
    abrown: 0,
    awhite: 0,
    agreen: 0,
    apurple: 0,
    b1blue: 0,
    b1red: 0,
    b1brown: 0,
    b1white: 0,
    b1green: 0,
    b1purple: 0,
    b2blue: 0,
    b2red: 0,
    b2brown: 0,
    b2white: 0,
    b2green: 0,
    b2purple: 0,
    c1blue: 0,
    c1red: 0,
    c1brown: 0,
    c1white: 0,
    c1green: 0,
    c1purple: 0,
    c2blue: 0,
    c2red: 0,
    c2brown: 0,
    c2white: 0,
    c2green: 0,
    c2purple: 0,
    c3blue: 0,
    c3red: 0,
    c3brown: 0,
    c3white: 0,
    c3green: 0,
    c3purple: 0,
};


// Sum of the points of one player

let totalPoints = function(points) {
    let total = 0;
    for (let key in points) {
        total += points[key];
    };
    return total;
}

// EventListener for all points input

const radioButtonsABlue = document.querySelectorAll(".points input");
for(const radioButtonABlue of radioButtonsABlue){
    radioButtonABlue.addEventListener("change", showSelected);
}

// Remove points
let removePreviousPoints = function (color,name) {
    const otherPlayers = playerList.filter(item => item !== color); 
        for (let i = 0 ; i < otherPlayers.length ; i++) {
            let selector = otherPlayers[i] + "Points";
            eval(selector)[name] = 0;
            let idSelector = "total" + otherPlayers[i];
            document.getElementById(idSelector).innerHTML = totalPoints(eval(selector));
        }
        console.log(bluePoints);
        console.log(whitePoints);
}

// Assign points
function showSelected(e) {
    console.log(e)
    switch(e.srcElement.parentElement.parentElement.parentElement.parentElement.id) {
        case "bluePlayerRow":
            bluePoints[e.srcElement.name] = Number(e.target.defaultValue);
            removePreviousPoints("blue",e.srcElement.name);
            document.getElementById("totalblue").innerHTML = totalPoints(bluePoints);
            break;
        case "whitePlayerRow":
            whitePoints[e.srcElement.name] = Number(e.target.defaultValue);
            removePreviousPoints("white",e.srcElement.name);
            document.getElementById("totalwhite").innerHTML = totalPoints(whitePoints);
            break;
        case "orangePlayerRow":
            orangePoints[e.srcElement.name] = Number(e.target.defaultValue);
            removePreviousPoints("orange",e.srcElement.name);
            document.getElementById("totalorange").innerHTML = totalPoints(orangePoints);
            break;
        case "yellowPlayerRow":
            yellowPoints[e.srcElement.name] = Number(e.target.defaultValue);
            removePreviousPoints("yellow",e.srcElement.name);
            document.getElementById("totalyellow").innerHTML = totalPoints(yellowPoints);
            break;
        case "greenPlayerRow":
            greenPoints[e.srcElement.name] = Number(e.target.defaultValue);
            removePreviousPoints("green",e.srcElement.name);
            document.getElementById("totalgreen").innerHTML = totalPoints(greenPoints);
            break;
        case "redPlayerRow":
            redPoints[e.srcElement.name] = Number(e.target.defaultValue);
            removePreviousPoints("red",e.srcElement.name);
            document.getElementById("totalred").innerHTML = totalPoints(redPoints);
            break;
        default:
            alert("Something went terribly wrong")
    }
}

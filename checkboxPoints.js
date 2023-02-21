const playerList = ["blue", "white", "orange", "yellow", "green", "red"];

const bluePoints = {
    ablue: {
        status: false,
        value: 0
    },
    ared: {
        status: false,
        value: 0
    },
    abrown: {
        status: false,
        value: 0
    },
    awhite: {
        status: false,
        value: 0
    },
    agreen: {
        status: false,
        value: 0
    },
    apurple: {
        status: false,
        value: 0
    },
    b1blue: {
        status: false,
        value: 0
    },
    b1red: {
        status: false,
        value: 0
    },
    b1brown: {
        status: false,
        value: 0
    },
    b1white: {
        status: false,
        value: 0
    },
    b1green: {
        status: false,
        value: 0
    },
    b1purple: {
        status: false,
        value: 0
    },
    b2blue: {
        status: false,
        value: 0
    },
    b2red: {
        status: false,
        value: 0
    },
    b2brown: {
        status: false,
        value: 0
    },
    b2white: {
        status: false,
        value: 0
    },
    b2green: {
        status: false,
        value: 0
    },
    b2purple: {
        status: false,
        value: 0
    },
    c1blue: {
        status: false,
        value: 0
    },
    c1red: {
        status: false,
        value: 0
    },
    c1brown: {
        status: false,
        value: 0
    },
    c1white: {
        status: false,
        value: 0
    },
    c1green: {
        status: false,
        value: 0
    },
    c1purple: {
        status: false,
        value: 0
    },
    c2blue: {
        status: false,
        value: 0
    },
    c2red: {
        status: false,
        value: 0
    },
    c2brown: {
        status: false,
        value: 0
    },
    c2white: {
        status: false,
        value: 0
    },
    c2green: {
        status: false,
        value: 0
    },
    c2purple: {
        status: false,
        value: 0
    },
    c3blue: {
        status: false,
        value: 0
    },
    c3red: {
        status: false,
        value: 0
    },
    c3brown: {
        status: false,
        value: 0
    },
    c3white: {
        status: false,
        value: 0
    },
    c3green: {
        status: false,
        value: 0
    },
    c3purple: {
        status: false,
        value: 0
    },
    wall:{
        status: false,
        value: 0
    },
};

const whitePoints = {
    ablue: {
        status: false,
        value: 0,
    },
    ared: {
        status: false,
        value: 0,
    },
    abrown: {
        status: false,
        value: 0,
    },
    awhite: {
        status: false,
        value: 0,
    },
    agreen: {
        status: false,
        value: 0,
    },
    apurple: {
        status: false,
        value: 0,
    },
    b1blue: {
        status: false,
        value: 0,
    },
    b1red: {
        status: false,
        value: 0,
    },
    b1brown: {
        status: false,
        value: 0,
    },
    b1white: {
        status: false,
        value: 0,
    },
    b1green: {
        status: false,
        value: 0,
    },
    b1purple: {
        status: false,
        value: 0,
    },
    b2blue: {
        status: false,
        value: 0,
    },
    b2red: {
        status: false,
        value: 0,
    },
    b2brown: {
        status: false,
        value: 0,
    },
    b2white: {
        status: false,
        value: 0,
    },
    b2green: {
        status: false,
        value: 0,
    },
    b2purple: {
        status: false,
        value: 0,
    },
    c1blue: {
        status: false,
        value: 0,
    },
    c1red: {
        status: false,
        value: 0,
    },
    c1brown: {
        status: false,
        value: 0,
    },
    c1white: {
        status: false,
        value: 0,
    },
    c1green: {
        status: false,
        value: 0,
    },
    c1purple: {
        status: false,
        value: 0,
    },
    c2blue: {
        status: false,
        value: 0,
    },
    c2red: {
        status: false,
        value: 0,
    },
    c2brown: {
        status: false,
        value: 0,
    },
    c2white: {
        status: false,
        value: 0,
    },
    c2green: {
        status: false,
        value: 0,
    },
    c2purple: {
        status: false,
        value: 0,
    },
    c3blue: {
        status: false,
        value: 0,
    },
    c3red: {
        status: false,
        value: 0,
    },
    c3brown: {
        status: false,
        value: 0,
    },
    c3white: {
        status: false,
        value: 0,
    },
    c3green: {
        status: false,
        value: 0,
    },
    c3purple: {
        status: false,
        value: 0,
    },
    wall: {
        status: false,
        value: 0,
    },
};

const orangePoints = {
    ablue: {
        status: false,
        value: 0
    },
    ared: {
        status: false,
        value: 0
    },
    abrown: {
        status: false,
        value: 0
    },
    awhite: {
        status: false,
        value: 0
    },
    agreen: {
        status: false,
        value: 0
    },
    apurple: {
        status: false,
        value: 0
    },
    b1blue: {
        status: false,
        value: 0
    },
    b1red: {
        status: false,
        value: 0
    },
    b1brown: {
        status: false,
        value: 0
    },
    b1white: {
        status: false,
        value: 0
    },
    b1green: {
        status: false,
        value: 0
    },
    b1purple: {
        status: false,
        value: 0
    },
    b2blue: {
        status: false,
        value: 0
    },
    b2red: {
        status: false,
        value: 0
    },
    b2brown: {
        status: false,
        value: 0
    },
    b2white: {
        status: false,
        value: 0
    },
    b2green: {
        status: false,
        value: 0
    },
    b2purple: {
        status: false,
        value: 0
    },
    c1blue: {
        status: false,
        value: 0
    },
    c1red: {
        status: false,
        value: 0
    },
    c1brown: {
        status: false,
        value: 0
    },
    c1white: {
        status: false,
        value: 0
    },
    c1green: {
        status: false,
        value: 0
    },
    c1purple: {
        status: false,
        value: 0
    },
    c2blue: {
        status: false,
        value: 0
    },
    c2red: {
        status: false,
        value: 0
    },
    c2brown: {
        status: false,
        value: 0
    },
    c2white: {
        status: false,
        value: 0
    },
    c2green: {
        status: false,
        value: 0
    },
    c2purple: {
        status: false,
        value: 0
    },
    c3blue: {
        status: false,
        value: 0
    },
    c3red: {
        status: false,
        value: 0
    },
    c3brown: {
        status: false,
        value: 0
    },
    c3white: {
        status: false,
        value: 0
    },
    c3green: {
        status: false,
        value: 0
    },
    c3purple: {
        status: false,
        value: 0
    },
    wall:{
        status: false,
        value: 0
    },
};

const yellowPoints = {
    ablue: {
        status: false,
        value: 0
    },
    ared: {
        status: false,
        value: 0
    },
    abrown: {
        status: false,
        value: 0
    },
    awhite: {
        status: false,
        value: 0
    },
    agreen: {
        status: false,
        value: 0
    },
    apurple: {
        status: false,
        value: 0
    },
    b1blue: {
        status: false,
        value: 0
    },
    b1red: {
        status: false,
        value: 0
    },
    b1brown: {
        status: false,
        value: 0
    },
    b1white: {
        status: false,
        value: 0
    },
    b1green: {
        status: false,
        value: 0
    },
    b1purple: {
        status: false,
        value: 0
    },
    b2blue: {
        status: false,
        value: 0
    },
    b2red: {
        status: false,
        value: 0
    },
    b2brown: {
        status: false,
        value: 0
    },
    b2white: {
        status: false,
        value: 0
    },
    b2green: {
        status: false,
        value: 0
    },
    b2purple: {
        status: false,
        value: 0
    },
    c1blue: {
        status: false,
        value: 0
    },
    c1red: {
        status: false,
        value: 0
    },
    c1brown: {
        status: false,
        value: 0
    },
    c1white: {
        status: false,
        value: 0
    },
    c1green: {
        status: false,
        value: 0
    },
    c1purple: {
        status: false,
        value: 0
    },
    c2blue: {
        status: false,
        value: 0
    },
    c2red: {
        status: false,
        value: 0
    },
    c2brown: {
        status: false,
        value: 0
    },
    c2white: {
        status: false,
        value: 0
    },
    c2green: {
        status: false,
        value: 0
    },
    c2purple: {
        status: false,
        value: 0
    },
    c3blue: {
        status: false,
        value: 0
    },
    c3red: {
        status: false,
        value: 0
    },
    c3brown: {
        status: false,
        value: 0
    },
    c3white: {
        status: false,
        value: 0
    },
    c3green: {
        status: false,
        value: 0
    },
    c3purple: {
        status: false,
        value: 0
    },
    wall:{
        status: false,
        value: 0
    },
};

const greenPoints = {
    ablue: {
        status: false,
        value: 0
    },
    ared: {
        status: false,
        value: 0
    },
    abrown: {
        status: false,
        value: 0
    },
    awhite: {
        status: false,
        value: 0
    },
    agreen: {
        status: false,
        value: 0
    },
    apurple: {
        status: false,
        value: 0
    },
    b1blue: {
        status: false,
        value: 0
    },
    b1red: {
        status: false,
        value: 0
    },
    b1brown: {
        status: false,
        value: 0
    },
    b1white: {
        status: false,
        value: 0
    },
    b1green: {
        status: false,
        value: 0
    },
    b1purple: {
        status: false,
        value: 0
    },
    b2blue: {
        status: false,
        value: 0
    },
    b2red: {
        status: false,
        value: 0
    },
    b2brown: {
        status: false,
        value: 0
    },
    b2white: {
        status: false,
        value: 0
    },
    b2green: {
        status: false,
        value: 0
    },
    b2purple: {
        status: false,
        value: 0
    },
    c1blue: {
        status: false,
        value: 0
    },
    c1red: {
        status: false,
        value: 0
    },
    c1brown: {
        status: false,
        value: 0
    },
    c1white: {
        status: false,
        value: 0
    },
    c1green: {
        status: false,
        value: 0
    },
    c1purple: {
        status: false,
        value: 0
    },
    c2blue: {
        status: false,
        value: 0
    },
    c2red: {
        status: false,
        value: 0
    },
    c2brown: {
        status: false,
        value: 0
    },
    c2white: {
        status: false,
        value: 0
    },
    c2green: {
        status: false,
        value: 0
    },
    c2purple: {
        status: false,
        value: 0
    },
    c3blue: {
        status: false,
        value: 0
    },
    c3red: {
        status: false,
        value: 0
    },
    c3brown: {
        status: false,
        value: 0
    },
    c3white: {
        status: false,
        value: 0
    },
    c3green: {
        status: false,
        value: 0
    },
    c3purple: {
        status: false,
        value: 0
    },
    wall:{
        status: false,
        value: 0
    },
};

const redPoints = {
    ablue: {
        status: false,
        value: 0
    },
    ared: {
        status: false,
        value: 0
    },
    abrown: {
        status: false,
        value: 0
    },
    awhite: {
        status: false,
        value: 0
    },
    agreen: {
        status: false,
        value: 0
    },
    apurple: {
        status: false,
        value: 0
    },
    b1blue: {
        status: false,
        value: 0
    },
    b1red: {
        status: false,
        value: 0
    },
    b1brown: {
        status: false,
        value: 0
    },
    b1white: {
        status: false,
        value: 0
    },
    b1green: {
        status: false,
        value: 0
    },
    b1purple: {
        status: false,
        value: 0
    },
    b2blue: {
        status: false,
        value: 0
    },
    b2red: {
        status: false,
        value: 0
    },
    b2brown: {
        status: false,
        value: 0
    },
    b2white: {
        status: false,
        value: 0
    },
    b2green: {
        status: false,
        value: 0
    },
    b2purple: {
        status: false,
        value: 0
    },
    c1blue: {
        status: false,
        value: 0
    },
    c1red: {
        status: false,
        value: 0
    },
    c1brown: {
        status: false,
        value: 0
    },
    c1white: {
        status: false,
        value: 0
    },
    c1green: {
        status: false,
        value: 0
    },
    c1purple: {
        status: false,
        value: 0
    },
    c2blue: {
        status: false,
        value: 0
    },
    c2red: {
        status: false,
        value: 0
    },
    c2brown: {
        status: false,
        value: 0
    },
    c2white: {
        status: false,
        value: 0
    },
    c2green: {
        status: false,
        value: 0
    },
    c2purple: {
        status: false,
        value: 0
    },
    c3blue: {
        status: false,
        value: 0
    },
    c3red: {
        status: false,
        value: 0
    },
    c3brown: {
        status: false,
        value: 0
    },
    c3white: {
        status: false,
        value: 0
    },
    c3green: {
        status: false,
        value: 0
    },
    c3purple: {
        status: false,
        value: 0
    },
    wall: {
        status: false,
        value: 0
    },
};


// Sum of the points of one player


//EventListener for wall points

const wallTotals = document.querySelectorAll(".points input[type=number]")
for(const wallTotal of  wallTotals){
    wallTotal.addEventListener("change", wallPoints);
}

function wallPoints(event) {
    switch(event.srcElement.parentElement.parentElement.id){
    case "bluePlayerRow":
            bluePoints.wall.value = Number(event.target.value);
            break;
        case "whitePlayerRow":
            whitePoints.wall.value = Number(event.target.value);
            break;
        case "orangePlayerRow":
            orangePoints.wall.value = Number(event.target.value);
            break;
        case "yellowPlayerRow":
            yellowPoints.wall.value = Number(event.target.value);
            break;
        case "greenPlayerRow":
            greenPoints.wall.value = Number(event.target.value);
            break;
        case "redPlayerRow":
            redPoints.wall.value = Number(event.target.value);
            break;
        default:
            alert("Something went terribly wrong")
    }
    totalPoints();
}

// EventListener for all points input
 
const pointsCheckboxes = document.querySelectorAll(".points input[type=checkbox]");
for(const pointCheckbox of pointsCheckboxes){
    pointCheckbox.addEventListener("change", showSelected);
} 

// Update points for coulmn A
let updatePreviousPointsA = function (name,value) {
    const playersWithPoints = [];
        for (let i = 0 ; i < playerList.length ; i++) {
            let selector = playerList[i] + "Points."+name+".status";
            if (eval(selector) === true) {
                let nextPlayer = playerList[i] + "Points."+name;
                playersWithPoints.push(nextPlayer);
            }
        }
        for (let i = 0 ; i < playersWithPoints.length ; i++) {
            eval(playersWithPoints[i]).value = Math.floor(value / playersWithPoints.length);
        }
        totalPoints();
}
// Update points for coulmn B
let updatePreviousPointsB = function (name,value) {
    let playersWithPoints1 = [];
    let playersWithPoints2 = [];
        if (name.charAt(1)==1) {
            for (let i = 0 ; i < playerList.length ; i++) {
                let selector = playerList[i] + "Points."+name+".status";
                if (eval(selector) === true) {
                    let nextPlayer = playerList[i] + "Points."+name;
                    playersWithPoints1.push(nextPlayer);
                }
            }
            if (playersWithPoints1.length > 1) {
                let valueForTie = value + 20 //To be corrected
                for (let i = 0 ; i < playersWithPoints1.length ; i++) {
                    eval(playersWithPoints1[i]).value = Math.floor(valueForTie / playersWithPoints1.length);
                }
                for (let i = 0 ; i < playerList.length ; i++) {
                    name = "b2"+name.slice(2)
                    let selector = playerList[i] + "Points."+name+".status";
                    if (eval(selector) === true) {
                        let nextPlayer = playerList[i] + "Points."+name;
                        playersWithPoints2.push(nextPlayer);
                    alert(`There are multiple players at the first place for points for ${name.slice(2)}. Please remove the assigned players for second place`)
                    }
                }
            } else {
                for (let i = 0 ; i < playersWithPoints1.length ; i++) {
                    eval(playersWithPoints1[i]).value = Math.floor(value / playersWithPoints1.length);
                }
            }
        playersWithPoints1 = [];
        playersWithPoints2 = [];
        } else {
            for (let i = 0 ; i < playerList.length ; i++) {
                let firstPlace = "b1"+name.slice(2)
                let selector = playerList[i] + "Points."+firstPlace+".status";
                if (eval(selector) === true) {
                    let nextPlayer = playerList[i] + "Points."+firstPlace;
                    playersWithPoints1.push(nextPlayer);
                }
        } if (playersWithPoints1.length > 1) {
            alert(`There are multiple players at the first place for points for ${name.slice(2)}. Please remove the assigned players for second placasdasdasdasde`)
        } else {
            for (let i = 0 ; i < playerList.length ; i++) {
                let selector = playerList[i] + "Points."+name+".status";
                if (eval(selector) === true) {
                    let nextPlayer = playerList[i] + "Points."+name;
                    playersWithPoints2.push(nextPlayer);
                }
            }
                for (let i = 0 ; i < playersWithPoints2.length ; i++) {
                    console.log(value)
                        eval(playersWithPoints2[i]).value = Math.floor(value / playersWithPoints2.length);
                }
    }
}
        totalPoints();
}

// Update points for coulmn C
let updatePreviousPointsC = function (name,value) {
    let playersWithPoints1 = [];
    let playersWithPoints2 = [];
    let playersWithPoints3 = [];
        if (name.charAt(1)==1) {
            for (let i = 0 ; i < playerList.length ; i++) {
                let selector = playerList[i] + "Points."+name+".status";
                if (eval(selector) === true) {
                    let nextPlayer = playerList[i] + "Points."+name;
                    playersWithPoints1.push(nextPlayer);
                }
            }
            if (playersWithPoints1.length > 2) {
                let valueForTie = value + 50 //To be corrected
                for (let i = 0 ; i < playersWithPoints1.length ; i++) {
                    eval(playersWithPoints1[i]).value = Math.floor(valueForTie / playersWithPoints1.length);
                }
                for (let i = 0 ; i < playerList.length ; i++) {
                    name = "c2"+name.slice(2)
                    let selector = playerList[i] + "Points."+name+".status";
                         if (eval(selector) === true) {
                            alert(`There are multiple players at the first place for points for ${name.slice(2)}. Please remove the assigned players for second place`)
                            break;}
                    for (let i = 0 ; i < playerList.length ; i++) {
                        name = "c3"+name.slice(2)
                        let selector = playerList[i] + "Points."+name+".status";
                        if (eval(selector) === true) {
                    alert(`There are multiple players at the first place for points for ${name.slice(2)}. Please remove the assigned players for second place`)
                    break;
                        }   
                    }
                }
            } else if (playersWithPoints1.length === 2) {
                let valueForTie = value + 20 //To be corrected
                for (let i = 0 ; i < playersWithPoints1.length ; i++) {
                    eval(playersWithPoints1[i]).value = Math.floor(valueForTie / playersWithPoints1.length);
                }
                for (let i = 0 ; i < playerList.length ; i++) {
                    name = "c2"+name.slice(2)
                    let selector = playerList[i] + "Points."+name+".status";
                    if (eval(selector) === true) {
                    alert(`There are multiple players at the first place for points for ${name.slice(2)}. Please remove the assigned players for second place`)
                    break;
                    }
                }
            } else if (playersWithPoints1.length === 1) {
                for (let i = 0 ; i < playersWithPoints1.length ; i++) {
                    eval(playersWithPoints1[i]).value = value;
                }
            }
            playersWithPoints1 = [];
            playersWithPoints2 = [];
            playersWithPoints3 = [];
        } else if (name.charAt(1)==2) {
            for (let i = 0 ; i < playerList.length ; i++) {
                let firstPlace = "c1"+name.slice(2)
                let selector = playerList[i] + "Points."+firstPlace+".status";
                if (eval(selector) === true) {
                    let nextPlayer = playerList[i] + "Points."+firstPlace;
                    playersWithPoints1.push(nextPlayer);
                }
            }
            if (playersWithPoints1.length >= 2) {
                alert(`There are multiple players at the first place for points for ${name.slice(2)}. Please remove the assigned players for second place`)
            } else {
                for (let i = 0 ; i < playerList.length ; i++) {
                    let selector = playerList[i] + "Points."+name+".status";
                    if (eval(selector) === true) {
                        let nextPlayer = playerList[i] + "Points."+name;
                        playersWithPoints2.push(nextPlayer);
                    }
                }
                if (playersWithPoints2.length > 1) {
                    let thirdPlace = "c3"+name.slice(2)
                    for (let i = 0 ; i < playerList.length ; i++) {
                        let selector = playerList[i] + "Points."+thirdPlace+".status";
                        if (eval(selector) === true) {
                            alert(`There are multiple players at the first place for points for ${name.slice(2)}. Please remove the assigned players for second place`)
                        break;
                        }
                    }
                    let valueForTie = value + 20 //To be corrected
                    for (let i = 0 ; i < playersWithPoints2.length ; i++) {
                    eval(playersWithPoints2[i]).value = Math.floor(valueForTie / playersWithPoints2.length);
                }
                } else {
                    for (let i = 0 ; i < playersWithPoints2.length ; i++) {
                        eval(playersWithPoints2[i]).value = value
                }
            }
            }
            playersWithPoints1 = [];
            playersWithPoints2 = [];
            playersWithPoints3 = [];
        } else {
            for (let i = 0 ; i < playerList.length ; i++) {
                let firstPlace = "c1"+name.slice(2)
                let selector = playerList[i] + "Points."+firstPlace+".status";
                if (eval(selector) === true) {
                    let nextPlayer = playerList[i] + "Points."+firstPlace;
                    playersWithPoints1.push(nextPlayer);
                }
            }
            for (let i = 0 ; i < playerList.length ; i++) {
                let secondPlace = "c2"+name.slice(2)
                let selector = playerList[i] + "Points."+secondPlace+".status";
                if (eval(selector) === true) {
                    let nextPlayer = playerList[i] + "Points."+secondPlace;
                    playersWithPoints2.push(nextPlayer);
                }
            }
            if (playersWithPoints1.length > 2 || playersWithPoints2.length > 1){
            alert(`There are multiple players at the first place for points for ${name.slice(2)}. Please remove the assigned players for second place`)
            } else {
                for (let i = 0 ; i < playerList.length ; i++) {
                    let selector = playerList[i] + "Points."+name+".status";
                    if (eval(selector) === true) {
                        let nextPlayer = playerList[i] + "Points."+name;
                        playersWithPoints3.push(nextPlayer);
                        }
                    }
                let valueForTie = value + 20 //To be corrected
                for (let i = 0 ; i < playersWithPoints3.length ; i++) {
                eval(playersWithPoints3[i]).value = Math.floor(valueForTie / playersWithPoints3.length);
                }
            }
        }
        playersWithPoints1 = [];
        playersWithPoints2 = [];
        playersWithPoints3 = [];
        totalPoints();
}


// Remove points
function showSelected(event) {
    if (!event.srcElement.checked) {
        switch(event.srcElement.parentElement.parentElement.parentElement.parentElement.parentElement.id) {
            case "bluePlayerRow":
                bluePoints[event.srcElement.name].status = false;
                bluePoints[event.srcElement.name].value = 0;
                break;
            case "whitePlayerRow":
                whitePoints[event.srcElement.name].status = false;
                whitePoints[event.srcElement.name].value = 0;
                break;
            case "orangePlayerRow":
                orangePoints[event.srcElement.name].status = false;
                orangePoints[event.srcElement.name].value = 0;
                break;
            case "yellowPlayerRow":
                yellowPoints[event.srcElement.name].status = false;
                yellowPoints[event.srcElement.name].value = 0;
                break;
            case "greenPlayerRow":
                greenPoints[event.srcElement.name].status = false;
                greenPoints[event.srcElement.name].value = 0;
                break;
            case "redPlayerRow":
                redPoints[event.srcElement.name].status = false;
                redPoints[event.srcElement.name].value = 0;
                break;
            default:
                alert("Something went terribly wrong")
        }
        event.srcElement.parentElement.parentElement.classList.replace("checked","unchecked")
    } else {
    switch(event.srcElement.parentElement.parentElement.parentElement.parentElement.parentElement.id) {
        case "bluePlayerRow":
            bluePoints[event.srcElement.name].status = true;
            break;
        case "whitePlayerRow":
            whitePoints[event.srcElement.name].status = true;
            break;
        case "orangePlayerRow":
            orangePoints[event.srcElement.name].status = true;
            break;
        case "yellowPlayerRow":
            yellowPoints[event.srcElement.name].status = true;
            break;
        case "greenPlayerRow":
            greenPoints[event.srcElement.name].status = true;
            break;
        case "redPlayerRow":
            redPoints[event.srcElement.name].status = true;
            break;
        default:
            alert("Something went terribly wrong")
    }
    event.srcElement.parentElement.parentElement.classList.replace("unchecked","checked")
    }   
    if (event.srcElement.name.startsWith("a")) {
        updatePreviousPointsA(event.srcElement.name,Number(event.srcElement.value))
    } else if (event.srcElement.name.startsWith("b")) {
        updatePreviousPointsB(event.srcElement.name,Number(event.srcElement.value))
    } else {
        updatePreviousPointsC(event.srcElement.name,Number(event.srcElement.value))
    }
} 


let totalPoints = function() {
    for (let i = 0 ; i < playerList.length ; i++) {
        let total = 0;
        let selectedPlayer = eval(playerList[i] + "Points") ;
        for (let key in selectedPlayer) {
            total += selectedPlayer[key].value;
        }
        eval("total"+playerList[i]).innerHTML = total;
    }
}
// Write your JavaScript code here.
// Remember to pay attention to page loading!

let button = null;
let landing = null;
let missionAbort = null;
let status = null;
let height = null;
let up = null;
let down = null;
let right = null;
let left = null;

function init() {
    button = document.getElementById("takeoff");
    landing = document.getElementById("landing");
    missionAbort = document.getElementById("missionAbort");
    up = document.getElementById("up");
    down = document.getElementById("down");
    right = document.getElementById("right");
    left = document.getElementById("left");
    status = document.querySelector("#flightStatus");
    height = document.querySelector("#spaceShuttleHeight");
    
button.addEventListener("click", function(event) {
    let goShuttle = confirm("Confirm that the shuttle is ready for takeoff.");
    if(goShuttle === true) {
        status.innerHTML = ("Shuttle in flight.");
        document.getElementById("shuttleBackground").style.background = "blue";
        height.innerHTML = 10000;
        landing.addEventListener("click", function(event) {
            alert("The shuttle is landing. Landing gear engaged.");
            status.innerHTML = ("The shuttle has landed.");
            document.getElementById("shuttleBackground").style.background = "green";
            height.innerHTML = 0;
        })
    } else if (goShuttle === false) {
        landing.addEventListener("click", function(event) {
        alert("The shuttle did not takeoff.");
        })
    }
})
missionAbort.addEventListener("click", function(event) {
    if(confirm("Confirm that you want to abort the mission.")) {
        status.innerHTML = ("Mission aborted.");
        document.getElementById("shuttleBackground").style.background = "green";
        height.innerHTML = 0;
    }
})
let rocketPosition = document.getElementById("rocket").style;
rocketPosition.position = "relative"; 
let rocketPositionLR = 0;
let rocketPositionUD = 0;
let rocketHeight = 0;

right.addEventListener("click", function(event) {
    rocketPositionLR -= 10;
    rocketPosition.right = `${rocketPositionLR}px`;
})
left.addEventListener("click", function(event) {
    rocketPositionLR += 10;
    rocketPosition.right  = `${rocketPositionLR}px`;
})
up.addEventListener("click", function(event) {
    rocketPositionUD -= 10;
    rocketPosition.top = `${rocketPositionUD}px`;
    rocketHeight += 10000;
    height.innerHTML = `${rocketHeight}`;
})
down.addEventListener("click", function(event) {
    rocketPositionUD += 10;
    rocketPosition.top = `${rocketPositionUD}px`;
    rocketHeight -= 10000;
    height.innerHTML = `${rocketHeight}`;
})
}


window.onload = (init) 

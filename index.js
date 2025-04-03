let homeScore =18;
let guestScore = 10;
let homeEl = document.getElementById("home-score");
let guestEl = document.getElementById("guest-score");

// Home functions
function add1Point(){
    homeScore+=1;
    homeEl.textContent = homeScore;
}

function add2Points(){
    homeScore+=2;
    homeEl.textContent = homeScore;
}

function add3Points(){
    homeScore+=3;
    homeEl.textContent = homeScore;
}

// Guest functions
function add1PointG(){
    guestScore+=1;
    guestEl.textContent = guestScore;
}


function add2PointsG(){
    guestScore+=2;
    guestEl.textContent = guestScore;
}

function add3PointsG(){
    guestScore+=3;
    guestEl.textContent = guestScore;
}
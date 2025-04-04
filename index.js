let homeScore = 0;
let guestScore = 0;
let homeEl = document.getElementById("home-score");
let guestEl = document.getElementById("guest-score");
let winnerEL = document.getElementById("winner-message");

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

function resetScore(){
    homeScore = 0;
    guestScore = 0;
    homeEl.textContent = homeScore;
    guestEl.textContent = guestScore;
    winnerEL.textContent = ""; // Clear winner message
    winnerEL.style.border = "none"; // Reset border
}

function declareWinner() {
    if (homeScore > guestScore) {
       winnerEL.textContent ="Home team wins!";
    } else if (guestScore > homeScore) {
        winnerEL.textContent= "Guest team wins!";
    } else {
        winnerEL.textContent= "It's a tie!";
    }   
    winnerEL.style.border = "3px double #9AABD8";
} 

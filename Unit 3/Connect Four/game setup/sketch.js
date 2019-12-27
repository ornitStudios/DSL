// call p5.js explicitly as per
//  https://github.com/processing/p5.js/wiki/p5.js-overview#why-cant-i-assign-variables-using-p5-functions-and-variables-before-setup
new p5();

// the board defined as a list of lists
let board = [
    ['','','','','','','',],
    ['','R','','Y','','','',],
    ['Y','Y','R','R','R','','',],
    ['R','Y','Y','R','Y','','',],
    ['R','Y','R','R','Y','','',],
    ['R','R','Y','Y','Y','R','',],
];

// the players
let players = ['R','Y'];

let currentPlayer;
// array of available squares on the board
let available = [];

function setup(){
    createCanvas(400,400);
}

function nextTurn(){
}

// function testing the equality of three parameters
function equals4(a,b,c, d){
}

function checkWinner(){
    let winner = null;
    
    // check rows for a winner

   // check columns for a winner

   // check diagonals
    
    // if there are no more available squares
    // It's a tie
}

function draw(){
    background(220);
    strokeWeight(4);
    fill('blue');

    //  w and h are the width and height of a square
    let w = width/7;
    let h = height/6;
    

    let posx = 0;
    let posy = 0;

    // additions and substractions offste the strokeWeight(4)
    rect(posx+2, posy+2, width-4, height-4);

    // draw 7 horizontal lines
    for (x = 0; x < 5; x++) {
        line(posx, posy+h, posx+width, posy+h);
        posy = posy+h;
    }

    posx = 0;
    posy = 0;

    // draw 8 vertical lines
    for (y = 0; y < 6; y++){        
        line(posx+w, posy, posx+height/7, posy+height);
        posx = posx+w
    } 


    // render the board with coins
    // check per colum, stop when you get to a blank 
    // or to the top of the column
    
    for (let i=0; i<7; i++){
        for (let j=0; j<6; j++){
            let x = w * i + w/2;
            let y = h *j +h/2;

            let spot = board[j][i];
            if (spot=='R'){
                fill('red');
                ellipse(x,y,w/1.2);
            } else if (spot=='Y') {
                fill('yellow');
                ellipse(x,y,w/1.2);
            } else {
                fill('white');
                ellipse(x,y,w/1.2);
            }
        }
    }


    // display winner
    let result = checkWinner();
    // if the result is not null i.e. has been assigned
}
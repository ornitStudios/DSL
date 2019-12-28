// call p5.js explicitly as per
//  https://github.com/processing/p5.js/wiki/p5.js-overview#why-cant-i-assign-variables-using-p5-functions-and-variables-before-setup
new p5();

// the board defined as a list of lists
let board = [
    ['','','','','','','',],
    ['','','','','','','',],
    ['','','','','','','',],
    ['','','','','','','',],
    ['','','','','','','',],
    ['','','','','','','',],
];

// height and width of each square to be defined in setup()
// but needs to be global
let w;
let h;

// the players
// Human will be red
let human = 'R';
let ai = 'Y';

// Human to start
let currentPlayer = human;

// array of available squares on the board
let available = [];

function setup(){
    createCanvas(400,400);

       //  w and h are the width and height of a square
        w = floor(width/7);
       // console.log("TCL: draw -> w", w)
        h = floor(height/6);
       // console.log("TCL: draw -> h", h)
}

// click to play
function mousePressed(){
    if (currentPlayer == human){
        // human to play

        // detect which column the human clicked in.
        // floor() calculates the closest int value that is less than or equal to 
        // the value of the parameter.
        let j = floor(mouseX/w);
        
        // detect which is the lowest available square in that column
        // drop a red coin in that column
        // i.e. assign 'R' to the position on the board and let 
        // draw() draw a red ellipse in that position
        for (let i = 5; i>=0; i--){
            console.log("TCL: mousePressed -> i", i)
            if (board[i][j] == ''){
                console.log(i);
                board[i][j] = human;
                i=0;
            }
        }
        // human has played switch to ai
        currentPlayer = ai;

        // ai plays randomly at this stage
        j = floor(random(6));
        
        for (i = 5; i>=0; i--){
            console.log("TCL: mousePressed -> i", i)
            if (board[i][j] == ''){
                console.log(i);
                board[i][j] = ai;
                i=0;
            }
        }
        // ai has played switch back to human
        currentPlayer = human;
    } 
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
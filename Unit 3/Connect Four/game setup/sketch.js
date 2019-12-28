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
        h = floor(height/6);
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
            if (board[i][j] == ''){
                board[i][j] = human;
                // once the human has played, check for a winner
                checkWinner(i,j);
                i=0;
            }
        }
        // human has played switch to ai
        currentPlayer = ai;

        // ai plays randomly at this stage
        j = floor(random(6));
        
        for (i = 5; i>=0; i--){
            if (board[i][j] == ''){
                board[i][j] = ai;
                checkWinner(i,j);
                i=0;
                // once the ai has played, check for a yellow winner from the position just played
                // pass the position to check winnner
                
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

function checkWinner(wi,wj){
    let winner = null;

    let Rconnect = 0;
    let Lconnect  = 0;
    let i = 0;
    // check to the right of the coin just played
    // as long as coins are the same colour
    // save the number of consecutive coins of the same colour (Rconnect)
    do { 
        Rconnect++;
        i++;
    }
    while (board[wi][wj] == board[wi][wj+i]);
    
    i = 0;
    
    // check to the left of the coin just played
    // as long as coins are the same colour
    // save the number of consecutive coins of the same colour (Lconnect)
    do { 
        Lconnect++;
        i++;
    }
    while (board[wi][wj] == board[wi][wj-i]);
    
    // once Right and left have been checked add the scores
    // substract 1 as the coin being played is effectively counted twice
    // If the score is equal or superior to 4
    // 4 coins of the same colour have been connected horizontally.
    // we have a winner!
    if (Rconnect+Lconnect-1 >= 4){
        console.log(`${board[wi][wj]} wins`);
    };
    

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
    // let result = checkWinner();
    // if the result is not null i.e. has been assigned
}
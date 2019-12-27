// call p5.js explicitly as per
//  https://github.com/processing/p5.js/wiki/p5.js-overview#why-cant-i-assign-variables-using-p5-functions-and-variables-before-setup
new p5();

// the board defined as a list of lists
let board = [
    ['','',''],
    ['','',''],
    ['','','']
];

// width and height need to be global
// they are instantiated in setup() but
// need to be visible in dra()
let w;
let h;

// the players
let ai = 'X';
let human = 'O';
// human starts the game
let currentPlayer = human;
// array of available squares on the board

function setup(){
    createCanvas(400,400);

    //  w and h are the width and height of a square
    w = width/3;
    h = height/3;
}

// function testing the equality of three parameters
function equals3(a,b,c){
    return a==b && b==c && a != '';
}

function checkWinner(){
    let winner = null;
    
    // check rows for a winner
    for (let i = 0 ; i < 3; i++){
        if (equals3(board[i][0],board[i][1],board[i][2])){
            winner = board[i][0];
        }
    }

   // check columns for a winner
    for (let i = 0 ; i < 3; i++){
    if (equals3(board[0][i],board[1][i],board[2][i])){
        winner = board[0][i];
        }
    }

   // check diagonals
    for (let i = 0 ; i < 3; i++){
    if (equals3(board[0][0],board[1][1],board[2][2])){
        winner = board[0][2];
        }
    }
    for (let i = 0 ; i < 3; i++){
        if (equals3(board[2][0],board[1][1],board[0][2])){
            winner = board[2][0];
        }
    }
    
    let openSpots = 0;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] == '') {
                openSpots++;
            }
        }
    }
    // if there are no more available squares
    // It's a tie
    if (winner == null && openSpots == 0){
        return 'tie';
    } else {
        return winner;
    }
}

function nextTurn(){
    // ai to play
    // make all square available at the beginning of the game
    let available = [];
    for (let i=0; i<3; i++){
        for (let j=0; j<3; j++){
            if (board[i][j]==''){
                available.push({i,j});
            }
        }
    }
    // ai plays randomly
    let move = random(available);
    board[move.i][move.j] = ai;
    // human to play
    currentPlayer = human;
}    

function mousePressed(){
    if (currentPlayer == human){
        // human to play
        // detect which square the click was in.
        // floor() calculates the closest int value that is less than or equal to 
        // the value of the parameter.
        let i = floor(mouseX/w);
        let j = floor(mouseY/h);
        // if the square the click was detected in is avalable
        if (board[i][j]==''){
            console.log(`this square is empty`);
            // assign the square to the human i.e. "O"
            board[i][j] = human;
            // hand over to ai player
            currentPlayer = ai;
            nextTurn();
        }
    };
};

function draw(){
    background(220);
    strokeWeight(4);

    // draw the grid
    // two vertical lines
    line(w,0,w,height);
    line(w*2, 0, w*2,height);
    // two horizontal lines
    line(0, h, width, h);
    line(0, h*2, width, h*2);


    // render the board
    // embeded loop to draw colums and rows 
    for (let j=0; j<3; j++){
        for (let i=0; i<3; i++){
            // move the x and y of where you're drawing 
            // to the centre of the square you're in 
            let x = w * i + w/2;
            let y = h *j +h/2;
            let spot = board[i][j];

            // player1 is 'O';
            if (spot == human){
                noFill();
                // ellipse is drawn from its top left "corner"
                // width of the ellipse is half the width of a square
                ellipse(x,y,w/2);
            // player2 is 'X';
            } else if (spot == ai){
                //  xr is the "radius" offset of the cross
                let xr = w/4;
                line(x-xr,y-xr, x+xr,y+xr);
                line(x+xr, y-xr, x-xr, y+xr);
            };
        };
    };

    let result = checkWinner();
    // if the result is not null i.e. has been assigned
    if (result != null ){
        // stop the loop
        noLoop();
        createP(`... And the winner is ... ${result}`).style('font-size', '32px' );
        console.log(result);
    }
    // nextTurn();
}
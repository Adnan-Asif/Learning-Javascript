var board = [['_', '_', '_'], 
            ['_', '_', '_'],
            ['_', '_', '_']]

var gameStatus = "Running"


function ShowBoard(board){
    console.log(board[0][0], board[0][1], board[0][2]);
    console.log(board[1][0], board[1][1], board[1][2]);
    console.log(board[2][0], board[2][1], board[2][2]);
}

function checkGame(board){
    if (board[0][0] === board[0][1] && board[0][1] === board[0][2] && board[0][0] != '_'){
        gameStatus = "End";
    }
    else if (board[1][0] === board[1][1] && board[1][1] === board[1][2] && board[1][0] != '_'){
        gameStatus = "End";
    }
    else if (board[2][0] === board[2][1] && board[2][1] === board[2][2] && board[2][0] != '_'){
        gameStatus = "End";
    }
    else if (board[0][0] == board[1][0] && board[1][0] == board[2][0] && board[0][0] != '_'){
        gameStatus = "End"; 
    }
    else if (board[0][1] == board[1][1] && board[1][1] == board[2][1] && board[0][1] != '_'){
        gameStatus = "End"; 
    }
    else if (board[0][2] == board[1][2] && board[1][2] == board[2][2] && board[0][2] != '_'){
        gameStatus = "End"; 
    }
    else if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != '_'){
        gameStatus = "End"; 
    }
    else if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[2][0] != '_'){
        gameStatus = "End"; 
    }
}

function checkvalid(inp){
    if (inp == 0){ return board[0][0] === '_'; }
    else if (inp == 1){ return board[0][1] === '_'; }
    else if (inp == 2){ return board[0][2] === '_'; }
    else if (inp == 3){ return board[1][0] === '_'; }
    else if (inp == 4){ return board[1][1] === '_'; }
    else if (inp == 5){ return board[1][2] === '_'; }
    else if (inp == 6){ return board[2][0] === '_'; }
    else if (inp == 7){ return board[2][1] === '_'; }
    else if (inp == 8){ return board[2][2] === '_'; }
    else {return false;}
}

function updateBoard(inp, turn){
    if (inp == 0){ return board[0][0] = turn; }
    else if (inp == 1){ return board[0][1] = turn; }
    else if (inp == 2){ return board[0][2] = turn; }
    else if (inp == 3){ return board[1][0] = turn; }
    else if (inp == 4){ return board[1][1] = turn; }
    else if (inp == 5){ return board[1][2] = turn; }
    else if (inp == 6){ return board[2][0] = turn; }
    else if (inp == 7){ return board[2][1] = turn; }
    else if (inp == 8){ return board[2][2] = turn; }
}

function checkDraw(){
    for (let i = 0; i < 3; i++){
        for (let j = 0; j < 3; j++){
            if (board[i][j] === '_'){
                return false;
            }
        }
    }
    gameStatus = "Draw";
    alert('It is a Draw!!!')
    return true;
}


function main(){
    ShowBoard(board);
    alert(`Let's begin the game`);
    var turn = 'X'
    var inp;

    while (gameStatus === 'Running'){
        if (turn == 'X'){
            inp = prompt(`Player X's turn, enter a number`)
            while (!checkvalid(inp)){
                inp = prompt(`Position filled, choose another one`)
            }
            updateBoard(inp, turn);
            checkGame(board);
            checkDraw();
            if (gameStatus === 'End'){
            alert('X won!!!!!');}
            turn = 'O';
        }
        else if (turn == 'O'){
            inp = prompt(`Player O's turn, enter a number`)
            while (!checkvalid(inp)){
                inp = prompt(`Position filled, choose another one`)
            }
            updateBoard(inp, turn);
            checkGame(board);
            checkDraw();
            if (gameStatus === 'End') {alert('O won!!!!!!!'); }
            turn = 'X';
        }
        ShowBoard(board);


    }

}
main();
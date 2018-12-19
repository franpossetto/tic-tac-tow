function checkRow(x, value){
    count_value = 0;
    for (i=0; i<3; i++){
        if(board[i][x] == value) count_value++;
    }
    return count_value;
}

function checkColumn(y, value){
    count_value = 0;
    for (i=0; i<3; i++){
        if(board[y][i] == value) count_value++;
    }
    return count_value;
}

function checkDiag(d, value){

    /*
    /   \
    00  20
    11  11
    22  02
    */
    count_value =0;

    if(board[(1+d)][0] == value) count_value++;
    if(board[1][1] == value) count_value++;
    if(board[(1-d)][2] == value) count_value++;

    return count_value;
}

function checkLine(){
   if ( turn == "ball") value = 1;
   else value = 2;

   if (checkRow(0, value) == 3){alert(turn + "ha ganado");}
   if (checkRow(1, value) == 3){alert(turn + "ha ganado");}
   if (checkRow(2, value) == 3){alert(turn + "ha ganado");}
   if (checkColumn(0, value) == 3){alert(turn + "ha ganado");}
   if (checkColumn(1, value) == 3){alert(turn + "ha ganado");}
   if (checkColumn(2, value) == 3){alert(turn + "ha ganado");}
   if (checkDiag(1, value) == 3){alert(turn + "ha ganado");}
   if (checkDiag(-1, value) == 3){alert(turn + "ha ganado");}


}

function checkTurn_Count(turn_value){
    turn_count = 0;
    for(i=0; i<3; i++){
        for (j=0; j<3; j++){
            if (board[i][j] == turn_value) turn_count++;
        }
    }
    return turn_count;
}


function difMov(x, y){
    diferent = false;

    if (turn == "cross"){
        if (x!=crossSelected_x) diferent = true;
        if (y!=crossSelected_y) diferent = true;
    }
    else {
    if (x!=ballSelected_x) diferent = true;
    if (y!=ballSelected_y) diferent = true;
    }
    return diferent;
}

function checkBlock(x,y){
    // si hay dos fichas del jugador y una de la maquina.
    if (checkRow(y, 1) == 1 && checkRow(y, 2) == 2) return true;
    if (checkColumn(x, 1) == 1 && checkColumn(x, 2) == 2) return true;
    if ( (x==0 && y==2) || (x==1 && y==1) || (x==2 && y==0)){
        if(checkDiag(1,1) == 1 && checkDiag(1,2) == 2) return true;
    }
    if ( (x==0 && y==0) || (x==1 && y==1) || (x==2 && y==2)){
        if(checkDiag(-1,1) == 1 && checkDiag(-1,2) == 2) return true;
    }

    return false;
}


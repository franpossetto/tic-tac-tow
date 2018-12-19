function searchMove(){
		











		balls = checkTurn_Count(1);
		if (balls > 1) {
			completed= false;
			//formar linea maquina
			if (completed == false) completed = completeRow(0,1);
			if (completed == false) completed = completeRow(1,1);
			if (completed == false) completed = completeColumn(0,1);
			if (completed == false) completed = completeColumn(1,1);
			if (completed == false) completed = completeRow(2,1);
			if (completed == false) completed = completeColumn(2,1);
			if (completed == false) completed = completeDiag(1,1);
			if (completed == false) completed = completeDiag(-1,1);
			
			//cortar linea rival
			if (completed == false) completed = completeRow(0,2);
			if (completed == false) completed = completeRow(1,2);
			if (completed == false) completed = completeColumn(0,2);
			if (completed == false) completed = completeColumn(1,2);
			if (completed == false) completed = completeColumn(2,2);
			if (completed == false) completed = completeRow(2,2);
			if (completed == false) completed = completeDiag(1,2);
			if (completed == false) completed = completeDiag(-1,2);
			
			if (completed == false){

			//si no se hizo nada de lo anterior
				if (balls == 3 ){
					cellFind = false;
	    
				    while (cellFind == false){
				        x = Math.round(Math.random()*2);
				        y = Math.round(Math.random()*2);
				        if (board[x][y] == 1 && checkBlock(x,y)==false)
				        	cellFind = true;
				    }
				    ballSelected_x = x;
					ballSelected_y = y;
					clearCell(x, y);

				}
				randomMove();
			}

		}
		else{
			randomMove();
		}

		
}

function randomMove(){
    cellAvailable = false;
    
    while (cellAvailable == false){
        x = Math.round(Math.random()*2);
        y = Math.round(Math.random()*2);
        if (board[x][y] == 0 && difMov(x, y))
        	cellAvailable = true;
    }
    paintCell(x, y);
}

function completeRow(x, turn_value){

	//si hay 2 en linea 
	if (checkRow(x, turn_value) == 2){
		//buscar cual casilla falta para completar la linea
		find_final = false;
		for (i=0; i<3; i++){
			if (board[i][x] == 0){
				find_final = true;
				find_final_x = i;
				find_final_y = x;
			}
		}
		//si esta vacia
		if(find_final == true){
			//si hay tres fichas
			if (checkTurn_Count(turn_value) == 3){
				//preguntar de quien queremos completar la linea
				//si es la maquina -> armar la linea
				if (turn_value == 1){
					//buscamos la perdida
					find_lost = false;

						for (i=0; i<3 && find_lost == false; i++){
							if (i != x){
							for (j=0; j<3 && find_lost == false; j++){
								if (board[j][i] == 1) {
									find_lost = true;
									find_lost_x = j;
									find_lost_y = i;
								}
							}
						}
					}
					//La borramos
					ballSelected_x = find_lost_x;
					ballSelected_y = find_lost_y;
					clearCell(find_lost_x, find_lost_y)
				}
				//sino -> bloquear linea
				else {
					//buscamos una ficha de la maquina que no bloquea
					cellFind = false;
					
						while (cellFind == false){
					        x = Math.round(Math.random()*2);
					        y = Math.round(Math.random()*2);
					        if (board[x][y] == 1 
					        && checkBlock(x,y)==false)
					        	cellFind = true;
					    }
					    ballSelected_x = x;
						ballSelected_y = y;
						clearCell(x, y);
					}
				}
			
				//pintar la casilla final
				paintCell(find_final_x, find_final_y);
				return true;
				//return true

		}
		// sino return false
		else return false
	}
	//sino return false
	return false;
}



function completeColumn(x, turn_value){

	//si hay 2 en linea 
	if (checkColumn(x, turn_value) == 2){
		//buscar cual casilla falta para completar la linea
		find_final = false;
		for (i=0; i<3; i++){
			if (board[x][i] == 0){
				find_final = true;
				find_final_x = x;
				find_final_y = i;
			}
		}
		//si esta vacia
		if(find_final == true){
			//si hay tres fichas
			if (checkTurn_Count(turn_value) == 3){
				//preguntar de quien queremos completar la linea
				//si es la maquina -> armar la linea
				if (turn_value == 1){
					//buscamos la perdida
					find_lost = false;

						for (i=0; i<3 && find_lost == false; i++){
							if (i != x){
							for (j=0; j<3 && find_lost == false; j++){
								if (board[i][j] == 1) {
									find_lost = true;
									find_lost_x = i;
									find_lost_y = j;
								}
							}
						}
					}
					//La borramos
					ballSelected_x = find_lost_x;
					ballSelected_y = find_lost_y;
					clearCell(find_lost_x, find_lost_y)
				}
				//sino -> bloquear linea
				else {
					//buscamos una ficha de la maquina que no bloquea
					cellFind = false;
					
						while (cellFind == false){
					        x = Math.round(Math.random()*2);
					        y = Math.round(Math.random()*2);
					        if (board[x][y] == 1 
					        && checkBlock(x,y)==false)
					        	cellFind = true;
					    }
					    ballSelected_x = x;
						ballSelected_y = y;
						clearCell(x, y);
					}
				}
			
				//pintar la casilla final
				paintCell(find_final_x, find_final_y);
				return true;
				//return true

		}
		// sino return false
		else return false
	}
	//sino return false
	return false;
}


function completeDiag(x, turn_value){

	//si hay 2 en linea 
	if (checkDiag(x, turn_value) == 2){
		//buscar cual casilla falta para completar la linea
		find_final = false;

		if(board[1][1] == 0){
			find_final_x = 1;
			find_final_y = 1;
			find_final = true;
		}

		if(board[(1-x)][2] == 0){
			find_final_x = (1-x);
			find_final_y = 2;
			find_final = true;
		}

		if(board[(1+x)][0] == 0){
			find_final_x = (1+x);
			find_final_y = 0;
			find_final = true;
		}


		//si esta vacia
		if(find_final == true){
			//si hay tres fichas
			if (checkTurn_Count(turn_value) == 3){
				//preguntar de quien queremos completar la linea
				//si es la maquina -> armar la linea
				if (turn_value == 1){
					//buscamos la perdida
					find_lost = false;

						for (i=0; i<3 && find_lost == false; i++){
							for (j=0; j<3 && find_lost == false; j++){
								if (( (i!=1 || j!=1 ) &&
									(i != (1-x) || j != 2) &&
									(i!=(1+x) || j!=0))
									&& board[i][j] == 1) {
									find_lost = true;
									find_lost_x = i;
									find_lost_y = j;
								}
							}
					}
					//La borramos
					ballSelected_x = find_lost_x;
					ballSelected_y = find_lost_y;
					clearCell(find_lost_x, find_lost_y)
				}
				//sino -> bloquear linea
				else {
					//buscamos una ficha de la maquina que no bloquea
					cellFind = false;
					
						while (cellFind == false){
					        x = Math.round(Math.random()*2);
					        y = Math.round(Math.random()*2);
					        if (board[x][y] == 1 
					        && checkBlock(x,y)==false)
					        	cellFind = true;
					    }
					    ballSelected_x = x;
						ballSelected_y = y;
						clearCell(x, y);
					}
				}
			
				//pintar la casilla final
				paintCell(find_final_x, find_final_y);
				return true;
				//return true

		}
		// sino return false
		else return false
	}
	//sino return false
	return false;
}



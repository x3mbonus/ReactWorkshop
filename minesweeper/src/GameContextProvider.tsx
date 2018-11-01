import * as React from 'react';
import { ContextGameCell, IGameContext, GameContext } from './GameContext';

export interface IGameContextProviderProps {
}

export default class GameContextProvider extends React.Component<IGameContextProviderProps, IGameContext> {


    constructor(props: IGameContextProviderProps) {
        super(props);

        this.state = {
            isGameStarted: false,
            isGameOver: false,
            fieldSize: 10,
            totalBombs: 10,
            leftBombs: 10,
            startGame: this.startGame,
            openCell: this.clickedOpenCell,
            markCell: this.clickedMarkCell,
            areBombsSetup: false
        }

        //this.state = this.getInitializedState(this.state);
    }

    private getInitializedState = (startParams) => {
        let size = startParams.fieldSize;
        let bombsNumber = startParams.totalBombs;

        if (size <= 0 || size > 20 &&
            bombsNumber <= 0 || bombsNumber >= size * size) {
            return;
        }

        let cells = [];
        for (let y = 0; y < size; y++) {
            let row = []
            for (let x = 0; x < size; x++) {
                row.push(new ContextGameCell());
            }
            cells.push(row);
        }

        //console.log('Bombs number', bombsNumber);
        let result = {
            ...this.state,
            leftBombs: bombsNumber,
            totalBombs: bombsNumber,
            fieldSize: size,
            cells: cells,
            isGameStarted: true,
            isGameOver:false,
            areBombsSetup:false
        };


        return result;
    }

    public startGame = (startParams) => {
        this.setState(this.getInitializedState(startParams));
    };

    public clickedOpenCell = (x, y) => {
        if (this.state.isGameOver){
            this.setState(this.getInitializedState(this.state));
            return;
        }        

        if (!this.state.areBombsSetup) {
            this.setupBombs(x, y);
            return;
        }
        let cell = this.openCell(x, y);
        let isGameOver = cell.hasBomb;
        this.setState({...this.state, isGameOver: isGameOver});
    };

    public clickedMarkCell = (x, y) => {
        if (this.state.isGameOver) {
            this.setState(this.getInitializedState(this.state));
            return;
        }

        let cell = this.state.cells[y][x];        
        let leftBombs = this.state.leftBombs;
        let isGameOver = false;
        if (cell.isMarked) {
            cell.isMarked = !cell.isMarked;
            leftBombs ++;
        } else if(cell.isOpened) {
            isGameOver = !this.openNearCells(x,y);
        } else if (this.state.leftBombs > 0) {
            cell.isMarked = !cell.isMarked;
            leftBombs --;
        }
        //console.log('Game over', isGameOver);

        this.setState({
            ...this.state,
            isGameOver:isGameOver,
            leftBombs
        });
    };

    setupBombs = (x, y) => {
        let bombsNumber = this.state.totalBombs;
        let size = this.state.fieldSize;
        let maxIterations = 10000;
        let cells = this.state.cells;
        
        while (bombsNumber > 0 && maxIterations > 0) {
            maxIterations--;
            let bombX = Math.floor(Math.random() * size);
            let bombY = Math.floor(Math.random() * size);
            
            let cell = cells[bombY][bombX];
            if (cell.hasBomb ||
                bombX == x && bombY == y) {
                continue;
            }
            
            cell.hasBomb = true;
            bombsNumber --;
        }

        
        this.openCell(x,y);
        //console.log(this.state.cells[y][x].isOpened);

        let result = {
            ...this.state,
            //cells: cells,
            areBombsSetup: true
        };

        //console.log(result);
        this.setState(result);
    }

    openCell = (x:number, y:number):ContextGameCell => {
        let cell = this.state.cells[y][x];
        if (cell.isMarked || cell.isOpened){
            return cell;
        }


        if (!cell.hasBomb &&
            cell.isEmpty()) {
            cell.bombsNear = this.calculateBombs(x,y);            
        }
        cell.isOpened = true;
        
        return cell;
    };

    openNearCells = (paramX:number,paramY:number):boolean => {
        let cellsQueue = [];
        cellsQueue.push(10*paramX+paramY);

        let maxIterations = 1000;

        while(cellsQueue.length > 0 && maxIterations > 0)
        {
            maxIterations--;

            //console.log(maxIterations);
            //console.log(JSON.stringify(cellsQueue));
            let coords = cellsQueue.shift();
            let x = Math.floor(coords / 10);
            let y = coords - x * 10;
            let size = this.state.fieldSize;
            for (let dx = -1; dx <= 1; dx++){
                for (let dy = -1; dy <= 1; dy++){
                    if (dx === 0 && dy === 0){
                        continue;
                    }

                    let cellX = x + dx;
                    let cellY = y + dy;

                    if (cellX < 0 || cellX >= size ||
                        cellY < 0 || cellY >= size){
                        continue;
                    }                
                    
                    let cell = this.openCell(cellX, cellY);
                    if (cell && cell.hasBomb) {
                        console.log('Game over');
                        return false;

                    }
                    
                    if (cell && 
                        cell.isOpened &&
                        !cell.hasBomb &&
                        cell.bombsNear == 0 ){
                            let coords = cellX * 10 + cellY;
                            //console.log(coords, cellsQueue.indexOf(coords) < 0);

                            if (cellsQueue.indexOf(coords) < 0) {
                                cellsQueue.push(coords);
                            }
                        }
                }
            }
        }
        return true;
    }

    calculateBombs = (x,y):number => {
        let bombsNear = 0;
        let size = this.state.fieldSize;
        for (let dx = -1; dx <= 1; dx++){
            for (let dy = -1; dy <= 1; dy++){
                if (dx === 0 && dy === 0){
                    continue;
                }

                let cellX = x + dx;
                let cellY = y + dy;

                if (cellX < 0 || cellX >= size ||
                    cellY < 0 || cellY >= size){
                    continue;
                }

                let cell = this.state.cells[cellY][cellX];
                if (cell.hasBomb) {
                    bombsNear++;
                }
            }
        }

        return bombsNear;
    }

    public render() {
        return (
            <div>
                <GameContext.Provider value={this.state}>
                    {this.props.children}
                </GameContext.Provider>
            </div>
        );
    }
}

import * as React from 'react';
import { IGameContext, GameContext } from './GameContext';

export interface IGameContextProviderProps {
}

const Empty:string = '';
const NotOpenedBomb:string = 'o';
const OpenedBomb:string = 'x';
const MarkedAsBomb:string = '!';


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
            click: this.click,
            areBombsSetup: false
        }

        this.state = this.getInitializedState(this.state);
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
                row.push(Empty);
            }
            cells.push(row);
        }

        let result = {
            ...this.state,
            leftBombs: bombsNumber,
            totalBombs: bombsNumber,
            fieldSize: size,
            cells: cells,
            isGameStarted: true
        };


        return result;
    }

    public startGame = (startParams) => {

        this.setState(this.getInitializedState(startParams));
    };

    public click = (x, y) => {
        if (this.state.isGameOver){
            return;
        }
        if (!this.state.areBombsSetup) {
            this.setupBombs(x, y);
            return;
        }
        let cells =  this.state.cells;
        let value = cells[y][x];
        console.log('Value:', value);

        switch (value) {
            case Empty:
                cells[y][x] = this.calculateBombs(x,y);
                this.setState(this.state);

                break;       
            case NotOpenedBomb:
                cells[y][x] = OpenedBomb;
                this.setState({...this.state, isGameOver:true});

                
                break;        
            default:
                break;
        }
        console.log(JSON.stringify(cells));

    };

    setupBombs = (x, y) => {
        let bombsNumber = this.state.totalBombs;
        let size = this.state.fieldSize;
        let maxIterations = 10000;
        let cells = this.state.cells;
        console.log(this.state.totalBombs);
        
        while (bombsNumber > 0 && maxIterations > 0) {
            maxIterations--;
            let bombX = Math.floor(Math.random() * size);
            let bombY = Math.floor(Math.random() * size);

            if (cells[bombY][bombX] ||
                bombX == x && bombY == y) {
                continue;
            }
            cells[bombY][bombX] = NotOpenedBomb;
            bombsNumber --;
        }

        cells[y][x] = this.calculateBombs(x,y);

        let result = {
            ...this.state,
            cells: cells,
            areBombsSetup: true
        };

        this.setState(result);
    }

    calculateBombs = (x,y) => {
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

                let value = this.state.cells[cellY][cellX];
                if (value === NotOpenedBomb ||
                    value === OpenedBomb) {
                    bombsNear++;
                }
            }
        }

        return bombsNear.toString();
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

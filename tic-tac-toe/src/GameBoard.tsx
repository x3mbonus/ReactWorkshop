import * as React from 'react';
import GameCell from './GameCell';

export interface IGameBoardProps {
    size: number;
    winnerSize:number;
}

export interface IGameBoardState {
    cellValues: string[][];
    currentMove:string;
    winner:string;
}

export default class GameBoard extends React.Component<IGameBoardProps, IGameBoardState> {
    constructor(props: IGameBoardProps) {
        super(props);

        this.state = this.getInitState();
    }

    getInitState = () => {
        let cellValues = [];

        for (let i = 0; i < this.props.size; i++) {
            cellValues[i] = [];
            for (let j = 0; j < this.props.size; j++) {
                cellValues[i][j] = '';
            }
        }

        return {
            cellValues: cellValues,
            currentMove: 'x',
            winner: ''

        };
    }

    cellValueSet = (i,j) => {
        if (this.state.winner){
            let state = this.getInitState();
            

            this.setState(state);
            return;
        }

        this.state.cellValues[i][j] = this.state.currentMove;
        let winner = '';
        if (this.checkWinner(j, i, this.state.currentMove)){
            winner = this.state.currentMove;
        }
        this.setState({
            cellValues: this.state.cellValues,
            currentMove: this.state.currentMove === 'x' ? 'o' : 'x',
            winner: winner
        });

    };

    checkWinner = (x,y,value) => {       

        for(let dx = -1; dx <= 1; dx++) {
            for(let dy = 0; dy <= 1; dy++) {
                if (dx == 0 && dy==0 ||
                    dx == 1 && dy==0){
                        continue;
                    }
                for(let offset = 0; offset < this.props.winnerSize; offset++){
                    if (this.checkDirection(x, y, value, dx, dy, offset))
                    {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    checkDirection = (x, y, value, dx, dy, offset) => {
        console.log(`CheckDirection: (${dx},${dy}), offset ${offset}`);
        
        for(let i = 0; i < this.props.winnerSize; i++){
            let multiplier = i - offset;
            let checkX = x + multiplier * dx;
            let checkY = y + multiplier * dy;

            console.log(`   Checking cell ${checkX},${checkY}`)
            if (checkX < 0 ||
                checkY < 0 ||
                checkX > this.props.size - 1 ||
                checkY > this.props.size - 1 ||
                this.state.cellValues[checkY][checkX] !== value){
                    console.log(false);
                    return false;
                }            
        }
        console.log(true);

        return true;
    }

    public render() {
        return (
            <div className="game">

                {
                    this.state.winner 
                        ? <h3>Winner: {this.state.winner}</h3>
                        : <h3>Current move: {this.state.currentMove}</h3>
                }

                
                {/* {
                    if (this.state.winner)
                    {
                        <h3>Winner: {this.state.winner}</h3>
                    } else {
                        <h3>Current move: {this.state.currentMove}</h3>
                    }
                }          */}
                            
                {
                    this.state.cellValues.map((row, i) =>{
                        return (<div key={i} className="game-row">
                            {
                                row.map((col, j) => {
                                    return <GameCell key={j} i={i} j={j} value={col} onClick={this.cellValueSet}></GameCell>
                                }
                            )}
                        </div>)
                    })
                }
            </div>
        );


    }
}

import * as React from 'react';
import GameCell from './GameCell';

export interface IGameBoardProps {
    size: number;
}

export interface IGameBoardState {
    cellValues: string[][];
}

export default class GameBoard extends React.Component<IGameBoardProps, IGameBoardState> {
    constructor(props: IGameBoardProps) {
        super(props);

        let cellValues = [];

        for (let i = 0; i < this.props.size; i++) {
            cellValues[i] = [];
            for (let j = 0; j < this.props.size; j++) {
                cellValues[i][j] = '';
            }
        }

        this.state = {
            cellValues: cellValues
        }
    }

    cellValueSet = (i,j) => {
        this.state.cellValues[i][j] = 'a';
    };

    public render() {
        return (
            <div className="game">
                            
                {
                    this.state.cellValues.map((row, i) =>{
                        return (<div key={i} className="game-row">
                            {
                                row.map((col, j) => {
                                    return <GameCell key={j} i={i} j={j} initialValue={col} onValueSet={this.cellValueSet}></GameCell>
                                }
                            )}
                        </div>)
                    })
                }
            </div>
        );


    }
}

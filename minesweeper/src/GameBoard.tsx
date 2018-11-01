import * as React from 'react';
import GameCell from './GameCell';
import { GameContext } from './GameContext';

export interface IGameBoardProps {

}

export default class GameBoard extends React.Component<IGameBoardProps> {
    
    public render() {
        
        return (
            <div className="game">

            <GameContext.Consumer>
            {
                (context) => (
                    context.cells.map((row, y) =>{
                        return (
                            <div key={y} className="game-row">
                                {
                                    row.map((cell, x) => {
                                        return <GameCell key={x} x={x} y={y} cell={cell}></GameCell>
                                    }
                                )}
                            </div>)
                    })
                )
            }
            </GameContext.Consumer>

            
            <GameContext.Consumer>
            {
                (context) => (
                    context.isGameOver
                    ? <h3 className="game-over">Game over</h3>
                    : ''
                )
            }
            </GameContext.Consumer>

            </div>
        );


    }
}

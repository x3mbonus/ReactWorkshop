import * as React from 'react';
import GameBoard from './GameBoard';


export interface IGameContainerProps {
    size: number;
}



export default class GameContainer extends React.Component<IGameContainerProps, any> {
    public render() {
        return (
            <div className="game-container">
                <h1>Tic Tac Toe</h1>                
                <h4>{this.props.size}x{this.props.size}</h4>               
                
                <GameBoard size={this.props.size}></GameBoard>
            </div>
        );
    }
}

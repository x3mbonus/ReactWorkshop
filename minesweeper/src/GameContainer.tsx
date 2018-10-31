import * as React from 'react';
import GameBoard from './GameBoard';
import GameLaunchForm from './GameLaunchForm';
import GameContextProvider from './GameContextProvider';
import { GameContext } from './GameContext';


export interface IGameContainerProps {
}

export interface IGameContainerState {
    isStarted
}



export default class GameContainer extends React.Component<IGameContainerProps, IGameContainerState> {
    public render() {
        let isLaunched = false;

        return (
            <div className="game-container">
                <h1>Minesweeper</h1>
                <GameContextProvider>
                    <GameContext.Consumer>
                    {
                        (context) => (
                            context.isGameStarted ? this.renderField() : this.renderLaunchPage()
                        )
                    }                        
                    </GameContext.Consumer>
                </GameContextProvider>

            </div>
        );
    }

    public renderLaunchPage() {
        return (
            <div>
                <GameLaunchForm></GameLaunchForm>
            </div>
        );
    }

    public renderField() {
        let size = 10;
        return (
            <div>
                <GameContext.Consumer>
                {
                    (context) => (
                        <h4>{context.fieldSize}x{context.fieldSize}</h4>
                    )
                }
                </GameContext.Consumer>
                <GameBoard></GameBoard>
            </div>
        );
    }
}

import * as React from 'react';
import TextField from '@material-ui/core/TextField';

import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { GameContext } from './GameContext';



export interface IGameLaunchFormProps {
}

export interface IGameLaunchFormState {
    fieldSize: number;
    bombsNumber: number;
    fieldSizeError: boolean;
    bombsNumberError: boolean;

}

const fieldMinValue:number = 5;
const fieldMaxValue:number = 30;
const bombsMinValue:number = 1;
const bombsMaxValue:number = 30;

export default class GameLaunchForm extends React.Component<IGameLaunchFormProps, IGameLaunchFormState> {

    constructor(props) {
        super(props);
        this.state = {
            fieldSize: 10,
            bombsNumber: 10,
            fieldSizeError: false,
            bombsNumberError: false,
        };
    }

    handleChangeFieldSize = event => {
        let value = event.target.value;
        let error = value <= fieldMinValue || value >= fieldMaxValue;

        this.setState({
            ...this.state,
            fieldSize: event.target.value,
            fieldSizeError: error   
        });
    };

    handleChangeBombsNumber = event => {
        let value = event.target.value;
        let error = value <= bombsMinValue || value >= bombsMaxValue;


        this.setState({
            ...this.state,
            bombsNumber: event.target.value,
            bombsNumberError: error
        });
    };


    launchGame = (context) => {
        if (this.state.fieldSizeError ||
            this.state.bombsNumberError) {
            return;
        }

        context.startGame({
            fieldSize: this.state.fieldSize,
            totalBombs: this.state.bombsNumber,
            leftBombs: this.state.bombsNumber
        });
    };


    public render() {
        return (
            <div>
                <GameContext.Consumer>
                    {
                        context => (
                            <form onSubmit={() => this.launchGame(context)}>
                                <div>
                                    <TextField
                                        key="1"
                                        id="field-size"
                                        type="number"
                                        error={this.state.fieldSizeError}
                                        label="Field size"
                                        margin="normal"
                                        value={this.state.fieldSize}
                                        required
                                        inputProps={
                                            {min:fieldMinValue, max:fieldMaxValue}
                                        }
                                        onChange={this.handleChangeFieldSize}

                                    />
                                    <TextField
                                        key="2"
                                        id="bombs-number"
                                        type="number"
                                        error={this.state.bombsNumberError}
                                        label="Bombs number"
                                        margin="normal"
                                        value={this.state.bombsNumber}
                                        inputProps={
                                            {min:bombsMinValue, max:bombsMaxValue}
                                        }                                        
                                        required
                                        onChange={this.handleChangeBombsNumber}

                                    />
                                </div>
                                <div>
                                    <Button type="submit" variant="outlined" color="primary" className="input-button" /*onClick={() => this.launchGame(context)}*/>
                                        Launch game
                                    </Button>
                                </div>
                            </form>
                        )
                    }
                </GameContext.Consumer>
            </div>
        );
    }
}
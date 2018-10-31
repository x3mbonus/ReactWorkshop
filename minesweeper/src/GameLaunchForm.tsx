import * as React from 'react';
import TextField from '@material-ui/core/TextField';

import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { GameContext } from './GameContext';



export interface IGameLaunchFormProps {
}

export interface IGameLaunchFormState {
    fieldSize:number;
    bombsNumber:number;

}

export default class GameLaunchForm extends React.Component<IGameLaunchFormProps, IGameLaunchFormState> {

    constructor(props){
        super(props);
        this.state = {
            fieldSize:10,
            bombsNumber: 10
        };        
    }

    handleChange = name => event => {
        this.setState({
          ...this.state,
          [name]: event.target.value
        });
      };


    launchGame = (context) => {
        context.startGame({
            fieldSize: this.state.fieldSize,
            totalBombs: this.state.bombsNumber,
            leftBombs: this.state.bombsNumber
        });                 
    };


  public render() {
    return (
      <div>
        <div>
            <TextField
            key="1"
            id="field-size"
            label="Field size"
            margin="normal"
            required
            onChange={this.handleChange('fieldSize')}

            />
            <TextField
            key="2"
            id="bombs-number"
            label="Bombs number"
            margin="normal"
            required
            onChange={this.handleChange('bombsNumber')}

            />
        </div>
        <div>
            <GameContext.Consumer>
            {
                context => (

                    <Button variant="outlined" color="primary" className="input-button" onClick={() => this.launchGame(context)}>
                        Launch game
                    </Button>
                )
            }
            </GameContext.Consumer>

        </div>
      </div>
    );
  }
}
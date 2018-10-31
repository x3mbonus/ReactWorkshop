import * as React from 'react';
import { GameContext } from './GameContext';

export interface IGameCellProps {
    value:string;
    key:number;
    x:number;
    y:number;
    onClick?:Function,
}

export default class GameCell extends React.Component<IGameCellProps> {
  onClick = (context) => {
      context.click(this.props.x, this.props.y);
    }

  public render() {
    let firstClass = "";
    if (this.props.y === 0) {
      firstClass += " first-row";
    }
    if (this.props.x === 0) {
      firstClass += " first-col";
    }
    return (
       <GameContext.Consumer>
        {
            (context) => (
              <div className={`game-cell ${firstClass} ${this.props.value === 'x'?"game-over":""}`} onClick={() => this.onClick(context)}>{
                this.props.value === 'o' 
                  ? '' : this.props.value
              }</div>
            )
        }                        
        </GameContext.Consumer>
        
    );
  }
}

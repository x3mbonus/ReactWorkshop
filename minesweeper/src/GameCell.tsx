import * as React from 'react';
import { ContextGameCell, GameContext } from './GameContext';

export interface IGameCellProps {
  cell: ContextGameCell;
  key: number;
  x: number;
  y: number;
  onClick?: Function,
}

export default class GameCell extends React.Component<IGameCellProps> {
  openCell = (context) => {
    //console.log('OpenCell', this.props.x, this.props.y);
    context.openCell(this.props.x, this.props.y);
  }
  markCell = (event, context) => {
    event.preventDefault();
    //console.log('OpenCell', this.props.x, this.props.y);
    context.markCell(this.props.x, this.props.y);
  }

  public render() {
    let cell = this.props.cell;

    let additionalClasses = "";
    if (this.props.y === 0) {
      additionalClasses += " first-row";
    }
    if (this.props.x === 0) {
      additionalClasses += " first-col";
    }

    let renderedValue = this.getRenderValue(cell);

    return (
      <GameContext.Consumer>
        {
          (context) => (
            <div className={`game-cell ${additionalClasses}`} 
              onClick={() => this.openCell(context)}
              onContextMenu={(event) => this.markCell(event, context)}
              >
              {renderedValue}
            </div>
          )
        }
      </GameContext.Consumer>

    );
  }

  getRenderValue(cell: ContextGameCell) {
    //console.log(this.props.x, this.props.y, cell);
    if (cell.hasBomb && cell.isOpened) {
      return (<span className="exploded-bomb">💣</span>);
    }

    if (cell.isOpened) {
      let bombsNear = cell.bombsNear||0;
      let className = `bombs-near-${bombsNear}`;
      return <span className={className}>{bombsNear}</span>
    }
    
    if (cell.isMarked) {
      return <span className="marked-cell">🚩</span>;
    }
    
    return "";
  }
}

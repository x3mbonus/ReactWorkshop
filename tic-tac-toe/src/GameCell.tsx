import * as React from 'react';

export interface IGameCellProps {
    value:string;
    key:number;
    i:number;
    j:number;
    onClick:Function,
}

export default class GameCell extends React.Component<IGameCellProps> {
  onClick = () => {
      if (this.props.value){
        return;
      }
      console.log(this.props.i, this.props.j);
      if (this.props.onClick)
      {
            this.props.onClick(this.props.i, this.props.j);
            
      }
    }

  public render() {
      
    //console.log(this.props.i, this.props.j, this.props.value)
    return (
        <div className="game-cell" onClick={this.onClick}>{this.props.value}</div>
    );
  }
}

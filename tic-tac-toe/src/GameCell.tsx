import * as React from 'react';

export interface IGameCellProps {
    initialValue:string;
    key:number;
    i:number;
    j:number;
    onValueSet:Function,
}

export interface IGameCellState {
    currentValue:string;
}

export default class GameCell extends React.Component<IGameCellProps, IGameCellState> {
  constructor(props: IGameCellProps) {
    super(props);

    this.state = {
        currentValue: this.props.initialValue
    }
  }

  public setValue(value){
      this.setState({
          currentValue: value
      });
  }

  onClick = () => {
      if (this.state.currentValue){
        return;
      }

      if (this.props.onValueSet)
      {
            this.props.onValueSet(this.props.i, this.props.j);
      }
    }

  public render() {
    return (
        <div className="game-cell" onClick={this.onClick}>{this.state.currentValue}</div>
    );
  }
}

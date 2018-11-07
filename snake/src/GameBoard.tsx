import * as React from 'react';

export interface IGameBoardProps {
}

export interface IGameBoardState {
    coords: [];

}

export default class GameBoard extends React.Component<IGameBoardProps, IGameBoardState> {
  constructor(props: IGameBoardProps) {
    super(props);

    this.state = {
        coords:[{x:1,y:1}]
    }
  }

  public render() {
    return (
      <div className="gameBoard">
        {JSON.stringify(this.state.coords)}
      </div>
    );
  }
}

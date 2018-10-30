import * as React from 'react';
import {ChangeEvent} from 'react';

export interface IShoppingListInputProps {
    onClick: Function;
}

export interface IShoppingListInputState {
    newItem: string;
}

export default class ShoppingListInput extends React.Component<IShoppingListInputProps, IShoppingListInputState> {
  constructor(props: IShoppingListInputProps) {
    super(props);

    this.state = {
        newItem: ""
    }
  }

  onInputChange= (e: ChangeEvent) => {
    this.setState({newItem: (e.target as HTMLInputElement).value})
  };

  onButtonClick = () => {
    this.props.onClick(this.state.newItem);
    this.setState({ newItem:""})
  };

  public render() {
    return (
      <div>
          <input type="text" onChange={ this.onInputChange } value={this.state.newItem}/>      
          <input type="button" onClick={this.onButtonClick} value="Add item to list"/> 
      </div>
    );
  }
}

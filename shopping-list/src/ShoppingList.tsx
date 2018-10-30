import * as React from 'react';
import ShoppingListInput from './ShoppingListInput';

export interface IShoppingListProps {
}

export interface IShoppingListState {
    items: string[];
}

export class ShoppingList extends React.Component<IShoppingListProps, IShoppingListState> {
  constructor(props: IShoppingListProps) {
    super(props);

    this.state = {
        items: ["Milk", "Chili", "Nuts", "Beer"]
    }
  }


  addItemToShoppingList = (newItem: string) => {
      this.setState({items : [...this.state.items, newItem]});
  };

  public render() {
    return (
      <div>
        <ul>
            { this.state.items.map(item => <li> { item } </li>) }
        </ul>
        <ShoppingListInput onClick={this.addItemToShoppingList}></ShoppingListInput>
      </div>      
    );
  }
}

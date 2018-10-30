import * as React from 'react';
import { ShoppingList } from './ShoppingList';

export interface IShoppingListContainerProps {
    title: String;
}

export class ShoppingListContainer extends React.Component<IShoppingListContainerProps, any> {
  public render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <ShoppingList></ShoppingList>
      </div>
    );
  }
}


export default ShoppingListContainer;
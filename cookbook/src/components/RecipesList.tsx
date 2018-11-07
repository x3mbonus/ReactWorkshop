import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Stores } from "../stores/stores";
import { RecipesStore } from "../stores/RecipesStore";
import { Link } from 'react-router-dom';

export interface IRecipesListProps {
    [Stores.Recipes]?: RecipesStore;
}

export interface IRecipesListState {
    isLoading:boolean;
}

@inject(Stores.Recipes)
@observer
export default class RecipesList extends React.Component<IRecipesListProps, IRecipesListState> {
    constructor(props: IRecipesListProps) {
        super(props);

        this.state = {
            isLoading: true
        }
    }

    async componentDidMount() {
        const {[Stores.Recipes] : recipesStore} = this.props;
        await recipesStore!.fetchRecipes();
        this.setState({
            ...this.state,
            isLoading: false
        })
    }



    public renderRecipes() {
        const { [Stores.Recipes]: recipesStore } = this.props;
        return (
            <ul>
                {
                    recipesStore!.recipes.map(recipe =>
                        <li key={recipe.id}>
                            <Link to={`/detail/${recipe.id}`}>{recipe.title}</Link>
                        </li>
                    )
                }
            </ul>
        );
    }
    public render() {
        return (
            <div>
                { this.state.isLoading ? (<div>Loading...</div>) : this.renderRecipes()}
            </div>
        );
    }
}

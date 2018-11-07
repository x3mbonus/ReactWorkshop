import * as React from 'react';
import { Stores } from "../stores/stores";
import { RecipesStore } from "../stores/RecipesStore";
import { RouteComponentProps } from 'react-router';
import { observer, inject } from 'mobx-react';

interface RecipeDetailRouteParams {
    id: string;
}

export interface IRecipeDetailProps extends RouteComponentProps<RecipeDetailRouteParams> {
    [Stores.Recipes]?: RecipesStore;
}

export interface IRecipeDetailState {
    isLoading: boolean;

}


@inject(Stores.Recipes)
@observer
export default class RecipeDetail extends React.Component<IRecipeDetailProps, IRecipeDetailState> {
  constructor(props: IRecipeDetailProps) {
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



  public render() {

        if (this.state.isLoading) {
            return this.renderText("Loading ...");
        }
        const { [Stores.Recipes]: recipesStore } = this.props;
        const id = parseInt(this.props.match.params.id);
        if (!id){
            return this.renderText("Id is missing");
        }

        const recipe = recipesStore!.getRecipeById(id);
        if (!recipe) {
            return this.renderText("Cannot find recipe");
        }
        let ingredients = recipe.ingredients || [];
        return (
            <div>
                <h3>{recipe.title}</h3>
                <div>{recipe.description}</div>
                <ul>
                    {
                        ingredients!.map((ingredient,i) => 
                            <li key={i}>{ingredient}</li>
                        )
                    }
                </ul>
            </div>
        );
    }

    public renderText = (text:string) => {
        return (
            <div>
                {text}
            </div>
        );
    }
}

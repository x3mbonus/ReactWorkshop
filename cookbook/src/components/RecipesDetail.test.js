import React from "react";
import { RecipesStore } from "../stores/RecipesStore";

import renderer from 'react-test-renderer';

import RecipeDetail from "./RecipeDetail";


it('renders correctly', () => {
    const recipesStore = new RecipesStore;
    recipesStore.recipes = [{
        id: 0,
        title: "Spaghetti with ketchup",
        ingredients: [
            "Spaghetti",
            "Ketchup"
        ],
        description: "Cook spaghetti in boiled water and serve with ketchup."
    },
    {
        id: 1,
        title: "Spaghetti with vodka",
        ingredients: [
            "Spaghetti",
            "Ketchup"
        ],
        description: "Cook spaghetti in boiled water and serve with ketchup."
    }];

    const routeParams = {
        params:{
            id:1
        }
    };

    const tree = renderer.create(<RecipeDetail RecipesStore={recipesStore} match = {routeParams}></RecipeDetail>);

    expect(tree).toMatchSnapshot();
})
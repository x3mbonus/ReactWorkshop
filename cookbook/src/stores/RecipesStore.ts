import { Recipe } from "../models/Recipe";
import { observable, action, computed } from "mobx";
import axios from "axios";

export class RecipesStore {
    @observable recipes: Recipe[] = [];
    
    // @computed get getRecipeById(id:number) : Recipe {
    //     return this.recipes.find(x => x.id == id);
    // }

    @action getRecipeById = (id: number) => {
        // debugger;

        return this.recipes.find(x => x.id == id);
    }

    @action addRecipe = (id:number, title:string, ingredients: string[], description: string) => {
        this.recipes = [...this.recipes, { id: id, title: title, ingredients: ingredients, description: description}];
    }

    @action fetchRecipes = async () => {
            // debugger;
        if (this.recipes.length > 0){
            return;
        }
        const response = await axios.get('/recipes.json');
        this.recipes = response.data;
    }
}
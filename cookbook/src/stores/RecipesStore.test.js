import { RecipesStore } from "./RecipesStore";
import axios from 'axios';
jest.mock('axios');


test('I can add recipe', () => {
    const store = new RecipesStore;
    const recipe = {
        id: 1,
        title: "Spaghetti with ketchup",
        ingredients: [
            "Spaghetti",
            "Ketchup"
        ],
        description: "Cook spaghetti in boiled water and serve with ketchup."
    };

    store.addRecipe(recipe.id, recipe.title,  recipe.ingredients, recipe.description);

    expect(store.recipes).toContainEqual(recipe);
});

test('I can get recipe', () => {
    const store = new RecipesStore;
    const recipes = [{
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

    store.recipes = recipes;

    ;

    expect(store.getRecipeById(1)).toEqual(recipes[1]);
});




test('I can fetch recipes', async () => {
    //Arrange
    const store = new RecipesStore;

    const response = {data: [{
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
    }]};

    
    axios.get.mockResolvedValue(response);
    
    //Act
    await store.fetchRecipes();

    //Assert
    expect(store.recipes).toEqual(response.data);
});
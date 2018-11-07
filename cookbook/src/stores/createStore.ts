import {Stores} from "./stores"
import {RecipesStore} from "./RecipesStore"

export const createStore = () => {
    return {
        [Stores.Recipes]: new RecipesStore
    }
}
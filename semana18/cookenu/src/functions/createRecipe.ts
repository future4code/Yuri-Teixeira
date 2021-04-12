import connection from "../connection";
import { recipeType } from "../types/types";

const createRecipe = async (recipe: recipeType) => {
  return await connection(`cookenu_recipes`).insert({
    id: recipe.id,
    title: recipe.title,
    description: recipe.description,
    creationDate: recipe.creationDate,
  });
};

export default createRecipe;

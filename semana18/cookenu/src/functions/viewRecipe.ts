import connection from "../connection";

const viewRecipe = async (id: string) => {
  return await connection(`cookenu_recipes`).where({ id });
};

export default viewRecipe;

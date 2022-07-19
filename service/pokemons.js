import { instance } from ".";

export const getFirstPokemons = async () => {
  const { data } = await instance.get(POKEMON, { limit: 7 });

  return data;
};

import { pokeApi } from "../../api";
import { Pokemon } from "../../interfaces";

const getPokemonData = async (nameOrId: string) => {
  const { data } = await pokeApi.get<Pokemon>(
    `/pokemon/${nameOrId.toLowerCase()}`
  );

  return {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
  };
};

export default getPokemonData;

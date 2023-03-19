import { pokeApi } from "../../api";
import { Pokemon } from "../../interfaces";

const getPokemonData = async (nameOrId: string) => {
  try {
    const { data } = await pokeApi.get<Pokemon>(
      `/pokemon/${nameOrId.toLowerCase()}`
    );

    return {
      id: data.id,
      name: data.name,
      sprites: data.sprites,
    };
  } catch (error) {
    return null;
  }
};

export default getPokemonData;

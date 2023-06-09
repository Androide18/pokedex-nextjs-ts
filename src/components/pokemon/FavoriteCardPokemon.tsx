import { Card, Grid } from "@nextui-org/react";
import { useRouter } from "next/router";

interface Props {
  pokemonId: number;
}

export const FavoriteCardPokemon = ({ pokemonId }: Props) => {
  const route = useRouter();

  const onFavoriteClicked = () => {
    route.push(`/pokemon/${pokemonId}`);
  };

  return (
    <Grid
      xs={6}
      sm={3}
      md={2}
      xl={1}
      key={pokemonId}
      onClick={onFavoriteClicked}
    >
      <Card isHoverable isPressable css={{ padding: 10 }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
          alt={"pokemon" + pokemonId}
          width="100%"
          height={140}
        />
      </Card>
    </Grid>
  );
};

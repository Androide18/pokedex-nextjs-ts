import { SmallPokemon } from "../../../interfaces";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";

interface Props {
  pokemon: SmallPokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/name/${pokemon.name}`);
  };

  return (
    <Grid xs={12} sm={4} md={4} lg={3} key={pokemon.id}>
      <Card
        isHoverable
        variant="bordered"
        isPressable
        css={{ mw: "400px" }}
        onClick={onClick}
      >
        <Card.Body css={{ p: "$10" }}>
          <Card.Image
            src={pokemon.img}
            alt={pokemon.name}
            width="100%"
            height={140}
          />
        </Card.Body>
        <Card.Footer css={{ p: "$10" }}>
          <Row justify="space-between">
            <Text transform="capitalize">{pokemon.name}</Text>
            <Text>{pokemon.id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};

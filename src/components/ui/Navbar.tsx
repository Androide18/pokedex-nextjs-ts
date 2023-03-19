import { Spacer, useTheme } from "@nextui-org/react";
import { Text, Image, Row } from "@nextui-org/react";
import NextLink from "next/link";

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        width: "100%",
        flexDirection: "row",
        padding: "0 20px",
        backgroundColor: theme?.colors.gray100.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="pokemon-icon"
        width={50}
        height={50}
      />
      <NextLink href="/" passHref style={{ cursor: "pointer" }}>
        <Row align="center">
          <Text color="white" h2 style={{ marginBottom: "0px" }}>
            P
          </Text>
          <Text color="white" h3 style={{ marginBottom: "0px" }}>
            okedex
          </Text>
        </Row>
      </NextLink>

      <Spacer css={{ flex: 1 }} />
      <NextLink href="/favorites" passHref>
        <Text color="white">My Pokemons</Text>
      </NextLink>
    </div>
  );
};

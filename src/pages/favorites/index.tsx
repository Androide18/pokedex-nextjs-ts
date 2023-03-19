import { Layout } from "@/components/layouts";
import { NoFavorites } from "../../components/ui";
import { useState, useEffect } from "react";
import { localFavorites } from "@/utils";
import { FavoritePokemons } from "@/components/pokemon";

const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="My Pokemons">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons favPokemons={favoritePokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPage;

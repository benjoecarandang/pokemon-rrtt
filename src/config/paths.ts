export const paths = {
  app: {
    pokemonsList: {
      path: "/",
      getHref: () => "/"
    },
    pokemonDetails: {
      path: "pokemon/:pokemonId",
      getHref: (id: string) => `/pokemon/${id}`
    },
    tcg: {
      path: "pokemons-tcg",
      getHref: () => "/pokemons-tcg"
    }
  }
} as const;

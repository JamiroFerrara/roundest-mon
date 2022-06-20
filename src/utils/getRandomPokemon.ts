const MAX_DEX_TD = 493;

export const getRandomPokemon: (notThisOne?: number) => number = (notThisOne) => {
  const pokedexNumber = Math.floor(Math.random() * (MAX_DEX_TD -1) +1)

  if (pokedexNumber !== notThisOne) return pokedexNumber;
    return getRandomPokemon(notThisOne);
};

export const getOptionsForVote = () => {
  const firstId = getRandomPokemon();
  const secondId = getRandomPokemon(firstId);

  return [firstId, secondId];
}

const fetchPokemon = async () => {
  const raw = await fetch('http://localhost:3001/types');
  const data = await raw.json();
  return data;
};

export default fetchPokemon;
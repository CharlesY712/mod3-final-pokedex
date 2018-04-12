export const fetchPokemonType = async () => {
  try {
    const raw = await fetch('http://localhost:3001/types');
    const data = await raw.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const fetchPokemonById = async (id) => {
  const raw = await fetch(`http://localhost:3001/pokemon/${id}`);
  const data = await raw.json();
  return data;
};

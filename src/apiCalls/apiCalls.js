const fetchPokemon = async () =>{
  const raw = await fetch('http://localhost:3001/types');
  console.log(raw);
};

export default fetchPokemon;
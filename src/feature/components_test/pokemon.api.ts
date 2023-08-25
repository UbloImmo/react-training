import axios from "axios";
import { PokemonDto } from "../provider/PokeData.types";
import { Pokemon } from "./Card";

export const getPokemon = (id: number) =>
  axios
    .get<PokemonDto>(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) => pokemonDtoToPokemon(res.data));

const pokemonDtoToPokemon = (pokemonDto: PokemonDto): Pokemon => ({
  name: pokemonDto.name,
  type: pokemonDto.types[0].type.name,
  imageUrl: pokemonDto.sprites.front_default,
  stats: pokemonDto.stats.map((stat) => ({
    name: stat.stat.name,
    value: stat.base_stat,
  })),
});

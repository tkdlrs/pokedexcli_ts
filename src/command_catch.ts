import type { State } from "./state.js"

export async function commandCatch(state: State, ...args: string[]) {
    if (args.length !== 1) {
        throw new Error("you must provide a pokemon name");
    };
    //
    const pokemon = args[0];
    const pokemonData = await state.pokeAPI.fetchPokemon(pokemon);
    const catchRate = Math.random() * pokemonData.base_experience;
    //
    console.log(`Throwing a Pokeball at ${pokemon}...`);
    if (catchRate > 25) {
        console.log(`${pokemon} was caught!`);
        state.pokedex[pokemon] = pokemonData;
    } else {
        console.log(`${pokemon} escaped!`);
    }
    //
    return;
}
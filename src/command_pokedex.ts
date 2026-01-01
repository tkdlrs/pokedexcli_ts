import type { State } from "./state.js";


export async function commandPokedex(state: State) {
    const pokemonList: string[] = [];
    // console.log("state.caughtPokemon", state.caughtPokemon)
    for (const pokemon of Object.keys(state.caughtPokemon)) {
        pokemonList.push(pokemon)
    };
    console.log("Your Pokedex:");
    console.log(` - ${pokemonList.join("\n - ")}`);
    //
    return;
}
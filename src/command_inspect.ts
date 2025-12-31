import type { State } from "./state.js";

export async function commandInspect(state: State, ...args: string[]) {
    if (args.length !== 1) {
        throw new Error("you must provide a pokemon name")
    }
    //
    const name = args[0];
    const pokemon = state.caughtPokemon[name];
    if (!pokemon) {
        throw new Error("you have not caught that pokemon");
    }
    // Get the data of interest
    const height = pokemon.height;
    const weight = pokemon.weight;
    const stats = pokemon.stats.map(item => {
        return {
            name: item.stat.name,
            value: item.base_stat
        }
    });
    const types = pokemon.types.map(item => item.type.name);
    //
    const pokeData = {
        name,
        height,
        weight,
        stats,
        types,

    };
    //
    console.log(printPokemonData(pokeData));
    //
    return;
}

export function printPokemonData({ name, height, weight, stats, types }: pokemonData): string {
    const printString =
        `Name: ${name}
Height: ${height}
Weight: ${weight}
Stats: 
${stats.map(stat => `  -${stat.name}: ${stat.value}`).join('\n')}
Types: 
${types.map(type => `  - ${type}`).join('\n')}`;
    //
    return printString;
}

export type pokemonData = {
    name: string;
    height: number;
    weight: number;
    stats: { name: string; value: number }[];
    types: string[];
};
//
import { InternalEventTargetEventProperties } from "node:events";
import type { State } from "./state.js";

export async function commandInspect(state: State, ...args: string[]) {
    if (args.length !== 1) {
        throw new Error("you must provide a pokemon name")
    }
    //
    const name = args[0];
    if (state.caughtPokemon.hasOwnProperty(name) === false ||
        typeof state.caughtPokemon[name] === undefined) {
        console.log("you have not caught that pokemon");
        return;
    }
    // console.log(state.caughtPokemon[name]);
    const height = state.caughtPokemon[name].height;
    const weight = state.caughtPokemon[name].weight;
    const stats = state.caughtPokemon[name].stats.map(item => {
        return {
            name: item.stat.name,
            value: item.base_stat
        }
    });
    const types = state.caughtPokemon[name].types.map(item => item.type.name)
    //
    const pokeData = {
        name,
        height,
        weight,
        stats,
        types,

    }
    printPokemonData(pokeData);
    //
    return;
}

export function printPokemonData({ name, height, weight, stats, types }: pokemonData) {
    const printString =
        `Name: ${name}
Height: ${height}
Weight: ${weight}
Stats: 
${stats.map(stat => `  -${stat.name}: ${stat.value}`).join('\n')}
Types: 
${types.map(type => `  - ${type}`).join('\n')}`;
    //
    console.log(printString);
    //
    return;
}

export type pokemonData = {
    name: string;
    height: number;
    weight: number;
    stats: { name: string; value: number }[];
    types: string[];
};
//
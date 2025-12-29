import { State } from "./state.js";

export async function commandExplore(state: State, ...args: string[]) {
    if (args.length !== 1) {
        throw new Error("you must provide a location name");
    };

    const name = args[0];
    const location = await state.pokeAPI.fetchLocation(name);
    console.log(`Exploring ${name}...`);
    //
    const pokemons = location.pokemon_encounters.map(data => data.pokemon.name);
    if (pokemons.length > 0) {
        console.log("Found Pokemon:");
        for (const pokemon of pokemons) {
            console.log(` - ${pokemon}`);
        }
    } else {
        console.log(`The location ${name} does not have any Pokemon.`);
    }
    //
    return;
}
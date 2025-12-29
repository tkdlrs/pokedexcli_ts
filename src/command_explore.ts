import { State } from "./state.js";

export async function commandExplore(state: State, ...args: string[]) {
    if (args.length === 0 || args.length < 1) {
        console.log("Area not provided. Please provide the name of a location")
        return;
    };
    if (args.length > 1) {
        console.log("Too many areas provided. Please explore a single location at a time")
        return;
    };
    const locationName = args[0];
    console.log("locationName:", locationName)
    const locationData = await state.pokeAPI.fetchLocation(locationName);
    //
    const pokemons = locationData.pokemon_encounters.map(data => data.pokemon.name)
    // console.log(JSON.stringify(locationData, null, 2))
    // console.log(JSON.stringify(pokemons, null, 2))
    if (pokemons.length > 0) {
        console.log("Found Pokemon:")
        for (const pokemon of pokemons) {
            console.log(`   - ${pokemon}`)
        }
    } else {
        console.log(`The location ${locationName} does not have any Pokemon.`)
    }
    //
    return;
}
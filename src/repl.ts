import { createInterface } from 'node:readline';
import { stdin, stdout } from 'node:process'

const r1 = createInterface({
    input: stdin,
    output: stdout,
    prompt: "Pokedex > ",
})

export function cleanInput(input: string): string[] {
    return input
        .toLowerCase()
        .trim()
        .split(" ")
        .filter((word) => word != "");
}


export function startREPL() {
    const display = r1.prompt();
    r1.on("line", (rawInput: string) => {
        if (rawInput === "") {
            r1.prompt();
        }
        //
        console.log(`Your command was: ${cleanInput(rawInput)[0]}`)
        r1.prompt();
    })
    //
}
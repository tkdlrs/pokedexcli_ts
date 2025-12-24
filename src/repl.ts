import { createInterface } from 'node:readline';
import { stdin, stdout } from 'node:process'

export function startREPL() {
    const r1 = createInterface({
        input: stdin,
        output: stdout,
        prompt: "pokedex > ",
    });
    //
    r1.prompt();
    // 
    r1.on("line", async (input: string) => {
        const words = cleanInput(input);
        if (words.length === 0) {
            r1.prompt();
            return;
        }
        //
        const commandName = words[0]
        console.log(`Your command was: ${commandName}`)
        r1.prompt();
    });
}

export function cleanInput(input: string): string[] {
    return input
        .toLowerCase()
        .trim()
        .split(" ")
        .filter((word) => word != "");
}

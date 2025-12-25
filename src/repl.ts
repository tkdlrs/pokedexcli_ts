import { createInterface } from 'node:readline';
import { stdin, stdout } from 'node:process'
import { getCommands } from './commands.js';

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
        //
        const commands = getCommands();
        const cmd = commands[commandName];
        if (!cmd) {
            console.log("Unknown command")
            r1.prompt();
            return;
        }
        //
        try {
            cmd.callback(commands);
        } catch (e) {
            console.log(e);
        }
        //
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

import { readLines } from "https://deno.land/std@0.167.0/io/mod.ts";
import * as path from "https://deno.land/std@0.167.0/path/mod.ts";

export type Records = Array<number[]>;

async function* enumerate<T>(iterable: AsyncIterable<T>): AsyncGenerator<[number, T]> {
    let i = 0;

    for await (const x of iterable) {
        yield [i, x];
        i++;
    }
}

export async function* linesGenerator({ filePath }: { filePath: string }): AsyncGenerator<[number, string]> {
    const filename = path.join(Deno.cwd(), filePath);
    const fileReader = await Deno.open(filename);
    for await (const [index, line] of enumerate<string>(readLines(fileReader))) {
        yield [index, line];
    }
}

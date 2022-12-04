import { readLines } from "https://deno.land/std@0.167.0/io/mod.ts";
import * as path from "https://deno.land/std@0.167.0/path/mod.ts";

export type Records = Array<number[]>;

export const readRecords = async ({ filePath }: { filePath: string }): Promise<Records> => {
    const filename = path.join(Deno.cwd(), filePath);
    const fileReader = await Deno.open(filename);

    const records: Array<number[]> = [
        [],
    ]
    let currentIndex = 0

    for await (let line of readLines(fileReader)) {
        if (line.length === 0) {
            records.push([])
            currentIndex++;
            continue;
        }
        records[currentIndex] = [
            ...records[currentIndex],
            parseInt(line, 10),
        ]
    }

    return records
}

import fs from 'fs';

export default function readInput(day) {
    try {
        const data = fs.readFileSync(`day${day}/input.txt`);
        return data.toString();
    } catch (error) {
        console.error(`Got an error trying to read the file: ${error.message}`);
    }
}
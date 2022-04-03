import { readFile } from 'fs/promises';

export async function resolve(path) {
    try {
        return JSON.parse(await readFile(path, 'utf8'))
    } catch {
        throw new Error('There was an error with JSON resolution.')
    }
};
import { readFile } from 'fs/promises';

function resolve(path) {
    readFile(path, 'utf8').then((str) => {
        try {
            return JSON.parse(str)
        } catch {
            throw new Error('There was an error with JSON resolution.')
        }
    })
};

export default resolve;
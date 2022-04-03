export type ResolveReturn = { [key: string]: any }

/**
 * Resolves a JSON file.
 * @param path The path of the JSON file. Uses fs path style.
 */
export function resolve(path: string): ResolveReturn
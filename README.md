# jsonsided

Resolves json files

## Installation

```bash
npm i jsonsided
yarn add jsonsided
pnpm add jsonsided
```

## Example

**config.json**
```json
{
    "hi": "hello",
    "bye": "see ya later"
}
```

**index.js**
```ts
import resolve from 'jsonsided'

const config = await resolve('./config.json');
// -> { hi: 'hello', bye: 'see ya later' }
```
# rollup-plugin-buble

Use Surplus JSX with rollup.

## Installation

```bash
npm install --save-dev rollup-plugin-surplus
```

## Usage

```js
import { rollup } from 'rollup';
import surplus from 'rollup-plugin-surplus';

rollup({
  entry: 'main.js',
  plugins: [ surplus() ]
}).then(...)
```

## License

MIT
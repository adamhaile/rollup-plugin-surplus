# rollup-plugin-surplus
A rollup plugin for compiling [Surplus JSX](https://github.com/adamhaile/surplus) views.
## How to install
```sh
> npm install --save-dev rollup-plugin-surplus
```
## How to use

Specify `suplus()` in the `plugins` property of your config.

Simple example:

```javascript
// rollup.config.js
import surplus from 'rollup-plugin-surplus';
import resolve from 'rollup-plugin-node-resolve';

export default {
    entry: 'main.js',
    dest: 'dist/main.js',
    format: 'iife',
    plugins: [
        surplus(),
        resolve({ extensions: ['.js', '.jsx'] })
    ]
};
```
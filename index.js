// require("@babel/core").transformSync(('./src/index.js'), {
//   plugins: ["@babel/plugin-transform-modules-commonjs"],
// });

import dotenv from 'dotenv'

dotenv.config()
const db = process.env.URL
console.log(typeof db);
console.log(dotenv.config(parsed.URL));


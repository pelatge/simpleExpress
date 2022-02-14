require("@babel/core").transformSync(('./src/index.js'), {
  plugins: ["@babel/plugin-transform-modules-commonjs"],
});
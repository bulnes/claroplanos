const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const templates = [
  "index",
  "claro-tv-hd",
  "claro-internet",
  "claro-planos-celular",
  "claro-pos-pago",
  "claro-controle",
  "claro-familia",
];

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    clean: true,
  },
  plugins: [
    ...templates.map(
      (template) =>
        new HtmlWebpackPlugin({
          template: `./src/templates/${template}.html`,
          filename: `${template}.html`,
        })
    ),
  ],
};

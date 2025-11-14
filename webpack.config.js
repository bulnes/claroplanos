const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const templates = [];

const assetsPath = ["images", "styles", "scripts"];

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  plugins: [
    ...templates.map(
      (templatePath) =>
        new HtmlWebpackPlugin({
          template: templatePath,
          filename: templatePath.replace("src/templates/", ""),
        })
    ),
    new CopyPlugin({
      patterns: assetsPath.map((asset) => ({
        from: `./src/${asset}`,
        to: asset,
      })),
    }),
  ],
};

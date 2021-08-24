const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "./dist"),
  },
  mode: "production",
  resolve: {
    alias: {
      process: "process/browser",
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
  },
  module: {
    rules: [
      {
        test: /node_modules\/vfile\/core\.js/,
        use: [
          {
            loader: "imports-loader",
            options: {
              type: "commonjs",
              imports: ["single process/browser process"],
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: path.resolve(__dirname, "node_modules"),
        use: ["babel-loader"],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: false },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jp(e*)g|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 8000,
          fallback: "file-loader",
          name: 'images/[hash]-[name].[ext]',
          esModule: false,
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              fallback: "file-loader",
              name: "fonts/[name].[ext]",
              esModule: false,
            }
          }
        ]
      }
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "common.css",
    }),
    new CleanWebpackPlugin(),
  ],
};
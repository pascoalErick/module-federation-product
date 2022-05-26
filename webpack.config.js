/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
var webpack = require("webpack");
const dependencies = require("./package.json").dependencies;
const Dotenv = require("dotenv-webpack");

const envPaths = {
  production: path.resolve("./", `.env.production`),
  development: path.resolve("./", `.env.development`),
};

module.exports = (_, args) => {
  const envPath = envPaths[args.mode] || envPaths.development;

  require("dotenv").config({ path: envPath });

  return {
    mode: args.mode,

    performance: {
      hints: args.mode === "production" ? "warning" : false,
    },

    entry: "./src/index.tsx",
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "./dist"),
      publicPath: process.env.URL_PRODUCT_MF + "/",
    },
    devServer: {
      historyApiFallback: true,
      static: {
        directory: path.join(__dirname, "dist"),
      },
      compress: true,
      port: 9091,
      hot: true,
      headers: { "Access-Control-Allow-Origin": "*" },
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
            },
          },
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
      ],
    },

    plugins: [
      new ModuleFederationPlugin({
        name: "ProductMF",
        filename: "remoteEntry.js",
        exposes: {
          "./Routes": "./src/routes",
          "./Menu": "./src/menu",
        },
        remotes: {
          CoreMF: `CoreMF@${process.env.URL_CORE_MF}/remoteEntry.js`,
        },
        shared: {
          react: {
            singleton: true,
            requiredVersion: dependencies["react"],
          },
          "react-dom": {
            singleton: true,
          },
          "react-router-dom": {
            singleton: true,
          },
          "@emotion/react": {
            singleton: true,
            requiredVersion: dependencies["@emotion/react"],
          },
        },
      }),

      new webpack.ProvidePlugin({
        React: "react",
      }),

      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./public/index.html",
        title: "ProductMF",
      }),

      new Dotenv({
        safe: true,
        path: envPath,
      }),
    ],
  };
};

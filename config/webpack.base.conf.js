const path = require("path");
const fs = require("fs");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Main const
const PATHS = {
  src: path.join(__dirname, "../src"),
  dist: path.join(__dirname, "../build"),
  assets: "assets/"
};

// Pages const for HtmlWebpackPlugin
const PAGES_DIR = `${PATHS.src}/html/pages`;
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith(".html"));

module.exports = {
  // BASE config
  externals: {
    paths: PATHS
  },
  entry: {
    app: PATHS.src,
    // module: `${PATHS.src}/your-module.js`, //еще одна точка входа
  },
  output: {
    filename: `${PATHS.assets}js/[name].js`,
    path: PATHS.dist,
    publicPath: "/"
  },
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       vendor: {
  //         name: 'vendors',
  //         test: /node_modules/,
  //         chunks: 'all',
  //         enforce: true
  //       }
  //     }
  //   }
  // },
  module: {
    rules: [{
      test: /\.js$/,
      loader: "babel-loader",
      exclude: "/node_modules/"
    }, {
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      loader: "file-loader",
      options: {
        name: "[name].[ext]"
      }
    }, {
      test: /\.(png|jpg|jpeg|gif|svg)$/,
      loader: "file-loader",
      options: {
        name: "[name].[ext]"
      }
    }, {
      test: /\.(sc|c|sa)ss$/,
      use: [
        "style-loader",
        MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: { sourceMap: true }
        }, {
          loader: "postcss-loader",
          options: { sourceMap: true, config: { path: "./config/postcss.config.js" } }
        }, {
          loader: "sass-loader",
          options: { sourceMap: true }
        }
      ]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `${PATHS.assets}css/[name].css`,
    }),
    new CopyWebpackPlugin([
      { from: `${PATHS.src}/${PATHS.assets}images`, to: `${PATHS.assets}images` },
      { from: `${PATHS.src}/${PATHS.assets}fonts`, to: `${PATHS.assets}fonts` },
      { from: `${PATHS.src}/${PATHS.assets}static`, to: "" },
    ]),

    // Automatic creation any html pages (Don't forget to RERUN dev server)
    ...PAGES.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/${page}`,
      filename: `./${page}`
      // , inject: false
    }))
  ],
};

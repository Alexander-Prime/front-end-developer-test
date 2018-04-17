const path = require("path");
const webpack = require("webpack");

const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const paths = require("./paths");
const publicPath = "/";

const serverPort = process.env.DEV_SERVER_PORT;
const serverHost = process.env.DEV_SERVER_HOST;
const serverUrl = `http://${serverHost}:${serverPort}`;

module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    modules: [path.resolve(__dirname, "../src"), "node_modules"],
  },
  devtool: "source-map",
  entry: {
    app: [
      "@babel/polyfill",
      `webpack-dev-server/client?${serverUrl}`,
      "webpack/hot/dev-server",
      paths.appIndex,
    ],
  },
  devServer: {
    hot: true,
    inline: false,
    quiet: true,
    port: serverPort,
    publicPath,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        include: paths.appSrc,
        use: [
          "babel-loader",
          {
            loader: "ts-loader",
            options: {
              configFile: "tsconfig.json",
            },
          },
        ],
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: "file-loader",
        options: {
          name: "static/media/[name].[hash:8].[ext]",
        },
      },
      {
        test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "static/media/[name].[hash:8].[ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: [`Dev server running at ${serverUrl}`],
      },
    }),
  ],
  output: {
    path: paths.appDist,
    pathinfo: true,
    filename: "static/[name].js",
    chunkFilename: "static/[name].js",
    publicPath,
  },
};

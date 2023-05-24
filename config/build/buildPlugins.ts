import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const buildPlugins = (
  path: string,
  isDev: boolean
): webpack.WebpackPluginInstance[] => {
  return [
    new HTMLWebpackPlugin({
      filename: "index.html",
      template: path,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
  ];
};

export default buildPlugins;

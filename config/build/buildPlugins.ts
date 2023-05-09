import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";

const buildPlugins = (path: string): webpack.WebpackPluginInstance[] => {
  return [
    new HTMLWebpackPlugin({
      template: path,
    }),
    new webpack.ProgressPlugin(),
  ];
};

export default buildPlugins;

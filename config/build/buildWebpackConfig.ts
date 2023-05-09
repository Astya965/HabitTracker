import webpack from "webpack";

import buildLoaders from "./buildLoaders";
import buildPlugins from "./buildPlugins";
import buildDevConfig from "./buildDevConfig";

import { BuildOptions } from "./types/config";

const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
  const { mode, paths } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.output,
      clean: true,
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    module: {
      rules: buildLoaders(),
    },
    plugins: buildPlugins(paths.html),
    ...buildDevConfig(options),
  };
};

export default buildWebpackConfig;

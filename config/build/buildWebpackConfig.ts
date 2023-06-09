import webpack from "webpack";

import buildLoaders from "./buildLoaders";
import buildPlugins from "./buildPlugins";
import buildDevConfig from "./buildDevConfig";
import buildResolvers from "./buildResolvers";

import { BuildOptions } from "./types/config";

const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
  const { mode, paths, port } = options;
  const isDev = mode === "development";

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.output,
      clean: true,
    },
    resolve: buildResolvers(paths.src),
    module: {
      rules: buildLoaders(options),
    },
    plugins: buildPlugins(paths.html, isDev),
    ...buildDevConfig(port, isDev),
  };
};

export default buildWebpackConfig;

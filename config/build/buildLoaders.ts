import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
  const { mode } = options;
  const isDev = mode === "development";

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const cssLoader = {
    loader: "css-loader",
    options: {
      modules: {
        auto: /\.m\./,
        localIdentName: isDev
          ? `[name]__[local]--[hash:base64:8]`
          : `[hash:base64:8]`,
      },
    },
  };

  const styleLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      cssLoader,
      // Place for postcss-loader
      "sass-loader",
    ],
  };

  const svgLoader: webpack.RuleSetRule = {
    test: /\.svg$/,
  };

  const imgLoader: webpack.RuleSetRule = {
    test: /\.(png|jpg|jpeg|gi|ttf)$/i,
    type: "asset/resource",
  };

  return [typescriptLoader, styleLoader];
};

export default buildLoaders;

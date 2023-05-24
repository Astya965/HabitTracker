import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/config";

type TDevBuild = {
  devtool: string;
  devServer: DevServerConfiguration;
} | null;

const buildDevConfig = (port: number, isDev: boolean): TDevBuild => {
  return isDev
    ? {
        devtool: "inline-source-map",
        devServer: {
          port,
          open: true,
          historyApiFallback: true,
        },
      }
    : null;
};

export default buildDevConfig;

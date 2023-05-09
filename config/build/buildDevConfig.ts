import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "./types/config";

type TDevBuild = {
  devtool: string;
  devServer: DevServerConfiguration;
} | null;

const buildDevConfig = (options: BuildOptions): TDevBuild => {
  const { mode, port } = options;
  const isDev = mode === "development";

  return isDev
    ? {
        devtool: "inline-source-map",
        devServer: {
          port,
          open: true,
        },
      }
    : null;
};

export default buildDevConfig;

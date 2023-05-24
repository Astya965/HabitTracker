import { ResolveOptions } from "webpack";

const buildResolvers = (path: string): ResolveOptions => {
  return {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    modules: [path, "node_modules"],
    mainFiles: ["index"],
    alias: {},
  };
};

export default buildResolvers;

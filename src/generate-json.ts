import * as constants from "./const";
import { writeFileSync } from "fs";
import { resolve } from "path";

const xConstantsEntries = Object.entries(constants).map(([name, value]) => {
  if (["devIcon", "assetIcon"].includes(name)) return [name, value.toString()];

  return [name, value];
});
const xConstants = Object.fromEntries(xConstantsEntries);

writeFileSync(resolve(process.cwd(), "config.json"), JSON.stringify({}));

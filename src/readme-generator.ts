import { README } from "./README";
import { writeFileSync } from "fs";
import { resolve } from "path";

writeFileSync(resolve(process.cwd(), "README.md"), README.trimStart());

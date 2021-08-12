const { writeFileSync } = require("fs");
const { README } = require("./utils/README");

writeFileSync("README.md", README.trimStart());

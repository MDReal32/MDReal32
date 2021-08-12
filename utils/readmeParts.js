const { programmingLanguages, frontFrameworks, backFrameworks, devOps, os } = require("./const");
const { getUrlString } = require("./getUrlString");

const languages = `
## Programming Languages

${programmingLanguages.map(getUrlString).join("\n")}

## FrontEnd

${frontFrameworks.map(getUrlString).join("\n")}

## BackEnd

${backFrameworks.map(getUrlString).join("\n")}

## OS & IDE & Tools

<p>
${os
  .map(val => getUrlString(val, true))
  .map(e => `  ${e}`)
  .join("\n")}
</p>

## DevOps

${devOps.map(getUrlString).join("\n")}
`.trim();

module.exports = { languages };

import {
  additionalKnowledge,
  backFrameworks,
  databases,
  devOps,
  frontFrameworks,
  os,
  programmingLanguages,
  testing
} from "./const";
import { getUrlString } from "./getUrlString";

export const languages = `
## Programming Languages

<p>
${programmingLanguages
  .map(getUrlString)
  .map(e => `  ${e}`)
  .join("\n")}
</p>

## FrontEnd

<p>
${frontFrameworks
  .map(getUrlString)
  .map(e => `  ${e}`)
  .join("\n")}
</p>

## BackEnd

<p>
${backFrameworks
  .map(getUrlString)
  .map(e => `  ${e}`)
  .join("\n")}
</p>

## Databases

<p>
${databases
  .map(getUrlString)
  .map(e => `  ${e}`)
  .join("\n")}
</p>

## OS & IDE & Tools

<p>
${os
  .map(getUrlString)
  .map(e => `  ${e}`)
  .join("\n")}
</p>

## DevOps

<p>
${devOps
  .map(getUrlString)
  .map(e => `  ${e}`)
  .join("\n")}
</p>

## Testing

<p>
${testing
  .map(getUrlString)
  .map(e => `  ${e}`)
  .join("\n")}
</p>

## Additional Knowledges

<p>
${additionalKnowledge
  .map(getUrlString)
  .map(e => `  ${e}`)
  .join("\n")}
</p>
`.trim();

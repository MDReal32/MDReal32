const { externalUrls, widths } = require("./const");

module.exports.getUrlString = (name, isHTML = false) => {
  if (name === "__") return isHTML ? "<br />" : `\n`;

  const width = widths[name] || 25;
  if (Object.keys(externalUrls).includes(name))
    return `<img src="${externalUrls[name]}" style="display: inline-block" alt="${name}" width="${width}" title="${name}" />`;

  if (["Jenkins", "Postman", "Slack"].includes(name))
    return `<img src="https://raw.githubusercontent.com/MDReal32/MDReal32/master/assets/${name.toLowerCase()}.svg" style="display: inline-block" alt="${name}" width="${width}" title="${name}" />`;

  return `![${name}](https://icongr.am/devicon/${name.toLowerCase()}-original.svg?size=25&color=aabbcc "${name}")`;
};

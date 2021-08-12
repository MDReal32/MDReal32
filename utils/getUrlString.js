const { externalUrls } = require("./const");

module.exports.getUrlString = name => {
  if (Object.keys(externalUrls).includes(name))
    return `<img src="${externalUrls[name]}" style="display: inline" alt="${name}" width="25" />`;

  if (["Jenkins", "Postman"].includes(name))
    return `<img src="https://raw.githubusercontent.com/MDReal32/MDReal32/master/assets/${name.toLowerCase()}.svg" alt="${name}" width="25" />`;

  return `![${name}](https://icongr.am/devicon/${name.toLowerCase()}-original.svg?size=25&color=aabbcc)`;
};

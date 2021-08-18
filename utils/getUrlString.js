const { externalUrls, widths, devIcon, assetIcon, customAssets } = require("./const");

module.exports.getUrlString = name => {
  if (name === "__") return "<br />";

  const width = widths[name] || 25;
  const [, baseName, href] = name.match(/^([^@]+)(?:@([\s\S]+))?$/);
  const url = Object.keys(externalUrls).includes(baseName)
    ? externalUrls[baseName]
    : customAssets.includes(baseName)
    ? assetIcon(baseName)
    : devIcon(baseName);

  const hrefStart = href ? `<a href="${href}" title="${baseName}">` : "";
  const hrefEnd = href ? `</a>` : "";
  return `${hrefStart}<img src="${url}" style="display: inline-block" alt="${baseName}" width="${width}" title="${baseName}" />${hrefEnd}`;
};

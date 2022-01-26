import { assetIcon, customAssets, devIcon, externalUrls, widths } from "./const";

export const getUrlString = (name: string) => {
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
  const imageSource = `<img src="${url}" style="display: inline-block" alt="${baseName}" width="${width}" title="${baseName}" />`;
  return `${hrefStart}${imageSource}${hrefEnd}`;
};

module.exports.socialNetwork = ([name, url]) => {
  return `
<a href="${url}">
  <img src="https://raw.githubusercontent.com/MDReal32/MDReal32/master/assets/${name.toLowerCase()}.svg" alt="${name}" width="25" />
</a>
`.trim();
};

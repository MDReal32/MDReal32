module.exports.project = function project({ name, repo }) {
  return `
[![${name}](https://github-readme-stats.vercel.app/api/pin/?username=MDReal32&repo=${repo}&theme=onedark "${name}")](https://github.com/MDReal32/${repo})
`.trim();
};

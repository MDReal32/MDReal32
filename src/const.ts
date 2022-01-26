export const programmingLanguages = ["JavaScript", "TypeScript", "Python", "Java"];

export const frontFrameworks = [
  "HTML5",
  "CSS3",
  "SASS",
  "MaterializeCSS",
  "__",
  "Webpack",
  "ViteJS",
  "React",
  "VueJS",
  "__",
  "NextJS",
  "NuxtJS"
];

export const backFrameworks = [
  "NodeJS",
  "Sequelize",
  "Electron",
  "__",
  "Express",
  "NestJS",
  "Django",
  "__",
  "RxJS"
];

export const databases = ["MongoDB", "MySQL"];
export const os = [
  "Webstorm",
  "Pycharm",
  "IDEA",
  "VSCode",
  "Linux",
  "Windows",
  "__",
  "Postman",
  "Figma",
  "Slack",
  "__",
  "JIRA"
];

export const devOps = [
  "Git",
  "GitHub",
  "GitLab",
  "BitBucket",
  "__",
  "Docker",
  "Kubernetes",
  "__",
  "Jenkins"
];

export const testing = ["Jest", "Django"];

export const additionalKnowledge = [
  "TelegramBot@https://core.telegram.org/bots/api",
  "GraphQl",
  "WebSocket"
];

export const customAssets = [
  "MaterializeCSS",
  "Jenkins",
  "Postman",
  "Slack",
  "GraphQl",
  "Bash",
  "Jest",
  "Figma",
  "NextJS",
  "NuxtJS",
  "NestJS"
];

export const socialNetworks = {
  LinkedIn: `https://www.linkedin.com/in/mdreal32`,
  Instagram: `https://instagram.com/mdreal32`,
  Facebook: `https://fb.com/mdrealiyev`
};

export const externalUrls = {
  ViteJS: `https://vitejs.dev/logo.svg`,
  Kubernetes: `https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg`,
  VSCode: `https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg`,
  Webstorm: `https://upload.wikimedia.org/wikipedia/commons/c/c0/WebStorm_Icon.svg`,
  IDEA: `https://upload.wikimedia.org/wikipedia/commons/9/9c/IntelliJ_IDEA_Icon.svg`,
  Windows: `https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Windows_logo_-_2012_%28dark_blue%29.svg/1024px-Windows_logo_-_2012_%28dark_blue%29.svg.png`,
  Pycharm: `https://upload.wikimedia.org/wikipedia/commons/1/1d/PyCharm_Icon.svg`,
  Linux: `https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/374px-Tux.svg.png`,
  JIRA: `https://upload.wikimedia.org/wikipedia/commons/4/4a/Jira_Software%402x-blue.png`,
  TelegramBot: `https://core.telegram.org/file/811140327/1/zlN4goPTupk/9ff2f2f01c4bd1b013`,
  Bash: `https://upload.wikimedia.org/wikipedia/commons/8/82/Gnu-bash-logo.svg`,
  RxJS: `https://rxjs.dev/generated/images/marketing/home/Rx_Logo-512-512.png`,
  WebSocket: `http://websocket.org/img/websocketlogo-medium.png`
};

export const projects = [
  { name: "App Generator", repo: "app-generator" },
  { name: "Util scripts", repo: "utils" },
  { name: "My Portfolio", repo: "mdreal32.github.io" }
];

export const widths = {
  JIRA: 175,
  Slack: 80,
  MaterializeCSS: 40,
  Bash: 50,
  WebSocket: 100
};

export const devIcon = (name: string) =>
  `https://icongr.am/devicon/${name.toLowerCase()}-original.svg?size=25&color=aabbcc`;

export const assetIcon = (name: string) =>
  `https://raw.githubusercontent.com/MDReal32/MDReal32/master/assets/${name.toLowerCase()}.svg`;

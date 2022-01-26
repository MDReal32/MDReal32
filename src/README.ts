import { socialNetwork } from "./socialNetwork";
import { languages } from "./readmeParts";
import { projects, socialNetworks } from "./const";
import { project } from "./project";

export const README = `
![Profile Views](https://komarev.com/ghpvc/?username=MDReal32&color=0e75b6&style=plastic)
![README Building](https://github.com/MDReal32/MDReal32/actions/workflows/update-readme.yml/badge.svg?branch=master)

# Hi everyone <img src="https://raw.githubusercontent.com/MDReal32/MDReal32/master/assets/hi.gif" alt="Hello :)" width="25" />

My name is Veys. I'm a Software Developer.

---

${languages}

## Social Networks

${Object.entries(socialNetworks).map(socialNetwork).join("\n\n")}

---

[![Spotify](https://spotify-github-profile.vercel.app/api/view.svg?uid=ns2hykcwfixafd27l90ig6n2b&cover_image=true&theme=novatorem)](https://spotify-github-profile.vercel.app/api/view.svg?uid=ns2hykcwfixafd27l90ig6n2b&redirect=true)

---

## Work On

- Improving [AzResource](https://github.com/nurlan-aliyev/azresource)
- My Projects:

${projects.map(project).join("\n\n")}

---

## Stats

![GitHub Stats](https://github-readme-stats.vercel.app/api?username=MDReal32&show_icons=true&locale=en&theme=onedark&include_all_commits=true&count_private=true)

![Languages](https://github-readme-stats.vercel.app/api/top-langs?username=MDReal32&show_icons=true&locale=en&theme=onedark)

![GitHub Activity Graph](https://activity-graph.herokuapp.com/graph?username=MDReal32&bg_color=000000&color=4fff67&line=4fff67&point=ffffff&area=true&hide_border=true)

---
`;

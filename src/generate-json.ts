// import * as constants from "./const";
import { writeFileSync } from "fs";
import { resolve } from "path";

// const xConstantsEntries = Object.entries(constants).map(([name, value]) => {
//   if (["devIcon", "assetIcon"].includes(name)) return [name, value.toString()];

//   return [name, value];
// });
// const xConstants = Object.fromEntries(xConstantsEntries);

writeFileSync(resolve(process.cwd(), "config.json"), JSON.stringify({
  name: "Veys",
  surname: "Aliyev",
  phoneNumber: "+99470 506 93 24",
  description: "Software Developer",
  email: "veysaliyev00@gmail.com",
  image: "https://github.com/MDReal32/MDReal32/raw/master/assets/me.jpg",
  from: { city: "Baku", country: "Azerbaijan" },
  birthday: { day: 3, month: 8, year: 2000 },
  skills: {
    General: [
      { name: "JavaScript", description: "", percentage: 72, color: "#11CF1C" },
      { name: "TypeScript", description: "", percentage: 72, color: "#11CF1C" },
      { name: "Python", description: "", percentage: 72, color: "#11CF1C" }
    ],
    Frontend: [
      { name: "ReactJS", description: "", percentage: 60, color: "#E22F1C" },
      { name: "VueJS", description: "", percentage: 70, color: "#E5CF1C" }
    ],
    Backend: [
      { name: "NodeJS", description: "", percentage: 60, color: "#E5CF1C" },
      { name: "RxJS", description: "", percentage: 70, color: "#E5CF1C" },
      /* Rest API Frameworks */
      /* Rest API Frameworks */
      { name: "ExpressJs", percentage: 70, color: "#E5CF1C", group: "Rest API Frameworks" },
      { name: "NestJS", percentage: 70, color: "#E5CF1C", group: "Rest API Frameworks" },
      { name: "Django", percentage: 70, color: "#E5CF1C", group: "Rest API Frameworks" },
      /* /Rest API Frameworks */
      /* SSR Frameworks */
      { name: "NextJS", percentage: 70, color: "#E5CF1C", group: "SSR Frameworks" },
      { name: "NuxtJS", percentage: 70, color: "#E5CF1C", group: "SSR Frameworks" },
      /* /SSR Frameworks */
      /* Orm */
      { name: "TypeORM", percentage: 70, color: "#E5CF1C", group: "ORM" },
      { name: "SequelizeJS", percentage: 70, color: "#E5CF1C", group: "ORM" }
      /* /Orm */
    ],
    Computer: [
      /* /IDE */
      { name: "VSCode", percentage: 60, color: "#E5CF1C", group: "IDE" },
      { name: "Webstorm", percentage: 70, color: "#E5CF1C", group: "IDE" },
      { name: "PyCharm", percentage: 70, color: "#E5CF1C", group: "IDE" },
      { name: "Idea", percentage: 70, color: "#E5CF1C", group: "IDE" },
      { name: "DataGrip", percentage: 70, color: "#E5CF1C", group: "IDE" },
      { name: "Rider", percentage: 70, color: "#E5CF1C", group: "IDE" },
      /* /IDEs */
      /* DevOps */
      { name: "Docker", percentage: 70, color: "#E5CF1C", group: "DevOps" },
      { name: "Jenkins", percentage: 70, color: "#E5CF1C", group: "DevOps" },
      { name: "Ansible", percentage: 60, color: "#E5CF1C", group: "DevOps" },
      /* /DevOps */
      /* OS */
      { name: "Windows", percentage: 70, color: "#E5CF1C", group: "OS" },
      { name: "Linux", percentage: 70, color: "#E5CF1C", group: "OS" },
      /* /OS */
      { name: "Postman", percentage: 70, color: "#E5CF1C" },
      { name: "Figma", percentage: 70, color: "#E5CF1C" }
    ],
    Soft: [
      /* Agile */
      { name: "JIRA", percentage: 72, color: "#E5CF1C", group: "Agile" },
      { name: "Trello", percentage: 58, color: "#E5CF1C", group: "Agile" },
      /* /Agile */
      /* Communication */
      { name: "Slack", percentage: 70, color: "#E5CF1C", group: "Communication" },
      { name: "Zoom", percentage: 70, color: "#E5CF1C", group: "Communication" },
      { name: "Teams", percentage: 70, color: "#E5CF1C", group: "Communication" },
      /* /Communication */
      /* Git */
      { name: "Github", percentage: 70, color: "#E5CF1C", group: "Git" },
      { name: "Gitlab", percentage: 70, color: "#E5CF1C", group: "Git" },
      { name: "Bitbucket", percentage: 60, color: "#E5CF1C", group: "Git" }
      /* /Git */
    ]
  },
  education: [
    {
      name: "Bachelor Degree",
      description: "",
      location: { name: "Azerbaijan Technically University", country: "Azerbaijan", city: "Baku" },
      from: 2017,
      to: 2021
    },
    {
      name: "Master Degree",
      description: "",
      location: { name: "Azerbaijan Technically University", country: "Azerbaijan", city: "Baku" },
      from: 2017
    }
  ],
  languages: [
    { name: "Azerbaijani", percent: 100 },
    { name: "Russian", percent: 60 },
    { name: "English", percent: 60 },
    { name: "Turkish", percent: 40 }
  ],
  socialLinks: [
    {
      name: "Github",
      icon: "https://icongr.am/devicon/github-original.svg?size=25&color=aabbcc",
      url: "https://github.com/MDReal32"
    },
    {
      name: "LinkedIn",
      icon: "https://icongr.am/devicon/linkedin-plain.svg?size=25&color=aabbcc",
      url: "https://www.linkedin.com/in/veysaliyev/"
    }
  ],
  work: [
    {
      name: "Crinfotask LLC",
      description: "Automated Scoring and Decision System for bank and other financial institutions.",
      from: { year: 2020, month: 9 },
      to: { year: 2021, month: 10 },
      location: { city: "Baku", country: "Azerbaijan" }
    },
    {
      name: "MVP Engine",
      description: "Tracking System.",
      from: { year: 2021, month: 10 },
      to: { year: 2021, month: 12 },
      location: { city: "Kharkiv", country: "Ukraine" }
    }
  ],
  groups: {
    "Rest API Frameworks": "",
    "SSR Frameworks": "",
    "ORM": "",
    "IDE": "",
    "DevOps": "",
    "OS": "",
    "Agile": "",
    "Communication": "",
    "Git": ""
  }
}, null, 2));

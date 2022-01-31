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
      { name: "ExpressJs", description: "", percentage: 70, color: "#E5CF1C", group: "Rest API Frameworks" },
      { name: "NestJS", description: "", percentage: 70, color: "#E5CF1C", group: "Rest API Frameworks" },
      { name: "Django", description: "", percentage: 70, color: "#E5CF1C", group: "Rest API Frameworks" },
      /* /Rest API Frameworks */
      /* SSR Frameworks */
      { name: "NextJS", description: "", percentage: 70, color: "#E5CF1C", group: "SSR Frameworks" },
      { name: "NuxtJS", description: "", percentage: 70, color: "#E5CF1C", group: "SSR Frameworks" },
      /* /SSR Frameworks */
      /* Orm */
      { name: "TypeORM", percentage: 70, color: "#E5CF1C", group: "ORM" },
      { name: "SequelizeJS", percentage: 70, color: "#E5CF1C", group: "ORM" }
      /* /Orm */
    ],
    Computer: [
      /* /IDE */
      { name: "VSCode", description: "", percentage: 60, color: "#E5CF1C", group: "IDE" },
      { name: "Webstorm", description: "", percentage: 70, color: "#E5CF1C", group: "IDE" },
      { name: "PyCharm", description: "", percentage: 70, color: "#E5CF1C", group: "IDE" },
      { name: "Idea", description: "", percentage: 70, color: "#E5CF1C", group: "IDE" },
      { name: "DataGrip", description: "", percentage: 70, color: "#E5CF1C", group: "IDE" },
      { name: "Rider", description: "", percentage: 70, color: "#E5CF1C", group: "IDE" },
      /* /IDEs */
      /* DevOps */
      { name: "Docker", description: "", percentage: 70, color: "#E5CF1C", group: "DevOps" },
      { name: "Jenkins", description: "", percentage: 70, color: "#E5CF1C", group: "DevOps" },
      { name: "Ansible", description: "", percentage: 60, color: "#E5CF1C", group: "DevOps" },
      /* /DevOps */
      /* OS */
      { name: "Windows", description: "", percentage: 70, color: "#E5CF1C", group: "OS" },
      { name: "Linux", description: "", percentage: 70, color: "#E5CF1C", group: "OS" },
      /* /OS */
      { name: "Postman", description: "", percentage: 70, color: "#E5CF1C" },
      { name: "Figma", description: "", percentage: 70, color: "#E5CF1C" }
    ],
    Soft: [
      /* Agile */
      { name: "JIRA", description: "", percentage: 72, color: "#E5CF1C", group: "Agile" },
      { name: "Trello", description: "", percentage: 58, color: "#E5CF1C", group: "Agile" },
      /* /Agile */
      /* Communication */
      { name: "Slack", description: "", percentage: 70, color: "#E5CF1C", group: "Communication" },
      { name: "Zoom", description: "", percentage: 70, color: "#E5CF1C", group: "Communication" },
      { name: "Teams", description: "", percentage: 70, color: "#E5CF1C", group: "Communication" },
      /* /Communication */
      /* Git */
      { name: "Github", description: "", percentage: 70, color: "#E5CF1C", group: "Git" },
      { name: "Gitlab", description: "", percentage: 70, color: "#E5CF1C", group: "Git" },
      { name: "Bitbucket", description: "", percentage: 60, color: "#E5CF1C", group: "Git" }
      /* /Git */
    ]
  },
  education: [
    { name: "Bachelor Degree", description: "AzTU", from: 2017, to: 2021 },
    { name: "Master Degree", description: "AzTU", from: 2017 }
  ],
  languages: [
    { name: "Azerbaijani", percent: 100 },
    { name: "Russian", percent: 60 },
    { name: "English", percent: 60 },
    { name: "Turkish", percent: 40 }
  ],
  socialLinks: [
    { name: "Github", icon: "", url: "https://github.com/MDReal32" },
    { name: "LinkedIn", icon: "", url: "https://www.linkedin.com/in/veysaliyev/" }
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
  ]
}, null, 2));

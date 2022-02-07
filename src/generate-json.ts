// import * as constants from "./const";
import { writeFileSync } from "fs";
import { resolve } from "path";
import { Data } from "./Data";

// const xConstantsEntries = Object.entries(constants).map(([name, value]) => {
//   if (["devIcon", "assetIcon"].includes(name)) return [name, value.toString()];

//   return [name, value];
// });
// const xConstants = Object.fromEntries(xConstantsEntries);

const data: Data = {
  name: "#name",
  surname: "#surname",
  phoneNumber: "+99470 506 93 24",
  description: "#description",
  email: "veysaliyev00@gmail.com",
  image: "https://github.com/MDReal32/MDReal32/raw/master/assets/me.jpg",
  from: { city: "#from.city", country: "#from.country" },
  birthday: { day: 3, month: 8, year: 2000 },
  skills: {
    General: [
      {
        name: "JavaScript",
        description: "#js-description",
        percentage: 72,
        color: "#11CF1C"
      },
      {
        name: "TypeScript",
        description: "#ts-description",
        percentage: 72,
        color: "#11CF1C"
      },
      { name: "Python", description: "A Programming Language", percentage: 72, color: "#11CF1C" }
    ],
    Frontend: [
      {
        name: "ReactJS",
        description: "A JavaScript Frontend Framework",
        percentage: 70,
        color: "#E22F1C"
      },
      {
        name: "VueJS",
        description: "A JavaScript Frontend Framework",
        percentage: 73,
        color: "#E5CF1C"
      }
    ],
    Backend: [
      {
        name: "NodeJS",
        description: "JavaScript but for Backend Usage",
        percentage: 60,
        color: "#E5CF1C"
      },
      { name: "RxJS", description: "A Reactive Library", percentage: 70, color: "#E5CF1C" },
      /* Rest API Frameworks */
      /* Rest API Frameworks */
      { name: "ExpressJs", color: "#E5CF1C", group: "Rest API Frameworks" },
      { name: "NestJS", color: "#E5CF1C", group: "Rest API Frameworks" },
      { name: "Django", color: "#E5CF1C", group: "Rest API Frameworks" },
      /* /Rest API Frameworks */
      /* SSR Frameworks */
      { name: "NextJS", color: "#E5CF1C", group: "SSR Frameworks" },
      { name: "NuxtJS", color: "#E5CF1C", group: "SSR Frameworks" },
      /* /SSR Frameworks */
      /* Orm */
      { name: "TypeORM", color: "#E5CF1C", group: "ORM" },
      { name: "SequelizeJS", color: "#E5CF1C", group: "ORM" }
      /* /Orm */
    ],
    Computer: [
      /* /IDE */
      { name: "VSCode", color: "#E5CF1C", group: "IDE" },
      { name: "Webstorm", color: "#E5CF1C", group: "IDE" },
      { name: "PyCharm", color: "#E5CF1C", group: "IDE" },
      { name: "Idea", color: "#E5CF1C", group: "IDE" },
      { name: "DataGrip", color: "#E5CF1C", group: "IDE" },
      { name: "Rider", color: "#E5CF1C", group: "IDE" },
      /* /IDEs */
      /* DevOps */
      { name: "Docker", color: "#E5CF1C", group: "DevOps" },
      { name: "Jenkins", color: "#E5CF1C", group: "DevOps" },
      { name: "Ansible", color: "#E5CF1C", group: "DevOps" },
      /* /DevOps */
      /* OS */
      { name: "Windows", color: "#E5CF1C", group: "OS" },
      { name: "Linux", color: "#E5CF1C", group: "OS" },
      /* /OS */
      { name: "Postman", percentage: 70, color: "#E5CF1C" },
      { name: "Figma", percentage: 70, color: "#E5CF1C" }
    ],
    Soft: [
      /* Agile */
      { name: "JIRA", color: "#E5CF1C", group: "Agile" },
      { name: "Trello", color: "#E5CF1C", group: "Agile" },
      /* /Agile */
      /* Communication */
      { name: "Slack", color: "#E5CF1C", group: "Communication" },
      { name: "Zoom", color: "#E5CF1C", group: "Communication" },
      { name: "Teams", color: "#E5CF1C", group: "Communication" },
      /* /Communication */
      /* Git */
      { name: "Github", color: "#E5CF1C", group: "Git" },
      { name: "Gitlab", color: "#E5CF1C", group: "Git" },
      { name: "Bitbucket", color: "#E5CF1C", group: "Git" }
      /* /Git */
    ]
  },
  education: [
    {
      name: "Bachelor Degree",
      location: {
        name: "Azerbaijan Technically University",
        country: "Azerbaijan",
        city: "Baku"
      },
      from: 2017,
      to: 2021
    },
    {
      name: "Master Degree",
      location: {
        name: "Azerbaijan Technically University",
        country: "Azerbaijan",
        city: "Baku"
      },
      from: 2021
    }
  ],
  languages: [
    { name: "Azerbaijani", percent: 100 },
    { name: "Russian", percent: 70 },
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
      description:
        "Automated Scoring and Decision System for bank and other financial institutions",
      from: { year: 2020, month: 9 },
      to: { year: 2021, month: 10 },
      location: { city: "Baku", country: "Azerbaijan" }
    },
    {
      name: "MVP Engine",
      description: "Tracking System",
      from: { year: 2021, month: 10 },
      to: { year: 2021, month: 12 },
      location: { city: "Kharkiv", country: "Ukraine" }
    }
  ],
  groups: {
    "Rest API Frameworks": "#rest-frameworks-description",
    "SSR Frameworks": "#ssr-frameworks-description",
    "ORM": "#orm-description",
    "IDE": "Integrated Development Environment",
    "DevOps": "Combination of cultural philosophies, practices, and tools",
    "OS": "Operating Systems",
    "Agile": "Project Management and Software Development Tools",
    "Communication": "Apps for usage in Communication with co-workers",
    "Git": "Version Control System"
  },
  i18n: {
    az: {
      "name": "Veyis",
      "surname": "Əliyev",
      "description": "Proqram Tərtibatçı",
      "from.city": "Bakı",
      "from.country": "Azərbaycan",
      "skills": "Bacarıqlar",
      "js-description": "Proqramlaşdırma dili",
      "ts-description": "Tipləşdirilmiş JavaScript",

      //  Groups
      "rest-frameworks-description": "API qurmaq üçün Kitabxana/Framework",
      "ssr-frameworks-description": "A Framework for building SSR Applications",
      "orm-description": "A Library for manipulate Database/Tables"
    },
    ru: {
      "name": "Вейс",
      "surname": "Алиев",
      "description": "Разработчик программного обеспечения",
      "from.city": "Баку",
      "from.country": "Азербайджан",
      "skills": "Навыки и умения",
      "js-description": "Язык программирования",
      "ts-description": "Типизированный JavaScript",

      //  Groups
      "rest-frameworks-description": "Библиотека/фреймворк для создания API",
      "ssr-frameworks-description": "Фреймворк для создания приложений SSR",
      "orm-description": "Библиотека для работы с базой данных/таблицами"
    },
    en: {
      "name": "Veyis",
      "surname": "Aliyev",
      "description": "Software Developer",
      "from.city": "Baku",
      "from.country": "Azerbaijan",
      "skills": "Skills",
      "js-description": "A Programming Language",
      "ts-description": "Typed JavaScript",

      //  Groups
      "rest-frameworks-description": "A Library/Framework for building API",
      "ssr-frameworks-description": "SSR Tətbiqlərini qurmaq üçün Framework",
      "orm-description": "Verilənlər bazası/cədvəlləri manipulyasiya etmək üçün kitabxana"
    }
  }
};

writeFileSync(resolve(process.cwd(), "config.json"), JSON.stringify(data, null, 2));

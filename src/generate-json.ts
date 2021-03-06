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
  image: {
    png: "https://github.com/MDReal32/MDReal32/raw/master/assets/me.jpg",
    webp: "https://github.com/MDReal32/MDReal32/raw/master/assets/me.webp"
  },
  from: { city: "#city.baku", country: "#country.azerbaijan" },
  birthday: { day: 3, month: 8, year: 2000 },
  skills: {
    General: [
      { name: "JavaScript", color: "#11CF1C", group: "Programming Language" },
      { name: "TypeScript", description: "#ts-description", percentage: 72, color: "#11CF1C" },
      { name: "Python", color: "#11CF1C", group: "Programming Language" }
    ],
    Frontend: [
      { name: "ReactJS", color: "#E22F1C", group: "Frontend Framework" },
      { name: "VueJS", color: "#E5CF1C", group: "Frontend Framework" },
      { name: "Redux", color: "#E22F1C", group: "Framework State Managements" },
      { name: "Recoil", color: "#E22F1C", group: "Framework State Managements" },
      { name: "Vuex", color: "#E5CF1C", group: "Framework State Managements" },
      { name: "Pinia", color: "#E5CF1C", group: "Framework State Managements" },
      { name: "CSS", color: "#E5CF1C", group: "Frontend CSS" },
      { name: "SCSS", color: "#E5CF1C", group: "Frontend CSS" },
      { name: "SASS", color: "#E5CF1C", group: "Frontend CSS" },
      { name: "Bootstrap", color: "#E5CF1C", group: "Frontend CSS Frameworks" },
      { name: "Materialize CSS", color: "#E5CF1C", group: "Frontend CSS Frameworks" }
    ],
    Backend: [
      { name: "NodeJS", description: "#node", percentage: 60, color: "#E5CF1C" },
      { name: "RxJS", description: "#rxjs", percentage: 70, color: "#E5CF1C" },
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
  skillTypes: {
    Frontend: true,
    Backend: true
  },
  education: [
    {
      name: "#education.bachelor",
      location: { name: "#education.center", country: "#country.azerbaijan", city: "#city.baku" },
      from: 2017,
      to: 2021
    },
    {
      name: "#education.master",
      location: { name: "#education.center", country: "#country.azerbaijan", city: "#city.baku" },
      from: 2021
    }
  ],
  languages: [
    { name: "Az??rbaycan dili", percent: 100 },
    { name: "??????????????", percent: 70 },
    { name: "English", percent: 60 },
    { name: "T??rk dili", percent: 40 }
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
  job: [
    {
      name: "Crinfotask LLC",
      role: "Software Developer",
      description: "#work.crinfotask.description",
      from: { year: 2020, month: 9 },
      to: { year: 2021, month: 10 },
      location: { city: "#city.baku", country: "#country.azerbaijan" }
    },
    {
      name: "MVP Engine",
      role: "Fullstack Javascript Developer",
      description: "#work.mvp.description",
      from: { year: 2021, month: 10 },
      to: { year: 2021, month: 12 },
      location: { city: "#city.kharkiv", country: "#country.ukraine" }
    }
  ],
  groups: {
    "Programming Language": "#pr-description",
    "Frontend Framework": "#frontend-framework",
    "Framework State Managements": "#frontend-framework-state-managements",
    "Frontend CSS": "#frontend-css",
    "Frontend CSS Frameworks": "#frontend-css-frameworks",
    "Rest API Frameworks": "#rest-frameworks-description",
    "SSR Frameworks": "#ssr-frameworks-description",
    "ORM": "#orm-description",
    "IDE": "#ide",
    "DevOps": "#devops",
    "OS": "#os",
    "Agile": "#agile",
    "Communication": "#communication",
    "Git": "#git"
  },
  i18n: {
    // Info
    "name": { az: "Veyis", ru: "????????", en: "Veyis" },
    "surname": { az: "??liyev", ru: "??????????", en: "Aliyev" },
    "description": { az: "Proqram T??rtibat????", ru: "?????????????????????? ???????????????????????? ??????????????????????", en: "Software Developer" },

    // Locations
    "city.baku": { az: "Bak??", ru: "????????", en: "Baku" },
    "country.azerbaijan": { az: "Az??rbaycan", ru: "??????????????????????", en: "Azerbaijan" },
    "city.kharkiv": { az: "Xarkov", ru: "????????????", en: "Kharkiv" },
    "country.ukraine": { az: "Ukrayna", ru: "??????????????", en: "Ukraine" },

    // Months
    "january": { az: "Yanvar", ru: "????????????", en: "January" },
    "february": { az: "Fevral", ru: "??????????????", en: "February" },
    "march": { az: "Mart", ru: "????????", en: "March" },
    "april": { az: "Aprel", ru: "????????????", en: "April" },
    "may": { az: "May", ru: "??????", en: "May" },
    "june": { az: "??yun", ru: "????????", en: "June" },
    "july": { az: "??yul", ru: "????????", en: "July" },
    "august": { az: "Avqust", ru: "????????????", en: "August" },
    "september": { az: "Sentyabr", ru: "????????????????", en: "September" },
    "october": { az: "Oktyabr", ru: "??????????????", en: "October" },
    "november": { az: "Noyabr", ru: "????????????", en: "November" },
    "december": { az: "Dekabr", ru: "??????????????", en: "December" },

    // Skills
    "skills": { az: "Bacar??qlar", ru: "???????????? ?? ????????????", en: "Skills" },
    "pr-description": { az: "Proqramla??d??rma dili", ru: "???????? ????????????????????????????????", en: "A Programming Language" },
    "ts-description": { az: "Tipl????dirilmi?? JavaScript", ru: "???????????????????????????? JavaScript", en: "Typed JavaScript" },
    "node": {
      az: "JavaScript, lakin Backend ??????n",
      ru: "JavaScript, ???? ?????? ??????????????",
      en: "JavaScript but for Backend"
    },
    "rxjs": { az: "Reaktiv Kitabxana", ru: "???????????????????? ????????????????????", en: "A Reactive Library" },
    "frontend-framework-state-managements": {
      az: "State ??dar??etm?? Kitabxanalar??",
      ru: "???????????????????? ?????????????????????? ????????????",
      en: "State Management Libraries"
    },
    "frontend-css": { az: "CSS / Preprosessorlar", ru: "CSS / ??????????????????????????", en: "CSS / Preprocessors" },
    "frontend-css-frameworks": {
      az: "Frontend Css Framework",
      ru: "Css-???????????????????? ?????? ???????????????? ????????????????????",
      en: "Frontend Css Frameworks"
    },

    // Education
    "education.bachelor": { az: "Bakalavr d??r??c??si", ru: "?????????????? ??????????????????", en: "Bachelor Degree" },
    "education.master": { az: "Magistr d??r??c??si", ru: "?????????????? ????????????????", en: "Master Degree" },
    "education.center": {
      az: "Az??rbaycan Texniki Universiteti",
      ru: "?????????????????????????????? ?????????????????????? ??????????????????????",
      en: "Azerbaijan Technical University"
    },
    "education.since": { az: "-d??n indiy?? kimi", ru: "??", en: "Since" },

    // Work
    "work.crinfotask.description": {
      az: "Bank v?? dig??r maliyy?? institutlar?? ??????n Avtomatla??d??r??lm???? Qiym??tl??ndirm?? v?? Q??rar Sistemi",
      ru: "???????????????????????????????????? ?????????????? ???????????? ?? ???????????????? ?????????????? ?????? ???????????? ?? ???????????? ???????????????????? ????????????????????",
      en: "Automated Scoring and Decision System for bank and other financial institutions"
    },
    "work.mvp.description": { az: "??zl??m?? Sistemi", ru: "?????????????? ????????????????", en: "Tracking System" },
    "work.from": { az: "dan", ru: "????", en: "from" },
    "work.to": { az: "a q??d??r", ru: "??", en: "to" },

    // English Levels
    "native": { az: "do??ma", ru: "????????????", en: "native" },
    "advanced": { az: "??st??n", ru: "??????????????????", en: "advanced" },
    "upper-intermediate": { az: "orta s??viyy??d??n yuxar??", ru: "???????? ????????????????", en: "upper intermediate" },
    "intermediate": { az: "orta s??viyy??", ru: "??????????????", en: "intermediate" },
    "pre-intermediate": { az: "orta s??viyy??d??n a??a????", ru: "???????? ????????????????", en: "pre intermediate" },
    "beginner": { az: "ba??lan????c", ru: "??????????????", en: "beginner" },

    // Groups
    "rest-frameworks-description": {
      az: "API qurmaq ??????n Kitabxana/Framework",
      ru: "????????????????????/?????????????????? ?????? ???????????????? API",
      en: "A Library/Framework for building API"
    },
    "ssr-frameworks-description": {
      az: "SSR T??tbiql??rini qurmaq ??????n Framework",
      ru: "?????????????????? ?????? ???????????????? ???????????????????? SSR",
      en: "A Framework for building SSR Applications"
    },
    "orm-description": {
      az: "Veril??nl??r bazas??/c??dv??ll??ri manipulyasiya etm??k ??????n kitabxana",
      ru: "???????????????????? ?????? ???????????? ?? ?????????? ????????????/??????????????????",
      en: "A Library for manipulate Database/Tables"
    },
    "frontend-framework": {
      az: "JavaScript Frontend Framework",
      ru: "?????????????????? ???????????????? ???????????????????? JavaScript",
      en: "A JavaScript Frontend Framework"
    },
    "ide": {
      az: "??nteqrasiya edilmi?? ??nki??af M??hiti",
      ru: "?????????????????????????????? ?????????? ????????????????????",
      en: "Integrated Development Environment"
    },
    "devops": {
      az: "M??d??ni f??ls??f??l??rin, t??cr??b??l??rin v?? vasit??l??rin birl????m??si",
      ru: "?????????????????? ???????????????????? ??????????????????, ?????????????? ?? ????????????????????????",
      en: "Combination of cultural philosophies, practices, and tools"
    },
    "os": { az: "??m??liyyat sisteml??ri", ru: "???????????????????????? ??????????????", en: "Operating Systems" },
    "agile": {
      az: "Layih?? ??dar??etm?? v?? Proqram ??nki??af?? Al??tl??ri",
      ru: "?????????????????????? ???????????????????? ?????????????????? ?? ???????????????????? ???????????????????????? ??????????????????????",
      en: "Project Management and Software Development Tools"
    },
    "communication": {
      az: "H??mkarlarla ??nsiyy??td?? istifad?? ??????n proqramlar",
      ru: "???????????????????? ?????? ?????????????????????????? ?? ?????????????? ?? ??????????????????",
      en: "Apps for usage in Communication with co-workers"
    },
    "git": { az: "Versiyaya N??zar??t Sistemi", ru: "?????????????? ???????????????? ????????????", en: "Version Control System" }
  }
};

writeFileSync(resolve(process.cwd(), "config.json"), JSON.stringify(data, null, 2));

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
      { name: "VueJS", color: "#E5CF1C", group: "Frontend Framework" }
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
    { name: "Azərbaycan dili", percent: 100 },
    { name: "Русский", percent: 70 },
    { name: "English", percent: 60 },
    { name: "Türk dili", percent: 40 }
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
    az: {
      // Info
      "name": "Veyis",
      "surname": "Əliyev",
      "description": "Proqram Tərtibatçı",

      // Locations
      "city.baku": "Bakı",
      "country.azerbaijan": "Azərbaycan",
      "city.kharkiv": "Xarkov",
      "country.ukraine": "Ukrayna",

      // Months
      "january": "Yanvar",
      "february": "Fevral",
      "march": "Mart",
      "april": "Aprel",
      "may": "May",
      "june": "İyun",
      "july": "İyul",
      "august": "Avqust",
      "september": "Sentyabr",
      "october": "Oktyabr",
      "november": "Noyabr",
      "december": "Dekabr",

      // Skills
      "skills": "Bacarıqlar",
      "pr-description": "Proqramlaşdırma dili",
      "ts-description": "Tipləşdirilmiş JavaScript",
      "node": "JavaScript, lakin Backend üçün",
      "rxjs": "Reaktiv Kitabxana",

      // Education
      "education.bachelor": "Bakalavr dərəcəsi",
      "education.master": "Magistr dərəcəsi",
      "education.center": "Azərbaycan Texniki Universiteti",
      "education.since": "-dən indiyə kimi",

      // Work
      "work.crinfotask.description":
        "Bank və digər maliyyə institutları üçün Avtomatlaşdırılmış Qiymətləndirmə və Qərar Sistemi",
      "work.mvp.description": "İzləmə Sistemi",
      "work.from": "dan",
      "work.to": "a qədər",

      // Groups
      "rest-frameworks-description": "API qurmaq üçün Kitabxana/Framework",
      "ssr-frameworks-description": "SSR Tətbiqlərini qurmaq üçün Framework",
      "orm-description": "Verilənlər bazası/cədvəlləri manipulyasiya etmək üçün kitabxana",
      "frontend-framework": "JavaScript Frontend Framework",
      "ide": "İnteqrasiya edilmiş İnkişaf Mühiti",
      "devops": "Mədəni fəlsəfələrin, təcrübələrin və vasitələrin birləşməsi",
      "os": "Əməliyyat sistemləri",
      "agile": "Layihə İdarəetmə və Proqram İnkişafı Alətləri",
      "communication": "Həmkarlarla ünsiyyətdə istifadə üçün proqramlar",
      "git": "Versiyaya Nəzarət Sistemi"
    },
    ru: {
      // Info
      "name": "Вейс",
      "surname": "Алиев",
      "description": "Разработчик программного обеспечения",

      // Locations
      "city.baku": "Баку",
      "country.azerbaijan": "Азербайджан",
      "city.kharkiv": "Харкив",
      "country.ukraine": "Украина",

      // Months
      "january": "Январь",
      "february": "Февраль",
      "march": "Март",
      "april": "Апрель",
      "may": "Май",
      "june": "Июнь",
      "july": "Июль",
      "august": "Август",
      "september": "Сентябрь",
      "october": "Октябрь",
      "november": "Ноябрь",
      "december": "Декабрь",

      // Skills
      "skills": "Навыки и умения",
      "pr-description": "Язык программирования",
      "ts-description": "Типизированный JavaScript",
      "node": "JavaScript, но для бэкенда",
      "rxjs": "Реактивная библиотека",

      // Education
      "education.bachelor": "Степень бакалавра",
      "education.master": "Степень магистра",
      "education.center": "Азербайджанский Технический Университет",
      "education.since": "С",

      // Work
      "work.crinfotask.description":
        "Автоматизированная система оценки и принятия решений для банков и других финансовых учреждений",
      "work.mvp.description": "Система слежения",
      "work.from": "от",
      "work.to": "к",

      // Groups
      "rest-frameworks-description": "Библиотека/фреймворк для создания API",
      "ssr-frameworks-description": "Фреймворк для создания приложений SSR",
      "orm-description": "Библиотека для работы с базой данных/таблицами",
      "frontend-framework": "Фреймворк внешнего интерфейса JavaScript",
      "ide": "Интегрированная среда разработки",
      "devops": "Сочетание культурных философий, практик и инструментов",
      "os": "Операционные системы",
      "agile": "Инструменты управления проектами и разработки программного обеспечения",
      "communication": "Приложения для использования в общении с коллегами",
      "git": "Система контроля версий"
    },
    en: {
      // Info
      "name": "Veyis",
      "surname": "Aliyev",
      "description": "Software Developer",

      // Months
      "january": "January",
      "february": "February",
      "march": "March",
      "april": "April",
      "may": "May",
      "june": "June",
      "july": "July",
      "august": "August",
      "september": "September",
      "october": "October",
      "november": "November",
      "december": "December",

      // Locations
      "city.baku": "Baku",
      "country.azerbaijan": "Azerbaijan",
      "city.kharkiv": "Kharkiv",
      "country.ukraine": "Ukraine",

      // Skills
      "skills": "Skills",
      "pr-description": "A Programming Language",
      "ts-description": "Typed JavaScript",
      "node": "JavaScript but for Backend",
      "rxjs": "A Reactive Library",

      // Education
      "education.bachelor": "Bachelor Degree",
      "education.master": "Master Degree",
      "education.center": "Azerbaijan Technical University",
      "education.since": "Since",

      // Work
      "work.crinfotask.description": "Automated Scoring and Decision System for bank and other financial institutions",
      "work.mvp.description": "Tracking System",
      "work.from": "from",
      "work.to": "to",

      // Groups
      "rest-frameworks-description": "A Library/Framework for building API",
      "ssr-frameworks-description": "A Framework for building SSR Applications",
      "orm-description": "A Library for manipulate Database/Tables",
      "frontend-framework": "A JavaScript Frontend Framework",
      "ide": "Integrated Development Environment",
      "devops": "Combination of cultural philosophies, practices, and tools",
      "os": "Operating Systems",
      "agile": "Project Management and Software Development Tools",
      "communication": "Apps for usage in Communication with co-workers",
      "git": "Version Control System"
    }
  }
};

writeFileSync(resolve(process.cwd(), "config.json"), JSON.stringify(data, null, 2));

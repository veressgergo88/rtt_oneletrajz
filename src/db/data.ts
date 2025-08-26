import type { Education, Header, Job, Language, Personal, Skill, Title, Plan } from "../types/types";

export const personalInfo: Personal = {
  hu: {
    birthday: "1988.10.09",
    birthLocation: "Sátoraljaújhely",
  },
  en: {
    birthday: "09.10.1988",
    birthLocation: "Sátoraljaújhely",
  },
};

export const headerInfo: Header = {
  hu: {
    name: "Veress Gergő",
    location: "2723 Nyáregyháza, Arany János utca 49.",
    email: "veress.gergo88@gmail.com",
    phoneNumber: "+36-30/531-0794",
  },
  en: {
    name: "Gergő Veress",
    location: "2723 Nyáregyháza, Arany János street 49.",
    email: "veress.gergo88@gmail.com",
    phoneNumber: "+36-30/531-0794",
  },
};

export const sectionTitles: Title = {
  hu: {
    personal: "Személyes információk",
    website: "Referencia weboldal",
    plans: "Tervek",
    experience: "Tapasztalat",
    education: "Tanulmányok"
  },
  en: {
    personal: "Personal Information",
    website: "Reference Website",
    plans: "Plans",
    experience: "Experience",
    education: "Education",
  }
}

export const plans: Plan = {
  hu: [
        "NEXT.JS, REACT NATIVE elsajátítása",
        "Saas alkalmazások készítése",
        "Machine Learning / Mesterséges Intelligencia programozása"
  ],
  en: [
        "Learning NEXT.JS, REACT NATIVE",
        "Building SaaS applications",
        "Programming Machine Learning / Artificial Intelligence",
  ]
}

export const jobInfo: Job = {
  hu: [
    {
      infoTitle: "Egyéni vállalkozó",
      infoDate: "2024 augusztus - ",
      infoList: ["Mancs Műszak - kutya- és cicaszitter szolgáltatás"],
    },
    {
      infoTitle: "Repülőtéri Rendőr Igazgatóság / Humánigazgatási Szolgálat",
      infoDate: "2016 március - 2024 július",
      infoList: [
        "SZENYOR/SZTNYR adminisztrátor",
        "Személyügyi oldalon SZENYOR/KIRA interface kezelése",
        "Ügyfélkapu regisztrációs admin",
        "RVTV portál admin",
        "Egyéb adminisztrációs feladatok",
      ],
    },
    {
      infoTitle: "NC-Profil Kft",
      infoDate: "2011 augusztus - 2016 február",
      infoList: ["CNC gépkezelő", "Áruszállító"],
    },
    {
      infoTitle: "Prec-Cast Kft.",
      infoDate: "2010 május - 2011 július",
      infoList: ["CNC gépkezelő"],
    },
  ],
  en: [
    {
      infoTitle: "Freelancer",
      infoDate: "August 2024 - ",
      infoList: ["Mancs Műszak - Dog & Cat Sitting Service"],
    },
    {
      infoTitle: "Airport Police Directorate / Human Resources",
      infoDate: "March 2016 - July 2024",
      infoList: [
        "SZENYOR/SZTNYR administrator",
        "SZENYOR/KIRA interface management",
        "Client Gateway registration admin",
        "RVTV portal admin",
        "General administrative tasks",
      ],
    },
    {
      infoTitle: "NC-Profil Ltd.",
      infoDate: "August 2011 - February 2016",
      infoList: ["CNC machine operator", "Delivery driver"],
    },
    {
      infoTitle: "Prec-Cast Ltd.",
      infoDate: "May 2010 - July 2011",
      infoList: ["CNC machine operator"],
    },
  ],
};

export const educationInfo: Education = {
  hu: [
    {
      infoTitle: "CodeCool",
      infoDate: "2023 április - 2023 november",
      infoList: [
        "FrontEnd: HTML5, CSS, Tailwind, Typescript/Javascript, REACT (ismerkedés szinten Angular, Vue, Svelte)",
        "Backend: Node.js, Express.js, PostgreSQL",
        "Verzió kezelés: Git / GitHub",
        "Egyéb library: Zod, Axios",
      ],
    },
    {
      infoTitle: "Certa Kft.",
      infoDate: "2009 szeptember - 2010 június",
      infoList: ["CNC forgácsoló OKJ"],
    },
    {
      infoTitle: "Kossuth Lajos Gimnázium",
      infoDate: "2008 szeptember - 2009 június",
      infoList: ["Utazásszervező OKJ"],
    },
    {
      infoTitle: "V. István Közgazdasági és Informatikai Szakközépiskola",
      infoDate: "2003 szeptember - 2007 június",
      infoList: ["Középszintű érettségi"],
    },
  ],
  en: [
    {
      infoTitle: "CodeCool",
      infoDate: "April 2023 - November 2023",
      infoList: [
        "Frontend: HTML5, CSS, Tailwind, Typescript/Javascript, REACT (basic Angular, Vue, Svelte)",
        "Backend: Node.js, Express.js, PostgreSQL",
        "Version control: Git / GitHub",
        "Other libraries: Zod, Axios",
      ],
    },
    {
      infoTitle: "Certa Ltd.",
      infoDate: "September 2009 - June 2010",
      infoList: ["CNC machining OKJ"],
    },
    {
      infoTitle: "Kossuth Lajos High School",
      infoDate: "September 2008 - June 2009",
      infoList: ["Travel Agent OKJ"],
    },
    {
      infoTitle: "V. István Secondary School of Economics and Informatics",
      infoDate: "September 2003 - June 2007",
      infoList: ["Secondary school graduation"],
    },
  ],
};

export const website: string = "https://www.mancsmuszak.hu";

export const languageInfo: Language = {
  hu: {
    language: "Angol",
    level: "B2 középfokú",
  },
  en: {
    language: "English",
    level: "B2 intermediate",
  },
};

export const skills: Skill = {
    hu: ["Problémamegoldó képesség", "Csapatmunka", "Feladatorientált gondolkodás, magas szintű fókusz"],
    en: ["Problem solving", "Teamwork", "Task-oriented thinking, high level of focus"]
};

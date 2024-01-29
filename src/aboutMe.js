const periodFrom = (year, month = 0, day = 0) => {
  const today = new Date();
  let days = today.getDate() - day;
  let months = today.getMonth() - month;
  let fullYears = today.getFullYear() - year;
  if (days < 0) months--;
  if (months < 0) fullYears--;
  if (months < 0) months += 12;
  return { fullYears, months, days };
};

export default {
  title: "Front End developer",
  title_en: "Front End developer",
  about: {
    title: "Bản thân",
    title_en: "About me",
    path: "/",
    isNav: true,
    logo: "./img/logo/about.svg",
    explanation:
      "Chào mọi người. Mình tên là Nguyễn Thế Kiên. Là nhà phát triển Front End. Chủ yếu là ReactJS , NextJS.",
    explanation_en: `Hi Everyone. My name is Nguyen The Kien. I am a Front End developer, mainly using ReactJS and NextJS.`,
    years: () => {
      const age = periodFrom(2001, 7, 7);
      return `Mình ${age.fullYears} tuổi.`;
    },
    years_en: () => {
      const age = periodFrom(2001, 7, 7);
      return `And I'm ${age.fullYears} y.o.`;
    },
  },
  skills: {
    title: "Kỹ năng",
    title_en: "Skills",
    path: "/skills",
    isNav: true,
    logo: "./img/logo/skills.svg",
    explanation: "Технологии, с которыми я имел возможность работать:",
    explanation_en: "Here are some tools I'm using:",
    list: [
      "Javascript",
      "Typescript",
      "React",
      "NextJS",
      "Redux (Thunk - saga - toolkit)",
      "Bootstrap",
      "MaterialUI",
      "AntDesign",
      "CSS-SCSS",
      "NodeJS",
      "Express",
      "NestJS",
      "MySQL",
      "Git(github - gitlab - bitbucket)",
    ],
  },
  projects: {
    title: "Dự án",
    title_en: "Projects",
    logo: "./img/logo/projects.svg",
    explanation:
      "Mình có 1 số dự án cá nhân & 1 số dự án làm trên công ty , anh chị truy cập đường dẫn dưới để xem nhé ạ",
    explanation_en:
      "I have some personal projects and some projects done at the company. Please visit the link below to check them out.",
    path: "/projects",
    isNav: true,
    list: [
      {
        title: "Roy-The-Art ( Dự án cá nhân )",
        description: `Đây là dự án cá nhân của mình , được viết bằng Html , scss , js , boostrap và không sử dụng API.
          Dự án được lấy ý tưởng từ trang web : https://www.roytheart.com/  ( Chuyên in logo , sticker, tạo hình ảnh nhân vật ) . Có các chức năng như : Đăng ký - Đăng nhập , Giỏ hàng , Sản phẩm , Danh mục , Chi tiết Sản phẩm , blog... Dưới đây là source và link demo:`,
        description_en: `This is my personal project, written using HTML, SCSS, JavaScript, Bootstrap, and does not use any APIs. The project is inspired by the website: https://www.roytheart.com/ (Specializing in printing logos, stickers, creating character images). It includes features such as: Registration - Login, Shopping cart, Products, Categories, Product details, blog... Below is the source code and demo link:`,
        links: [
          {
            name: "Website",
            url: "https://roy-the-art.vercel.app/",
          },
          {
            name: "Github",
            url: "https://github.com/KienJerry/Roy-The-Art",
          },
        ],
      },
      {
        title: "Pay the bill ( Dự án cá nhân )",
        description: `Đây là dự án cá nhân của mình , được viết bằng : NextJs , CSS , Antd và không sử dụng API.
        Dự án này mình code vui cho anh chị trong công ty tính tiền nước , cafe nhanh mà không cần phải tính toán khi mua giảm giá ở trên mạng xã hội. Dự án này mình làm trong 4 tiếng , dưới đây là source  và link demo :
        `,
        description_en: `This is my personal project, written using Next.js, CSS, Ant Design, and does not use any APIs. I coded this project for fun to help colleagues in the company calculate water and fast coffee prices without the need for calculations when purchasing discounts on social media. I completed this project in 4 hours. Below is the source code and demo link:`,
        links: [
          {
            name: "Website",
            url: "https://pay-the-bill.vercel.app/",
          },
          {
            name: "GitHub",
            url: "https://github.com/KienJerry/pay_the_bill",
          },
        ],
      },
      {
        title: "Shop stora ( Dự án cá nhân )",
        description: `Đây là dự án cá nhân của mình , được viết bằng : NextJs , sass, redux thunk. 
          Dự án này là mình làm khi thực tập sinh tại công ty trong vòng 1 tuần . Có thể xem chi tiết sản phẩm , add cart , checkout , thay đổi UI ( 4 UI demo ) dưới đây là link source :`,
        description_en:
          "This is my personal project, written using Next.js, Sass, Redux Thunk. I worked on this project during my internship at the company for one week. It includes features such as viewing product details, adding to cart, checkout, and changing UI (4 demo UIs). Below is the source code link:",
        links: [
          {
            name: "GitHub",
            url: "https://github.com/KienJerry/NextJs-Graphql/tree/main/stora-react-ecommerce-nextjs-reacthooks-2022-02-21-23-53-23-utc/stora-next/stora",
          },
        ],
      },
      {
        title: "Quản lý nhân sự ( Dự án nhóm - dự án tốt nghiệp )",
        description:
          "Đây là dự án tốt nghiệp của mình , được viết bằng: reactjs , SASS, Bootstrap, Nodejs , Express , MySQL, Đây là dự án nhóm gồm 4 thành viên , chức năng chính : Phân quyền , Authen , CRUD dự án , xem dự án hiện có ,... dự án được làm trong 2 tháng , dưới đây là link source : ",
        description_en:
          "This is my graduation project, written using: ReactJS, SASS, Bootstrap, Node.js, Express, MySQL. This is a group project with 4 members, featuring functions such as authorization, authentication, CRUD for projects, viewing existing projects, etc. The project was completed in 2 months. Below is the source code link:",
        links: [
          {
            name: "GitHub",
            url: "https://github.com/KienJerry/Du_An_Tot_Nghiep",
          },
        ],
      },
      {
        title: "Dự án làm trên công ty",
        description:
          `Sau 1 năm 3 tháng làm việc tại công ty AEGONA , mình join qua nhiều dự án từ trong nước đến nước ngoài , có dự án mình handle chính , có dự án mình support task, vì bảo mật thông tin source của khách hàng và thông tin khách nên mình chỉ share link web , demo UAT ,...  Anh chị có thể xem các dự án phía ben dưới nhé :`,
        description_en:
          "After 1 year and 3 months working at AEGONA, I have joined various projects both domestically and internationally. Some projects I handle independently, while others involve supporting tasks. Due to security reasons regarding client source code and information, I can only share web links, UAT demos,... I would like to share the projects below for you to take a look at:",
        links: [
          // {
          //   name: "Repository",
          //   url: "https://github.com/ArtShilov/eventPlaner",
          // },
        ],
      },
      {
        title: "Miniapp Zalo",
        description:
          `Miniapp là ứng dụng nhỏ chạy trong hệ sinh thái của Zalo . Mình đã làm 3 dự án về miniapp và mình là người tiên phong của công ty làm về ứng dụng này . Dự án đầu tiên là "Lữ Hành Tour" : Liên quan đến du lịch - đặt tour , mình làm FE . Thời gian làm dự án là 2 tháng , các tính năng gồm có payment - đặt tour - giỏ hàng , authen , chỉnh sửa thông tin cá nhân ,... Dự án thứ 2 là "Abbott" : Dự án liên quan đến các sản phẩm sữa , dự án này là : K`,
        description_en:
          "Team developed SSR-app. CRUD, roles (moderator, user).",
        links: [
          {
            name: "Repository",
            url: "https://github.com/SlavaPush/core-rent-app",
          },
          {
            name: "Fork",
            url: "https://github.com/samolevich/core-rent-app",
          },
        ],
      },
      {
        title: "API Github",
        description:
          "Реализация работы с API Github. Выдаёт последнюю активность в искомой организации (commit, pullrequest...). Технологии: JavaScript, HTML, CSS, Materialize.",
        description_en:
          "Github API implementation. Returns the latest activity in the searched organization (commit, pull request...). Technologies: JavaScript, HTML, CSS, Materialize.",
        links: [
          {
            name: "Github Pages Deployed Site",
            url: "https://samolevich.github.io/solo-project-api-github/",
          },
          {
            name: "Repository",
            url: "https://github.com/samolevich/solo-project-api-github",
          },
        ],
      },
      {
        title: "API HeadHunter",
        description:
          "Проект работает с API HeadHunter и выдаёт последние опубликованные вакансии по региону Москва. JavaScript, HTML, CSS, Materialize.",
        description_en:
          "API HeadHunter implementation. Returns the latest vacancies from region Moscow. JavaScript, HTML, CSS, Materialize.",
        links: [
          {
            name: "Github Pages Deployed Site",
            url: "https://samolevich.github.io/solo-headhunder-api/",
          },
          {
            name: "Repository",
            url: "https://github.com/samolevich/solo-headhunder-api",
          },
        ],
      },
      {
        title: "CV",
        description: "React Github Profile Guide App - CV.",
        description_en: "React Github Profile Guide App - CV.",
        links: [
          {
            name: "Github Pages Deployed Site (THIS SITE)",
            url: "https://samolevich.github.io/cv/",
          },
          {
            name: "Repository",
            url: "https://github.com/samolevich/cv",
          },
        ],
      },
    ],
  },
  certificates: {
    title: "Сертификаты",
    title_en: "Certificates",
    logo: "./img/logo/certificate.svg",
    explanation: "",
    path: "/certificates",
    isNav: true,
    list: [
      {
        description: "Офлайн-интенсив Elbrus Coding Bootcamp",
        description_en: "Elbrus Coding Bootcamp Offline Intensive",
        certs: [
          {
            name: "Сертификат FullStack JavaScript разработчик",
            name_en: "FullStack JavaScript developer certificate",
            url: "https://drive.google.com/file/d/1KHZQQMJqLV-86Xi47VUlu4Tm-ak8AheM/view?usp=sharing",
            pathLocal: "./img/cert/EBC-certificate-Samolevich.png",
            effort: "около 500 часов разработки",
            effort_en: "approximately 500 hours of coursework",
          },
        ],
      },
      {
        description: "Онлайн курсы на Coursera",
        description_en: "Coursera Online Courses",
        certs: [
          {
            name: "Сертификат Programming with JavaScript от Meta",
            name_en: "Programming with JavaScript certificate by Meta",
            url: "https://coursera.org/share/e080b3134ed2c8dc87f8745a38391947",
            pathLocal: "./img/cert/Coursera Programming with JavaScript.jpeg",
            effort: "более 42 часов разработки",
            effort_en: "approximately 42 hours of coursework",
          },
          {
            name: "Сертификат HTML and CSS in depth от Meta",
            name_en: "HTML and CSS in depth certificate by Meta",
            url: "https://coursera.org/share/82a90f5c958dc217849ae0c3f0b1feb6",
            pathLocal: "./img/cert/Coursera HTML and CSS in depth.jpeg",
            effort: "более 21 часов разработки",
            effort_en: "approximately 21 hours of coursework",
          },
          {
            name: "Сертификат Principles of UX/UI Design от Meta",
            name_en: "Principles of UX/UI Design certificate by Meta",
            url: "https://coursera.org/share/9e7096cff81092050fab43af394c1f92",
            pathLocal: "./img/cert/Coursera Principles of UXUI Design.jpeg",
            effort: "более 21 часов разработки",
            effort_en: "approximately 21 hours of coursework",
          },
          {
            name: "Сертификат Advanced Styling with Responsive Design от University of Michigan",
            name_en:
              "Advanced Styling with Responsive Design certificate by University of Michigan",
            url: "https://coursera.org/share/b93adc750cda0d958b719addad07e677",
            pathLocal:
              "./img/cert/Coursera Advanced Styling with Responsive Design.jpeg",
            effort: "более 12 часов разработки",
            effort_en: "approximately 12 hours of coursework",
          },
          {
            name: "Сертификат Interactivity with JavaScript от University of Michigan",
            name_en:
              "Interactivity with JavaScript certificate by University of Michigan",
            url: "https://coursera.org/share/3882b5b4e1ea53a67101cc0209dfa17a",
            pathLocal: "./img/cert/Coursera Interactivity with JavaScript.jpeg",
            effort: "более 9 часов разработки",
            effort_en: "approximately 9 hours of coursework",
          },
        ],
      },
      {
        description: "Онлайн курс JavaScript от Free Code Camp",
        description_en: "Free Code Camp JavaScript Online Course",
        certs: [
          {
            name: "Сертификат Back End Development and APIs",
            name_en: "Back End Development and APIs certificate",
            url: "https://www.freecodecamp.org/certification/samolevich/back-end-development-and-apis",
            pathLocal: "./img/cert/Back End Development and APIs.png",
            effort: "более 300 часов разработки",
            effort_en: "approximately 300 hours of coursework",
          },
          {
            name: "Сертификат JavaScript Algorithms and Data Structures",
            name_en: "JavaScript Algorithms and Data Structures certificate",
            url: "https://www.freecodecamp.org/certification/samolevich/javascript-algorithms-and-data-structures",
            pathLocal:
              "./img/cert/Free Code Camp JavaScript Algorithms and Data Structures.png",
            effort: "более 300 часов разработки",
            effort_en: "approximately 300 hours of coursework",
          },
          {
            name: "Сертификат Responsive Web Design",
            name_en: "Responsive Web Design certificate",
            url: "https://www.freecodecamp.org/certification/samolevich/responsive-web-design",
            pathLocal: "./img/cert/Free Code Camp Responsive Web Design.png",
            effort: "более 300 часов разработки",
            effort_en: "approximately 300 hours of coursework",
          },
          {
            name: "Сертификат Front End Development Libraries",
            name_en: "Front End Development Libraries certificate",
            url: "https://www.freecodecamp.org/certification/samolevich/front-end-development-libraries",
            pathLocal: "./img/cert/Front End Development Libraries.png",
            effort: "более 300 часов разработки",
            effort_en: "approximately 300 hours of coursework",
          },
        ],
      },
      {
        description: "Онлайн курс JavaScript от Stepik",
        description_en: "Stepik JavaScript Online Course",
        certs: [
          {
            name: "Сертификат JavaScript Course for beginners",
            name_en: "JavaScript Course for beginners  certificate",
            url: "https://stepik.org/cert/283188",
            pathLocal: "./img/cert/Stepik JavaScript for beginners.png",
            effort: "более 300 часов разработки",
            effort_en: "approximately 300 hours of coursework",
          },
        ],
      },
    ],
  },
  expirience: {
    title: "Опыт",
    title_en: "Expirience",
    logo: "./img/logo/expirience.svg",
    path: "/expirience",
    isNav: true,
    relevant: {
      title: "Релевантный опыт",
      title_en: "Relevant expirience",
      explanation: [
        "Начиная с июля 2020 года имею опыт разработки как в команде, так и самостоятельно.",
        "Опыт коммерческой разработки в таких компаниях как Айтеко, ФГБУ ИАЦ МЧС РФ. А также в качестве самозанятого.",
        "Проекты можно посмотреть в моём репозитории Github.",
        "",
        "Инструменты, которыми я пользуюсь:",
        "Основная операционная система - Linux (Ubuntu).",
        "Среда разработки - VS Code.",
        "Система контроля версий - Git (Github). В основном через консоль.",
        "CSR App на React (Classes, Hooks), Redux (Thunk), JavaScript (ES6), CSS (flex, grid), SCSS, HTML.",
        "SSR App на NodeJS, Express JS, Handlebars, MongoDB, Mongoose.",
        "Некоторый опыт React-Bootstrap, Bootstrap, MaterialUI, Materialize, D3.js, AntDesign.",
      ],
      explanation_en: [
        "Starting from July 2020, I have experience in development both in a team and independently.",
        "Projects can be viewed in my Github repository.",
        "Tools I use:",
        "The main operating system is Linux (Ubuntu).",
        "Development environment - VS Code.",
        "Version control system - Git (Github). Mainly via console.",
        "CSR App on React (Classes, Hooks), Redux (Thunk), JavaScript (ES6), CSS (flex, grid), SCSS, HTML.",
        "SSR App on NodeJS, Express JS, Handlebars, MongoDB, Mongoose.",
        "Some experience with React-Bootstrap, Bootstrap, MaterialUI, Materialize, D3.js, AntDesign.",
      ],
    },
    nonRelevant: {
      title: "Нерелевантный опыт",
      title_en: "Non-relevant expirience",
      explanation:
        "17 лет опыта работы связаны с торговлей. Начиная с 18 лет, работал в B2B (телекоммуникационные услуги, банковские продукты и услуги, оптовая торговля алкоголем). Самое продолжительное время работы 4.5 года занимался продажей корпусной мебели физическим лицам.",
      explanation_en:
        "I have 17 years experience in sales. Starting at the age of 18, mostly in B2B (telecommunication services, banking products and services, alcohol wholesale). The longest time of work in one place - 4.5 years.",
    },
    devExperience: () => {
      const { fullYears, months } = periodFrom(2020, 6);
      const yearDeclension = fullYears
        ? fullYears % 10 === 1 && fullYears % 100 !== 11
          ? `${fullYears} года`
          : `${fullYears} лет`
        : "";
      const monthDeclension = months
        ? months === 1
          ? ` и ${months} месяцa`
          : ` и ${months} месяцев`
        : "";
      return `В качестве разработчика более ${yearDeclension}${monthDeclension}. `;
    },
    devExperience_en: () => {
      const { fullYears, months } = periodFrom(2020, 6);
      const yearDeclension = `${fullYears} years`;
      const monthDeclension = months
        ? months === 1
          ? ` and ${months} month`
          : ` and ${months} months`
        : "";
      return `I have over ${yearDeclension}${monthDeclension} expirience as a developer. `;
    },
  },
  futureVision: {
    title: "Планы",
    title_en: "My plans",
    logo: "./img/logo/future.svg",
    path: "/",
    description: [
      "В планах изучить Angular JS.",
      "В долгосрочной перспективе изучить технологии и языки для реализации Backend-логики.",
      "Поднять уровень владения английским языком до уровня B2/C1.",
    ],
    description_en: [
      "Learn Angular JS.",
      "In the long term, learn technologies and languages to implement Backend logic.",
      "Improve English proficiency to level B2/C1 (now A2).",
    ],
  },
  education: {
    title: "Образование",
    title_en: "Education",
    logo: "./img/logo/education.svg",
    path: "/",
    description: "Основное образование - среднее.",
    description_en: "High School degree.",
  },

  contact: {
    title: "Контакты",
    title_en: "Contacts",
    logo: "./img/logo/contacts.svg",
    interactions: [
      {
        title: "+7926 324 8737",
        title_en: "Call me",
        url: "tel:+79263248737",
        iconForMobileVersion: "./img/logo/call.svg",
      },
      {
        title: "Эл.почта",
        title_en: "E-mail me",
        url: "mailto:samolevich@gmail.com",
        iconForMobileVersion: "./img/logo/contacts.svg",
      },
      {
        title: "Телеграм",
        title_en: "Telegram me",
        url: "https://t.me/samolevich",
        iconForMobileVersion: "./img/logo/telegram.svg",
      },
      {
        title: "Вотсап",
        title_en: "WhatsApp me",
        url: "https://wa.me/79263248737",
        iconForMobileVersion: "./img/logo/whatsapp.svg",
      },
    ],
  },
  profile: {
    cv: [
      {
        title: "LinkedIn",
        title_en: "LinkedIn",
        url: "https://www.linkedin.com/in/samolevich/",
      },
      {
        title: "HeadHunter CV",
        title_en: "HeadHunter CV",
        url: "https://hh.ru/resume/50255c87ff0c717f810039ed1f6d565a725870",
      },
    ],
    code: [
      {
        title: "Github профиль",
        title_en: "Github profile",
        url: "https://github.com/samolevich",
        iconForMobileVersion: "./img/logo/octocat.svg",
      },
      {
        title: "Codewars профиль",
        title_en: "Codewars profile",
        url: "https://www.codewars.com/users/samolevich",
      },
      {
        title: "FreeCodeCamp профиль",
        title_en: "FreeCodeCamp profile",
        url: "https://www.freecodecamp.org/samolevich",
      },
    ],
  },
  location: {
    title: "Москва",
    title_en: "Moscow",
    logo: "./img/logo/location.svg",
  },
};

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
    logo: "/img/logo/about.svg",
    explanation:
      "Chào mọi người. Mình tên là Nguyễn Thế Kiên. mình sinh năm 2001 và có hơn 1 năm kinh nghiệm . Là nhà phát triển Front End. Chủ yếu là ReactJS , NextJS.",
    explanation_en: `Hello everyone. My name is Nguyễn Thế Kiên. I was born in 2001 and have over 1 year of experience. I am a Front End developer, mainly working with ReactJS and NextJS.`,
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
    logo: "/img/logo/skills.svg",
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
      "Miniapp zalo",
    ],
  },
  projects: {
    title: "Dự án",
    title_en: "Projects",
    logo: "/img/logo/projects.svg",
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
        description: `Sau 1 năm 3 tháng làm việc tại công ty AEGONA , mình join qua nhiều dự án từ trong nước đến nước ngoài , có dự án mình handle chính , có dự án mình support task, vì bảo mật thông tin source của khách hàng và thông tin khách nên mình chỉ share link web , demo UAT ,...  Anh chị có thể xem các dự án phía ben dưới nhé :`,
        description_en:
          "After 1 year and 3 months working at AEGONA, I have joined various projects both domestically and internationally. Some projects I handle independently, while others involve supporting tasks. Due to security reasons regarding client source code and information, I can only share web links, UAT demos,... I would like to share the projects below for you to take a look at:",
        links: [],
      },
      {
        title: "Miniapp Zalo",
        description: `Miniapp là ứng dụng nhỏ chạy trong hệ sinh thái của Zalo . 
        Mình đã làm 3 dự án về miniapp và mình là người tiên phong của công ty làm về ứng dụng này . 
        Và cả 3 dự án mình handle trực tiếp với khách hàng , dev bên khách . 
        Dự án đầu tiên là "Lữ Hành Tour" : Liên quan đến du lịch - đặt tour. Thời gian làm dự án là 2 tháng , các tính năng gồm có payment - đặt tour - giỏ hàng , authen , chỉnh sửa thông tin cá nhân ,... Dự án thứ 2 là "Abbott" : Dự án liên quan đến các sản phẩm sữa , dự án này mình onsite cho khách , làm trong 1 tháng rưỡi . 
        Dự án thứ 3 là Lavie AI Tiên Tri : Dự án này mình làm FE & làm chung với 1 anh ấn độ ( Backend ) , dự án liên quan đến thần số học , cung hoàng đạo , bói toán ( Quảng cáo : https://www.facebook.com/100064718704823/posts/778426170991333/ )`,
        description_en: `Miniapp is a small application running within the Zalo ecosystem. I have worked on 3 miniapp projects and have been a pioneer in the company for such applications. I directly handled all 3 projects, working closely with clients and the client's development team.

          The first project is 'Lữ Hành Tour,' related to travel and tour booking. The project duration was 2 months, and it included features such as payment, tour booking, cart management, authentication, and personal information editing.
          
          The second project is 'Abbott,' related to dairy products. For this project, I worked on-site for the client, completing it in 1.5 months.
          
          The third project is Lavie AI Tiên Tri. In this project, I worked on the front-end and collaborated with a backend developer from India. The project is related to numerology, zodiac signs, and fortune-telling. (Advertisement: https://www.facebook.com/100064718704823/posts/778426170991333/).`,
        links: [
          {
            name: "Lữ Hành Tour",
            url: "https://zalo.me/s/1309518302013277901/",
          },
          {
            name: "Magenest Abbott",
            url: "https://zalo.me/s/2055623046682325497/",
          },
          {
            name: "Lavie AI Tiên Tri",
            url: "https://zalo.me/s/3020445859421290716/",
          },
        ],
      },
      {
        title: "Website",
        description:
          "Dưới đây là 1 số dự án mình làm từ khi nhận dự án đến khi go live , chủ yếu là mình làm FE , cũng có 1 số dự án mình làm BE ( Nodejs , NestJs ) , FE chủ yếu về Reactjs , NextJs",
        description_en:
          "Below are some projects I worked on from the time I received the project until it went live. I mainly worked on the front-end, but I also worked on some back-end projects (Nodejs, NestJs). The front-end projects were mainly focused on Reactjs and NextJs.",
        links: [
          {
            name: "Best English",
            url: "https://best-english-staging.fer.aegona.work/",
          },
          {
            name: "Việc Làm Tây Nguyên",
            url: "https://www.vieclamtaynguyen.vn/",
          },
          {
            name: "AdTool (account:superadmin , pass:superadmin)",
            url: "https://adtool-web-test.husky.aegona.work",
          },
          {
            name: "TeamSport",
            url: "https://teamsport-fe-test.ferrari.aegona.work/",
          },
        ],
      },
      {
        title: "Zalo developer",
        description: `Đây thường là các dự án tích điểm đổi quà liên quan đến zalo OA , source được dựng base sẵn ( Admin ( .net ) , client ( Nestjs - hbs )) nên mình thường sẽ làm theo các base đó , mình đã làm qua 3 dự án như ( BBPharma , SaiGonMachine, Bi-a Brex ). Do là ứng dụng liên quan đến OA của khách hàng nên mình sẽ không để link ứng dụng .`,
        description_en:
          "These are usually point-accumulation projects related to Zalo OA. The source code is built on a pre-existing base (Admin (.net), client (Nestjs - hbs)). Therefore, I usually work according to those bases. I have worked on three projects such as BBPharma, SaiGonMachine, and Bi-a Brex. Since these are applications related to my client’s OA, I will not provide application links.",
        links: [],
      },
      {
        title: "Support",
        description:
          "React Github Profile Guide App - CV.Dưới đây là 1 số dự án mình support ( tham gia dự án khi dự án hoan thành khoảng 50% trở lên ) , có 1 số dự án của nước ngoài như ( Nhật , Sing , Ấn độ ,.. ) các dự án thường viết bằng Reactjs , NextJs , sử dụng 1 số thư viện hỗ trợ như MUI cho admin , antd / bootstrap / tailwind ,... Có 1 số dự án bảo trì , nâng cấp chức năng , dưới dây là 1 số sản phẩm :",
        description_en:
          "Below are some projects I have supported (joining the project when it is approximately 50% completed). There are several international projects from countries like Japan, Singapore, India, etc. These projects are typically developed using ReactJS, NextJS, and utilize various supporting libraries such as MUI for the admin panel, antd/bootstrap/tailwind, etc. Some projects involve maintenance and feature upgrades. Here are some of the products:",
        links: [
          {
            name: "JEMS",
            url: "https://jems-fe-test.husky.aegona.work/",
          },
          {
            name: "VinaMove (UAT) (account:admin , pass: 123456y@Y",
            url: "https://vinamove-crm-staging.fer.aegona.work/",
          },
          {
            name: "Kovena Holtel Link",
            url: "https://kovena-extranet-webapp-test.ferrari.aegona.work/",
          },
        ],
      },
    ],
  },
  // certificates: {
  //   title: "Сертификаты",
  //   title_en: "Certificates",
  //   logo: "/img/logo/certificate.svg",
  //   explanation: "",
  //   path: "/certificates",
  //   isNav: true,
  //   list: [
  //     {
  //       description: "Офлайн-интенсив Elbrus Coding Bootcamp",
  //       description_en: "Elbrus Coding Bootcamp Offline Intensive",
  //       certs: [
  //         {
  //           name: "Сертификат FullStack JavaScript разработчик",
  //           name_en: "FullStack JavaScript developer certificate",
  //           url: "https://drive.google.com/file/d/1KHZQQMJqLV-86Xi47VUlu4Tm-ak8AheM/view?usp=sharing",
  //           pathLocal: "/img/cert/EBC-certificate-Samolevich.png",
  //           effort: "около 500 часов разработки",
  //           effort_en: "approximately 500 hours of coursework",
  //         },
  //       ],
  //     },
  //     {
  //       description: "Онлайн курсы на Coursera",
  //       description_en: "Coursera Online Courses",
  //       certs: [
  //         {
  //           name: "Сертификат Programming with JavaScript от Meta",
  //           name_en: "Programming with JavaScript certificate by Meta",
  //           url: "https://coursera.org/share/e080b3134ed2c8dc87f8745a38391947",
  //           pathLocal: "/img/cert/Coursera Programming with JavaScript.jpeg",
  //           effort: "более 42 часов разработки",
  //           effort_en: "approximately 42 hours of coursework",
  //         },
  //         {
  //           name: "Сертификат HTML and CSS in depth от Meta",
  //           name_en: "HTML and CSS in depth certificate by Meta",
  //           url: "https://coursera.org/share/82a90f5c958dc217849ae0c3f0b1feb6",
  //           pathLocal: "/img/cert/Coursera HTML and CSS in depth.jpeg",
  //           effort: "более 21 часов разработки",
  //           effort_en: "approximately 21 hours of coursework",
  //         },
  //         {
  //           name: "Сертификат Principles of UX/UI Design от Meta",
  //           name_en: "Principles of UX/UI Design certificate by Meta",
  //           url: "https://coursera.org/share/9e7096cff81092050fab43af394c1f92",
  //           pathLocal: "/img/cert/Coursera Principles of UXUI Design.jpeg",
  //           effort: "более 21 часов разработки",
  //           effort_en: "approximately 21 hours of coursework",
  //         },
  //         {
  //           name: "Сертификат Advanced Styling with Responsive Design от University of Michigan",
  //           name_en:
  //             "Advanced Styling with Responsive Design certificate by University of Michigan",
  //           url: "https://coursera.org/share/b93adc750cda0d958b719addad07e677",
  //           pathLocal:
  //             "/img/cert/Coursera Advanced Styling with Responsive Design.jpeg",
  //           effort: "более 12 часов разработки",
  //           effort_en: "approximately 12 hours of coursework",
  //         },
  //         {
  //           name: "Сертификат Interactivity with JavaScript от University of Michigan",
  //           name_en:
  //             "Interactivity with JavaScript certificate by University of Michigan",
  //           url: "https://coursera.org/share/3882b5b4e1ea53a67101cc0209dfa17a",
  //           pathLocal: "/img/cert/Coursera Interactivity with JavaScript.jpeg",
  //           effort: "более 9 часов разработки",
  //           effort_en: "approximately 9 hours of coursework",
  //         },
  //       ],
  //     },
  //     {
  //       description: "Онлайн курс JavaScript от Free Code Camp",
  //       description_en: "Free Code Camp JavaScript Online Course",
  //       certs: [
  //         {
  //           name: "Сертификат Back End Development and APIs",
  //           name_en: "Back End Development and APIs certificate",
  //           url: "https://www.freecodecamp.org/certification/samolevich/back-end-development-and-apis",
  //           pathLocal: "/img/cert/Back End Development and APIs.png",
  //           effort: "более 300 часов разработки",
  //           effort_en: "approximately 300 hours of coursework",
  //         },
  //         {
  //           name: "Сертификат JavaScript Algorithms and Data Structures",
  //           name_en: "JavaScript Algorithms and Data Structures certificate",
  //           url: "https://www.freecodecamp.org/certification/samolevich/javascript-algorithms-and-data-structures",
  //           pathLocal:
  //             "/img/cert/Free Code Camp JavaScript Algorithms and Data Structures.png",
  //           effort: "более 300 часов разработки",
  //           effort_en: "approximately 300 hours of coursework",
  //         },
  //         {
  //           name: "Сертификат Responsive Web Design",
  //           name_en: "Responsive Web Design certificate",
  //           url: "https://www.freecodecamp.org/certification/samolevich/responsive-web-design",
  //           pathLocal: "/img/cert/Free Code Camp Responsive Web Design.png",
  //           effort: "более 300 часов разработки",
  //           effort_en: "approximately 300 hours of coursework",
  //         },
  //         {
  //           name: "Сертификат Front End Development Libraries",
  //           name_en: "Front End Development Libraries certificate",
  //           url: "https://www.freecodecamp.org/certification/samolevich/front-end-development-libraries",
  //           pathLocal: "/img/cert/Front End Development Libraries.png",
  //           effort: "более 300 часов разработки",
  //           effort_en: "approximately 300 hours of coursework",
  //         },
  //       ],
  //     },
  //     {
  //       description: "Онлайн курс JavaScript от Stepik",
  //       description_en: "Stepik JavaScript Online Course",
  //       certs: [
  //         {
  //           name: "Сертификат JavaScript Course for beginners",
  //           name_en: "JavaScript Course for beginners  certificate",
  //           url: "https://stepik.org/cert/283188",
  //           pathLocal: "/img/cert/Stepik JavaScript for beginners.png",
  //           effort: "более 300 часов разработки",
  //           effort_en: "approximately 300 hours of coursework",
  //         },
  //       ],
  //     },
  //   ],
  // },
  expirience: {
    title: "Kinh nghiệm",
    title_en: "Expirience",
    logo: "/img/logo/expirience.svg",
    path: "/expirience",
    isNav: true,
    relevant: {
      title: "Kinh nghiệm liên quan",
      title_en: "Relevant expirience",
      explanation: [
        "Mình bắt đầu thực tập tại công ty Aegona từ tháng 7 năm 2022 , mình có kinh nghiệm phát triển theo theo nhóm và cá nhân. Trước đây mình học tại cao đẳng FPT Polytechnic , mình học từ năm 2019",
        "Các dự án cá nhân có thể xem trong github cá nhân của mình",
        "",
        "Công cụ sử dụng :",
        "Hệ điều hành chính là windown",
        "Môi trường code : VS code ",
        "Quản lý mã nguồn : github , gitlab",
      ],
      explanation_en: [
        "I started my internship at Aegona Company in July 2022. I have experience working both in teams and individually. I previously studied at FPT Polytechnic College, starting in 2019",
        "Personal projects can be viewed on my personal GitHub repository.",
        "",
        "Tools I use:",
        "Main operating system: Windows",
        "Development environment - VS Code.",
        "Source code management: GitHub, GitLab",
      ],
    },
    nonRelevant: {
      title: "Kinh nghiệm không liên quan",
      title_en: "Non-relevant expirience",
      explanation: "N/A",
      explanation_en: "N/A.",
    },
    devExperience: () => {
      const { fullYears, months } = periodFrom(2022, 10);
      const yearDeclension = fullYears
        ? fullYears % 10 === 1 && fullYears % 100 !== 11
          ? `${fullYears} năm`
          : `${fullYears} năm`
        : "";
      const monthDeclension = months
        ? months === 1
          ? ` ${months} tháng`
          : ` ${months} tháng`
        : "";
      return `mình có hơn ${yearDeclension}${monthDeclension} kinh nghiệm làm Front End Dev. `;
    },
    devExperience_en: () => {
      const { fullYears, months } = periodFrom(2022, 10);
      const yearDeclension = `${fullYears} years`;
      const monthDeclension = months
        ? months === 1
          ? ` and ${months} month`
          : ` and ${months} months`
        : "";
      return `I have over ${yearDeclension}${monthDeclension} expirience as a Front End Dev. `;
    },
  },
  futureVision: {
    title: "Планы",
    title_en: "My plans",
    logo: "/img/logo/future.svg",
    path: "/",
    description: [
      "Học thêm Backend (NodeJs, NestJS).",
      "Về lâu dài, trở thành fullStack , có thể handle được thêm nhiều dự án phức tạm hơn",
      "Nâng cao trình độ tiếng anh.",
    ],
    description_en: [
      "Learn NodeJs, NestJS.",
      "Long-term, becoming a full-stack developer allows for handling more complex projects.",
      "Improving English proficiency.",
    ],
  },
  education: {
    title: "Tốt nghiệp",
    title_en: "Education",
    logo: "/img/logo/education.svg",
    path: "/",
    description: "Cao đẳng FPT Polytechnic",
    description_en: "FPT Polytechnic College",
  },

  contact: {
    title: "Контакты",
    title_en: "Contacts",
    logo: "/img/logo/contacts.svg",
    interactions: [
      {
        title: "035 2626 013",
        title_en: "Call me",
        url: "tel:+84352626013",
        iconForMobileVersion: "/img/logo/call.svg",
      },
      {
        title: "email của tôi",
        title_en: "E-mail me",
        url: "mailto:kienntpk01531@gmail.com",
        iconForMobileVersion: "/img/logo/contacts.svg",
      },
    ],
  },
  profile: {
    cv: [
      {
        title: "LinkedIn",
        title_en: "LinkedIn",
        url: "https://www.linkedin.com/in/th%E1%BA%BF-ki%C3%AAn-9b06082a8/",
      },
    ],
    code: [
      {
        title: "Github của tôi",
        title_en: "Github profile",
        url: "https://github.com/KienJerry",
        iconForMobileVersion: "/img/logo/octocat.svg",
      },
    ],
  },
  location: {
    title: "Buôn Ma Thuột",
    title_en: "Buôn Ma Thuột",
    logo: "/img/logo/location.svg",
  },
};

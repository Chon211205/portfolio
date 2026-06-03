const translations = {
  es: {
    site: {
      portfolioTitle: 'PORTAFOLIO DIGITAL',
      ownerName: 'Chon',
      role: 'Desarrollador Web',
      back: 'Volver',
      region: 'Región:',
      type: 'Tipo:',
      guatemala: 'Guatemala',
      frontendWeb: 'Frontend / Web'
    },

    menu: {
      title: 'MENÚ PRINCIPAL',
      subtitle: 'Selecciona una sección',
      trainerCard: 'Sobre mí',
      trainerCardDesc: 'Información personal y perfil profesional.',
      projects: 'Proyectos',
      projectsDesc: 'Trabajos realizados y experiencias de desarrollo.',
      skills: 'Habilidades',
      skillsDesc: 'Tecnologías, herramientas y conocimientos.',
      contact: 'Contacto',
      contactDesc: 'Redes, correo y formas de comunicación.',
      aboutMe: 'Sobre mí',
      aboutMeDesc: 'Mi historia, intereses y objetivos profesionales.',
      options: 'Opciones',
      optionsDesc: 'Preferencias, tema visual y detalles extra.'
    },

    trainer: {
      title: 'Sobre mí',
      profileTitle: 'Perfil',
      profileText:
        'Soy un desarrollador web en formación, enfocado en crear interfaces claras, funcionales y visualmente atractivas. Este portafolio presenta mi información de forma interactiva, organizada y con una identidad visual diferente. Elegí esta estética porque Pokémon es uno de mis videojuegos favoritos y marcó parte de mi vida.',
      goalTitle: 'Objetivo',
      goalText:
        'Crear proyectos web que combinen buena estructura, código limpio, diseño responsivo y una experiencia de usuario clara.',
      teamTitle: 'Equipo Pokémon'
    },

    projectOne: {
      type: 'Tipo Página web',
      title: 'Calculadora Web',
      description:
        'Calculadora enfocada en operaciones básicas con test y Storybook funcionales.',
      technologiesTitle: 'Tecnologías',
      demonstratesTitle: 'Qué demuestra',
      demonstratesText:
        'El objetivo de este proyecto es practicar los conceptos alrededor del diseño de aplicaciones en base a componentes. También aplicar testing, linting y Storybook.',
      reflectionTitle: 'Reflexión',
      reflectionText:
        'Este proyecto me ayudó a ver cómo funcionan el testing, linting y Storybook. En mi opinión son útiles para proyectos grandes para comprobar si algo falla y evitar acumular errores.',
      repositoryButton: 'Repositorio'
    },

    projectTwo: {
      type: 'Tipo Página web',
      title: 'Rating de películas',
      description:
        'Página para calificar películas y llevar un control de las series y películas vistas.',
      technologiesTitle: 'Tecnologías',
      demonstratesTitle: 'Qué demuestra',
      demonstratesText:
        'El objetivo de este proyecto es trabajar como full stack para tener experiencia como desarrollador frontend y backend.',
      reflectionTitle: 'Reflexión',
      reflectionText:
        'Este proyecto me ayudó a vivir la experiencia como desarrollador frontend y backend. Desde ambas perspectivas fue agradable trabajar y siento que es bueno, porque no me tengo que limitar a solo un área.',
      frontendRepositoryButton: 'Repositorio frontend',
      backendRepositoryButton: 'Repositorio backend'
    },

    projectThree: {
      type: 'Tipo Base de datos',
      title: 'Sistema de gestión',
      description:
        'Sistema de gestión para una tienda, poniendo en práctica conocimientos de base de datos.',
      technologiesTitle: 'Tecnologías',
      demonstratesTitle: 'Qué demuestra',
      demonstratesText:
        'El proyecto demuestra el manejo de base de datos con triggers, joins y consultas select. También integra un backend en Node.js/Express y un frontend construido en React + Vite. Todo se encuentra dentro de un contenedor de Docker para levantar el proyecto.',
      reflectionTitle: 'Reflexión',
      reflectionText:
        'Este proyecto fue un reto para mí debido a que puso a prueba mis conocimientos en el manejo de bases de datos, consultas y seguridad de los datos.',
      repositoryButton: 'Repositorio'
    },

    projectFour: {
      type: 'Tipo Juego',
      title: 'Snake',
      description:
        'Recreación del juego clásico de Snake.',
      technologiesTitle: 'Tecnologías',
      demonstratesTitle: 'Qué demuestra',
      demonstratesText:
        'El proyecto demuestra el uso de React vía CDN junto con Babel vía CDN para realizar el juego de Snake por medio de componentes.',
      reflectionTitle: 'Reflexión',
      reflectionText:
        'Este proyecto fue divertido al ver las amplias opciones que se pueden llegar a realizar utilizando useEffect y useState.',
      repositoryButton: 'Repositorio'
    },
    
    projectFive: {
      type: 'Tipo Juego',
      title: 'Galaga',
      description:
        'Galaga programado con C++ trabajando con threads.',
      technologiesTitle: 'Tecnologías',
      demonstratesTitle: 'Qué demuestra',
      demonstratesText:
        'El proyecto demuestra el uso de hilos porque permite que el juego ejecute procesos de forma paralela mientras la partida está activa. En lugar de que todo ocurra en una sola secuencia bloqueante, el programa puede mantener la lógica principal del juego funcionando al mismo tiempo que controla otras acciones, como la actualización del entorno o el comportamiento interno del juego.',
      reflectionTitle: 'Reflexión',
      reflectionText:
        'Este proyecto fue interesante al experimentar cómo se trabaja con hilos, observando un mejor comportamiento en el juego en comparación con un código normal.',
      repositoryButton: 'Repositorio'
    },

    projectsPage: {
      title: 'PROYECTOS',
      projectOneType: 'Tipo Página web',
      projectOneTitle: 'Calculadora Web',
      projectOneShort: 'Lógica, operaciones básicas, testing, linting y Storybook.',
      projectTwoType: 'Tipo Página web',
      projectTwoTitle: 'Rating de películas',
      projectTwoShort: 'Diseño responsivo y presentación visual.',
      projectThreeType: 'Tipo Base de datos',
      projectThreeTitle: 'Sistema de Gestión',
      projectThreeShort: 'Organización de datos e interfaz administrativa.',
      projectFourType: 'Tipo Juego',
      projectFourTitle: 'Snake',
      projectFourShort: 'Recreación del juego clásico Snake.',
      projectFiveType: 'Tipo Juego',
      projectFiveTitle: 'Galaga',
      projectFiveShort: 'Galaga trabajado en C++ con hilos.'
    },

    skillsPage: {
      title: 'MEDALLAS DE HABILIDAD',
      badge: 'GYM BADGES',
      heading: 'Mis medallas técnicas',
      intro:
        'Cada medalla representa una habilidad que he desarrollado en mis proyectos. La idea es mostrar mi stack de forma visual, clara y conectada con la temática del portafolio.',
      htmlDesc:
        'Estructura semántica, organización del contenido y bases sólidas para sitios web.',
      cssDesc:
        'Diseño responsivo, estilos personalizados, layouts y construcción visual de interfaces.',
      jsDesc:
        'Interactividad, manipulación del DOM, eventos, lógica y funcionalidades dinámicas.',
      reactDesc:
        'Componentes, estado, hooks y construcción de interfaces reutilizables.',
      dbDesc:
        'Consultas, relaciones, joins, triggers y manejo de información en bases de datos.',
      toolsTitle: 'Herramientas',
      toolsDesc:
        'GitHub, Docker, testing, linting y organización del flujo de trabajo.',
      pythonDesc:
        'Programación, lógica, automatización y resolución de problemas con código claro.',
      javaDesc:
        'Programación orientada a objetos, estructuras de datos y desarrollo de aplicaciones.',
      blenderDesc:
        'Modelado 3D, composición visual y creación de recursos gráficos para proyectos.',  
      kotlinDesc:
        'Desarrollo móvil, lógica de aplicaciones y bases para crear interfaces en Android.',
      cppDesc:
        'Programación estructurada, manejo de lógica, memoria, hilos y desarrollo de juegos.',

      levelHigh: 'Nivel alto',
      levelMedium: 'Nivel medio',
      levelGrowing: 'En crecimiento'
    },

  },

  en: {
    site: {
      portfolioTitle: 'DIGITAL PORTFOLIO',
      ownerName: 'Chon',
      role: 'Web Developer',
      back: 'Back',
      region: 'Region:',
      type: 'Type:',
      guatemala: 'Guatemala',
      frontendWeb: 'Frontend / Web'
    },

    menu: {
      title: 'MAIN MENU',
      subtitle: 'Select a section',
      trainerCard: 'About me',
      trainerCardDesc: 'Personal information and professional profile.',
      projects: 'Projects',
      projectsDesc: 'Development work and project experience.',
      skills: 'Skills',
      skillsDesc: 'Technologies, tools and knowledge.',
      contact: 'Contact',
      contactDesc: 'Social links, email and communication options.',
      aboutMe: 'About Me',
      aboutMeDesc: 'My story, interests and professional goals.',
      options: 'Options',
      optionsDesc: 'Preferences, visual theme and extra details.'
    },

    trainer: {
      title: 'TRAINER CARD',
      profileTitle: 'Profile',
      profileText:
        'I am a web developer in training, focused on creating clear, functional and visually attractive interfaces. This portfolio presents my information in an interactive and organized way with a different visual identity. I chose this aesthetic because Pokémon is one of my favorite video games and had an important impact on my life.',
      goalTitle: 'Goal',
      goalText:
        'To create web projects that combine good structure, clean code, responsive design and a clear user experience.',
      teamTitle: 'Pokémon Team'
    },

    projectOne: {
      type: 'Website Type',
      title: 'Web Calculator',
      description:
        'Calculator focused on basic operations with functional tests and Storybook stories.',
      technologiesTitle: 'Technologies',
      demonstratesTitle: 'What it demonstrates',
      demonstratesText:
        'The goal of this project is to practice concepts related to component-based application design. It also applies testing, linting and Storybook.',
      reflectionTitle: 'Reflection',
      reflectionText:
        'This project helped me understand how testing, linting and Storybook work. In my opinion, they are useful for large projects because they help detect failures and avoid accumulating errors.',
      repositoryButton: 'Repository'
    },

    projectTwo: {
      type: 'Website Type',
      title: 'Movie Rating',
      description:
        'A page to rate movies and keep track of watched series and movies.',
      technologiesTitle: 'Technologies',
      demonstratesTitle: 'What it demonstrates',
      demonstratesText:
        'The goal of this project is to work as a full stack developer and gain experience in both frontend and backend development.',
      reflectionTitle: 'Reflection',
      reflectionText:
        'This project helped me experience both frontend and backend development. Working from both perspectives was enjoyable, and I think it is valuable because I do not have to limit myself to only one area.',
      frontendRepositoryButton: 'Frontend repository',
      backendRepositoryButton: 'Backend repository'
    },

    projectThree: {
      type: 'Database Type',
      title: 'Management System',
      description:
        'A management system for a store, applying database knowledge in a practical project.',
      technologiesTitle: 'Technologies',
      demonstratesTitle: 'What it demonstrates',
      demonstratesText:
        'The project demonstrates database management using triggers, joins and select queries. It also integrates a Node.js/Express backend and a frontend built with React + Vite. Everything runs inside a Docker container to start the project.',
      reflectionTitle: 'Reflection',
      reflectionText:
        'This project was a challenge for me because it tested my knowledge of database management, queries and data security.',
      repositoryButton: 'Repository'
    },

    projectFour: {
      type: 'Game Type',
      title: 'Snake',
      description:
        'A recreation of the classic Snake game.',
      technologiesTitle: 'Technologies',
      demonstratesTitle: 'What it demonstrates',
      demonstratesText:
        'The project demonstrates the use of React through a CDN together with Babel through a CDN to build the Snake game using components.',
      reflectionTitle: 'Reflection',
      reflectionText:
        'This project was fun because it showed me the wide range of possibilities that can be created using useEffect and useState.',
      repositoryButton: 'Repository'
    },
    
    projectFive: {
      type: 'Game Type',
      title: 'Galaga',
      description:
        'Galaga programmed in C++ using threads.',
      technologiesTitle: 'Technologies',
      demonstratesTitle: 'What it demonstrates',
      demonstratesText:
        'The project demonstrates the use of threads because it allows the game to run processes in parallel while the match is active. Instead of everything happening in a single blocking sequence, the program can keep the main game logic running while also controlling other actions, such as updating the environment or handling the internal behavior of the game.',
      reflectionTitle: 'Reflection',
      reflectionText:
        'This project was interesting because I experimented with how threads work and observed better behavior in the game compared to normal sequential code.',
      repositoryButton: 'Repository'
    },

    projectsPage: {
      title: 'PROJECTS',
      projectOneType: 'Website Type',
      projectOneTitle: 'Web Calculator',
      projectOneShort: 'Logic, basic operations, testing, linting and Storybook.',
      projectTwoType: 'Website Type',
      projectTwoTitle: 'Movie Rating',
      projectTwoShort: 'Responsive design and visual presentation.',
      projectThreeType: 'Database Type',
      projectThreeTitle: 'Management System',
      projectThreeShort: 'Data organization and administrative interface.',
      projectFourType: 'Game Type',
      projectFourTitle: 'Snake',
      projectFourShort: 'Recreation of the classic Snake game.',
      projectFiveType: 'Game Type',
      projectFiveTitle: 'Galaga',
      projectFiveShort: 'Galaga built in C++ using threads.'
    },

    skillsPage: {
      title: 'SKILL BADGES',
      badge: 'GYM BADGES',
      heading: 'My technical badges',
      intro:
        'Each badge represents a skill I have developed through my projects. The goal is to show my stack in a visual, clear way connected to the portfolio theme.',
      htmlDesc:
        'Semantic structure, content organization and solid foundations for websites.',
      cssDesc:
        'Responsive design, custom styles, layouts and visual interface construction.',
      jsDesc:
        'Interactivity, DOM manipulation, events, logic and dynamic functionality.',
      reactDesc:
        'Components, state, hooks and reusable interface construction.',
      dbDesc:
        'Queries, relationships, joins, triggers and database information management.',
      toolsTitle: 'Tools',
      toolsDesc:
        'GitHub, Docker, testing, linting and workflow organization.',
      pythonDesc:
        'Programming, logic, automation and problem solving with clear code.',
      javaDesc:
        'Object-oriented programming, data structures and application development.',
      blenderDesc:
        '3D modeling, visual composition and creation of graphic assets for projects.',
      kotlinDesc:
        'Mobile development, application logic and foundations for creating Android interfaces.',
      cppDesc:
        'Structured programming, logic handling, memory, threads and game development.',
      levelHigh: 'High level',
      levelMedium: 'Medium level',
      levelGrowing: 'Growing'
    },

  },

  de: {
    site: {
      portfolioTitle: 'DIGITALES PORTFOLIO',
      ownerName: 'Chon',
      role: 'Webentwickler',
      back: 'Zurück',
      region: 'Region:',
      type: 'Typ:',
      guatemala: 'Guatemala',
      frontendWeb: 'Frontend / Web'
    },

    menu: {
      title: 'HAUPTMENÜ',
      subtitle: 'Wähle einen Abschnitt',
      trainerCard: 'über mich',
      trainerCardDesc: 'Persönliche Informationen und berufliches Profil.',
      projects: 'Projekte',
      projectsDesc: 'Entwicklungsarbeiten und Projekterfahrungen.',
      skills: 'Fähigkeiten',
      skillsDesc: 'Technologien, Werkzeuge und Kenntnisse.',
      contact: 'Kontakt',
      contactDesc: 'Soziale Netzwerke, E-Mail und Kontaktmöglichkeiten.',
      aboutMe: 'Über mich',
      aboutMeDesc: 'Meine Geschichte, Interessen und beruflichen Ziele.',
      options: 'Optionen',
      optionsDesc: 'Einstellungen, visuelles Design und zusätzliche Details.'
    },

    trainer: {
      title: 'TRAINERKARTE',
      profileTitle: 'Profil',
      profileText:
        'Ich bin ein Webentwickler in Ausbildung und konzentriere mich darauf, klare, funktionale und visuell ansprechende Benutzeroberflächen zu erstellen. Dieses Portfolio präsentiert meine Informationen interaktiv, organisiert und mit einer besonderen visuellen Identität. Ich habe diese Ästhetik gewählt, weil Pokémon eines meiner Lieblingsvideospiele ist und mich geprägt hat.',
      goalTitle: 'Ziel',
      goalText:
        'Webprojekte erstellen, die gute Struktur, sauberen Code, responsives Design und eine klare Benutzererfahrung kombinieren.',
      teamTitle: 'Pokémon-Team'
    },

    projectOne: {
      type: 'Webseiten-Typ',
      title: 'Web-Rechner',
      description:
        'Rechner mit Fokus auf Grundoperationen, funktionalen Tests und Storybook-Stories.',
      technologiesTitle: 'Technologien',
      demonstratesTitle: 'Was es zeigt',
      demonstratesText:
        'Das Ziel dieses Projekts ist es, Konzepte rund um komponentenbasiertes Anwendungsdesign zu üben. Außerdem werden Testing, Linting und Storybook angewendet.',
      reflectionTitle: 'Reflexion',
      reflectionText:
        'Dieses Projekt hat mir geholfen zu verstehen, wie Testing, Linting und Storybook funktionieren. Meiner Meinung nach sind sie für große Projekte nützlich, weil sie helfen, Fehler zu erkennen und zu vermeiden, dass sich Probleme ansammeln.',
      repositoryButton: 'Repository'
    },

    projectTwo: {
      type: 'Webseiten-Typ',
      title: 'Film-Bewertung',
      description:
        'Eine Seite zum Bewerten von Filmen und zum Verwalten gesehener Serien und Filme.',
      technologiesTitle: 'Technologien',
      demonstratesTitle: 'Was es zeigt',
      demonstratesText:
        'Das Ziel dieses Projekts ist es, als Full-Stack-Entwickler zu arbeiten und Erfahrung sowohl im Frontend als auch im Backend zu sammeln.',
      reflectionTitle: 'Reflexion',
      reflectionText:
        'Dieses Projekt hat mir geholfen, Erfahrungen als Frontend- und Backend-Entwickler zu sammeln. Aus beiden Perspektiven war die Arbeit angenehm, und ich finde es wertvoll, weil ich mich nicht nur auf einen Bereich beschränken muss.',
      frontendRepositoryButton: 'Frontend-Repository',
      backendRepositoryButton: 'Backend-Repository'
    },

    projectThree: {
      type: 'Datenbank-Typ',
      title: 'Verwaltungssystem',
      description:
        'Ein Verwaltungssystem für ein Geschäft, bei dem Datenbankkenntnisse praktisch angewendet werden.',
      technologiesTitle: 'Technologien',
      demonstratesTitle: 'Was es zeigt',
      demonstratesText:
        'Das Projekt zeigt den Umgang mit Datenbanken durch Trigger, Joins und Select-Abfragen. Außerdem integriert es ein Backend mit Node.js/Express und ein Frontend mit React + Vite. Alles befindet sich in einem Docker-Container, um das Projekt zu starten.',
      reflectionTitle: 'Reflexion',
      reflectionText:
        'Dieses Projekt war eine Herausforderung für mich, weil es mein Wissen über Datenbankverwaltung, Abfragen und Datensicherheit auf die Probe gestellt hat.',
      repositoryButton: 'Repository'
    },

    projectFour: {
      type: 'Spiel-Typ',
      title: 'Snake',
      description:
        'Eine Nachbildung des klassischen Snake-Spiels.',
      technologiesTitle: 'Technologien',
      demonstratesTitle: 'Was es zeigt',
      demonstratesText:
        'Das Projekt zeigt die Verwendung von React über ein CDN zusammen mit Babel über ein CDN, um das Snake-Spiel mithilfe von Komponenten zu erstellen.',
      reflectionTitle: 'Reflexion',
      reflectionText:
        'Dieses Projekt hat Spaß gemacht, weil ich sehen konnte, welche vielfältigen Möglichkeiten mit useEffect und useState umgesetzt werden können.',
      repositoryButton: 'Repository'
    },
    
    projectFive: {
      type: 'Spiel-Typ',
      title: 'Galaga',
      description:
        'Galaga programmiert in C++ mit Threads.',
      technologiesTitle: 'Technologien',
      demonstratesTitle: 'Was es zeigt',
      demonstratesText:
        'Das Projekt zeigt die Verwendung von Threads, weil das Spiel dadurch Prozesse parallel ausführen kann, während die Partie aktiv ist. Anstatt dass alles in einer einzigen blockierenden Sequenz passiert, kann das Programm die Hauptlogik des Spiels weiter ausführen und gleichzeitig andere Aktionen steuern, wie die Aktualisierung der Umgebung oder das interne Verhalten des Spiels.',
      reflectionTitle: 'Reflexion',
      reflectionText:
        'Dieses Projekt war interessant, weil ich experimentieren konnte, wie man mit Threads arbeitet, und dabei ein besseres Verhalten im Spiel im Vergleich zu normalem sequenziellem Code beobachten konnte.',
      repositoryButton: 'Repository'
    },

    projectsPage: {
      title: 'PROJEKTE',
      projectOneType: 'Webseiten-Typ',
      projectOneTitle: 'Web-Rechner',
      projectOneShort: 'Logik, Grundoperationen, Testing, Linting und Storybook.',
      projectTwoType: 'Webseiten-Typ',
      projectTwoTitle: 'Film-Bewertung',
      projectTwoShort: 'Responsives Design und visuelle Präsentation.',
      projectThreeType: 'Datenbank-Typ',
      projectThreeTitle: 'Verwaltungssystem',
      projectThreeShort: 'Datenorganisation und administrative Benutzeroberfläche.',
      projectFourType: 'Spiel-Typ',
      projectFourTitle: 'Snake',
      projectFourShort: 'Nachbildung des klassischen Snake-Spiels.',
      projectFiveType: 'Spiel-Typ',
      projectFiveTitle: 'Galaga',
      projectFiveShort: 'Galaga in C++ mit Threads entwickelt.'
    },

    skillsPage: {
      title: 'FÄHIGKEITSABZEICHEN',
      badge: 'GYM BADGES',
      heading: 'Meine technischen Abzeichen',
      intro:
        'Jedes Abzeichen steht für eine Fähigkeit, die ich durch meine Projekte entwickelt habe. Ziel ist es, meinen Stack visuell, klar und passend zur Portfolio-Thematik zu zeigen.',
      htmlDesc:
        'Semantische Struktur, Inhaltsorganisation und solide Grundlagen für Webseiten.',
      cssDesc:
        'Responsives Design, individuelle Stile, Layouts und visuelle Gestaltung von Benutzeroberflächen.',
      jsDesc:
        'Interaktivität, DOM-Manipulation, Events, Logik und dynamische Funktionen.',
      reactDesc:
        'Komponenten, State, Hooks und Aufbau wiederverwendbarer Benutzeroberflächen.',
      dbDesc:
        'Abfragen, Beziehungen, Joins, Trigger und Verwaltung von Informationen in Datenbanken.',
      toolsTitle: 'Werkzeuge',
      toolsDesc:
        'GitHub, Docker, Testing, Linting und Organisation des Arbeitsablaufs.',
      pythonDesc:
        'Programmierung, Logik, Automatisierung und Problemlösung mit klarem Code.',
      javaDesc:
        'Objektorientierte Programmierung, Datenstrukturen und Anwendungsentwicklung.',
      blenderDesc:
        '3D-Modellierung, visuelle Komposition und Erstellung grafischer Ressourcen für Projekte.',
      kotlinDesc:
        'Mobile Entwicklung, Anwendungslogik und Grundlagen zur Erstellung von Android-Oberflächen.',
      cppDesc:
        'Strukturierte Programmierung, Logik, Speicherverwaltung, Threads und Spieleentwicklung.',
      levelHigh: 'Hohes Niveau',
      levelMedium: 'Mittleres Niveau',
      levelGrowing: 'Im Wachstum'
    },

  },

  zh: {
    site: {
      portfolioTitle: '数字作品集',
      ownerName: 'Chon',
      role: '网页开发者',
      back: '返回',
      region: '地区：',
      type: '类型：',
      guatemala: '危地马拉',
      frontendWeb: '前端 / 网页'
    },

    menu: {
      title: '主菜单',
      subtitle: '选择一个部分',
      trainerCard: '关于我',
      trainerCardDesc: '个人信息和职业简介。',
      projects: '项目',
      projectsDesc: '开发作品和项目经验。',
      skills: '技能',
      skillsDesc: '技术、工具和知识。',
      contact: '联系',
      contactDesc: '社交链接、电子邮件和联系方式。',
      aboutMe: '关于我',
      aboutMeDesc: '我的经历、兴趣和职业目标。',
      options: '选项',
      optionsDesc: '偏好设置、视觉主题和其他细节。'
    },

    trainer: {
      title: '训练师卡',
      profileTitle: '个人简介',
      profileText:
        '我是一名正在学习中的网页开发者，专注于创建清晰、实用并且具有视觉吸引力的界面。这个作品集以互动、有组织并且具有独特视觉风格的方式展示我的信息。我选择这种美术风格，是因为 Pokémon 是我最喜欢的电子游戏之一，也对我的人生产生了重要影响。',
      goalTitle: '目标',
      goalText:
        '创建结合良好结构、整洁代码、响应式设计和清晰用户体验的网页项目。',
      teamTitle: '宝可梦队伍'
    },

    projectOne: {
      type: '网页类型',
      title: '网页计算器',
      description:
        '一个专注于基本运算的计算器项目，并包含可用的测试和 Storybook。',
      technologiesTitle: '技术',
      demonstratesTitle: '展示内容',
      demonstratesText:
        '这个项目的目标是练习基于组件的应用程序设计概念，同时应用测试、代码规范检查和 Storybook。',
      reflectionTitle: '反思',
      reflectionText:
        '这个项目帮助我理解测试、代码规范检查和 Storybook 的工作方式。在我看来，它们对大型项目很有用，因为可以检查错误并避免问题不断累积。',
      repositoryButton: '代码仓库'
    },
    
    projectTwo: {
      type: '网页类型',
      title: '电影评分',
      description:
        '一个用于给电影评分，并记录已观看电影和电视剧的页面。',
      technologiesTitle: '技术',
      demonstratesTitle: '展示内容',
      demonstratesText:
        '这个项目的目标是以全栈开发者的方式工作，并获得前端和后端开发的经验。',
      reflectionTitle: '反思',
      reflectionText:
        '这个项目帮助我体验了前端和后端开发。从两个角度进行开发都很有意思，我认为这很有价值，因为我不需要只局限在一个领域。',
      frontendRepositoryButton: '前端代码仓库',
      backendRepositoryButton: '后端代码仓库'
    },
    
    projectThree: {
      type: '数据库类型',
      title: '管理系统',
      description:
        '一个用于商店的管理系统，用来实践数据库相关知识。',
      technologiesTitle: '技术',
      demonstratesTitle: '展示内容',
      demonstratesText:
        '这个项目展示了数据库管理能力，包括触发器、连接查询和 select 查询。它还集成了 Node.js/Express 后端和使用 React + Vite 构建的前端。整个项目都放在 Docker 容器中运行。',
      reflectionTitle: '反思',
      reflectionText:
        '这个项目对我来说是一个挑战，因为它考验了我在数据库管理、查询和数据安全方面的知识。',
      repositoryButton: '代码仓库'
    },

    projectFour: {
      type: '游戏类型',
      title: '贪吃蛇',
      description:
        '经典贪吃蛇游戏的重新制作。',
      technologiesTitle: '技术',
      demonstratesTitle: '展示内容',
      demonstratesText:
        '这个项目展示了如何通过 CDN 使用 React，并结合通过 CDN 使用 Babel，以组件的方式制作贪吃蛇游戏。',
      reflectionTitle: '反思',
      reflectionText:
        '这个项目很有趣，因为它让我看到了使用 useEffect 和 useState 可以实现很多不同的功能。',
      repositoryButton: '代码仓库'
    },

    projectFive: {
      type: '游戏类型',
      title: 'Galaga',
      description:
        '使用 C++ 和线程编写的 Galaga 游戏。',
      technologiesTitle: '技术',
      demonstratesTitle: '展示内容',
      demonstratesText:
        '这个项目展示了线程的使用，因为它允许游戏在运行时并行执行多个过程。程序不需要所有内容都按照单一的阻塞顺序执行，而是可以在保持游戏主要逻辑运行的同时，控制其他操作，例如环境更新或游戏内部行为。',
      reflectionTitle: '反思',
      reflectionText:
        '这个项目很有意思，因为我实验了线程的工作方式，并且观察到与普通顺序代码相比，游戏表现更加流畅。',
      repositoryButton: '代码仓库'
    },

    projectsPage: {
      title: '项目',
      projectOneType: '网页类型',
      projectOneTitle: '网页计算器',
      projectOneShort: '逻辑、基本运算、测试、代码规范检查和 Storybook。',
      projectTwoType: '网页类型',
      projectTwoTitle: '电影评分',
      projectTwoShort: '响应式设计和视觉展示。',
      projectThreeType: '数据库类型',
      projectThreeTitle: '管理系统',
      projectThreeShort: '数据组织和管理界面。',
      projectFourType: '游戏类型',
      projectFourTitle: '贪吃蛇',
      projectFourShort: '经典贪吃蛇游戏的重新制作。',
      projectFiveType: '游戏类型',
      projectFiveTitle: 'Galaga',
      projectFiveShort: '使用 C++ 和线程开发的 Galaga。'
    },

    skillsPage: {
      title: '技能徽章',
      badge: '道馆徽章',
      heading: '我的技术徽章',
      intro:
        '每个徽章代表我在项目中培养的一项技能。目标是以清晰、直观并符合作品集主题的方式展示我的技术栈。',
      htmlDesc:
        '语义化结构、内容组织以及网站开发的坚实基础。',
      cssDesc:
        '响应式设计、自定义样式、布局以及界面视觉构建。',
      jsDesc:
        '交互性、DOM 操作、事件处理、逻辑和动态功能。',
      reactDesc:
        '组件、状态、Hooks 以及可复用界面的构建。',
      dbDesc:
        '查询、关系、连接、触发器以及数据库信息管理。',
      toolsTitle: '工具',
      toolsDesc:
        'GitHub、Docker、测试、代码规范检查以及工作流程组织。',
      pythonDesc:
        '编程、逻辑、自动化以及使用清晰代码解决问题。',
      javaDesc:
        '面向对象编程、数据结构和应用程序开发。',
      blenderDesc:
        '3D 建模、视觉构图以及为项目创建图形资源。',
      kotlinDesc:
        '移动开发、应用逻辑以及创建 Android 界面的基础。',
      cppDesc:
        '结构化编程、逻辑处理、内存、线程和游戏开发。',
      levelHigh: '高级',
      levelMedium: '中级',
      levelGrowing: '成长中'
    }

  }
}
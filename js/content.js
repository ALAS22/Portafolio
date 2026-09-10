/* ============================================================
   CONTENT.JS
   ============================================================ */

const CONTENT = {
  es: {
    meta: {
      title: "Ariana Alvarez Saldaña — Portafolio",
    },
    person: {
      name: "¡Hola! Soy Ariana.",
      role: "Estudiante en Ingeniería en Computación",
    },
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      personal: "Contacto",
      schedule: "Horario escolar",
      cv: "Curriculum vitae",
    },
    home: {
      eyebrow: "Bienvenido a mi portafolio",
      lead: "Soy estudiante de Ingeniería en Computación, apasionada por el desarrollo de software, el diseño de sistemas y el aprendizaje continuo. Aquí puedes conocer más sobre mi trayectoria, mi horario escolar, mi CV y mis datos de contacto.",
      cards: [
        {
          title: "Sobre mí",
          text: "Quién soy, qué me interesa y hacia dónde voy.",
        },
        {
          title: "Información personal",
          text: "Mis datos de contacto y perfiles profesionales.",
        },
        {
          title: "Horario escolar",
          text: "Mi calendario de clases del semestre actual.",
        },
        {
          title: "Curriculum vitae",
          text: "Formación, experiencia y habilidades.",
        },
      ],
    },
    about: {
      heading: "Sobre mí",
      intro:
        "Soy estudiante de Ingeniería en Computación con interés particular en el desarrollo web, las bases de datos y la inteligencia artificial. Me gusta resolver problemas complejos a través del código y disfruto trabajar en equipo en proyectos que generan un impacto real.",
      paragraphs: [
        "Desde que comencé la carrera, he participado en distintos proyectos académicos que me han permitido fortalecer mis habilidades de programación, análisis de datos y trabajo colaborativo.",
        "Fuera del clases, me interesa el diseño de interfaces, la musica y seguir de cerca las tendencias en tecnología. Creo firmemente en el aprendizaje continuo y en compartir lo que aprendo con otras personas.",
      ],
      interestsTitle: "Intereses",
      interests: [
        "Desarrollo web",
        "Inteligencia artificial",
        "Bases de datos",
        "Diseño UI/UX",
        "Fotografía",
      ],
    },
    personal: {
      heading: "Contacto",
      items: [
        { icon: "mail", label: "Gmail", value: "alva.sdn21@gmail.com" },
        { icon: "github", label: "Github", value: "github.com/ALAS22" },
        { icon: "phone", label: "Telefono", value: "(+52) 5547164320" },
        { icon: "linkedin", label: "Linkedin", value: "linkedin.com/in/alvarezsaldanaariana/" },
      ],
    },
    schedule: {
      heading: "Horario escolar",
      subheading: "Semestre en curso",
      days: ["Hora", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
      rows: [
        ["7 AM – 9 AM", "Análisis de Textos Inteligentes", "", "", "Lab. Redes de datos seguras", "", ""],
        ["9 AM – 11 AM", "Servicio Social", "Lab. Organización y arquitectura de computadoras", "Servicio Social", "", "Servicio Social", "Organización y arquitectura de computadoras"],
        ["11 AM – 1 PM", "Servicio Social", "Servicio Social", "Servicio Social", "Servicio Social", "Servicio Social", "Organización y arquitectura de computadoras"],
        ["1 PM – 3 PM", "Servicio Social", "Servicio Social", "Servicio Social", "Servicio Social", "Servicio Social", ""],
        ["3 PM – 5 PM", "", "Servicio Social", "", "Servicio Social", "", ""],
        ["5 PM – 7 PM", "Fundamentos de Sistemas Embebidos", "", "Fundamentos de Sistemas Embebidos", "", "Fundamentos de Sistemas Embebidos", ""],
        ["7 PM – 9 PM", "Redes de datos seguras", "Redes de datos seguras", "", "", "", ""],
      ],
      note: "* Edita el horario en el archivo content.js con tus materias reales.",
    },
    cv: {
      pageTitle: "Mi curriculum",
      fields: [
        { label: "Nombre", value: "Ariana Lizeth Alvarez Saldaña" },
        { label: "Edad", value: "28 años" },
        { label: "Email", value: "alva.sdn21@gmail.com" },
        { label: "GitHub", value: "https://github.com/ALAS22" },
        { label: "Numero movil", value: "(+52) 5547164320" },
        { label: "Especialidad", value: "Frontend Developer" },
      ],
      downloadLabel: "Descargar CV",
      downloadUrl: "https://drive.google.com/uc?export=download&id=1T0S5LlnGj_TW4bJ-6wCBKDjTY2Zf7Ote",
    },
    footer: "Hecho con HTML, CSS y JavaScript.",
    langToggle: "EN",
  },

  en: {
    meta: {
      title: "Ariana Alvarez Saldaña — Portfolio",
    },
    person: {
      name: "Hi, I'm Ariana",
      role: "Computer Engineering Student",
    },
    nav: {
      home: "Home",
      about: "About me",
      personal: "Contact",
      schedule: "School schedule",
      cv: "Curriculum vitae",
    },
    home: {
      eyebrow: "Welcome to my portfolio",
      lead: "I'm a Computer Engineering student, passionate about software development, systems design, and continuous learning. Here you can learn more about my background, my school schedule, my CV, and my contact details.",
      cards: [
        {
          title: "About me",
          text: "Who I am, what interests me, and where I'm headed.",
        },
        {
          title: "Personal info",
          text: "My contact details and professional profiles.",
        },
        {
          title: "School schedule",
          text: "My class calendar for the current semester.",
        },
        {
          title: "Curriculum vitae",
          text: "Education, experience, and skills.",
        },
      ],
    },
    about: {
      heading: "About me",
      intro:
        "I'm a Computer Engineering student with a particular interest in web development, databases, and artificial intelligence. I enjoy solving complex problems through code and working in teams on projects that create real impact.",
      paragraphs: [
        "Since starting my degree, I've taken part in several academic projects that have helped me strengthen my programming, data analysis, and teamwork skills.",
        "Outside the classroom, I'm interested in interface design, music, and keeping up with technology trends. I strongly believe in continuous learning and sharing what I learn with others.",
      ],
      interestsTitle: "Interests",
      interests: [
        "Web development",
        "Artificial intelligence",
        "Databases",
        "UI/UX design",
        "Photography",
      ],
    },
    personal: {
      heading: "Contact",
      items: [
        { icon: "mail", label: "Gmail", value: "alva.sdn21@gmail.com" },
        { icon: "github", label: "Github", value: "github.com/ALAS22" },
        { icon: "phone", label: "Phone", value: "(+52) 5547164320" },
        { icon: "linkedin", label: "Linkedin", value: "linkedin.com/in/alvarezsaldanaariana/" },
      ],
    },
    schedule: {
      heading: "School schedule",
      subheading: "Current semester",
      days: ["Time", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      rows: [
        ["7 AM – 9 AM", "Intelligent Text Analysis", "", "", "Secure Data Networks Lab", "", ""],
        ["9 AM – 11 AM", "Social Service", "Computer Organization & Architecture Lab", "Social Service", "", "Social Service", "Computer Organization & Architecture"],
        ["11 AM – 1 PM", "Social Service", "Social Service", "Social Service", "Social Service", "Social Service", "Computer Organization & Architecture"],
        ["1 PM – 3 PM", "Social Service", "Social Service", "Social Service", "Social Service", "Social Service", ""],
        ["3 PM – 5 PM", "", "Social Service", "", "Social Service", "", ""],
        ["5 PM – 7 PM", "Embedded Systems Fundamentals", "", "Embedded Systems Fundamentals", "", "Embedded Systems Fundamentals", ""],
        ["7 PM – 9 PM", "Secure Data Networks", "Secure Data Networks", "", "", "", ""],
      ],
      note: "* Edit your schedule in content.js with your real courses.",
    },
    cv: {
      pageTitle: "My résumé",
      fields: [
        { label: "Name", value: "Ariana Lizeth Alvarez Saldaña" },
        { label: "Age", value: "28 years old" },
        { label: "Email", value: "alva.sdn21@gmail.com" },
        { label: "GitHub", value: "https://github.com/ALAS22" },
        { label: "Phone number", value: "(+52) 5547164320" },
        { label: "Specialty", value: "Frontend Developer" },
      ],
      downloadLabel: "Download CV",
      downloadUrl: "https://drive.google.com/uc?export=download&id=1T0S5LlnGj_TW4bJ-6wCBKDjTY2Zf7Ote",
    },
    footer: "Made with HTML, CSS, and JavaScript.",
    langToggle: "ES",
  },
};
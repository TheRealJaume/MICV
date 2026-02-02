export const cv = {
  name: "Jaume Fabregat Marqués",
  headline: "Product Owner & AI / Backend Engineer con experiencia liderando productos digitales basados en Inteligencia Artificial.",
  summary:
    "Ingeniero electrónico entusiasta con una fuerte voluntad de contribuir al éxito del equipo mediante trabajo riguroso, atención al detalle y excelentes habilidades organizativas. Apasionado por la Inteligencia Artificial, el desarrollo de software y la intersección entre negocio y tecnología. Motivado por aprender, crecer y generar impacto real mediante soluciones innovadoras.",
  contact: {
    email: "jaume.fabregat.work@gmail.com",
    phone: "+34 649 072 492",
    linkedin: "https://www.linkedin.com/in/jaume-fabregat-marques-04692517b/"
  },
  languages: [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "Avanzado" },
    { name: "Catalán", level: "Básico" }
  ],
  experience: [
    {
      role: "Computer Vision Developer",
      company: "Philotech Ibérica",
      period: "2019",
      highlights: [
        "Desarrollo de una aplicación de check-in interno utilizando algoritmos de Computer Vision.",
        "Implementación de modelos de redes neuronales para análisis visual.",
        "Stack técnico: TensorFlow, Pandas, NumPy, SciPy, Matplotlib.",
        "Desarrollo completo siguiendo metodología Scrum."
      ]
    },
    {
      role: "Project Manager & Backend Developer",
      company: "Monk",
      period: "2019 a 2023",
      highlights: [
        "Desarrollo de una plataforma para individualizar la enseñanza de matemáticas en colegios.",
        "Diseño e implementación de un algoritmo TRI que ajusta dinámicamente preguntas según el perfil del estudiante.",
        "Stack técnico: Django (Python), SQL (MariaDB), React (JavaScript), Shiny (R).",
        "Uso de herramientas de gestión: GitHub, Jira, Trello.",
        "Gestión integral del proyecto bajo metodología Scrum."
      ]
    },
    {
      role: "Project Manager",
      company: "Ninja Talent",
      period: "2023 a 2024",
      highlights: [
        "Desarrollo de una aplicación para evaluar talento tecnológico en distintos lenguajes y frameworks.",
        "Gestión de producto y coordinación de equipos técnicos.",
        "Stack: Django (Python), SQL (MariaDB), React.",
        "Formación en dirección de startups en programas de aceleración: La Nave (Comunidad de Madrid) y Wayra (Telefónica)."
      ]
    },
    {
      role: "Product Owner",
      company: "Waimatech",
      period: "2024 a 2025",
      highlights: [
        "Liderazgo completo del ciclo de vida de productos digitales (BoostWorker, BookTheCity, NinjaTalent).",
        "Gestión de requerimientos, roadmap y releases alineados con negocio y usuario.",
        "Priorización del Product Backlog con metodologías ágiles (Scrum / Kanban).",
        "Coordinación transversal con desarrollo, diseño, QA, marketing, comercial y stakeholders.",
        "Puente constante entre negocio y tecnología."
      ]
    }
  ],
  projects: [
    {
      name: "MathKeyboard",
      period: "2017–2022",
      description: "Teclado matemático para simplificar la escritura de expresiones matemáticas.",
      highlights: ["Diseño de hardware con SolidEdge.", "Programación en Arduino."]
    },
    {
      name: "Aplicaciones de IA Educativa",
      period: "",
      description: "Algoritmos de predicción y recomendación de ejercicios matemáticos.",
      highlights: ["Uso intensivo de TensorFlow, Pandas, NumPy, SciPy, Matplotlib."]
    },
    {
      name: "YPM — Your Project Manager",
      period: "2024–2025",
      description:
        "Plataforma de gestión de proyectos con Inteligencia Artificial para acelerar la ejecución y la planificación.",
      highlights: [
        "Importación de requerimientos desde PDF.",
        "Generación automática de user stories y tareas.",
        "Estimación y asignación basada en RAG e históricos.",
        "Organización en sprints.",
        "Stack: Django, React, LangChain, Qdrant."
      ]
    },
    {
      name: "Viajame",
      period: "2024–2025",
      description: "Aplicación de organización de viajes con IA.",
      highlights: [
        "Generación automática de planes de viaje.",
        "Importación de preferencias vía WhatsApp.",
        "Uso de n8n, APIs de Google y WhatsApp."
      ]
    }
  ],
  skills: {
    technical: [
      "Python",
      "Django",
      "React",
      "SQL / Diseño de BBDD",
      "Inteligencia Artificial y Deep Learning",
      "TensorFlow",
      "Pandas",
      "NumPy",
      "SciPy",
      "Matplotlib",
      "Arquitecturas RAG",
      "LangChain",
      "Qdrant",
      "n8n"
    ],
    product: [
      "Product Ownership",
      "Project Management",
      "Scrum / Kanban",
      "Gestión de backlog y roadmap",
      "Jira",
      "Trello",
      "GitHub",
      "Coordinación de equipos multidisciplinares"
    ]
  },
  education: [
    {
      title: "Ingeniería Electrónica Industrial y Automática",
      institution: "Universidad Carlos III de Madrid",
      period: "2015–2020",
      notes: "Erasmus: Aalto University (Helsinki, Finlandia)"
    },
    {
      title: "Artificial Intelligence + Business Management",
      institution: "MBIT School",
      period: "2018–2019",
      notes: ""
    },
    {
      title: "Deep Learning",
      institution: "MBIT School",
      period: "2021–2022",
      notes: ""
    }
  ]
};

export type CV = typeof cv;

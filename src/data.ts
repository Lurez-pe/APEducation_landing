import { Program, Testimonial, FaqItem, MethodPhase, Announcement } from './types';

export const PROGRAMS: Program[] = [
  {
    id: 'matematica',
    title: 'Matemática Comprensiva',
    subtitle: 'Lógica Pura & Razonamiento Deductivo',
    tag: 'Lógica Pura',
    color: 'magenta',
    icon: 'Calculator',
    description: 'Aprende a amar los números comprendiendo su lógica profunda. Enfoque deductivo y práctico para superar miedos y dominar la resolución de retos complejos sin memorización mecánica.',
    highlights: [
      'Razonamiento lógico y deductivo aplicado a situaciones reales',
      'Álgebra, geometría interactiva y visualización espacial',
      'Preparación para olimpiadas escolares y nivelación académica'
    ],
    duration: 'Ciclos trimestrales (2 clases/semana)',
    ageRange: '7 a 17 años (por niveles)',
    level: 'Inicial a Avanzado',
    project: 'Resolución de problemas de ingeniería simplificados y feria de desafíos numéricos.',
    modules: [
      { week: 'Módulo 1', title: 'Aritmética Intuitiva y Sentido Numérico', description: 'Comprensión conceptual de operaciones, patrones y secuencias lógicas sin fórmulas rígidas.' },
      { week: 'Módulo 2', title: 'Álgebra Visual y Modelado', description: 'De lo concreto a lo abstracto: ecuaciones como balanzas y relaciones funcionales del entorno.' },
      { week: 'Módulo 3', title: 'Geometría y Visualización Espacial', description: 'Exploración con figuras 2D/3D, cálculo intuitivo de áreas, volúmenes y teselados.' },
      { week: 'Módulo 4', title: 'Estrategias de Resolución de Problemas', description: 'Heurísticas de Pólya, deducción reversa, diagramas de árbol y preparación de retos.' }
    ]
  },
  {
    id: 'comunicacion',
    title: 'Comunicación Efectiva & Oratoria',
    subtitle: 'Expresión, Redacción y Presencia Escénica',
    tag: 'Expresión & Poder',
    color: 'purple',
    icon: 'Mic',
    description: 'Comprensión lectora profunda, redacción estructurada y oratoria con seguridad. Enseña a defender ideas, argumentar con fundamentos sólidos y transmitir proyectos con solvencia.',
    highlights: [
      'Comprensión crítica de textos informativos y científicos',
      'Técnicas de oratoria, modulación de voz y argumentación oral',
      'Redacción estructurada: ensayos, proyectos y narrativa creativa'
    ],
    duration: 'Ciclos trimestrales (2 clases/semana)',
    ageRange: '8 a 17 años',
    level: 'Inicial a Avanzado',
    project: 'Discurso TED juvenil y presentación oral de proyecto ante jurado de mentores.',
    modules: [
      { week: 'Módulo 1', title: 'Lectura Crítica y Análisis de Perspectivas', description: 'Identificación de sesgos, inferencias, premisas y síntesis de ideas complejas.' },
      { week: 'Módulo 2', title: 'Estructura Argumentativa y Ensayos', description: 'Organización de ideas lógicas con conectores, introducción persuasiva y conclusiones contundentes.' },
      { week: 'Módulo 3', title: 'Lenguaje Corporal y Modulación Vocal', description: 'Control de nervios, contacto visual, dicción, pausas intencionadas y ritmo comunicativo.' },
      { week: 'Módulo 4', title: 'Debate Guiado y Presentación de Proyectos', description: 'Mesa redonda, refutación respetuosa y exposición pública de proyectos de impacto.' }
    ]
  },
  {
    id: 'diseno-3d',
    title: 'Diseño y Modelado 3D',
    subtitle: 'Visión Espacial y Prototipado Digital',
    tag: 'Visión Espacial',
    color: 'teal',
    icon: 'Box',
    description: 'Desarrollo de visión tridimensional, modelado de piezas, arquitectura virtual y prototipado digital. De la imaginación a la geometría espacial con herramientas profesionales adaptadas.',
    highlights: [
      'Software de modelado amigable, paramétrico e intuitivo',
      'Principios de manufactura digital y preparación para impresión 3D',
      'Creación de avatares, edificaciones futuristas y mecanismos funcionales'
    ],
    duration: 'Ciclos trimestrales (2 clases/semana)',
    ageRange: '9 a 17 años',
    level: 'Básico a Intermedio',
    project: 'Modelado y exportación de un prototipo 3D listo para impresión o entorno virtual.',
    modules: [
      { week: 'Módulo 1', title: 'Fundamentos del Espacio Tridimensional', description: 'Ejes X, Y, Z, transformaciones geométricas, adición y sustracción de volúmenes primarios.' },
      { week: 'Módulo 2', title: 'Modelado Paramétrico y Medidas de Precisión', description: 'Creación de piezas encajables con tolerancias mecánicas y calibración dimensional.' },
      { week: 'Módulo 3', title: 'Texturizado, Materiales e Iluminación', description: 'Aplicación de acabados realistas, simulación de metales, plásticos y renderizado estético.' },
      { week: 'Módulo 4', title: 'Preparación para Impresión 3D', description: 'Generación de archivos STL/OBJ, cálculo de soportes y optimización de filamento.' }
    ]
  },
  {
    id: 'programacion',
    title: 'Programación & Código Creativo',
    subtitle: 'Lógica Algorítmica y Creación de Software',
    tag: 'Pensamiento Computacional',
    color: 'amber',
    icon: 'Terminal',
    description: 'Creación de videojuegos, lógica algorítmica y bases en lenguajes como Python y JavaScript aplicadas en proyectos reales que cautivan y empoderan a los jóvenes.',
    highlights: [
      'Transición suave de bloques lógicos a código textual limpio',
      'Desarrollo de videojuegos interactivos jugables desde cero',
      'Autonomía en resolución de bugs y pensamiento algorítmico'
    ],
    duration: 'Ciclos trimestrales (2 clases/semana)',
    ageRange: '8 a 17 años',
    level: 'Inicial a Avanzado',
    project: 'Lanzamiento de un videojuego interactivo con física 2D o aplicación web propia.',
    modules: [
      { week: 'Módulo 1', title: 'Lógica Computacional y Diagramas de Flujo', description: 'Variables, condicionales (if/else), bucles (loops) y descomposicion de problemas.' },
      { week: 'Módulo 2', title: 'Estructuras de Datos y Funciones Modulares', description: 'Listas, diccionarios, reutilización de código y funciones con parámetros.' },
      { week: 'Módulo 3', title: 'Desarrollo de Mecánicas de Juego', description: 'Eventos de teclado/ratón, detección de colisiones, puntuaciones y estados de juego.' },
      { week: 'Módulo 4', title: 'Proyecto Final & Buenas Prácticas', description: 'Refactorización, control de versiones y despliegue del proyecto para compartir con amigos.' }
    ]
  },
  {
    id: 'ap-lab',
    title: 'AP LAB: Experiencia STEAM Total',
    subtitle: 'Laboratorio Interdisciplinario & Misiones de Innovación',
    tag: 'Laboratorio Interdisciplinario',
    color: 'purple',
    icon: 'Rocket',
    description: 'Talleres intensivos donde se unen ciencia, robótica virtual, matemáticas y arte. Los estudiantes resuelven misiones espaciales simuladas, construyen prototipos ecológicos y presentan sus descubrimientos en comunidad.',
    highlights: [
      'Retos interdisciplinarios inspirados en problemáticas globales reales',
      'Robótica virtual, sensores simulados e inteligencia artificial introductoria',
      'Construcción de un portafolio digital de proyectos innovadores'
    ],
    duration: 'Programa Intensivo / Talleres de fin de semana',
    ageRange: '10 a 17 años',
    level: 'Intermedio a Avanzado',
    project: 'Presentación comunitaria de un ecosistema tecnológico sustentable completo.',
    modules: [
      { week: 'Módulo 1', title: 'Misión Marte: Simulación de Hábitat Espacial', description: 'Integración de cálculo de recursos, sensores de oxígeno y modelado de cúpulas 3D.' },
      { week: 'Módulo 2', title: 'Robótica y Automatización Virtual', description: 'Programación de brazos robóticos y vehículos autónomos en simuladores de física.' },
      { week: 'Módulo 3', title: 'Ciencia de Datos y Bioingeniería Juvenil', description: 'Análisis de datos climáticos reales y visualización gráfica interactiva.' },
      { week: 'Módulo 4', title: 'Feria de Innovación Abierta', description: 'Lanzamiento público, documentación de ingeniería y validación con mentores invitados.' }
    ]
  }
];

export const METHOD_PHASES: MethodPhase[] = [
  {
    number: '01',
    title: 'Explorar',
    tag: 'Preguntas Intrigantes',
    description: 'Planteamiento de preguntas desafiantes, retos del mundo real y observación analítica de fenómenos de la vida cotidiana.',
    example: '¿Por qué los puentes usan triángulos y no cuadrados? ¿Cómo calcula un satélite su órbita?',
    iconName: 'Compass'
  },
  {
    number: '02',
    title: 'Comprender',
    tag: 'Fundamentos Vivos',
    description: 'Desglose de conceptos científicos y matemáticos. Conectamos la teoría formal con la intuición lógica natural del estudiante.',
    example: 'Desarmamos la fórmula matemática en bloques visuales comprensibles antes de resolver.',
    iconName: 'BookOpen'
  },
  {
    number: '03',
    title: 'Experimentar',
    tag: 'Laboratorio Seguro',
    description: 'Prueba y error sistemático en simuladores virtuales, líneas de código y prototipos digitales sin penalizar el fallo.',
    example: 'Alteramos variables en un simulador de física y observamos qué ocurre en tiempo real.',
    iconName: 'FlaskConical'
  },
  {
    number: '04',
    title: 'Crear',
    tag: 'Construcción Real',
    description: 'Materialización de soluciones: diseño de videojuegos propios, prototipos 3D y demostraciones de ingeniería funcionales.',
    example: 'El estudiante codifica su videojuego completo o diseña una pieza mecánica personalizada.',
    iconName: 'Code2'
  },
  {
    number: '05',
    title: 'Compartir',
    tag: 'Liderazgo & Voz',
    description: 'Exposición ante compañeros, mentores y familias. Retroalimentación constructiva para consolidar la autoestima comunicativa.',
    example: 'Cada alumno expone su solución en 3 minutos, respondiendo dudas de sus compañeros.',
    iconName: 'Share2'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Mariana Rivas',
    role: 'Madre de Mateo (5to de Primaria)',
    text: '"Mi hijo de 10 años le tenía pánico a las matemáticas en el colegio. Tras dos meses en AP Education, no solo subió sus notas a nivel destacado, sino que ahora me pide que le compre libros de acertijos lógicos. El cambio de mentalidad ha sido extraordinario."',
    rating: 5,
    initials: 'MR',
    avatarColor: 'bg-brand-magenta/20 text-brand-magenta'
  },
  {
    id: '2',
    name: 'Joaquín Silva (14 años)',
    role: 'Estudiante de Secundaria',
    text: '"Entré al taller de Programación y luego al AP LAB. Lo que más me gusta es que la profesora Azahalia nos deja crear nuestros propios proyectos sin presionarnos con exámenes tediosos. Desarrollé mi primer videojuego y lo presenté ante mis amigos."',
    rating: 5,
    initials: 'JS',
    avatarColor: 'bg-brand-purple/20 text-brand-purple dark:text-brand-teal'
  },
  {
    id: '3',
    name: 'Luis Gonzalo Paredes',
    role: 'Padre de Luciana (4to de Secundaria)',
    text: '"El acompañamiento de comunicación y oratoria transformó por completo la timidez de mi hija. Ahora expone con seguridad en el colegio, redacta ensayos coherentes y tiene metas claras para su futura carrera universitaria."',
    rating: 5,
    initials: 'LG',
    avatarColor: 'bg-brand-teal/20 text-brand-teal'
  },
  {
    id: '4',
    name: 'Dra. Carmen Salazar',
    role: 'Madre de Gabriel y Valentina',
    text: '"Buscaba un espacio donde mis hijos no solo recibieran clases, sino que aprendieran a pensar por sí mismos. En AP Education encontraron una comunidad cálida, rigurosa y con mentores apasionados por la ciencia."',
    rating: 5,
    initials: 'CS',
    avatarColor: 'bg-brand-amber/20 text-brand-amber'
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: '¿Cómo funcionan las clases online?',
    category: 'Metodología',
    answer: 'Nuestras clases son 100% en vivo a través de videoconferencias interactivas con pizarras digitales colaborativas, simuladores en tiempo real y retroalimentación personalizada constante. No son videos pregrabados pasivos: el estudiante conversa, consulta dudas y programa activamente durante cada sesión junto a su mentor.'
  },
  {
    id: 'faq-2',
    question: '¿A partir de qué edad pueden participar los estudiantes?',
    category: 'Admisión',
    answer: 'Recibimos estudiantes desde los 7 años en adelante. Contamos con programas diferenciados y graduados pedagógicamente: Primaria (7 a 11 años), Secundaria (12 a 17 años), Jóvenes preuniversitarios y talleres formativos especializados para docentes.'
  },
  {
    id: 'faq-3',
    question: '¿Cuál es el tamaño de los grupos de estudio?',
    category: 'Metodología',
    answer: 'Para garantizar la máxima calidad y personalización, nuestros grupos son reducidos, con un máximo de 6 a 8 alumnos por sala virtual. De esta forma, el docente mentor conoce a cada estudiante por su nombre, comprende su estilo de razonamiento y le brinda retroalimentación individual.'
  },
  {
    id: 'faq-4',
    question: '¿Qué requisitos técnicos necesito para empezar?',
    category: 'Técnico',
    answer: 'Solo necesitas una computadora de escritorio o laptop con conexión a internet estable, cámara y micrófono funcionales, y el navegador Google Chrome actualizado. No requieres comprar licencias costosas de software: trabajamos con plataformas educativas en la nube y herramientas de código abierto.'
  },
  {
    id: 'faq-5',
    question: '¿Cómo es el proceso de inscripción y cuáles son los métodos de pago?',
    category: 'Inscripción',
    answer: 'El proceso es muy ágil: completas el formulario de contacto o nos escribes directamente por WhatsApp al +51 951 847 956. Coordinamos una breve sesión de evaluación diagnóstica de intereses sin costo, confirmas tu horario y aseguras la vacante. Aceptamos transferencias bancarias, Yape/Plin (Perú) y medios digitales seguros.'
  }
];

export const ANNOUNCEMENTS: Announcement[] = [
  {
    id: 'acompañar-sin-perseguir',
    type: 'Gratuito',
    date: 'Próximamente',
    title: 'Taller Psicológico',
    description:
      'Claves para acompañar a nuestros hijos en el mundo digital.',
    meta: 'Cupos limitados · Inscripción previa',
    image: 'assets/anuncios/taller_interactua.jpeg',
    cta: {
      label: 'Inscribirme',
      href: 'https://forms.gle/TJvkRYHLy85gNVzy7',
    },
    featured: true,
  },
  {
    id: 'anuncio-equipo-nasa',
    type: 'Anuncio',
    date: 'Inscripciones cerradas',
    title: 'Anuncio del Equipo NASA',
    description:
      'Conoce a los participantes en los desafíos espaciales de la NASA Space Apps Challenge.',
    meta: 'Para estudiantes de 12 años a más',
    image: 'assets/anuncios/equipo_nasa.jpg',
  },
{
    id: 'convocatoria-equipo-nasa',
    type: 'Anuncio',
    date: 'Inscripciones abiertas',
    title: 'Comunidad Mentoras STEM',
    description:
      'Sumamos científicas y profesionales STEAM que inspiran, acompañan y abren camino a las nuevas generaciones en ciencia y tecnología.',
    meta: 'Voluntariado · Hora Perú',
    image: 'assets/anuncios/mentoras_stem.jpeg',
  }
];

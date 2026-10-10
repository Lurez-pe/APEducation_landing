import { Testimonial, FaqItem, MethodPhase, Announcement, HeroSlide, ProgramInfo, MathPackage } from './types';
import { WHATSAPP_DISPLAY } from './site';

export const PROGRAMS: ProgramInfo[] = [
  {
    key: 'ciclo-escolar',
    title: 'Ciclo Escolar',
    description:
      'Un programa de acompañamiento académico durante el año escolar para fortalecer conocimientos, desarrollar habilidades y aprender de manera activa a través de Matemática, Comunicación y experiencias STEAM.',
    tagline: 'Aprender durante todo el año.',
    image: 'assets/programas/ciclo_escolar.webp',
    route: '/programas/ciclo-escolar',
    tone: 'from-[#4705ED] to-[#00E19B]',
  },
  {
    key: 'clases-one-to-one',
    title: 'Clases One to One',
    description:
      'Clases personalizadas diseñadas según las necesidades, objetivos y ritmo de cada estudiante. Un acompañamiento cercano para reforzar, nivelar o profundizar sus aprendizajes.',
    tagline: 'Un aprendizaje a su medida.',
    image: 'assets/programas/one2one.webp',
    route: '/programas/clases-one-to-one',
    tone: 'from-[#FE007A] to-[#4705ED]',
  },
  {
    key: 'ciclo-de-verano-2027',
    title: 'Ciclo de Verano 2027',
    description:
      'Una experiencia para aprender, crear y divertirse durante las vacaciones. Actividades dinámicas que combinan aprendizaje, creatividad, tecnología y retos para comenzar el nuevo año con nuevas habilidades.',
    tagline: 'Vacaciones que también inspiran.',
    image: 'assets/programas/ciclo_verano.webp',
    route: '/programas/ciclo-de-verano-2027',
    tone: 'from-[#FFB600] to-[#FE007A]',
  },
  {
    key: 'conversation',
    title: 'Conversation Class',
    description:
      'Un espacio para practicar inglés de forma dinámica y natural, desarrollando fluidez, confianza y habilidades de comunicación a través de conversaciones, juegos y actividades.',
    tagline: 'Speak. Connect. Have fun.',
    image: 'assets/programas/conversation.webp',
    route: '/programas/conversation-class',
    tone: 'from-[#00E19B] to-[#4705ED]',
  },
];

export const MATH_PACKAGES: MathPackage[] = [
  {
    id: 'refuerzo-escolar',
    title: 'Refuerzo Escolar',
    audience: 'Estudiantes de primaria y secundaria',
    description:
      'Ideal para estudiantes que necesitan reforzar sus bases en Matemática y desarrollar una mejor comprensión de los temas escolares.',
    benefits: [
      'Fortalecer sus conocimientos.',
      'Mejorar su comprensión de los temas escolares.',
      'Ganar confianza en su aprendizaje.',
    ],
    tone: 'from-[#4705ED] to-[#00E19B]',
    symbol: '√x',
    image: 'assets/programas/refuerzo_escolar.png',
  },
  {
    id: 'adelanto-intermedio',
    title: 'Adelanto Intermedio Escolar',
    audience: 'Estudiantes de secundaria',
    description:
      'Diseñado para estudiantes que desean adelantarse a los temas del colegio y seguir avanzando en Matemática desde casa.',
    benefits: [
      'Explorar nuevos contenidos.',
      'Adelantarse a los temas del colegio.',
      'Prepararse para nuevos desafíos escolares.',
    ],
    tone: 'from-[#FE007A] to-[#4705ED]',
    symbol: 'x²',
    image: 'assets/programas/adelanto_intermedio.png',
  },
  {
    id: 'adelanto-avanzado',
    title: 'Adelanto Avanzado Escolar',
    audience: 'Estudiantes que buscan un nivel preuniversitario',
    description:
      'Una propuesta de mayor nivel para estudiantes que quieren acercarse a las exigencias de la preparación preuniversitaria y ampliar sus conocimientos en Matemática.',
    benefits: [
      'Desarrollar un nivel superior en Matemática.',
      'Prepararse para la etapa preuniversitaria.',
      'Ampliar sus posibilidades académicas.',
    ],
    tone: 'from-[#FFB600] to-[#FE007A]',
    symbol: '∑',
    image: 'assets/programas/adelanto_avanzado.png',
  },
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
    answer: `El proceso es muy ágil: completas el formulario de contacto o nos escribes directamente por WhatsApp al ${WHATSAPP_DISPLAY}. Coordinamos una breve sesión de evaluación diagnóstica de intereses sin costo, confirmas tu horario y aseguras la vacante. Aceptamos transferencias bancarias, Yape/Plin (Perú) y medios digitales seguros.`
  }
];

/**
 * Seccion HERO — carrusel de portada.
 * Es independiente de ANNOUNCEMENTS: consume solo las imagenes de assets/hero/
 * y no comparte contenido con la seccion de anuncios.
 */
export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'nasa-space-apps-2026',
    title: 'Impulsamos el talento que transforma el futuro:',
    description:
      'Somos aliados del NASA Space Apps Challenge Arequipa 2026, conectando a nuestros estudiantes con una experiencia internacional de ciencia, tecnología e innovación.',
    imageHeroDesktop: 'assets/hero/hero_1.webp',
    imageHeroMobile: 'assets/hero/hero_1_m.webp',
    imageHeroMobileTall: 'assets/hero/hero_1_mt.webp',
  },
  {
    id: 'capital-semilla-mtpe',
    title: '¡GANAMOS CAPITAL SEMILLA!',
    subtitle: 'AP Education sigue creciendo',
    description:
      'Fuimos reconocidos como ganadores del Capital Semilla del II Curso Virtual "Aprende a Emprender", organizado por el Ministerio de Trabajo y Promoción del Empleo.',
    imageHeroDesktop: 'assets/hero/hero_2.webp',
    imageHeroMobile: 'assets/hero/hero_2_m.webp',
    imageHeroMobileTall: 'assets/hero/hero_2_mt.webp',
  },
  {
    id: 'mentoras-trainee',
    title: 'FORMAMOS A QUIENES FORMARÁN',
    subtitle: 'Nace Mentoras Trainee',
    description:
      'Un programa de formación en innovación, Tecnología y Educación para jóvenes que quieren desarrollar sus habilidades como futuras mentoras STEM.',
    imageHeroDesktop: 'assets/hero/hero_3.webp',
    imageHeroMobile: 'assets/hero/hero_3_m.webp',
    imageHeroMobileTall: 'assets/hero/hero_3_mt.webp',
  },
  {
    id: 'centro-psicologico-interactua',
    title: 'Educación también es bienestar',
    subtitle: 'AP Education × Centro Psicológico Interactúa',
    description:
      'Una alianza estratégica para brindar a nuestra comunidad beneficios y descuentos exclusivos en atención psicológica y talleres para estudiantes, familias, docentes y colaboradores.',
    imageHeroDesktop: 'assets/hero/hero_4.webp',
    imageHeroMobile: 'assets/hero/hero_4_m.webp',
    imageHeroMobileTall: 'assets/hero/hero_4_mt.webp',
  },
  {
    id: 'embajadora-stem-women',
    title: 'RECONOCIMIENTO QUE NOS INSPIRA',
    subtitle: 'Nuestra fundadora es Embajadora STEM Women',
    description:
      'Azahalia Puyen, CEO & Founder de AP Education, fue incorporada como Embajadora de STEM Women Congress Perú. Reconocimiento que fortalece nuestro compromiso con la educación STEM, la innovación y el desarrollo del talento.',
    imageHeroDesktop: 'assets/hero/hero_5.webp',
    imageHeroMobile: 'assets/hero/hero_5_m.webp',
    imageHeroMobileTall: 'assets/hero/hero_5_mt.webp',
  },
];

/**
 * Seccion ANUNCIOS — carrusel de anuncios y convocatorias.
 * Contenido propio con las imagenes de assets/anuncios/.
 */
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
  },
];

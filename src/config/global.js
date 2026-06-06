export default {
  global: {
    Name:
      'Análisis, especificación y validación de requisitos de <em>software</em>.',
    Description:
      'El componente formativo aborda los procesos relacionados con el análisis, la especificación, la validación y la gestión de requisitos de <em>software</em>. Se estudian técnicas que permiten identificar, documentar, evaluar y controlar los requisitos durante el desarrollo de un sistema, con el fin de asegurar que las soluciones tecnológicas respondan adecuadamente a las necesidades del usuario y del negocio.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Análisis de requisitos de <em>software</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Técnicas de análisis de requisitos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Priorización de requisitos',
            hash: 't_1_2',
          },
          { numero: '1.3', titulo: 'Matrices de trazabilidad', hash: 't_1_3' },
          { numero: '1.4', titulo: 'Descomposición funcional', hash: 't_1_4' },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Especificación de requisitos de <em>software</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Estándares internacionales para la especificación de requisitos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Plantillas ERS (Especificación de Requisitos del <em>software</em>)',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Técnicas de documentación de requisitos en proyectos tradicionales',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo:
              'Técnicas de documentación de requisitos en proyectos ágiles',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Validación de requisitos de <em>software</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Criterios de validación de requisitos',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Técnicas de validación de requisitos',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Revisiones, auditorías y prototipos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Manual de usuario como mecanismo de validación',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Gestión de requisitos en proyectos de <em>software</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo:
              'Contratos de <em>software</em>: requisitos fijos y variables',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Herramientas para la gestión de requisitos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo:
              'Tipos y características de herramientas de gestión de requisitos',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Control y gestión de cambios en los requisitos',
            hash: 't_4_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA2_22846_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Análisis de requisitos',
      significado:
        'proceso mediante el cual se identifican, examinan y estructuran las necesidades del sistema que se desarrollará. Permite comprender las expectativas de los usuarios y transformarlas en requisitos claros para el desarrollo del <em>software</em>.',
    },
    {
      termino: 'Auditoría de requisitos',
      significado:
        'proceso de revisión formal que permite verificar si los requisitos del sistema cumplen con criterios de calidad, coherencia, completitud y alineación con los objetivos del proyecto.',
    },
    {
      termino: 'Control de cambios',
      significado:
        'procedimiento mediante el cual se registran, analizan, aprueban o rechazan las modificaciones realizadas a los requisitos del sistema durante el desarrollo del proyecto.',
    },
    {
      termino: 'Descomposición funcional',
      significado:
        'técnica de análisis que consiste en dividir un sistema o proceso complejo en funciones más pequeñas y manejables, con el fin de facilitar su comprensión y diseño.',
    },
    {
      termino: 'Herramientas de gestión de requisitos',
      significado:
        'aplicaciones o plataformas que permiten registrar, organizar, rastrear y administrar los requisitos de un sistema durante todo el ciclo de vida del desarrollo del <em>software</em>.',
    },
    {
      termino: 'Matriz de trazabilidad',
      significado:
        'instrumento que permite relacionar los requisitos del <em>software</em> con otros elementos del proyecto, como el diseño, la implementación y las pruebas, con el fin de garantizar su seguimiento durante el desarrollo.',
    },
    {
      termino: 'Prototipo',
      significado:
        'representación preliminar de un sistema o de una parte de él que permite visualizar funcionalidades y validar requisitos antes del desarrollo definitivo del <em>software</em>.',
    },
    {
      termino: 'Trazabilidad de requisitos',
      significado:
        'Capacidad de seguir el origen, evolución y relación de los requisitos a lo largo de todas las etapas del desarrollo del <em>software</em>.',
    },
    {
      termino: 'Validación de requisitos',
      significado:
        'proceso mediante el cual se verifica que los requisitos definidos reflejan correctamente las necesidades del usuario y que son completos, consistentes y comprensibles.',
    },
    {
      termino: 'Versionamiento de requisitos',
      significado:
        'mecanismo que permite mantener un historial de cambios realizados en los requisitos del sistema, facilitando su seguimiento y control durante el proyecto.',
    },
  ],
  referencias: [
    { referencia: 'IEEE 830', link: '' },
    { referencia: 'ISO/IEC/IEEE 29148', link: '' },
    {
      referencia:
        'IEEE Computer Society. (2014). <em>Guía del SWEBOK: guía para el cuerpo de conocimiento de la ingeniería de <em>software</em></em> (3.ª ed.). IEEE Computer Society Press.',
      link: '',
    },
    {
      referencia:
        'International Organization for Standardization, International Electrotechnical Commission, & IEEE. (2018). <em>ISO/IEC/IEEE 29148:2018. Ingeniería de sistemas y <em>software</em> - Procesos del ciclo de vida - Ingeniería de requisitos.</em> ISO.',
      link: '',
    },
    {
      referencia:
        'Kendall, Kenneth E., & Kendall, Julie E. (2011). <em>Análisis y diseño de sistemas</em> (8.ª ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Larman, Craig (2003). <em>UML y patrones: introducción al análisis y diseño orientado a objetos</em> (2.ª ed.). Prentice Hall.',
      link: '',
    },
    {
      referencia:
        'Organización Internacional de Normalización. (2018). <em>ISO/IEC/IEEE 29148: Ingeniería de sistemas y <em>software</em>. Procesos del ciclo de vida. Requisitos.</em> ISO.',
      link: '',
    },
    {
      referencia:
        'Pressman, Roger S., & Maxim, Bruce R. (2020). <em>Ingeniería del <em>software</em>: un enfoque práctico</em> (9.ª ed.). McGraw-Hill Education.',
      link: '',
    },
    {
      referencia:
        'Sommerville, Ian (2016). <em>Ingeniería del <em>software</em></em> (10.ª ed.). Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Sommerville, Ian, & Sawyer, Pete (2011). <em>Ingeniería de requisitos: procesos y técnicas</em>. Pearson Educación.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}

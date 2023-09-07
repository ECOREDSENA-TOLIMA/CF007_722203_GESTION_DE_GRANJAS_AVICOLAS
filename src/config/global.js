export default {
  global: {
    componenteFormativo: 'Producción de aves, carne, huevo y bienestar animal',
    descripcionCurso:
      'En la avicultura es de gran importancia conocer sobre las actividades que conciernen a nutrición y sanidad en el proceso productivo, en temas que van desde las líneas genéticas, especificaciones del galpón, elementos dentro del mismo alimentación y conversión, entre otros; esto con el fin de que se comprenda las diversas etapas productivas implícitas.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
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
        titulo: 'Seguridad y salud en el trabajo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Riesgos laborales en la etapa de levante',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Elementos de protección personal relacionados con el manejo de aves en etapa de levante',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Normatividad bienestar animal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Ley 84 de 1989',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Ley 1774 de 2016',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Decreto 2113 de 2017',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Resolución 253 de 2020',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Comportamiento animal y parámetros etológicos',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Aspectos importantes en anatomía y fisiología de las aves',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Sistema músculo esquelético',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Sistema reproductivo',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Sistema digestivo',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Contexto, características y tipos comerciales de aves',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Tipos de líneas comerciales de aves',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Manuales de manejo de líneas genéticas',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Parámetros productivos',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo:
          'Contexto, tipo y características de los alojamientos para los diferentes sistemas productivos de las aves',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Ubicación del galpón',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Terreno',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Orientación',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Dimensiones básicas del galpón',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Techos',
            hash: 't_5_5',
          },
          {
            numero: '5.6',
            titulo: 'Muros y ventanas',
            hash: 't_5_6',
          },
          {
            numero: '5.7',
            titulo: 'Pisos',
            hash: 't_5_7',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Máquinas, equipos y utensilios',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Variables ambientales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Temperatura',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Humedad',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Ventilación',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Iluminación',
            hash: 't_7_4',
          },
          {
            numero: '7.5',
            titulo:
              'Técnicas de monitoreo y equipos de medición variables ambientales',
            hash: 't_7_5',
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
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
      tema: '3. Aspectos importantes en anatomía y fisiología de las aves',
      referencia: 'Estrada M. (2011). Anatomía y fisiología aviar.',
      tipo: 'Documento de apoyo',
      link: 'http://docplayer.es/27496444-Anatomia-y-fisiologia-aviar.html',
    },
    {
      tema: '3. Aspectos importantes en anatomía y fisiología de las aves',
      referencia:
        'J. (s. f.). Gallina Castellana Negra: Anatomía De La Gallina. Gallina Castellana Negra.',
      tipo: 'Blog',
      link: 'https://www.tri-tro.com/anatomia-de-la-gallina',
    },
    {
      tema:
        '5. Contexto, tipo y características de los alojamientos para los diferentes sistemas productivos de las aves.',
      referencia:
        'Barroeta, A. Izquierdo, D. y Pérez, J. (s. f.). <em>Manual de avicultura.</em> Universidad Autónoma de Barcelona.',
      tipo: 'Documento de apoyo',
      link: 'http://docplayer.es/1772576-Manual-de-avicultura.html',
    },
    {
      tema:
        '5. Contexto, tipo y características de los alojamientos para los diferentes sistemas productivos de las aves.',
      referencia:
        'La Finca de Hoy. (2017, 5 mayo). Ventajas y desventajas de los sistemas de producción avícola [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/gOVjA9hnzWA',
    },
    {
      tema: '6. Máquinas, equipos y utensilios',
      referencia:
        'Pronavícola S.A. (2015, 27 marzo). Grading [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/HKbTdUeGZ4Q',
    },
  ],
  glosario: [
    {
      termino: 'Alero',
      significado:
        'parte inferior del tejado, que sale fuera de la pared y sirve para desviar de ella las aguas llovedizas. (Real Academia Española, 2020)',
    },
    {
      termino: 'Alojamiento',
      significado:
        'lugar donde se pueden alojar las aves, proporcionando un ambiente controlado de las condiciones climáticas que se proporcionan a las aves (Alojamiento y manejo de las aves de corral en los países en desarrollo, Organización de las Naciones Unidas para la Alimentación y la Agricultura)',
    },
    {
      termino: 'Bienestar animal',
      significado:
        'ldesigna “el estado físico y mental de un animal en relación con las condiciones en las que vive y muere (Organización Mundial de Sanidad Animal).',
    },
    {
      termino: 'Cama',
      significado:
        'aquel material que utilizamos en el suelo para la crianza de pollos u otras aves, con capacidad de aislar, absorber humedad y proporcionar confort a los animales. (Guía de Buenas Prácticas Ambientales para el sector avícola en Guatemala, 2008)',
    },
    {
      termino: 'Criadoras',
      significado:
        'lámparas usadas en la cría de las aves para contribuir a la regulación del calor corporal del animal. (Aprende en línea, Plataforma académica para pregrado y posgrado, Programa de Integración Tecnologías a la Docencia, Vicerrectoría Académica, Universidad de Antioquia, 2021)',
    },
    {
      termino: '<em>Grading</em>',
      significado:
        'se refiere a la selección individual de aves por tamaño y por peso, con el fin de sectorizarlas dentro del galpón o caseta, y garantizar la del lote. (Aprende en línea, Plataforma académica para pregrado y posgrado, Programa de Integración Tecnologías a la Docencia, Vicerrectoría Académica, Universidad de Antioquia, 2021)',
    },
    {
      termino: 'Parámetro',
      significado:
        'término usado para medir cualquier variable que intervenga en un proceso, dentro de ciertos rangos preestablecidos. Hay que contar con una norma o patrón para poder comparar y calificar el comportamiento de un proceso. El parámetro mide el consumo con relación a lo establecido. Mide el peso corporal, con relación al peso determinado para la estirpe seleccionada. Mide la conversión de un alimento, con relación a las metas o rendimientos esperados por una raza de pollo. El parámetro es la mejor herramienta para medir sus resultados en el proceso de producción de las granjas de pollo de engorde. (Aprende en línea, Plataforma académica para pregrado y posgrado, Programa de Integración Tecnologías a la Docencia, Vicerrectoría Académica, Universidad de Antioquia, 2021)',
    },
    {
      termino: 'Sexaje',
      significado:
        'procedimiento realizado en incubadora, el cual se encarga de clasificar los pollitos según su sexo. (Aprende en línea, Plataforma académica para pregrado y posgrado, Programa de Integración Tecnologías a la Docencia, Vicerrectoría Académica, Universidad de Antioquia, 2021)',
    },
  ],
  referencias: [
    {
      referencia:
        'Agrinews. (2014). <em>Funciones que debe cumplir una cama en Avicultura</em>',
      link:
        'https://agrinews.es/2014/02/04/funciones-que-debe-cumplir-una-cama-en-avicultura/',
    },
    {
      referencia:
        'Decreto 2113 de 2017. [Ministerio de Agricultura] Por el cual se adiciona un Capítulo al Título 3 de la Parte 13 del Libro 2 del Decreto 1071 de 2015, Decreto Único Reglamentario del Sector Administrativo Agropecuario, Pesquero y de Desarrollo Rural. Diciembre 15 de 2017.',
      link:
        'https://www.minagricultura.gov.co/Normatividad/Decretos/Decreto%20No.%202113%20de%202017.pdf',
    },
    {
      referencia:
        'Donald, J. (2009). <em>Manejo del Ambiente En el Galpón de Pollo de Engorde.</em> Aviagen',
      link:
        'http://es.aviagen.com/assets/Tech_Center/BB_Foreign_Language_Docs/Spanish_TechDocs/Aviagen-Manejo-Ambiente-Galpn-Pollo-Engorde-2009.pdf',
    },
    {
      referencia: 'Estrada M. (2011). <em>Anatomía y fisiología aviar</em>',
      link: 'http://docplayer.es/27496444-Anatomia-y-fisiologia-aviar.html',
    },
    {
      referencia:
        'Fairchild, B. (2012). <em>Control de factores ambientales en la crianza de pollitos.</em> El Sitio Avícola.',
      link:
        'https://www.elsitioavicola.com/articles/2187/control-de-factores-ambientales-en-la-crianza-de-pollitos-1/',
    },
    {
      referencia:
        'Federación Nacional de Avicultores de Colombia [FENAVI]. (2019). <em>Aspectos Productivos y Administrativos en la Industria Avícola</em>',
      link:
        'https://fenavi.org/wp-content/uploads/2019/02/ASPECTOS-PRODUCTIVOS-Y-ADMINISTRATIVOS-EN-LA-INDUSTRIA-AV%C3%8DCOLA.pd',
    },
    {
      referencia:
        'Glatz, P. (2013). <em>Alojamiento y manejo de las aves de corral en los países en desarrollo.</em> Organización de las Naciones Unidas para la Alimentación y la Agricultura.',
      link: 'http://www.fao.org/3/al738s/al738s00.pdf',
    },
    {
      referencia:
        'González, K. (2021). <em>Galpón para pollos de engorde.</em> Zootecnia y Veterinaria es mi Pasión',
      link:
        'https://zoovetesmipasion.com/avicultura/pollos/estructura-del-galpon-pollos-engorde/',
    },
    {
      referencia:
        'Itza, M. y Ciro, J. (2020). <em>Parámetros productivos importancia en producción avícola.</em> BM Editores',
      link:
        'https://bmeditores.mx/avicultura/parametros-productivos-importancia-en-produccion-avicola/',
    },
    {
      referencia:
        'Julca, A. (2018). <em>Evaluación del Comportamiento Productivo de la Gallina (Gallus Gallus) Hy-line Brown de 60 a 70 Semanas Trasladadas del Sistema de Crianza de Piso a Jaula en la Región Tacna.</em> Universidad Nacional Jorge Basadre Grohmann - Tacna.',
      link:
        'http://repositorio.unjbg.edu.pe/bitstream/handle/UNJBG/3240/1474_2018_julca_maquera_aj_fcag_veterinaria.pdf?isAllowed=y&sequence=1',
    },
    {
      referencia: 'Lascarro, C. (2014). <em>Gallinas Ponedoras.</em> SENA',
      link:
        'https://www.slideshare.net/lascarro1/gallinas-ponedoras-avicultura-sena',
    },
    {
      referencia:
        'Ley 84 de 1989. [Congreso de Colombia]. Por la cual se adopta el Estatuto Nacional de Protección de los Animales y se crean unas contravenciones y se regula lo referente a su procedimiento y competencia. Diciembre 27 de 1989',
      link:
        'https://www.minambiente.gov.co/images/BosquesBiodiversidadyServiciosEcosistemicos/pdf/Normativa/Leyes_/ley_0084_271289.pdf',
    },
    {
      referencia:
        'Ley 1774 de 2016. [Congreso de Colombia] Por medio de la cual se modifican el código civil, la ley 84 de 1989, el código penal, el código de procedimiento penal y se dictan otras disposiciones. Enero 6 de 2016',
      link:
        'https://dapre.presidencia.gov.co/normativa/normativa/LEY%201774%20DEL%206%20DE%20ENERO%20DE%202016.pdf',
    },
    {
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural. (2020). <em>Cadena Avícola.</em>',
      link:
        'https://sioc.minagricultura.gov.co/Avicola/Documentos/2020-03-30%20Cifras%20Sectoriales.pdf',
    },
    {
      referencia:
        'Organización Mundial de Sanidad Animal. (2021). <em>Bienestar Animal</em>',
      link:
        'https://www.oie.int/es/que-hacemos/sanidad-y bienestar-animal/bienestar-animal/',
    },
    {
      referencia:
        'Real Academia Española [RAE]. (2020). <em>Definición de alero</em>',
      link: 'https://dle.rae.es/alero',
    },
    {
      referencia:
        'Resolución 0253 de 2020. [Ministerio de Agricultura y Desarrollo Rural]. Por la cual se adopta el Manual de Condiciones de Bienestar Animal propias de cada una de las especies de producción del sector agropecuario: bovina, bufalina, aves de corral y animales acuáticos. Octubre 29 de 2020.',
      link:
        'https://fenavi.org/wp-content/uploads/2020/10/RESOLUCION-0253-DE-2020.pdf',
    },
    {
      referencia:
        'Vélez, J. (2013). <em>Construcción de Galpones.</em> Universidad de Caldas.',
      link: 'https://www.slideshare.net/LinaLopez26/construccin-de-galpones',
    },
    {
      referencia: 'Wikipedia. (2021). <em>Etología</em>',
      link: 'https://es.wikipedia.org/wiki/Etolog%C3%ADa',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Mercedes Orduz Gómez',
          cargo: 'Experta Temática',
          centro:
            'Regional Santander - Centro de Atención al Sector Agropecuario',
        },
        {
          nombre: 'Giovanna Andrea Escobar Ospina',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios (CIES)',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrector de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Juan Gilberto Giraldo Cortés',
          cargo: 'Diseñador instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Viviana Herrera Quiñonez',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Aruzidna Sánchez Alonso',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y Vinculación en Plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de Contenidos Accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

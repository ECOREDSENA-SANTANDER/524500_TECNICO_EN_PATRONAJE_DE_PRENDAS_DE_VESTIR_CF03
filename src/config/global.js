export default {
  global: {
    componenteFormativo: 'Patronaje Básico',
    descripcionCurso:
      'El presente componente aborda el desarrollo y la elaboración de moldes desde la implementación de los básicos en las diferentes líneas, el análisis de cada una de las partes que compone una prenda, pasados a planos técnicos con medidas y formas correspondientes a cada estructura.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
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
        titulo: 'Patronaje básico de línea infantil',
        numero: '1',
        nombreRuta: 'tema1',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Cómo hacer un patrón a escala',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              ' Implementación de básico superior – Desarrollo de prendas superiores',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Trazo de cabezas mangas – Análisis de manga',
            hash: 't_1_3',
          },

          {
            numero: '1.4',
            titulo: 'Trazo de cuellos – Generalidades y comportamientos',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Despiece de planos',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Trazo de prendas superiores',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Trazo de prendas inferiores – faldas',
            hash: 't_1_7',
          },
          {
            numero: '1.8',
            titulo: 'Trazo de prendas inferiores – pantalón',
            hash: 't_1_8',
          },
          {
            numero: '1.9',
            titulo: 'Trazo de prendas – overol',
            hash: 't_1_9',
          },
          {
            numero: '1.10',
            titulo: 'Trazo de prendas – bata o vestido',
            hash: 't_1_10',
          },
        ],
      },

      {
        titulo: 'Patronaje básico línea masculina',
        nombreRuta: 'tema2',
        numero: '2',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Trazo de camisa clásica',
            hash: 't_2_1',
          },

          {
            numero: '2.2',
            titulo: ' Trazo de prendas superiores - camisa',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Trazo de prendas superiores - camisa',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Trazo de pantalón tipo jean slim fit',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Base sastre masculina',
            hash: 't_2_5',
          },
        ],
      },
      {
        titulo: 'Patronaje básico línea femenina',
        nombreRuta: 'tema3',
        numero: '3',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Traslados de pinza correctiva de talles',
            hash: 't_3_1',
          },

          {
            numero: '3.2',
            titulo: ' Trazo de blusa femenina',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: ' Trazo de escotes y tipos de cuellos',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Trazo de chaqueta tipo sastre',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Trazo de manga y cabezas de manga',
            hash: 't_3_5',
          },

          {
            numero: '3.6',
            titulo: ' Trazo de falda y modificación de básicos de falda',
            hash: 't_3_6',
          },

          {
            numero: '3.7',
            titulo: ' Trazo de vestido de noche',
            hash: 't_3_7',
          },
          {
            numero: '3.8',
            titulo: ' Interpretación de prendas inferiores',
            hash: 't_3_8',
          },
          {
            numero: '3.9',
            titulo: '  Interpretación de overoles',
            hash: 't_3_9',
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF3_524500_DU.zip',
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
      tema: 'Manual de patronaje básico e interpretación de diseños',
      referencia:
        'Gutiérrez, L., Moncayo, A., Tanaka, K., Kimura, F., Moreno, D. (2011). Manual de patronaje básico e interpretación de diseños. Servicio Nacional de Aprendizaje SENA. https://sena-primo.hosted.exlibrisgroup.com/permalink/f/q6j6k0/sena_aleph000025496',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/q6j6k0/sena_aleph000025496',
    },
  ],
  referencias: [
    {
      referencia:
        'Duarte, N. (1983). Conocimientos básicos de corte. Unidad instruccional No. 3. Servicio Nacional de Aprendizaje',
      link: 'https://repositorio.sena.edu.co/handle/11404/1432?show=full',
    },
    {
      referencia:
        'Gutiérrez, L., Moncayo, A., Tanaka, K., Kimura, F., Moreno, D. (2011). Manual de patronaje básico e interpretación de diseños. Servicio Nacional de Aprendizaje SENA. ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/q6j6k0/sena_aleph000025496 ',
    },
    {
      referencia:
        'Sociedad Americana de Ensayos y Materiales (ASTM). (2003). Textiles. Editorial Staff. [Book]. Sistema de Bibliotecas SENA. ',
      link: ' ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Lizeth Maritza Rodríguez Beltrán ',
          cargo: 'Instructora Técnica ',
          centro:
            'Centro de Manufactura en Textil y Cuero - Regional Distrito Capital ',
        },
        {
          nombre: 'Natalia Andrea Bueno Pizarro ',
          cargo: 'Diseñadora y evaluadora Instruccional ',
          centro:
            'Distrito Capital – Centro para La Industria de la Comunicación Gráfica ',
        },
        {
          nombre: 'Julia Isabel Roberto ',
          cargo: 'Diseñadora y evaluadora Instruccional ',
          centro:
            'Distrito Capital – Centro para La Industria de la Comunicación Gráfica ',
        },
        {
          nombre: 'Sandra Paola Morales Paez ',
          cargo: 'Evaluador Instruccional',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Carolina Jiménez Suescún  ',
          cargo: 'Evaluador Instruccional ',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Julián Fernando Vanegas Vera',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Leonardo Castellanos Rodríguez',
          cargo: 'Desarrollador <i>Fullstack</i>',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Lucenith Pinilla Moreno',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Regional Santander - Centro Agroturístico',
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

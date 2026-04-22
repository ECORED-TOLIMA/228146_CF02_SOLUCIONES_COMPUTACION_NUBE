<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Gestión de requisitos en proyectos de <em>software</em>
    p.mb-4(data-aos="fade-down") La gestión de requisitos en proyectos de <em>software</em> corresponde al conjunto de procesos, técnicas y actividades orientadas a identificar, organizar, controlar y mantener actualizados los requisitos del sistema durante todo el ciclo de vida del desarrollo. Su propósito principal es asegurar que las necesidades del cliente y de los usuarios finales se comprendan correctamente, se documenten de manera adecuada y se mantengan alineadas con los objetivos del proyecto.
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema4/img01.jpg', alt='Imagen decorativa')
      .col.col-lg-6.col-12.order-lg-2.order-2
        .cajon.cajon.C01.color-primario.px-4.py-3.mb-4
          p.mb-0(data-aos="fade-down") En los proyectos de desarrollo de <em>software</em>, los requisitos no son elementos estáticos. A lo largo del proceso pueden surgir cambios derivados de nuevas necesidades del negocio, ajustes tecnológicos, restricciones del entorno o mejoras identificadas durante las etapas de diseño, desarrollo y pruebas. Por esta razón, la gestión de requisitos permite controlar dichos cambios de forma organizada, evitando inconsistencias y garantizando que todas las modificaciones sean evaluadas, aprobadas y documentadas.
        p.mb-0 Una adecuada gestión de requisitos también facilita la trazabilidad, es decir, la posibilidad de rastrear cada requisito desde su origen hasta su implementación, pruebas y validación. Esto permite verificar que todas las funcionalidades definidas en la etapa de análisis se encuentren correctamente desarrolladas y que el sistema cumpla con los objetivos planteados inicialmente.
    p.mb-4(data-aos="fade-down") Dentro de la gestión de requisitos se desarrollan diferentes actividades fundamentales que permiten mantener la coherencia y calidad de la información del proyecto. Entre las más importantes se encuentran:
    .cajon.cajon.C06.p-5.mb-4
      SlyderB(:datos="datosSlyder")
    p.mb-0(data-aos="fade-down") Una gestión adecuada de requisitos contribuye a reducir errores en el desarrollo, mejorar la comunicación entre los participantes del proyecto y garantizar que el <em>software</em> entregado responda de manera efectiva a las necesidades para las cuales fue diseñado. En consecuencia, este proceso se convierte en un elemento clave para el éxito de los proyectos de <em>software</em>, especialmente en entornos donde los cambios y la evolución de los sistemas son frecuentes.
    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Contratos de <em>software</em>: requisitos fijos y variables
    p.mb-4(data-aos="fade-down") En los proyectos de desarrollo de <em>software</em>, los contratos establecen los acuerdos formales entre el cliente y el proveedor respecto a las características, funcionalidades, plazos, costos y responsabilidades asociadas al sistema que se desarrollará. Dentro de estos contratos, los requisitos del <em>software</em> pueden clasificarse en requisitos fijos y requisitos variables, dependiendo del grado de flexibilidad permitido durante el desarrollo del proyecto.
    .row.justify-content-center.mb-4
      .col.col-lg-3.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema4/img08.svg', alt='Imagen decorativa')
      .col.col-lg-9.col-12.order-lg-1.order-2
        .cajon.cajon.C02.color-secundario.px-4.py-3.mb-4
          p.mb-0(data-aos="fade-down") Los requisitos fijos corresponden a aquellas funcionalidades o características del sistema que han sido definidas desde el inicio del proyecto y que deben cumplirse obligatoriamente según lo establecido en el contrato. Estos requisitos no pueden modificarse fácilmente durante el proceso de desarrollo, ya que representan compromisos formales entre las partes. Generalmente se utilizan en proyectos con enfoques tradicionales de desarrollo, donde el alcance del sistema se define de manera detallada desde las etapas iniciales.
        p.mb-0 Por otro lado, los requisitos variables son aquellos que pueden ajustarse o modificarse durante el desarrollo del proyecto en función de nuevas necesidades, cambios en el entorno organizacional o retroalimentación de los usuarios. Este tipo de requisitos se gestiona mediante procedimientos de control de cambios previamente definidos en el contrato. Los requisitos variables son más comunes en proyectos que utilizan metodologías ágiles, donde se promueve la adaptación continua a las necesidades del cliente.
    .row.cajon.C01.justify-content-center.align-items-stretch.mb-4.p-4
      .row.justify-content-center.align-items-center.mb-4
        .col.col-lg-7.col-12.mb-lg-0.mb-3
          p.mb-3(data-aos="fade-down") Ejemplo práctico: en el desarrollo de un sistema de gestión de reservas para un hotel, el contrato de <em>software</em> puede establecer diferentes tipos de requisitos.
          .tarjeta.tarjeta--blanca.px-4.py-2.mb-3
            P.mb-0 <b>Requisitos fijos:</b>
            ul.lista-ul.mb-3
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 El sistema debe permitir registrar reservas de habitaciones.
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 El sistema debe almacenar la información de los clientes.
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 El sistema debe generar confirmaciones de reserva.
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 El sistema debe garantizar la seguridad y protección de los datos de los usuarios.
            p.mb-0(data-aos="fade-down") Estos requisitos se consideran obligatorios y forman parte del alcance principal del proyecto.
        .col.col-lg-5.col-8
          figure
            img(src='@/assets/curso/tema4/img09.svg', alt='Imagen decorativa')
      .row.justify-content-center.align-items-center.mb-0
        .col.col-lg-5.col-8
          figure
            img(src='@/assets/curso/tema4/img10.svg', alt='Imagen decorativa')
        .col.col-lg-7.col-12.mb-lg-0.mb-3
          .tarjeta.tarjeta--blanca.px-4.py-2.mb-3
            P.mb-0 <b>Requisitos variables:</b>
            ul.lista-ul.mb-3
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Integración con pasarelas de pago adicionales.
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Implementación de un módulo de reportes avanzados.
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Integración con aplicaciones móviles o sistemas externos.
              li.mb-0
                i.lista-ul__vineta
                p.mb-0 Incorporación de funcionalidades adicionales solicitadas por el cliente durante el desarrollo.
            p.mb-0(data-aos="fade-down") Estos requisitos pueden modificarse, ampliarse o ajustarse durante el proyecto mediante acuerdos entre el cliente y el equipo de desarrollo.
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema4/img11.jpg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-1.order-2
        p.mb-4 La diferenciación entre requisitos fijos y variables permite establecer con mayor claridad el alcance del proyecto, definir mecanismos de control frente a cambios y evitar conflictos entre las partes involucradas. Asimismo, contribuye a mejorar la planificación, el seguimiento del desarrollo del <em>software</em> y la gestión de riesgos asociados a modificaciones en los requisitos.
        .cajon.cajon.C02.color-secundario.p-4.mb-0
          p.mb-0(data-aos="fade-down") En la práctica, muchos contratos de <em>software</em> combinan ambos tipos de requisitos, estableciendo un conjunto de funcionalidades obligatorias que deben cumplirse y un conjunto de requisitos susceptibles de cambio, los cuales pueden ajustarse mediante acuerdos formales durante el desarrollo del proyecto. De esta manera se busca equilibrar la estabilidad del proyecto con la flexibilidad necesaria para adaptarse a nuevas necesidades.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span Comparación entre requisitos fijos y requisitos variables
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 30%") Característica
                th(data-aos="fade-down")(style= "width: 35%") Requisitos fijos
                th(data-aos="fade-down")(style= "width: 35%") Requisitos variables
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Definición
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Son requisitos definidos desde el inicio del proyecto y que deben cumplirse obligatoriamente según lo establecido en el contrato.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Son requisitos que pueden modificarse o ajustarse durante el desarrollo del proyecto.
              tr
                td(data-aos="fade-down") Flexibilidad
                td(data-aos="fade-down") Presentan baja flexibilidad, ya que los cambios suelen implicar modificaciones contractuales.
                td(data-aos="fade-down") Presentan mayor flexibilidad y pueden adaptarse a nuevas necesidades del cliente o del entorno.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Momento de definición
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Se establecen en las etapas iniciales del proyecto.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Pueden definirse o modificarse durante las iteraciones del desarrollo.
              tr
                td(data-aos="fade-down") Metodologías asociadas
                td(data-aos="fade-down") Comunes en metodologías tradicionales o en modelos predictivos de desarrollo.
                td(data-aos="fade-down") Frecuentes en metodologías ágiles que permiten adaptación continua.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Gestión de cambios
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Requieren procesos formales de gestión contractual para cualquier modificación.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Se gestionan mediante mecanismos de control de cambios dentro del proyecto.
    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Herramientas para la gestión de requisitos
    .row.justify-content-center.mb-0
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema4/img12.jpg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        p.mb-3 Las herramientas para la gestión de requisitos son aplicaciones o plataformas que permiten registrar, organizar, analizar, priorizar y hacer seguimiento a los requisitos de un sistema de <em>software</em> durante todo el ciclo de vida del proyecto. Su uso facilita la administración de la información, la comunicación entre los miembros del equipo de desarrollo y el control de los cambios que puedan surgir en los requisitos.
        .cajon.cajon.C01.color-primario.px-4.py-3.mb-0
          p.mb-0(data-aos="fade-down") Estas herramientas ayudan a centralizar la documentación de los requisitos, permitiendo que analistas, desarrolladores, gestores de proyecto y clientes tengan acceso a una fuente de información común. De esta manera se reduce el riesgo de inconsistencias, pérdida de información o interpretaciones erróneas durante el proceso de desarrollo.
    .row.BG04.justify-content-center.align-items-center.px-3.py-5.mb-0
      .col.col-lg-3.col-8.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema4/img13.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-1.order-2
        .row.justify-content-center
          .col
            .tarjeta.tarjeta--blanca.p-4
              p.text-bold(data-aos="fade-down") Entre las principales funciones que ofrecen las herramientas de gestión de requisitos se encuentran:
                ul.lista-ul--color.mt-4(data-aos="fade-down")
                  li
                    i.fas.fa-cloud-arrow-down
                    p.mb-0 Registro y documentación estructurada de requisitos funcionales y no funcionales.
                  li
                    i.fas.fa-cloud-arrow-down
                    p.mb-0 Priorización y organización de requisitos según su importancia o impacto en el proyecto.
                  li
                    i.fas.fa-cloud-arrow-down
                    p.mb-0 Control de versiones y seguimiento de cambios en los requisitos.
                  li
                    i.fas.fa-cloud-arrow-down
                    p.mb-0 Establecimiento de relaciones de trazabilidad entre requisitos, casos de uso, diseño, desarrollo y pruebas.
                  li
                    i.fas.fa-cloud-arrow-down
                    p.mb-0 Colaboración entre los miembros del equipo mediante comentarios, revisiones y actualizaciones compartidas.
                  li
                    i.fas.fa-cloud-arrow-down
                    p.mb-0 Generación de reportes para facilitar el seguimiento y la toma de decisiones en el proyecto.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.C04.px-3.py-2
          .row.justify-content-center.align-items-center
            p.mb-0(data-aos="fade-down") El uso de estas herramientas resulta especialmente importante en proyectos de <em>software</em> de mediana y gran escala, donde la cantidad de requisitos y la participación de múltiples actores hacen necesario contar con mecanismos que permitan mantener la información organizada y actualizada.
      .col.col-lg-auto.col-8.col-md-4.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema4/img14.svg', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-down") En la actualidad existen diversas herramientas utilizadas en la industria del <em>software</em> para apoyar la gestión de requisitos. Algunas de las más conocidas son:
    .row.BG02.justify-content-center.align-items-center.px-3.mb-4(data-aos="flip-up")
      .col-lg-6.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="IBM Engineering Requirements Management DOORS")
            .col-12.mb-4.mb-md-0
              p.mb-0 Herramienta ampliamente utilizada en proyectos complejos de ingeniería y desarrollo de sistemas. Permite gestionar grandes volúmenes de requisitos y mantener trazabilidad detallada entre ellos.
          .row(numero="2" titulo="Jira <em>software</em>")
            .col-12.mb-4.mb-md-0
              p.mb-0 Plataforma utilizada principalmente en metodologías ágiles para gestionar historias de usuario, tareas y seguimiento del desarrollo del <em>software</em>.
          .row(numero="3" titulo="Azure DevOps")
            .col-12.mb-4.mb-md-0
              p.mb-0 Herramienta que permite gestionar requisitos, historias de usuario, tareas, pruebas y control del desarrollo dentro de un entorno integrado.
          .row(numero="4" titulo="ReqView")
            .col-12.mb-4.mb-md-0
              p.mb-0 Herramienta especializada en gestión y trazabilidad de requisitos que facilita la organización y análisis de la documentación del proyecto.
          .row(numero="5" titulo="Confluence")
            .col-12.mb-4.mb-md-0
              p.mb-0 Plataforma colaborativa utilizada para documentar requisitos, especificaciones y conocimientos del proyecto, especialmente en entornos ágiles.
      .col-lg-4.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema4/img15.png', alt='Imagen decorativa')
    p.mb-0(data-aos="fade-down") El uso adecuado de estas herramientas contribuye a mejorar la calidad de los requisitos, facilitar la trazabilidad de la información y garantizar que el sistema desarrollado cumpla con las necesidades y expectativas de los usuarios y del cliente.
    separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Tipos y características de herramientas de gestión de requisitos
    p(data-aos="fade-down") Las herramientas de gestión de requisitos pueden clasificarse en diferentes tipos según las funcionalidades que ofrecen, el tipo de proyecto en el que se utilizan y el enfoque metodológico que apoyan. Estas herramientas permiten organizar, documentar, analizar y dar seguimiento a los requisitos del sistema, facilitando la coordinación entre los distintos participantes del proyecto.
    p.mb-4(data-aos="fade-down") En términos generales, las herramientas de gestión de requisitos se pueden agrupar en los siguientes tipos:
    .tarjeta.tarjeta--BG05.p-md-5.p-4.mb-4(data-aos="flip-up")
      SlyderA(tipo="b")
        .row.justify-content-center.p-4
          .col-lg-6.order-lg-1.order-2
            h4 Herramientas especializadas en gestión de requisitos
            p Son herramientas diseñadas específicamente para la ingeniería de requisitos. Permiten registrar requisitos de forma estructurada, establecer relaciones de trazabilidad, gestionar versiones y controlar cambios en los requisitos del sistema. Estas herramientas suelen utilizarse en proyectos complejos o en organizaciones que desarrollan sistemas de gran escala.
            p Ejemplos de este tipo de herramientas incluyen IBM Engineering Requirements Management DOORS y ReqView, que permiten administrar grandes volúmenes de requisitos y mantener un seguimiento detallado de su evolución durante el desarrollo del proyecto.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema4/img16.jpg', alt='Imagen decorativa')
        .row.justify-content-center.p-4
          .col-lg-6.order-lg-1.order-2
            h4 Herramientas de gestión de proyectos con soporte para requisitos
            p Son plataformas que, además de gestionar tareas, cronogramas y actividades del proyecto, incorporan funcionalidades para registrar y organizar requisitos, historias de usuario o funcionalidades del sistema. Estas herramientas son ampliamente utilizadas en equipos de desarrollo que trabajan con metodologías ágiles.
            p Entre las más utilizadas se encuentran Jira <em>software</em> y Azure DevOps, que permiten administrar historias de usuario, <em>backlog</em> de producto, incidencias y seguimiento del desarrollo del <em>software</em>.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema4/img17.jpg', alt='Imagen decorativa')
        .row.justify-content-center.p-4
          .col-lg-6.order-lg-1.order-2
            h4 Herramientas colaborativas de documentación
            p Son plataformas que permiten crear, organizar y compartir documentación del proyecto de manera colaborativa. Aunque no están diseñadas exclusivamente para la gestión de requisitos, suelen utilizarse para documentar especificaciones, historias de usuario, manuales y otros artefactos relacionados con el desarrollo del <em>software</em>.
            p Un ejemplo ampliamente utilizado es Confluence, que permite a los equipos documentar requisitos, mantener registros del proyecto y facilitar la comunicación entre los participantes.
          .col-lg-6.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema4/img18.jpg', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-down") Además de su clasificación por tipo, las herramientas de gestión de requisitos presentan una serie de características comunes que facilitan su uso dentro de los proyectos de desarrollo de <em>software</em>.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span Características de las herramientas de gestión de requisitos
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Característica
                th(data-aos="fade-down")(style= "width: 80%") Descripción
            tbody
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F0F8FF") Gestión estructurada de requisitos
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Permite registrar, organizar y clasificar los requisitos funcionales y no funcionales del sistema de forma ordenada.
              tr
                td.text-bold(data-aos="fade-down") Trazabilidad
                td(data-aos="fade-down") Posibilita relacionar los requisitos con otros elementos del proyecto como casos de uso, diseño, desarrollo y pruebas.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F0F8FF") Control de versiones
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Permite mantener un historial de cambios realizados en los requisitos a lo largo del proyecto.
              tr
                td.text-bold(data-aos="fade-down") Gestión de cambios
                td(data-aos="fade-down") Facilita registrar, evaluar y aprobar modificaciones en los requisitos del sistema.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F0F8FF") Colaboración entre equipos
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Permite que diferentes miembros del proyecto participen en la revisión, actualización y validación de los requisitos.
              tr
                td.text-bold(data-aos="fade-down") Generación de reportes
                td(data-aos="fade-down") Apoya el seguimiento del avance del proyecto mediante informes que permiten analizar el estado de los requisitos.
    p.mb-0(data-aos="fade-down") El uso de estas herramientas contribuye a mejorar la organización de la información del proyecto, fortalecer la comunicación entre los participantes y garantizar que los requisitos del sistema se gestionen de manera adecuada durante todo el ciclo de vida del desarrollo del <em>software</em>.
    separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.4 Control y gestión de cambios en los requisitos
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img19.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Durante el desarrollo de un proyecto de <em>software</em> es común que los requisitos evolucionen debido a nuevas necesidades del cliente, cambios en el entorno organizacional, avances tecnológicos o retroalimentación obtenida durante el proceso de desarrollo. Por esta razón, resulta fundamental implementar mecanismos de control y gestión de cambios en los requisitos, con el fin de asegurar que cualquier modificación sea analizada, aprobada y documentada de manera adecuada.
    p.mb-4(data-aos="fade-down") La gestión de cambios en los requisitos consiste en un conjunto de procedimientos y prácticas que permiten registrar, evaluar, aprobar e implementar modificaciones en los requisitos del sistema sin afectar la estabilidad del proyecto. Este proceso busca mantener la coherencia entre los requisitos definidos, el diseño del sistema, el desarrollo del <em>software</em> y las pruebas realizadas.
    .row.justify-content-center.align-items-center.mb-4
      .col.col-lg-9.col-12.order-lg-2.order-2
        .cajon.cajon.C03.px-3.py-2
          .row.justify-content-center.align-items-center
            p.mb-0(data-aos="fade-down") Un proceso adecuado de control de cambios contribuye a evitar inconsistencias en la documentación, prevenir errores en el desarrollo del sistema y garantizar que todos los participantes del proyecto tengan claridad sobre las modificaciones realizadas.
      .col.col-lg-auto.col-8.col-md-4.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema4/img20.svg', alt='Imagen decorativa')
    p.mb-4.text-center(data-aos="fade-down") De manera general, el proceso de gestión de cambios en los requisitos suele incluir las siguientes etapas:
    .row.justify-content-center.mb-4
      .col.col-lg-8.col-12.mb-md-0.order-lg-2.order-2
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--C03")
          .row(titulo="Solicitud de cambio")
            .col-12.mb-0.mb-md-0
              p Un miembro del equipo, un usuario o el cliente identifica la necesidad de modificar, eliminar o agregar un requisito. Esta solicitud se registra formalmente mediante un documento o herramienta de gestión de requisitos.
          .row(titulo="Análisis del impacto del cambio")
            .col-12.mb-0.mb-md-0
              p El equipo del proyecto analiza cómo afectará la modificación a otros requisitos, al diseño del sistema, al cronograma, a los costos y a los recursos del proyecto.
          .row(titulo="Evaluación y aprobación del cambio")
            .col-12.mb-0.mb-md-0
              p El cambio es evaluado por los responsables del proyecto, quienes determinan si la modificación es viable y si debe ser aprobada, rechazada o pospuesta.
          .row(titulo="Implementación del cambio")
            .col-12.mb-0.mb-md-0
              p Una vez aprobado, el cambio se incorpora en la documentación de requisitos y se realizan los ajustes necesarios en el diseño, desarrollo y pruebas del sistema.
          .row(titulo="Actualización y seguimiento")
            .col-12.mb-0.mb-md-0
              p Se actualizan los documentos y herramientas de gestión de requisitos para mantener la trazabilidad del cambio y asegurar que todos los participantes conozcan la modificación realizada.
      .col.col-lg-4.col-6.col-md-6.col-8.order-lg-1.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema4/img21.png', alt='Imagen decorativa')
    .row.justify-content-center.mb-4
      .col.col-lg-auto.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema4/img22.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-1.order-2
        .cajon.cajon.C05.px-4.py-4
          p.mb-0(data-aos="fade-down") En muchos proyectos de <em>software</em>, especialmente en entornos ágiles, los cambios en los requisitos se gestionan de manera continua mediante reuniones de planificación, revisiones de producto y retroalimentación constante con los usuarios.
    p.mb-0(data-aos="fade-down") Implementar un adecuado control de cambios permite mantener la coherencia del proyecto, reducir riesgos asociados a modificaciones no controladas y garantizar que el <em>software</em> final responda de manera efectiva a las necesidades reales de los usuarios.


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Identificación de requisitos',
        texto:
          'Consiste en reconocer y registrar las necesidades, expectativas y restricciones del sistema a partir de la interacción con clientes, usuarios y demás interesados del proyecto.',
        imagen: require('@/assets/curso/tema4/img02.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Documentación de requisitos',
        texto:
          'Implica describir de manera estructurada los requisitos funcionales y no funcionales utilizando formatos o plantillas que faciliten su comprensión y análisis.',
        imagen: require('@/assets/curso/tema4/img03.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Priorización de requisitos',
        texto:
          'Permite establecer el nivel de importancia de cada requisito, teniendo en cuenta factores como el valor para el negocio, el impacto en el sistema o la complejidad de implementación.',
        imagen: require('@/assets/curso/tema4/img04.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Control de cambios',
        texto:
          'Se refiere al proceso mediante el cual se gestionan las modificaciones a los requisitos, evaluando su impacto en el alcance, el tiempo y los recursos del proyecto.',
        imagen: require('@/assets/curso/tema4/img05.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Trazabilidad de requisitos',
        texto:
          'Permite relacionar cada requisito con los elementos del sistema que lo implementan, así como con las pruebas que verifican su cumplimiento.',
        imagen: require('@/assets/curso/tema4/img06.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Seguimiento y monitoreo',
        texto:
          'Consiste en revisar continuamente el estado de los requisitos para asegurar que se desarrollen conforme a lo planificado y que se mantenga la coherencia entre los diferentes componentes del proyecto.',
        imagen: require('@/assets/curso/tema4/img07.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

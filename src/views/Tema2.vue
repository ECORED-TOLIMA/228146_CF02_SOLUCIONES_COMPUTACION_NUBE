<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Especificación de requisitos de <em>software</em>
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La especificación de requisitos de <em>software</em> es el proceso mediante el cual se documentan de manera clara, estructurada y detallada las funcionalidades, restricciones y características que debe cumplir un sistema. Su propósito es establecer una descripción precisa de lo que se espera del <em>software</em>, permitiendo que todos los involucrados en el proyecto compartan una comprensión común de los objetivos y alcances del sistema.
    .row.justify-content-center.mb-0
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/tema2/img02.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-1.order-2
        p.mb-4(data-aos="fade-down") Durante esta etapa, los requisitos identificados en el proceso de análisis se organizan y formalizan en documentos que sirven como guía para el diseño, desarrollo, pruebas y mantenimiento del <em>software</em>. Una buena especificación contribuye a reducir ambigüedades, evitar interpretaciones incorrectas y facilitar la comunicación entre analistas, desarrolladores, clientes y demás actores del proyecto.
        .cajon.cajon.C02.px-4.py-3
          p.mb-0(data-aos="fade-down") Además, la especificación de requisitos permite establecer criterios claros para evaluar si el sistema desarrollado cumple con las necesidades planteadas inicialmente. Por esta razón, se utilizan diferentes estándares, plantillas y técnicas de documentación que garantizan la calidad, coherencia y trazabilidad de los requisitos a lo largo del ciclo de vida del <em>software</em>.
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Estándares internacionales para la especificación de requisitos
    .row.justify-content-center.align-items-stretch.mb-4.g-0
      .col-lg-7.col-12.order-lg-2.order-2
        .cajon.C01.p-4.h-100.w-100
          .row.mb-2
            .col-lg-3.d-none.d-lg-block
              figure
                img(src='@/assets/curso/tema2/img04.svg', alt='Imagen decorativa')
            .col-lg-9.col-12
              p.mb-0 Los estándares internacionales para la especificación de requisitos establecen lineamientos y buenas prácticas que orientan la forma en que deben documentarse los requisitos de un sistema de <em>software</em>. Su objetivo es garantizar que la información sea clara, completa, consistente y comprensible para todos los actores involucrados en el desarrollo del proyecto.
          p.mb-0 Estos estándares proporcionan estructuras y criterios que facilitan la organización de los requisitos dentro de documentos formales, evitando ambigüedades y mejorando la comunicación entre analistas, desarrolladores, clientes y usuarios. Asimismo, permiten asegurar la calidad de la documentación y facilitar actividades posteriores como el diseño, la implementación, las pruebas y el mantenimiento del sistema.
      .col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-4
        figure
          img(src='@/assets/curso/tema2/img03.jpg', alt='Imagen decorativa')
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12.col-lg-10
        .tarjeta--container.row
          .col-xl.col-lg-6.tarjeta.tarjeta--C02.p-5
            .row.justify-content-center.mb-3
              .col-lg-6.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema2/img05.svg', alt='Imagen decorativa')(style="width: 85%")
            p.mb-0(data-aos="fade-down") Uno de los estándares más utilizados es IEEE 830, el cual define una estructura para la elaboración de la Especificación de Requisitos del <em>software</em> (ERS). Este estándar propone incluir secciones como la descripción general del sistema, los requisitos funcionales, los requisitos no funcionales, las interfaces del sistema y las restricciones del proyecto.
          .col-xl.col-lg-6.tarjeta.tarjeta--C05.p-5
            .row.justify-content-center.mb-3
              .col-lg-6.col-4
                figure(data-aos="fade-up")
                  img(src='@/assets/curso/tema2/img06.svg', alt='Imagen decorativa')(style="width: 85%")
            p.mb-0(data-aos="fade-down") Posteriormente, el estándar ISO/IEC/IEEE 29148 amplía y actualiza estas recomendaciones, proporcionando directrices más completas para la ingeniería de requisitos en el desarrollo de <em>software</em> y sistemas. Este estándar promueve una documentación organizada que facilite la trazabilidad, validación y gestión de los requisitos durante todo el ciclo de vida del <em>software</em>.
    p.mb-0(data-aos="fade-down") El uso de estos estándares permite que los equipos de desarrollo trabajen con documentos estructurados, comparables y fácilmente interpretables, lo que contribuye a mejorar la calidad del <em>software</em> y a reducir errores durante el proceso de desarrollo.
    separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Plantillas ERS (Especificación de Requisitos del <em>software</em>)
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/tema2/img07.jpg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        .cajon.cajon.C01.color-primario.px-4.py-3.mb-4
          p.mb-0(data-aos="fade-down") Las plantillas de Especificación de Requisitos del <em>software</em> (ERS), son formatos estructurados utilizados para documentar de manera organizada todos los requisitos de un sistema de <em>software</em>. Su propósito es establecer una forma clara y uniforme de describir las necesidades del sistema, facilitando la comunicación entre analistas, desarrolladores, clientes y demás participantes del proyecto.
        p.mb-0(data-aos="fade-down") Estas plantillas permiten registrar información relevante sobre el sistema, garantizando que los requisitos sean comprensibles, verificables y trazables a lo largo del ciclo de vida del desarrollo de <em>software</em>. Además, contribuyen a evitar ambigüedades y a mejorar la calidad de la documentación técnica.
    p.mb-4(data-aos="fade-down") Existen diferentes tipos de plantillas ERS que se utilizan según el enfoque metodológico o el estándar adoptado en el proyecto. Algunas de las más utilizadas son:
    .row.justify-content-center.mb-0(data-aos="flip-down")
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema2/img08.svg", alt="alt").img80.m-auto
          h5.text-center Plantilla basada en el estándar IEEE 830
          p Ampliamente utilizada en proyectos tradicionales de desarrollo de <em>software</em>.
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema2/img09.svg", alt="alt").img80.m-auto
          h5.text-center Plantilla basada en el estándar ISO/IEC/IEEE 29148
          p Que actualiza y amplía los lineamientos para la ingeniería de requisitos.
      .col-xl-4.col-lg-8.mb-4.mb-xl-5
        .crd.crd--grayGrad
          .bottomCircle.mb-5
            figure
              img(src="@/assets/curso/tema2/img10.svg", alt="alt").img80.m-auto
          h5.text-center Plantillas simplificadas para metodologías ágiles
          p Que documentan requisitos mediante historias de usuario y criterios de aceptación.
    p.mb-4(data-aos="fade-down") En general, una plantilla ERS suele incluir las siguientes secciones principales:
    .row.mb-4
      .col-12
        .px-5.py-0
          .row.align-items-center.BG01.px-4(data-aos="fade-down")
            .col-lg-4.d-none.d-lg-block
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/tema2/img16.png", alt="Imagen decorativa")
            .col-lg-8.p-5.py-0
              SlyderF.custom.color-acento-botones.p-4(columnas="col-lg-6 col-xl-6")
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema2/img11.svg", alt="Imagen decorativa").img100.m-auto
                  h5 I. Introducción
                  ul.lista-ul.mb-0
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Propósito del documento
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Alcance del sistema
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Definiciones y abreviaturas
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema2/img12.svg", alt="Imagen decorativa").img100.m-auto
                  h5 II. Descripción general del sistema
                  ul.lista-ul.mb-0
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Perspectiva del producto
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Funciones del sistema
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0.text-start Características de los usuarios
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema2/img13.svg", alt="Imagen decorativa").img100.m-auto
                  h5 III. Requisitos específicos
                  ul.lista-ul.mb-0
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Requisitos funcionales
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Requisitos no funcionales
                    li.mb-0
                      i.lista-ul__vineta
                      p.mb-0 Requisitos de interfaz
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema2/img14.svg", alt="Imagen decorativa").img100.m-auto
                  h5 IV. Restricciones del sistema
                .tarjeta.tarjeta--slyder.p-4
                  .row.justify-content-center.mb-3
                    .col-6.col-lg-8
                      img(src="@/assets/curso/tema2/img15.svg", alt="Imagen decorativa").img100.m-auto
                  h5 V. Criterios de aceptación y validación
    p.mb-4(data-aos="fade-down") El uso de estas plantillas permite estandarizar la documentación de requisitos, facilitar su análisis y asegurar que todos los participantes del proyecto tengan una comprensión común de las funcionalidades y características que debe cumplir el sistema.
    .row.justify-content-center.mb-0
      .col.col-lg-auto.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema2/img17.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C05.px-4.py-3
          p.mb-0(data-aos="fade-down") De esta manera, las plantillas ERS se convierten en un instrumento clave dentro del proceso de ingeniería de requisitos, ya que apoyan la organización de la información, fortalecen la comunicación entre los actores del proyecto y sirven como base para las fases posteriores de diseño, desarrollo, pruebas y validación del <em>software</em>.
    separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Técnicas de documentación de requisitos en proyectos tradicionales
    p.mb-4(data-aos="fade-down") En los proyectos de desarrollo de <em>software</em> basados en enfoques tradicionales, la documentación de requisitos se caracteriza por ser formal, estructurada y detallada. Generalmente, los requisitos se definen en las primeras etapas del proyecto y se registran en documentos técnicos que sirven como referencia durante todo el ciclo de desarrollo.
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img18.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Este enfoque busca describir con precisión las funcionalidades del sistema, las restricciones, los requisitos no funcionales y las condiciones que debe cumplir el <em>software</em>. De esta manera, se facilita la planificación del proyecto, se reducen ambigüedades y se asegura que todos los participantes tengan una comprensión clara de lo que se debe desarrollar.
    p.mb-4(data-aos="fade-down") Entre las principales técnicas utilizadas para documentar requisitos en proyectos tradicionales se encuentran:
    .tarjeta.tarjeta--C02.p-4.mb-4
      LineaTiempoC.color-acento-botones(text-small)(data-aos="flip-up")
        .row.py-5.px-4(titulo="a.")
          .col-lg-5.mb-4.mb-md-0.order-lg-2.order-2
            h4 Documento de Especificación de Requisitos del <em>software</em> (ERS)
            p.mb-0 Es el documento formal donde se registran de manera estructurada todos los requisitos del sistema, incluyendo requisitos funcionales, no funcionales, interfaces, restricciones y criterios de aceptación. Este documento sirve como base para el diseño, desarrollo y pruebas del sistema.
          .col-lg-7.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema2/img19.jpg', alt='Imagen decorativa')
        .row.py-5.px-4(titulo="b.")
          .col-lg-5.mb-4.mb-md-0.order-lg-2.order-2
            h4 Diagramas de casos de uso
            p.mb-0 Permiten representar gráficamente las interacciones entre los usuarios (actores) y el sistema. Estos diagramas facilitan la comprensión de las funcionalidades que debe ofrecer el <em>software</em> y ayudan a identificar los diferentes escenarios de uso.
          .col-lg-7.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema2/img20.jpg', alt='Imagen decorativa')
        .row.py-5.px-4(titulo="c.")
          .col-lg-5.mb-4.mb-md-0.order-lg-2.order-2
            h4 Diagramas UML (Lenguaje Unificado de Modelado)
            p.mb-0 Incluyen diferentes tipos de diagramas, como diagramas de clases, secuencia, actividad o componentes. Estas representaciones permiten modelar la estructura y el comportamiento del sistema de manera visual.
          .col-lg-7.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema2/img21.jpg', alt='Imagen decorativa')
        .row.py-5.px-4(titulo="d.")
          .col-lg-5.mb-4.mb-md-0.order-lg-2.order-2
            h4 Modelos funcionales del sistema
            p.mb-0 Describen cómo se procesan los datos dentro del sistema y cómo se relacionan sus diferentes funciones. Pueden representarse mediante diagramas de flujo, diagramas de procesos o modelos de descomposición funcional.
          .col-lg-7.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema2/img22.jpg', alt='Imagen decorativa')
        .row.py-5.px-4(titulo="e.")
          .col-lg-5.mb-4.mb-md-0.order-lg-2.order-2
            h4 Matrices de trazabilidad de requisitos
            p.mb-0 Permiten relacionar los requisitos con otros elementos del proyecto, como casos de uso, módulos del sistema, pruebas o entregables. Esto facilita el seguimiento y la verificación de que todos los requisitos han sido implementados.
          .col-lg-7.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema2/img23.jpg', alt='Imagen decorativa')
    p.mb-0(data-aos="fade-down") La documentación detallada en este tipo de proyectos resulta especialmente útil en sistemas complejos, en proyectos de gran escala o en aquellos donde los requisitos deben mantenerse relativamente estables durante el desarrollo del <em>software</em>.
    separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Técnicas de documentación de requisitos en proyectos ágiles
    .row.justify-content-center.mb-4
      .col.col-lg-6.col-8.col-md-6.order-lg-2.order-1.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/tema2/img24.svg', alt='Imagen decorativa')
      .col.col-lg-6.col-12.order-lg-1.order-2
        p.mb-4(data-aos="fade-down") En los proyectos de desarrollo de <em>software</em> basados en metodologías ágiles, la documentación de requisitos se caracteriza por ser más flexible, ligera y adaptable a los cambios. A diferencia de los enfoques tradicionales, en los que se busca documentar todos los requisitos desde el inicio del proyecto, en los enfoques ágiles los requisitos se refinan y ajustan de manera progresiva durante el desarrollo.
        .cajon.cajon.C01.color-primario.px-4.py-3
          p.mb-0(data-aos="fade-down") Este tipo de documentación prioriza la comunicación constante entre los miembros del equipo y los usuarios del sistema, permitiendo incorporar mejoras o modificaciones conforme se obtienen nuevos aprendizajes sobre las necesidades del producto.
    p.mb-4(data-aos="fade-down") Entre las principales técnicas utilizadas para documentar requisitos en proyectos ágiles se encuentran:
    .row.BG02.justify-content-center.align-items-center.px-3.mb-4(data-aos="flip-up")
      .col-lg-6.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Historias de usuario")
            .col-12.mb-4.mb-md-0
              p.mb-0 Son descripciones breves y sencillas de una funcionalidad del sistema desde la perspectiva del usuario. Suelen redactarse con una estructura simple que describe quién necesita la funcionalidad, qué necesita y con qué propósito, facilitando la comprensión del valor que aporta cada requisito.
          .row(numero="2" titulo="Criterios de aceptación")
            .col-12.mb-4.mb-md-0
              p.mb-0 Son condiciones específicas que deben cumplirse para considerar que una historia de usuario ha sido implementada correctamente. Estos criterios permiten validar que la funcionalidad desarrollada responde a las necesidades definidas por el usuario.
          .row(numero="3" titulo="<em>Product backlog</em>")
            .col-12.mb-4.mb-md-0
              p.mb-0 Es una lista priorizada de todos los requisitos, funcionalidades, mejoras o correcciones que se desean incorporar en el sistema. Este listado se actualiza de manera continua a lo largo del proyecto y sirve como guía para la planificación del trabajo del equipo de desarrollo.
          .row(numero="4" titulo="<em>Sprint backlog</em>")
            .col-12.mb-4.mb-md-0
              p.mb-0 Contiene el conjunto de historias de usuario o tareas que el equipo se compromete a desarrollar durante un ciclo de trabajo corto denominado sprint. Este <em>backlog</em> se define al inicio de cada iteración.
          .row(numero="5" titulo="Tableros de seguimiento del trabajo")
            .col-12.mb-4.mb-md-0
              p.mb-0 Son herramientas visuales que permiten organizar y monitorear el avance de las tareas del equipo. Generalmente se utilizan tableros tipo Kanban donde se visualizan estados como pendiente, en desarrollo y finalizado.
      .col-lg-4.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema2/img25.png', alt='Imagen decorativa')
    p.mb-0(data-aos="fade-down") Estas técnicas permiten mantener una documentación clara y suficiente para el desarrollo del sistema, sin generar una carga excesiva de documentación. De esta forma, se favorece la adaptabilidad del proyecto y la entrega continua de valor al usuario.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
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

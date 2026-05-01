<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Análisis de requisitos de <em>software</em>
    p.mb-4(data-aos="fade-down") El análisis de requisitos de <em>software</em> corresponde al proceso mediante el cual se examinan, organizan y estructuran las necesidades identificadas durante la etapa de levantamiento o elicitación de requisitos. Su propósito es comprender con claridad qué debe hacer el sistema, cómo debe comportarse y qué restricciones o condiciones deben considerarse durante su desarrollo.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p En esta etapa se transforman las necesidades iniciales de los usuarios y de la organización en requisitos claros, coherentes y bien definidos. Para ello, el equipo de trabajo revisa la información obtenida, identifica posibles inconsistencias, elimina ambigüedades y organiza los requisitos de manera lógica, facilitando su comprensión y posterior implementación.
    .row.justify-content-center.mb-0
      .col.col-lg-4.col-8.col-md-6.order-lg-2.order-1.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img02.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-1.order-2
        p.mb-4(data-aos="fade-down") El análisis de requisitos también permite identificar relaciones entre las diferentes funcionalidades del sistema, determinar dependencias entre requisitos y establecer prioridades de desarrollo. Este proceso contribuye a que el equipo de desarrollo tenga una visión estructurada del sistema que se desea construir.
        .cajon.cajon.C02.color-secundario.px-4.py-3.mb-4
          p.mb-0(data-aos="fade-down") Además, el análisis de requisitos favorece la comunicación entre los diferentes actores del proyecto, como usuarios, analistas, desarrolladores y responsables del negocio, ya que proporciona una base común para discutir, ajustar y validar las necesidades del sistema antes de iniciar su construcción.
        p.mb-0(data-aos="fade-down") Para llevar a cabo esta actividad de manera efectiva, la ingeniería de <em>software</em> emplea diversas técnicas y herramientas que permiten organizar, evaluar y estructurar la información obtenida. Entre ellas se destacan la priorización de requisitos, las matrices de trazabilidad y la descomposición funcional, las cuales facilitan la comprensión del alcance del sistema y apoyan la toma de decisiones durante el desarrollo del proyecto.
    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Técnicas de análisis de requisitos
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img03.jpg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C01.color-primario.px-4.py-3.mb-4
          p.mb-0(data-aos="fade-down") Las técnicas de análisis de requisitos permiten examinar, organizar y comprender la información recopilada durante la etapa de elicitación, con el fin de transformar las necesidades de los usuarios en requisitos claros, estructurados y comprensibles para el equipo de desarrollo. Estas técnicas facilitan la identificación de relaciones entre los requisitos, la detección de inconsistencias y la definición del alcance funcional del sistema.
        p.mb-0(data-aos="fade-down") Durante el análisis de requisitos, el equipo de trabajo revisa la información obtenida mediante entrevistas, cuestionarios, talleres o revisión documental, y la estructura de forma que pueda ser utilizada posteriormente en la especificación y diseño del sistema. Este proceso contribuye a reducir ambigüedades y a garantizar que todos los actores del proyecto tengan una comprensión compartida de las funcionalidades esperadas.
    p.mb-4(data-aos="fade-down") Entre las principales técnicas utilizadas en el análisis de requisitos se encuentran:
    .row.justify-content-center.mb-4
      .col.col-lg-8.col-12.mb-md-0.order-lg-1.order-2
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--C03")
          .row(titulo="Identificación y clasificación de requisitos")
            .col-12.mb-0.mb-md-0
              p Consiste en revisar la información obtenida y organizar los requisitos según su tipo, por ejemplo, funcionales, no funcionales o de restricción. Esta clasificación facilita su comprensión y permite establecer una estructura clara para su documentación.
          .row(titulo="Análisis de dependencias entre requisitos")
            .col-12.mb-0.mb-md-0
              p Permite identificar relaciones entre los diferentes requisitos del sistema. Algunos requisitos pueden depender de otros para poder implementarse, por lo que comprender estas relaciones ayuda a planificar adecuadamente el desarrollo del <em>software</em>.
          .row(titulo="Agrupación por funcionalidades o módulos")
            .col-12.mb-0.mb-md-0
              p Esta técnica consiste en organizar los requisitos según las áreas funcionales del sistema, por ejemplo, gestión de usuarios, procesamiento de información, generación de reportes o administración del sistema. De esta manera se facilita la comprensión de cómo se estructura el sistema.
          .row(titulo="Modelado de procesos o funcionalidades")
            .col-12.mb-0.mb-md-0
              p Se utilizan representaciones gráficas o diagramas para visualizar cómo interactúan los diferentes componentes del sistema o cómo se ejecutan ciertos procesos. Estas representaciones ayudan a comprender mejor el funcionamiento esperado del sistema.
          .row(titulo="Análisis de viabilidad técnica y organizacional")
            .col-12.mb-0.mb-md-0
              p En esta técnica se evalúa si los requisitos identificados pueden desarrollarse con los recursos disponibles, considerando aspectos técnicos, económicos y organizacionales. Este análisis permite ajustar los requisitos antes de iniciar el desarrollo del sistema.
      .col.col-lg-4.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema1/img04.png', alt='Imagen decorativa')
    p.mb-0(data-aos="fade-down") La aplicación de estas técnicas permite obtener una visión estructurada del sistema que se desea construir, facilitando la toma de decisiones durante el desarrollo del proyecto y contribuyendo a que los requisitos estén correctamente definidos antes de su especificación formal.
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Priorización de requisitos
    p.mb-4(data-aos="fade-down") La priorización de requisitos corresponde al proceso mediante el cual se establece el orden de importancia de los requisitos identificados para el sistema. Este proceso permite determinar cuáles funcionalidades deben desarrollarse primero y cuáles pueden implementarse en etapas posteriores del proyecto.
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img05.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        p.mb-3(data-aos="fade-down") En el desarrollo de <em>software</em>, no todos los requisitos tienen el mismo nivel de importancia. Algunos son esenciales para el funcionamiento del sistema, mientras que otros representan mejoras o funcionalidades adicionales. Por esta razón, la priorización facilita la toma de decisiones cuando existen limitaciones de tiempo, presupuesto o recursos técnicos.
        .cajon.cajon.C02.color-secundario.px-4.py-3.mb-0
          p.mb-0(data-aos="fade-down") La priorización de requisitos se realiza generalmente con la participación de diferentes actores del proyecto, como usuarios, clientes, analistas y equipo de desarrollo, quienes evalúan la importancia de cada requisito según su impacto en el negocio, el valor que aporta al usuario y la viabilidad de implementación.
    p.mb-4(data-aos="fade-down") Entre los criterios que suelen utilizarse para priorizar requisitos se encuentran:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema1/img06.svg' alt='AvatarTop')
          h4.text-center Valor para el negocio
          p Determina qué tan importante es el requisito para cumplir los objetivos del sistema o de la organización.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema1/img07.svg' alt='AvatarTop')
          h4.text-center Dependencias entre requisitos
          p Algunos requisitos dependen de otros para poder implementarse, por lo que su prioridad puede verse influenciada por estas relaciones.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema1/img08.svg' alt='AvatarTop')
          h4.text-center Impacto en el usuario
          p Identifica qué funcionalidades aportan mayor beneficio o utilidad para los usuarios finales.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema1/img09.svg' alt='AvatarTop')
          h4.text-center Complejidad de implementación
          p Analiza el nivel de esfuerzo técnico requerido para desarrollar el requisito.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema1/img10.svg' alt='AvatarTop')
          h4.text-center Riesgo del proyecto
          p Ciertos requisitos pueden implicar mayores riesgos técnicos o de integración, por lo que pueden abordarse en etapas tempranas para reducir incertidumbres.
    p.mb-4(data-aos="fade-down") Una de las técnicas más utilizadas para priorizar requisitos consiste en clasificarlos según su nivel de importancia.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Ejemplo de clasificación de requisitos según prioridad
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Nivel de prioridad
                th(data-aos="fade-down")(style= "width: 80%") Descripción
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Alta
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Requisitos indispensables para el funcionamiento del sistema. Deben implementarse en las primeras etapas del desarrollo.
              tr
                td(data-aos="fade-down") Media
                td(data-aos="fade-down") Requisitos importantes que aportan valor al sistema, pero que pueden desarrollarse después de los requisitos críticos.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Baja
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Requisitos opcionales o mejoras que pueden incorporarse en futuras versiones del sistema.
    p.mb-0(data-aos="fade-down") La correcta priorización de requisitos permite planificar de manera más eficiente el desarrollo del <em>software</em>, optimizar el uso de los recursos disponibles y asegurar que las funcionalidades más importantes del sistema se implementen en las primeras etapas del proyecto.
    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Matrices de trazabilidad
    p.mb-4(data-aos="fade-down") Las matrices de trazabilidad son herramientas utilizadas en la gestión de requisitos que permiten establecer relaciones entre los diferentes elementos del proyecto de <em>software</em>. Su propósito principal es garantizar que todos los requisitos definidos sean considerados durante las distintas etapas del desarrollo y que cada uno de ellos esté correctamente implementado, probado y validado.
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/img11.jpg', alt='Imagen decorativa')
      .col.col-lg-6.col-12.order-lg-2.order-2
        p.mb-2(data-aos="fade-down") La trazabilidad facilita el seguimiento de los requisitos desde su origen hasta su implementación final en el sistema. De esta manera, es posible identificar cómo cada requisito se relaciona con actividades de diseño, desarrollo, pruebas y validación. Esto permite verificar que ningún requisito sea omitido y que todas las funcionalidades del sistema correspondan a necesidades previamente definidas.
        .cajon.cajon.C01.color-primario.px-4.py-3.mb-4
          p.mb-0(data-aos="fade-down") Además, la matriz de trazabilidad resulta útil para gestionar cambios en los requisitos. Cuando se modifica o se elimina un requisito, la matriz permite identificar rápidamente qué componentes del sistema podrían verse afectados, lo que contribuye a reducir errores y facilitar la toma de decisiones durante el desarrollo.
    p.mb-4(data-aos="fade-down") Entre los principales beneficios de utilizar matrices de trazabilidad se encuentran:
    .row.justify-content-center.align-items-strench.mb-4.g-0
      .col-lg-7.col-12.order-lg-1.order-2
        .cajon.C02.p-4.d-flex.h-100.align-items-center
          ol.lista-ol--cuadro.lista-ol--separador.mb-0
            li
              .lista-ol--cuadro__vineta
                span.text-bold 1
              | Permiten verificar que todos los requisitos estén implementados en el sistema.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 2
              | Facilitan el seguimiento de los requisitos a lo largo del ciclo de vida del <em>software</em>.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 3
              | Apoyan el control de cambios en los requisitos del proyecto.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 4
              | Mejoran la organización y documentación del desarrollo del <em>software</em>.
            li
              .lista-ol--cuadro__vineta
                span.text-bold 5
              | Contribuyen a asegurar la calidad del sistema desarrollado.
      .col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-lg-0.mb-4
        figure.mb-0
          img(src='@/assets/curso/tema1/img12.svg', alt='Imagen decorativa')
    p.mb-4(data-aos="fade-down") Una matriz de trazabilidad suele organizarse en forma de tabla, donde se relacionan los requisitos con diferentes elementos del proyecto.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col.col-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Ejemplo de matriz de trazabilidad de requisitos
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") ID del requisito
                th(data-aos="fade-down")(style= "width: 20%") Descripción del requisito
                th(data-aos="fade-down")(style= "width: 20%") Módulo del sistema
                th(data-aos="fade-down")(style= "width: 20%") Caso de prueba
                th(data-aos="fade-down")(style= "width: 20%") Estado
            tbody
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") RQ-01
                td(data-aos="fade-down")(style="background-color: #F0F8FF") El usuario debe poder registrarse en la plataforma.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Módulo de usuarios.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") CP-01 Registro de usuario.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Implementado.
              tr
                td(data-aos="fade-down") RQ-02
                td(data-aos="fade-down") El sistema debe permitir iniciar sesión.
                td(data-aos="fade-down") Módulo de autenticación.
                td(data-aos="fade-down") CP-02 Inicio de sesión.
                td(data-aos="fade-down") En desarrollo.
              tr
                td(data-aos="fade-down")(style="background-color: #F0F8FF") RQ-03
                td(data-aos="fade-down")(style="background-color: #F0F8FF") El usuario puede recuperar su contraseña.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Módulo de seguridad.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") CP-03 Recuperación de contraseña.
                td(data-aos="fade-down")(style="background-color: #F0F8FF") Pendiente.
              tr
                td(data-aos="fade-down") RQ-04
                td(data-aos="fade-down") El sistema debe generar reportes de uso.
                td(data-aos="fade-down") Módulo de reportes.
                td(data-aos="fade-down") CP-04 Generación de reportes.
                td(data-aos="fade-down") Implementado.
    p.mb-0(data-aos="fade-down") La matriz de trazabilidad constituye un instrumento fundamental para asegurar la coherencia entre los requisitos del sistema y las actividades realizadas durante el desarrollo del <em>software</em>. Su utilización permite mantener un control claro sobre el avance del proyecto y facilita los procesos de verificación y validación del sistema.
    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Descomposición funcional
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img13.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p La descomposición funcional es una técnica de análisis de requisitos que consiste en dividir un sistema o proceso complejo en funciones más pequeñas y manejables. Este enfoque permite comprender de manera organizada las actividades que debe realizar el sistema, facilitando la identificación de requisitos, la asignación de responsabilidades y la estructuración lógica de las funcionalidades.
    p.mb-4(data-aos="fade-down") A través de la descomposición funcional se parte de una función general del sistema y se subdivide progresivamente en subfunciones o tareas específicas. Este proceso ayuda a clarificar el alcance del sistema, identificar dependencias entre procesos y facilitar el diseño posterior del <em>software</em>.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C02.color-secundario.px-4.py-3
          p.mb-0(data-aos="fade-down") En el análisis de requisitos, esta técnica permite representar de forma estructurada las operaciones que el sistema debe ejecutar, lo que contribuye a mejorar la comunicación entre analistas, desarrolladores y demás interesados en el proyecto.
    .row.justify-content-center.mb-4
      .col.col-12
        .row.align-items-center(data-aos="flip-down")
          .col-auto.pe-0(style="z-index:2")
            figure
              img(src='@/assets/curso/ico.svg', style="width: 55px" ,alt='').m-auto
          .col-lg-auto.col-9.titulo01(style="z-index:1")
            .p-2
              h3.mb-0.ms-3 Ejemplo de descomposición funcional
    p.mb-4(data-aos="fade-down") En un sistema de gestión de biblioteca, la función principal puede ser gestionar préstamos de libros. Esta función se divide en varias subfunciones que permiten cumplir con el proceso completo.
    .row.justify-content-center.mb-4(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span Descomposición funcional
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/tema1/img14.svg', alt='En la figura 1 se presenta un mapa conceptual sobre la descomposición funcional en un sistema de gestión de biblioteca. La función principal es gestionar préstamos de libros, la cual se descompone en subfunciones como registrar usuario, consultar disponibilidad de libros, registrar préstamo en el sistema, registrar devolución y generar historial de préstamos.')
      .col-12
        figure.movil
          img(src='@/assets/curso/tema1/img15.svg', alt='En la figura 1 se presenta un mapa conceptual sobre la descomposición funcional en un sistema de gestión de biblioteca. La función principal es gestionar préstamos de libros, la cual se descompone en subfunciones como registrar usuario, consultar disponibilidad de libros, registrar préstamo en el sistema, registrar devolución y generar historial de préstamos.')
    p.mb-0(data-aos="fade-down") En este esquema se presenta como una función principal se divide en funciones más específicas, lo que facilita comprender la estructura del sistema y definir con mayor precisión los requisitos funcionales.

</template>

<script>
export default {
  name: 'Tema1',
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

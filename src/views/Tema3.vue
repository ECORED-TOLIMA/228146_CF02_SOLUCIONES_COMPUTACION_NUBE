<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Validación de requisitos de <em>software</em>
    p.mb-4(data-aos="fade-down") La validación de requisitos de <em>software</em> es el proceso mediante el cual se verifica que los requisitos definidos para un sistema reflejen correctamente las necesidades y expectativas de los usuarios y demás interesados del proyecto. Su propósito es asegurar que el sistema que se desarrollará responda de manera adecuada a los objetivos del negocio y a los problemas que se desean resolver.
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema3/img01.jpg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-2.order-2
        .row.mb-3
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/tema3/img02.svg', alt='Imagen decorativa')
          .col-lg-10.col-12
            p.mb-0 Este proceso permite identificar inconsistencias, ambigüedades, omisiones o errores en la documentación de requisitos antes de iniciar o continuar con las etapas de diseño y desarrollo del <em>software</em>. De esta manera, se reducen riesgos, retrabajos y costos asociados a modificaciones tardías dentro del ciclo de vida del proyecto.
        .cajon.cajon.C01.color-primario.px-4.py-3
          p.mb-0(data-aos="fade-down") La validación de requisitos se realiza mediante diferentes criterios y técnicas que facilitan el análisis de la información documentada y permiten confirmar que los requisitos sean claros, completos, consistentes y verificables. Para ello, es común involucrar a diferentes participantes del proyecto, como analistas, desarrolladores, usuarios finales y responsables del negocio.
    p.mb-0(data-aos="fade-down") En este contexto, la validación se convierte en una actividad fundamental dentro de la ingeniería de requisitos, ya que contribuye a garantizar la calidad del <em>software</em> y a asegurar que el producto final cumpla con las funcionalidades y características esperadas. En los siguientes apartados se presentan los principales criterios, técnicas y mecanismos utilizados para llevar a cabo la validación de requisitos de <em>software</em>.
    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Criterios de validación de requisitos
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img03.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") Los criterios de validación de requisitos corresponden a un conjunto de características que permiten evaluar si los requisitos definidos para un sistema de <em>software</em> están correctamente formulados y cumplen con las condiciones necesarias para ser utilizados durante el proceso de desarrollo. Estos criterios facilitan verificar que los requisitos representen adecuadamente las necesidades del usuario y que puedan implementarse, probarse y mantenerse de manera efectiva.
    p(data-aos="fade-down") Aplicar criterios de validación permite detectar problemas en la documentación de requisitos antes de que el sistema sea construido, lo cual reduce errores, retrabajos y costos durante las etapas posteriores del proyecto.
    p.mb-4(data-aos="fade-down") Entre los criterios más utilizados para validar requisitos de <em>software</em> se encuentran los siguientes:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      SlyderF.color-acento-botones(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema3/img04.svg' alt='AvatarTop')
          h4.text-center Claridad
          p Un requisito debe estar redactado de forma comprensible, evitando ambigüedades o interpretaciones múltiples. Todas las personas involucradas en el proyecto deben poder entenderlo de la misma manera.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema3/img05.svg' alt='AvatarTop')
          h4.text-center Viabilidad o factibilidad
          p El requisito debe poder implementarse con los recursos, tecnologías, tiempo y presupuesto disponibles para el proyecto.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema3/img06.svg' alt='AvatarTop')
          h4.text-center Completitud
          p El requisito debe contener toda la información necesaria para describir la funcionalidad o característica del sistema. Esto incluye condiciones, restricciones y comportamientos esperados.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema3/img07.svg' alt='AvatarTop')
          h4.text-center Verificabilidad
          p El requisito debe formularse de manera que sea posible comprobar su cumplimiento mediante pruebas, revisiones o demostraciones del sistema.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema3/img08.svg' alt='AvatarTop')
          h4.text-center Consistencia
          p Los requisitos no deben contradecirse entre sí. Cada requisito debe ser coherente con los demás y con los objetivos generales del sistema.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema3/img09.svg' alt='AvatarTop')
          h4.text-center Trazabilidad
          p Cada requisito debe poder relacionarse con su origen, como una necesidad del usuario, una normativa o un objetivo del negocio. Asimismo, debe ser posible rastrear su relación con el diseño, el desarrollo y las pruebas del sistema.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema3/img10.svg' alt='AvatarTop')
          h4.text-center Corrección o validez
          p El requisito debe representar una necesidad real del usuario o del negocio. Para ello, se valida con los interesados del proyecto con el fin de confirmar que lo documentado corresponde a lo que realmente se necesita.
        .tarjeta.tarjeta--C02.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/tema3/img11.svg' alt='AvatarTop')
          h4.text-center Prioridad
          p Los requisitos deben tener un nivel de importancia o prioridad definido, lo que permite organizar su implementación y facilitar la toma de decisiones durante el desarrollo del proyecto.
    p.mb-0(data-aos="fade-down") La aplicación sistemática de estos criterios permite mejorar la calidad de la documentación de requisitos y asegurar que el sistema de <em>software</em> que se desarrolle responda de manera adecuada a las necesidades de los usuarios y de la organización.
    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Técnicas de validación de requisitos
    .row.justify-content-center.mb-4
      .col.col-lg-5.col-8.col-md-6.order-lg-2.order-1.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/tema3/img12.svg', alt='Imagen decorativa')
      .col.col-lg-7.col-12.order-lg-1.order-2
        p.mb-3(data-aos="fade-down") La validación de requisitos comprende el conjunto de técnicas utilizadas para verificar que los requisitos definidos para un sistema de <em>software</em> representen correctamente las necesidades de los usuarios, sean comprensibles y puedan implementarse de manera efectiva. Estas técnicas permiten identificar inconsistencias, ambigüedades o errores en la documentación antes de iniciar el desarrollo, lo que contribuye a mejorar la calidad del sistema y a reducir riesgos durante el proyecto.
        .cajon.cajon.C01.color-primario.px-4.py-3.mb-3
          p.mb-0(data-aos="fade-down") Las técnicas de validación pueden aplicarse en diferentes momentos del proceso de ingeniería de requisitos y generalmente involucran la participación de analistas, desarrolladores, usuarios y otros interesados del proyecto.
        p.mb-0(data-aos="fade-down") Entre las técnicas más utilizadas para la validación de requisitos se encuentran las siguientes:
    .tarjeta.tarjeta--BG03.p-md-5.p-4.mb-4(data-aos="flip-down")
      .tarjeta.tarjeta--blanca.p-4.p-md-5
        PasosB.color-acento-botones 
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-2.order-2
              h4 Revisión de requisitos
              p Consiste en la lectura y análisis sistemático de los requisitos por parte de los miembros del equipo del proyecto y de los interesados. Durante esta revisión se identifican errores, inconsistencias o requisitos incompletos. Este proceso permite asegurar que los requisitos estén correctamente documentados y alineados con los objetivos del sistema.
            .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema3/img13.jpg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-2.order-2
              h4 Inspecciones formales
              p Son evaluaciones estructuradas realizadas por un grupo de especialistas que analizan detalladamente la documentación de requisitos. Este proceso sigue procedimientos definidos y roles específicos, como moderador, autor y revisores, con el fin de detectar defectos en los requisitos antes de avanzar a las siguientes etapas del desarrollo.
            .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema3/img14.jpg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-2.order-2
              h4 Entrevistas con usuarios y partes interesadas
              p A través del diálogo directo con los usuarios o interesados del proyecto se verifica si los requisitos documentados reflejan adecuadamente sus necesidades y expectativas. Esta técnica permite aclarar dudas, ampliar información y validar la pertinencia de los requisitos definidos.
            .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema3/img15.jpg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-2.order-2
              h4 Prototipado
              p Consiste en la construcción de representaciones preliminares del sistema, como interfaces o modelos funcionales, que permiten a los usuarios visualizar cómo funcionará el sistema. Los prototipos facilitan la retroalimentación de los usuarios y ayudan a validar si los requisitos cumplen con sus expectativas.
            .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema3/img16.jpg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-2.order-2
              h4 Casos de uso y escenarios
              p El análisis de casos de uso y escenarios de interacción permite comprobar si los requisitos describen correctamente el comportamiento esperado del sistema frente a distintas situaciones. Esta técnica ayuda a identificar omisiones o inconsistencias en los requisitos funcionales.
            .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema3/img17.jpg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-2.order-2
              h4 Listas de verificación (<em>checklists</em>)
              p Se utilizan listas de criterios previamente definidos para revisar cada requisito y verificar si cumple con características como claridad, consistencia, completitud y verificabilidad. Esta técnica facilita realizar evaluaciones sistemáticas y estandarizadas.
            .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/tema3/img18.jpg', alt='Imagen decorativa')
    p.mb-0(data-aos="fade-down") La aplicación combinada de estas técnicas permite mejorar la calidad de los requisitos documentados, asegurar su comprensión por parte de los diferentes actores del proyecto y garantizar que el sistema de <em>software</em> responda de manera adecuada a las necesidades planteadas por los usuarios y la organización.
    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Revisiones, auditorías y prototipos
    p.mb-4(data-aos="fade-down") La validación de requisitos de <em>software</em> también se apoya en mecanismos estructurados que permiten examinar de manera sistemática la documentación generada durante el proceso de ingeniería de requisitos. Entre estos mecanismos se destacan las revisiones, las auditorías y el uso de prototipos, los cuales contribuyen a garantizar que los requisitos sean correctos, completos y coherentes con las necesidades del sistema.
    TabsC.color-acento-botones.mb-4(data-aos="flip-up")
      .py-3.py-md-4(titulo="Revisiones de requisitos")
        .row.justify-content-center.p-4
          .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema3/img19.jpg', alt='Imagen decorativa')
          .col-lg-6.order-lg-2.order-2
            p Las revisiones consisten en el análisis detallado de la documentación de requisitos por parte de los miembros del equipo de desarrollo y otros actores involucrados en el proyecto, como analistas, líderes técnicos o usuarios representantes. Durante este proceso se examina la claridad, consistencia, viabilidad y pertinencia de los requisitos documentados. Las revisiones permiten detectar errores, ambigüedades o duplicidades en etapas tempranas del proyecto, lo que facilita realizar correcciones oportunas antes de iniciar el desarrollo del sistema.
      .py-3.py-md-4(titulo="Auditorías de requisitos")
        .row.justify-content-center.p-4
          .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema3/img20.jpg', alt='Imagen decorativa')
          .col-lg-6.order-lg-2.order-2
            p Las auditorías corresponden a evaluaciones formales que se realizan para verificar que los requisitos definidos cumplan con estándares, metodologías y lineamientos establecidos por la organización o por modelos de calidad de <em>software</em>. Generalmente son realizadas por personal independiente del equipo que elaboró los requisitos, con el fin de garantizar objetividad en la evaluación. Las auditorías permiten comprobar la trazabilidad de los requisitos, su correcta documentación y su alineación con los objetivos del proyecto.
      .py-3.py-md-4(titulo="Prototipos")
        .row.justify-content-center.p-4
          .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/tema3/img21.jpg', alt='Imagen decorativa')
          .col-lg-6.order-lg-2.order-2
            p El prototipado consiste en la elaboración de representaciones preliminares del sistema que permiten visualizar su funcionamiento antes de su implementación definitiva. Estos prototipos pueden presentarse como bocetos de interfaces, modelos interactivos o simulaciones parciales del sistema. Su principal objetivo es facilitar la interacción con los usuarios para validar si los requisitos definidos responden a sus expectativas y necesidades reales. A través de la retroalimentación obtenida durante el uso del prototipo, es posible ajustar o redefinir requisitos que no resulten adecuados o que requieran mayor precisión.
    p.mb-0(data-aos="fade-down") El uso de revisiones, auditorías y prototipos fortalece el proceso de validación de requisitos, ya que permite evaluar la calidad de la información documentada desde diferentes perspectivas y con distintos niveles de formalidad, contribuyendo así al desarrollo de sistemas de <em>software</em> más confiables y alineados con los objetivos del proyecto.
    separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Manual de usuario como mecanismo de validación
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img22.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0(data-aos="fade-down") El manual de usuario constituye un documento fundamental dentro del proceso de validación de requisitos de <em>software</em>, ya que describe de manera clara y detallada cómo debe utilizarse el sistema desde la perspectiva del usuario final. Su elaboración permite verificar que las funcionalidades definidas en los requisitos se encuentren correctamente implementadas y que el sistema responda a las necesidades y expectativas de quienes lo utilizarán.
    .row.justify-content-center.mb-4
      .col.col-lg-auto.col-8.col-md-6.order-lg-1.order-1.mb-lg-0.mb-3
        figure
          img(src='@/assets/curso/tema3/img23.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        p.mb-0(data-aos="fade-down") Durante la elaboración del manual de usuario se revisan las funcionalidades del sistema, los procesos que debe ejecutar el usuario y las condiciones necesarias para su correcto funcionamiento. Este proceso facilita identificar inconsistencias entre los requisitos definidos y el comportamiento real del sistema, lo que convierte al manual en una herramienta útil para validar la correcta interpretación de los requisitos.
    .row.justify-content-center.mb-4
      .col.col-lg-10.col-12
        .cajon.cajon.C02.color-secundario.px-4.py-3
          p.mb-0(data-aos="fade-down") Además, el manual de usuario contribuye a mejorar la comprensión del sistema, ya que traduce los requisitos técnicos en instrucciones claras y comprensibles para los usuarios finales, permitiendo confirmar que las funcionalidades del sistema son intuitivas, coherentes y adecuadas para su contexto de uso.
    p.text-center.mb-4(data-aos="fade-down") En general, un manual de usuario suele organizarse en las siguientes secciones:
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-6.col-12.mb-md-0.order-lg-1.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="1" titulo="Introducción")
            .col-12.mb-4.mb-md-0
              p.mb-0 Presenta el propósito del manual, el público al que está dirigido y una descripción general del sistema.
          .row(numero="2" titulo="Descripción general del sistema")
            .col-12.mb-4.mb-md-0
              p.mb-0 Explica las principales funcionalidades del sistema y el contexto en el que será utilizado.
          .row(numero="3" titulo="Requisitos para el uso del sistema")
            .col-12.mb-4.mb-md-0
              p.mb-0 Describe las condiciones técnicas necesarias para utilizar el sistema, como hardware, <em>software</em> o configuraciones específicas.
          .row(numero="4" titulo="Acceso al sistema")
            .col-12.mb-4.mb-md-0
              p.mb-0 Indica los procedimientos para ingresar al sistema, incluyendo autenticación o creación de usuarios.
      .col-lg-4.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/img24.svg', alt='Imagen decorativa')
    .row.justify-content-center.align-items-center.mb-4(data-aos="flip-up")
      .col-lg-6.col-12.mb-md-0.order-lg-2.order-2.mb-lg-0
        LineaTiempoD.color-acento-botones.especial
          .row(numero="5" titulo="Descripción de funcionalidades")
            .col-12.mb-4.mb-md-0
              p.mb-0 Explica paso a paso las operaciones que puede realizar el usuario dentro del sistema, generalmente acompañadas de instrucciones claras y ordenadas.
          .row(numero="6" titulo="Procedimientos de uso")
            .col-12.mb-4.mb-md-0
              p.mb-0 Presenta guías o secuencias de acciones que el usuario debe seguir para realizar tareas específicas dentro del sistema.
          .row(numero="7" titulo="Manejo de errores o problemas comunes")
            .col-12.mb-4.mb-md-0
              p.mb-0 Describe posibles errores o dificultades que pueden presentarse y las recomendaciones para solucionarlos.
          .row(numero="8" titulo="Glosario o términos técnicos")
            .col-12.mb-4.mb-md-0
              p.mb-0 Incluye definiciones de términos utilizados en el sistema para facilitar la comprensión del usuario.
      .col-lg-4.col-sm-4.col-5.order-lg-1.order-1.mb-lg-0.mb-4.d-none.d-lg-block
        figure
          img(src='@/assets/curso/tema3/img25.svg', alt='Imagen decorativa')
    p.mb-0(data-aos="fade-down") De esta manera, el manual de usuario no solo funciona como una guía para la utilización del sistema, sino también como un mecanismo que permite verificar si las funcionalidades desarrolladas cumplen con los requisitos definidos durante la etapa de análisis.

</template>

<script>
export default {
  name: 'Tema3',
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

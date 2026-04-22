<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-4(data-aos="fade-down") El desarrollo de <em>software</em> requiere comprender con precisión las necesidades del usuario y del negocio antes de construir una solución tecnológica. En este contexto, el análisis, la especificación y la validación de requisitos se convierten en actividades fundamentales dentro de los proyectos de ingeniería de <em>software</em>, ya que permiten identificar, documentar y verificar las características que debe cumplir el sistema.
    .row.justify-content-center.mb-4
      .col.col-lg-4.col-8.col-md-6.order-lg-1.order-1.mb-3.mb-lg-0
        figure
          img(src='@/assets/curso/intro/img01.svg', alt='Imagen decorativa')
      .col.col-lg-8.col-12.order-lg-2.order-2
        .cajon.cajon.C01.color-primario.px-4.py-3.mb-3
          p.mb-0(data-aos="fade-down") Este componente formativo aborda las técnicas utilizadas para analizar requisitos, incluyendo la priorización, las matrices de trazabilidad y la descomposición funcional, herramientas que permiten organizar y comprender de manera estructurada las funcionalidades del sistema. Asimismo, se presentan los fundamentos para la especificación de requisitos, considerando estándares internacionales y el uso de plantillas de Especificación de Requisitos del <em>software</em> (ERS), junto con técnicas de documentación aplicadas tanto en metodologías tradicionales como en enfoques ágiles.
        p.mb-3(data-aos="fade-down") Igualmente, se estudian los criterios y técnicas de validación de requisitos, orientados a garantizar que los requisitos definidos sean claros, completos, consistentes y viables antes de su implementación. Finalmente, se analizan aspectos relacionados con la gestión de requisitos en proyectos de <em>software</em>, incluyendo los contratos de <em>software</em> y el uso de herramientas especializadas para su administración.
        .row.mb-4
          .col-lg-2.d-none.d-lg-block
            figure
              img(src='@/assets/curso/intro/img02.svg', alt='Imagen decorativa')
          .col-lg-10.col-12
            .cajon.cajon.C03.px-4.py-3
              p.mb-0 El estudio de estos elementos permite fortalecer la calidad del proceso de desarrollo, mejorar la comunicación entre los actores del proyecto y reducir riesgos asociados a requisitos incompletos o mal definidos.
    p.mb-4(data-aos="fade-down") Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:
    .row.justify-content-center.align-items-center           
      .col.col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/sdHDf9hFABw?si=5drasZJfF7DWfbKv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
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

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo contiene el análisis, la especificación, la validación y la gestión de requisitos en proyectos de desarrollo de <em>software</em>. Se estudian técnicas para analizar y priorizar requisitos, el uso de matrices de trazabilidad y la descomposición funcional. Además, se presentan estándares internacionales y plantillas ERS para documentar requisitos en enfoques tradicionales y ágiles. Finalmente, se analizan los criterios y técnicas de validación, el uso de revisiones, auditorías, prototipos y manuales de usuario, así como herramientas y estrategias para la gestión y control de cambios en los requisitos durante el ciclo de vida del <em>software</em>.
    .row.justify-content-center
      .col.col-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="En la síntesis se presenta un esquema de los principales contenidos del componente formativo, describiendo la relación entre el análisis, la especificación, la validación y la gestión de requisitos en el desarrollo de <em>software</em>, así como las técnicas, herramientas y estándares utilizados para documentar, verificar y controlar los requisitos durante el ciclo de vida del proyecto.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

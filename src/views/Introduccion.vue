<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-primario
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .col-xl-10.mx-auto
      .cajon.color-primario.p-4.d-flex.flex-wrap(data-aos="fade-right" style="background-color: #FFE8CE")
        .col-md-11.ps-lg-4
          p Conocer los diversos parámetros y procesos en la producción es de vital importancia, pero es aún más importante conocer a cabalidad las diferentes especies con las que se está tratando, para que de esta manera se puedan establecer condiciones propicias, indicadores y medidas que permitan tener un manejo más eficiente en la unidad o granja, lo cual se verá reflejado directamente en una mejor productividad y desde luego en una menor inversión.
          p Para la elaboración de este componente, se abordaron varios autores conocidos en producción de aves, carne, huevo y bienestar animal, de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo tanto, es para ser usado por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos de la gestión de granjas avícolas. 
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

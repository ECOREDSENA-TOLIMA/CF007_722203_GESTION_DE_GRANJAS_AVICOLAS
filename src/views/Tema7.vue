<template lang="pug">
.curso-main-container.pb-3.tema7
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Variables ambientales

    img.mb-4(src="@/assets/curso/temas/tema7/img-1.png")

    .cajon-b.color-acento-botones.p-3
      p Existen algunos factores medioambientales de importancia, que pueden llegar a influir en la producción de aves de corral, en la construcción de los galpones, en el manejo de las aves, en el bienestar, la etología y la conversión; asimismo, pueden ser fuente o causa de enfermedades y disminución de la producción, entre otros.  

    Separador 

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_7_1 7.1. Temperatura

    .row.mb-5
      .col-12.col-md-5.mb-3.mb-md-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema7/img-2.png', alt='Texto que describa la imagen')
      .col-12.col-md-7(data-aos="fade-left")
        p La temperatura ideal dentro del galpón oscila entre los 15 y los 20 °C, donde las aves se sienten confortables y se desarrollan las mejores condiciones productivas.
        p <strong>Temperaturas bajas:</strong> debe hacerse un buen uso de las cortinas, así como de la construcción de paredes altas en el galpón y, en caso de ser necesario, utilizar calefactores que propicien temperaturas adecuadas para la producción de las parvadas.
        p <strong>Temperaturas altas:</strong> el diseño del galpón debe ser de muros bajos y ventanas, o sin muro. El manejo de las cortinas es importante y, de ser necesario, se debe contar con extractores que permitan bajar la temperatura y liberar el calor.
    
    .col-xl-12.mx-auto
      .cajon.color-primario.p-4.d-flex.flex-wrap(data-aos="fade-right" style="background-color: #FFE8CE")
        .col-md-12.ps-lg-4
          p En el control de la temperatura, además, se debe tener en cuenta que las aves son poiquilotermas cuando son pequeñas, y su temperatura es de alrededor de 37.5 ºC, hasta más o menos la tercera semana, en que se estabiliza. Al ser un ave adulta, alcanza una temperatura normal del cuerpo de alrededor de 41 °C. De ahí la importancia de proporcionar una temperatura adecuada a los pollitos, para no afectar el rendimiento y el crecimiento, o incluso producir una alta tasa de mortalidad.

    Separador 

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_7_2 7.2. Humedad

    .row
      .cajon-b.color-acento-contenido.p-3.mb-4
        .d-flex.flex-wrap.mb-5
          .col-xl-6.pe-xl-4.d-flex.flex-wrap.align-items-center.order-2.order-xl-1(data-aos="fade-right")
            p La capacidad del aire para mantener la humedad depende de su temperatura. En este sentido, el aire tibio puede contener más humedad que el aire frío. El término humedad relativa se refiere al porcentaje de saturación de agua en el aire a cualquier temperatura dada. El nivel de humedad influye en la capacidad del ave para enfriarse mediante el jadeo, e influye en la producción de amoníaco.
            p Se recomienda que la humedad relativa se mantenga entre 50 a 75% durante todo el período de crecimiento, incluso en el período de crianza. La producción de amoníaco se da debido a la descomposición microbiológica de materia fecal en la cama. (Fairchild, 2012). El exceso de humedad puede ser ocasionado por el clima en el exterior del galpón, la concentración y el tamaño de las aves, la deficiente ventilación, el exceso de agua en los bebederos y la evaporación de las deyecciones.
          img.mb-4.mb-xl-0.col-xl-6.mx-auto.order-1.order-xl-2(src="@/assets/curso/temas/tema7/img-3.png" data-aos="fade-right")

    Separador 

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_7_3 7.3 Ventilación

    p.mb-5 La ventilación se necesita con el fin de regular la temperatura y controlar gases como el dióxido de carbono, el amoníaco, la humedad, el polvo y los olores. La forma correcta de hacerlo es introduciendo aire fresco uniformemente, permitiendo que esté bien mezclado con aire del galpón y que se distribuya correctamente, antes de salir hacia el exterior. Los galpones con pobre ventilación son proclives a que las aves sufran de afecciones respiratorias e irritación ocular.

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Figura 22.
        span <em>Ventilación</em>
      img.d-md-block.mb-3(src="@/assets/curso/temas/tema7/img-4.svg" data-aos="fade-left")
      figcaption Nota. Tomada de FENAVI

    Separador 

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_7_4 7.4 Iluminación

    .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema7/img-5.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Durante la crianza, la luz juega un papel importante, y el manejo de las horas en que se somete a esa luz, así como la intensidad de la misma influyen en la actividad y salud de las aves de corral. Durante los primeros 10 días de los pollitos, la intensidad lumínica debe ser elevada, así como el tiempo de exposición; pero al cumplir esta etapa, debe reducirse periódicamente. Los pollos de engorde, normalmente, son criados a 10 lux, mientras las gallinas ponedoras lo hacen con intensidades lumínicas entre 5 y 10 lux. 

    Separador 

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_7_5 7.5. Técnicas de monitoreo y equipos de medición variables ambientales

    .col-12.d-flex.flex-wrap.align-items-center.p-2.mb-4
      .col-12.col-md-3.col-lg-1
        img.mb-4.mb-md-0.mx-auto(src="@/assets/curso/temas/tema7/img-6.svg" data-aos="fade-right" style="max-width: 100px")
      .col-xl-10.mx-auto
        .cajon.color-primario.p-4.d-flex.flex-wrap(data-aos="fade-right" style="background-color: #FFE8CE")
          .col-md-12.ps-lg-4
            p.col.mb-0.col-md-9.col-lg-11.ps-lg-4 Para la temperatura y la humedad se hace uso de termohigrómetros, los cuales funcionan a través de una sonda y sensores. Se debe recordar que la unidad de medida de la humedad relativa se define como el porcentaje de la cantidad de vapor de agua presente en 1 m3 de aire a una temperatura dada; y la unidad de medida para la temperatura está dada en grados Celsius (ºC). También existen sistemas de control electrónico integral, los cuales proporcionan un control uniforme del ambiente interno del galpón 24 horas al día, 7 días a la semana. Estos sistemas pueden aumentar el costo del galpón, empero se compensa debido al mejor rendimiento de las aves.


</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({}),
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

<template lang="pug">
.curso-main-container.pb-3.tema6
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Máquinas, equipos y utensilios

    p.mb-5 Son todos los elementos que se requieren para complementar el galpón y hacer los procesos productivos. Entre ellos, se encuentran los siguientes tipos:

    ImagenInfograficaB.custom.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema6/img-1.svg', alt='Texto que describa la imagen')

      .tarjeta.color-primario.p-3(x="72%" y="76%" numero="1")
        .h5.mb-2 Pocetas o pediluvios
        p Son utilizados para permitir la desinfección de las botas a la entrada y salida de los galpones y mantener la bioseguridad. Deben estar provistos de disoluciones de desinfectantes, tales como creolina, amonio cuaternario, glutaraldehído, yodo, cal, entre otros.

      .tarjeta.color-primario.p-3(x="90%" y="10%" numero="2")
        .h5.mb-2 Cortinas
        p El manejo de cortinas permite regular el microclima del galpón, haciendo que suban o bajen las temperaturas, logrando disipar el calor o elevarlo a disposición. También permite controlar la entrada de ráfagas de viento y las concentraciones de gases emitidas dentro del galpón, tales como el amoniaco; pero además permiten el control de las horas luz a la que son expuestas las parvadas en la producción. Generalmente, están hechas de polietileno y se instalan dentro y fuera de los galpones, de manera que se puedan abrir de arriba hacia abajo.

      //- .tarjeta.color-primario.p-3(x="16.5%" y="53.5%" numero="3")
      div(x="16.5%" y="53.5%" numero="3")
        .h5.mb-2 Comederos
        p Proveer los piensos en raciones y tiempos determinados es de gran importancia para que las aves tengan un aporte nutricional que les permita hacer una conversión significativa en la producción. Los comederos son recipientes donde se coloca la comida de los animales, para suministrar de forma periódica. Normalmente, se cuelgan, para que las aves tengan un acceso fácil y rápido a la alimentación, pero se deben tener en cuenta algunos aspectos: la supervisión del nivel de pienso, la ubicación correcta, el acceso al alimento para todas, de manera igualitaria, evitar esparcimiento y evitar que introduzcan cuerpos extraños, y es por esto que existen varios diseños de comederos en el mercado.
        .col-xl-12.mx-auto
          img.d-md-block(src="@/assets/curso/temas/tema6/img-2.svg")
        
      .tarjeta.color-primario.p-3(x="22.5%" y="14%" numero="4")
        .h5.mb-2 Bebederos
        p Suministrar un adecuado flujo de agua limpia y fresca es fundamental para la producción avícola, sin este, el consumo de alimento disminuirá y el rendimiento de las aves se verá comprometido. Es por esto que hay diferentes tipos de bebederos, manuales o automáticos, de acuerdo con las preferencias del productor.
        .col-xl-12.mx-auto
          img.d-md-block(src="@/assets/curso/temas/tema6/img-3.svg")

      .tarjeta.color-primario.p-3(x="75%" y="33.5%" numero="5")
        .h5.mb-2 Cama
        p Es ese material que recubre el piso del galpón. Entre sus principales funciones está la de aportar bienestar a las aves, modificando las características del suelo: dureza, conductividad, humedad, etc., y evita la adherencia de las deyecciones al suelo, para esto debe evitarse que se humedezca. La cama puede ser de diversos elementos.
        .col-xl-12.mx-auto
          img.d-md-block(src="@/assets/curso/temas/tema6/img-4.svg")
        
    .row.justify-content-center.align-items-center.mb-4
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#FFC403")
            | <strong>Criadoras</strong>

    p.mb-5 Las criadoras se utilizan en la industria avícola durante las primeras semanas, para mejorar las condiciones climáticas de los pollitos, a través de la regulación de la temperatura. Existen criadoras con capacidad de 500 a 1000 pollitos. Si la producción es realmente pequeña, se pueden utilizar, en reemplazo, bombillas de 200 voltios. De acuerdo con lo anterior, se puede decir que hay diferentes clases de criadoras:
    
    .col-xl-12.mx-auto.mb-5
      img.d-md-block(src="@/assets/curso/temas/tema6/img-5.svg" data-aos="fade-right")

    p.mb-5 Es necesario garantizar la temperatura correcta, es decir que se deben evitar las diferencias superiores a 3 ºC entre la máxima y la mínima, para lo cual hay que tener en cuenta lo siguiente:

    .col-xl-10.mx-auto.mb-5
      img.d-md-block(src="@/assets/curso/temas/tema6/img-6.svg" data-aos="fade-right") 
    
    .col-xl-7.mx-auto.mb-5
      img.d-md-block(src="@/assets/curso/temas/tema6/img-7.svg" data-aos="fade-right") 

    .row.justify-content-center.align-items-center.mb-4
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#FFC403")
            | <strong>Nidales</strong>

    .d-flex.flex-wrap.mb-5
      .col-xl-8.pe-xl-4.d-flex.flex-wrap.align-items-center.order-2.order-xl-1(data-aos="fade-right")
        p Deben ser cómodos, atractivos y oscuros, para que la gallina se sienta segura. Pueden ser de madera, de plástico o metálicos. Se ponen uniformemente dentro del galpón, en los lugares de menor iluminación. Se deben limpiar permanentemente. Cada nido debe tener viruta o paja. Ubicar unos tablones en los nidos permite cerrarlos en la noche y abrirlos muy temprano, para evitar que duerman allí y los ensucien. (Lascarro, 2014)
        .cajon.color-primario.p-4.d-flex.flex-wrap(style="background-color: #FFE8CE")
          .col-md-12.ps-lg-4  
            p 1 nidal por cada 4-5 aves.
            p Dimensiones: 30 cm de ancho, 30 cm de alto, de 35 a 40 cm de profundidad, y a 60 cm de altura del piso (Lascarro, 2014)
      img.mb-4.mb-xl-0.col-xl-4.mx-auto.order-1.order-xl-2(src="@/assets/curso/temas/tema6/img-8.png" data-aos="fade-right")

    .row.justify-content-center.align-items-center.mb-4
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#FFC403")
            | <strong>Perchas</strong>

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/img-9.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Son los lugares donde las gallinas descansan o duermen, son barras o palos de 4 o 5 cm de ancho, colocados en los extremos de la pared, a una altura de 25 cm y de 50 cm de longitud. En un gallinero se pueden colocar varias hileras de perchas (Lascarro, 2014)

    .col-xl-12.mx-auto.mb-5
      img.d-md-block(src="@/assets/curso/temas/tema6/img-10.svg" data-aos="fade-right") 

    .row.justify-content-center.align-items-center.mb-4
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#FFC403")
            | <strong>Báscula</strong>

    .row.mb-5
      .col-12.col-md-5.mb-3.mb-md-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema6/img-11.png', alt='Texto que describa la imagen')
      .col-12.col-md-7(data-aos="fade-left")
        p En las producciones avícolas, es imprescindible realizar 1 a 2 pesajes por semana, para saber la evolución del peso de las aves y compararlo con las tablas preestablecidas en la producción pertinente, de acuerdo con la línea. Es por esto que las básculas deben ser revisadas permanentemente, para garantizar exactitud en el peso obtenido por ave en cada muestreo.
        p Este pesaje es llamado <strong><em>grading,</em></strong> que en general es la labor de pesar la totalidad de las aves para luego segregarlas en grupos, donde las condiciones de peso y desarrollo corporal sean lo más similares posible. La separación y reubicación por grupos, de acuerdo al peso corporal, permiten establecer una competencia mucho más pareja entre los diferentes tamaños de aves, con lo cual se beneficia de manera significativa la uniformidad de los lotes y, por lo tanto, el desempeño productivo de los mismos.
        p El <em>grading</em> es un manejo de gran importancia durante la fase de levante, ya que, una vez realizado, se puede iniciar un trabajo de recuperación de la población de aves que, durante las primeras semanas, presentan cierta tendencia a estar por debajo de los parámetros de peso esperado.
    
    .col-xl-10.mx-auto.mb-5
      img.d-md-block(src="@/assets/curso/temas/tema6/img-12.svg" data-aos="fade-right")

    Separador 

    PasosA.color-acento-botones.mb-5(tipo="n")
      .row
        .col-lg
          ul.lista-ul
            li 
              i.fas.fa-circle
              | <strong>Flameador:</strong> es un elemento de desinfección de los galpones en la etapa de preparación, que trabaja a base de combustible de gas y que permite al operario manipularlo fácilmente.

        .col-auto
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/tema6/img-13.svg', alt='').img125
            
      .row
        .col-auto
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/tema6/img-14.svg', alt='').img125
        .col-lg.align-start
          ul.lista-ul
            li 
              i.fas.fa-circle
              | <strong>Bomba de espalda:</strong> contar con un dispositivo de aspersión espaldera para realizar el manejo de desinfectantes, plaguicidas y medicamentos aplicados por aspersión dentro del galpón. Debe utilizarse una exclusivamente para cada fin; por lo tanto, deben ser rotuladas y diferenciadas entre sí.

      .row
        .col-lg
          ul.lista-ul
            li 
              i.fas.fa-circle
              | <strong>Kit medición calidad del agua:</strong> es una herramienta que permite establecer los niveles de cloro, dureza y PH del agua, lo cual permite tomar medidas y establecer tratamientos para mejorar las condiciones de esta.

        .col-auto
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/temas/tema6/img-15.svg', alt='').img125



</template>

<script>
export default {
  name: 'Tema6',
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

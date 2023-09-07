<template lang="pug">
.curso-main-container.pb-3.tema5
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Contexto, tipo y características de los alojamientos para los diferentes sistemas productivos de las aves

    .cajon-b.color-primario.p-3.mb-5(data-aos="fade-right")
      .col-lg-12
        .bloque-texto-a__texto.p-4(style="background-color: #FFE8CE")
          p El alojamiento de las aves es un tema de gran importancia, ya que puede marcar la diferencia entre el éxito o el fracaso de una producción. Es por esto que las instalaciones deben ser diseñadas de la mejor manera posible, teniendo en cuenta el bienestar de las aves, la inversión o costos y la complejidad del trabajo para los trabajadores. Lo anterior permite que se ofrezca un ambiente idóneo para que la parvada demuestre su potencial genético. Teniendo en cuenta los sistemas productivos, pueden variar las características de los alojamientos en cuanto a materiales, capacidad, ubicación, elementos, protocolos, entre otros, por lo cual se tratará más a fondo a continuación.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 5.1 Ubicación del galpón

    p.mb-5 Para situar el galpón en un lugar idóneo dentro del predio destinado para tal fin, hay que tener en cuenta ciertos puntos.

    .col-xl-10.mx-auto.mb-5(data-aos="fade-right")
      .col-sm.mb-5.mb-sm-0
        ul.lista-ul--color
          li 
            i.fas.fa-egg
            | <strong>Vías de acceso:</strong> que estén relativamente cerca al lugar de producción, con carreteras que permitan la salida y entrada de vehículos y personal, pero que cumplan con el cerco perimetral que exige la normatividad por cuestiones de bioseguridad.
          li 
            i.fas.fa-egg
            | <strong>Electrificación y agua potable:</strong> dos aspectos necesarios para establecer cualquier tipo de producción, más aún de tipo pecuario, donde los animales requieren el flujo constante del recurso hídrico, al igual que el proceso productivo.
          li 
            i.fas.fa-egg
            | <strong>Aprovechar la presencia de árboles:</strong> los árboles sirven como barrera ambiental para prevenir los vientos fuertes.
          li 
            i.fas.fa-egg
            | <strong>Separación entre granjas por control sanitario</strong> (Lascarro, 2014).
          li 
            i.fas.fa-egg
            | <strong>Separación entre galpones:</strong> 2 veces el ancho del galpón (Lascarro, 2014).

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Figura 9.
        span <em> Ubicación del galpón</em>
      img.d-md-block(src="@/assets/curso/temas/tema5/img-40.svg" data-aos="fade-left")

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 5.2 Terreno 
    
    .d-flex.flex-wrap.mb-5
      .col-xl-6.pe-xl-4.d-flex.flex-wrap.align-items-center.order-2.order-xl-1(data-aos="fade-right")
        p Elegir el terreno es de gran importancia para la ubicación espacial del galpón, por lo que deben tenerse en cuenta las características del terreno, la permeabilidad y textura para evitar humedad, el nivel freático, que debe ser bajo, y la topografía, que idealmente será plana. Se recomienda, además, que el terreno sea arenoso, puesto que ofrece mayor drenaje del agua y mayor absorción de la humedad. En terrenos propensos a inundaciones, se sugiere realizar la construcción en la parte más elevada y realizar una zanja de 60 cm de ancho x 1m de profundidad, paralelo a los muros de la construcción.
      img.mb-4.mb-xl-0.col-xl-6.mx-auto.order-1.order-xl-2(src="@/assets/curso/temas/tema5/img-41.svg" data-aos="fade-right")

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 5.3 Orientación 

    p La orientación es la dirección que debe seguir el eje longitudinal del galpón, dependiendo de los parámetros de ventilación, humedad, concentración de CO2, amoniaco e iluminación, pero además el clima en el que se va a llevar a cabo la producción, para garantizar que estos factores jueguen a favor. (Vélez, 2013).
    p.mb-5 Se define por la temperatura ambiental y la dirección de los vientos:

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-5.mb-3(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema5/img-42-1.svg', alt='') 
      .col-12.col-md-5.mb-3.mt-5(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema5/img-42-3.svg', alt='') 

    p.mb-5 Imprescindible tener en consideración el flujo de las corrientes de aire predominantes en la región, para prevenir que no pasen a través del galpón con demasiada fuerza, ya que esto implicaría modificaciones en la dirección del mismo, haciendo que el eje longitudinal está paralelo en dirección de los vientos; aunque también puede mitigarse con el uso de barreras naturales.

    Separador

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 5.4 Dimensiones básicas del galpón

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img-43.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Estas son las medidas que se deben conocer básicamente para construir un galpón idóneo para cualquier tipo de producción avícola, cumpliendo con la normatividad y teniendo en cuenta el bienestar de los animales, además de otros factores que influyen, como el clima, la ventilación, la humedad, etc.

    .titulo-segundo.color-primario(data-aos="fade-right")
      h3#t_1_1 Área 

    .d-flex.flex-wrap.mb-4
      .col-xl-8.pe-xl-4.d-flex.flex-wrap.align-items-center.order-2.order-xl-1(data-aos="fade-right")
        p Está determinada por la cantidad de aves que se usarán en la producción y se da en metros cuadrados, teniendo en cuenta la variable de 5 aves/m2. Por ejemplo, si se van a producir 200 aves:
      img.mb-4.mb-xl-0.col-xl-4.mx-auto.order-1.order-xl-2(src="@/assets/curso/temas/tema5/img-44.svg" data-aos="fade-right")

    p.mb-5 Luego, se necesitarían 33 metros cuadrados para construir un galpón que ocuparán 200 aves.

    .titulo-segundo.color-primario(data-aos="fade-right")
      h3#t_1_1 Ancho, largo y alto

    .d-flex.flex-wrap.mb-5
      .col-xl-7.pe-xl-4.d-flex.flex-wrap.align-items-center.order-2.order-xl-1(data-aos="fade-right")
        p El ancho lo determina el clima de la zona, debe estar en un rango entre 10 y 12 metros, de lo cual depende una correcta iluminación y ventilación. Mientras, el largo está determinado por el área y el ancho del galpón, y puede ir desde 25 metros hasta no más de 100 metros, para evitar que el manejo se haga más difícil. El alto, por su parte, influye drásticamente en la temperatura y ventilación del galpón: entre más alto sea el galpón, habrá mayor ventilación, evaporación de gases y por ende menor temperatura, lo cual es útil en climas cálidos, y viceversa. (Vélez, 2013).
      img.mb-4.mb-xl-0.col-xl-4.mx-auto.order-1.order-xl-2(src="@/assets/curso/temas/tema5/img-45.svg" data-aos="fade-right")

    .row.justify-content-center.align-items-center
      .col-12.col-md-6.mb-3(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema5/cuadro_1.svg', alt='') 
      .col-12.col-md-6.mb-3(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema5/cuadro_2.svg', alt='') 

    Separador

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 5.5 Techos 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El techo del galpón consta de dos partes principales: la estructura y la cubierta. Debe tener una superficie reflectiva para ayudar a reducir la conducción del calor solar, o sistemas de refrigeración por agua. Los techos, además, deben tener aleros, que deben medir por lo menos 1 metro, los cuales son necesarios para suministrar sombra sobre los costados del galpón y evitar la entrada de agua en época de lluvias. (Vélez, 2013).

    .titulo-segundo.color-primario(data-aos="fade-right")
      h3#t_1_1 Clases de techos

    .tarjeta.tarjeta--azul2.p-4.mb-5
      SlyderA(tipo="a")
        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-3
            figure
              img(src='@/assets/curso/temas/tema5/techo_agua.svg', alt='Texto que describa la imagen')

          .col-md-6.mb-4.mb-md-0
            h3 Techo a un agua
            p Se usa en producciones pequeñas; el lado con menor altura tiene que estar en dirección contraria al viento.

        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-3
            figure
              img(src='@/assets/curso/temas/tema5/techo_cerrado.svg', alt='Texto que describa la imagen')

          .col-md-6.mb-4.mb-md-0
            h3 Techo de dos aguas cerrado
            p Aunque es el más popular, no brinda una adecuada ventilación en la parte superior; por esta razón, no se recomienda su uso en climas cálidos.
        
        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-3
            figure
              img(src='@/assets/curso/temas/tema5/techo_asimetrico.svg', alt='Texto que describa la imagen')

          .col-md-6.mb-4.mb-md-0
            h3 Techo de dos aguas asimétrico
            p Brinda una adecuada ventilación y ayuda en la evaporación de los gases por la parte  superior. Dado lo anterior, es bueno para climas cálidos, pero tiene la desventaja que, al momento de llover con vientos fuertes, tiene la posibilidad de que el agua pueda entrar por el desnivel superior. (Gonzáles, 2018).

        .row.justify-content-center.align-items-center.my-lg-4
          .col-md-3
            figure
              img(src='@/assets/curso/temas/tema5/techo_claraboya.svg', alt='Texto que describa la imagen')

          .col-md-6.mb-4.mb-md-0
            h3 Techo dos aguas con claraboya
            p De alto costo de inversión, ofrece una ventilación eficiente. Comúnmente usados en explotaciones grandes o en climas cálidos que tengan una humedad ambiental alta.

    .row
      .cajon-b.color-acento-contenido.p-3.mb-4
        p.mb-5 Los techos más utilizados en la infraestructura para la producción avícola son: a un agua, a dos aguas cerradas, a dos aguas asimétricas y a dos aguas con claraboya.

    .titulo-segundo.color-primario(data-aos="fade-right")
      h3#t_1_1 Materiales de construcción techos
    
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-botones.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img-2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los techos pueden estar construidos en diversos materiales, dependiendo del sistema productivo, el clima, la disponibilidad y los costos. Estos pueden ser en lámina de zinc, eternit, teja de barro, cobertizos naturales, etc. En el siguiente video, se pueden apreciar algunos de ellos.

    Separador 

    .col-xl-10.mx-auto(data-aos="fade-right")
      .tarjeta.color-acento-contenido.p-3.mb-5
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/temas/tema5/web.svg")
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h3 ConstruArk - Proceso constructivo de una bodega o galpón en ambiente controlado
                p En el siguiente anexo se puede observar el proceso constructivo de una bodega o galpón en ambiente controlado.
              .col-sm-auto
                a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/embed/638IbwHsgmA?feature=oembed" target="_blank")
                  span Ir al sitio web
                  i.fas.fa-link

    Separador 

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3#t_1_1 5.6 Muros y ventanas

    p.mb-5 Los muros deben rodear el galpón. Se conectan con el techo, en su borde lateral, por medio de una malla hexagonal de ¾ de pulgada, formando así las ventanas, que permiten la buena ventilación y la no penetración de pájaros u otros animales (Vélez, 2013). Su altura depende del clima: si es muy cálido, no se usan muros; si es cálido, deben medir entre 20 y 30 cm; y si es frío, deben medir entre 80 y 100 cm.

    .col-xl-12.mx-auto.mb-5
      img.d-md-block(src="@/assets/curso/temas/tema5/cuadro_3.svg" data-aos="fade-left")

    .row.justify-content-center.align-items-center.mb-4
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#FFC403")
            | <strong>Materiales de construcción muros, ventanas, vigas y soportes</strong>

    p.mb-5 Los materiales para la construcción de los muros y las ventanas pueden variar de acuerdo con el sistema productivo, el clima, la disponibilidad de los materiales y el costo de los mismos. En ese sentido, pueden ser construidos en ladrillo, bahareque, malla (que puede ser en acero galvanizado o plástica), guadua o madera. Por otra parte, las vigas y soportes pueden estar construidas en madera (guadua), acero, o una combinación de acero y concreto. 

    SlyderF(columnas="col-lg-6 col-xl-4").mb-5
      .tarjeta.color-acento-contenido
        .row.justify-content-center.mb-5
          .col-10
            img.img-slider(src='@/assets/curso/temas/tema5/slider_1.svg' alt='')
        h4.text-center.texto-negro Muro en ladrillo y malla metálica                     
       
      .tarjeta.color-acento-contenido
        .row.justify-content-center.mb-5
          .col-10
            img.img-slider(src='@/assets/curso/temas/tema5/slider_2.svg' alt='')
        h4.text-center.texto-negro Muro en tabla de madera y malla metálica

      .tarjeta.color-acento-contenido
        .row.justify-content-center.mb-5  
          .col-12
            img.img-slider(src='@/assets/curso/temas/tema5/slider_3.svg' alt='')
        h4.text-center.texto-negro Muro en palmiche o guadua  y malla metálica                                                      

      .tarjeta.color-acento-contenido
        .row.justify-content-center.mb-5
          .col-10
            img.img-slider(src='@/assets/curso/temas/tema5/slider_4.svg' alt='')
        h4.text-center.texto-negro Malla metálica sin muro 
      
      .tarjeta.color-acento-contenido
        .row.justify-content-center.mb-5
          .col-10
            img.img-slider(src='@/assets/curso/temas/tema5/slider_5.svg' alt='')
        h4.text-center.texto-negro Vigas y soportes en madera

      .tarjeta.color-acento-contenido
        .row.justify-content-center.mb-5
          .col-12
            img.img-slider(src='@/assets/curso/temas/tema5/slider_6.svg' alt='')
        h4.text-center.texto-negro Vigas y soportes en guadua

      .tarjeta.color-acento-contenido
        .row.justify-content-center.mb-5
          .col-11
            img.img-slider(src='@/assets/curso/temas/tema5/slider_7.svg' alt='')
        h4.text-center.texto-negro Vigas y soportes en acero 

      .tarjeta.color-acento-contenido
        .row.justify-content-center.mb-5
          .col-11
            img.img-slider(src='@/assets/curso/temas/tema5/slider_8.svg' alt='')
        h4.text-center.texto-negro Vigas y soportes en acero y concreto

    Separador 

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3#t_1_1 5.7 Pisos

    p.mb-5 Los pisos deben tener un desnivel del 1 al 3%, desde el centro a los extremos, que se utiliza para facilitar la limpieza y desinfección en el periodo de preparación de los galpones. Deben permitir la limpieza y desinfección, resistencia y durabilidad.

    .row.justify-content-center.align-items-center.mb-4
      .col-12(data-aos="fade-right")
        ul.lista-ul.mb-2
          li.mb-0
            i.fas.fa-play(style="color:#FFC403")
            | <strong>Materiales de construcción pisos</strong>
    
    p Los materiales del piso pueden clasificarse de acuerdo con los costos implicados. 
    
    ol.lista-ol--cuadro.mb-5
      li 
        .lista-ol--cuadro__vineta
          span a
        | <strong>Económicos:</strong> suelo en tierra, bien apisonado, encalado, más la cama.
      li 
        .lista-ol--cuadro__vineta
          span b
        | <strong>Inversión moderada:</strong> suelo en madera, separado del suelo, encalado, más la cama.
      li 
        .lista-ol--cuadro__vineta
          span c
        | <strong>Inversión alta:</strong> suelo en tierra, recubierto con dos capas de balasto y una capa de cemento, con la debida inclinación, encalado y cama.

    .col-xl-10.mx-auto.mb-5
      img.d-md-block(src="@/assets/curso/temas/tema5/cuadro_4.svg" data-aos="fade-left")

    

        









</template>

<script>
export default {
  name: 'Tema5',
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

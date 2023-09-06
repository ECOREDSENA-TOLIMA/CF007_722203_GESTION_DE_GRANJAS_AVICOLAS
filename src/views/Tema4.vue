<template lang="pug">
.curso-main-container.pb-3.tema4
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Contexto, características y tipos comerciales de aves

    .col-xl-12.mx-auto.mb-5
      img.d-md-block(src="@/assets/curso/temas/tema4/cuadro.svg" data-aos="fade-left")

    Separador

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 4.1 Tipos de líneas comerciales de aves

    p.mb-5(data-aos="fade-right") Para hablar de los tipos de líneas comerciales, es necesario que se entre en contexto y se comprendan algunos términos que serán de ayuda para este tema. Para ello, se presenta la siguiente infografía.

    ImagenInfograficaB.color-primario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema4/img-26.svg', alt='Texto que describa la imagen')

      .tarjeta.color-acento-contenido.p-3(x="5%" y="34.5%" numero="+")
        .h5.mb-2 Estirpe: 
        p.texto-negro Desde el contexto genético, se refiere a una población cerrada de animales de una raza obtenida por cruzamiento solo de animales de la población. Se diferencia de otras estirpes de la misma raza en las características morfológicas y/o productivas. 

      .tarjeta.color-acento-contenido.p-3(x="5%" y="49%" numero="+")
        .h5.mb-2 Híbrido:
        p.texto-negro Ave producto del cruzamiento consanguíneo de dos individuos durante varias generaciones.

      .tarjeta.color-acento-contenido.p-3(x="5%" y="64%" numero="+")
        .h5.mb-2 Línea:
        p.texto-negro Población cerrada de animales obtenida por cruces muy concretos dentro de un tronco familiar, donde el número de animales es reducido y la consanguinidad es elevada.

      .tarjeta.color-acento-contenido.p-3(x="95%" y="42%" numero="+")
        .h5.mb-2 Raza:
        p.texto-negro Grupo de individuos con características fenotípicas y genotípicas definidas que se transmiten a sus generaciones.

      .tarjeta.color-acento-contenido.p-3(x="95%" y="56.7%" numero="+")
        .h5.mb-2 Variedad o variabilidad:
        p.texto-negro En genética, es una medida de la tendencia de los genotipos de una población a diferenciarse, un grupo de animales de una raza que presenta alguna variante que se expresa en su genotipo y fenotipo que, aunque pertenecen a la misma especie, no son idénticos.

    p(data-aos="fade-right") En las aves de postura, al igual que en los pollos de engorde, se comercializan líneas genéticas híbridas con el nombre de la empresa que las produce, que se enfocan en características que mejoren la producción y reduzcan los costos de la misma. Luego, las líneas en producción de huevos producen gran cantidad de huevos, tienen menor peso y consumen menos alimento. Y las líneas en producción de pollos de engorde, muestran superioridad en ganancia de peso y mayor conversión de alimento.
    p.mb-5(data-aos="fade-right") Las líneas comerciales de aves de corral pueden clasificarse de acuerdo con:

    .col-xl-10.mx-auto.mb-5
      img.d-md-block(src="@/assets/curso/temas/tema4/img-27.svg" data-aos="fade-left")

    p.mb-5(data-aos="fade-right") Para el tratamiento de líneas, se profundizará en la clasificación de acuerdo con el peso corporal, por ser la más utilizada y común. A continuación, se puede observar dicha clasificación.

    .col-xl-10.mx-auto.mb-5
      .titulo-sexto.color-primario(data-aos="fade-right")
        h5 Figura 8.
        span <em>Clasificación de aves de corral de acuerdo con su peso</em>
      img.d-md-block(src="@/assets/curso/temas/tema4/img-28.svg" data-aos="fade-left")

    p.mb-5(data-aos="fade-right") A continuación, se hará una breve descripción de algunas de las razas más populares y representativas de acuerdo con la clasificación anterior.

    .col-xl-10.mx-auto.mb-5
      img.d-md-block(src="@/assets/curso/temas/tema4/img-29.svg" data-aos="fade-left")

    Separador 

    p.mb-5(data-aos="fade-right") A continuación, se pueden observar algunas de las razas más populares y representativas.

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-acento-botones2.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema4/img-1.png' alt='AvatarTop')
        h2.text-center LOHMANN LSL (Blanca)
        .col-xl-10.mx-auto
          ul.lista-ul
            li 
              i.fas.fa-circle
              | Originaria de Alemania.
            li 
              i.fas.fa-circle
              | Tiene un enorme potencial genético, a través de altos picos de postura y persistencia.
         
      .tarjeta.color-acento-botones2.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema4/img-2.png' alt='AvatarTop')
        h2.text-center LOHMANN BROWN
        .col-xl-10.mx-auto
          ul.lista-ul
            li 
              i.fas.fa-circle
              | Originaria de Alemania.
            li 
              i.fas.fa-circle
              | Su plumaje es de color castaño.
            li 
              i.fas.fa-circle
              | Buen nivel de postura.
            li 
              i.fas.fa-circle
              | Color de la cáscara del huevo, marrón.

      .tarjeta.color-acento-botones2.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema4/img-3.png' alt='AvatarTop')
        h2.text-center LEGHORN
        .col-xl-10.mx-auto
          ul.lista-ul
            li 
              i.fas.fa-circle
              | Es de origen italiano.
            li 
              i.fas.fa-circle
              | Plumaje blanco y cola abierta en abanico. 
            li 
              i.fas.fa-circle
              | Cresta: de 4 a 5 escotadura.
            li 
              i.fas.fa-circle
              | Machos (cresta erecta).

      .tarjeta.color-acento-botones2.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema4/img-4.png' alt='AvatarTop')
        h2.text-center ISA BROWN
        .col-xl-10.mx-auto
          ul.lista-ul
            li 
              i.fas.fa-circle
              | Es una gallina ligera y ponedora de huevos blancos.
            li 
              i.fas.fa-circle
              | Con alta adaptabilidad.
            li 
              i.fas.fa-circle
              | Edad al 50 % de puesta, 144 días.
            li 
              i.fas.fa-circle
              | Los huevos que pone son de 65 gramos.

      .tarjeta.color-acento-botones2.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema4/img-5.png' alt='AvatarTop')
        h2.text-center HY-LINE
        .col-xl-10.mx-auto
          ul.lista-ul
            li 
              i.fas.fa-circle
              | Huevos ave-alojada a 100 semanas, 453-467.
            li 
              i.fas.fa-circle
              | Promedio de consumo de alimento diario (18-100 semanas), 105-112 g/día por ave.
            li 
              i.fas.fa-circle
              | Plumaje de color castaño.

      .tarjeta.color-acento-botones2.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema4/img-6.png' alt='AvatarTop')
        h2.text-center RHODE ISLAND
        .col-xl-10.mx-auto
          ul.lista-ul
            li 
              i.fas.fa-circle
              | Originaria de Estados Unidos.
            li 
              i.fas.fa-circle
              | Variedad roja es la más distribuida en el país.
            li 
              i.fas.fa-circle
              | Plumaje castaño brillante y cola tono más oscuro.

      .tarjeta.color-acento-botones2.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema4/img-7.png' alt='AvatarTop')
        h2.text-center ROSS
        .col-xl-10.mx-auto
          ul.lista-ul
            li 
              i.fas.fa-circle
              | La Ross es una de las variedades más populares.
            li 
              i.fas.fa-circle
              | Es una de las reproductoras más competitivas.
            li 
              i.fas.fa-circle
              | Crece rápidamente con el mínimo consumo de alimento.

      .tarjeta.color-acento-botones2.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema4/img-8.png' alt='AvatarTop')
        h2.text-center COBB
        .col-xl-10.mx-auto
          ul.lista-ul
            li 
              i.fas.fa-circle
              | Cobb es una línea muy precoz, que adquiere un gran peso en forma rápida, por lo que permite un sacrificio a muy temprana edad.
            li 
              i.fas.fa-circle
              | Es muy voraz.
    
      .tarjeta.color-acento-botones2.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema4/img-9.png' alt='AvatarTop')
        h2.text-center ARBOR ACRESS
        .col-xl-10.mx-auto
          ul.lista-ul
            li 
              i.fas.fa-circle
              | Crecen y ganan peso con gran rapidez.
            li 
              i.fas.fa-circle
              | Poseen un buen emplume. 
            li 
              i.fas.fa-circle
              | Son fuertemente resistentes a las enfermedades.
  
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 4.2 Manuales de manejo de líneas genéticas

    .row.mb-5
      .col-12.col-md-5.mb-3.mb-md-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema4/img-30.png', alt='Texto que describa la imagen')
      .col-12.col-md-7(data-aos="fade-left")
        p En la industria avícola, existen diferentes empresas que comercializan y distribuyen las líneas genéticas a las granjas productoras. Estas casas comerciales buscan estandarizar ciertas razas y sacar los mejores parámetros en cuanto a rentabilidad y productividad, razón por la cual hacen rigurosos estudios que consignan en documentos llamados manuales técnicos, que tienen el fin de que los productores tengan una guía y herramienta para el manejo rentable de sus producciones, garantizando que tengan alta rentabilidad con un mínimo de costos. Dentro de estos manuales, se pueden encontrar parámetros como tasa de conversión de alimento, requerimiento nutricional por semana, curva productiva, resistencia, mortalidad, morbilidad, entre otros.
        p Para acceder a cada uno de estos manuales, basta con iniciar una consulta en cualquier motor de búsqueda disponible e introducir el nombre de la raza comercial de la cual se quiere obtener información.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2#t_1_1 4.3 Parámetros productivos

    .d-flex.flex-wrap.mb-5
      .col-xl-8.pe-xl-4.d-flex.flex-wrap.align-items-center.order-2.order-xl-1(data-aos="fade-right")
        p Según cifras ofrecidas por el Ministerio de Agricultura y Desarrollo Rural, en el año 2020, la producción avícola en Colombia participa con el 36.5% del PIB pecuario, el 14.3% del agropecuario y el 0.7 del PIB nacional, y es considerada la industria con mayor proyección y dinamismo como empresa. Es por esto que llevar un registro adecuado y consignar correctamente los datos de la producción en granja es de vital importancia.
        p Como bien se sabe, los registros existen para medir los parámetros productivos y estos tienen una relevancia crucial en toda explotación pecuaria, ya que ellos son los que permiten tomar decisiones y hacer que el sistema de producción sea más eficiente. Luego, los registros deben ser confiables y oportunos, pero, además, deben llevar un orden, para facilitar su comprensión y posterior análisis. Los datos pueden ser llevados en plantillas especialmente diseñadas o personalizadas por cada empresa, libros de campo o cuadernos.
        .cajon.color-primario.p-4.d-flex.flex-wrap(style="background-color: #FFE8CE")
          .col-md-12.ps-lg-4  
            p Los parámetros de una producción se calculan con base en los datos del comportamiento productivo, por ejemplo, la cantidad de huevo, el peso corporal, los huevos producidos por ave, el porcentaje de producción, el porcentaje de mortalidad, la conversión alimenticia, entre otros. Para el caso de las gallinas, se calculan desde uno o varios lotes de gallinas de la misma estirpe o línea genética. La información obtenida refleja el desarrollo del potencial genético del ave con relación a su línea, edad y sexo. (Itza y Ciro, 2020).
      img.mb-4.mb-xl-0.col-xl-4.mx-auto.order-1.order-xl-2(src="@/assets/curso/temas/tema4/img-30-1.png" data-aos="fade-right")

    p.mb-5(data-aos="fade-right") Los parámetros de producción tienen como objetivo presentar el panorama general del desempeño productivo de las aves, y se pueden clasificar en tres importantes partes:

    .col-12.d-flex.flex-wrap.align-items-center.p-2.mb-4
      .col-12.col-md-3.col-lg-1
        img.mb-4.mb-md-0.mx-auto(src="@/assets/curso/temas/tema4/decorador-3.svg" style="max-width: 100px")
      .col-xl-10.mx-auto
        ul.lista-ul
          li 
            i.fas.fa-circle
            | <strong>Relacionados con el desarrollo corporal del ave:</strong>  peso corporal, uniformidad, longitud del tarso y longitud del pico. 
          li 
            i.fas.fa-circle
            | <strong>Relacionados con la producción:</strong> mortalidad, consumo de alimento, conversión alimenticia, postura, peso de huevo, masa de huevo, número de huevos por ave, entre otros.
          li 
            i.fas.fa-circle
            | <strong>Relacionados con el producto final:</strong> clasificación del huevo, número total de cajas producidas (cada caja contiene 360 piezas de huevo), mermas (rotos o picados), pigmentación del pollo, alimento almacenado en silo, inventario de empaques (cajas de cartón, divisiones, separadores de huevo), entre otros.

    p.mb-5(data-aos="fade-right") En el manual de guía de manejo de cada línea genética, se encuentran reportados los objetivos de producción, empero estos pueden establecerse con anterioridad por las metas o expectativas específicas de cada institución. Por ejemplo, en las guías de manejo de la crianza de las pollitas, en las tablas de objetivos, no se aprecia la mortalidad, uniformidad, conversión día o semanal. Existen dos tipos de formatos para registrar los datos de producción: impresos y electrónicos (Itza y Ciro, 2020).

    .col-xl-10.mx-auto.mb-4 
      img.d-md-block(src="@/assets/curso/temas/tema4/imagen_a.svg" data-aos="fade-left")

    .col-xl-10.mx-auto
      .row
        .cajon-b.color-acento-contenido.p-3.mb-4(data-aos="fade-right")
          p Los resultados obtenidos en las poblaciones de aves en crecimiento o en producción son referencias que facilitan proyectar la producción y comparar los resultados con otras unidades productivas, de acuerdo con la fase fisiológica, el crecimiento, la línea productiva, el canal o el huevo (Itza y Ciro, 2020).
          p Diversas empresas de distribución de líneas o razas genéticas comerciales han repartido hojas de cálculo entre sus clientes para que registren sus datos y tengan los parámetros de mayor interés en un solo formato, con diferencias entre el estándar y el real, así como la gráfica de producción en etapas de crecimiento y postura. (Itza y Ciro, 2020).

    p.mb-5(data-aos="fade-right") Ahora bien, para calcular los parámetros de producción, existen ecuaciones que explican el comportamiento productivo de cada uno de ellos. Un parámetro que aparece en las tablas de producción es la viabilidad (%) que se expresa como:

    .col-xl-6.mx-auto.mb-5
      img.d-md-block(src="@/assets/curso/temas/tema4/img-31.svg" data-aos="fade-left")

    p(data-aos="fade-right") Sin embargo, lo que no está vivo está muerto. Y el parámetro con mayor uso que la viabilidad es la mortalidad, que puede ser calculada por día o acumulada. Dicho parámetro no siempre aparece en las tablas de producción y a continuación es posible calcularlo.
    p.mb-5(data-aos="fade-right") La mortalidad día (%) se expresa como:

    .col-xl-6.mx-auto.mb-5
      img.d-md-block(src="@/assets/curso/temas/tema4/img-32.svg" data-aos="fade-left")

    p(data-aos="fade-right") Este parámetro presenta la cantidad de aves muertas expresada en porcentaje. Para estar en el estándar, se recomienda no sobrepasar 3 bajas por cada 10,000 aves (0.03 %).
    p.mb-5(data-aos="fade-right") La mortalidad acumulada (%) se expresa como:

    .col-xl-8.mx-auto.mb-5
      img.d-md-block(src="@/assets/curso/temas/tema4/img-33.svg" data-aos="fade-left")

    p(data-aos="fade-right") La mortalidad acumulada en crianza no debe exceder el 3.0 % a la semana 17, mientras que en postura, iniciando de la semana 18 a la 90, no debe exceder el 7.0 %. Sin embargo, los parámetros pueden variar de acuerdo con la línea genética e incluso existen empresas que, de acuerdo con las condiciones propias de cada región, modifican algunos parámetros (Itza y Ciro, 2020).
    p.mb-5(data-aos="fade-right") La postura o producción (%) de huevo día se expresa como:

    .col-xl-6.mx-auto.mb-5
      img.d-md-block(src="@/assets/curso/temas/tema4/img-34.svg" data-aos="fade-left")

    p(data-aos="fade-right") La producción de huevo o postura (%) representa la proporción de gallinas que se encuentran en producción por cada 100. Es importante notar que este parámetro es el primero en ser solicitado, debido a que permite comparar con el objetivo o estándar y saber la relación de aves que se encuentran en postura contra aquellas que están en “descanso” o fuera de postura. (Itza y Ciro, 2020)
    p.mb-5(data-aos="fade-right") El peso de huevo o peso promedio de huevo (g) se expresa como:

    .col-xl-6.mx-auto.mb-5
      img.d-md-block(src="@/assets/curso/temas/tema4/img-34-1.svg" data-aos="fade-left")

    p(data-aos="fade-right") Debido a que se vende kilogramos de huevo, saber el peso del huevo es primordial para las finanzas de la empresa. Al saber el peso promedio del huevo (g) se puede hacer el cálculo para determinar el peso promedio de cada caja de huevo. Hay que recordar que cada caja contiene 360 piezas o unidades de huevo, que si se multiplica por el peso del huevo, un supuesto de 60 g, se tendrá un peso neto de 21.60 kg por caja.
    p.mb-5(data-aos="fade-right") El consumo de alimento por ave día se expresa como:

    .col-xl-6.mx-auto.mb-5
      img.d-md-block(src="@/assets/curso/temas/tema4/img-35.svg" data-aos="fade-left")

    p(data-aos="fade-right") Hay que recordar que el consumo de alimento representa entre el 60 y el 70 % de los costos fijos de producción. La ecuación también nos permite despejar para obtener la cantidad de alimento que se ofertará, conociendo la cantidad de aves alojadas.
    p.mb-5(data-aos="fade-right") Un parámetro por demás interesante es el que se expresa como:

    .col-xl-8.mx-auto.mb-5
      img.d-md-block(src="@/assets/curso/temas/tema4/img-36.svg" data-aos="fade-left")

    p(data-aos="fade-right") En las guías de manejo de cada línea genética, se mencionan las cantidades de huevos puestos por ave alojada. Esta ecuación permite obtener dicho dato.
    p.mb-5(data-aos="fade-right") Otro parámetro importante, considerado el segundo en importancia, es la conversión de alimento, la cual se expresa como:

    .col-xl-8.mx-auto.mb-5
      img.d-md-block(src="@/assets/curso/temas/tema4/img-37.svg" data-aos="fade-left")

    p(data-aos="fade-right") La conversión alimenticia expresa la cantidad o unidades de alimento que se debe consumir por ave para producir una unidad de producto, como huevo o carne. La conversión de alimento debe ser lo menor posible para obtener el mayor rendimiento del producto.
    p.mb-5(data-aos="fade-right") La masa de huevo (g) se expresa como: 

    .col-xl-6.mx-auto.mb-5
      img.d-md-block(src="@/assets/curso/temas/tema4/img-38.svg" data-aos="fade-left")

    p(data-aos="fade-right") Sumando los resultados previos, se obtienen los acumulados respectivos. La masa de huevo no es muy utilizada por la industria, sin embargo, se menciona que se debe tener en cuenta que los requerimientos nutritivos de las aves se relacionan muy estrechamente con la masa diaria de huevos, y es mejor conocer este parámetro, conjuntamente con los anteriores.
    p.mb-5(data-aos="fade-right") Por último, el índice de producción se expresa como:

    .col-xl-8.mx-auto.mb-5
      img.d-md-block(src="@/assets/curso/temas/tema4/img-39.svg" data-aos="fade-left")

    p(data-aos="fade-right") El I.P. se mide en puntos o unidades que resumen los parámetros anteriores y proporcionan una cifra que califica a la parvada: mientras mayor sea el I.P., la productividad de la parvada es mayor.
    p(data-aos="fade-right") Los datos pueden resumirse en un reporte diario de granja impreso, que debe ser almacenado para conocer el desempeño productivo de cada parvada y el histórico estadístico de la granja. (Itza y Ciro, 2020).



</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
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

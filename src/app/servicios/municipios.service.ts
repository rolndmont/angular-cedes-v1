import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Municipio } from "../model/Municipio";


@Injectable({
  providedIn: 'root'
})

export class MunicipiosService {

   SierraNorte: any [] = [
      {
          idR:1,
          id:0,
          nombre:'Chignahuapan',
          imagen:'assets/images/sierraNorte/chignahuapan.png',
          descripcion: 'El mapa general de la República Mexicana señala que el municipio de Chignahuapan se localiza en el estado de Puebla. Debido a la posición geográfica que tiene, se sitúa entre las coordenadas 19° 39" 42" y 19° 58" 48" latitud norte del trópico de cáncer y entre 97° 57" 18" y 98° 18" 06" longitud oeste del meridiano de Greenwich. La altitud promedio de dicho municipio es de 700 metros sobre el nivel del mar (msnm). Está formado por una extensión territorial de 591.92 kilómetros cuadrados. Chignahuapan se encuentra territorialmente rodeado al norte por el municipio de Zacatlán, al sur por el estado de Tlaxcala, al oeste una vez más por Zacatlán y Aquixtla, finalmente al poniente se encuentra el estado de Hidalgo. En otra información, el Instituto Nacional de Estadística y Geografía señaló que, de acuerdo con los resultados obtenidos del tercer conteo de población realizado durante el 2010, el municipio de Chignahuapan cuenta con una población total de 57,904',
          extension: 'Tiene una superficie de 760.23 Km^2, que lo ubica en el 3 lugar con respecto a los demás municipios del estado',
          clima: 'El municipio se localiza dentro de la zona de los templados de la sierra norte; se identifican dos climas: o    Clima semifrío subhúmedo con lluvias en verano; temperatura media anual entre 5 y 12ºC; temperatura del mes más frío entre -3 y, 18ºC; precipitación del mes más seco menor de 40 milímetros; la precipitación invernal con respecto a la anual es entre 5 y 10.2 por ciento. o Se presentan en las cumbres del peñón del Rosario y en los cerros las Tablas, así como en el conjunto montañoso del extremo oeste. o    El templado subhúmedo con lluvias en verano; temperatura media anual entre 12 y 18ºC; temperatura del mes más frío entre -3 y 18ºC; precipitación del mes más seco menor de 40 milímetros; la precipitación invernal con respecto a la anual es entre 5 y 10.2 por ciento. o    Se identifica en las estribaciones bajas del peñón del Rosario y de los cerros Las Tablas, así como el extremo norte. Es el clima predominante  ',
          recursos: 'Cuenta con una gran variedad de especies forestales, mismos que son explotados y que convierten el municipio en uno de los principales productores de madera a nivel estatal: o  Minería: entre sus principales yacimientos encontramos: ocre, tepelttxyl-arcilla',
          principales:''
      },
      {
          idR:1,
          id:1,
          nombre:'Huauchinango',
          imagen:'assets/images/sierraNorte/huauchinango.png',
          descripcion: 'Se localiza en la parte noroeste del estado. Sus coordenadas geográficas son los paralelos 20º 05" 30" y 20º 17" 06" de latitud norte de los meridianos 97º 57" 00" y 98º 08" 06" de longitud occidental. Sus colindancias son: al Norte con Xicotepec de Juárez y Juan Galindo, al Sur con Ahuazotepec y Zacatlán, al Oeste con Juan Galindo y Tlaola y al Poniente con Naupan, Ahuazotepec y el Estado de Hidalgo. Cuenta con 44 Localidades, de las cuales las más importantes son: Tenango de las Flores, El Potro, Cuacuila, Ahuacatlán y Xaltepec',
          extension: 'Tiene una superficie de 250.41 Km^2 que lo ubica en lugar 84 con respecto a los demás municipios del Estado',
          clima: 'En el municipio se pueden identificar dos climas: clima templado húmedo, con lluvias todo el año; temperatura media anual entre 12 y 18º C; temperatura del mes más frío entre -3 y 18º C; precipitación del mes más seco mayor de 40 milímetros, por ciento de lluvia invernal con respecto a la anual es menor de 18. clima semicálido subhúmedo, con lluvias todo el año; temperatura media anual mayor de 18º C; precipitación del mes más seco mayor de 40 milímetros, por ciento de lluvia, invernal con respecto a la anual menor de 18. Se presenta en las partes más bajas del municipio al oriente.',
          recursos: 'Cuenta con bosques de pino, existen criaderos de trucha en Teopancingo y carpa en la presa de Tenango',
          principales:''
      },
      {
          idR:1,
          id:2,
          nombre:'Juan Galindo',
          imagen:'assets/images/sierraNorte/juanGalindo.png',
          descripcion: 'Se localiza en la parte Noroeste, del estado de Puebla, sus coordenadas geográficas son: los paralelos 20º 12" 24" y 20º 14" 24" de latitud norte y los meridianos 97º 57" 00" y 98º 01" 24" de longitud occidental. Sus colindancias son al Norte con Xicotepec, al Sur con Huauchinango y Tlaola, al Oeste con Xicotepec y Zihuateutla y al Poniente con Huauchinango.',
          extension: 'Tiene una superficie de 23.15 kilómetros cuadrados que lo ubican en el lugar 175 con respecto a los demás municipios del estado',
          clima: 'El municipio se ubica en la transición de los climas templados de la Sierra Norte y los cálidos del declive del Golfo; presenta dos climas: clima semicálido: Subhúmedo con lluvias todo el año temperatura media anual mayor de 18ºC; temperatura del mes más frío entre 3 y 18ºC; precipitación del mes más seco mayor de 40 milímetros; por ciento de lluvia invernal con respecto a la anual menor de 18. Es el clima predominante; se identifica en la porción central y sudoccidental. clima cálido: Con lluvias todo el año; temperatura media anual mayor de 22ºC; la temperatura del mes más frío es mayor de 18ºC; existe una diferencia porcentual de lluvia invernal con respecto a la anual menor de 18; la precipitación del mes más seco es mayor de 60 milímetros y se presenta en la porción oriental del municipio',
          recursos: '',
          principales:'El municipio conserva pocas áreas con vegetación natural; tan sólo quedan bosques de pino-encino en áreas reducidas al poniente y al sur. El resto del territorio ha sufrido una fuerte deforestación; se han implantado pastizales al norte y en la porción central se cuentan con zonas dedicadas a la Agricultura. '
      },
      {
          idR:1,
          id:3,
          nombre:'Tetela de Ocampo',
          imagen:'assets/images/sierraNorte/tetelaOcampo.png',
          descripcion: 'El municipio de Tetela de Ocampo se localiza en la parte Norte del Estado de Puebla. Sus coordenadas geográficas son los paralelos 19º 43" 00" y 19º 57" 06" de latitud norte y los meridianos 97º 38" 42" y 97º 54" 06" de longitud occidental. Sus colindancias son al Norte con Cuautempan y Tepetzintla, al Sur con Ixtacamaxtitlán, al Oeste con Xochiapulco y Zautla, y al Poniente con Aquixtla, Zacatlán e Ixtacamaxtitlán.',
          extension: 'Tiene una superficie de 328.80 kilómetros cuadrados lo que lo ubica en el lugar 27º con respecto a los demás municipios del Estado',
          clima: 'El municipio se ubica dentro de la zona de climas templados de la Sierra Norte; conforme se avanza de sur a norte, se incrementa la humedad, identificándose los siguientes climas: clima templado subhúmedo con lluvias en verano; temperatura media anual entre 12 y 18ºC; precipitación del mes más seco menor de 40 milímetros; por ciento de precipitación invernal con respecto a la anual menor de 5. Cubre una amplia franja del centro. clima templado húmedo con lluvias todo el año; temperatura media anual entre 12 y 18ºC; temperatura del mes más frío entre -3 y 18ºC; precipitación del mes más seco mayor de 40 milímetros; por ciento de precipitación de lluvia invernal con respecto a la anual, menor de 18. Se presenta al extremo noroeste. clima semicálido subhúmedo con lluvias todo el año; temperatura media anual mayor de 18ºC; temperatura del mes más frío entre -3 y 18ºC; precipitación del mes más seco mayor de 40 milímetros; porciento de la lluvia invernal con respecto a la anual, menor de 18. Se presenta en el extremo noroeste del municipio',
          recursos: 'Cuentan con recursos forestales tales como bosques de pino chino, ocote, encino y encino negro: o    En cuento a fauna silvestre existe conejo, ardilla, armadillo y tlacuache. o    Existen yacimientos y minas de oro en la comunidad de la cañada. ',
          principales:'El municipio presenta la mayor parte de su territorio cubierto de bosques, tanto de pinos, como de asociaciones de pino-encino, destacan los siguientes: pino colorado, lacia y ayacahuite; encino colorado, cesante y oyamel. o   Entre mezclados en las zonas montañosas, generalmente a los lados de las carreteras y de algunos ríos, se encuentran áreas incorporadas a la actividad agrícola de tipo temporal, que poco a poco le han ido ganando terreno a los bosques. Al poniente, a lo largo de la carretera Aquixtla-Tetela de Ocampo, se ha implantado una zona de riego, usando las aguas del río Texocoapa.'
      },
      {
          idR:1,
          id:4,
          nombre:'Xicotepec',
          imagen:'assets/images/sierraNorte/xicotepec.png',
          descripcion: 'El municipio de Xicotepec de Juárez se localiza en la parte Noroeste del estado de Puebla. Sus coordenadas geográficas son los paralelos 20º 14" 18" y 20º 26" 12" de latitud norte y los meridianos 97º 45" 00" y 98º 03" 06" de longitud occidental. Sus colindancias son al Norte con Jalpan, al Sur con Juan Galindo y Zihuateutla, al Oeste con Zihuateutla y al Poniente con Tlacuilotepec.',
          extension: 'Tiene una superficie de 312.30 kilómetros cuadrados que lo ubican en el lugar 34 con respecto a los demás municipios del estado',
          clima: 'En el municipio se presenta la transición de los climas templados de la sierra norte, a los cálidos del declive del Golfo; se identifican dos climas: clima semicálido subhúmedo con lluvias todo el año; temperatura media anual mayor de 18ºC; temperatura del mes más frío entre -3º y 18ºC; precipitación del mes más seco mayor de 40 milímetros; la lluvia invernal con respecto a la anual es menor en un 18 por ciento. Es el clima predominante, se identifica en la porción central y meridional.  Clima cálido-húmedo con lluvias todo el año; temperatura media anual mayor de 22ºC; temperatura del mes más frío mayor de 18ºC; la lluvia invernal con respecto a la anual es menor de 18 por ciento; la precipitación del mes más seco es mayor de 60 milímetros. Se identifica en la porción septentrional del municipio',
          recursos: 'Existen bosques de encino y de explotación forestal, en esta actividad se explotan las maderas finas y de construcción. Minería: En esta rama económica tenemos en existencia, barita, plomo, arcilla, feldespato, cobre, plata y el beneficiado es el no metálico barita',
          principales:'La mayor parte del territorio ha perdido su vegetación natural; tan sólo subsisten algunas áreas de selva alta perennifolia al noreste y suroeste y centro-este'
      },
      {
          idR:1,
          id:5,
          nombre:'Xochiapulco',
          imagen:'assets/images/sierraNorte/xochiapulco.png',
          descripcion: 'El municipio de Xochiapulco se localiza en la parte norte del estado de Puebla sus coordenadas geográficas son: los paralelos 19º 47" 36" y 19º 37" 06" de latitud norte y los meridianos 97º 37" 06" y 96º 46" 00" de longitud Occidental. Colindancias: Al Norte: Con Xochitlán de Vicente Suarez. Al Este: Con Zacapoaxtla. Al Sur: Con Zautlan y Al Oeste: Con Tetela de Ocampo',
          extension: 'Tiene una superficie de 59.73 kilómetros cuadrados, que lo ubica en el lugar 114 con respecto a los demás municipios del estado',
          clima: 'El municipio se localiza en las zonas de climas templados de la Sierra Norte, destacan dos climas: Clima Templado Húmedo con abundantes lluvias todo el año. Se presenta en la mayor área del municipio. Clima Templado con abundantes lluvias en verano, se presentan en un área reducida al norte',
          recursos: 'Se explota la madera de pino',
          principales:'La mayor parte del municipio es cubierto de asociaciones de pino-encino, de donde prodomina el pino colorado, pino lacio, encino glabrescens y encino carrasco. Sin embargo, estos bosques poco a poco están siendo eliminados para utilizar su madera y para abrir nuevas zonas al cultivo; así, el suroeste y sureste en áreas accesibles por carretera aparecen zonas dedicadas a la Agricultura de temporal.'
      },
      {
          idR:1,
          id:6,
          nombre:'Zacatlan',
          imagen:'assets/images/sierraNorte/zacatlan.png',
          descripcion: 'Se localiza en la parte Noroeste del estado, sus coordenadas geográficas son los paralelos 19º 50" 06" y 20º 08" 12" de latitud norte de los meridianos 97º 51" 06 y 98º 12" 36", de longitud occidental. Sus colindancias son al Norte con Chiconcuautla y Huauchinango, al Sur con Aquixtla y Chignahuapan, al Oeste con Ahuacatlán, Tepetzintla y Tetela de Ocampo y al Poniente con Ahuazotepec y el estado de Hidalgo',
          extension: 'Tiene una superficie de 489.33 kilómetros cuadrados, que lo ubican en el séptimo lugar respecto a los demás municipios del estado',
          clima: 'Se localiza dentro de la zona de los climas templados; presenta un incremento de humedad conforme se avanza de sur a norte; se identifican los siguientes climas: clima templado subhúmedo, con lluvias en verano, temperatura media anual entre 12 y 18ºC; se presenta al extremo suroeste y extremo sureste. Clima templado húmedo, con abundantes lluvias en verano; temperatura media anual entre 12 y 18ºC, precipitación del mes más seco menor de 40 milímetros, es el clima predominante, se presenta en una franja latitudinal que cruza el municipio por el centro. Clima templado húmedo, con lluvias todo el año, temperatura media anual entre 12 y 18ºC. Precipitación del mes más seco, mayor de 40 milímetros por ciento de lluvia invernal con respecto a la anual es menor de 18. Se presenta en el norte del municipio. Clima semicálido subhúmedo con lluvias todo el año temperatura media anual mayor de 18ºC precipitación del mes más seco mayor de 40 milímetros; por ciento de lluvia invernal con respecto a la media anual menor de 18º. Se identifica en un área muy reducida del extremo norte',
          recursos: 'Mineria: Es rico en recursos minerales, encontrando yacimientos de manganeso, hierro calcita, fosforita, zinc, cuarzo, feldespato, barita, oro, plata, plomo, cobre y antimonio. Explotación Forestal: Cuenta con bosques en donde existen maderas finas como caoba, cedro, utilizados para la fabricación de muebles, en su mayoría existen pinos de diferentes especies utilizados para la construcción, artefactos de madera y muebles rústicos.',
          principales:'El municipio presenta grandes extensiones de bosques de coníferas, principalmente de pinos, asociaciones de boscosas de pino-encino y mesófilo de montaña; en ella se identifican especies tales como pino blanco, madroño, pino hartwegii, pino contorto, pino lacio, pino colorado sahuaro, oyamel, ocote blanco, pino chino, etc. Se encuentran dispersas por todo el territorio, destacando por su Extensión las zonas boscosas del centro, norte, este y extremo oeste.'
      }
  ];

   SNOR:any[] = [
    {
        idR:2,
        id:0,
        nombre:'Teziutlan',
        imagen:'assets/images/nororiental/teziutlan.jpg',
        descripcion: "El municipio de Teziutlán se localiza en la parte noroeste del Estado de Puebla. Sus coordenadas geográficas son los paralelos 19º 47' 06'' y 19º 58' 12'' de latitud norte y 97º 18' 54'' y 97º 23' 18'' de longitud occidental. Colindancias: Al Norte: Con Hueyapan y Hueytamalco. Al Este: Con Xiutetelco y Jalacingo, Veracruz. Al Sur: Con Atempan y Chignautla. Al Oeste: Con Yaonáhuac.",
        extension: 'Tiene una superficie de 92.64 kilómetros cuadrados que lo ubica en el 134º lugar con respecto a los demás municipios del Estado.',
        clima: 'El Municipio se localiza en la transición de los climas templados de la Sierra Norte, a los cálidos del declive del Golfo; se identifican tres climas: Clima templado húmedo con lluvias en verano. Se presenta en una pequeña área del extremo Sur del Municipio. Clima templado húmedo con lluvias todo el año. Se intensifica en una en una franja latitudinal al centro y sur del Municipio. Clima Semicálido Húmedo, con abundante lluvias todo el año. Se presenta en el Norte del Municipio.',
        recursos: 'Los recursos más importantes son sus manantiales naturales',
        principales:'Los bosques siguen predominando al norte, existen mesófilo de montaña de encino y en ocasiones de pino-encino; en ellos se encuentran especies, tales como pino colorado, liquidámbar, encino y jaboncillo; en cuanto a fauna se encuentran: mázate, variedades de aves canoras como el clarín, zorras, zorrillos, siete rayas; variedad de víboras como la cascabel, etc.'
      },
      {
        idR:2,
        id:1,
        nombre:'Zacapoaxtla',
        imagen:'assets/images/nororiental/zacapoaxtla.jpg',
        descripcion: "El Municipio de Zacapoaxtla se localiza en la parte norte del estado de Puebla sus coordenadas geográficas son los paralelos 19º 44'18'' y 19º 59'18'', de latitud Norte y los meridianos 97º 31'42'' y 97º 37'54'' de longitud Occidental. Colindancias: Al Norte: con Cuetzalán del Progreso y Nauzontla. Al Este: con Tlatlauquitepec y Zaragoza. Al Sur: con Zautla. Al Oeste: con Xochiapulco y Nauzontla.",
        extension: 'Tiene una superficie de 176.64 kilómetros cuadrados, que lo ubica en el lugar 66 con respecto a los demás municipios del Estado.',
        clima: 'El Municipio se localiza en la zona de transición entre los templados de la Sierra Norte y los cálidos del declive del golfo; Clima templado subhúmedo con lluvias de verano. Se presenta en la zona sur del municipio. Clima templado húmedo con abundante lluvia en verano. Es el clima predominante se identifica en la parte central. Clima templado húmedo con lluvias todo el año. Se presenta en la parte septentrional del municipio. Clima semicálido subhúmedo, con lluvias todo el año. Se identifica en las márgenes del río Apulco.',
        recursos: 'Se explota la madera de los bosques de la región de la sierra.',
        principales:'El municipio ha perdido una buena parte de su vegetación original; sin embargo, aún subsisten grandes zonas boscosas: al norte, a lo largo del río Apulco cuenta con áreas considerables de bosque mesófilo de montaña, constituido por especies arbóreas tales como jaboncillo, liquidámbar. En cuanto a fauna existen variedades silvestres existiendo especies tales como: conejo, mapache, tlacuache, ardilla, zorro, cacomixtle, liebre, tuza, rata de campo, ratón, zorrillo, armadillo, entre las aves encontramos: búho, lechuza, gavilán, gorrión, zahuate, jilguero, paloma, colibrí, mirto y tordo, entre otros; reptiles como: Lagartija, escorpión, ajolote y víbora.'
      },{
        idR:2,
        id:2,
        nombre:'Zautla',
        imagen:'assets/images/nororiental/zautla.jpg',
        descripcion: "Sus coordenadas geográficas son los Paralelos 19º 39' 00'' y 19º 48' 18'', de latitud Norte y los meridianos 97º 34'18'' y 97º46'24'' de longitud Occidental. Colindancias: Al Norte: con Xochiapulco. Al Este: con Zacapoaxtla y Tlatlauquitepec. Al Sur: con Cuyoaco e Ixtacamaxtitlán. Al Oeste: con Tetela de Ocampo.",
        extension: 'Tiene una superficie de 266.70 kilómetros cuadrados. que lo ubica en el lugar 38 con respecto a los demás municipios del estado',
        clima: 'El Municipio se localiza dentro de la zona de climas templados, se identifican tres climas: clima templado húmedo, con abundantes lluvias en verano. Se presenta en el extremo norte. Clima templado subhúmedo con lluvias de verano; es el clima predominante, ocupa la parte meridional del municipio. Clima templado húmedo con lluvia en verano; presenta en una franja latitudinal al norte del municipio.',
        recursos: 'Se explotan los bosques de madera como son; pino colorado, pino lacio, encino quebrado ocote oyameles y soyate, para la construcción.',
        principales:'La mayor parte de municipio esta cubierta por bosques de pino y asociaciones de pino-encino; destacan especies arbóreas siguientes: pino colorado, pino lacio, encino quebrado, ocote, oyamel y soyate acompañados en ocasiones por vegetación secundaria arbustiva.'
      }
  ];

   Ang:any[] = [
      {
        idR:3,
        id:0,
        nombre:'Calpan',
        imagen:'assets/images/angelopolis/calpan.jpg',
        descripcion: 'El mapa general de la República Mexicana señala que el municipio de Chignahuapan se localiza en el estado de Puebla. Debido a la posición geográfica que tiene, se sitúa entre las coordenadas 19° 39" 42" y 19° 58" 48" latitud norte del trópico de cáncer y entre 97° 57" 18" y 98° 18" 06" longitud oeste del meridiano de Greenwich. La altitud promedio de dicho municipio es de 700 metros sobre el nivel del mar (msnm). Está formado por una extensión territorial de 591.92 kilómetros cuadrados. Chignahuapan se encuentra territorialmente rodeado al norte por el municipio de Zacatlán, al sur por el estado de Tlaxcala, al oeste una vez más por Zacatlán y Aquixtla, finalmente al poniente se encuentra el estado de Hidalgo. En otra información, el Instituto Nacional de Estadística y Geografía señaló que, de acuerdo con los resultados obtenidos del tercer conteo de población realizado durante el 2010, el municipio de Chignahuapan cuenta con una población total de 57,904',
        extension: 'Tiene una superficie de 760.23 Km^2, que lo ubica en el 3 lugar con respecto a los demás municipios del estado',
        clima: 'El municipio se localiza dentro de la zona de los templados de la sierra norte; se identifican dos climas: o    Clima semifrío subhúmedo con lluvias en verano; temperatura media anual entre 5 y 12ºC; temperatura del mes más frío entre -3 y, 18ºC; precipitación del mes más seco menor de 40 milímetros; la precipitación invernal con respecto a la anual es entre 5 y 10.2 por ciento. o Se presentan en las cumbres del peñón del Rosario y en los cerros las Tablas, así como en el conjunto montañoso del extremo oeste. o    El templado subhúmedo con lluvias en verano; temperatura media anual entre 12 y 18ºC; temperatura del mes más frío entre -3 y 18ºC; precipitación del mes más seco menor de 40 milímetros; la precipitación invernal con respecto a la anual es entre 5 y 10.2 por ciento. o    Se identifica en las estribaciones bajas del peñón del Rosario y de los cerros Las Tablas, así como el extremo norte. Es el clima predominante  ',
        recursos: 'Cuenta con una gran variedad de especies forestales, mismos que son explotados y que convierten el municipio en uno de los principales productores de madera a nivel estatal: o  Minería: entre sus principales yacimientos encontramos: ocre, tepelttxyl-arcilla',
        principales:''
    },
    {
      idR:3,
        id:1,
        nombre:'Cuatlancingo',
        imagen:'assets/images/angelopolis/cuatlan.jpg',
        descripcion: 'Se localiza en la parte noroeste del estado. Sus coordenadas geográficas son los paralelos 20º 05" 30" y 20º 17" 06" de latitud norte de los meridianos 97º 57" 00" y 98º 08" 06" de longitud occidental. Sus colindancias son: al Norte con Xicotepec de Juárez y Juan Galindo, al Sur con Ahuazotepec y Zacatlán, al Oeste con Juan Galindo y Tlaola y al Poniente con Naupan, Ahuazotepec y el Estado de Hidalgo. Cuenta con 44 Localidades, de las cuales las más importantes son: Tenango de las Flores, El Potro, Cuacuila, Ahuacatlán y Xaltepec',
        extension: 'Tiene una superficie de 250.41 Km^2 que lo ubica en lugar 84 con respecto a los demás municipios del Estado',
        clima: 'En el municipio se pueden identificar dos climas: clima templado húmedo, con lluvias todo el año; temperatura media anual entre 12 y 18º C; temperatura del mes más frío entre -3 y 18º C; precipitación del mes más seco mayor de 40 milímetros, por ciento de lluvia invernal con respecto a la anual es menor de 18. clima semicálido subhúmedo, con lluvias todo el año; temperatura media anual mayor de 18º C; precipitación del mes más seco mayor de 40 milímetros, por ciento de lluvia, invernal con respecto a la anual menor de 18. Se presenta en las partes más bajas del municipio al oriente.',
        recursos: 'Cuenta con bosques de pino, existen criaderos de trucha en Teopancingo y carpa en la presa de Tenango',
        principales:''
    },
    {
      idR:3,
        id:2,
        nombre:'Huejotzingo',
        imagen:'assets/images/angelopolis/huejo.jpg',
        descripcion: 'Se localiza en la parte Noroeste, del estado de Puebla, sus coordenadas geográficas son: los paralelos 20º 12" 24" y 20º 14" 24" de latitud norte y los meridianos 97º 57" 00" y 98º 01" 24" de longitud occidental. Sus colindancias son al Norte con Xicotepec, al Sur con Huauchinango y Tlaola, al Oeste con Xicotepec y Zihuateutla y al Poniente con Huauchinango.',
        extension: 'Tiene una superficie de 23.15 kilómetros cuadrados que lo ubican en el lugar 175 con respecto a los demás municipios del estado',
        clima: 'El municipio se ubica en la transición de los climas templados de la Sierra Norte y los cálidos del declive del Golfo; presenta dos climas: clima semicálido: Subhúmedo con lluvias todo el año temperatura media anual mayor de 18ºC; temperatura del mes más frío entre 3 y 18ºC; precipitación del mes más seco mayor de 40 milímetros; por ciento de lluvia invernal con respecto a la anual menor de 18. Es el clima predominante; se identifica en la porción central y sudoccidental. clima cálido: Con lluvias todo el año; temperatura media anual mayor de 22ºC; la temperatura del mes más frío es mayor de 18ºC; existe una diferencia porcentual de lluvia invernal con respecto a la anual menor de 18; la precipitación del mes más seco es mayor de 60 milímetros y se presenta en la porción oriental del municipio',
        recursos: '',
        principales:'El municipio conserva pocas áreas con vegetación natural; tan sólo quedan bosques de pino-encino en áreas reducidas al poniente y al sur. El resto del territorio ha sufrido una fuerte deforestación; se han implantado pastizales al norte y en la porción central se cuentan con zonas dedicadas a la Agricultura. '
    },
    {
      idR:3,
        id:3,
        nombre:'Puebla',
        imagen:'assets/images/angelopolis/puebla.jpg',
        descripcion: 'El municipio de Tetela de Ocampo se localiza en la parte Norte del Estado de Puebla. Sus coordenadas geográficas son los paralelos 19º 43" 00" y 19º 57" 06" de latitud norte y los meridianos 97º 38" 42" y 97º 54" 06" de longitud occidental. Sus colindancias son al Norte con Cuautempan y Tepetzintla, al Sur con Ixtacamaxtitlán, al Oeste con Xochiapulco y Zautla, y al Poniente con Aquixtla, Zacatlán e Ixtacamaxtitlán.',
        extension: 'Tiene una superficie de 328.80 kilómetros cuadrados lo que lo ubica en el lugar 27º con respecto a los demás municipios del Estado',
        clima: 'El municipio se ubica dentro de la zona de climas templados de la Sierra Norte; conforme se avanza de sur a norte, se incrementa la humedad, identificándose los siguientes climas: clima templado subhúmedo con lluvias en verano; temperatura media anual entre 12 y 18ºC; precipitación del mes más seco menor de 40 milímetros; por ciento de precipitación invernal con respecto a la anual menor de 5. Cubre una amplia franja del centro. clima templado húmedo con lluvias todo el año; temperatura media anual entre 12 y 18ºC; temperatura del mes más frío entre -3 y 18ºC; precipitación del mes más seco mayor de 40 milímetros; por ciento de precipitación de lluvia invernal con respecto a la anual, menor de 18. Se presenta al extremo noroeste. clima semicálido subhúmedo con lluvias todo el año; temperatura media anual mayor de 18ºC; temperatura del mes más frío entre -3 y 18ºC; precipitación del mes más seco mayor de 40 milímetros; porciento de la lluvia invernal con respecto a la anual, menor de 18. Se presenta en el extremo noroeste del municipio',
        recursos: 'Cuentan con recursos forestales tales como bosques de pino chino, ocote, encino y encino negro: o    En cuento a fauna silvestre existe conejo, ardilla, armadillo y tlacuache. o    Existen yacimientos y minas de oro en la comunidad de la cañada. ',
        principales:'El municipio presenta la mayor parte de su territorio cubierto de bosques, tanto de pinos, como de asociaciones de pino-encino, destacan los siguientes: pino colorado, lacia y ayacahuite; encino colorado, cesante y oyamel. o   Entre mezclados en las zonas montañosas, generalmente a los lados de las carreteras y de algunos ríos, se encuentran áreas incorporadas a la actividad agrícola de tipo temporal, que poco a poco le han ido ganando terreno a los bosques. Al poniente, a lo largo de la carretera Aquixtla-Tetela de Ocampo, se ha implantado una zona de riego, usando las aguas del río Texocoapa.'
    },
    {
      idR:3,
        id:4,
        nombre:'San Andrés Cholula',
        imagen:'assets/images/angelopolis/sanAndres.jpg',
        descripcion: 'El municipio de Xicotepec de Juárez se localiza en la parte Noroeste del estado de Puebla. Sus coordenadas geográficas son los paralelos 20º 14" 18" y 20º 26" 12" de latitud norte y los meridianos 97º 45" 00" y 98º 03" 06" de longitud occidental. Sus colindancias son al Norte con Jalpan, al Sur con Juan Galindo y Zihuateutla, al Oeste con Zihuateutla y al Poniente con Tlacuilotepec.',
        extension: 'Tiene una superficie de 312.30 kilómetros cuadrados que lo ubican en el lugar 34 con respecto a los demás municipios del estado',
        clima: 'En el municipio se presenta la transición de los climas templados de la sierra norte, a los cálidos del declive del Golfo; se identifican dos climas: clima semicálido subhúmedo con lluvias todo el año; temperatura media anual mayor de 18ºC; temperatura del mes más frío entre -3º y 18ºC; precipitación del mes más seco mayor de 40 milímetros; la lluvia invernal con respecto a la anual es menor en un 18 por ciento. Es el clima predominante, se identifica en la porción central y meridional.  Clima cálido-húmedo con lluvias todo el año; temperatura media anual mayor de 22ºC; temperatura del mes más frío mayor de 18ºC; la lluvia invernal con respecto a la anual es menor de 18 por ciento; la precipitación del mes más seco es mayor de 60 milímetros. Se identifica en la porción septentrional del municipio',
        recursos: 'Existen bosques de encino y de explotación forestal, en esta actividad se explotan las maderas finas y de construcción. Minería: En esta rama económica tenemos en existencia, barita, plomo, arcilla, feldespato, cobre, plata y el beneficiado es el no metálico barita',
        principales:'La mayor parte del territorio ha perdido su vegetación natural; tan sólo subsisten algunas áreas de selva alta perennifolia al noreste y suroeste y centro-este'
    },
    {
      idR:3,
        id:5,
        nombre:'San Pedro Cholula',
        imagen:'assets/images/angelopolis/sanP.jpg',
        descripcion: 'El municipio de Xochiapulco se localiza en la parte norte del estado de Puebla sus coordenadas geográficas son: los paralelos 19º 47" 36" y 19º 37" 06" de latitud norte y los meridianos 97º 37" 06" y 96º 46" 00" de longitud Occidental. Colindancias: Al Norte: Con Xochitlán de Vicente Suarez. Al Este: Con Zacapoaxtla. Al Sur: Con Zautlan y Al Oeste: Con Tetela de Ocampo',
        extension: 'Tiene una superficie de 59.73 kilómetros cuadrados, que lo ubica en el lugar 114 con respecto a los demás municipios del estado',
        clima: 'El municipio se localiza en las zonas de climas templados de la Sierra Norte, destacan dos climas: Clima Templado Húmedo con abundantes lluvias todo el año. Se presenta en la mayor área del municipio. Clima Templado con abundantes lluvias en verano, se presentan en un área reducida al norte',
        recursos: 'Se explota la madera de pino',
        principales:'La mayor parte del municipio es cubierto de asociaciones de pino-encino, de donde prodomina el pino colorado, pino lacio, encino glabrescens y encino carrasco. Sin embargo, estos bosques poco a poco están siendo eliminados para utilizar su madera y para abrir nuevas zonas al cultivo; así, el suroeste y sureste en áreas accesibles por carretera aparecen zonas dedicadas a la Agricultura de temporal.'
    }
      
  ];

   T: Municipio []=[
    {
      idR:5,
        id:0,
        nombre:'Tehuacan',
        imagen:'assets/images/Tehuacan/tehuacan.jpg',
        descripcion: "El municipio de Tehuacán se localiza en la parte sureste del Estado de Puebla. Sus coordenadas geográficas son los paralelos 18º22'06'' y 18º36'12'' de longitud norte, y los meridianos 97º15'24'' y 97º37'24'' de longitud occidental. Sus colindancias son al Norte con Tepanco de López, Santiago Miahuatlán, Nicolás Bravo y Vicente Guerrero, al Este con Vicente Guerrero, San Antonio Cañada y Ajalpan, al Sur con San Gabriel Chilac, Zapotitlán y Altepexi y al Oeste con Zapotitlán, San Martín Atexcal, Juan N. Méndez y Tepango de López.",
        extension: 'El municipio de Tehuacán representa el 1.15% de la superficie del Estado. Abarcando una Extensión aproximada de 553.57 kilómetros cuadrados, que lo ubican en el lugar 18º con respecto a los demás municipios del Estado',
        clima: 'Por su ubicación Extensión y configuración presenta una gran variedad de climas que van desde los templados en la sierra de Zapotitlán, hasta los templados de la Sierra de Zongolica, pasando por los cálidos del Valle de Tehuacán. clima templado subhúmedo con lluvias en verano; se ubica en el extremo poniente de la parte elevada de la Sierra de Zapotitlán. Clima seco semicálido con lluvias en verano y escasas a lo largo del año; se identifica en la parte sur del municipio, dentro del Valle de Tehuacán. Clima semiseco cálido lluvias en verano y escasas a lo largo del año; es el clima predominante en el área correspondiente al Valle de Tehuacán. Clima semiseco templado con lluvias en verano y escasas a lo largo del año; es el clima que se presenta entre las zonas orientales del Valle de Tehuacán, y las primeras estribaciones de la Sierra de Zongolica',
        recursos: 'Los recursos más importantes son sus manantiales naturales',
        principales:'El municipio presenta una gran variedad vegetativa. En áreas del Valle que no están suficientemente planas, pero que tampoco son demasiado accidentadas, se presentan zonas de mezquitales. La vegetación que presentan el declive oriental de la Sierra de Zapotitlán y el occidental de la Sierra de Zongolica, constituida, principalmente, por matorral desértico rosetófilo, en ocasiones asociado a vegetación secundaria arbustiva o matorral subinerme; también se encuentran chaparrales y vegetación de selva baja caducifolia. El noreste, del municipio donde la Sierra de Zongolica alcanza mayor altura y el clima ya es templado, se presentan bosques de pino-encino y pino.'
      }
  ];

   MIX:any[] = [
    {
        idR:4,
        id:0,
        nombre:'Huitsiltepec',
        imagen:'assets/images/mixteca/huitsil.jpg',
        descripcion: "El municipio de Tehuacán se localiza en la parte sureste del Estado de Puebla. Sus coordenadas geográficas son los paralelos 18º22'06'' y 18º36'12'' de longitud norte, y los meridianos 97º15'24'' y 97º37'24'' de longitud occidental. Sus colindancias son al Norte con Tepanco de López, Santiago Miahuatlán, Nicolás Bravo y Vicente Guerrero, al Este con Vicente Guerrero, San Antonio Cañada y Ajalpan, al Sur con San Gabriel Chilac, Zapotitlán y Altepexi y al Oeste con Zapotitlán, San Martín Atexcal, Juan N. Méndez y Tepango de López.",
        extension: 'El municipio de Tehuacán representa el 1.15% de la superficie del Estado. Abarcando una Extensión aproximada de 553.57 kilómetros cuadrados, que lo ubican en el lugar 18º con respecto a los demás municipios del Estado',
        clima: 'Por su ubicación Extensión y configuración presenta una gran variedad de climas que van desde los templados en la sierra de Zapotitlán, hasta los templados de la Sierra de Zongolica, pasando por los cálidos del Valle de Tehuacán. clima templado subhúmedo con lluvias en verano; se ubica en el extremo poniente de la parte elevada de la Sierra de Zapotitlán. Clima seco semicálido con lluvias en verano y escasas a lo largo del año; se identifica en la parte sur del municipio, dentro del Valle de Tehuacán. Clima semiseco cálido lluvias en verano y escasas a lo largo del año; es el clima predominante en el área correspondiente al Valle de Tehuacán. Clima semiseco templado con lluvias en verano y escasas a lo largo del año; es el clima que se presenta entre las zonas orientales del Valle de Tehuacán, y las primeras estribaciones de la Sierra de Zongolica',
        recursos: 'Los recursos más importantes son sus manantiales naturales',
        principales:'El municipio presenta una gran variedad vegetativa. En áreas del Valle que no están suficientemente planas, pero que tampoco son demasiado accidentadas, se presentan zonas de mezquitales. La vegetación que presentan el declive oriental de la Sierra de Zapotitlán y el occidental de la Sierra de Zongolica, constituida, principalmente, por matorral desértico rosetófilo, en ocasiones asociado a vegetación secundaria arbustiva o matorral subinerme; también se encuentran chaparrales y vegetación de selva baja caducifolia. El noreste, del municipio donde la Sierra de Zongolica alcanza mayor altura y el clima ya es templado, se presentan bosques de pino-encino y pino.'
      },
      {
        idR:4,
        id:1,
        nombre:'San Pablo Aninaco',
        imagen:'assets/images/mixteca/sanpablo.jpg',
        descripcion: "El municipio de Tehuacán se localiza en la parte sureste del Estado de Puebla. Sus coordenadas geográficas son los paralelos 18º22'06'' y 18º36'12'' de longitud norte, y los meridianos 97º15'24'' y 97º37'24'' de longitud occidental. Sus colindancias son al Norte con Tepanco de López, Santiago Miahuatlán, Nicolás Bravo y Vicente Guerrero, al Este con Vicente Guerrero, San Antonio Cañada y Ajalpan, al Sur con San Gabriel Chilac, Zapotitlán y Altepexi y al Oeste con Zapotitlán, San Martín Atexcal, Juan N. Méndez y Tepango de López.",
        extension: 'El municipio de Tehuacán representa el 1.15% de la superficie del Estado. Abarcando una Extensión aproximada de 553.57 kilómetros cuadrados, que lo ubican en el lugar 18º con respecto a los demás municipios del Estado',
        clima: 'Por su ubicación Extensión y configuración presenta una gran variedad de climas que van desde los templados en la sierra de Zapotitlán, hasta los templados de la Sierra de Zongolica, pasando por los cálidos del Valle de Tehuacán. clima templado subhúmedo con lluvias en verano; se ubica en el extremo poniente de la parte elevada de la Sierra de Zapotitlán. Clima seco semicálido con lluvias en verano y escasas a lo largo del año; se identifica en la parte sur del municipio, dentro del Valle de Tehuacán. Clima semiseco cálido lluvias en verano y escasas a lo largo del año; es el clima predominante en el área correspondiente al Valle de Tehuacán. Clima semiseco templado con lluvias en verano y escasas a lo largo del año; es el clima que se presenta entre las zonas orientales del Valle de Tehuacán, y las primeras estribaciones de la Sierra de Zongolica',
        recursos: 'Los recursos más importantes son sus manantiales naturales',
        principales:'El municipio presenta una gran variedad vegetativa. En áreas del Valle que no están suficientemente planas, pero que tampoco son demasiado accidentadas, se presentan zonas de mezquitales. La vegetación que presentan el declive oriental de la Sierra de Zapotitlán y el occidental de la Sierra de Zongolica, constituida, principalmente, por matorral desértico rosetófilo, en ocasiones asociado a vegetación secundaria arbustiva o matorral subinerme; también se encuentran chaparrales y vegetación de selva baja caducifolia. El noreste, del municipio donde la Sierra de Zongolica alcanza mayor altura y el clima ya es templado, se presentan bosques de pino-encino y pino.'
      },
      {
        idR:4,
        id:2,
        nombre:'Teotlalco',
        imagen:'assets/images/mixteca/teotlaco',
        descripcion: "El municipio de Tehuacán se localiza en la parte sureste del Estado de Puebla. Sus coordenadas geográficas son los paralelos 18º22'06'' y 18º36'12'' de longitud norte, y los meridianos 97º15'24'' y 97º37'24'' de longitud occidental. Sus colindancias son al Norte con Tepanco de López, Santiago Miahuatlán, Nicolás Bravo y Vicente Guerrero, al Este con Vicente Guerrero, San Antonio Cañada y Ajalpan, al Sur con San Gabriel Chilac, Zapotitlán y Altepexi y al Oeste con Zapotitlán, San Martín Atexcal, Juan N. Méndez y Tepango de López.",
        extension: 'El municipio de Tehuacán representa el 1.15% de la superficie del Estado. Abarcando una Extensión aproximada de 553.57 kilómetros cuadrados, que lo ubican en el lugar 18º con respecto a los demás municipios del Estado',
        clima: 'Por su ubicación Extensión y configuración presenta una gran variedad de climas que van desde los templados en la sierra de Zapotitlán, hasta los templados de la Sierra de Zongolica, pasando por los cálidos del Valle de Tehuacán. clima templado subhúmedo con lluvias en verano; se ubica en el extremo poniente de la parte elevada de la Sierra de Zapotitlán. Clima seco semicálido con lluvias en verano y escasas a lo largo del año; se identifica en la parte sur del municipio, dentro del Valle de Tehuacán. Clima semiseco cálido lluvias en verano y escasas a lo largo del año; es el clima predominante en el área correspondiente al Valle de Tehuacán. Clima semiseco templado con lluvias en verano y escasas a lo largo del año; es el clima que se presenta entre las zonas orientales del Valle de Tehuacán, y las primeras estribaciones de la Sierra de Zongolica',
        recursos: 'Los recursos más importantes son sus manantiales naturales',
        principales:'El municipio presenta una gran variedad vegetativa. En áreas del Valle que no están suficientemente planas, pero que tampoco son demasiado accidentadas, se presentan zonas de mezquitales. La vegetación que presentan el declive oriental de la Sierra de Zapotitlán y el occidental de la Sierra de Zongolica, constituida, principalmente, por matorral desértico rosetófilo, en ocasiones asociado a vegetación secundaria arbustiva o matorral subinerme; también se encuentran chaparrales y vegetación de selva baja caducifolia. El noreste, del municipio donde la Sierra de Zongolica alcanza mayor altura y el clima ya es templado, se presentan bosques de pino-encino y pino.'
      },
      {
        idR:4,
        id:3,
        nombre:'Tepexi de Rodriguez',
        imagen:'assets/images/mixteca/tepexiR.jpg',
        descripcion: "El municipio de Tehuacán se localiza en la parte sureste del Estado de Puebla. Sus coordenadas geográficas son los paralelos 18º22'06'' y 18º36'12'' de longitud norte, y los meridianos 97º15'24'' y 97º37'24'' de longitud occidental. Sus colindancias son al Norte con Tepanco de López, Santiago Miahuatlán, Nicolás Bravo y Vicente Guerrero, al Este con Vicente Guerrero, San Antonio Cañada y Ajalpan, al Sur con San Gabriel Chilac, Zapotitlán y Altepexi y al Oeste con Zapotitlán, San Martín Atexcal, Juan N. Méndez y Tepango de López.",
        extension: 'El municipio de Tehuacán representa el 1.15% de la superficie del Estado. Abarcando una Extensión aproximada de 553.57 kilómetros cuadrados, que lo ubican en el lugar 18º con respecto a los demás municipios del Estado',
        clima: 'Por su ubicación Extensión y configuración presenta una gran variedad de climas que van desde los templados en la sierra de Zapotitlán, hasta los templados de la Sierra de Zongolica, pasando por los cálidos del Valle de Tehuacán. clima templado subhúmedo con lluvias en verano; se ubica en el extremo poniente de la parte elevada de la Sierra de Zapotitlán. Clima seco semicálido con lluvias en verano y escasas a lo largo del año; se identifica en la parte sur del municipio, dentro del Valle de Tehuacán. Clima semiseco cálido lluvias en verano y escasas a lo largo del año; es el clima predominante en el área correspondiente al Valle de Tehuacán. Clima semiseco templado con lluvias en verano y escasas a lo largo del año; es el clima que se presenta entre las zonas orientales del Valle de Tehuacán, y las primeras estribaciones de la Sierra de Zongolica',
        recursos: 'Los recursos más importantes son sus manantiales naturales',
        principales:'El municipio presenta una gran variedad vegetativa. En áreas del Valle que no están suficientemente planas, pero que tampoco son demasiado accidentadas, se presentan zonas de mezquitales. La vegetación que presentan el declive oriental de la Sierra de Zapotitlán y el occidental de la Sierra de Zongolica, constituida, principalmente, por matorral desértico rosetófilo, en ocasiones asociado a vegetación secundaria arbustiva o matorral subinerme; también se encuentran chaparrales y vegetación de selva baja caducifolia. El noreste, del municipio donde la Sierra de Zongolica alcanza mayor altura y el clima ya es templado, se presentan bosques de pino-encino y pino.'
      }
  ];

  imagenes: any =[
    {
      id: '1',
      imagen: 'assets/img/uno.jpeg',
      desc: 'Taller realizado'
    },
    {
      id: '2',
      imagen: 'assets/img/dos.jpeg',
      desc: 'Taller realizado'
    },
    {
      id: '3',
      imagen: 'assets/img/tres.jpeg',
      desc: 'Taller realizado'
    },
    {
      id: '4',
      imagen: 'assets/img/cuatro.jpeg',
      desc: 'Taller realizado'
    },
    {
      id: '5',
      imagen: 'assets/img/cinco.jpeg',
      desc: 'Taller realizado'
    }
  ];

  idRegion!: number;
  uid!: string;
  convertido!: number;

  constructor(){
      console.log("Servicio listo para usar"); 
  }

  public getImagen(){
      return this.imagenes;
  }

public getOneMunicipio(idR: number, id:number){
  
  this.convertido = id;

  this.idRegion = idR;
  // this.uid = id;
  console.log("Servicios: idR: "+ this.idRegion);


  if (this.idRegion == 1) {
    console.log("Servicios: caso 1 ");
      console.log(this.SierraNorte[this.convertido]);
      return this.SierraNorte[this.convertido];
  }
  if (this.idRegion == 2) {
    return this.SNOR[this.convertido];
  } 
  if (this.idRegion == 3) {
    return this.Ang[this.convertido];
  }
  if (this.idRegion == 4) {
    return this.MIX[this.convertido];
  }
  if (this.idRegion == 5) {
    return this.T[this.convertido];
  }
  console.log("Servicios: saliendo ");
    
}

//   public getOneMunicipioT(id:string){
//     console.log("id Municipio service "+ id);
//     return this.T[id];
// }

  public getSierraNorte(){
      return this.SierraNorte;
  }

  public getSNOR(){
      return this.SNOR;
  }
   
   public getAng(){
      return this.Ang;
  }
  public getT(){
      return this.T;
  }
  
  public getMIX(){
      return this.MIX;
  }

}
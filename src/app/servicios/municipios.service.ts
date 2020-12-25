import { Injectable } from '@angular/core';
import { Municipio, Files, Regiones, Graficasbarras } from "../model/municipio";
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';


@Injectable({
  providedIn: 'root'
})

export class MunicipiosService {

  SierraNorte: any[] = [
    {
      idR: 1,
      id: 0,
      nombre: 'Chignahuapan',
      imagen: 'assets/images/sierraNorte/chignahuapan.png',
      descripcion: 'El mapa general de la República Mexicana señala que el municipio de Chignahuapan se localiza en el estado de Puebla. Debido a la posición geográfica que tiene, se sitúa entre las coordenadas 19° 39" 42" y 19° 58" 48" latitud norte del trópico de cáncer y entre 97° 57" 18" y 98° 18" 06" longitud oeste del meridiano de Greenwich. La altitud promedio de dicho municipio es de 700 metros sobre el nivel del mar (msnm). Está formado por una extensión territorial de 591.92 kilómetros cuadrados. Chignahuapan se encuentra territorialmente rodeado al norte por el municipio de Zacatlán, al sur por el estado de Tlaxcala, al oeste una vez más por Zacatlán y Aquixtla, finalmente al poniente se encuentra el estado de Hidalgo. En otra información, el Instituto Nacional de Estadística y Geografía señaló que, de acuerdo con los resultados obtenidos del tercer conteo de población realizado durante el 2010, el municipio de Chignahuapan cuenta con una población total de 57,904',
      extension: 'Tiene una superficie de 760.23 Km^2, que lo ubica en el 3 lugar con respecto a los demás municipios del estado',
      clima: 'El municipio se localiza dentro de la zona de los templados de la sierra norte; se identifican dos climas: o    Clima semifrío subhúmedo con lluvias en verano; temperatura media anual entre 5 y 12ºC; temperatura del mes más frío entre -3 y, 18ºC; precipitación del mes más seco menor de 40 milímetros; la precipitación invernal con respecto a la anual es entre 5 y 10.2 por ciento. o Se presentan en las cumbres del peñón del Rosario y en los cerros las Tablas, así como en el conjunto montañoso del extremo oeste. o    El templado subhúmedo con lluvias en verano; temperatura media anual entre 12 y 18ºC; temperatura del mes más frío entre -3 y 18ºC; precipitación del mes más seco menor de 40 milímetros; la precipitación invernal con respecto a la anual es entre 5 y 10.2 por ciento. o    Se identifica en las estribaciones bajas del peñón del Rosario y de los cerros Las Tablas, así como el extremo norte. Es el clima predominante  ',
      recursos: 'Cuenta con una gran variedad de especies forestales, mismos que son explotados y que convierten el municipio en uno de los principales productores de madera a nivel estatal: o  Minería: entre sus principales yacimientos encontramos: ocre, tepelttxyl-arcilla',
      principales: '',
      grafica: [
        {
          idT: 2,
          idG: 1,
          bChartLab:  ['ene-10','feb-10','mar-10','abr-10','may-10','jun-10','jul-10','ago-10','sep-10','oct-10','nov-10','dic-10','ene-11','feb-11','mar-11','abr-11','may-11','jun-11','jul-11','ago-11','sep-11','oct-11','nov-11','dic-11'],
          chartData: [
            { data: [46.7,86.7,12.7,84.6,17.8,31.3,290.3,179.3,253.1,64.8,9.3,3,4.9,1,5.9,63.4,31,162.9,189.3,266.6,113.9,49,17.9,9.7], label: 'Mensual' },
            { data: [14.7,16.5,17,39.1,52.5,120.4,124,102.6,140.4,91.6,21.5,9.6,14.7,16.5,17,39.1,52.5,120.4,124,102.6,140.4,91.6,21.5,9.6], label: 'Normal', yAxisID: 'y-axis-1' }
          ],
          texto:'Precipitación Normal y Mensual registrada CHIGNAHUAPAN Fenómeno del Niño 2010-2011'
        },
        {
          idT: 2,
          idG: 1,
          bChartLab:  ['ene-91','feb-91','mar-91','abr-91','may-91','jun-91','jul-91','ago-91','sep-91','oct-91','nov-91','dic-91','ene-92','feb-92','mar-92','abr-92','may-92','jun-92','jul-92','ago-92','sep-92','oct-92','nov-92','dic-92'],
          chartData: [
            { data: [14.1,8.2,6.1,17.2,15.7,220,110.4,29.1,118.3,102.2,33.7,4,73.9,15.5,55.8,68.7,107.8,83.9,68.8,117.7,138,80.8,34,0], label: 'Mensual' },
            { data: [14.7,16.5,17,39.1,52.5,120.4,124,102.6,140.4,91.6,21.5,9.6,14.7,16.5,17,39.1,52.5,120.4,124,102.6,140.4,91.6,21.5,9.6], label: 'Normal', yAxisID: 'y-axis-1' }
          ],
          texto:'Precipitación Normal y Mensual registrada CHIGNAHUAPAN Fenómeno del Niño 1991-1992'
        },
        {
          idT: 2,
          idG: 1,
          bChartLab:  ['ene-82','feb-82','mar-82','abr-82','may-82','jun-82','jul-82','ago-82','sep-82','oct-82','nov-82','dic-82','ene-83','feb-83','mar-83','abr-83','may-83','jun-83','jul-83','ago-83','sep-83','oct-83','nov-83','dic-83'],
          chartData: [
            { data: [0.3,7.9,3.9,30.4,44.2,21.5,30.5,30.6,72.6,62.4,7.6,9.9,16,9.7,6.7,0,21,41,137.4,55.6,103.6,41.5,51.3,1.3,], label: 'Mensual' },
            { data: [14.7,16.5,17,39.1,52.5,120.4,124,102.6,140.4,91.6,21.5,9.6,14.7,16.5,17,39.1,52.5,120.4,124,102.6,140.4,91.6,21.5,9.6], label: 'Normal', yAxisID: 'y-axis-1' }
          ],
          texto:'Precipitación Normal y Mensual registrada CHIGNAHUAPAN Fenómeno del Niño 1982-1983'
        }]
    },
    {
      idR: 1,
      id: 1,
      nombre: 'Huauchinango',
      imagen: 'assets/images/sierraNorte/huauchinango.png',
      descripcion: 'Se localiza en la parte noroeste del estado. Sus coordenadas geográficas son los paralelos 20º 05" 30" y 20º 17" 06" de latitud norte de los meridianos 97º 57" 00" y 98º 08" 06" de longitud occidental. Sus colindancias son: al Norte con Xicotepec de Juárez y Juan Galindo, al Sur con Ahuazotepec y Zacatlán, al Oeste con Juan Galindo y Tlaola y al Poniente con Naupan, Ahuazotepec y el Estado de Hidalgo. Cuenta con 44 Localidades, de las cuales las más importantes son: Tenango de las Flores, El Potro, Cuacuila, Ahuacatlán y Xaltepec',
      extension: 'Tiene una superficie de 250.41 Km^2 que lo ubica en lugar 84 con respecto a los demás municipios del Estado',
      clima: 'En el municipio se pueden identificar dos climas: clima templado húmedo, con lluvias todo el año; temperatura media anual entre 12 y 18º C; temperatura del mes más frío entre -3 y 18º C; precipitación del mes más seco mayor de 40 milímetros, por ciento de lluvia invernal con respecto a la anual es menor de 18. clima semicálido subhúmedo, con lluvias todo el año; temperatura media anual mayor de 18º C; precipitación del mes más seco mayor de 40 milímetros, por ciento de lluvia, invernal con respecto a la anual menor de 18. Se presenta en las partes más bajas del municipio al oriente.',
      recursos: 'Cuenta con bosques de pino, existen criaderos de trucha en Teopancingo y carpa en la presa de Tenango',
      principales: '',
      grafica: [
        {
          idT: 2,
          idG: 1,
          bChartLab:  ['ene-10','feb-10','mar-10','abr-10','may-10','jun-10','jul-10','ago-10','sep-10','oct-10','nov-10','dic-10','ene-11','feb-11','mar-11','abr-11','may-11','jun-11','jul-11','ago-11','sep-11','oct-11','nov-11','dic-11'],
          chartData: [
            { data: [68.8,60.8,36.9,113.8,26.3,285,730,400.6,483.3,134.5,71.6,17.4,35.3,23.1,29.4,44.1,109.7,304.3,574.8,460.2,243.3,127.2,100.7,63.6,], label: 'Mensual' },
            { data: [50.2,47.5,43.2,64.5,69.6,284.2,400.2,356,361.1,224.7,83,47.5,50.2,47.5,43.2,64.5,69.6,284.2,400.2,356,361.1,224.7,83,47.5], label: 'Normal', yAxisID: 'y-axis-1' }
          ],
          texto:'Precipitación Normal y Mensual registrada HUAUCHINANGO Fenómeno del Niño 2010-2011'
        },
        {
          idT: 2,
          idG: 1,
          bChartLab:  ['ene-97','feb-97','mar-97','abr-97','may-97','jun-97','jul-97','ago-97','sep-97','oct-97','nov-97','dic-97','ene-98','feb-98','mar-98','abr-98','may-98','jun-98','jul-98','ago-98','sep-98','oct-98','nov-98','dic-98'],
          chartData: [
            { data: [6.6,54.6,94.2,99.6,118.1,152.2,372.9,200.3,331,201.3,75.4,31.4,31.6,4.8,39.9,33.4,0,153.2,576.8,302.2,388.1,469.2,111.5,25.1,], label: 'Mensual' },
            { data: [50.2,47.5,43.2,64.5,69.6,284.2,400.2,356,361.1,224.7,83,47.5,50.2,47.5,43.2,64.5,69.6,284.2,400.2,356,361.1,224.7,83,47.5], label: 'Normal', yAxisID: 'y-axis-1' }
          ],
          texto:'Precipitación Normal y Mensual registrada HUAUCHINANGO Fenómeno del Niño 1997-1998'
        },
        {
          idT: 2,
          idG: 1,
          bChartLab:  ['ene-91','feb-91','mar-91','abr-91','may-91','jun-91','jul-91','ago-91','sep-91','oct-91','nov-91','dic-91','ene-92','feb-92','mar-92','abr-92','may-92','jun-92','jul-92','ago-92','sep-92','oct-92','nov-92','dic-92'],
          chartData: [
            { data: [95.1,40.2,49,27.2,18.5,328.5,325.4,221.1,178.9,58.8,132.6,73.7,113.1,70,60.8,80.5,125.3,115.9,505.4,218,378.3,422.5,76.8,17.8], label: 'Mensual' },
            { data: [50.2,47.5,43.2,64.5,69.6,284.2,400.2,356,361.1,224.7,83,47.5,50.2,47.5,43.2,64.5,69.6,284.2,400.2,356,361.1,224.7,83,47.5], label: 'Normal', yAxisID: 'y-axis-1' }
          ],
          texto:'Precipitación Normal y Mensual registrada HUAUCHINANGO Fenómeno del Niño 1991-1992'
        },
        {
          idT: 2,
          idG: 1,
          bChartLab:  ['ene-88','feb-88','mar-88','abr-88','may-88','jun-88','jul-88','ago-88','sep-88','oct-88','nov-88','dic-88','ene-89','feb-89','mar-89','abr-89','may-89','jun-89','jul-89','ago-89','sep-89','oct-89','nov-89','dic-89'],
          chartData: [
            { data: [30.8,39.5,47.2,74.5,20.5,276.5,384.1,333.2,275,110.2,47,79,0,0,15,51,55.5,75.1,398.8,318.5,454,92,0,0], label: 'Mensual' },
            { data: [50.2,47.5,43.2,64.5,69.6,284.2,400.2,356,361.1,224.7,83,47.5,50.2,47.5,43.2,64.5,69.6,284.2,400.2,356,361.1,224.7,83,47.5], label: 'Normal', yAxisID: 'y-axis-1' }
          ],
          texto:'Precipitación Normal y Mensual registrada HUAUCHINANGO Fenómeno de la Niña 1988-1989'
        },
        {
          idT: 2,
          idG: 1,
          bChartLab:  ['ene-82','feb-82','mar-82','abr-82','may-82','jun-82','jul-82','ago-82','sep-82','oct-82','nov-82','dic-82','ene-83','feb-83','mar-83','abr-83','may-83','jun-83','jul-83','ago-83','sep-83','oct-83','nov-83','dic-83'],
          chartData: [
            { data: [31.7,54.9,41.5,123.5,89.2,54,277.5,142,264,221,58,69,80.2,27,28,24.5,43.5,171.5,717.5,348.2,323.8,176.5,70.5,75], label: 'Mensual' },
            { data: [50.2,47.5,43.2,64.5,69.6,284.2,400.2,356,361.1,224.7,83,47.5,50.2,47.5,43.2,64.5,69.6,284.2,400.2,356,361.1,224.7,83,47.5], label: 'Normal', yAxisID: 'y-axis-1' }
          ],
          texto:'Precipitación Normal y Mensual registrada HUAUCHINANGO Fenómeno del Niño 1982-1983'
        }]
    },
    {
      idR: 1,
      id: 2,
      nombre: 'Juan Galindo',
      imagen: 'assets/images/sierraNorte/juanGalindo.png',
      descripcion: 'Se localiza en la parte Noroeste, del estado de Puebla, sus coordenadas geográficas son: los paralelos 20º 12" 24" y 20º 14" 24" de latitud norte y los meridianos 97º 57" 00" y 98º 01" 24" de longitud occidental. Sus colindancias son al Norte con Xicotepec, al Sur con Huauchinango y Tlaola, al Oeste con Xicotepec y Zihuateutla y al Poniente con Huauchinango.',
      extension: 'Tiene una superficie de 23.15 kilómetros cuadrados que lo ubican en el lugar 175 con respecto a los demás municipios del estado',
      clima: 'El municipio se ubica en la transición de los climas templados de la Sierra Norte y los cálidos del declive del Golfo; presenta dos climas: clima semicálido: Subhúmedo con lluvias todo el año temperatura media anual mayor de 18ºC; temperatura del mes más frío entre 3 y 18ºC; precipitación del mes más seco mayor de 40 milímetros; por ciento de lluvia invernal con respecto a la anual menor de 18. Es el clima predominante; se identifica en la porción central y sudoccidental. clima cálido: Con lluvias todo el año; temperatura media anual mayor de 22ºC; la temperatura del mes más frío es mayor de 18ºC; existe una diferencia porcentual de lluvia invernal con respecto a la anual menor de 18; la precipitación del mes más seco es mayor de 60 milímetros y se presenta en la porción oriental del municipio',
      recursos: '',
      principales: 'El municipio conserva pocas áreas con vegetación natural; tan sólo quedan bosques de pino-encino en áreas reducidas al poniente y al sur. El resto del territorio ha sufrido una fuerte deforestación; se han implantado pastizales al norte y en la porción central se cuentan con zonas dedicadas a la Agricultura. ',
      grafica:[]
    },
    {
      idR: 1,
      id: 3,
      nombre: 'Tetela de Ocampo',
      imagen: 'assets/images/sierraNorte/tetelaOcampo.png',
      descripcion: 'El municipio de Tetela de Ocampo se localiza en la parte Norte del Estado de Puebla. Sus coordenadas geográficas son los paralelos 19º 43" 00" y 19º 57" 06" de latitud norte y los meridianos 97º 38" 42" y 97º 54" 06" de longitud occidental. Sus colindancias son al Norte con Cuautempan y Tepetzintla, al Sur con Ixtacamaxtitlán, al Oeste con Xochiapulco y Zautla, y al Poniente con Aquixtla, Zacatlán e Ixtacamaxtitlán.',
      extension: 'Tiene una superficie de 328.80 kilómetros cuadrados lo que lo ubica en el lugar 27º con respecto a los demás municipios del Estado',
      clima: 'El municipio se ubica dentro de la zona de climas templados de la Sierra Norte; conforme se avanza de sur a norte, se incrementa la humedad, identificándose los siguientes climas: clima templado subhúmedo con lluvias en verano; temperatura media anual entre 12 y 18ºC; precipitación del mes más seco menor de 40 milímetros; por ciento de precipitación invernal con respecto a la anual menor de 5. Cubre una amplia franja del centro. clima templado húmedo con lluvias todo el año; temperatura media anual entre 12 y 18ºC; temperatura del mes más frío entre -3 y 18ºC; precipitación del mes más seco mayor de 40 milímetros; por ciento de precipitación de lluvia invernal con respecto a la anual, menor de 18. Se presenta al extremo noroeste. clima semicálido subhúmedo con lluvias todo el año; temperatura media anual mayor de 18ºC; temperatura del mes más frío entre -3 y 18ºC; precipitación del mes más seco mayor de 40 milímetros; porciento de la lluvia invernal con respecto a la anual, menor de 18. Se presenta en el extremo noroeste del municipio',
      recursos: 'Cuentan con recursos forestales tales como bosques de pino chino, ocote, encino y encino negro: o    En cuento a fauna silvestre existe conejo, ardilla, armadillo y tlacuache. o    Existen yacimientos y minas de oro en la comunidad de la cañada. ',
      principales: 'El municipio presenta la mayor parte de su territorio cubierto de bosques, tanto de pinos, como de asociaciones de pino-encino, destacan los siguientes: pino colorado, lacia y ayacahuite; encino colorado, cesante y oyamel. o   Entre mezclados en las zonas montañosas, generalmente a los lados de las carreteras y de algunos ríos, se encuentran áreas incorporadas a la actividad agrícola de tipo temporal, que poco a poco le han ido ganando terreno a los bosques. Al poniente, a lo largo de la carretera Aquixtla-Tetela de Ocampo, se ha implantado una zona de riego, usando las aguas del río Texocoapa.',
      grafica:[]
    },
    {
      idR: 1,
      id: 4,
      nombre: 'Xicotepec',
      imagen: 'assets/images/sierraNorte/xicotepec.png',
      descripcion: 'El municipio de Xicotepec de Juárez se localiza en la parte Noroeste del estado de Puebla. Sus coordenadas geográficas son los paralelos 20º 14" 18" y 20º 26" 12" de latitud norte y los meridianos 97º 45" 00" y 98º 03" 06" de longitud occidental. Sus colindancias son al Norte con Jalpan, al Sur con Juan Galindo y Zihuateutla, al Oeste con Zihuateutla y al Poniente con Tlacuilotepec.',
      extension: 'Tiene una superficie de 312.30 kilómetros cuadrados que lo ubican en el lugar 34 con respecto a los demás municipios del estado',
      clima: 'En el municipio se presenta la transición de los climas templados de la sierra norte, a los cálidos del declive del Golfo; se identifican dos climas: clima semicálido subhúmedo con lluvias todo el año; temperatura media anual mayor de 18ºC; temperatura del mes más frío entre -3º y 18ºC; precipitación del mes más seco mayor de 40 milímetros; la lluvia invernal con respecto a la anual es menor en un 18 por ciento. Es el clima predominante, se identifica en la porción central y meridional.  Clima cálido-húmedo con lluvias todo el año; temperatura media anual mayor de 22ºC; temperatura del mes más frío mayor de 18ºC; la lluvia invernal con respecto a la anual es menor de 18 por ciento; la precipitación del mes más seco es mayor de 60 milímetros. Se identifica en la porción septentrional del municipio',
      recursos: 'Existen bosques de encino y de explotación forestal, en esta actividad se explotan las maderas finas y de construcción. Minería: En esta rama económica tenemos en existencia, barita, plomo, arcilla, feldespato, cobre, plata y el beneficiado es el no metálico barita',
      principales: 'La mayor parte del territorio ha perdido su vegetación natural; tan sólo subsisten algunas áreas de selva alta perennifolia al noreste y suroeste y centro-este',
      grafica: [
        {
          idT: 2,
          idG: 1,
          bChartLab:  ['ene-10','feb-10','mar-10','abr-10','may-10','jun-10','jul-10','ago-10','sep-10','oct-10','nov-10','dic-10','ene-11','feb-11','mar-11','abr-11','may-11','jun-11','jul-11','ago-11','sep-11','oct-11','nov-11','dic-11'],
          chartData: [
            { data: [89.9,76,32.6,83.7,62.9,376.8,878,614.7,692.8,140.2,113.4,21.9,51.7,15.1,79.5,23,107.8,502.7,1152.3,699,354,190.9,143.8,104.7], label: 'Mensual' },
            { data: [57.5,64,54.4,93.9,163.9,467,546.5,537,629.8,364.2,124,63.6,57.5,64,54.4,93.9,163.9,467,546.5,537,629.8,364.2,124,63.6], label: 'Normal', yAxisID: 'y-axis-1' }
          ],
          texto:'Precipitación Normal y Mensual registrada XICOTEPEC Fenómeno del Niño 2010-2011'
        },
        {
          idT: 2,
          idG: 1,
          bChartLab:  ['ene-97','feb-97','mar-97','abr-97','may-97','jun-97','jul-97','ago-97','sep-97','oct-97','nov-97','dic-97','ene-98','feb-98','mar-98','abr-98','may-98','jun-98','jul-98','ago-98','sep-98','oct-98','nov-98','dic-98'],
          chartData: [
            { data: [18.7,70.9,182.7,124.9,310.4,331.9,682,380.1,607.1,339,103.3,42.6,34.1,24.7,40.5,28.8,0,151.7,668.4,402.4,718.1,795.2,312.6,28.8], label: 'Mensual' },
            { data: [57.5,64,54.4,93.9,163.9,467,546.5,537,629.8,364.2,124,63.6,57.5,64,54.4,93.9,163.9,467,546.5,537,629.8,364.2,124,63.6], label: 'Normal', yAxisID: 'y-axis-1' }
          ],
          texto:'Precipitación Normal y Mensual registrada XICOTEPEC Fenómeno del Niño 1997-1998'
        },
        {
          idT: 2,
          idG: 1,
          bChartLab:  ['ene-91','feb-91','mar-91','abr-91','may-91','jun-91','jul-91','ago-91','sep-91','oct-91','nov-91','dic-91','ene-92','feb-92','mar-92','abr-92','may-92','jun-92','jul-92','ago-92','sep-92','oct-92','nov-92','dic-92'],
          chartData: [
            { data: [155.5,41.3,39.6,29.2,107.5,458.7,613,272.1,758.5,353.6,215.5,135.5,111.2,77.5,96.3,108.8,321,176.6,652.7,623.5,823.4,302.3,116.8,50.2], label: 'Mensual' },
            { data: [57.5,64,54.4,93.9,163.9,467,546.5,537,629.8,364.2,124,63.6,57.5,64,54.4,93.9,163.9,467,546.5,537,629.8,364.2,124,63.6], label: 'Normal', yAxisID: 'y-axis-1' }
          ],
          texto:'Precipitación Normal y Mensual registrada XICOTEPEC Fenómeno del Niño 1991-1992'
        },
        {
          idT: 2,
          idG: 1,
          bChartLab:  ['ene-88','feb-88','mar-88','abr-88','may-88','jun-88','jul-88','ago-88','sep-88','oct-88','nov-88','dic-88','ene-89','feb-89','mar-89','abr-89','may-89','jun-89','jul-89','ago-89','sep-89','oct-89','nov-89','dic-89'],
          chartData: [
            { data: [42.4,81,55.4,205.9,72.7,520.4,743.8,464.8,564.7,292.3,66,102.3,70.3,181.5,12.8,189.8,95.3,246.9,422.5,749.7,601,155,0,76.4], label: 'Mensual' },
            { data: [57.5,64,54.4,93.9,163.9,467,546.5,537,629.8,364.2,124,63.6,57.5,64,54.4,93.9,163.9,467,546.5,537,629.8,364.2,124,63.6], label: 'Normal', yAxisID: 'y-axis-1' }
          ],
          texto:'Precipitación Normal y Mensual registrada XICOTEPEC Fenómeno del Niño 1988-1989'
        },
        {
          idT: 2,
          idG: 1,
          bChartLab:  ['ene-82','feb-82','mar-82','abr-82','may-82','jun-82','jul-82','ago-82','sep-82','oct-82','nov-82','dic-82','ene-83','feb-83','mar-83','abr-83','may-83','jun-83','jul-83','ago-83','sep-83','oct-83','nov-83','dic-83'],
          chartData: [
            { data: [33.5,36,53.5,190.5,140.6,160.5,245.5,245.5,435.5,0,49.5,37.5,56.5,18,31.5,8.5,28,215,979,439.5,536.5,181.5,156.5,93.5], label: 'Mensual' },
            { data: [57.5,64,54.4,93.9,163.9,467,546.5,537,629.8,364.2,124,63.6,57.5,64,54.4,93.9,163.9,467,546.5,537,629.8,364.2,124,63.6], label: 'Normal', yAxisID: 'y-axis-1' }
          ],
          texto:'Precipitación Normal y Mensual registrada XICOTEPEC Fenómeno del Niño 1982-1983'
        }]
    },
    {
      idR: 1,
      id: 5,
      nombre: 'Xochiapulco',
      imagen: 'assets/images/sierraNorte/xochiapulco.png',
      descripcion: 'El municipio de Xochiapulco se localiza en la parte norte del estado de Puebla sus coordenadas geográficas son: los paralelos 19º 47" 36" y 19º 37" 06" de latitud norte y los meridianos 97º 37" 06" y 96º 46" 00" de longitud Occidental. Colindancias: Al Norte: Con Xochitlán de Vicente Suarez. Al Este: Con Zacapoaxtla. Al Sur: Con Zautlan y Al Oeste: Con Tetela de Ocampo',
      extension: 'Tiene una superficie de 59.73 kilómetros cuadrados, que lo ubica en el lugar 114 con respecto a los demás municipios del estado',
      clima: 'El municipio se localiza en las zonas de climas templados de la Sierra Norte, destacan dos climas: Clima Templado Húmedo con abundantes lluvias todo el año. Se presenta en la mayor área del municipio. Clima Templado con abundantes lluvias en verano, se presentan en un área reducida al norte',
      recursos: 'Se explota la madera de pino',
      principales: 'La mayor parte del municipio es cubierto de asociaciones de pino-encino, de donde prodomina el pino colorado, pino lacio, encino glabrescens y encino carrasco. Sin embargo, estos bosques poco a poco están siendo eliminados para utilizar su madera y para abrir nuevas zonas al cultivo; así, el suroeste y sureste en áreas accesibles por carretera aparecen zonas dedicadas a la Agricultura de temporal.',
      grafica:[]
    },
    {
      idR: 1,
      id: 6,
      nombre: 'Zacatlan',
      imagen: 'assets/images/sierraNorte/zacatlan.png',
      descripcion: 'Se localiza en la parte Noroeste del estado, sus coordenadas geográficas son los paralelos 19º 50" 06" y 20º 08" 12" de latitud norte de los meridianos 97º 51" 06 y 98º 12" 36", de longitud occidental. Sus colindancias son al Norte con Chiconcuautla y Huauchinango, al Sur con Aquixtla y Chignahuapan, al Oeste con Ahuacatlán, Tepetzintla y Tetela de Ocampo y al Poniente con Ahuazotepec y el estado de Hidalgo',
      extension: 'Tiene una superficie de 489.33 kilómetros cuadrados, que lo ubican en el séptimo lugar respecto a los demás municipios del estado',
      clima: 'Se localiza dentro de la zona de los climas templados; presenta un incremento de humedad conforme se avanza de sur a norte; se identifican los siguientes climas: clima templado subhúmedo, con lluvias en verano, temperatura media anual entre 12 y 18ºC; se presenta al extremo suroeste y extremo sureste. Clima templado húmedo, con abundantes lluvias en verano; temperatura media anual entre 12 y 18ºC, precipitación del mes más seco menor de 40 milímetros, es el clima predominante, se presenta en una franja latitudinal que cruza el municipio por el centro. Clima templado húmedo, con lluvias todo el año, temperatura media anual entre 12 y 18ºC. Precipitación del mes más seco, mayor de 40 milímetros por ciento de lluvia invernal con respecto a la anual es menor de 18. Se presenta en el norte del municipio. Clima semicálido subhúmedo con lluvias todo el año temperatura media anual mayor de 18ºC precipitación del mes más seco mayor de 40 milímetros; por ciento de lluvia invernal con respecto a la media anual menor de 18º. Se identifica en un área muy reducida del extremo norte',
      recursos: 'Mineria: Es rico en recursos minerales, encontrando yacimientos de manganeso, hierro calcita, fosforita, zinc, cuarzo, feldespato, barita, oro, plata, plomo, cobre y antimonio. Explotación Forestal: Cuenta con bosques en donde existen maderas finas como caoba, cedro, utilizados para la fabricación de muebles, en su mayoría existen pinos de diferentes especies utilizados para la construcción, artefactos de madera y muebles rústicos.',
      principales: 'El municipio presenta grandes extensiones de bosques de coníferas, principalmente de pinos, asociaciones de boscosas de pino-encino y mesófilo de montaña; en ella se identifican especies tales como pino blanco, madroño, pino hartwegii, pino contorto, pino lacio, pino colorado sahuaro, oyamel, ocote blanco, pino chino, etc. Se encuentran dispersas por todo el territorio, destacando por su Extensión las zonas boscosas del centro, norte, este y extremo oeste.',
      grafica: [
        {
          idT: 2,
          idG: 1,
          bChartLab:  ['ene-10','feb-10','mar-10','abr-10','may-10','jun-10','jul-10','ago-10','sep-10','oct-10','nov-10','dic-10','ene-11','feb-11','mar-11','abr-11','may-11','jun-11','jul-11','ago-11','sep-11','oct-11','nov-11','dic-11'],
          chartData: [
            { data: [63,56,15,61,10,78,361,129,280,161,32,4,13,4,16,41,28,180,210,196,140,50,33,15], label: 'Mensual' },
            { data: [32.2,27.4,28.6,36.3,58.2,141.9,167,151.7,236.1,131.7,47.2,27.5,32.2,27.4,28.6,36.3,58.2,141.9,167,151.7,236.1,131.7,47.2,27.5], label: 'Normal', yAxisID: 'y-axis-1' }
          ],
          texto:'Precipitación Normal y Mensual registrada ZACATLÁN Fenómeno del Niño 2010-2011'
        },
        {
          idT: 2,
          idG: 1,
          bChartLab:  ['ene-91','feb-91','mar-91','abr-91','may-91','jun-91','jul-91','ago-91','sep-91','oct-91','nov-91','dic-91','ene-92','feb-92','mar-92','abr-92','may-92','jun-92','jul-92','ago-92','sep-92','oct-92','nov-92','dic-92'],
          chartData: [
            { data: [43.6,33.2,11.7,14.4,7.9,242.7,177.3,48,223.6,154.4,59.5,42.8,76.7,41.4,63,69.5,99,131.7,182.4,220.7,311,161.2,56.7,5.6], label: 'Mensual' },
            { data: [32.2,27.4,28.6,36.3,58.2,141.9,167,151.7,236.1,131.7,47.2,27.5,32.2,27.4,28.6,36.3,58.2,141.9,167,151.7,236.1,131.7,47.2,27.5], label: 'Normal', yAxisID: 'y-axis-1' }
          ],
          texto:'Precipitación Normal y Mensual registrada ZACATLÁN Fenómeno del Niño 1991-1992'
        },
        {
          idT: 2,
          idG: 1,
          bChartLab:  ['ene-88','feb-88','mar-88','abr-88','may-88','jun-88','jul-88','ago-88','sep-88','oct-88','nov-88','dic-88','ene-89','feb-89','mar-89','abr-89','may-89','jun-89','jul-89','ago-89','sep-89','oct-89','nov-89','dic-89'],
          chartData: [
            { data: [25.7,16.5,71.6,56.2,0,0,0,197.8,169.6,89.5,27.4,3,23.5,27,10,32.5,27.2,111.7,183.5,51.4,180.1,63.2,71.6,43.4], label: 'Mensual' },
            { data: [32.2,27.4,28.6,36.3,58.2,141.9,167,151.7,236.1,131.7,47.2,27.5,32.2,27.4,28.6,36.3,58.2,141.9,167,151.7,236.1,131.7,47.2,27.5], label: 'Normal', yAxisID: 'y-axis-1' }
          ],
          texto:'Precipitación Normal y Mensual registrada ZACATLÁN Fenómeno de la Niña 1988-1989'
        },
        {
          idT: 2,
          idG: 1,
          bChartLab:  ['ene-82','feb-82','mar-82','abr-82','may-82','jun-82','jul-82','ago-82','sep-82','oct-82','nov-82','dic-82','ene-83','feb-83','mar-83','abr-83','may-83','jun-83','jul-83','ago-83','sep-83','oct-83','nov-83','dic-83'],
          chartData: [
            { data: [16.6,17.1,25.6,38,60.6,64.1,52,54.9,125.7,158.9,43.8,43.4,27.7,17.1,12,11.2,33.6,48.9,270,109.2,202.1,103.7,69.6,28.3], label: 'Mensual' },
            { data: [32.2,27.4,28.6,36.3,58.2,141.9,167,151.7,236.1,131.7,47.2,27.5,32.2,27.4,28.6,36.3,58.2,141.9,167,151.7,236.1,131.7,47.2,27.5], label: 'Normal', yAxisID: 'y-axis-1' }
          ],
          texto:'Precipitación Normal y Mensual registrada ZACATLÁN Fenómeno del Niño 1982-1983'
        }]
    }
  ];

  SNOR: any[] = [
    {
      idR: 2,
      id: 0,
      nombre: 'Teziutlan',
      imagen: 'assets/images/nororiental/teziutlan.jpg',
      descripcion: "El municipio de Teziutlán se localiza en la parte noroeste del Estado de Puebla. Sus coordenadas geográficas son los paralelos 19º 47' 06'' y 19º 58' 12'' de latitud norte y 97º 18' 54'' y 97º 23' 18'' de longitud occidental. Colindancias: Al Norte: Con Hueyapan y Hueytamalco. Al Este: Con Xiutetelco y Jalacingo, Veracruz. Al Sur: Con Atempan y Chignautla. Al Oeste: Con Yaonáhuac.",
      extension: 'Tiene una superficie de 92.64 kilómetros cuadrados que lo ubica en el 134º lugar con respecto a los demás municipios del Estado.',
      clima: 'El Municipio se localiza en la transición de los climas templados de la Sierra Norte, a los cálidos del declive del Golfo; se identifican tres climas: Clima templado húmedo con lluvias en verano. Se presenta en una pequeña área del extremo Sur del Municipio. Clima templado húmedo con lluvias todo el año. Se intensifica en una en una franja latitudinal al centro y sur del Municipio. Clima Semicálido Húmedo, con abundante lluvias todo el año. Se presenta en el Norte del Municipio.',
      recursos: 'Los recursos más importantes son sus manantiales naturales',
      principales: 'Los bosques siguen predominando al norte, existen mesófilo de montaña de encino y en ocasiones de pino-encino; en ellos se encuentran especies, tales como pino colorado, liquidámbar, encino y jaboncillo; en cuanto a fauna se encuentran: mázate, variedades de aves canoras como el clarín, zorras, zorrillos, siete rayas; variedad de víboras como la cascabel, etc.',
      grafica: [
        {
          idT: 2,
          idG: 1,
          bChartLab:  ['ene-10','feb-10','mar-10','abr-10','may-10','jun-10','jul-10','ago-10','sep-10','oct-10','nov-10','dic-10','ene-11','feb-11','mar-11','abr-11','may-11','jun-11','jul-11','ago-11','sep-11','oct-11','nov-11','dic-11'],
          chartData: [
            { data: [69.9,57.5,36.5,73,14.5,85.5,544.5,242.1,487.5,250.5,138.5,20.6,52,15,43,41.5,45.5,258.5,232.4,246,198,94.1,160.4,44.5], label: 'Mensual' },
            { data: [48.1,49.5,37.2,63.2,74.9,176.5,184.5,195.1,363.7,230.3,120.1,51.6,48.1,49.5,37.2,63.2,74.9,176.5,184.5,195.1,363.7,230.3,120.1,51.6], label: 'Normal', yAxisID: 'y-axis-1' }
          ],
          texto:'Precipitación Normal y Mensual registrada TEZIUTLÁN Fenómeno del Niño 2010-2011'
        },
        {
          idT: 2,
          idG: 1,
          bChartLab:  ['ene-97','feb-97','mar-97','abr-97','may-97','jun-97','jul-97','ago-97','sep-97','oct-97','nov-97','dic-97','ene-98','feb-98','mar-98','abr-98','may-98','jun-98','jul-98','ago-98','sep-98','oct-98','nov-98','dic-98'],
          chartData: [
            { data: [7.5,43,100,64.5,85,98,228.5,106.4,349,243.7,99,28,30.3,15,30,36,0,117,245.5,117.5,306,466,182.5,23], label: 'Mensual' },
            { data: [48.1,49.5,37.2,63.2,74.9,176.5,184.5,195.1,363.7,230.3,120.1,51.6,48.1,49.5,37.2,63.2,74.9,176.5,184.5,195.1,363.7,230.3,120.1,51.6], label: 'Normal', yAxisID: 'y-axis-1' }
          ],
          texto:'Precipitación Normal y Mensual registrada TEZIUTLÁN Fenómeno del Niño 1997-1998'
        },
        {
          idT: 2,
          idG: 1,
          bChartLab:  ['ene-91','feb-91','mar-91','abr-91','may-91','jun-91','jul-91','ago-91','sep-91','oct-91','nov-91','dic-91','ene-92','feb-92','mar-92','abr-92','may-92','jun-92','jul-92','ago-92','sep-92','oct-92','nov-92','dic-92'],
          chartData: [
            { data: [116,55,39,12.5,44,209,82.6,86.5,184.5,275.5,178,73.5,53.5,50.5,29,109,125.5,193,141,250,469,333.5,179.5,15.5,], label: 'Mensual' },
            { data: [48.1,49.5,37.2,63.2,74.9,176.5,184.5,195.1,363.7,230.3,120.1,51.6,48.1,49.5,37.2,63.2,74.9,176.5,184.5,195.1,363.7,230.3,120.1,51.6], label: 'Normal', yAxisID: 'y-axis-1' }
          ],
          texto:'Precipitación Normal y Mensual registrada TEZIUTLÁN Fenómeno del Niño 1991-1992'
        },
        {
          idT: 2,
          idG: 1,
          bChartLab:  ['ene-88','feb-88','mar-88','abr-88','may-88','jun-88','jul-88','ago-88','sep-88','oct-88','nov-88','dic-88','ene-89','feb-89','mar-89','abr-89','may-89','jun-89','jul-89','ago-89','sep-89','oct-89','nov-89','dic-89'],
          chartData: [
            { data: [28.8,33,57.5,129,30,345.5,117.3,180.5,322.5,177.5,0,66.5,9.9,0,0,0,29,151.5,179.5,107,464.5,98.5,154,40.5], label: 'Mensual' },
            { data: [48.1,49.5,37.2,63.2,74.9,176.5,184.5,195.1,363.7,230.3,120.1,51.6,48.1,49.5,37.2,63.2,74.9,176.5,184.5,195.1,363.7,230.3,120.1,51.6], label: 'Normal', yAxisID: 'y-axis-1' }
          ],
          texto:'Precipitación Normal y Mensual registrada TEZIUTLÁN Fenómeno del Niño 2010-2011'
        },
        {
          idT: 2,
          idG: 1,
          bChartLab:  ['ene-82','feb-82','mar-82','abr-82','may-82','jun-82','jul-82','ago-82','sep-82','oct-82','nov-82','dic-82','ene-83','feb-83','mar-83','abr-83','may-83','jun-83','jul-83','ago-83','sep-83','oct-83','nov-83','dic-83'],
          chartData: [
            { data: [38.5,45,45,115.5,119.5,147,118,135.5,422.5,232.5,78,43.9,52.5,20,28.5,18,29.5,37,199.7,175.7,283.8,174.1,149,99.4], label: 'Mensual' },
            { data: [48.1,49.5,37.2,63.2,74.9,176.5,184.5,195.1,363.7,230.3,120.1,51.6,48.1,49.5,37.2,63.2,74.9,176.5,184.5,195.1,363.7,230.3,120.1,51.6], label: 'Normal', yAxisID: 'y-axis-1' }
          ],
          texto:'Precipitación Normal y Mensual registrada TEZIUTLÁN Fenómeno del Niño 1982-1983'
        }]
    },
    {
      idR: 2,
      id: 1,
      nombre: 'Zacapoaxtla',
      imagen: 'assets/images/nororiental/zacapoaxtla.jpg',
      descripcion: "El Municipio de Zacapoaxtla se localiza en la parte norte del estado de Puebla sus coordenadas geográficas son los paralelos 19º 44'18'' y 19º 59'18'', de latitud Norte y los meridianos 97º 31'42'' y 97º 37'54'' de longitud Occidental. Colindancias: Al Norte: con Cuetzalán del Progreso y Nauzontla. Al Este: con Tlatlauquitepec y Zaragoza. Al Sur: con Zautla. Al Oeste: con Xochiapulco y Nauzontla.",
      extension: 'Tiene una superficie de 176.64 kilómetros cuadrados, que lo ubica en el lugar 66 con respecto a los demás municipios del Estado.',
      clima: 'El Municipio se localiza en la zona de transición entre los templados de la Sierra Norte y los cálidos del declive del golfo; Clima templado subhúmedo con lluvias de verano. Se presenta en la zona sur del municipio. Clima templado húmedo con abundante lluvia en verano. Es el clima predominante se identifica en la parte central. Clima templado húmedo con lluvias todo el año. Se presenta en la parte septentrional del municipio. Clima semicálido subhúmedo, con lluvias todo el año. Se identifica en las márgenes del río Apulco.',
      recursos: 'Se explota la madera de los bosques de la región de la sierra.',
      principales: 'El municipio ha perdido una buena parte de su vegetación original; sin embargo, aún subsisten grandes zonas boscosas: al norte, a lo largo del río Apulco cuenta con áreas considerables de bosque mesófilo de montaña, constituido por especies arbóreas tales como jaboncillo, liquidámbar. En cuanto a fauna existen variedades silvestres existiendo especies tales como: conejo, mapache, tlacuache, ardilla, zorro, cacomixtle, liebre, tuza, rata de campo, ratón, zorrillo, armadillo, entre las aves encontramos: búho, lechuza, gavilán, gorrión, zahuate, jilguero, paloma, colibrí, mirto y tordo, entre otros; reptiles como: Lagartija, escorpión, ajolote y víbora.',
      grafica: [
        {
          idT: 2,
          idG: 1,
          bChartLab:  ['ene-10','feb-10','mar-10','abr-10','may-10','jun-10','jul-10','ago-10','sep-10','oct-10','nov-10','dic-10','ene-11','feb-11','mar-11','abr-11','may-11','jun-11','jul-11','ago-11','sep-11','oct-11','nov-11','dic-11'],
          chartData: [
            { data: [75.6,59.1,63.8,103.3,6.3,91.5,275.4,200.9,558.5,284.2,131.4,16.7,24.2,14.9,74.6,205,42.9,367.3,168.8,152,124.4,191.1,109.9,26.8], label: 'Mensual' },
            { data: [40.3,48.1,32.8,58,76.5,133.5,120.2,141.5,329.3,261,96.3,43.7,40.3,48.1,32.8,58,76.5,133.5,120.2,141.5,329.3,261,96.3,43.7], label: 'Normal', yAxisID: 'y-axis-1' }
          ],
          texto:'Precipitación Normal y Mensual registrada ZACAPOAXTLA Fenómeno del Niño 2010-2011'
        },
        {
          idT: 2,
          idG: 1,
          bChartLab:  ['ene-97','feb-97','mar-97','abr-97','may-97','jun-97','jul-97','ago-97','sep-97','oct-97','nov-97','dic-97','ene-98','feb-98','mar-98','abr-98','may-98','jun-98','jul-98','ago-98','sep-98','oct-98','nov-98','dic-98'],
          chartData: [
            { data: [5.7,45.8,110.7,91,57.3,54,123.8,51.6,280.3,230.2,70.6,20.8,18.2,18.5,8.6,11.4,0,68.9,139.5,101.4,313.5,506.6,194.5,6.5], label: 'Mensual' },
            { data: [40.3,48.1,32.8,58,76.5,133.5,120.2,141.5,329.3,261,96.3,43.7,40.3,48.1,32.8,58,76.5,133.5,120.2,141.5,329.3,261,96.3,43.7], label: 'Normal', yAxisID: 'y-axis-1' }
          ],
          texto:'Precipitación Normal y Mensual registrada ZACAPOAXTLA Fenómeno del Niño 1997-1998'
        },
        {
          idT: 2,
          idG: 1,
          bChartLab:  ['ene-91','feb-91','mar-91','abr-91','may-91','jun-91','jul-91','ago-91','sep-91','oct-91','nov-91','dic-91','ene-92','feb-92','mar-92','abr-92','may-92','jun-92','jul-92','ago-92','sep-92','oct-92','nov-92','dic-92'],
          chartData: [
            { data: [70.9,43.3,32.4,25.9,23.3,202.1,228.1,28.9,178.2,199.4,131.8,51.1,79.9,24.4,37.4,84.9,186.4,87.8,97.1,0,0,0,84.9,10.6], label: 'Mensual' },
            { data: [40.3,48.1,32.8,58,76.5,133.5,120.2,141.5,329.3,261,96.3,43.7,40.3,48.1,32.8,58,76.5,133.5,120.2,141.5,329.3,261,96.3,43.7], label: 'Normal', yAxisID: 'y-axis-1' }
          ],
          texto:'Precipitación Normal y Mensual registrada ZACAPOAXTLA Fenómeno del Niño 1991-1992'
        },
        {
          idT: 2,
          idG: 1,
          bChartLab:  ['ene-88','feb-88','mar-88','abr-88','may-88','jun-88','jul-88','ago-88','sep-88','oct-88','nov-88','dic-88','ene-89','feb-89','mar-89','abr-89','may-89','jun-89','jul-89','ago-89','sep-89','oct-89','nov-89','dic-89'],
          chartData: [
            { data: [7,43.3,45.2,117.5,7.5,287,88,146.8,328,40.8,26.8,27.5,0,0,0,0,56,119.5,147.5,0,34.7,0,107.6,12.5], label: 'Mensual' },
            { data: [40.3,48.1,32.8,58,76.5,133.5,120.2,141.5,329.3,261,96.3,43.7,40.3,48.1,32.8,58,76.5,133.5,120.2,141.5,329.3,261,96.3,43.7], label: 'Normal', yAxisID: 'y-axis-1' }
          ],
          texto:'Precipitación Normal y Mensual registrada ZACAPOAXTLA Fenómeno de la Niña 1988'
        },
        {
          idT: 2,
          idG: 1,
          bChartLab:  ['ene-82','feb-82','mar-82','abr-82','may-82','jun-82','jul-82','ago-82','sep-82','oct-82','nov-82','dic-82','ene-83','feb-83','mar-83','abr-83','may-83','jun-83','jul-83','ago-83','sep-83','oct-83','nov-83','dic-83'],
          chartData: [
            { data: [25,33,12.5,52,70.5,39.5,43.5,82.5,381.5,279,51,28,35,19,28,7.5,30.5,55.5,155,85,251,178,141.6,65.5], label: 'Mensual' },
            { data: [40.3,48.1,32.8,58,76.5,133.5,120.2,141.5,329.3,261,96.3,43.7,40.3,48.1,32.8,58,76.5,133.5,120.2,141.5,329.3,261,96.3,43.7], label: 'Normal', yAxisID: 'y-axis-1' }
          ],
          texto:'Precipitación Normal y Mensual registrada ZACAPOAXTLA Fenómeno del Niño 1982-1983'
        }]
    }, {
      idR: 2,
      id: 2,
      nombre: 'Zautla',
      imagen: 'assets/images/nororiental/zautla.jpg',
      descripcion: "Sus coordenadas geográficas son los Paralelos 19º 39' 00'' y 19º 48' 18'', de latitud Norte y los meridianos 97º 34'18'' y 97º46'24'' de longitud Occidental. Colindancias: Al Norte: con Xochiapulco. Al Este: con Zacapoaxtla y Tlatlauquitepec. Al Sur: con Cuyoaco e Ixtacamaxtitlán. Al Oeste: con Tetela de Ocampo.",
      extension: 'Tiene una superficie de 266.70 kilómetros cuadrados. que lo ubica en el lugar 38 con respecto a los demás municipios del estado',
      clima: 'El Municipio se localiza dentro de la zona de climas templados, se identifican tres climas: clima templado húmedo, con abundantes lluvias en verano. Se presenta en el extremo norte. Clima templado subhúmedo con lluvias de verano; es el clima predominante, ocupa la parte meridional del municipio. Clima templado húmedo con lluvia en verano; presenta en una franja latitudinal al norte del municipio.',
      recursos: 'Se explotan los bosques de madera como son; pino colorado, pino lacio, encino quebrado ocote oyameles y soyate, para la construcción.',
      principales: 'La mayor parte de municipio esta cubierta por bosques de pino y asociaciones de pino-encino; destacan especies arbóreas siguientes: pino colorado, pino lacio, encino quebrado, ocote, oyamel y soyate acompañados en ocasiones por vegetación secundaria arbustiva.',
      grafica: [
        {
          idT: 2,
          idG: 1,
          bChartLab:  ['abr-97','may-97','jun-97','jul-97','ago-97','sep-97','oct-97','nov-97','dic-97','ene-98','feb-98','mar-98','abr-98','may-98','jun-98','jul-98','ago-98','sep-98','oct-98','nov-98','dic-98',],
          chartData: [
            { data: [70.7,70.7,64.7,47.6,40.6,69.7,86.9,14.8,10.6,1.6,2.3,0.4,1.9,0,85.9,52,61.4,177.8,120.1,18.6,1], label: 'Mensual' },
            { data: [26.2,38.8,72.5,69.9,70.8,105.7,54.7,20.5,9.8,8.2,10.4,11.1,26.2,38.8,72.5,69.9,70.8,105.7,54.7,20.5,9.8], label: 'Normal', yAxisID: 'y-axis-1' }
          ],
          texto:'Precipitación Normal y Mensual registrada ZAUTLA Fenómeno del Niño 1997-1998'
        },
        {
          idT: 2,
          idG: 1,
          bChartLab:  ['ene-91','feb-91','mar-91','abr-91','may-91','jun-91','jul-91','ago-91','sep-91','oct-91','nov-91','dic-91','ene-92','feb-92','mar-92','abr-92','may-92','jun-92','jul-92','ago-92','sep-92','oct-92','nov-92','dic-92'],
          chartData: [
            { data: [8.1,5,4,9.7,18.9,41.7,92.9,36.5,75.3,45.1,17.3,9.7,46.9,2.5,33.9,43.8,75.8,75.3,67.7,70.5,99.3,57.4,22.5,0], label: 'Mensual' },
            { data: [8.2,10.4,11.1,26.2,38.8,72.5,69.9,70.8,105.7,54.7,20.5,9.8,8.2,10.4,11.1,26.2,38.8,72.5,69.9,70.8,105.7,54.7,20.5,9.8], label: 'Normal', yAxisID: 'y-axis-1' }
          ],
          texto:'Precipitación Normal y Mensual registrada ZAUTLA Fenómeno del Niño 1991-1992'
        },
        {
          idT: 2,
          idG: 1,
          bChartLab:  ['ene-88','feb-88','mar-88','abr-88','may-88','jun-88','jul-88','ago-88','sep-88','oct-88','nov-88','dic-88','ene-89','feb-89','mar-89','abr-89','may-89','jun-89','jul-89','ago-89','sep-89','oct-89','nov-89','dic-89'],
          chartData: [
            { data: [0,11.7,23.5,59.9,9.7,63.5,56.7,110.1,89.1,17.5,9,10.9,5.5,0.7,11.6,13.5,14.2,83.4,82.5,74.7,191.3,6.9,17,19.6], label: 'Mensual' },
            { data: [8.2,10.4,11.1,26.2,38.8,72.5,69.9,70.8,105.7,54.7,20.5,9.8,8.2,10.4,11.1,26.2,38.8,72.5,69.9,70.8,105.7,54.7,20.5,9.8], label: 'Normal', yAxisID: 'y-axis-1' }
          ],
          texto:'Precipitación Normal y Mensual registrada ZAUTLA Fenómeno de la Niña 1988-1989'
        },
        {
          idT: 2,
          idG: 1,
          bChartLab:  ['ene-82','feb-82','mar-82','abr-82','may-82','jun-82','jul-82','ago-82','sep-82','oct-82','nov-82','dic-82','ene-83','feb-83','mar-83','abr-83','may-83','jun-83','jul-83','ago-83','sep-83','oct-83','nov-83','dic-83'],
          chartData: [
            { data: [0.9,19.8,2.4,58,71.3,29.7,13.5,50.9,92.1,57.3,4.3,3.1,7.2,12.9,10.2,0,14.3,45,75.5,57.6,98.9,20.2,51.1,2.4], label: 'Mensual' },
            { data: [8.2,10.4,11.1,26.2,38.8,72.5,69.9,70.8,105.7,54.7,20.5,9.8,8.2,10.4,11.1,26.2,38.8,72.5,69.9,70.8,105.7,54.7,20.5,9.8], label: 'Normal', yAxisID: 'y-axis-1' }
          ],
          texto:'Precipitación Normal y Mensual registrada ZAUTLA Fenómeno del Niño 1982-1983'
        }]
    }
  ];

  Ang: any[] = [
    {
      idR: 3,
      id: 0,
      nombre: 'Calpan',
      imagen: 'assets/images/angelopolis/calpan.jpg',
      descripcion: 'El mapa general de la República Mexicana señala que el municipio de Chignahuapan se localiza en el estado de Puebla. Debido a la posición geográfica que tiene, se sitúa entre las coordenadas 19° 39" 42" y 19° 58" 48" latitud norte del trópico de cáncer y entre 97° 57" 18" y 98° 18" 06" longitud oeste del meridiano de Greenwich. La altitud promedio de dicho municipio es de 700 metros sobre el nivel del mar (msnm). Está formado por una extensión territorial de 591.92 kilómetros cuadrados. Chignahuapan se encuentra territorialmente rodeado al norte por el municipio de Zacatlán, al sur por el estado de Tlaxcala, al oeste una vez más por Zacatlán y Aquixtla, finalmente al poniente se encuentra el estado de Hidalgo. En otra información, el Instituto Nacional de Estadística y Geografía señaló que, de acuerdo con los resultados obtenidos del tercer conteo de población realizado durante el 2010, el municipio de Chignahuapan cuenta con una población total de 57,904',
      extension: 'Tiene una superficie de 760.23 Km^2, que lo ubica en el 3 lugar con respecto a los demás municipios del estado',
      clima: 'El municipio se localiza dentro de la zona de los templados de la sierra norte; se identifican dos climas: o    Clima semifrío subhúmedo con lluvias en verano; temperatura media anual entre 5 y 12ºC; temperatura del mes más frío entre -3 y, 18ºC; precipitación del mes más seco menor de 40 milímetros; la precipitación invernal con respecto a la anual es entre 5 y 10.2 por ciento. o Se presentan en las cumbres del peñón del Rosario y en los cerros las Tablas, así como en el conjunto montañoso del extremo oeste. o    El templado subhúmedo con lluvias en verano; temperatura media anual entre 12 y 18ºC; temperatura del mes más frío entre -3 y 18ºC; precipitación del mes más seco menor de 40 milímetros; la precipitación invernal con respecto a la anual es entre 5 y 10.2 por ciento. o    Se identifica en las estribaciones bajas del peñón del Rosario y de los cerros Las Tablas, así como el extremo norte. Es el clima predominante  ',
      recursos: 'Cuenta con una gran variedad de especies forestales, mismos que son explotados y que convierten el municipio en uno de los principales productores de madera a nivel estatal: o  Minería: entre sus principales yacimientos encontramos: ocre, tepelttxyl-arcilla',
      principales: '',
      grafica: [
        {
          idT: 2,
          idG: 1,
          bChartLab:  ['ene-10','feb-10','mar-10','abr-10','may-10','jun-10','jul-10','ago-10','sep-10','oct-10','nov-10','dic-10','ene-11','feb-11','mar-11','abr-11','may-11','jun-11','jul-11','ago-11','sep-11','oct-11','nov-11','dic-11'],
          chartData: [
            { data: [40.1,130.3,5,14.7,70.9,119.9,224.4,301.7,245.8,0,1.2,0,0,0,0.5,49.2,55.3,119.5,252.8,232,87.8,62.1,19.4,0], label: 'Mensual' },
            { data: [7.7,12.8,9.7,25.4,53.8,153.8,162.9,167.7,160.6,60.8,12.5,5.3,7.7,12.8,9.7,25.4,53.8,153.8,162.9,167.7,160.6,60.8,12.5,5.3], label: 'Normal', yAxisID: 'y-axis-1' }
          ],
          texto:'Precipitación Normal y Mensual registrada CALPAN Fenómeno del Niño 2010-2011'
        },
        {
          idT: 2,
          idG: 1,
          bChartLab:  ['ene-97','feb-97','mar-97','abr-97','may-97','jun-97','jul-97','ago-97','sep-97','oct-97','nov-97','dic-97','ene-98','feb-98','mar-98','abr-98','may-98','jun-98','jul-98','ago-98','sep-98','oct-98','nov-98','dic-98'],
          chartData: [
            { data: [0,0,28.7,93.2,56,143.3,145.9,124.2,151.1,34.8,23.4,5.3,1.6,0,6,0,1.2,132.8,135.3,103.9,247.6,105.9,38.2,0], label: 'Mensual' },
            { data: [7.7,12.8,9.7,25.4,53.8,153.8,162.9,167.7,160.6,60.8,12.5,5.3,7.7,12.8,9.7,25.4,53.8,153.8,162.9,167.7,160.6,60.8,12.5,5.3], label: 'Normal', yAxisID: 'y-axis-1' }
          ],
          texto:'Precipitación Normal y Mensual registrada CALPAN Fenómeno del Niño 1997-1998'
        },
        {
          idT: 2,
          idG: 1,
          bChartLab:  ['ene-91','feb-91','mar-91','abr-91','may-91','jun-91','jul-91','ago-91','sep-91','oct-91','nov-91','dic-91','ene-92','feb-92','mar-92','abr-92','may-92','jun-92','jul-92','ago-92','sep-92','oct-92','nov-92','dic-92'],
          chartData: [
            { data: [0,2,0,3.7,137.9,231.5,134.1,102.7,158.5,74.9,24.2,0,67.7,33.8,8.2,5.3,108.8,119.9,133.9,254.8,191.1,99.9,78.7,11.7], label: 'Mensual' },
            { data: [7.7,12.8,9.7,25.4,53.8,153.8,162.9,167.7,160.6,60.8,12.5,5.3,7.7,12.8,9.7,25.4,53.8,153.8,162.9,167.7,160.6,60.8,12.5,5.3], label: 'Normal', yAxisID: 'y-axis-1' }
          ],
          texto:'Precipitación Normal y Mensual registrada CALPAN Fenómeno del Niño 1991-1992'
        },
        {
          idT: 2,
          idG: 1,
          bChartLab:  ['ene-88','feb-88','mar-88','abr-88','may-88','jun-88','jul-88','ago-88','sep-88','oct-88','nov-88','dic-88','ene-89','feb-89','mar-89','abr-89','may-89','jun-89','jul-89','ago-89','sep-89','oct-89','nov-89','dic-89'],
          chartData: [
            { data: [0,4,40.1,12.5,29.5,209.3,208.1,151.5,111,12,0,0,0,1.9,0,0,49.1,160.9,109.6,192.7,96.3,27.1,17.5,15], label: 'Mensual' },
            { data: [7.7,12.8,9.7,25.4,53.8,153.8,162.9,167.7,160.6,60.8,12.5,5.3,7.7,12.8,9.7,25.4,53.8,153.8,162.9,167.7,160.6,60.8,12.5,5.3], label: 'Normal', yAxisID: 'y-axis-1' }
          ],
          texto:'Precipitación Normal y Mensual registrada CALPAN Fenómeno del Niño 1988-1989'
        },
        {
          idT: 2,
          idG: 1,
          bChartLab:  ['ene-82','feb-82','mar-82','abr-82','may-82','jun-82','jul-82','ago-82','sep-82','oct-82','nov-82','dic-82','ene-83','feb-83','mar-83','abr-83','may-83','jun-83','jul-83','ago-83','sep-83','oct-83','nov-83','dic-83'],
          chartData: [
            { data: [0,17.6,10.9,25.8,63.2,54.7,63.1,49.7,77.6,39.9,0.5,0,8.3,8.4,25.3,0,8.1,75.5,180,136.8,224,35.8,6,0], label: 'Mensual' },
            { data: [7.7,12.8,9.7,25.4,53.8,153.8,162.9,167.7,160.6,60.8,12.5,5.3,7.7,12.8,9.7,25.4,53.8,153.8,162.9,167.7,160.6,60.8,12.5,5.3], label: 'Normal', yAxisID: 'y-axis-1' }
          ],
          texto:'Precipitación Normal y Mensual registrada CALPAN Fenómeno del Niño 1982-1983'
        }]
    },
    {
      idR: 3,
      id: 1,
      nombre: 'Cuatlancingo',
      imagen: 'assets/images/angelopolis/cuatlan.jpg',
      descripcion: 'Se localiza en la parte noroeste del estado. Sus coordenadas geográficas son los paralelos 20º 05" 30" y 20º 17" 06" de latitud norte de los meridianos 97º 57" 00" y 98º 08" 06" de longitud occidental. Sus colindancias son: al Norte con Xicotepec de Juárez y Juan Galindo, al Sur con Ahuazotepec y Zacatlán, al Oeste con Juan Galindo y Tlaola y al Poniente con Naupan, Ahuazotepec y el Estado de Hidalgo. Cuenta con 44 Localidades, de las cuales las más importantes son: Tenango de las Flores, El Potro, Cuacuila, Ahuacatlán y Xaltepec',
      extension: 'Tiene una superficie de 250.41 Km^2 que lo ubica en lugar 84 con respecto a los demás municipios del Estado',
      clima: 'En el municipio se pueden identificar dos climas: clima templado húmedo, con lluvias todo el año; temperatura media anual entre 12 y 18º C; temperatura del mes más frío entre -3 y 18º C; precipitación del mes más seco mayor de 40 milímetros, por ciento de lluvia invernal con respecto a la anual es menor de 18. clima semicálido subhúmedo, con lluvias todo el año; temperatura media anual mayor de 18º C; precipitación del mes más seco mayor de 40 milímetros, por ciento de lluvia, invernal con respecto a la anual menor de 18. Se presenta en las partes más bajas del municipio al oriente.',
      recursos: 'Cuenta con bosques de pino, existen criaderos de trucha en Teopancingo y carpa en la presa de Tenango',
      principales: '',
      grafica:[]
    },
    {
      idR: 3,
      id: 2,
      nombre: 'Huejotzingo',
      imagen: 'assets/images/angelopolis/huejo.jpg',
      descripcion: 'Se localiza en la parte Noroeste, del estado de Puebla, sus coordenadas geográficas son: los paralelos 20º 12" 24" y 20º 14" 24" de latitud norte y los meridianos 97º 57" 00" y 98º 01" 24" de longitud occidental. Sus colindancias son al Norte con Xicotepec, al Sur con Huauchinango y Tlaola, al Oeste con Xicotepec y Zihuateutla y al Poniente con Huauchinango.',
      extension: 'Tiene una superficie de 23.15 kilómetros cuadrados que lo ubican en el lugar 175 con respecto a los demás municipios del estado',
      clima: 'El municipio se ubica en la transición de los climas templados de la Sierra Norte y los cálidos del declive del Golfo; presenta dos climas: clima semicálido: Subhúmedo con lluvias todo el año temperatura media anual mayor de 18ºC; temperatura del mes más frío entre 3 y 18ºC; precipitación del mes más seco mayor de 40 milímetros; por ciento de lluvia invernal con respecto a la anual menor de 18. Es el clima predominante; se identifica en la porción central y sudoccidental. clima cálido: Con lluvias todo el año; temperatura media anual mayor de 22ºC; la temperatura del mes más frío es mayor de 18ºC; existe una diferencia porcentual de lluvia invernal con respecto a la anual menor de 18; la precipitación del mes más seco es mayor de 60 milímetros y se presenta en la porción oriental del municipio',
      recursos: '',
      principales: 'El municipio conserva pocas áreas con vegetación natural; tan sólo quedan bosques de pino-encino en áreas reducidas al poniente y al sur. El resto del territorio ha sufrido una fuerte deforestación; se han implantado pastizales al norte y en la porción central se cuentan con zonas dedicadas a la Agricultura. ',
      grafica:[]
    },
    {
      idR: 3,
      id: 3,
      nombre: 'Puebla',
      imagen: 'assets/images/angelopolis/puebla.jpg',
      descripcion: 'El municipio de Tetela de Ocampo se localiza en la parte Norte del Estado de Puebla. Sus coordenadas geográficas son los paralelos 19º 43" 00" y 19º 57" 06" de latitud norte y los meridianos 97º 38" 42" y 97º 54" 06" de longitud occidental. Sus colindancias son al Norte con Cuautempan y Tepetzintla, al Sur con Ixtacamaxtitlán, al Oeste con Xochiapulco y Zautla, y al Poniente con Aquixtla, Zacatlán e Ixtacamaxtitlán.',
      extension: 'Tiene una superficie de 328.80 kilómetros cuadrados lo que lo ubica en el lugar 27º con respecto a los demás municipios del Estado',
      clima: 'El municipio se ubica dentro de la zona de climas templados de la Sierra Norte; conforme se avanza de sur a norte, se incrementa la humedad, identificándose los siguientes climas: clima templado subhúmedo con lluvias en verano; temperatura media anual entre 12 y 18ºC; precipitación del mes más seco menor de 40 milímetros; por ciento de precipitación invernal con respecto a la anual menor de 5. Cubre una amplia franja del centro. clima templado húmedo con lluvias todo el año; temperatura media anual entre 12 y 18ºC; temperatura del mes más frío entre -3 y 18ºC; precipitación del mes más seco mayor de 40 milímetros; por ciento de precipitación de lluvia invernal con respecto a la anual, menor de 18. Se presenta al extremo noroeste. clima semicálido subhúmedo con lluvias todo el año; temperatura media anual mayor de 18ºC; temperatura del mes más frío entre -3 y 18ºC; precipitación del mes más seco mayor de 40 milímetros; porciento de la lluvia invernal con respecto a la anual, menor de 18. Se presenta en el extremo noroeste del municipio',
      recursos: 'Cuentan con recursos forestales tales como bosques de pino chino, ocote, encino y encino negro: o    En cuento a fauna silvestre existe conejo, ardilla, armadillo y tlacuache. o    Existen yacimientos y minas de oro en la comunidad de la cañada. ',
      principales: 'El municipio presenta la mayor parte de su territorio cubierto de bosques, tanto de pinos, como de asociaciones de pino-encino, destacan los siguientes: pino colorado, lacia y ayacahuite; encino colorado, cesante y oyamel. o   Entre mezclados en las zonas montañosas, generalmente a los lados de las carreteras y de algunos ríos, se encuentran áreas incorporadas a la actividad agrícola de tipo temporal, que poco a poco le han ido ganando terreno a los bosques. Al poniente, a lo largo de la carretera Aquixtla-Tetela de Ocampo, se ha implantado una zona de riego, usando las aguas del río Texocoapa.',
      grafica:[]
    },
    {
      idR: 3,
      id: 4,
      nombre: 'San Andrés Cholula',
      imagen: 'assets/images/angelopolis/sanAndres.jpg',
      descripcion: 'El municipio de Xicotepec de Juárez se localiza en la parte Noroeste del estado de Puebla. Sus coordenadas geográficas son los paralelos 20º 14" 18" y 20º 26" 12" de latitud norte y los meridianos 97º 45" 00" y 98º 03" 06" de longitud occidental. Sus colindancias son al Norte con Jalpan, al Sur con Juan Galindo y Zihuateutla, al Oeste con Zihuateutla y al Poniente con Tlacuilotepec.',
      extension: 'Tiene una superficie de 312.30 kilómetros cuadrados que lo ubican en el lugar 34 con respecto a los demás municipios del estado',
      clima: 'En el municipio se presenta la transición de los climas templados de la sierra norte, a los cálidos del declive del Golfo; se identifican dos climas: clima semicálido subhúmedo con lluvias todo el año; temperatura media anual mayor de 18ºC; temperatura del mes más frío entre -3º y 18ºC; precipitación del mes más seco mayor de 40 milímetros; la lluvia invernal con respecto a la anual es menor en un 18 por ciento. Es el clima predominante, se identifica en la porción central y meridional.  Clima cálido-húmedo con lluvias todo el año; temperatura media anual mayor de 22ºC; temperatura del mes más frío mayor de 18ºC; la lluvia invernal con respecto a la anual es menor de 18 por ciento; la precipitación del mes más seco es mayor de 60 milímetros. Se identifica en la porción septentrional del municipio',
      recursos: 'Existen bosques de encino y de explotación forestal, en esta actividad se explotan las maderas finas y de construcción. Minería: En esta rama económica tenemos en existencia, barita, plomo, arcilla, feldespato, cobre, plata y el beneficiado es el no metálico barita',
      principales: 'La mayor parte del territorio ha perdido su vegetación natural; tan sólo subsisten algunas áreas de selva alta perennifolia al noreste y suroeste y centro-este',
      grafica:[]
    },
    {
      idR: 3,
      id: 5,
      nombre: 'San Pedro Cholula',
      imagen: 'assets/images/angelopolis/sanP.jpg',
      descripcion: 'El municipio de Xochiapulco se localiza en la parte norte del estado de Puebla sus coordenadas geográficas son: los paralelos 19º 47" 36" y 19º 37" 06" de latitud norte y los meridianos 97º 37" 06" y 96º 46" 00" de longitud Occidental. Colindancias: Al Norte: Con Xochitlán de Vicente Suarez. Al Este: Con Zacapoaxtla. Al Sur: Con Zautlan y Al Oeste: Con Tetela de Ocampo',
      extension: 'Tiene una superficie de 59.73 kilómetros cuadrados, que lo ubica en el lugar 114 con respecto a los demás municipios del estado',
      clima: 'El municipio se localiza en las zonas de climas templados de la Sierra Norte, destacan dos climas: Clima Templado Húmedo con abundantes lluvias todo el año. Se presenta en la mayor área del municipio. Clima Templado con abundantes lluvias en verano, se presentan en un área reducida al norte',
      recursos: 'Se explota la madera de pino',
      principales: 'La mayor parte del municipio es cubierto de asociaciones de pino-encino, de donde prodomina el pino colorado, pino lacio, encino glabrescens y encino carrasco. Sin embargo, estos bosques poco a poco están siendo eliminados para utilizar su madera y para abrir nuevas zonas al cultivo; así, el suroeste y sureste en áreas accesibles por carretera aparecen zonas dedicadas a la Agricultura de temporal.',
      grafica:[]
    }

  ];

  T: any[] = [
    {
      idR: 5,
      id: 0,
      nombre: 'Tehuacán',
      imagen: 'assets/images/Tehuacan/tehuacan.jpg',
      descripcion: "El municipio de Tehuacán se localiza en la parte sureste del Estado de Puebla. Sus coordenadas geográficas son los paralelos 18º22'06'' y 18º36'12'' de longitud norte, y los meridianos 97º15'24'' y 97º37'24'' de longitud occidental. Sus colindancias son al Norte con Tepanco de López, Santiago Miahuatlán, Nicolás Bravo y Vicente Guerrero, al Este con Vicente Guerrero, San Antonio Cañada y Ajalpan, al Sur con San Gabriel Chilac, Zapotitlán y Altepexi y al Oeste con Zapotitlán, San Martín Atexcal, Juan N. Méndez y Tepango de López.",
      extension: 'El municipio de Tehuacán representa el 1.15% de la superficie del Estado. Abarcando una Extensión aproximada de 553.57 kilómetros cuadrados, que lo ubican en el lugar 18º con respecto a los demás municipios del Estado',
      clima: 'Por su ubicación Extensión y configuración presenta una gran variedad de climas que van desde los templados en la sierra de Zapotitlán, hasta los templados de la Sierra de Zongolica, pasando por los cálidos del Valle de Tehuacán. clima templado subhúmedo con lluvias en verano; se ubica en el extremo poniente de la parte elevada de la Sierra de Zapotitlán. Clima seco semicálido con lluvias en verano y escasas a lo largo del año; se identifica en la parte sur del municipio, dentro del Valle de Tehuacán. Clima semiseco cálido lluvias en verano y escasas a lo largo del año; es el clima predominante en el área correspondiente al Valle de Tehuacán. Clima semiseco templado con lluvias en verano y escasas a lo largo del año; es el clima que se presenta entre las zonas orientales del Valle de Tehuacán, y las primeras estribaciones de la Sierra de Zongolica',
      recursos: 'Los recursos más importantes son sus manantiales naturales',
      principales: 'El municipio presenta una gran variedad vegetativa. En áreas del Valle que no están suficientemente planas, pero que tampoco son demasiado accidentadas, se presentan zonas de mezquitales. La vegetación que presentan el declive oriental de la Sierra de Zapotitlán y el occidental de la Sierra de Zongolica, constituida, principalmente, por matorral desértico rosetófilo, en ocasiones asociado a vegetación secundaria arbustiva o matorral subinerme; también se encuentran chaparrales y vegetación de selva baja caducifolia. El noreste, del municipio donde la Sierra de Zongolica alcanza mayor altura y el clima ya es templado, se presentan bosques de pino-encino y pino.',
      grafica: [
        {
          idT: 2,
          idG: 1,
          bChartLab:  ['ene-10','feb-10','mar-10','abr-10','may-10','jun-10','jul-10','ago-10','sep-10','oct-10','nov-10','dic-10','ene-11','feb-11','mar-11','abr-11','may-11','jun-11','jul-11','ago-11','sep-11','oct-11','nov-11','dic-11'],
          chartData: [
            { data: [49,33.5,4,36.5,40.5,94,240.5,185.5,112.5,0,8,0,0.5,0,0,10.5,90.5,215,103.3,112.5,66.1,25,0,1], label: 'Mensual' },
            { data: [8.2,7.5,7.7,20.3,63.6,109.2,71.6,70.8,77.4,37,9.3,2.5,8.2,7.5,7.7,20.3,63.6,109.2,71.6,70.8,77.4,37,9.3,2.5], label: 'Normal', yAxisID: 'y-axis-1' }
          ],
          texto:'Precipitación Mensual y Normal TEHUACÁN Efecto del Niño 2010-2011'
        },
        {
          idT: 2,
          idG: 1,
          bChartLab:  ['ene-97','feb-97','mar-97','abr-97','may-97','jun-97','jul-97','ago-97','sep-97','oct-97','nov-97','dic-97','ene-98','feb-98','mar-98','abr-98','may-98','jun-98','jul-98','ago-98','sep-98','oct-98','nov-98','dic-98'],
          chartData: [
            { data: [0,0,6.5,68.5,97,46,14,9.5,41,77,36.5,18.5,0,0,0,1.5,0,35.5,112,92,309.2,39,35.5,0], label: 'Mensual' },
            { data: [8.2,7.5,7.7,20.3,63.6,109.2,71.6,70.8,77.4,37,9.3,2.5,8.2,7.5,7.7,20.3,63.6,109.2,71.6,70.8,77.4,37,9.3,2.5], label: 'Normal', yAxisID: 'y-axis-1' }
          ],
          texto:'Precipitación Mensual y Normal TEHUACÁN Efecto del Niño 1997-1998'
        },
        {
          idT: 2,
          idG: 1,
          bChartLab:  ['ene-91','feb-91','mar-91','abr-91','may-91','jun-91','jul-91','ago-91','sep-91','oct-91','nov-91','dic-91','ene-92','feb-92','mar-92','abr-92','may-92','jun-92','jul-92','ago-92','sep-92','oct-92','nov-92','dic-92'],
          chartData: [
            { data: [0,1,0,11.5,54.5,162.3,167.3,28.5,203.2,39.5,11.5,0.5,75,14.5,45.5,4.2,271,130.8,37,34,27,9.5,9.5,0], label: 'Mensual' },
            { data: [8.2,7.5,7.7,20.3,63.6,109.2,71.6,70.8,77.4,37,9.3,2.5,8.2,7.5,7.7,20.3,63.6,109.2,71.6,70.8,77.4,37,9.3,2.5], label: 'Normal', yAxisID: 'y-axis-1' }
          ],
          texto:'Precipitación Mensual y Normal TEHUACÁN Efecto del Niño 1991-1992'
        },
        {
          idT: 2,
          idG: 1,
          bChartLab:  ['ene-88','feb-88','mar-88','abr-88','may-88','jun-88','jul-88','ago-88','sep-88','oct-88','nov-88','dic-88','ene-89','feb-89','mar-89','abr-89','may-89','jun-89','jul-89','ago-89','sep-89','oct-89','nov-89','dic-89'],
          chartData: [
            { data: [13,0,0,14.5,55.5,111.8,81,0,155.1,8.3,0,0,0,1,5.5,14,22,132.1,79.8,74,25,7.1,12,0], label: 'Mensual' },
            { data: [8.2,7.5,7.7,20.3,63.6,109.2,71.6,70.8,77.4,37,9.3,2.5,8.2,7.5,7.7,20.3,63.6,109.2,71.6,70.8,77.4,37,9.3,2.5], label: 'Normal', yAxisID: 'y-axis-1' }
          ],
          texto:'Precipitación Mensual y Normal TEHUACÁN Efecto del Niño 1988-1989'
        },
        {
          idT: 2,
          idG: 1,
          bChartLab:  ['ene-82','feb-82','mar-82','abr-82','may-82','jun-82','jul-82','ago-82','sep-82','oct-82','nov-82','dic-82','ene-83','feb-83','mar-83','abr-83','may-83','jun-83','jul-83','ago-83','sep-83','oct-83','nov-83','dic-83' ],
          chartData: [
            { data: [0,18,23,11,54,110.5,13,3,5.4,28.8,15,2.5,2,32.5,6,4,6.5,114.9,109.6,11.4,20.2,0,25.6,5], label: 'Mensual' },
            { data: [8.2,7.5,7.7,20.3,63.6,109.2,71.6,70.8,77.4,37,9.3,2.5,8.2,7.5,7.7,20.3,63.6,109.2,71.6,70.8,77.4,37,9.3,2.5], label: 'Normal', yAxisID: 'y-axis-1' }
          ],
          texto:'Precipitación Mensual y Normal TEHUACÁN Efecto del Niño 1982-1983'
        }
      ]
    }
  ];

  MIX: any[] = [
    {
      idR: 4,
      id: 0,
      nombre: 'Huitsiltepec',
      imagen: 'assets/images/mixteca/huitsil.jpg',
      descripcion: "El municipio de Tehuacán se localiza en la parte sureste del Estado de Puebla. Sus coordenadas geográficas son los paralelos 18º22'06'' y 18º36'12'' de longitud norte, y los meridianos 97º15'24'' y 97º37'24'' de longitud occidental. Sus colindancias son al Norte con Tepanco de López, Santiago Miahuatlán, Nicolás Bravo y Vicente Guerrero, al Este con Vicente Guerrero, San Antonio Cañada y Ajalpan, al Sur con San Gabriel Chilac, Zapotitlán y Altepexi y al Oeste con Zapotitlán, San Martín Atexcal, Juan N. Méndez y Tepango de López.",
      extension: 'El municipio de Tehuacán representa el 1.15% de la superficie del Estado. Abarcando una Extensión aproximada de 553.57 kilómetros cuadrados, que lo ubican en el lugar 18º con respecto a los demás municipios del Estado',
      clima: 'Por su ubicación Extensión y configuración presenta una gran variedad de climas que van desde los templados en la sierra de Zapotitlán, hasta los templados de la Sierra de Zongolica, pasando por los cálidos del Valle de Tehuacán. clima templado subhúmedo con lluvias en verano; se ubica en el extremo poniente de la parte elevada de la Sierra de Zapotitlán. Clima seco semicálido con lluvias en verano y escasas a lo largo del año; se identifica en la parte sur del municipio, dentro del Valle de Tehuacán. Clima semiseco cálido lluvias en verano y escasas a lo largo del año; es el clima predominante en el área correspondiente al Valle de Tehuacán. Clima semiseco templado con lluvias en verano y escasas a lo largo del año; es el clima que se presenta entre las zonas orientales del Valle de Tehuacán, y las primeras estribaciones de la Sierra de Zongolica',
      recursos: 'Los recursos más importantes son sus manantiales naturales',
      principales: 'El municipio presenta una gran variedad vegetativa. En áreas del Valle que no están suficientemente planas, pero que tampoco son demasiado accidentadas, se presentan zonas de mezquitales. La vegetación que presentan el declive oriental de la Sierra de Zapotitlán y el occidental de la Sierra de Zongolica, constituida, principalmente, por matorral desértico rosetófilo, en ocasiones asociado a vegetación secundaria arbustiva o matorral subinerme; también se encuentran chaparrales y vegetación de selva baja caducifolia. El noreste, del municipio donde la Sierra de Zongolica alcanza mayor altura y el clima ya es templado, se presentan bosques de pino-encino y pino.',
      grafica:[]
    },
    {
      idR: 4,
      id: 1,
      nombre: 'San Pablo Aninaco',
      imagen: 'assets/images/mixteca/sanpablo.jpg',
      descripcion: "El municipio de Tehuacán se localiza en la parte sureste del Estado de Puebla. Sus coordenadas geográficas son los paralelos 18º22'06'' y 18º36'12'' de longitud norte, y los meridianos 97º15'24'' y 97º37'24'' de longitud occidental. Sus colindancias son al Norte con Tepanco de López, Santiago Miahuatlán, Nicolás Bravo y Vicente Guerrero, al Este con Vicente Guerrero, San Antonio Cañada y Ajalpan, al Sur con San Gabriel Chilac, Zapotitlán y Altepexi y al Oeste con Zapotitlán, San Martín Atexcal, Juan N. Méndez y Tepango de López.",
      extension: 'El municipio de Tehuacán representa el 1.15% de la superficie del Estado. Abarcando una Extensión aproximada de 553.57 kilómetros cuadrados, que lo ubican en el lugar 18º con respecto a los demás municipios del Estado',
      clima: 'Por su ubicación Extensión y configuración presenta una gran variedad de climas que van desde los templados en la sierra de Zapotitlán, hasta los templados de la Sierra de Zongolica, pasando por los cálidos del Valle de Tehuacán. clima templado subhúmedo con lluvias en verano; se ubica en el extremo poniente de la parte elevada de la Sierra de Zapotitlán. Clima seco semicálido con lluvias en verano y escasas a lo largo del año; se identifica en la parte sur del municipio, dentro del Valle de Tehuacán. Clima semiseco cálido lluvias en verano y escasas a lo largo del año; es el clima predominante en el área correspondiente al Valle de Tehuacán. Clima semiseco templado con lluvias en verano y escasas a lo largo del año; es el clima que se presenta entre las zonas orientales del Valle de Tehuacán, y las primeras estribaciones de la Sierra de Zongolica',
      recursos: 'Los recursos más importantes son sus manantiales naturales',
      principales: 'El municipio presenta una gran variedad vegetativa. En áreas del Valle que no están suficientemente planas, pero que tampoco son demasiado accidentadas, se presentan zonas de mezquitales. La vegetación que presentan el declive oriental de la Sierra de Zapotitlán y el occidental de la Sierra de Zongolica, constituida, principalmente, por matorral desértico rosetófilo, en ocasiones asociado a vegetación secundaria arbustiva o matorral subinerme; también se encuentran chaparrales y vegetación de selva baja caducifolia. El noreste, del municipio donde la Sierra de Zongolica alcanza mayor altura y el clima ya es templado, se presentan bosques de pino-encino y pino.',
      grafica:[]
    },
    {
      idR: 4,
      id: 2,
      nombre: 'Teotlalco',
      imagen: 'assets/images/mixteca/teotlaco',
      descripcion: "El municipio de Tehuacán se localiza en la parte sureste del Estado de Puebla. Sus coordenadas geográficas son los paralelos 18º22'06'' y 18º36'12'' de longitud norte, y los meridianos 97º15'24'' y 97º37'24'' de longitud occidental. Sus colindancias son al Norte con Tepanco de López, Santiago Miahuatlán, Nicolás Bravo y Vicente Guerrero, al Este con Vicente Guerrero, San Antonio Cañada y Ajalpan, al Sur con San Gabriel Chilac, Zapotitlán y Altepexi y al Oeste con Zapotitlán, San Martín Atexcal, Juan N. Méndez y Tepango de López.",
      extension: 'El municipio de Tehuacán representa el 1.15% de la superficie del Estado. Abarcando una Extensión aproximada de 553.57 kilómetros cuadrados, que lo ubican en el lugar 18º con respecto a los demás municipios del Estado',
      clima: 'Por su ubicación Extensión y configuración presenta una gran variedad de climas que van desde los templados en la sierra de Zapotitlán, hasta los templados de la Sierra de Zongolica, pasando por los cálidos del Valle de Tehuacán. clima templado subhúmedo con lluvias en verano; se ubica en el extremo poniente de la parte elevada de la Sierra de Zapotitlán. Clima seco semicálido con lluvias en verano y escasas a lo largo del año; se identifica en la parte sur del municipio, dentro del Valle de Tehuacán. Clima semiseco cálido lluvias en verano y escasas a lo largo del año; es el clima predominante en el área correspondiente al Valle de Tehuacán. Clima semiseco templado con lluvias en verano y escasas a lo largo del año; es el clima que se presenta entre las zonas orientales del Valle de Tehuacán, y las primeras estribaciones de la Sierra de Zongolica',
      recursos: 'Los recursos más importantes son sus manantiales naturales',
      principales: 'El municipio presenta una gran variedad vegetativa. En áreas del Valle que no están suficientemente planas, pero que tampoco son demasiado accidentadas, se presentan zonas de mezquitales. La vegetación que presentan el declive oriental de la Sierra de Zapotitlán y el occidental de la Sierra de Zongolica, constituida, principalmente, por matorral desértico rosetófilo, en ocasiones asociado a vegetación secundaria arbustiva o matorral subinerme; también se encuentran chaparrales y vegetación de selva baja caducifolia. El noreste, del municipio donde la Sierra de Zongolica alcanza mayor altura y el clima ya es templado, se presentan bosques de pino-encino y pino.',
      grafica:[]
    },
    {
      idR: 4,
      id: 3,
      nombre: 'Tepexi de Rodriguez',
      imagen: 'assets/images/mixteca/tepexiR.jpg',
      descripcion: "El municipio de Tehuacán se localiza en la parte sureste del Estado de Puebla. Sus coordenadas geográficas son los paralelos 18º22'06'' y 18º36'12'' de longitud norte, y los meridianos 97º15'24'' y 97º37'24'' de longitud occidental. Sus colindancias son al Norte con Tepanco de López, Santiago Miahuatlán, Nicolás Bravo y Vicente Guerrero, al Este con Vicente Guerrero, San Antonio Cañada y Ajalpan, al Sur con San Gabriel Chilac, Zapotitlán y Altepexi y al Oeste con Zapotitlán, San Martín Atexcal, Juan N. Méndez y Tepango de López.",
      extension: 'El municipio de Tehuacán representa el 1.15% de la superficie del Estado. Abarcando una Extensión aproximada de 553.57 kilómetros cuadrados, que lo ubican en el lugar 18º con respecto a los demás municipios del Estado',
      clima: 'Por su ubicación Extensión y configuración presenta una gran variedad de climas que van desde los templados en la sierra de Zapotitlán, hasta los templados de la Sierra de Zongolica, pasando por los cálidos del Valle de Tehuacán. clima templado subhúmedo con lluvias en verano; se ubica en el extremo poniente de la parte elevada de la Sierra de Zapotitlán. Clima seco semicálido con lluvias en verano y escasas a lo largo del año; se identifica en la parte sur del municipio, dentro del Valle de Tehuacán. Clima semiseco cálido lluvias en verano y escasas a lo largo del año; es el clima predominante en el área correspondiente al Valle de Tehuacán. Clima semiseco templado con lluvias en verano y escasas a lo largo del año; es el clima que se presenta entre las zonas orientales del Valle de Tehuacán, y las primeras estribaciones de la Sierra de Zongolica',
      recursos: 'Los recursos más importantes son sus manantiales naturales',
      principales: 'El municipio presenta una gran variedad vegetativa. En áreas del Valle que no están suficientemente planas, pero que tampoco son demasiado accidentadas, se presentan zonas de mezquitales. La vegetación que presentan el declive oriental de la Sierra de Zapotitlán y el occidental de la Sierra de Zongolica, constituida, principalmente, por matorral desértico rosetófilo, en ocasiones asociado a vegetación secundaria arbustiva o matorral subinerme; también se encuentran chaparrales y vegetación de selva baja caducifolia. El noreste, del municipio donde la Sierra de Zongolica alcanza mayor altura y el clima ya es templado, se presentan bosques de pino-encino y pino.',
      grafica:[]
    }
  ];

  imagenes: any = [
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

  // Documentos PDF 
  FilePdd: Files[] = [
    {
      id: 1,
      name: "programa taller",
      description: "Programa del taller, 28 de noviembre 2018",
      url: "../assets/pdf/programa_taller.pdf",
      image: "../assets/img/programa_taller.jpg"
    },
    {
      id: 2,
      name: "Marco",
      description: "Marco Juridico y Fuentes de Financiamiento",
      url: "../assets/pdf/Marco_Juridico.pdf",
      image: "../assets/img/marco_juridico.jpg"
    },
    {
      id: 3,
      name: "CEMDA",
      description: "CEMDA-Mapeo de financiamiento climático en México",
      url: "../assets/pdf/CEMDA.pdf",
      image: "../assets/img/cemda.PNG"
    },
    {
      id: 4,
      name: "leyCambio",
      description: "Ley de Cambio Climatico del Estado de Puebla",
      url: "../assets/pdf/leyCambio.pdf",
      image: "../assets/img/leyCambio.jpg"
    },
    {
      id: 5,
      name: "tmf",
      description: "Financiamiento internacional para el cambio climático en México",
      url: "../assets/pdf/tmf.pdf",
      image: "../assets/img/financiamiento.jpg"
    },
    {
      id: 6,
      name: "Cuestionario",
      description: "Primer cuestionario aplicado a los representantes de cada municipio",
      url: "../assets/pdf/cuestinario1.pdf",
      image: "../assets/img/cuestionario1.jpg"
    },
    {
      id: 7,
      name: "Cuestionaro 2",
      description: "Segundo cuestionario aplicado a los representantes de munucipios",
      url: "../assets/pdf/cuestinario2.pdf",
      image: "../assets/img/cuestionario2.jpg"
    }

  ];

  //  Informacion general de Regiones
  Region: Regiones[] = [
    {
      id: 1,
      titulo: "Sierra Norte",
      imagen: "assets/images/sierraNorte/chignahuapan.png",
      descripcion: "Ubicación. Se encuentra al noroeste del estado. Colinda con Veracruz al norte y con Hidalgo y Tlaxcala al oeste y al este con la región dos. Es la segunda región más  habitada debido sobre todo a las buenas condiciones naturales y socioculturales. Su extención territorial es de 5903.5 km. ",
      clima: "Clima. Caracterizada por sus variadas temperaturas, cálidas , húmedas y frías; acompañan al paisaje la neblina en las partes altas y humedad con lluvia durante todo el año."
    }, {
      id: 2,
      titulo: "Sierra Nororiental",
      imagen: "assets/images/nororiental/teziutlan.jpg",
      descripcion: "Ubicación. Está al norte y al oriente del estado, limita con Veracruz al norte y al oriente y con las regiones I Sierra norte , al poniente y al sur con la III Valle Serdán. Es la quinta región más poblada del estado, su extensión territorial es de 2509.3 km2. Predomina la población rural con un 57.5%  frente a un 42.5% en comunidades urbanas. Esta región está conformada por 28 municipios .",
      clima: "Clima. Es una zona montañosa en la que llueve todo el año, con distintas combinaciones de climas, que van desde el cálido húmedo hasta el frío. Atractivos naturales. Tiene varios afluentes como el río Apulco, afluente del Necaxa y el Martínez de la Torre o Nautla en Veracruz. Cuenta con paisajes boscosos con distintas especies de árboles y vastos pastizales. Los cerros que se pueden mencionar son el Colorado, Las Ventanillas, el Ozuma, el Toxcaitac, la Bandera y el Pinal. Su flora se compone de distintas especies arbóreas como pino, oyamel, laquidámbar, entre otros. Su fauna es silvestre, entre la que destacan armadillos, tuzas, liebres, mapaches, tlacuaches, ardillas y otras en peligro de extinción como el zorro. En esta región se encuentran pueblos enclavados en las alturas de la sierra con sinuosas callejuelas empedradas y techumbres de dos aguas, siempre húmedos siempre verdes."
    }, {
      id: 3,
      titulo: "Valle Serdan",
      imagen: "assets/images/angelopolis/calpan.jpg",
      descripcion: "Ubicación. Se sitúa en el centro del estado, colinda al norte con la región Sierra Norte y la región Sierra Nororiental al oriente con Veracruz y al Poniente con Tlaxcala. Su extensión es de 5300.6 km2. Es la tercera región por número de población, formada por 598,305 habitantes, de los cuales 40.8% viven en comunidades rurales y 59.2% en comunidades urbanas. Está integrada por 31 municipios.",
      clima: "Clima. Su territorio tiene valles, llanuras y montaña. La variedad vegetal es muy amplia, formada por arbustos, nopales, hierbas, algas, hongos, helechos y musgos, en las montañas el clima es frío y en los valles es templado. El Citlaltépetl o Pico de Orizaba es la elevación más importante y  la principal zona boscosa, además de tener una pradera de alta montaña y nieves perpetuas. Atractivos Naturales. En esta región existen algunas zonas desérticas y varias lagunas como Xolcingo, Alchichica, Quecholac, Aljojuca, Tecuitlapa y Tlapanalá. Algunos de sus paisajes naturales han sido alterados por el hombre, por ser un territorio agradable para habitar, como en el caso de los valles.  La fauna silvestre que aún existe pero está en peligro de extinción, la componen coyotes, gatos montes, tejones, zorrillos, ardillas, conejos, perros, mapaches, comadrejas; también hay reptiles como camaleones y víboras de cascabel."
    }, {
      id: 4,
      titulo: "Angelopolis",
      imagen: "assets/images/angelopolis/calpan.jpg",
      descripcion: "Situada en la parte central y poniente del estado, limita al norte con Tlaxcala, al oriente con la región Valle Serdán, al poniente con el estado de México y al sur con las regiones valle de Atlixco y Matamoros y Mixteca. Tiene una extensión 3322 km2. Es la región más poblada del estado con cerca de 3 milones de habitantes, de los cuales 6.4% viven en comunidades rurales y 93.6% en comunidades urbanas. Tiene 33 municipios.",
      clima: "Es templado con lluvias en verano en los valles y frío alrededor de las montañas. Atractivos Naturales. Tiene valles como el de la ciudad capital heroica Puebla de Zaragoza y montañas boscosas como las de la Sierra de Nevada y las de la Sierra de Tentzo, varias barrancas como la Trasquilla, El Salto y Chichipilco. Además de varios cerros aislados. Los ríos más importantes son el Atoyac y el Alseseca. Tiene algunas lagunas, jagüeyes y algunos arroyos intermitentes provenientes de las faldas de la Malinche, del Popocatépetl y del Iztaccihuatl; esta agua es almacenada en pozos que ayudan a la región a suministrarse el líquido en las épocas de sequía. Cuenta también con la presa manual Ávila Camacho, ubicada en Valsequillo, los escurrimientos que la surten llegan de 22 municipios de puebla y 48 de Tlaxcala, a su vez, la presa surte de agua para riego a zonas de Atlixco, Izúcar de Matamoros y Tecamachalco. El paisaje natural ha sido alterado por el hombre por ser una zona muy habitable, sobre todo en los valles. La fauna original se compone de aves como codornices y gavilanes, además de conejos, coyotes, tuzas, ardillas y liebres; insectos, peces de agua dulce, anfibios y murciélagos."
    }, {
      id: 5,
      titulo: "Valle Atlizco Matamoros",
      imagen: "assets/images/angelopolis/calpan.jpg",
      descripcion: "Esta región se ubica al suroeste del estado limita al norte con la región 4 Angelópolis  al oriente y sur con la región 6 Mixteca y al poniente con Morelos. Su extensión territorial es de 3074 km2.Es la sexta región mas poblada del estado con cerca de 40 mil habitantess, de los cuales 40.6% viven en comunidades rurales y 59.4% en comunidades urbanas. Está compuesta de 24 municipios. Con escasas formaciones montañosas como las de las estribaciones de la Sierra Nevada, y cerros como el Grande el Zacatoso Toltepec y Tapancale, Chicastlera y La Mesa, la región se forma fundamentalmente con valles como el de Atlixco y el de Izúcar de Matamoros ambos de la meseta poblana y caracterizados  por su topografía plana, en ellos se concentran la mayor parte de las localidades habitadas y las vías de comunicación más importantes.",
      clima: " va de templado subhúmedo a cálido subhúmedo con lluvias en verano, sobretodo en los valles y frio en las zonas montañosas. En algunos lugares de esta región llueve menos en verano que en la mayoría de los otros municipios, a este fenómeno se le llama sequía de verano."
    }, {
      id: 6,
      titulo: "Mixteca",
      imagen: "assets/images/mixteca/huitsil.jpg",
      descripcion: "Está en el suroeste del estado, limita con las regiones 4 Angelópolis, 3 Valle de Serdán y 5 valle de Atlixco y Matamoros al norte, con la región 7 Tehuacán y Sierra Negra al oriente, con Morelos y Guerrero al poniente y al sur con Guerrero y Oaxaca. Su geografía es muy accidentada. Es el puente natural entre las vastas zonas del Nudo Mixteco y la vertiente occidental del Altiplano Central tiene una extensión territorial 8849.6Km2., es la región menos poblada del estado con cerca de 250 mil habitantes, de los cuales 68.6%viven en comunidades rurales y 31.4% en comunidades urbanas. La forman 45 municipios.",
      clima: "Con variedad climática, sobresalen climas como el cálido seco, semi seco cálido con lluvias en verano y escasas a lo largo del año, semiárido subhúmedo con lluvias en verano y templado subhúmedo con lluvias en verano."
    }, {
      id: 7,
      titulo: "Región VII: Tehuacan y Sierra Negra",
      imagen: "assets/images/Tehuacan/tehuacan.jpg",
      descripcion: "Por su ubicación Extensión y configuración presenta una gran variedad de climas que van desde los templados en la sierra de Zapotitlán, hasta los templados de la Sierra de Zongolica, pasando por los cálidos del Valle de Tehuacán. clima templado subhúmedo con lluvias en verano; se ubica en el extremo poniente de la parte elevada de la Sierra de Zapotitlán. Clima seco semicálido con lluvias en verano y escasas a lo largo del año; se identifica en la parte sur del municipio, dentro del Valle de Tehuacán. Clima semiseco cálido lluvias en verano y escasas a lo largo del año; es el clima predominante en el área correspondiente al Valle de Tehuacán. Clima semiseco templado con lluvias en verano y escasas a lo largo del año; es el clima que se presenta entre las zonas orientales del Valle de Tehuacán, y las primeras estribaciones de la Sierra de Zongolica",
      clima: ""
    }
  ];

  // Informacion sobre las graficas

  public TodoGrafica: any[] = [
    {
      idT: 1,
      idG: 1,
      bChartLab: ["nivel 1", " nivel 2", "Anivel 3", "nivel 4", "nivel 5"],
      chartData: [
        { data: [6, 4, 8, 11, 6], label: 'Sequias' },
        { data: [5, 1, 17, 3, 8], label: 'rotas' },
        { data: [3, 6, 9, 12, 4], label: 'Golpe de calor' },
        { data: [7, 7, 7, 5, 8], label: 'Helada y Granizada' },
        { data: [11, 5, 9, 4, 6], label: 'Inundación' }
      ],
    }, {
      idT: 1,
      idG: 1,
      bChartLab: ["Amenaza 1", " Amenaza 2", "Amenaza 3", "Amenaza 4", "Amenaza 5"],
      chartData: [
        { data: [6, 4, 8, 11, 6], label: 'Sequias' },
        { data: [5, 1, 17, 3, 8], label: 'rotas' },
        { data: [3, 6, 9, 12, 4], label: 'Golpe de calor' },
        { data: [7, 7, 7, 5, 8], label: 'Helada y Granizada' },
        { data: [11, 5, 9, 4, 6], label: 'Inundación' }
      ],
    }
  ];

  // Graficas de Municipio  Tehuacán
  public GraficaTehuaca: any[] = [
    {
      idT: 2,
      idG: 1,
      bChartLab: ["nivel 1", " nivel 2", "Anivel 3", "nivel 4", "nivel 5"],
      chartData: [
        { data: [6, 4, 8, 11, 6], label: 'Sequias' },
        { data: [5, 1, 17, 3, 8], label: 'rotas' },
        { data: [3, 6, 9, 12, 4], label: 'Golpe de calor' },
        { data: [7, 7, 7, 5, 8], label: 'Helada y Granizada' },
        { data: [11, 5, 9, 4, 6], label: 'Inundación' }
      ],
      tipo:"bar"
    }, {
      idT: 2,
      idG: 1,
      bChartLab:  ['ene-82','feb-82','mar-82','abr-82','may-82','jun-82','jul-82','ago-82','sep-82','oct-82','nov-82','dic-82','ene-83','feb-83','mar-83','abr-83','may-83','jun-83','jul-83','ago-83','sep-83','oct-83','nov-83','dic-83' ],
      chartData: [
        { data: [0,18,23,11,54,110.5,13,3,5.4,28.8,15,2.5,2,32.5,6,4,6.5,114.9,109.6,11.4,20.2,0,25.6,5], label: 'Mensual' },
        { data: [8.2,7.5,7.7,20.3,63.6,109.2,71.6,70.8,77.4,37,9.3,2.5,8.2,7.5,7.7,20.3,63.6,109.2,71.6,70.8,77.4,37,9.3,2.5], label: 'Normal', yAxisID: 'y-axis-1' }
      ],
      tipo:"line"
    }
  ];

  public ChartData: ChartDataSets[] = [
    { data: [5, 1, 17, 3, 8], label: 'Lluvia' },
    { data: [6, 4, 8, 11, 6], label: 'Sequias' },
    { data: [11, 5, 9, 4, 6], label: 'Inundación' },
    { data: [7, 7, 7, 5, 8], label: 'Helada y Granizada' },
    { data: [3, 6, 9, 12, 4], label: 'Golpe de Calor' }
  ];

  public ChartData2: ChartDataSets[] = [
    { data: [6, 4, 8, 11, 6], label: 'Sequias' },
    { data: [5, 1, 17, 3, 8], label: 'Luvias' },
    { data: [3, 6, 9, 12, 4], label: 'Golpe de calor' },
    { data: [7, 7, 7, 5, 8], label: 'Helada y Granizada' },
    { data: [11, 5, 9, 4, 6], label: 'Inundación' }
  ];


  //Fin inforamcion de graficas

  idRegion!: number;
  uid!: string;
  convertido!: number;

  identificaRegion!: number;

  constructor() {
    console.log("Servicio listo para usar");
  }

  public getImagen() {
    return this.imagenes;
  }

  /**
   * 
   * @param idR Identificador de Region: number 
   * @param id  Identificador del municipio dentro de la region: number
   * @getOneMunicipio Funcion que devuelve la informacion de una region especifica
   */
  public getOneMunicipio(idR: number, id: number) {
    this.convertido = id;
    this.idRegion = idR;

    if (this.idRegion == 1) {
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
  }

  /**
   * getSierraNorte: devuele un arreglo con la informacion sobre los municipios que abarca
   */
  public getSierraNorte() {
    return this.SierraNorte;
  }

  public getSNOR() {
    return this.SNOR;
  }

  public getAng() {
    return this.Ang;
  }
  public getT() {
    return this.T;
  }

  public getMIX() {
    return this.MIX;
  }



  public getOneRegion(id: number) {
    this.identificaRegion = id;

    console.log("Id de region: " + id);
    if (this.identificaRegion == 1) {
      return this.Region[0];
    }
    if (this.identificaRegion == 2) {
      return this.Region[1];
    }
    if (this.identificaRegion == 4) {
      return this.Region[3];
    }
    if (this.identificaRegion == 6) {
      return this.Region[5];
    }
    if (this.identificaRegion == 7) {
      console.log("true");

      return this.Region[6];
    }

    return this.Region[0];
  }

  public getFilesPDD() {
    return this.FilePdd;
  }

  /**
   * getOneFile
   */
  public name() {

  }


  public getBarChart() {
    return this.ChartData;
  }
  public getBarChart1() {
    return this.ChartData2;
  }


  public getTodoChart() {
    return this.TodoGrafica;
  }

  public getGraficaTehuaca(){
    return this.GraficaTehuaca;
  }

}
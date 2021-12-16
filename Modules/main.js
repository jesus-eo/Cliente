


/* Prueba 1: Carga todos los elementos del módulo

import{DOSPI,areaCirculo,periCirculo} from './geometria.js';
document.getElementById('salida').innerHTML= `Área del circulo: ${areaCirculo(2)}`; */

/* Prueba 2: Carga todos los elementos del módulo y ponle un alias al conjunto */

/* import *  as geom  from "./geometria.js"; 
document.getElementById('salida').innerHTML= `Área del circulo: ${geom.areaCirculo(2)}`;  */

/* Prueba 3: Carga todos los elementos del módulo y ponle un alias a cada uno de ellos */

/* import { funcion1 } from "./geometria.js";
import { funcion2 } from "./geometria.js";
document.getElementById('salida').innerHTML= `Área del circulo: ${funcion1(2)}`; */


/* Prueba 4: Carga todo excepto la constante. Observa que sucede */
//Si exportamos la función areaCirculo y la constante no la exportamos la utiliza automaticamente
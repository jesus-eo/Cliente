

/* Prueba 1: Carga todos los elementos del módulo
export{DOSPI,areaCirculo,periCirculo}; */

/* Prueba 2: Carga todos los elementos del módulo y ponle un alias al conjunto
 */
/* export const DOSPI = 2*Math.PI;
//Si exportamos la función areaCirculo y la constante no la exportamos la utiliza automaticamente
export function areaCirculo(radio) {
    return Math.PI*radio*radio;
}

export function periCirculo(radio) {
    return DOSPI*radio;
} */


/* Prueba 3: Carga todos los elementos del módulo y ponle un alias a cada uno de ellos */

/* const DOSPI = 2*Math.PI;
//Si exportamos la función areaCirculo y la constante no la exportamos la utiliza automaticamente
 function areaCirculo(radio) {
    return Math.PI*radio*radio;
}
function periCirculo(radio) {
    return DOSPI*radio;
} 

export {areaCirculo as funcion1};
export {periCirculo as funcion2}; */



/* Prueba 4: Carga todo excepto la constante. Observa que sucede */
//Si exportamos la función areaCirculo y la constante no la exportamos la utiliza automaticamente

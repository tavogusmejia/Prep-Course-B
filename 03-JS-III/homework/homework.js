// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    var sumaValores=0;
    for(let x=1; x<=10; x++){
    sumaValores=sumaValores+x;
    }
return sumaValores;
}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  var valoresPares=[];

    for(let x=0; x<array.length; x++){
      if(array[x]%2===0){
        valoresPares.push(array[x]);
      }
    }
return valoresPares;
}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  //var valoresCuadrados=[];
  //var x=0;
  //while (x<array.length){
//valoresCuadrados.push(Math.pow(array[x],2));
  //  x++; 
//}return valoresCuadrados;
 var arrayAlCuadrado = array.map(function(valorElemento){return valorElemento ** 2;})
return arrayAlCuadrado;
  }
  
  


function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  var arraySumado = array.reduce(function(total,elemento){return total + elemento;})
  return arraySumado;
    }


function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  return num.toString().length;
}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };

// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  var nameArray = nombre.charAt(0).toUpperCase()+nombre.slice(1);;
  return nameArray
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  cb(n1, n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  var sumaNumeros=0;
  for(i=numeros.length-1; i>=0;i--){
    sumaNumeros=sumaNumeros+numeros[i];
    }
  cb(sumaNumeros);
  }


function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
 array.forEach(function(arrayValue){cb(arrayValue)})
  /*
  for (i=0;i<array.length;i++){
    cb(array[i]);
  }
  */
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  /*
  var newArray=[];
  for (i=0;i<array.length;i++){
   newArray[i]=cb(array[i]);
  }
  */
  var newArray=array.map(function(arrayValue){return cb(arrayValue)})
  return newArray;

}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  var newArray=[];
  /*
  var j=0;
  for (i=0;i<array.length;i++){
    if(array[i].charAt(0)==='a'){
    newArray[j]=array[i];
    j++;
    }
  }
  */
 for(var arrayValue of array){
  if(arrayValue[0] === 'a'){
    newArray.push(arrayValue)
  }
 }
  return newArray; 
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
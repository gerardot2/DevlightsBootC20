/**
 * Use una asignación de desestructuración con el parámetro rest para emular el comportamiento 
 * de Array.prototype.slice(). removeFirstTwo()debe devolver un subarreglo del arreglo original listcon 
 * los primeros dos elementos omitidos.
 */

 function removeFirstTwo(list) {
  const [a, b, ...shorterList] = list; 
    return shorterList;
  }
  
  const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sourceWithoutFirstTwo = removeFirstTwo(source);
/**
 * Modifique la función sumusando el parámetro rest de tal manera que la función sumpueda 
 * tomar cualquier número de argumentos y devolver su suma.
*/

const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
  }
  
/**
 * Use un método iterador (cualquier tipo de bucle) para obtener el resultado deseado (que se muestra a continuación).
 * [
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
   ]
 */

   const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
  const failureItems = arr.map(item => `<li class="text-warning">${item}</li>`); 
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);
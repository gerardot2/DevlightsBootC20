/**
 * Agregue el then método a su promesa. Úselo resultcomo parámetro de su función de 
 * devolución de llamada e inicie sesión resulten la consola.
 */

 const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer = true;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  
  makeServerRequest.then(result => console.log(result));
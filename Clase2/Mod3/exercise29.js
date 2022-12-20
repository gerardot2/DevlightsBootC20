/**
 * Agregue el catchmétodo a su promesa. Úselo errorcomo parámetro de su función de devolución de 
 * llamada e inicie sesión erroren la consola.
 */

 const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer = false;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  
  makeServerRequest
  .then(result => {
    console.log(result);
  })
  .catch(error => console.log(error));
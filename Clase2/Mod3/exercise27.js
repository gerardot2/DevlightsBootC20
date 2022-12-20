/**
 * Haga que la promesa maneje el éxito y el fracaso. 
 * Si responseFromServeres true, llame al resolvemétodo para completar con éxito la promesa. 
 * Pase resolveuna cadena con el valor We got the data. 
 * Si responseFromServeres false, use el rejectmétodo en su lugar y pásele la cadena: Data not received.
 */

 const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer;
      
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
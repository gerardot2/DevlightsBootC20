/**
 * Use la classpalabra clave y escriba a constructorpara crear la Vegetableclase.
 * La clase Vegetable le permite crear un objeto vegetal con una propiedad name que se pasa al constructor.
 */

class Vegetable{
    constructor(name){
      this.name = name;
    }
  }
  
  const carrot = new Vegetable('carrot');
  console.log(carrot.name); 
/**
 * Refactorice la función setGeardentro del objeto bicyclepara usar la sintaxis abreviada 
 * descrita anteriormente.
 */

const bicycle = {
    gear: 2,
    setGear(newGear) {
      this.gear = newGear;
    }
  };
  bicycle.setGear(3);
  console.log(bicycle.gear);
/**
 * Utilice la classpalabra clave para crear una Thermostatclase. 
 * El constructoracepta una temperatura Fahrenheit.
 * En la clase, cree un getterpara obtener la temperatura en Celsius y un setterpara 
 * establecer la temperatura en Celsius.
 * Recuerda que C = 5/9 * (F - 32)y F = C * 9.0 / 5 + 32,
 * donde F es el valor de la temperatura en Fahrenheit,
 * y C es el valor de la misma temperatura en Celsius.
 */

class Thermostat{
    constructor(fahrenheit) {
      this.fahrenheit = fahrenheit;
    }
    
    get temperature() {
      return (5 / 9) * (this.fahrenheit - 32);
    }
    
    set temperature(celsius) {
      this.fahrenheit = (celsius * 9.0) / 5 + 32;
    }
  }
  
  const thermos = new Thermostat(76); 
  let temp = thermos.temperature; 
  thermos.temperature = 26;
  temp = thermos.temperature;
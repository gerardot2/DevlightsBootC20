/**
 * Reemplace las dos asignaciones con una asignación de desestructuración equivalente. 
 * Todavía debe asignar las variables highTodayy highTomorrowlos valores de todayy tomorrowdesde 
 * el HIGH_TEMPERATURESobjeto.
 */

 const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES
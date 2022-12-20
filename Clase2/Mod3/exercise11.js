/**
 * Reemplace las dos asignaciones con una asignación de desestructuración equivalente. 
 * Todavía debe asignar las variables lowTodayy highToday los valores de today.lowy today.high desde 
 * el LOCAL_FORECASTobjeto.
 */

 const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  const {today: {low: lowToday, high: highToday}} = LOCAL_FORECAST;
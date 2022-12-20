const squareList = arr => {
    // Only change code below this line
  
    return arr.filter(n => n > 0 && Number.isInteger(n))
    .map(c => c**2);
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);
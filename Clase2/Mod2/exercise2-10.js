function quickCheck(arr, elem) {
    // Only change code below this line
    let res = arr.indexOf(elem);
    if (res >= 0){
      return true;
    }else {return false}
    // Only change code above this line
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
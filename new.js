function canPay(changeArray, totalDue) {
    if (arr.length == 0) {
      return "Invalid Input,Empty array";
    } else {
      let myMoney = 0;
      for (let i = 0; i < arr.length; i++) {
        myMoney += changeArray[i];
      }
      if (myMoney >= totalDue) {
        return "true";
      }
      return "false";
    }
  }
  var arr = [5,2,5];
  var n = 10;
  console.log(canPay(arr, n));
  
  
  
  
  
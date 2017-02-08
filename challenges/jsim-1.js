
// Sample Test Cases
// Input:19
// Output:true
//
// Input:110
// Output:false

function PrimeTime(num) {

var result;
  if(num === 1 || num === 2 || num === 3){
    result = true;
  } else {
    for(var i = 2; i < (num-1); i++){
      if(num % i === 0){
        result = false;
        return result;
      } else {
        result = true;
        return result;
      }
    }
  }
  return result;
}

// keep this function call here
var result = PrimeTime(110);
console.log(result);

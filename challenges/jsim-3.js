'use strict';
// Sample Test Cases
// Input:9
// Output:23
//
// Input:100
// Output:541

function PrimeMover(num) {

  var prArr = [];
  var i = 1;

  while(prArr.length !== num){

     if(isPrime(i)){
        prArr.push(i);
     }
      i++;
  }

  // algorithm to find prime numbers
  function isPrime(value) { // 1 doesnt count
      for(var i = 2; i < value; i++) {
          if(value % i === 0) {
              return false;
          }
      }
      return value > 1;
  }
  // return the final prime
  return prArr[prArr.length-1];
}

// keep this function call here
var result = PrimeMover(9);
console.log(result);

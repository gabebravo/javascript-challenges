// Sample Test Cases
// Input:"Noel - sees Leon"
// Output:"true"
//
// Input:"A war at Tarawa!"
// Output:"true"

let test = "Anne, I vote more cars race Rome-to-Vienna"

function PalindromeTwo(str) {

  let regex = /[^a-z0-9]/gi;
  let newstr = str.replace(regex,'').toLowerCase().split('');

  let arrSplit = 0;
  let arrFirstHalf = [];
  let arrSecondHalf = [];

  if (newstr.length % 2 === 0 ) {
    arrSplit += newstr.length / 2;
    arrFirstHalf = newstr.slice(0, arrSplit);
    arrSecondHalf = newstr.slice(arrSplit, newstr.length).reverse();
    if(arrFirstHalf.length === arrSecondHalf.length){
      return doStrArrsMatch(arrFirstHalf, arrSecondHalf);
    }
  } else {
    arrSplit += Math.ceil(newstr.length / 2);
    arrFirstHalf = newstr.slice(0, arrSplit);
    arrSecondHalf = newstr.slice(arrSplit-1, newstr.length).reverse();
    if(arrFirstHalf.length === arrSecondHalf.length){
      return doStrArrsMatch(arrFirstHalf, arrSecondHalf);
    }
  }

  function doStrArrsMatch(first, second){
    for(let i = 0; i < first.length; i++){
      if(first[i] !== second[i]){
        return false;
      }
    }
    return true
  }

}

// keep this function call here
let result = PalindromeTwo(test);
console.log(result);

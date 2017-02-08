'use strict';
// Sample Test Cases
// Input:"aabbcde"
// Output:"2a2b1c1d1e"
//
// Input:"wwwbbbw"
// Output:"3w3b1w"

function RunLength(str) {
  strarr = str.split("");
  resarr = [];  //a place to put my results as they are determined;
  arrlen = strarr.length;
  count = 1;

  for (var i = 0; i <strarr.length; i++) {

    if (strarr[i] == strarr[i+1]) {
        count ++; // count gets incrmented with each repeat
    }
    else { // when no repeat, push the value and reset the counter
        resarr.push(count + strarr[i]);
        count = 1;
    }
  }

  return resarr.join("");

}

var result = RunLength("aabbcde");
console.log(result);

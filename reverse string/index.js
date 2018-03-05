//solution 1

function reverse(str) {
  return str.split("").reverse().join("");
}

//solution 2

function reverse(str){
  return str.split("").reduce((rev, char)=> char + rev, '') 
}

//solution 3 

function reverse(str){
  let reversed = "";
  for(let char of str){
    reversed = char + reversed;
  }
  return reversed
}

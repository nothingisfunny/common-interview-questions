
//solution 1
function palindrome(str) {
  return str.split("").reverse().join("") === str  
}

//solution 2 (worse)
function palindrome(str){
  return str.split("")
    .every((char, index)=> char === str[str.length - index - 1])
}

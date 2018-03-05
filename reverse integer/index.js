
//solution 1
function reverseInt(n) {
  let rev = parseInt(n.toString().split('').reverse().join(''))
  return rev * Math.sign(n)
}

//solution 2
function reverseInt(n){
  return Math.sign(n) === -1 ? -rev : rev
}
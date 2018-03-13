// function steps(n) {
  
//   for (let i = 0; i < n; i++){
//     var string = ''
//     for (let j = i+1; j>0; j--){
//       string += '#'
//     }
//     for (let j = n-i; j>1; j--){
//       string += ' '
//     }

//     console.log(string)
//   }
// }

//better solution 

function steps(n){
  for (let row = 1; row < n + 1; row++){
    let string = ''
    for (let col = 1; col < n + 1; col++){
      if(col <= row){
        string += '#'
      }else{
        string+= ' '
      }
    }
    console.log(string)
  }
}
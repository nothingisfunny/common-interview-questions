function steps(n) {
  
  for (let i = 0; i < n; i++){
    var string = ''
    for (let j = i+1; j>0; j--){
      string += '#'
    }
    for (let j = n-i; j>1; j--){
      string += ' '
    }

    console.log(string)
  }
}
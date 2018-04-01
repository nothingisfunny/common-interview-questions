function pyramid(n) {
  const midpoint = Math.floor((n*2 - 1)/2)
  for(let row = 0; row < n; row++){
    let level = '';
    for(let col = 0; col < n*2 - 1; col++){
      if(midpoint - row <= col && midpoint + row >= col){
        level += '#'
      }else{
        level += ' '
      }
    }
    console.log(level)
  }
}
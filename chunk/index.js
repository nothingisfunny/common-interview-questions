//solution 1 (splice)
function chunk(array, size) {
  let newArr = []
  while(array.length > 0){
    newArr.push(array.splice(0, size));
  }
  return newArr;
}


//solution 2 (slice)
function chunk(array, size) {
  let newArr = []
  let index = 0;
  while(index < array.length){
    newArr.push(array.slice(index, index+size));
    index += size;
  }
  return newArr;
}
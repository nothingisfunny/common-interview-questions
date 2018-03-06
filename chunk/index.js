function chunk(array, size) {
  let newArr = []
  while(array.length > 0){
    newArr.push(array.splice(0, size));
  }
  return newArr;
}
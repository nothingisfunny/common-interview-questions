function maxChar(str) {
  let list = {}
  for(let char of str){
    list[char] ? list[char] ++ : list[char] = 1 
    // list[char] = list[char] + 1 || 1
  }
  let maxChar = ''
  let max = 0
  for(let key in list){
    if(list[key] > max){
      maxChar = key
      max = list[key] 
    }
  }
  return maxChar;
}

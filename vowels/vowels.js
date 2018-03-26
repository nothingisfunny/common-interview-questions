function vowels(str) {
  const arr = ['a', 'e', 'i', 'o', 'u']
  let num = 0

  for(let char of str.toLowerCase()){
    if(arr.includes(char)){
      num++
    }
  }
  return num
}
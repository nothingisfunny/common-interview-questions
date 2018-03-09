// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let a = stringA.replace(/[^\w]/g, "")
  let b = stringB.replace(/[^\w]/g, "")
  let aMap = buildCharMap(stringA)
  let bMap = buildCharMap(stringB)
  
  if(Object.keys(aMap).length !== Object.keys(bMap).length){
    return false
  }else{
     for (let key in aMap){
       if(bMap[key] !== aMap[key]){
        return false
       }
    }
  }
  return true
}

function buildCharMap(string){
  let charMap = {};
  for (let char of string){
    charMap[char] = charMap[char] + 1 || 1 
  }
  return charMap;
}

module.exports = anagrams;
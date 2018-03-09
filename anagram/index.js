// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


//solution 1 (character map)
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

//solution 2 (sort)

function anagrams(stringA, stringB){
  return cleanString(stringA) === cleanString(stringB)
}

function cleanString(string){
  return string.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("")
}

module.exports = anagrams;
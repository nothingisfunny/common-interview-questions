//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  return str.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ")
}


function capitalize(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++){
    if (str[i - 1] === ' '){
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
}
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  return str.split(" ").map(word => word[0].toUpperCase() + word.slice(1, word.length)).join(" ")
}

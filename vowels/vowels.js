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

//Regex solution 
function vowels(str){
  let matches = str.match(/[aeiou]/gi)
  return matches ? matches.length : 0
}

def rot13(secret_messages)
  alph = Array('a'..'z')
  return secret_messages.collect do |message|
      mes = message.downcase.split("").collect do |let|
          if let != " " || let.scan(/\w/) != []
              index = alph.find_index(let)
              if index < alph.length
                  alph[13 - (alph.length - index)]
              else
                  alph[index + 13]
              end
          else
              let
          end
      end
       binding.pry
      mes.join("").capitalize
  end
end
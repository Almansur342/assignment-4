function  CelsiusToFahrenheit(celsius){
   const convert = (celsius * 1.8) + 32;
   return convert;
}
// const result = CelsiusToFahrenheit(3);
// console.log(result);



var myArray = [1, 2, 3, 1, 4, 5,5, 5, 5 , 1, 6];
const output = [];
const checking = 5;
for(const number of myArray){
  if(number == checking){
    output.push(number);
  }
}
// console.log(output.length);
function count(word){
  let vowel = "aeiou";
  let result = [];
  for(const char of word){
    if(vowel.includes(char)){
      result.push(char);
    }
  }
  return result;
}

const sentence = count('my name is abdullah al mansur aaaa');
console.log(sentence.length);
 


// let random = (Math.random() * 10) + 11; 
// random = Math.round(random);
// if(random >= 10 && random <= 20){
//   console.log(random);
// } else{
//   console.log('jsd')
// }
// function longestWord(string) {
//   var str = string.split(" ");
//   var longest = 0;
//   var word = null;
//   for (var i = 0; i < str.length; i++) {
//       if (longest < str[i].length) {
//           longest = str[i].length;
//           word = str[i];
//       }
//   }
//   return word;
// }
// const longWord = longestWord("My name is Mansur labu");
// console.log(longWord);


function getLongest(string){
 const splitWord = string.split(" ")
 let longest = 0;
 let word = ""
 for(let i = 0; i < splitWord.length; i++){
  if(longest < splitWord[i].length){
    longest = splitWord[i].length;
    word = splitWord[i];
  }
 }
 return word;
}

const long = getLongest("Hello there i am lalalal");
// console.log(long);
let a = 'mansur';
let b = a.toUpperCase();
// console.log(b)


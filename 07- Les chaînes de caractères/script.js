/////////// Méthodes asscociées aux chaines de caractères ///////////

let str = "Hello ";
let str2 = "World";
console.log(str[0]); // renvoi le caractère à l'index 0 
console.log(str.indexOf("o")); // renvoi l'index du premier caractère trouvé
console.log(str.includes("3")); // renvoi true si la chaine contient le caractère
console.log(str.length);
console.log(str.replace("World", "Mars")); // remplace le premier paramètre par le second

console.log(str.slice(0, 5)); // renvoi la chaine de caractère entre les index 0 et 5

console.log(str.concat(',', str2)); // concatène les deux chaines de caractères

let phrase = "Bonjour tout le monde";
let strToArr = phrase.split(" "); // renvoi un tableau de chaines de caractères
let result = strToArr.sort().reverse();
let newArr = result.join(" "); // renvoi une chaine de caractères
console.log(result);



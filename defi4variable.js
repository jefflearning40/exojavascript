
const phrase = "hello hello hello hello";
const mot = "l";
const regex = new RegExp(mot, 'g');
const occurrences = phrase.match(regex);
const nombreOccurrences = occurrences ? occurrences.length : 0;
console.log(nombreOccurrences);

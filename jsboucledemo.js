/*let str = prompt("Mot :");
for (let i = 0; i < str.length; i++) {
	console.log('Itération numéro:', i);
	console.log(str.charAt(i));
}*/
let j=0;
while(j<10){
    console.log('Itération numéro:', j);
	    j +=1;
}
let k = 0;
do {
  console.log('Itération numéro:', k);
  k++;
} while (k < 5);
let fruits = ['Pomme', 'Banane', 'Orange'];
for (let fruit of fruits) {
	console.log('Fruit:', fruit);
}
let personne = {
	nom: 'Jean',
	age: 30,
	ville: 'Paris',
};

for (let cle in personne) {
	console.log(cle + ':', personne[cle]);
}
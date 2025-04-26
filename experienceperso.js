let mot=prompt ("mot :");
console.log(mot);
mot=mot.toUpperCase();
console.log(mot);
longMot1=mot.length;
console.log(longMot1);
mot=mot.replace(/\s+/g, '');
console.log(mot);
longMot2=mot.length;
console.log(longMot2);
let space=longMot1-longMot2;
console.log("nombre d'espace:"+space);
let tabmot1=mot.split();
console.log(tabmot1);
let tabmot2 = mot.split(''); 
console.log(tabmot2);
longtabmot2=tabmot2.lenght;
let mot3="";
let R="";
let nc=0;
let nv=0;
for(mot3 of tabmot2){
  if (mot3==="A"||mot3==="E"||mot3==="I"||mot3==="O"||mot3==="U"||mot3==="Y"){
    nv++;
  }else{
    nc++;
  }
}
console.log(`Dans ce mot, il y a ${nv} voyelles et ${nc} consonnes`);
let code=0;
let letter=[];
for(mot3 of tabmot2){
switch(mot3){
    case "A":
    case "J":
    case "S":    
        code=1;
        break;
    case "B":
    case "K":
    case "T":    
        code=2;
        break;
    case "C":
    case "L":
    case "U":    
        code=3;
        break;
    case "D":
    case "M":
    case "V":    
        code=4;
        break;
    case "E":
    case "N":
    case "W":    
        code=5;
        break;
    case "F":
    case "O":
    case "X":    
        code=6;
        break;
    case "G":
    case "P":
    case "Y":    
        code=7;
        break;
    case "H":
    case "Q":
    case "Z":    
        code=8;
        break;
    case "I":
    case "R":
       code=9;
        break;
}
    letter.push(code);
}
console.log(letter);
//2nd phase de codage:
let code2=[];
let alpha="";
let number=0;
let codefinal="";
for (number of letter){
    switch(number){
        case 1:
            alpha="╭";
            break;
        case 2:
            alpha="╯";
            break;
        case 3:
            alpha="╰";
            break;
        case 4:
            alpha="╮";
            break;
        case 5:
            alpha="⎝";
            break;
        case 6:
            alpha="⎠";
            break;
        case 7:
            alpha="⎛";
            break;
        case 8:
            alpha="⎞";
            break;
        case 9:
            alpha="⎜";
            break;
    }
    code2.push(alpha);
    codefinal=codefinal+alpha;
}
console.log(code2);
console.log("code final="+codefinal);

// caracteres utilisés

// ∩ ∪ ︵ ︶ 〜 ╭ ╯ ╰ ╮⎝ ⎠ ⎛ ⎜ ⎞


//╭╯╰╮⎝⎠⎛⎞⎜╭╯╰╮⎝⎠⎛⎞⎜╭╯╰╮⎝⎠⎛⎞
//╰--╯       ╰--╯       ╰--╯

 // Une fois codée, on ne peux plus revenir en arriere.Mon prochain programme de code pourra le faire  
  






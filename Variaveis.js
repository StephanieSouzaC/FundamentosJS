//Tipo de variáveis

//var - o js lê todo o programa para encontrar as var primeiro. Isso pode ser um problema, pois pode haver o mesmo nome de variável em duas partes diferentes.

var alturaVar = 5;
var comprimentoVar = 7;
var area = alturaVar * comprimentoVar;

console.log(area);


// let - que nos permite trocar os valores dela, porém, nós sempre temos que declarar ela antes de ser utilizada

let alturaLet = 5;
let comprimentoLet = 7;
let areaLet;
let forma = 'retangulo';

if (forma === 'retangulo'){
    areaLet =  alturaLet * comprimentoLet;
} else {
    areaLet = (alturaLet * comprimentoLet)/2
}

console.log(areaLet);

//const - uma vez inserida no programa, não pode ser alterada. Ao ser criada ela precisa receber um valor;

const alturaConst = 5;
const comprimentoConst = 7;
const formaConst = 't';
let areaConst;

if (formaConst === 'retangulo'){
    areaConst =  alturaConst * comprimentoConst;
} else {
    areaConst = (alturaConst * comprimentoConst)/2
}

console.log(areaConst);
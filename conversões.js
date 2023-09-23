// tipo de dado 
// booleanos

//conversão implícita
const num = 25;
const numString = "25";

console.log(num == numString);
console.log(num + numString); // erro - concatenação

//conversão explícita
// função Number()
// função String()
console.log(num + Number(numString));


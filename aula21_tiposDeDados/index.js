/*
Primitivos (imutáveis) - string,number, booelan, undefined
null (bigint, symbol) - Valor copiados


Refrência (mutável) - array, Object, function - Passados por referência

let a = [1, 2, 3];
let b = a;
let c = b;
console.log(a, b, c);

a.push('Luiz ');
console.log(a, b, c)

b.pop();
console.log(a, b, c);
*/

const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

const b = {...a};

a.nome = 'Matheus';

console.log(a);
console.log(b);
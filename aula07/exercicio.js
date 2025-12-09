/* 
Luiz Otávio tem 30 anos , pessa 84kg
tem 1.8 de altura e seu IMC é de 25.92
*/

const nome = 'Luiz Otavio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmCm = 1.80;
let imc; // peso / (altura * altura)
let anoNascimento;

imc = peso / (alturaEmCm * alturaEmCm);
anoNascimento = 2025 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos,', 'com o peso de', peso,'kg,',
    `tem ${alturaEmCm} de altura e seu IMC é de ${imc}`);


function criaPessoa (nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}

const pessoa1 = criaPessoa('Matheus', 'Magno', 27);
const pessoa2 = criaPessoa('Gabrielly', 'Bersch', 26);
const pessoa3 = criaPessoa('Sandro', 'Bersch', 2);

console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome);


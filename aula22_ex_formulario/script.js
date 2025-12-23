function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado')

    const pessoas = [];
    //form.onsubmit = function (evento) {
    //    evento.preventDefault();
    //    alert();   
    //    console.log('Foi enviado!');
    //};

    function recebeEventoForm (evento) {
        evento.preventDefault(); // linha para prevenir evento

        const nome = form.querySelector('.nome'); // .nome serve para buscar classe
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });
        
        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} tem o peso ${peso.value} e ${altura.value} de altura!</p>`
        
    }


    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();
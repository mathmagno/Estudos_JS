const numero = Number(prompt("Qual número?"));
const numeroTitulo = document.getElementById('numero-titulo');
const textoTitulo = document.getElementById('texto');

numeroTitulo.innerHTML = numero;

textoTitulo.innerHTML = '';
textoTitulo.innerHTML += `<p><b>Seu número é ${numero}</b></p>`;
textoTitulo.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5}</p>`;
textoTitulo.innerHTML += `<p>${numero} é número inteiro: ${Number.isInteger(numero)}.</p>`;
textoTitulo.innerHTML += `<p>Arredondando para baixo: ${Math.floor(numero)}.</p>`;
textoTitulo.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}.</p>`;
textoTitulo.innerHTML += `<p>Com duas casa decimais: ${numero.toFixed(2)}.</p>`;

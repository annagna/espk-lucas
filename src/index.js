const fs = require('fs');
 //requirir um modulo do node

const caminhoArquivo = process.argv;
const link = caminhoArquivo[2]; //return in the second position

fs.readFile(link, 'utf-8', (erro, texto) => {
    verificaPalavrasDuplicadas(texto);
}); //uma leitura de arquivo

function verificaPalavrasDuplicadas(texto) {
    const listaPalavras = texto.split(' ');
    const resultado = {}; //guardar um obj pra ver a word e a quantidade que aparece

    listaPalavras.forEach(palavra => {
        resultado[palavra] = (resultado[palavra] || 0) +1
    }) //forEach = faz especie de looping
    console.log(resultado);
};
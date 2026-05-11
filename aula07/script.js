const produto = {
    nome: 'Mouser Gamer',
    preço: 89.90,
    categoria: 'Informática',
    //mais características aqui[chave: valor //chave: diz a caracteristica do produto, valor: é o valor da característica]
}

console.log(produto);

//destruturação de objetos (pegar somente um atributo do objeto)
console.log(produto.nome);

// ############################
//pode construir todo tipo de informação dentro de um objeto, como por exemplo, um array de nomes
const nomes = ['Anna', 'Carlos', 'Mariana']
              // 0        1          2
console.log(nomes)
console.log(nomes[1]) //acessar o primeiro nome do array

//##############################

const produtos = [
    {
        nome: 'Teclado Mecânico',
        preço: 199.90,
        categoria: 'Informática',
    },
        {
        nome: 'Cadeira Gamer',
        preço: 899.90,
        categoria: 'Móveis',
    },
        {
        nome: 'Monitor 24 polegadas',
        preço: 749.90,
        categoria: 'Informática',
    },
];
//foreach = laço de repetição (para cada)
produtos.forEach((produto //parametro da função / variavel local
) => {
    console.log(produto.nome); //acessar o nome de cada produto
});
produtos.forEach((produto //parametro da função / variavel local
) => {
    console.log((`${produto.nome} - R$ ${produto.preço}`)); //acessar o nome de cada produto e o preço dele
});

//##############################
/* 
    DOM - Modelo de Objetos em um Documento (html)
    O DOM uncona em da partes, primeiro 'captura' o nó e depois realize a ação nele
*/

const listaProdutos = document.getElementById('lista-produtos'); //captura o nó do html (pegar o id do html)
//const listaProdutos2 = document.getElementByTagName('div'); //outra forma de capturar o nó do html
//const listaProdutos3 = document.getElementByClassName('#lista-produtos'); //outra forma de capturar o nó do html (com o All antes do () pega tudo igual os outros)

//ação
produtos.forEach((produto) => {
    listaProdutos.innerHTML/*construir html dentro dele*/ += `
    <div class='card'>
        <h2> ${produto.nome}</h2>
        <p><strong>Preço: </strong>R$ ${produto.preço}</p>
        <p><strong>Categoria: </strong>${produto.categoria}</p>
        <hr>
    </div>`
});
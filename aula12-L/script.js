/*setTimeout(() => {
    console.log('Processo assíncrono')
}, 1500);*/

console.log('1 - Início do processo')
setTimeout(() => {
    console.log('2 - Meio do processo')
}, 0);
console.log('3 - Final do processo')

const btn = document.getElementById('botão');
const popup = document.getElementById('popup');

btn.addEventListener/*adiciona um evento*/('click', () => {
    popup.classList.add('popup-active'); /*adiciona uma classe pro popup*/

    setTimeout(() => {
        popup.classList.remove('popup-active')
    }, 2500);
});

// for(let letra of 'Olá'){
//     setTimeout(() => {
//         console.log(letra)        
// }, 1000);

// }
// for(let letra of 'mundo'){
//     setTimeout(() => {
//         console.log(letra)
//     }, 1000);
// }

// setInterval(() => {
//     console.log('Tic')
// }, 1000);
// let counter = 0
// const interval = setInterval(() => {
//     counter++;
//     console.log('Counter: ', counter);

//     if(counter >= 5){
//         clearInterval(interval)
//         console.log('O intervalo foi removido')
//     }
// }, 1000);
//setInterval - intervalo de repetição (que sem parar é infinita), parar = criar uma condição igual a interval

//promise = quando faz um consumo de api precisa ter um retorno (resolve ou rejected)

const eventoFuturo = (res) => {
    return new Promise((resolve, reject) => {
        // if(res === true){
        //     resolve('Promessa Resolvida')
        // }else{
        //     reject('Promessa Rejeitada')
        // }
        setTimeout(()=> {
            res ? resolve('Promessa resolvida') : reject('promessa rejeitada')
        }, 2000)
    })
}
// console.log(eventoFuturo()); /*observa o primeiro estagio da promise*/
// console.log(eventoFuturo(true));
// console.log(eventoFuturo(false));
eventoFuturo(true)
    .then((response) => {console.log(response)})
    .finally(() => {console.log('fim do processo')})

    eventoFuturo(false)
    .then((response) => { console.log(response) })
    .catch((error) => {console.log(error)})

//----
const BD = [
    { id: 1, nome: 'Produto 1', preco: 1500 },
    { id: 2, nome: 'Produto 2', preco: 2500 },
    { id: 3, nome: 'Produto 3', preco: 3500 }
]
const pedirProdutos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(BD)
        }, 5000)
    })
}
let produtos = [] // inicializamos com um array vazio// função que gera a visualização dos produtos
const renderProdutos = (arr) => {
    console.log(produtos)
}
// pedimos os dados e geramos a visualização de forma assíncrona
pedirProdutos()
    .then((res) => {
        produtos = res
        renderProdutos(produtos)
    })

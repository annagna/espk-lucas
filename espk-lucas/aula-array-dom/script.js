//acho que isso esta nos slides 7

const aluno = ['Ana', 'Carlos', 'João'];
console.log(`primeira posição: ${alunos[0]}`);

console.log(`A quantidade de itens na lista é ${alunos.length}`); //comprimento da lista (quanttos componentes ela tem)

//push - adiciona elemento na lista - inseri um novo item ao final da lista
alunos.push('Mariana');
console.log(`A lista atualizada com o .push() fica assim: ${alunos}`);

//inseri um novo item no inicio da lista
alunos.unshift('Lucas');
console.log(`A lista atualizada com .unshift() fica assim: ${alunos}`);

// remove o primeiro item
alunos.shift();
console.log(`A lista atualizada com .shift() fica assim: ${alunos}`);

//remove o ultimo item da lista
alunos.pop();
console.log(`A lista atualizada com .pop() fica assim: ${alunos}`);

//posição inicial e a quantidade de itens para ser deletado
alunos.splice(1, 1);
console.log(`A lista atualizada com .splice() fica assim: ${alunos}`);

//inicio na posição 1, não removo nada e adiciono 'Carlos' (para isso precisa colocar o zero no meio)
alunos.splice(1, 0, 'Carlos');
console.log(`A lista atualizada com .splice(1, 0, 'Carlos') fica assim: ${alunos}`);

//pega o valor do indice inicial e para no valor de inicio final, sem pegar o final
const primeiros = alunos.slice(0, 2);
alunos.slice()
console.log(`%ctenho uma lista chamada alunos: ${alunos}`, 
    'color: white; backgound:#007bff; padding:8px; border-radius:4px; fonte-size: 16px;');
console.log(`Usando o .slice(0,2) na lista alunos, tenho uma nova lista: ${primeiros}`);
//console.log('%cTexto', 'CSS aqui');

//
console.log(`Usando o .index('Carlos) verifico em qual posição está esse item : ${alunos.indexOf('Carlos')}`);

console.log(`Usando o .index('Carlos) verifico em qual posição está esse item : ${alunos.indexOf('Mariana')}`);

const posição = alunos.indexOf('Pedro');

if (posição === -1) {
    console.log('Aluno não encontrado!')
}
else{
    console.log(`Alunos na posição: ${posicao}`);
}g

const exemploAluno = {
    nome: 'Ana',
    idade: '18',
    curso: 'Engenharia'
};

console.log(exemploAluno.nome) // destruturação com objeto fica mais facil do que fazer numa lista

class Aluno {
    constructor(nome, idade, curso){
        this.nome = nome; /*relacionando a este */
        history.idade = idade;
        this.curso = curso;
    }
};

//adicionando + aluno
const aluno1 = new Aluno('Lucas', 22, 'Geografia'); /*precisa colocar isso se usar o construtor, para que já tenha os elementos que eu quero*/ 
console.log(aluno1);
console.log(`${aluno1} pegando somente o nome: ${aluno1.nome}`);

const alunos  = [
    new Aluno('Ana', 17, 'Desv. Web'),
    new Aluno('Carlos', 18, 'JavaScript'),
    new Aluno('Mariana', 19, 'Html e Css'),
];

const inputNome= document.querySelector('#nome');
const inputIdade= document.querySelector('#idaqde');
const inputCurso= document.querySelector('#curso');
const inputBusca= document.querySelector('#busca');

const listaAlunos =  document.querySelector('#listaAlunos');
const total= document.querySelector('#total');
const mensagem= document.querySelector('#mensagem');

const btnAdicionarFinal= document.querySelector('#btnAdicionarFinal');
const btnAdicionarInicio = document.querySelector('#btnAdicionarInicio');
const btnRemovePrimeiro= document.querySelector('#btnRemovePrimeiro');
const btnRemoveUltimo= document.querySelector('#btnRemoveUltimo');
const btnBuscar= document.querySelector('#btnBuscar');
const btnRemoveNome= document.querySelector('#btnRemoveNome');
const btnMostrarParte= document.querySelector('#btnMostrarParte');



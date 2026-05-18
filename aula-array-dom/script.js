//acho que isso esta nos slides 7

const alunos = ['Ana', 'Carlos', 'João'];
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
}
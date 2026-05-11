const alunos = [
    {
        nome: 'Ana',
        idade: 20,
        curso: 'Engenharia de Software',
        nota: 8.5
    },
        {
        nome: 'Carlos',
        idade: 22,
        curso: 'Sistema de Informação',
        nota: 7.8
    },
        {
        nome: 'Mariana',
        idade: 19,
        curso: 'Análise e Desenvolvimento de Sistemas',
        nota: 9.2
    },
        {
        nome: 'João',
        idade: 21,
        curso: 'Ciência da Computação',
        nota: 5.9
    }
];

const listaAlunos = document.querySelector('#lista-alunos');

alunos.forEach((aluno) => {
    const situacao = aluno.nota >= 7 ? /*? = se for verdadeiro */ 'Aprovado' : /*se não */ 'Revisar Conteúdo';
    listaAlunos.innerHTML += `
    <div class='card'>
        <h2> ${aluno.nome}</h2>
        <p><strong>Idade: </strong>${aluno.idade} anos</p>
        <p><strong>Curso: </strong>${aluno.curso}</p>
        <p><strong>Nota: </strong>${aluno.nota}</p>
        <p><strong>Situação: </strong>${situacao}</p>
    </div>`;
});

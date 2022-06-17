let usuario = {
    nome: 'Nathália Elen',
    idade: 19,
    sexo: 'Feminino',
    altura: 1.66,
    profissao: 'Desenvolvedora front-end',
    hobbies: ['Sair com amigos e família' , 'Assistir séries e filmes', 'Escutar música', 'Comer', 'Programar', 'Ler livros de diversos gêneros!']
};

console.log(usuario.nome.toUpperCase());
console.log(usuario.idade);
console.log(usuario.sexo.length);
console.log(usuario.altura.toFixed(2));
console.log(usuario.profissao);
console.log(usuario.hobbies);

//usuario.competencias = linguagens: ['HTML, 'CSS', 'JAVASCRIPT' ];

let saudacao = {
    digaOi: function() {
        return console.log('Oi!');
    }
}
console.log(saudacao.digaOi());
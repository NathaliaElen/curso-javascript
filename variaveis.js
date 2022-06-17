let nome = 'Nathália' //string
let idade = 19 //number
let peso = 75.5 //number

console.log(`Meu nome é ${nome}, tenho ${idade} anos e peso ${peso}kg!`);

//booleano
let faculdade = true
if (faculdade == true) {
    console.log('Eu faço faculdade de Sistemas para Internet!');
} else {
   console.log('Eu não faço faculdade!'); 
}

//undefined
let a
console.log('O valor de a é: ' + a);
let input;
if (input === undefined) {
    console.log('As variáveis undefined não possuem valor atribuído a elas!');
} else {
    console.log('Essa não é uma variável undefined!');
}

//NaN
let c
c + 2
console.log('O valor de c é ' + c);

//null
let n = null
console.log(n * 32);

let corFavorita = null
if (corFavorita === null) {
    console.log('Minha cor favorita é azul!');
} else {
   console.log('Essa não é minha cor favorita!'); 
}

/*ReferenceError
console.log('O valor de b é ' + b);
*/

//objeto, tem propriedades que é um valor fixo e método que estão dentro de uma function.
let pessoa = {
    firstName: 'Rafael', //chave valor
    lastName: 'Silva',
    age: 30,
    notaPortugues: 9,
    notaMatematica: 7,
    aprovacao: function() {
        console.log('Ele foi aprovado!');
    }
};
console.log(pessoa);
console.log(pessoa.aprovacao());

let carro = {
    marca: 'VW',
    preco: 40000,
    andar: function() {
        return console.log('Andou');
    }
}
console.log(carro);
console.log(carro.andar());


//array
/*let frutas = [maçã, banana, uva, morango];
console.log(frutas[0]);
console.log(frutas.length);
*/


/*
O que é uma variável?
Guarda um dado na memória. Pode variar o seu conteúdo durante a execução ou não.

Declarações
Existem três tipos de declarações em JavaScript:
var: Declara uma variável, opcionalmente, inicializando-a com um valor.
let: Declara uma variável local de escopo do bloco, opcionalmente, inicializando-a com um valor.
const: Declara uma constante de escopo de bloco, apenas de leitura.

identificadores de variáveis
Usar o camelCase.
Um identificador JavaScript deve começar com uma letra, underline (_), ou cifrão ($); os caracteres subsequentes podem também ser números (0-9). Devido JavaScript ser case-sensitive, letras incluem caracteres de "A" a "Z" (maiúsculos) e caracteres de "a" a "z" (minúsculos).
Alguns exemplos de nomes legais são Numeros_visitas, temp99, e _nome.

Obs: o uso do ponto e vírgula no final das declrações é facultativo.

Classificando variáveis
Tipos de dados primitivos por valor:
String: 'Nathália'
Number: 19, 75.5
booleano: true or false
Undefined: Uma variável declarada usando a declaração var ou let sem especificar o valor inicial tem o valor  undefined, contextos booleanos é false. O valor undefined converte-se para NaN quando usado no contexto numérico, contextos booleanos é false.
Null: o valor nulo se comporta como 0 em contextos numéricos e como falso em contextos booleanos. Usado para redefinir um valor.
Symbol (novo em ECMAScript 6). Um tipo de dado cuja as instâncias são únicas e imutáveis.

tipo de dados primitivos por referência
Object: Objetos são como uma espécie de "super variáveis" que armazenam uma "coleção de valores" referenciados por nome, e que podem ser recuperados para serem utilizados em diversas outras partes de um programa. Em JavaScript praticamente qualquer tipo de dado é um objeto. Sempre vai está dentro de chaves {};
Array: conjunto de dados do mesmo tipo que pode ser acessado por um indíce. O indice é a posição exata onde se encontra a informação.

Uma tentativa de acessar uma variável não declarada resultará no lançamento de uma exceção ReferenceError:

Tipagem dinâmica
Não se faz necessário declarar o tipo da variável, pois o javascript já descobre em tempo de execução.
para testar basta usar o comando: typeof

Template string

Como rodar Javascript dentro do VS Code:
instalar o node no site: nodejs.org
instalar a extensão code runner
atalho para executar: ctrl+alt+n
*/
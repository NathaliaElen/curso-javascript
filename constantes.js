/*
O que é uma constante?
Uma constante não pode alterar seu valor por meio de uma atribuição ou ser declarada novamente enquanto o script está em execução. Deve ser inicializada com um valor.
Você pode criar uma constante apenas de leitura por meio da palavra-chave const.
Você não pode declarar uma constante com o mesmo nome de uma função ou variável que estão no mesmo escopo.
*/

const PI = 3.14
console.log(PI);

/*Isto irá causar um  erro
function f() {};
const f = 5;
*/

/*Isto também irá causar um erro.
function f() {
  const g = 5;
  var g;
*/
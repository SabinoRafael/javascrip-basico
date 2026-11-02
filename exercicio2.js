// exercicio2.js

import { produtos } from './produto.js';

console.log('Total de produtos:' , produtos.length);


const loja = 'TechAngola' ;
let carrinhoTotal = 0;
carrinhoTotal = carrinhoTotal + 15000;
console.log(loja, carrinhoTotal);

console.log(typeof 'olá' , typeof 15000, typeof true, typeof[]);
console.log( 5 === '5'); 


//loja = 'outra ' aparece o erro: 
//TypeError: Assignment to constant variable.
//Porque é bom que o Node nos avise?
//Porque impede alterações acidentais em dados que devem ser fixos (const),
//  interrompendo logo o programa na linha exata do erro e evitando bugs silenciosos mais à frente no código

//PASSO 5. Função tradicional com valor por defeito
function calcularIVA(preco, taxa = 0.14) {
    return preco * taxa;
}
console.log(calcularIVA(10000));
console.log (calcularIVA(10000, 0.07));

//Passo 6. Exercício 1: formatarPreco(valor)

function formatarPreco(valor) {
    return `${valor.toLocaleString('pt-PT')} kz` ;
}
console.log(formatarPreco (15000));
console.log(formatarPreco(180000));

//PASSO 7. Reescrever como arrow function
//const calcularIVA = (preco,taxa = 0,14) => preco * taxa;
//const calcularPreco = (valor) => `$ {valor.toLocaleString ('pt-PT')} kz`;
    const saudacao = nome => `Olá, ${nome}!`;
    console.log (saudacao('Ana'));

    //FASE D: ARRAYS
    //PASSO #8. Exercício 2: map

    const descricoes = produtos.map(p => `${p.nome} - ${formatarPreco(p.preco)}`);
    console.log(descricoes);

    //PASSO #9. Exercício 3: filter

    const baratosEmStock = produtos.filter(p => p.stock > 0 && p.preco < 20000);
    console.log(baratosEmStock.map(p => p.nome));


    //Passo 10. Exercícios 4 e 5: reduce

    const valorStock = produtos.reduce((acc, p) => acc + p.preco * p.stock, 0);
    console.log('valor do stock:', formatarPreco (valorStock));


    const mediaAvaliacoes = produtos.reduce((acc, p)=> acc + p.avaliacao, 0) / produtos.length;
    console.log('Média:', mediaAvaliacoes.toFixed(2));
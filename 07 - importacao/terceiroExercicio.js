/*
3) Faça um programa que receba a quantidade de números e seus respectivos valores.
Imprima todos os números pares.
Exemplo:
    Entrada:
        5
        1
        3
        9
        10
        12

    Saída:
        Números Pares: 10, 12
*/

const {gets,print} = require('./libExercicios');
(
    function(){
        const lista = gets(3);
        let numeroPares = [];
        for (let index = 0; index < lista.length; index++) {
            if (lista[index] % 2 == 0) {
                numeroPares.push(lista[index]);
            }
            
        }
        print(`Números pares ${numeroPares}`);
    }
)()
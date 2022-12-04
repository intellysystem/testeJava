/*
2) Faça um programa que receba a quantidade de números e seus respectivos valores. 
Imprima o maior e o menor número deste conjunto.

Exemplo:
    Entrada:
        4
        100
        150
        90
        200

    Saída:
        Maior número: 200
        Menor número: 90
*/

const {gets,print} = require('./libExercicios');
(
    function(){
        const lista = gets(2);
        let maior = 0;
        let menor = 99999999999999
        for (let index = 0; index < lista.length; index++) {
            if (lista[index]>maior){
                maior=lista[index];
            }
            if (lista[index]<menor) {
                menor=lista[index]
            }
        }
        print(`O maior numero é ${maior}`);
        print(`O menor numero é ${menor}`);
    }
)()

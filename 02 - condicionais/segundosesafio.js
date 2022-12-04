/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

const prcAlcool = 3.5;
const prcGasolina = 4.79;
const autonomia = 9.5;
const distancia = 179;
const tpCombustivel = 'etanol';
let vlTotal = 0;
let litrosConsumidos = distancia/autonomia;

if (tpCombustivel==='gasolina') {
    vlTotal = litrosConsumidos*prcGasolina;
} else {
    vlTotal = litrosConsumidos*prcAlcool;
}


console.log('Total de combustivel consumido '+litrosConsumidos.toFixed(3))
console.log('O combustivel utilizado foi '+tpCombustivel);
console.log('Valor total da viagem '+vlTotal.toFixed(2));

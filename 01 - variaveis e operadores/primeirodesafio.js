/*
Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
 1 - Preço do combustível;
 2 - Gasto médio de combustível do carro por KM;
 3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
 */
const prcCombustivel = 4.79;
const autonomia = 9.5;
const distancia = 179;
let vlTotal = 0;
let litrosConsumidos = distancia/autonomia;
vlTotal = (distancia/autonomia)*prcCombustivel;
console.log('Total de combustivel consumido '+litrosConsumidos.toFixed(3))
console.log('Valor total da viagem '+vlTotal.toFixed(2));

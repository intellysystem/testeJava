/*
2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;
*/
const peso = 113.7;
const altura = 1.82;
const imc = peso/(altura*altura);
let xstatus = 'preencher';
if (imc < 18.5) {
    xstatus = 'Abaixo do peso';
} else if (imc < 25) {
    xstatus = 'Peso normal';
} else if (imc < 30) {
    xstatus = 'Acima do peso';
} else if (imc < 40) {
    xstatus = 'Obeso';
} else {
    xstatus = 'Obesidade grave';
} 

console.log('O peso informado foi '+peso);
console.log('A altura informada foi '+altura);
console.log('O IMC calculado foi '+imc.toFixed(2)+' - '+xstatus);
/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const tpPagto = 'Parcelado'; // 'PIX','Debito','Dinheiro','Parcelado'
const numeroParcelas = 3; //só será tratada se pagamento Parcelado
let vlProduto = 100;
let desconto = 0;
let tpDesconto = 'preencher';
let texto = 'preencher'
let texto2 = 'preencher'

if (tpPagto === 'Debito') {
    desconto = -10;
} else if (tpPagto === 'PIX') {
    desconto = -15;
} else if (tpPagto==='Dinheiro') {
    desconto = -15;
} else if (tpPagto === 'Parcelado') {
    if (numeroParcelas > 2) {
        desconto = 10;
    } else {
        desconto = 0;
    }
}
vlProduto = vlProduto * (1+(desconto)/100);
texto = 'A forma de pagamento selecionada foi: '+tpPagto;
texto2 = 'Valor de produto R$ '+vlProduto.toFixed(2);
if (desconto < 0) {
    texto = texto+' com desconto de '+Math.abs(desconto).toFixed(0)+'%';
} else if (desconto > 0){
    texto = texto+' com acrescimo de '+Math.abs(desconto).toFixed(0)+'%';
}
if (desconto >= 0) {
    texto2 = texto2+' em '+numeroParcelas+'x de R$ '+(vlProduto/numeroParcelas).toFixed(2)
    
}

console.log(texto);
console.log(texto2);
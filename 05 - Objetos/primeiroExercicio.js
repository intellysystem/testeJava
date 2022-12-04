/*
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/
class carro {
    marca;
    cor;
    gastoMedio;
    constructor(marca,cor,gastoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }
    calcVLTotal (vlLitro,distancia) {
        return vlLitro * (distancia/this.gastoMedio);
    }
}




(function (){
const passat = new carro('VW','Preto',9.5);
const astra = new carro('GM','Chumbo',9);
const corsa = new carro('GM','Preto',8);
const fit = new carro('Honda','Preto',13);
const ecosport = new carro('Ford','Prata',11);
const vlLitro = 4.79;
const distancia = 480;


console.log('para viajar com este veiculo irá gastar R$ '+passat.calcVLTotal(vlLitro,distancia).toFixed(2));
console.log('para viajar com este veiculo irá gastar R$ '+astra.calcVLTotal(vlLitro,distancia).toFixed(2));
console.log('para viajar com este veiculo irá gastar R$ '+corsa.calcVLTotal(vlLitro,distancia).toFixed(2));
console.log('para viajar com este veiculo irá gastar R$ '+fit.calcVLTotal(vlLitro,distancia).toFixed(2));
console.log('para viajar com este veiculo irá gastar R$ '+ecosport.calcVLTotal(vlLitro,distancia).toFixed(2));



})();
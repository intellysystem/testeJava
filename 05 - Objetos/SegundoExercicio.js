/*
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;
*/
class pessoa {
    nome;
    peso;
    altura;
    constructor(nome,peso,altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    calculaImc(){
        
        return this.peso/(this.altura*this.altura);
    }
    
    calculaStatus (imc){
        if (imc < 18.5) {
            this.xstatus = 'Abaixo do peso';
        } else if (imc < 25) {
            this.xstatus = 'Peso normal';
        } else if (imc < 30) {
            this.xstatus = 'Acima do peso';
        } else if (imc < 40) {
            this.xstatus = 'Obeso';
        } else {
            this.xstatus = 'Obesidade grave';
        } 
        return this.xstatus;
    }
    
}

(function (){
    const luiz = new pessoa('Luiz',113.7,1.82);
    const cristiane = new pessoa('Cristiane',63.5,1.69);
    console.log('O IMC de '+luiz.nome+' é '+luiz.calculaImc().toFixed(2)+' e é considerado '+luiz.calculaStatus(luiz.calculaImc()));
    console.log('O IMC de '+cristiane.nome+' é '+cristiane.calculaImc().toFixed(2)+' e é considerado '+cristiane.calculaStatus(cristiane.calculaImc()));
}) ();

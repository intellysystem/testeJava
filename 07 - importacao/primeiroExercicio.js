/*
1) Faça um programa que receba um número e escreva a sua respectiva tabuada.
    Exemplo:
        Entrada:
            2

        Saída:
            2x1 = 2
            2x2 = 4
            2x3 = 6
            2x4 = 8
            2x5 = 10
            2x6 = 12
            2x7 = 14
            2x8 = 16
            2x9 = 18
            2x10 = 20
*/
const {gets1,print} = require('./libExercicios');
(function (){
    const n1 = gets1(1)
    let n2 = 0;
    for (let n2=1;n2<=10;n2++){
        print(n1+' x '+n2+' = '+(n1*n2));
    }
}
)()

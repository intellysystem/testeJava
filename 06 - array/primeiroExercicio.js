/*
1) Crie um programa que dado um número imprima a sua tabuada.
*/

function imprime(n1,n2){
    console.log(n1+' x '+n2+' = '+(n1*n2))
}

(function (){
    const n1 = 5; //informar numero para tabuada
    let n2 = 0;
    for (let n2=1;n2<=10;n2++){
        imprime(n1,n2);
    }
}
)()

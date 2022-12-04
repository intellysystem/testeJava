/*
4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;
*/
function validaPar(numero){
    if (numero % 2 ==0){
        return true
    }
}


(
    function(){
        let lista = [];
        for (i=10;i<=50;i++){
            if (validaPar(i)){
                lista.push(i);
            }
        }
        console.log(lista);
    }
)()
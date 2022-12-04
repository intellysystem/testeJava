/*
2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.
*/

function validaPar(numero){
    if (numero % 2 == 0) {
        if (numero==0) {
            console.log('O número '+numero+' não pode ser considerado nem par nem impar.')
        } else {
            console.log('O número '+numero+' é par.')
        }
    }
}

(
    function(){
        const lista = [1,2,3,4,5,6,7,8,9,0];
        for (i=0;i<=lista.length;i++){
            validaPar(lista[i]);
        }
    }
)()





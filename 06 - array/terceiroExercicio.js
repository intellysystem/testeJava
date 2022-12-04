/*
3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".
*/
function verificarPrimeiraLetra(nome){
    //tratar
    const primeiraLetra = nome.slice(0,1).toUpperCase();
    if (primeiraLetra=='V'){
        console.log('O nome '+nome+ ' inicia com a letra V');
    }
}

(
    function(){
        const lista = ['Luiz','Vitor','Vinicius','Ruben','Rodrigo'];
        for (i=0;i<lista.length;i++){
            verificarPrimeiraLetra(lista[i]);
        }
    }
)()



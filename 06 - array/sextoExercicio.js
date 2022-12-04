/*
6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
   Ex de lista de notas = [2, 7, 3, 8, 10, 4]
*/

function retornarMaiorNota(lista){
    let maior = 0;
    for (i=0;i<lista.length;i++){
        if (lista[i]>maior){
            maior = lista[i];
        }
    }
    return maior;
}

(
    function(){
        const lista = [2, 7, 3, 8, 10, 4];
        console.log('A maior nota foi: '+retornarMaiorNota(lista));
    }
)()
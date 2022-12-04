function gets(exercicio){
    let lista = [];
    if (exercicio==1){
        lista = [2];
    }else if (exercicio==2){
        lista = [4,100,150,90,200];
    }else if (exercicio==3){
        lista = [5,1,3,9,10,12];
    }else {
        console.log('exercicio invalido');
    }
    return lista
}

function print(texto){
    console.log(texto);
}

module.exports = {gets,print};
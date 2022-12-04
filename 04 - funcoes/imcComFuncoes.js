function calcImc(peso,altura){
    return peso/(altura*altura)
}

function txtStatus(imc){
    let xstatus = 'preencher'
    if (imc < 18.5) {
        xstatus = 'Abaixo do peso';
    } else if (imc < 25) {
        xstatus = 'Peso normal';
    } else if (imc < 30) {
        xstatus = 'Acima do peso';
    } else if (imc < 40) {
        xstatus = 'Obeso';
    } else {
        xstatus = 'Obesidade grave';
    } 
    return xstatus    
}

(function () {
        const peso = 113.7;
    const altura = 1.82;
    const imc = calcImc(peso,altura);
    const xstatus = txtStatus(imc)


    console.log('O peso informado foi '+peso);
    console.log('A altura informada foi '+altura);
    console.log('O IMC calculado foi '+imc.toFixed(2)+' - '+xstatus);
})(); //interessante como tornar a função de autoexecução

/*
1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;
*/
const nota1 = 7;
const nota2 = 10;
const nota3 = 10;
const media = (nota1+nota2+nota3)/3;
let xstatus = 'validar';
if (media < 5) {
    xstatus = 'reprovado';
} else if (media < 7 ) {
    xstatus = 'recuperação';
} else {
    xstatus = 'passou de semestre';
}

console.log('A média deste aluno foi de '+media.toFixed(1)+', com esta nota o aluno esta com o status de '+xstatus);
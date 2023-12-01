alert('Olá mundo! Boas vindas ao jogo do Número Secreto!');

let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e ' + numeroMaximo + ':');
    // se o chute for igual ao número secreto, queremos executar algum código, isto é:
if (numeroSecreto == chute){
    break;
}   else if(numeroSecreto > chute) {
        alert('Erroooou! O número secreto é maior que ' + chute);
}   else {
        alert('Erroooou! O número secreto é menor que ' + chute);
}
tentativas++;
}

let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
alert(`Isso aí, você descobriu o número secreto (${numeroSecreto}) com ${tentativas} ${palavraTentativa}!`);

//== if(tentativas > 1) {
//     alert(`Isso aí, você descobriu o número secreto (${numeroSecreto}) com ${tentativas} tentativas!`);
// } else {
//     alert(`Isso aí, você descobriu o número secreto (${numeroSecreto}) com ${tentativas} tentativa!`);
// }
// tentativas++ é a mesma coisa que escrever tentativas = tentativas + 1, e é usado para atribuir/incrementar +1 a uma variável

// atalho alt + z = quebra de linha para melhor visualização (ajusta a visualização)
// console.log = ferramenta/ambiente prórpio do DESENVOLVEDOR
//# Exercício 3

//Crie 4 funções, 
//cada uma deve receber dois parâmetros numéricos
//e retornar o valor uma das operações básicas
//(soma, subtração, multiplicação e divisão).

function soma (n1, n2){
    return (n1 + n2)
}
soma()


function subtração (n1, n2) {
    return (n1 - n2)
}
subtração()


function multiplicação (n1, n2) {
    return (n1 * n2)
}
multiplicação()


function divisão (n1, n2) {
    return(n1 / n2)
}
divisão()


//Em seguida, peça para o usuário inserir dois números
// e chame essas 4 funções com esses valores inputados pelo usuário
// sendo o argumento. 
//Por fim, imprima no console o resultado das operações

let number1 = Number(prompt("Digite o primeiro número:"))
let number2 = Number(prompt("Digite o segundo número:"))

console.log(`
${number1} + ${number2} = ${soma(number1,number2)}
${number1} - ${number2} = ${subtração(number1,number2)}
${number1} x ${number2} = ${multiplicação(number1,number2)}
${number1} : ${number2} = ${divisão(number1,number2)}
`)
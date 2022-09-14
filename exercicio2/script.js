//# Exercício 2
//Declare e chame as funções abaixo:

//a) Uma função que receba 2 números como parâmetros,
//   e, dentro da função, faça a soma das duas entradas
//   e imprima o resultado.
//   Invoque a função e imprima no console o resultado.

function imputNumber (num1,num2) {
    let add = num1 + num2
    console.log("2 + 4 = ", add)
}

imputNumber(2,4)


//b) Uma função que recebe 2 números
//e imprime um booleano que informa
//se o primeiro número é **maior ou igual** ao segundo.

function numbers (n1, n2) {
    console.log("6 >= 3?", n1 >= n2) 
}
numbers(6,3)

//c) Uma função que receba um número e imprima se ele é par ou não.

function numeroPar (num){
    console.log("6 é um número par?", num % 2 === 0)


}
numeroPar (6)


//d) Uma função que recebe uma mensagem (`string`) como parâmetro
//e imprima o tamanho dessa mensagem, 
//juntamente com uma versão dela contendo apenas letras maiúsculas.

function mensagem(imput) {
    console.log("A mensagem " + imput + " tem " + imput.length + " letras.")

}
mensagem (String(prompt("Digite uma frase:")).toUpperCase())




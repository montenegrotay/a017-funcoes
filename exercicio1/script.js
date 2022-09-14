// # Exercício 01

//a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

function imprimindoNome (nome) {
    console.log(`Olá, ${nome}! Seja bem-vinda!`)
}
imprimindoNome(prompt("Insira seu nome:"))


//b) Declare uma função que imprima a tabuada do 6. Chame esta função.

function imprimindoTabuada (tabuadaDe6) {

    for(let i = 1; i <= 10; i++)

    console.log(tabuadaDe6 + " x " + i + " = " + (tabuadaDe6 * i))
}

imprimindoTabuada(Number(prompt("Insira um número qualquer de 0 a 10:"))) // Dando valor ao parâmetro



//c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 


const meusDados = function (nome) {
    const meuNome = nome;
    console.log(meuNome)
}
meusDados (String(prompt("Insira seu nome:")))


const calcularTabuada = (n) => {
    for(i = 1; i < 10; i++)
        console.log(n + " x " + i + " = " + (n * i))
    
    
}
calcularTabuada(Number(prompt("Digite um número")))


// # Exercício 3


// a) Crie 4 funções. Cada função deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).

// b) Em seguida, fora das funções, receba do usuário dois números e armazene-os em variáveis.

// c) Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.

// d) Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o resultado das operações no console.

function soma(num1, num2){
    const resultado = num1 + num2
    console.log(resultado)
}

const numero1 = Number(prompt("Digite 1 numero"))
const numero2 = Number(prompt("Digite outro numero"))

soma(numero1, numero2)


function sub(num1, num2){
    const resultado = num1 - num2
    console.log(resultado)
}

sub(numero1, numero2)

function mult(num1, num2){
    const resultado = num1 * num2
    console.log(resultado)
}

mult(numero1, numero2)

function div(num1, num2){
    const resultado = num1 / num2
    console.log(resultado)
}

div(numero1, numero2)

soma(numero1, numero2)
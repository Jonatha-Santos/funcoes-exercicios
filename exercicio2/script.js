// //Declare e invoque as funções abaixo:

// a) Uma função que recebe 2 números como parâmetros e que imprime a soma deles. Invoque a função e verifique o resultado no console.

// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

// c) Uma função que recebe um número e imprime no console um booleano informando se o número é par ou não.

// d) Uma função que recebe um salário bruto e retorna o salário líquido com desconto de 10%, referente ao INSS.

function calculo (numero, numero2) {
    const soma1 = numero + numero2
    console.log(soma1)
}

calculo(2,3)

//b

function calculo2 (numero, numero2){
    const maiorOuMenor = numero >= numero2
    console.log(maiorOuMenor)
}

calculo2(5,27)

//c

function calculo3 (numero){
    const par = numero % 2 === 0
    console.log(par)
}

calculo3(4)

//d 

function salario (salarioBruto){
    const desconto = salarioBruto * 0.1
    console.log(desconto)
}

salario(2000)

//

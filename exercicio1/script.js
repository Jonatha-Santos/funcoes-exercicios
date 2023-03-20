// function cumprimentar(nome) {                 // FUNÇÃO >NOME DA FUNÇÃO< (>>PARAMETROS, PARAMETRO1, PARAMETRO2,<<)
//     console.log(`Olá, ${nome}`)
// }

// const nomeDoCliente = prompt("Digite teu nome")
// cumprimentar("Tião")
// cumprimentar("Labiru")
// cumprimentar(nomeDoCliente)

// const nomeVariavel = function(nome) {
//     console.log("Olá,no-name",nome)
// }

// nomeVariavel("Paçoca")


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> EXERCICIO 2 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// function operacoes(numero){
//     const verifica = (numero %2 ===0) // true é par, false ímpar
//     const soma = numero + 10
//     const multiplicacao = numero * numero

//     return `O número ${numero} é par? ${verifica}. Somado com 10, o resultado é ${soma} e multiplicado por ele mesmo o resultado é ${multiplicacao}`
// }

// const retorno = operacoes(3003)
// console.log(retorno)

//opção 2 expressão de função
// const operacoesDois = function(numero) {
//     const verifica = (numero %2 ===0) // true é par, false ímpar
//     const soma = numero + 10
//     const multiplicacao = numero * numero

//     return `O número ${numero} é par? ${verifica}. Somado com 10, o resultado é ${soma} e multiplicado por ele mesmo o resultado é ${multiplicacao}`
// }

// const retornoDois = operacoesDois(3003)
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> EXERCICIO 3 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> EXERCICIO 3 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


// function login (login,senha){

//     const loginArmazenado = "Tião"
//     const senhaArmazenada = "tiao1234"
//     const resposta = (login === loginArmazenado && senha === senhaArmazenada)
//     return resposta            // retornando valores // >> pra retornar 2 valores tem que ter () <<
    
// }

// const tentativaLogin = login("Tião", "1234tiao") // criei uma variavel pra receber o retorno da função LOGIN, e dentro dos parenteses tem os dados ou valores
// console.log("Login:", tentativaLogin) //retorno da função no console LOG


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> PRATICA <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// function verificacao (nome, anoNascimento, anoAtual){

//     const idade = anoAtual - anoNascimento
//     const verificaIdade = idade >= 18
//     return `${nome} é maior de idade? ${verificaIdade}`
// }

// console.log(verificacao("Tião", 2000, 2023))
// console.log(verificacao("Carla", 2010, 2023))


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> PRATICA <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// # Exercício 1

// a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

// b) Declare uma função que receba um número como parâmetro e imprima no console a tabuada de 1 a 10 dele. Chame esta função várias vezes com números diferentes.

// c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 


function cumprimentar (nome) {

    console.log(`Olá ${nome}`)
}

cumprimentar ("Carlos")

// function tabuada (numero){
//     const numero1 = numero * 1
//     const numero2 = numero * 2
//     const numero3 = numero * 3
//     const numero4 = numero * 4
//     const numero5 = numero * 5
//     const numero6 = numero * 6
//     const numero7 = numero * 7
//     const numero8 = numero * 8
//     const numero9 = numero * 9
//     const numero10 = numero * 10
//     console.log(numero1, numero2, numero3, numero4, numero5, numero6, numero7, numero8, numero9, numero10)
// }

const tabuada = (numero) => {     // ARROW FUNCTION
    console.log(numero * 1, numero * 2, numero * 3, numero * 4, numero * 5, numero * 6, numero * 7, numero * 8, numero * 9, numero * 10)
}

tabuada(678)
tabuada(999)


function Finabonacci(number) {
    let a = 0, b = 1, proximo

    while (a <= number) {
        if (a == number) {
            console.log("O número " + number + " pertence a sequência de Finabonacci")
        }
        proximo = a + b
        a = b
        b = proximo
    } return `O número ${numero} **NÃO** pertence à sequência de Fibonacci.`
}

console.log(Finabonacci(5))
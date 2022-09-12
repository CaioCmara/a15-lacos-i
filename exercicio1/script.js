let querCoxinha = prompt("Você quer mais coxinhas?")

let conta = 0 

let valorCoxinha = 2.5

while (querCoxinha !== "N"){
    querCoxinha = prompt ("Você quer mais coxinhas?")
    conta += valorCoxinha
}

console.log (`O valor total da sua conta é de ${conta}`)

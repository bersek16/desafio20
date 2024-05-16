alert("Iremos somar dois numeros")
let numberOne = prompt("Digite o primeiro numero:")
let numberTwo = prompt("Digite o segundo numero:")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo 
const sub = numberOne - numberTwo
const mult= numberOne * numberTwo
const div = numberOne / numberTwo
const rest = numberOne % numberTwo

alert('Soma: ' + sum)
alert('Subitração: ' + sub)
alert('multiplicação: ' + mult)
alert('divisão: ' + div)
alert('resto: ' + rest)
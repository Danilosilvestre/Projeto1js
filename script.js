 


 let numberOne = prompt ("Digite o primeiro número")
 let numberTwo = prompt ("Digite o segundo número")

 let checkEquals = numberOne === numberTwo ? 'são iguias' : 'são diferentes'

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
 
let parOuImpar = sum % 2 == 0 ? 'par' : 'impar'

const sub = numberOne - numberTwo
const mult = numberOne * numberTwo
const div = numberOne / numberTwo
const restDiv = numberOne % numberTwo

alert (" Soma " + sum)
alert (" Subtração " + sub)
alert (" Multiplicação " + mult)
alert (" Divisão " + div.toFixed(2))
alert (" Resto da divisão " + restDiv)
alert (" Os dois números inseridos " + checkEquals)
alert (" A soma dos dois números é  " + parOuImpar  + sum)


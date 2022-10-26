'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let binario = 0
  return num.split("").reverse().map((bit, index) => (bit==="1")?binario += Math.pow(2,index):binario).at(-1)
}

function DecimalABinario(num) {
  // tu codigo aca
  let resto = ""
  while (num>=2) {
    resto += Math.floor(num%2)
    num = num/2
  }
  return ((num>0)?resto += 1:resto).split("").reverse().join("")
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}
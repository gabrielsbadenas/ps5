const ps5 = require('./ps5.json')
const fs = require('fs')
var v = 0

const valor = 407.915

function calcularPorcentaje(a,b){
	c=a/b
	c=c*100
	return c
}
porcentaje = []
ps5.forEach(function(x){
	porcentaje.push({name:x.name,percent:calcularPorcentaje(x.size,valor)})
	//console.log(x.size)
})
let datos = [ps5,porcentaje]
console.log(v)
//fs.writeFileSync('./ps5.json', JSON.stringify(datos))
console.log(require('./ps5.json'))

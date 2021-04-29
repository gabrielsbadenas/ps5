const fs = require('fs')

//const xd = fs.readFileSync('./ps5.json', 'utf8')

//const ps5 = JSON.parse(xd)

//const dou = JSON.parse(fs.readFileSync('./ps5.json', 'utf8'))

//console.log(ps5)

//fs.writeFileSync('./ps5.json', ps5)

//console.log(dou)

class Juego{
	constructor(name, size){
		this.name = name
		this.size = size
	}
}
class Juegos{
	constructor(){
		this.juegos=[]
	}
	add(name, size){
		this.juegos.push(new Juego(name,size))
	}
}
const juegos = []
function add(name, size){
	juegos.push(new Juego(name, size))
}
add('warzone', 136.6)
add('black ops 3', 71.68)
add('horizon zero dawn', 48.26)
add('fifa 21',43.72)
add('uncharted', 41.96)
add('fortnite',27.12)
add('rocket league',20.48)
add('astros playroom',10.99)
add('journey',1.95)
add('enter the gungeon',1.55)
add('twitch',1.34)
add('brawlhalla',0.637)
add('kitten squad',0.612)
add('youtube',0.463)
add('netflix',0.46)
add('spotify',0.093)
console.log(juegos)

fs.writeFileSync('./ps5.json', JSON.stringify(juegos))
console.log(JSON.parse(fs.readFileSync('./ps5.json','utf8')))


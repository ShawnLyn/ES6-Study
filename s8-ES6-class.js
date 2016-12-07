/*
class C {
	constructor() {
		this.num = Math.random()
	}
	rand() {
		console.log(this.num)
	}
}

let c1 = new C()
c1.rand()

C.prototype.rand = function () {
	console.log(`num is: ${Math.round(this.num * 10000)}`)
}

c1.rand()*/

/*
class C {
	constructor() {
		C.prototype.count++
		console.log(`Hi, I am called: ${this.count}`)
	}
}

C.prototype.count = 0

let c1 = new C()
let c2 = new C()

console.log(c1.count)*/

/*
class C {
	constructor(id) {
		this.id = id
	}
	r() {
		console.log(this.id)
	}

}

let c = new C('hello')
c.r()*/

/*
let arr = []
for (let i = 0; i < 1000000; i++) {
	let num = Math.round(Math.random() * 1000000)
	if(num <= 100000){
		arr.push(num)
	}
}
console.log(arr.length)*/

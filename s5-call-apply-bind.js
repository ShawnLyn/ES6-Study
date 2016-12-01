// JavaScript 中，某个函数的参数数量是不固定的，
// 因此要说适用条件的话，当你的参数是明确知道数量时用 call 。
// 而不确定的时候用 apply，然后把参数 push 进数组传递进去。

/*
function fruits() {}

fruits.prototype = {
	color: 'red',
	say: function () {
		console.log(`My color is ${this.color}`)
	}
}

let apple = new fruits;

apple.say()

let banana = {
	color: 'yellow'
}

apple.say.call(banana)*/


/*let arr1 = [12, 'foo', {name: 'mino'}, -234]
let arr2 = ['Doe', 333, 990]

Array.prototype.push.apply(arr1, arr2)

console.log(arr1)*/

/*
let numbers = [12, 34, 51, 25, 66, 26, 26]
console.log(
	Math.max.apply(Math, numbers),
	Math.max.call(Math, 23, 33, 223, 23)
)*/


// 验证是否是数组

/*
function isArray(obj) {
	return Object.prototype.toString.call(obj) === '[object Array]'
}

console.log(Object.prototype.toString.call([11]))*/

/*function log(...msg) {
	console.log.call(console,'(app)', ...msg)
}*/

/*function log() {
	let args = Array.prototype.slice.call(arguments)
	args.unshift('(app)')
	console.log.apply(console, args)
}

log('ni', 'hao')*/


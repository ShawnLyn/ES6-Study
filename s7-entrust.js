/*function Foo() {
	console.log(123)
}

const a = new Foo()
console.log(
	a,
	a.constructor,
	a.constructor.name
)*/
// Foo {} 意思是 {} 是一个由Foo 创造出来的空对象。

/*
function Foo() {}

const a = new Foo()

Foo.prototype.constructor = function Hello() {}

console.log(
	a.constructor,
	a.constructor.name,
	a
)*/

/*
function Foo() {}
const a = Object.create(Foo)
Foo.prototype.constructor = function Hello() {}

console.log(
	a,
	a.constructor,
	a.constructor.name
)*/

/*
let Foo = {}
let a = Object.create(Foo)

console.log(a.constructor.name)

Object.defineProperty(Foo, 'constructor', {
  enumerable: false,
  value: function Hello() {}
})

console.log(a)*/

// OO风格
/*
function Foo(who) {
	this.who = who
}

Foo.prototype.indentify = function () {
	return `I am ${this.who}`
}

function Bar(who) {
	Foo.call(this, who)
}

Bar.prototype = Object.create(Foo.prototype)

Bar.prototype.speak = function () {
	console.log(`hello, ${this.indentify()}`)
}

const a = new Bar('aaa')
const b = new Bar('bbb')
a.speak()
b.speak()
console.log(a)*/


// OLOO objects-linked-other-objects
const Foo = {
	init: function (who) {
		this.who = who
  },
	identify: function () {
		return `I am ${this.who}`
  }
}

const Bar = Object.create(Foo)

Bar.speak = function () {
	console.log(`Hi, ${this.identify()}!`)
}

let a = Object.create(Bar)
a.init('aaa')

let b = Object.create(Bar)
b.init('bbb')

a.speak()
b.speak()
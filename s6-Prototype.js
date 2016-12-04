/*
 Object.prototype.hello = 'minooo'
 const obj = {a:1}
 console.log(obj.a, obj.hello)*/

/*
let anotherObject = {
  a: 2
}

let myObj = Object.create(anotherObject)

console.log(myObj.a, 'a' in myObj)

for (key in myObj) {
	console.log('the key is: ' + key)
}

console.log(myObj.toString())*/



// 设置与遮蔽属性

/*
Object.prototype.foo = 'minooo'
let obj = {foo: 'hello'}
console.log(obj.foo)*/

/*
let obj = {
	a: 22
}

let myObj = Object.create(obj)

console.log(
	obj.hasOwnProperty('a'),
	myObj.hasOwnProperty('a'),
	obj.a,
	myObj.a
)

myObj.a++

console.log(obj.a, myObj.a, myObj.hasOwnProperty('a'))*/

// "类"

/*let obj = {
	a: 1
}

console.log(Object.getPrototypeOf(obj) === Object.prototype)*/

/*function Foo() {
	console.log('hello')
}

let func = new Foo()

console.log(
	Object.getPrototypeOf(func) === Foo.prototype,
	func.constructor === Foo,
	Foo.prototype.constructor === Foo
)*/

// 函数不是构造器，但是当且仅当被 new 使用时，函数调用就是构造器调用。

/*
function Foo(name) {
	this.name = name
}

Foo.prototype.myName = function () {
	return this.name
}

let a = new Foo('aaa')
let b = new Foo('bbb')

console.log(
	a.myName(),
	b.myName(),
	a.constructor === Foo,
	a.constructor === Foo.prototype.constructor
)*/


// 复活构造器
/*function Foo() {
	console.log('aaa')
}

Foo.prototype = {
	sayHello: function () {
		console.log('Hi!!')
  }
}

Object.defineProperty(Foo.prototype, 'constructor', {
	enumerable: false,
	writable: true,
	configurable: true,
	value: Foo
})

let a = new Foo()

console.log(
	a.sayHello(),
	a.constructor === Foo
)*/


// 原型继承

/*
function Foo(name) {
	this.name = name
}

Foo.prototype.myName = function () {
	return this.name
}

function Bar(name, label) {
	Foo.call(this, name)
	this.label = label
}

// 创建一个新的 Bar.prototype 链接到 Foo.prototype
Bar.prototype = Object.create(Foo.prototype)

// 下面的两种方式，虽然也能工作，但是会有一些问题和不想要的副作用。
// Bar.prototype = Foo.prototype
// Bar.prototype = new Foo()

Bar.prototype.myLabel = function () {
	return this.label
}

let func = new Bar('aaa', 'bbb')

console.log(
	func.myName(),
	func.myLabel()
)*/


/*
// ES5方式
Bar.prototype = Object.create(Foo.prototype)

// ES6 方式
Object.setPrototypeOf(Bar.prototype, Foo.prototype)*/

/*
function Foo(name) {
	this.name = name
}

Foo.prototype.myName = function () {
	console.log(this.name)
}

let func = new Foo('minooo')
/!*function Other() {
	console.log(123)
}*!/

let Other = Object.create(Foo.prototype)

func.myName()

console.log(
	func instanceof Foo,
	Other instanceof Foo
)*/
/*

function Foo() {
	console.log(123)
}

let a = new Foo()
let c = new Foo()

console.log(
	Foo.prototype.isPrototypeOf(a),
	a.isPrototypeOf(c)
)*/

/*
let foo = {
	sth: function () {
		console.log('hello')
  }
}

let bar = Object.create(foo)

bar.sth()

console.log(
	'sth' in bar,
	bar.hasOwnProperty('sth'),
	foo.hasOwnProperty('sth')
)*/
/*

let no = Object.create(null)
console.log(
	no === null,
	no == null,
	no.prototype === null
)*/


/*let foo = {
	say: function () {
		console.log('hello')
  }
}

let bar = Object.create(foo)*/

/*
if(Object.create) {
	Object.prototype.create = function (o) {
		function Foo() {}
		Foo.prototype = o
		return new Foo()
  }
}

let foo = {
	say: function () {
		console.log('minooo')
  }
}

let bar = Object.create(foo)

bar.say()

function nihao() {
	console.log(123)
}

console.log(typeof nihao)*/


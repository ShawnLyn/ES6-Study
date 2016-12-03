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

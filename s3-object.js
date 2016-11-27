// 复制对象

/*function anotherFunction() {
	console.log(123)
}

const anotherObject = {
	c: true
}

const anotherArray = []

const myObject = {
	a: 2,
	b: anotherObject,
	c: anotherArray,
	d: anotherFunction
}

const newObj = Object.assign( {}, myObject)*/

// 属性描述符（Property Descriptors）
const myObject = {
	a: 2
}

const l = Object.getOwnPropertyDescriptor(myObject, 'a');

Object.defineProperty( myObject, 'a', {
	value: 22,
	writable: false
})
console.log(Object.getOwnPropertyDescriptor(myObject, 'a'))
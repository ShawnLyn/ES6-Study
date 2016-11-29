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
/*
const myObject = {
	a: 2
}

const l = Object.getOwnPropertyDescriptor(myObject, 'a');

Object.defineProperty( myObject, 'a', {
	value: 22,
	writable: false
})
console.log(Object.getOwnPropertyDescriptor(myObject, 'a'))*/

// 数组
/*
let myArray = [ 'foo', 22, 'bar']
console.log(myArray.length, myArray[0], myArray[2])

myArray.baz = 'baz'
console.log(myArray.length, myArray.baz, myArray)

myArray["3"] = "minooo"
myArray["2"] = "hui"
console.log(myArray.length, myArray)*/

// getters && setters
/*
let myObject = {
	get a() {
		return this.aa;
	},
	set a(val) {
		this.aa = val * 2;
	}
}

Object.defineProperty(
	myObject,
	"b",
	{
		get: function () {
			return this.a * 2
		},
		enumerable: true
	}
)

myObject.a = 5

console.log(myObject.a,
	"a" in myObject,
	Object.prototype.hasOwnProperty.call(myObject, "a")
)*/

/*
let myArray = [1, 2, 3]
const it = myArray[Symbol.iterator]()
console.log(it.next())
for (let v of myArray) {
	console.log(v)
}*/

/*
 let object = {
 a: 1,
 b: 2
 }

 console.log(
 Object.keys(object),
 Object.keys(object)[0],
 object[Object.keys(object)[0]]
 )*/

let randoms = {
	a: 'minooo',
	[Symbol.iterator]: function () {
		return {
			next: function () {
				return { value: Math.random()}
			}
		}
	}
}

let randoms_pool = []
for (let n of randoms) {
	randoms_pool.push( n )
	if (randoms_pool.length === 5) break;
}

console.log(randoms_pool)
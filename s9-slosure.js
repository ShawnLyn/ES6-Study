// 什么是闭包？
// 函数嵌套函数，内部函数可以引用外部函数的参数和变量，
// 并且，变量和参数不会被垃圾机制回收

// function show(a) {
// 	const b = 12
// 	function show1() {
// 		console.log(a, b)
// 	}
// 	show1()
// }
//
// show(2)

// 垃圾回收机制

// function aa() {
// 	let a = 12
// 	console.log(a)
// 	a++
// }

// aa() // 12
// aa() // 12

// 说明函数每次执行，变量a都会被垃圾机制回收
// 再次调用的时候就会重新输出初始值

// function aaa() {
// 	let a = 12
// 	return function () {
// 		console.log(a)
// 		a++
// 	}
// }
//
// const b = aaa()
// b() //12
// b() //13
// b() //14
// b() //15


// 闭包的好处
// 1，希望一个变量长期驻扎在内存中
// 2，避免全局变量污染

// let a = 12
// function show() {
// 	console.log(a)
// 	a++
// }
//
// show()
// show()
// console.log(a, a, a)

// let a = 12
// function show() {
// 	let b = a
// 	return function () {
// 		console.log(b)
// 		b++
// 	}
// }
//
// const b = show()
// b()
// b()
// b()
// console.log(a)

// let a = 12
// const b = (function (a) {
// 	return function () {
// 		console.log(a)
// 		a++
// 	}
// })(a)
//
// b()
// b()
// b()
// console.log(a)

// 私有成员的存在
// function show() {
// 	let a = 12
// 	function show1() {
// 		console.log('show1:' + a)
// 		a++
// 	}
//
// 	function show2() {
// 		console.log('show2:' + a)
// 		a++
// 	}
//
// 	return {
// 		show1,
// 		show2
// 	}
// }
//
// const b = show()
// b.show1()
// b.show1()
// b.show1()
// b.show1()
// b.show2()

// 注意点
// 使用闭包需要注意内存泄漏

// console.log(a)
// function a() {
// 	let b = 3
// 	function c() {
// 		let b = 1
// 		console.log(b)
// 	}
// 	c()
// }
// a()

// let arr = []
// arr[0]=[]
// arr[0].push('a')
// console.log(
// 	Math.floor(0/3),
// 	arr
// )
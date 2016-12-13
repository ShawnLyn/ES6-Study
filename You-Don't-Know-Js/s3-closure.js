// 需要付出非常多的努力和牺牲才能理解闭包
// function foo() {
//   var a = 2
//   function bar() {
//     console.log(a)
//   }
//   return bar
// }
//
// var baz = foo()
// baz()


// function foo() {
//   var a = 2
//   function baz() {
//     console.log(a)
//   }
//   bar(baz)
// }
//
// function bar(fn) {
//   fn()
// }
//
// foo()


// var fn
//
// function foo() {
//   var a = 2;
//   function baz() {
//     console.log(a)
//   }
//   fn=baz
// }
//
// function bar() {
//   fn()
// }
//
// foo()
//
// bar()

// 只要使用了回调函数，实际上就是在使用闭包。
// var a = 2;
// (function () {
//   console.log(a)
// })()

// 要说闭包，for循环是最常见的例子
// var timer = function (arg) {
//   return function () {
//     console.log(arg)
//   }
// }
// for (var i=1; i<=5; i++) {
//   setTimeout(timer(i), i*1000)
// }

// for (var i=1; i<=5; i++) {
//   (function (j) {
//     setTimeout(function () {
//       console.log(j)
//     }, j*1000)
//   })(i)
// }

// let 可以劫持一个块作用域，并且在这个块作用域中声明一个变量
// 块作用域和闭包练手便可天下无敌
// for (let i=1; i<=5; i++) {
//   setTimeout(function timer() {
//     console.log(i)
//   }, i*1000)
// }

// function CoolModule() {
// 	var something = 'cool';
//
// 	var another = [1, 2, 3];
//
// 	function doSomething() {
// 		console.log(something)
// 	}
//
// 	function doAnother() {
// 		console.log(another.join('!'))
// 	}
//
// 	return {
// 		doSomething: doSomething,
// 		doAnother: doAnother
// 	}
// }
//
// var foo = CoolModule()
// foo.doSomething();
// foo.doAnother();

// console.log(Math.max.apply(Math, [1,2,3]))

// var foo = (function CoolModule() {
//   var something = "cool";
//   var another = [1, 2, 3];
//
//   function doSomething() {
//     console.log(something)
//   }
//
//   function doAnother() {
//     console.log(another.join('!'))
//   }
//
//   return {
//     doSomething: doSomething,
//     doAnother: doAnother
//   }
// })()
//
// foo.doSomething();
// foo.doAnother()

// var foo = (function CoolModule(id) {
//   function change() {
//     publicAPI.identify = identify2;
//   }
//
//   function identify1() {
//     console.log(id)
//   }
//
//   function identify2() {
//     console.log(id.toUpperCase())
//   }
//
//   var publicAPI = {
//     change: change,
//     identify: identify1
//   }
//
//   return publicAPI
// })('foo module')
//
// foo.identify();
// foo.change();
// foo.identify();

// var modules = {}
// var deps = ["bar"]
// deps[0] = modules[deps[0]]
// modules["bar"] =
//
// console.log(deps, modules)

// var modules = {}
// var foo = function (bar) {
//   function aaa() {
//     console.log(bar.toUpperCase())
//   }
//   return {
//     aaa:aaa
//   }
// }
// var arr = [];
// for(var i=0; i<3; i++) {
//   arr[i] = modules[arr[i]]
// }
// modules['bar'] = foo.apply(foo, arr)
//
// console.log(modules, arr)

// function foo() {     console.log( a ) }
//
//   function bar() {     var a = 3;     foo(); }
//
//   var a = 2;
//
//   bar();

// {
//   let a=2
//   console.log(a)
// }
// console.log(a)

// try{throw 2}catch(a){
//   console.log(a)
// }
//
// console.log(a)

// var obj = {
//   idd: 'awesome',
//   cool: function coolFn() {
//     var self = this;
//     console.log(self.idd)
//   }
// }
//
// var idd = "not awesome";
//
// obj.cool();
// setTimeout(() => obj.cool.apply(null), 100)

// 页码 87
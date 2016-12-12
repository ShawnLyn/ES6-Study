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

// 页码66
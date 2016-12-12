// 标识符---变量&函数
// function foo() {
//   function bar(a) {
//     var i = 3;
//     console.log(a + i)
//   }
//   for (var i=0; i<10; i++) {
//     bar(i*2)
//   }
// }
// foo()

/*
* 函数表达式可以匿名，但是匿名有几个缺点
* 1，由于没有名字，调试困难
* 2，递归中不容易调用自身
* 3，降低可读性
*
* 所以，函数表达式应该始终命名，这是最佳实践
* */

// IIFE 立即执行函数表达式
// (function seeMe(a) {
//   console.log(a)
// })(100)

// 改进方式，不错
// (function hello(a) {
//   console.log(a+1)
// }(9))

// let a = 2;
// (function come(global) {
//   let a = 3
//   console.log(a, global.a)
// }(global))

// undefined = true;
// (function (undefined) {
//   let a
//   if(a === undefined) {
//     console.log('undefined is safe here!')
//   }
// })()

// var foo = true
// if(foo){
//   var bar = foo*2
// }
// console.log(bar)

// try {
//   undefined()
// }
// catch (err) {
//   console.log(err)
// }

// 标识符
// var foo = true
// if (foo) {
//   var hello = function () {
//     console.log(123)
// 	}
// }
// hello()

// {
//   var hello = 123;
//   let nihao = 345
// }
// console.log(hello, nihao)
// let 不会将变量提升

// function hello(n) {
//   console.log(n.hello)
// }
//
// {
//   let somedata = {hello:'hello,minooo'}
//   hello(somedata)
// }

// console.log(a)
//
// let a = 2

// 函数表达式不会提升，但是函数表达式会提升
// 函数声明和变量声明都会被提升，前者优先提升。
// 避免在块内部声明函数
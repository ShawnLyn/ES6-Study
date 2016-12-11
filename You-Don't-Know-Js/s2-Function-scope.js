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

try {
  undefined()
}
catch (err) {
  console.log(err)
}

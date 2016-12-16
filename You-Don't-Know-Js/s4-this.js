// function foo(num) {
//
// 	console.log('foo:' + num);
// 	this.count++;
// }
//
// foo.count = 0;
//
// for (var i=0; i<5; i++) {
// 	foo(i)
// }
//
// console.log(foo.count)

// function foo(num) {
// 	console.log('foo:' + num);
// 	data.count++;
// }
//
// var data = {
// 	count: 0
// }
//
// foo.count = 0;
//
// for (var i=0; i<5; i++) {
// 	foo(i)
// }
//
// console.log(data.count)

// this 在任何情况下都不指向函数的词法作用域
// function foo() {
//   var a = 2;
//   this.bar();
// }
//
// function bar() {
//   console.log(a)
// }
//
// foo()

// this 既不指向函数自身，也不指向函数的词法作用域
// this 实际上是函数被调用时发生的绑定，它指向什么取决于函数在哪被调用

// function baz() {
//   // 当前调用栈 baz
//   // 当前的调用位置是全局作用域
//
//   console.log("baz")
//   bar(); // bar的调用位置
// }
//
// function bar() {
//   // 当前调用栈 baz -> bar
//   // 当前调用位置是 baz
//
//   console.log("bar")
//   foo(); // foo 的调用位置
// }
//
// function foo() {
//   // 当前的调用栈 baz -> bar -> foo
//   // 当前的调用位置是 bar
//
//   console.log('foo')
// }
//
// baz() // baz的调用位置

// 1.默认绑定
// 即：不带任何修饰的函数调用。
// function foo() {
//   console.log(a)
// }
//
// var a = 2;
//
// foo()

// 2.隐式绑定
// 对象属性引用链中只有最后一层会影响函数调用位置

// function foo() {
//   console.log(this.a)
// }
//
// let a = 2;
//
// foo.apply({a:123})

// function foo() {
//   console.log(this.a)
// }
//
// var obj = {
//   a: 2,
//   foo: foo
// }
//
// var a = 11;
//
// setTimeout(obj.foo, 100)

// 3.隐式丢失 回调函数会隐式this,比如著名的 setTimeout

// 4.显示绑定 call apply

// function foo() {
//   console.log(this.a)
// }
//
// var obj = {
//   a: 2
// }
//
// var bar = function () {
//   foo.call(obj)
// }
//
// setTimeout(bar, 100)

// 104
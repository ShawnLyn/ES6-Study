// this不是编写时绑定，而是运行时绑定。
// 它依赖于函数调用的上下文
// this的绑定与函数生命的位置无关，与函数被调用的方式有关。

// 函数真正的调用点（call-site），是影响this绑定的唯一因素
// 调用点如何决定在函数执行期间this的指向？这里分为以下四种情况。

// 1。默认绑定（Default Binding）
/*function foo() {
  console.log(this.a)
}

var a = 2;

foo()*/

// 2。隐含绑定（Implicit Binding）

// 调用点是否有一个环境对象

/*function foo() {
  console.log(this.a)
}

const obj2 = {
	a: 42,
	foo: foo
};

const obj1 = {
	a: 2,
	obj2: obj2
};

obj1.obj2.foo();*/ //42

// 3。明确绑定

/*
function foo() {
	console.log(this.a)
}

const obj = {
	a: 2
}

foo.call(obj)*/

// 4。硬绑定

/*
function foo() {
	console.log(this.a)
}

const obj = {
	a: 2
}

const bar = function () {
	foo.call(obj)
}

bar();

setTimeout(bar, 100)*/
/*
function foo(s) {
	console.log(this.a, s)
	return this.a + s
}

var obj = {
	a: 2
}

var bar = function () {
	return foo.apply(obj, arguments)
}

var b = bar(2)*/

function foo(s) {
	console.log( this.a, s)
	return this.a + s
}

function bind(fn, obj) {
  return function () {
    return fn.apply(obj, arguments)
  }
}

var obj = {
	a: 22
}

bind(foo, obj)(123)
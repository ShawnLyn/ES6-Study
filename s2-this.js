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
function foo() {
  console.log(this.a)
}

const obj = {
	a: 2,
	foo: foo
};

obj.foo();
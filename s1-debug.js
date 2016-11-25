// 左侧行数线右侧可点击，设置断点位置，
// 然后鼠标右键调出面板，选择 Debug XX.js 进行断点测试

function baz() {
  console.log('baz')
  bar()
}

function bar() {
  console.log('bar')
  foo()
}

function foo() {
  console.log('foo')
}

baz();
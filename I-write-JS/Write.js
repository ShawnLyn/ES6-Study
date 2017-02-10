// 整数型数组如何求出最大值
//Math.max.apply(null, [1,2,3])

// 将类数组变为数组的方法，比如函数的 arguments
// var a = {0:'a', 1:'b', 2:'c', length:3}
// console.log(
// 	Array.prototype.slice.apply(a),
// 	Array.prototype.slice.call(a)


// http://caibaojian.com/get-random-element.html
// 从一个数组中随机抽取不重复的若干元素
// 1.直接抽取
// function draw(m=2,n=1) {
// 	let
// 		arr = [],
// 		myArr = new Array(m).fill(1).map((item, index) => index+1);
//
// 	if(n > m){console.log('抽取人数不能大于总人数'); return}
//
// 	for (let i=1; i <= n; i++) {
// 		const ran = Math.floor(myArr.length * Math.random());
// 		arr.push(...myArr.splice(ran, 1));
// 	}
// 	console.log(arr)
// }
//
// draw(4,3);


// 2.洗牌抽取
// function draw(m=2,n=1) {
// 	let myArr = new Array(m).fill(1).map((item, index) => index+1);
//
// 	if(n > m){console.log('抽取人数不能大于总人数'); return}
//
// 	for (let i = 0; i < n; i++) {
// 		const ran = Math.floor(m * Math.random());
// 		[myArr[i], myArr[ran]] = [myArr[ran], myArr[i]]
// 	}
// 	console.log(myArr.slice(0, n))
// }
//
// draw(4,4);


// 更优雅的方式
// 关于洗牌的相关文献。http://www.matrix67.com/blog/archives/879

// function* draw(m) {
// 	const cards = new Array(m).fill(1).map((_, i) => i + 1);
//
// 	for (let i=m-1; i>=0; i--) {
// 		const rand = Math.floor(Math.random() * (i + 1));
// 		[cards[i], cards[rand]] = [cards[rand], cards[i]];
// 		yield cards[i]
// 	}
// }
//
// let drawer = draw(4);
//
// console.log(new Array(4).fill(1).map(() => drawer.next().value));


// 其他优雅
// function* draw(m) {
// 	const cards = new Array(m).fill(1).map((_, i) => i + 1);
//
// 	for (let i=0; i<m; i++) {
// 		const rand = Math.floor(Math.random() * m);
// 		[cards[i], cards[rand]] = [cards[rand], cards[i]];
// 		yield cards
// 	}
// }
//
// let drawer = draw(4);
//
// console.log(draw(4).next().value);

// sort 洗牌有自身的问题，不准备，比如下面，预期结果应该是2500次左右，可实际运行，每次都是3200次左右。
// let counter = 0;
// for(let i=0; i < 10000; i++) {
// 	if([1,2,3,4].sort(f => Math.random() > 0.5)[0] === 1) {counter++}
// }
// console.log(counter)

// 闭包练习
// function s1() {
// 	let num = 11;
// 	const say = function () {
// 		console.log(num)
// 	};
// 	num++;
// 	return say
// }
//
// const s2 = s1();
// s2();

// function buildList(list) {
// 	let arr = [];
// 	for (let i=0; i<list.length; i++) {
// 		const item = 'item' + i;
// 		arr.push(function () {
// 			console.log(item, ':', list[i])
// 		})
// 	}
// 	return arr;
// }
//
// function testList() {
// 	const arr = buildList([1,2,3]);
// 	for(let i=0; i<arr.length; i++){
// 		arr[i]()
// 	}
// }
//
// testList()


// 获取对象长度的方法。
//function getObjectLength(o) {
//	let i=0, p;
//	for(p in o) {
//		if(o.hasOwnProperty(p)){
//			i++
//		}
//	}
//	return i
//}
//
//var a = {a:1, b:2};
//
//function MyObj(a,b) {
//	this.a = a;
//	this.b = b;
//}
//MyObj.prototype.say = function () {
//	console.log(this.a)
//}
//
//var a1 = new MyObj(2,3);
//
//var n = 0;
//for(let key in a1){
//	n++
//}
//console.log(getObjectLength(a1))

// 关于返回函数参数数组方法的性能比较，经测试（f2性能最佳，为f1的三倍）

//function f1(){return [].slice.call(arguments)}
//function f2(){
//	for(var len=arguments.length, arr=Array(len), i=0; i<len; i++){
//		arr[i]=arguments[i]
//	}
//	return arr
//}
//
//console.time('f2')
//for(let i=0; i<100000; i++) {
//	f2(1,2,3,4)
//}
//console.timeEnd('f2')

//console.time('f2')
//for(let i=0; i<1000; i++) {
//	f2(1,2,3,4)
//}
//console.timeEnd('f2')

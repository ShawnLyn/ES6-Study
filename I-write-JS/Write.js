// 整数型数组如何求出最大值
//Math.max.apply(null, [1,2,3])

// 将类数组变为数组的方法，比如函数的 arguments
// var a = {0:'a', 1:'b', 2:'c', length:3}
// console.log(
// 	Array.prototype.slice.apply(a),
// 	Array.prototype.slice.call(a)
// )

function draw(m=2,n=1) {
	let
		arr = [],
		myArr = new Array(m).fill(1).map((item, index) => index+1);

	if(n > m){console.log('抽取人数不能大于总人数'); return}

	for (let i=1; i <= n; i++) {
		const ran = Math.floor(myArr.length * Math.random());
		arr.push(...myArr.splice(ran, 1));
	}
	console.log(arr)
}

draw(4,3);
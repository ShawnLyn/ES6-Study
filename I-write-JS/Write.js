// 整数型数组如何求出最大值
//Math.max.apply(null, [1,2,3])

// 将类数组变为数组的方法，比如函数的 arguments
// var a = {0:'a', 1:'b', 2:'c', length:3}
// console.log(
// 	Array.prototype.slice.apply(a),
// 	Array.prototype.slice.call(a)
// )
/*
function mixin(sourceObj, targetObj) {
	for ( let key in sourceObj ) {
		if (!(key in targetObj)) {
			targetObj[key] = sourceObj[key]
		}
	}

	return targetObj
}

const Vehicle = {
	engines: 1,

	ignition: function () {
		console.log( 'Turning on my engine.' )
	},

	drive: function () {
		this.ignition();
		console.log( 'Moving forward!' )
	}
}

const Car = mixin( Vehicle, {
	wheels: 4,

	drive: function () {
		Vehicle.drive.call(this)
		console.log(`Rolling on all ${this.wheels} wheels!`)
	}
})

Car.drive()*/


/*
function mixin(sourceObj, targetObj) {
	for (let key in sourceObj) {
		targetObj[key] = sourceObj[key]
	}

	return targetObj
}

const Vehicle = {
	engines: 1,

	ignition: function () {
		console.log('启动发动机')
	},

	drive: function () {
		this.ignition()
		console.log(`启动成功，稳定发动。。。${this.engines}个轮子`)
	}
}

let Car = mixin(Vehicle, {})

mixin({
	wheels: 4,
	drive: function () {
		console.log('你好')
	}
}, Car)

Car.drive()*/

/*function Vehicle() {
	this.engines = 1
}

Vehicle.prototype.ignition = function () {
	console.log('点火，启动发动机！')
}

Vehicle.prototype.drive = function () {
	this.ignition();
	console.log(`开动，${this.engines}个引擎都在工作！`)
}

function Car() {
	let car = new Vehicle()

	car.wheeles = 4
	car.engines = 3

	let vehDrive = car.drive;

	car.drive = function () {
		vehDrive.call(this)
		console.log(`${this.wheeles}个轮子都在转动`)
	}

	return car
}

Car().drive()*/


const Something = {
	cool: function () {
		this.greeting = "hello world"
		this.count = this.count ? this.count + 1 : 1
	}
}

Something.cool()



console.log(Something.greeting)
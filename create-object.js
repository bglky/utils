/*
 * 创建对象
 */


/*
 * 工厂模式
 * 解决创建多个相似的对象
 * 没有解决对象识别（无法识别对象的类型）
 */
function createPerson(name) {
	var o = new Object();
	o.name = name;
	o.sayName = function() {
		alert(this.name);
	};
	return o;
}

/*
 * 构造函数模式
 * 可以用instanceof来识别对象
 */
function Person(name) {
	this.name = name;
	this.sayName = function() {
		alert(this.name);
	};
}

/*
 * 原型模式
 */
function Person() {}
Person.prototype.name = "XXX";
person.prototype.sayName = function() {
	alert(this.name);
}

/* *****使用最广泛*****
 * 组合构造函数模式和原型模式
 */
function Person(name) {
	this.name = name;
}
Person.prototype.sayName = function() {
	alert(this.name);
}

/*
 * 动态原型模式
 */
function Person(name) {
	this.name = name;
	if (typeof this.sayName != "function") {
		Person.prototype.sayName = function() {
			alert(this.name);
		};
	}
}

/*
 * 寄生构造函数模式
 * 如果可以使用其他模式的情况下，不建议使用这样模式
 */
function Person(name) {
	var o = new Object();
	o.name = name;
	o.sayName = function() {
		alert(this.name);
	};
	return o;
}

/*
 * 稳妥构造函数模式
 */
function Person(name) {
	var o = new Object();
	//定义私有变量和函数	

	o.sayName = function() {
		alert(name);
	}
	return o;
}
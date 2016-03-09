var singleton = (function () {
	var obj;
	this.attri = 'father';
	return function (fn) {
		return obj || (obj = new fn(this).bind(this));
	}	
})();

function el () {this.name = "jesse"};

var t1 = singleton(el);
var t2 = singleton(el);
console.log(t2.attri)
console.log(t1 === t2);
var singleton = (function () {
	var obj;
	this.attri = 'father';
	return function (fn) {
		return obj || (obj = new fn());
	}	
})();

function el () {this.name = "jesse";console.log(this.attri)};

var t1 = singleton(el);
var t2 = singleton(el);

console.log(t1 === t2);
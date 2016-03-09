function Design () {}

Design.prototype = {
	singleton : (function () {
		var obj;
		this.attri = 'father';
		return function (fn) {
			return obj || (obj = new fn());
		}	
	})() 
}


function el () {this.name = "jesse";console.log(this.attri)};
var design = new Design();

var t1 = design.singleton(el);
var t2 = design.singleton(el);
console.log(t1 === t2)
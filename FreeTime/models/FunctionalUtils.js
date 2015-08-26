module.exports = function(){
	var forEach = function(array, action){
		for(var i = 0; i < array.length; i++)
			action(array[i]);
	};

	var negate = function(func){
		return !func.apply(null, arguments);
	};

	var reduce = function(combine, base, array){
		forEach(array, function (element){
			base = combine(base, element);
		});
		return base;
	}

	var map = function(func, array){
		var result = [];
		forEach(array, function (element){
			result.push(func(element));
		});
		return result;
	}

	var ops = {
		"+": function(a, b){ return a + b; },
		"==": function(a, b){ return a == b; },
		"===": function(a, b){return a === b; },
		"!": function(a){ return !a; }
	};8
}();
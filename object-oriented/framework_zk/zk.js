function ZK() {};

ZK.prototype = {
	$id: function(str) {
		return document.querySelector(str);
	},

	stringFormat: function (str, data) {
		return str.replace(/@\((\w+)\)/g, function (match, key) {
			return typeof data[key] === "undefined" ? '' : data[key];
	});
	}
};

let zk = new ZK();

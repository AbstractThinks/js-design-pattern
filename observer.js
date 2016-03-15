var Envents = {
	_listeners: {},
	addEvent : function (type, fn) {
		if (typeof this._listeners[type] === "undefined") {
			this._listeners[type] = [];
		}
		if (typeof fn === "function") {
			this._listeners[type].push(fn);
		}
		return this;
	},
	startEvent : function (type) {
		var arrayEvent = this._listeners[type];
		if (arrayEvent instanceof Array) {
			for (var i = 0; i < arrayEvent.length; i++) {
				if (typeof arrayEvent[i] === "function") {
					arrayEvent[i]({type : type});
				}
			}
		}
		return this;
	},
	removeEvent : function (type, fn) {
		var arrayEvent = this.listeners[type];
		if (typeof type === "string" && arrayEvent instanceof Array) {
			if (typeof fn === "function") {
				for (var i = 0; i < arrayEvent.length; i++) {
					if (arrayEvent[i] === fn) {
						this._listeners[type].splice(i, 1);
						break;
					}
				}
			} else {
				delete this.listeners[type];
			}
		}
		return this;
	}

}
function createDom (data) {
	var defaultData = {
		dom : data.dom || 'div',
		props : data.props || {},
		text : data.text || '',
		children : data.children || []
	};
	var dom = document.createElement(defaultData.dom);
	dom.appendChild(document.createTextNode(defaultData.text));
	for (var prop in defaultData.props) {
		dom.setAttribute(prop, defaultData.props[prop]);
	}
	for(var i = 0; i < defaultData.children.length; i++) {
		dom.appendChild(createDom(defaultData.children[i]));
	}
	return dom;
}

var data = {dom:'ul',props:{'name':'test'},text:'设计模式',children:[
	{dom:'li',props:{},text:'单例模式',children:[
		{dom:'ul',props:{'name':'test'},children:[{dom:'li',text:'单例模式'}]}
	]},
	{dom:'li',props:{},text:'',children:[]}
]};
document.getElementById("main").appendChild(createDom(data));
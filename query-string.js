/*
 * 解析查询字符串，返回包含所有参数的一个对象 
 */

function getQueryStringArgs() {
	//取得查询字符串并去掉开头的问号
	var qs = (location.search.length > 0 ? location.search.substring(1) : "");
	//保存数据的对象
	var args = {};
	//取得每一项
	var items = qs.length ? qs.split("&") : [];
	//逐个将每一项添加到args对象中
	items.forEach(function(item, index, array) {
		var name, value;
		item = item.split("=");
		name = decodeURIComponent(item[0]);
		value = decodeURIComponent(item[1]);
		if (name.length) {
			args[name] = value;
		}
	});
	return args;
}
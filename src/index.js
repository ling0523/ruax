class Ruax {
	constructor() {
		this.defaults = {}; //全局默认参数配置
		this.beforeRequest = function() {}; //请求发送前的触发函数
		this.beforeResponse = function() {}; //请求响应到then/catch前触发的函数
	}

	//对create的参数config进行初始化，获取初始化后的config
	_getValidationConfig(config) {
		//config非对象,默认为defaults
		if (typeof(config) != "object") {
			config = {};
			Object.assign(config, this.defaults);
		}
		//baseUrl基本路径
		if (typeof(config.baseUrl) != 'string') {
			config.baseUrl = this.defaults.baseUrl;
		}
		//url路径
		if (typeof(config.url) != 'string') {
			config.url = this.defaults.url;
		}
		//data请求数据
		if (typeof(config.data) != "object") {
			config.data = this.defaults.data;
		} else { //如果配置的config有data则将defaults的追加进来	
			var obj = config.data;
			config.data = {};
			Object.assign(config.data, this.defaults.data);
			Object.assign(config.data, obj);
		}
		//type请求方式post/get
		if ((typeof(config.type) != "string") || ((config.type.toUpperCase() != 'POST') && (config.type.toUpperCase() !=
				'GET'))) {
			config.type = this.defaults.type;
		}
		//timeout请求超时时间
		if (typeof(config.timeout) != "number" || isNaN(config.timeout)) {
			config.timeout = this.defaults.timeout;
		}
		//dataType返回参数类型
		if ((typeof(config.dataType) != "string") || ((config.dataType.toUpperCase() != "STRING") &&
				(config.dataType.toUpperCase() != "XML") && (config.dataType.toUpperCase() != "HTML") &&
				(config.dataType.toUpperCase() != "JSON") && (config.dataType.toUpperCase() != "BLOB") &&
				(config.dataType.toUpperCase() != "JSONP"))) {
			config.dataType = this.defaults.dataType;
		}
		//jsonpCallback跨域回调方法名称
		if (typeof(config.jsonpCallback) != 'string') {
			config.jsonpCallback = this.defaults.jsonpCallback;
		}
		//contentType设置
		if (typeof(config.contentType) != 'boolean'){
			config.contentType = this.defaults.contentType;
		}
		//headers请求头配置
		if (typeof(config.headers) != "object") {
			config.headers = this.defaults.headers;
		} else { //如果配置的config有headers则将defaults的追加进来
			var obj = config.headers;
			config.headers = {};
			Object.assign(config.headers, this.defaults.headers);
			Object.assign(config.headers, obj);
		}
		//cache缓存配置
		if (typeof(config.cache) != 'boolean') {
			config.cache = this.defaults.cache;
		}
		//async异步
		if (typeof(config.async) != 'boolean') {
			config.async = this.defaults.async;
		}
		//请求发送前
		if (typeof(config.beforeSend) != 'function') {
			config.beforeSend = this.defaults.beforeSend;
		}
		//请求完成
		if (typeof(config.complete) != 'function') {
			config.complete = this.defaults.complete;
		}
		//请求进度
		if (typeof(config.onProgress) != 'function') {
			config.onProgress = this.defaults.onProgress;
		}
		//取消请求
		if (typeof(config.cancelRequest) != "function") {
			config.cancelRequest = this.defaults.cancelRequest;
		}
		if (typeof(config.beforeRequest) != "function") {
			config.beforeRequest = this.defaults.beforeRequest;
		}
		if (typeof(config.beforeResponse) != "function") {
			config.beforeResponse = this.defaults.beforeResponse;
		}
		return config;
	}

	//设置全局默认数据
	_setDefaults() {
		//defaults非对象,默认为空对象
		if (typeof(this.defaults) != "object") {
			this.defaults = {};
		}
		//baseUrl基本路径
		if (typeof(this.defaults.baseUrl) != 'string') {
			this.defaults.baseUrl = '';
		}
		//url路径
		if (typeof(this.defaults.url) != 'string') {
			this.defaults.url = '';
		}
		//data请求数据
		if (typeof(this.defaults.data) != "object") {
			this.defaults.data = {};
		}
		//type请求方式post/get
		if ((typeof(this.defaults.type) != "string") || ((this.defaults.type.toUpperCase() != 'POST') && (this.defaults.type
				.toUpperCase() != 'GET'))) {
			this.defaults.type = 'GET';
		}
		//timeout请求超时时间
		if (typeof(this.defaults.timeout) != "number" || isNaN(this.defaults.timeout)) {
			this.defaults.timeout = 8000;
		}
		//dataType返回参数类型
		if ((typeof(this.defaults.dataType) != "string") || ((this.defaults.dataType.toUpperCase() != "STRING") &&
				(this.defaults.dataType.toUpperCase() != "XML") && (this.defaults.dataType.toUpperCase() != "HTML") &&
				(this.defaults.dataType.toUpperCase() != "JSON") && (this.defaults.dataType.toUpperCase() != "BLOB") &&
				(this.defaults.dataType.toUpperCase() != "JSONP"))) {
			this.defaults.dataType = 'JSON';
		}
		//jsonpCallback跨域回调方法名称
		if (typeof(this.defaults.jsonpCallback) != 'string') {
			this.defaults.jsonpCallback = 'callback';
		}
		//contentType设置
		if (typeof(this.defaults.contentType) != 'boolean'){
			this.defaults.contentType = true;
		}
		//headers请求头配置
		if (typeof(this.defaults.headers) != "object") {
			this.defaults.headers = {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		} else {
			var obj = {
				'Content-Type': 'application/x-www-form-urlencoded'
			}
			Object.assign(obj, this.defaults.headers);
			this.defaults.headers = obj;
		}
		//cache缓存配置
		if (typeof(this.defaults.cache) != 'boolean') {
			this.defaults.cache = true;
		}
		//async异步
		if (typeof(this.defaults.async) != 'boolean') {
			this.defaults.async = true;
		}
		//请求发送前
		if (typeof(this.defaults.beforeSend) != 'function') {
			this.defaults.beforeSend = function() {};
		}
		//请求完成
		if (typeof(this.defaults.complete) != 'function') {
			this.defaults.complete = function() {};
		}
		//请求进度
		if (typeof(this.defaults.onProgress) != 'function') {
			this.defaults.onProgress = function() {};
		}
		//取消请求
		if (typeof(this.defaults.cancelRequest) != "function") {
			this.defaults.cancelRequest = function() {};
		}
		//请求发送前对数据处理的方法
		if (typeof(this.defaults.beforeRequest) != "function") {
			this.defaults.beforeRequest = function() {};
		}
		//请求发送相应前处理结果的方法
		if (typeof(this.defaults.beforeResponse) != "function") {
			this.defaults.beforeResponse = function() {};
		}
	}

	//将json类型的数据转为&拼接的字符串
	_getParams(data) {
		var arr = [];
		for (var param in data) {
			arr.push(encodeURIComponent(param) + '=' + encodeURIComponent(data[param]));
		}
		return arr.join('&');
	}

	//创建请求发送
	create(config) {
		//初始化defaults数据
		this._setDefaults();
		//初始化beforeRequest和beforeResponse
		if (typeof(this.beforeRequest) != 'function') {
			this.beforeRequest = function() {};
		}
		if (typeof(this.beforeResponse) != 'function') {
			this.beforeResponse = function() {};
		}
		//校验config数据
		config = this._getValidationConfig(config);

		this.beforeRequest(config);
		config.beforeRequest(config);
		//Promise回调
		return new Promise((resolve, reject) => {
			//创建XMLHttpRequest对象
			var xhr = new XMLHttpRequest();
			//如果是媒体文件则设置responseType="blob"
			if (config.dataType.toLowerCase() == "blob") {
				xhr.responseType = "blob";
			}
			//给请求添加状态变化事件处理函数
			xhr.onreadystatechange = (e) => {
				if (xhr.readyState == 4) {
					config.complete(xhr);
					if (xhr.status == 200) {
						var res;
						if (config.dataType.toLowerCase() == "json") {
							try {
								res = JSON.parse(xhr.responseText);
							} catch (e) {
								//json解析失败
								reject(xhr);
							}
						} else if (config.dataType.toLowerCase() == "xml") {
							res = xhr.responseXML;
						} else if (config.dataType.toLowerCase() == "html" || config.dataType == "string") {
							res = xhr.responseText;
						} else if (config.dataType.toLowerCase() == "blob") {
							res = xhr.response;
						} else {
							res = xhr.responseText;
						}
						this.beforeResponse(res);
						config.beforeResponse(res);
						resolve(res);
					} else {
						reject(xhr);
					}
				} else if (xhr.readyState == 1) { //请求发送之前
					config.beforeSend(xhr);
				}
			}

			//超时处理
			xhr.ontimeout = () => {
				reject(xhr);
			}

			//监听上传进度
			xhr.upload.onprogress = (e) => {
				config.onProgress(e);
			}

			if (config.dataType.toLowerCase() == "jsonp") {
				//创建 script 标签并加入到页面中
				var callbackName = ('jsonp_' + Math.random()).replace(".", "");
				var oHead = document.getElementsByTagName('head')[0];
				config.data[config.jsonpCallback] = callbackName;
				var oS = document.createElement('script');
				oHead.appendChild(oS);
				//创建jsonp回调函数
				window[callbackName] = (result) => {
					oHead.removeChild(oS);
					clearTimeout(oS.timer);
					window[callbackName] = null;
					this.beforeResponse(result);
					config.beforeResponse(result);
					resolve(result);
				};
				//发送请求
				if ((config.baseUrl + config.url).indexOf("?") > -1) { //地址栏含参数
					oS.src = config.baseUrl + config.url + "&" + this._getParams(config.data);
				} else { //地址栏不含参数
					oS.src = config.baseUrl + config.url + '?' + this._getParams(config.data);
				}
				//超时处理
				oS.timer = setTimeout(() => {
					window[callbackName] = null;
					oHead.removeChild(oS);
					reject('连接超时');
				}, config.timeout);
			} else {
				if (config.type.toLowerCase() == 'get') {
					if (this._getParams(config.data)) {
						xhr.open("GET", config.baseUrl + config.url + '?' + this._getParams(config.data), config
							.async);
					} else {
						xhr.open("GET", config.baseUrl + config.url, config.async);
					}
					if (config.async) { //异步才设置超时时间
						xhr.timeout = config.timeout; //设置超时时间
					}

					//添加配置的请求头
					for (var item in config.headers) {
						xhr.setRequestHeader(item, config.headers[item]);
					}
					xhr.send(null)
				} else if (config.type.toLowerCase() == 'post') {
					xhr.open('POST', config.baseUrl + config.url, config.async);
					if (config.async == true) { //异步才设置超时时间
						xhr.timeout = config.timeout; //设置超时时间
					}

					//添加配置的请求头
					for (var item in config.headers) {
						if(item == 'Content-Type'){
							if(config.contentType){
								xhr.setRequestHeader(item, config.headers[item]);
							}
						}else{
							xhr.setRequestHeader(item, config.headers[item]);
						}
					}
					if (config.headers['Content-Type'] == 'application/x-www-form-urlencoded' && !(config.data instanceof FormData)) {
						config.data = this._getParams(config.data); //转换成&拼接
					}else if(config.headers['Content-Type'] == 'application/json' && !(config.data instanceof FormData)){
						config.data = JSON.stringify(config.data);//转换成json字符串
					}
					xhr.send(config.data);
				}
				config.cancelRequest(function() {
					xhr.abort();
				});
			}
		});
	}

	//post请求
	post(url, data) {
		let config = {
			url: url,
			data: data,
			type: 'POST'
		}
		return this.create(config);
	}

	//get请求
	get(url, data) {
		let config = {
			url: url,
			data: data,
			type: 'GET'
		}
		return this.create(config)
	}
}
module.exports = Ruax

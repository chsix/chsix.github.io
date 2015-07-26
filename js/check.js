//防止被框架
if (self!=top)
{
top.location=self.location;
}
//
function g(o){return document.getElementById(o);}

//判断是否为空
function isEmpty(id){
	if(g(id)){
		var validationCode = g(id).value;
		validationCode = validationCode.replace(/[ ]/g,""); // 去掉前后的空格
		if(validationCode != ""){
			return false;
		}
	}
	return true;
}

/*
 *\u59d3\u540d\u5224\u65ad\uff0c\u4e2d\u6587 + \u82f1\u6587 + .
 */
function isXm(str){
	var badChar = "0123456789";
	badChar += "\u3000";//\u534a\u89d2\u4e0e\u5168\u89d2\u7a7a\u683c
	badChar += "`~!@#$%^&()-_=+{[}]\\|:;\"\'<,>?/*";//\u4e0d\u5305\u542b * \u7684\u82f1\u6587\u7b26\u53f7
	if(""==str || str.length < 2){//添加姓名字符大于等于2
		return false;
	}
	for(var i=0;i<str.length;i++){
		var c = str.charAt(i);//\u5b57\u7b26\u4e32str\u4e2d\u7684\u5b57\u7b26
		if(badChar.indexOf(c) > -1){
			return false;
		}
	}
	return true;
}

/*
 *\u4e2d\u6587\u5224\u65ad\u51fd\u6570
 */
function isChinese(str){
	var badChar ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	badChar += "abcdefghijklmnopqrstuvwxyz";
	badChar += "0123456789";
	badChar += " " + "\u3000";//\u534a\u89d2\u4e0e\u5168\u89d2\u7a7a\u683c
	badChar += "`~!@#$%^&()-_=+{[}]\\|:;\"\'<,>?/*.";
	if(""==str){
		return false;
	}
	for(var i=0;i<str.length;i++){
		var c = str.charAt(i);//\u5b57\u7b26\u4e32str\u4e2d\u7684\u5b57\u7b26
		if(badChar.indexOf(c) > -1){
			return false;
		}
	}
	return true;
}

/*
 *\u6570\u5b57\u5224\u65ad\u51fd\u6570
 */
function isNumber(str){
	if(""==str){
		return false;
	}
	var reg = /\D/;
	return str.match(reg)==null;
}

/*
 *\u5224\u65ad\u7ed9\u5b9a\u7684\u5b57\u7b26\u4e32\u662f\u5426\u4e3a\u6307\u5b9a\u957f\u5ea6\u7684\u6570\u5b57
 */
function isNumber_Ex(str,len){
	if(""==str){
		return false;
	}

	if(str.length!=len){
		return false;
	}
	
	if(!isNumber(str)){
		return false;
	}
	return true;
}

/*
 * \u5224\u65ad\u8bc1\u4e66\u7f16\u53f7\u662f\u5426\u7b26\u5408\u8981\u6c42
 * \u89c4\u5219\u653e\u5bbd\uff0c\u7531\u539f\u6765\u7684\u201c\u4e2d\u6587\u3001\u6570\u5b57\u3001\u5927\u5c0f\u5199\u5b57\u6bcd\u3001(\u3001)\u3001-\u201d\u8c03\u6574\u4e3a\u4e0d\u4e3a\u7a7a
 */
function isZSBH(str){
	if(""==str){
		return false;
	}
	/*
	for(var i=0;i<str.length;i++){
		var c = str.charAt(i);
		alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		alpha += "abcdefghijklmnopqrstuvwxyz";
		alpha += "()-";
		if(!isChinese(c)&&!isNumber(c)&&alpha.indexOf(c)==-1){
			return false;
		}
	}
	*/
	return true;
}
//不能为空
function isNotNull(id,str){
	if(isEmpty(id)){
		alert(str + "不能为空");
		g(id).focus();
		return false;
	}
	return true;
}
//判断是汉字且至少两个
function isChineseAndTwo(id,text){
	var re = /[^\u4e00-\u9fa5]/;
	if(g(id).value.replace(/[ ]/g,"").length<2){
		alert(text + "请至少输入两个汉字");
		g(id).focus();
		return false;
	}
	if(re.test(g(id).value.replace(/[ ]/g,""))){
		alert(text + "请输入汉字");
		g(id).focus();
		return false;
	}
	return true;
}
function g(o){return document.getElementById(o);}
function menuOn(){
	var sUrl = location.href;
	// left menu
	if(g("leftMenu")){
		var iNum = 0;
		var aleftMLi = g("leftMenu").getElementsByTagName("li");
		for(var i=0;i<aleftMLi.length;i++){
			if(sUrl.indexOf(aleftMLi[i].getElementsByTagName("a")[0].href) != -1){
				iNum = i;
			}
			aleftMLi[i].className = "";
		}
		aleftMLi[iNum].className = "onread";
	}
}

//check the input is not null
function isNotNull(id,str){
	if(document.getElementById(id).value && document.getElementById(id).value == ""){
		alert(str + " is required.");
		document.getElementById(id).focus();
		return false;
	}
	return true;
}
function isNumber(str){
	if(""==str){
		return false;
	}
	var reg = /\D/;
	return str.match(reg) == null;
}
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
//防止被框架
if (self!=top)
{
top.location=self.location;
}
window.onload = function(){menuOn();}
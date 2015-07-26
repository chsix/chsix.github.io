function doPrint(){
  var str = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head>';
  str += '<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />';
  str += '<title>'+document.title+'</title>';
  str += '<link href="/styles/xlReport.css" rel="stylesheet" type="text/css">';
  str +='</head>';
  str +='<body onload="window.print()"><br>'+document.getElementById("resultTable").innerHTML + '</body></html>';
  w = window.open("", "", "");
  w.document.write(str );
  w.document.close();
}
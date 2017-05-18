var div = document.getElementById('swath');
var div1 = document.getElementById('swathfoot');
var num = Math.random();
var deg = (num-0.5)*20;
var h=parseInt(Math.random()*360);
var comph=0;
var s=parseInt((Math.random()*50)+25);
var l=parseInt((Math.random()*50)+25);

if(h>180){
	h+180-360
	comph=((h+180)-360);
}else{
	comph=(180+h);
}

    div.style.webkitTransform = 'rotate('+deg+'deg)';
    div.style.mozTransform    = 'rotate('+deg+'deg)';
    div.style.msTransform     = 'rotate('+deg+'deg)';
    div.style.oTransform      = 'rotate('+deg+'deg)';
    div.style.transform       = 'rotate('+deg+'deg)';
    div.style.backgroundColor = 'hsl('+h+','+s+'% ,'+l+'% )';
    div1.style.webkitTransform = 'rotate('+deg+'deg)';
    div1.style.mozTransform    = 'rotate('+deg+'deg)';
    div1.style.msTransform     = 'rotate('+deg+'deg)';
    div1.style.oTransform      = 'rotate('+deg+'deg)';
    div1.style.transform       = 'rotate('+deg+'deg)';
    div1.style.backgroundColor = 'hsl('+h+','+s+'% ,'+l+'% )';
    document.documentElement.style.backgroundColor = 'hsl('+comph+','+s+'% ,'+'99'+'% )';
    document.getElementById('title').style.color = 'hsl('+comph+','+s+'% ,'+'98'+'% )';
		document.getElementById('foot').style.color = 'hsl('+comph+','+s+'% ,'+'98'+'% )';
     document.getElementById('pitch').style.color = 'hsl('+h+','+s+'% ,'+'2'+'% )';
     document.write("<style>h2,h3 { color: hsl("+h+","+s+"% ,"+25+"% ); }</style>");
if(deg<0){
	document.getElementById('title').style.float = 'left';
	document.getElementById('pitch').style.float = 'right';
  document.getElementById('foot').style.float = 'right';
	document.getElementById('title').style.textAlign = 'left';
	document.getElementById('pitch').style.textAlign = 'right';
  document.getElementById('foot').style.textAlign = 'right';
}else if(deg>0){
	document.getElementById('title').style.float = 'right';
	document.getElementById('pitch').style.float = 'left';
  document.getElementById('foot').style.float = 'left';
	document.getElementById('title').style.textAlign = 'right';
	document.getElementById('pitch').style.textAlign = 'left';
  document.getElementById('foot').style.textAlign = 'left';
}
var d = new Date();
var n = d.getFullYear();
document.getElementById('foot').innerHTML = "&copy; "+n+" Sam Furr."

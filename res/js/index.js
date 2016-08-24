// JavaScript Document
function init(){
	var winH=document.documentElement.clientHeight;
	var bg=document.getElementById("bg");
	h=winH-108-108;
	conH=bg.offsetHeight;
	if(conH>h){
		bg.style.height="auto";
	}else{
		bg.style.height=h+"px";
	}
}
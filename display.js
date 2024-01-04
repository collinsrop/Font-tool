'use strict';
document.addEventListener('DOMContentLoaded',()=>{
//stylesheets
document.querySelector("#second").style.width="50px";
document.querySelector("#second").style.height="50px";
document.querySelector("#second").style.position="absolute";	
document.querySelector("#second").style.top="50%";
document.querySelector("#second").style.left="30%";
document.querySelector("#second").style.borderRadius="50%";
//array conceptions
const fontSizes = ["12px", "15px", "17px", "21px", "24px"];
let currentFontSize=0;
let btn2=document.querySelector("#second");
btn2.addEventListener("click",()=>{
	textIncreased.style.fontSize=fontSizes[currentFontSize];
	currentFontSize = (currentFontSize+1) %fontSizes.length;
});
});

let mybutton = document.getElementById("myBtn");
let list = document.getElementById("list");
let logo = document.getElementById("smaag");
let head = document.getElementById("head-1");

window.onload = function(){topFunction()};
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display ="block";
    list.style.margin = "0.2em 0 0.2em 0";   
    logo.style.padding= "0.3em 0 0 5em";   
    logo.style.maxHeight = "2em";
   head.style.backgroundColor = "white"; 
  } 
  else {
    mybutton.style.display = "none";    
    list.style.margin = "1em 0 1em 0";    
    head.style.background = "transparent";
    logo.style.padding= "1em 0 0 5em";   
    logo.style.maxHeight = "3em";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
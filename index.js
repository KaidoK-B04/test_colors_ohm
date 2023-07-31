
const footer = document.querySelector(".footer");


function changeColor(){
  var a = Math.floor(Math.random() * 155); 
  var b = Math.floor(Math.random() * 155); 
  var c = Math.floor(Math.random() * 155);              
  footer.style.backgroundColor = "rgb(" + a + "," + b + "," + c +")";
}
setInterval(changeColor, 500);







//Code voor datum.
var date = new Date();
document.getElementById("datum").innerHTML = date.toDateString();

//Code voor werkende klok. Waarbij er tegen elke wijzer wordt hoe die moet lopen.
setInterval(function(){
  var date = new Date();
  updateTime(date);
  updateClock(date);
}, 1000);

function updateClock(date){
  var secHand = document.getElementById("sec-hand").style;
  var minHand = document.getElementById("min-hand").style;
  var hrHand = document.getElementById("hr-hand").style;
  
  secHand.transform = "rotate(" + date.getSeconds() * 6 + "deg)";
  minHand.transform = "rotate(" + date.getMinutes() * 6 + "deg)";
  hrHand.transform = "rotate(" + (date.getHours() * 30 + date.getMinutes() * 0.5) + "deg)";
  }

function updateTime(date){
  var tijdDiv = document.getElementById("tijd");
  //test 
  //var tijd = "Tijdaanwijzing --- " + date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds();
  //tijdDiv.innerHTML = tijd;
  }

//Om de verschillende elementen op die pagina mooi te laten animeren, gebruik ik een Timeline.
var tl = new TimelineMax();
//Hieronder staat de code voor de animatie van de zon en maan wanneer hun tijdszone komt, dus bij dag hoort de zonanimatie te komen en bij nacht de maananimatie.
tl.from(".titel", 3, {x:300, ease:Bounce.easeOut})
  .from("#message", 3, {x:-300, ease:Bounce.easeOut}, "-=0,5")
  .from("#img", 3, {y:20, ease:Elastic.easeOut, repeat:-1}, "-=0,5")
  .from("#img2", 3, {rotation:360, ease:Linear.easeNone, repeat:-1}, "-=0,5")
  .from("#klok", 3, {y:230, opacity:0, ease: Back.easeOut.config(1.7)}, "-=1.5")
  .from("#datum", 3, {opacity:0, scale:0, ease:Linear.easeNone}, "-=3");;

//Om de tijd te gebruiken in combinatie met een tekst en icoon
const dt = new Date();

let hour = dt.getHours();
let minutes = dt.getMinutes();
 
if (hour>=12 && hour<=17){
  document.getElementById("message").innerHTML = "Good afternoon";
  document.getElementById("img2").src = "img/zon.png";
  document.getElementById("img").style.display = "none";
  }
else if (hour >=17 && hour<=20){
  document.getElementById("message").innerHTML = "Good evening";
  document.getElementById("img").src = "img/maan.png";
  document.getElementById("img2").style.display = "none";
  }
else if (hour >=20 || hour<=6){
  document.getElementById("message").innerHTML = "Good night";
  document.getElementById("img").src = "./img/maan.png";
  document.getElementById("img2").style.display = "none";
  }
else{
  document.getElementById("message").innerHTML = "Good morning";
  document.getElementById("img2").src = "img/zon.png";
  document.getElementById("img").style.display = "none";
  }


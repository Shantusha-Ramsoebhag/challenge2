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
//tl.from(".zonfoto", 2, {y:200, opacity:0, scale:0, ease:Bounce.easeOut})
//tl.from(".maanfoto", 2, {y:200, opacity:0, scale:0, ease:Bounce.easeOut});
tl.from(".titel", 3, {x:300, ease:Bounce.easeOut})
  .from("#message", 3, {x:-300, ease:Bounce.easeOut}, "-=0,5")
  //.from("#message", 3, {x:-300, ease:Bounce.easeOut}, "-=0,5")
  .from("#klok", 3, {y:250, opacity:0, scale:0, ease:Bounce.easeOut}, "-=1.5");
  
//Om de zon en maan op het juiste moment van de dag op te laten komen maak ik funtion met een if-statement.
//function tijdZone(){
  //var tijd = new Date().getHours();
  //var tijdZoneA = Tweenmax.from(".zonfoto", 2, {y:200, opacity:0, scale:0, ease:Bounce.easeOut});
  //var tijdZoneB = Tweenmax.from(".maanfoto", 2, {y:200, opacity:0, scale:0, ease:Bounce.easeOut});

  //if (tijd > 7) {
    //tijdZoneA;
  //}
  //else{
    //tijdZoneB;
  //}
//}

const dt = new Date();

let hour = dt.getHours();
let minutes = dt.getMinutes();

if (hour>=12 && hour<=17){
  document.getElementById("message").innerHTML = "Good afternoon";
  document.getElementById("img2").src = "img/zon.png";
}
else if (hour >=17 && hour<=20){
  document.getElementById("message").innerHTML = "Good evening";
  document.getElementById("img").src = "img/maan.png";
}
else if (hour >=20 || hour<=6){
  document.getElementById("message").innerHTML = "Good night";
  document.getElementById("img").src = "img/maan.png";
}
else{
  document.getElementById("message").innerHTML = "Good morning";
  document.getElementById("img2").src = "img/zon.png";
}


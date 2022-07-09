let observers = [];
let musica = [];
let stado_musical = 1;

// startup();
set_musica();

//const botton = document.querySelector("#on");
//const seccion1Click = document.querySelector("#Parte1");
//const seccion2Click = document.querySelector("#Parte2");
//const seccion3Click = document.querySelector("#Parte3");
//const seccion4Click = document.querySelector("#Parte4");


//botton.addEventListener("click", function(evento){

 // musica[0].volume(1);
 //  musica[1].volume(0);
   //musica[2].volume(0);
   //musica[3].volume(0);
   //musica[4].volume(0);

   //musica[0].play();
   //musica[1].play();
   //musica[2].play();
   //musica[3].play();
   //musica[4].play();
 //})

function mousemove(event){
  let size1 = seccion1Click.offsetHeight
  let size2 = seccion2Click.offsetHeight
  let size3 = seccion3Click.offsetHeight
  let size4 = seccion4Click.offsetHeight
  let size5 = seccion5Click.offsetHeight

  if (event.pageY <= size1){
    musica[0].volume(1);
    musica[1].volume(0);
    musica[2].volume(0);
    musica[3].volume(0);
    musica[4].volume(0);
    console.log("cambio de volumen : 1");
  }
  if ( event.pageY > size1 && event.pageY <= (size2)){
    musica[0].volume(0);
    musica[1].volume(1);
    musica[2].volume(0);
    musica[3].volume(0);
    musica[4].volume(0);
    console.log("cambio de volumen : 2");
  }
  if ( event.pageY > (size2 + size1) && event.pageY <= (size3)){
    musica[0].volume(0);
    musica[1].volume(0);
    musica[2].volume(1);
    musica[3].volume(0);
    musica[4].volume(0);
    console.log("cambio de volumen : 3");
  }
  if ( event.pageY > (size3 + size2 + size1) && event.pageY <= (size4)){
    musica[0].volume(0);
    musica[1].volume(0);
    musica[2].volume(0);
    musica[3].volume(1);
    musica[4].volume(0);
    console.log("cambio de volumen : 4");
  }
  if ( event.pageY > (size4 + size3 + size2 + size1) && event.pageY <= (size5)){
    musica[0].volume(0);
    musica[1].volume(0);
    musica[2].volume(0);
    musica[3].volume(0);
    musica[4].volume(1);
    console.log("cambio de volumen : 5");
  }
   console.log("pageX: ",event.pageX, 
   "pageY: ", event.pageY, 
  "clientX: ", event.clientX, 
  "clientY:", event.clientY)
}

window.addEventListener('mousemove', mousemove);

function addSource(elem, path) {
  $('<source>').attr('src', path).appendTo(elem);



  function play(){
       var audio = document.getElementById("audio");
       audio.play();
                 }

// <img src="./Interactivo/Parte1.jpg" alt="" value="PLAY"  onclick="play()">
//<audio id="audio" src="./docs"></audio>> </section>
  
  
  
  
  

$("#speak").mouseenter(function(){
     var audio = $('<audio />', {
       autoPlay : 'autoplay'
     });
     addSource(audio, './docs'+Math.ceil(Math.random() * 8)+'.wav');
     audio.appendTo('./docs');     
});

 seccion1Click.addEventListener("click", function(evento){

  musica[0].volume(0.5);
   musica[1].volume(0);
   musica[2].volume(0);
   musica[3].volume(0);
   musica[4].volume(0);

   musica[0].play();
 });
 seccion2Click.addEventListener("click", function(evento){

   musica[0].volume(0);
   musica[1].volume(0.5);
  musica[2].volume(0);
   musica[3].volume(0);
   musica[4].volume(0);

   musica[1].play();
 });
 seccion3Click.addEventListener("click", function(evento){

   musica[0].volume(0);
   musica[1].volume(0);
   musica[2].volume(0.5);
   musica[3].volume(0);
   musica[4].volume(0);

   musica[2].play();
 });
 seccion4Click.addEventListener("click", function(evento){

  musica[0].volume(0);
   musica[1].volume(0);
   musica[2].volume(0);
   musica[3].volume(0.5);
   musica[4].volume(0);

   musica[3].play();
 });
 seccion5Click.addEventListener("click", function(evento){

   musica[0].volume(0);
   musica[1].volume(0);
   musica[2].volume(0);
   musica[3].volume(0);
   musica[4].volume(0.5);

   musica[4].play();
 });


 funciones

function set_musica({volume1 = 0,volume2 = 0,volume3 = 0,volume4 = 0,volume5 = 0}) {
function set_musica() {
 musica[0] = new Howl({
  src: ['main.wav'],
  autoplay: true,
   volume: 0,
  });
  musica[1] = new Howl({
  src: ['olas.wav'],
  autoplay: true,
  volume: 0,
  });
  musica[2] = new Howl({
  src: ['petroleo.wav'],
  autoplay: true,
  volume: 0,
  });
  musica[3] = new Howl({
  src: ['boya.wav'],
  autoplay: true,
  volume: 0,
  });
  musica[4] = new Howl({
  src: ['barco.wav'],
  autoplay: true,
  volume: 0,
  });
  musica[5] = new Howl({
  src: ['ballenas.wav'],
  autoplay: true,
  volume: 0,
  });
}

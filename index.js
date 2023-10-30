const seleccionGaleria=document.getElementById('galeria');
let galeria;
let imagenes=[];

class imagen{
    constructor(foto,texto){
        this.foto=foto;
        this.texto=texto;
    }
}

let imagen1=new imagen('imagenes/bodegon-1.jpg','" Bodegón con Iluminación de bombilla desde arriba: Luz Dia"');
let imagen2=new imagen('imagenes/bodegon-2.jpg','"Bodegón con Iluminación de bombilla desde arriba: Luz Dia e Iluminación por lado izquierdo: Luz Vela"',);
let imagen3=new imagen('imagenes/bodegon-3.jpg','"Bodegón con Iluminación de bombilla desde arriba: Luz Dia, por lado izquierdo: Luz Vela e Iluminación perpendicular: Luz Led"');
let imagen4=new imagen('imagenes/bodegon-4.jpg','"Bodegón con Iluminación de bombilla desde arriba: Luz Dia, por lado izquierdo: Luz Vela y Luz Led"');
let imagen5=new imagen('imagenes/bodegon-5.jpg','"Bodegón con Iluminación de bombilla desde arriba: Luz Dia, por lado izquierdo: Luz Vela e Iluminación perpendicular: Luz Led alejada"');
let imagen6=new imagen('imagenes/bodegon-6.jpg','"Bodegón con Iluminación de bombilla desde arriba: Luz Dia e Iluminación perpendicular: Luz Led"');
let imagen7=new imagen('imagenes/bodegon-7.jpg','"Bodegón con Iluminación de bombilla desde arriba: Luz Dia e Iluminación por el lado derecho: Luz Led"');
let imagen8=new imagen('imagenes/bodegon-8.jpg','"Bodegón con Iluminación  por lado izquierdo: Luz Vela "');
let imagen9=new imagen('imagenes/bodegon-9.jpg','"Bodegón con Iluminación por el lado derecho: Luz Vela e iluminación perpendicular: Luz Led"');
let imagen10=new imagen('imagenes/bodegon-10.jpg','"Bodegón con Iluminación por el lado derecho: Luz Vela e iluminación Luz Led enfocada desde abajo con una ligera inclinación"');
let imagen11=new imagen('imagenes/bodegon-11.jpg','"Bodegón con Iluminación por el lado derecho: Luz Vela e iluminación Luz Led enfocada desde arriba con una ligera inclinación"');

imagenes.push(imagen1,imagen2,imagen3,imagen4,imagen5,imagen6,imagen7,imagen8,imagen9,imagen10,imagen11);

imagenes.forEach((imagen)=>{
    galeria=`
    <img src=${imagen.foto} alt=${imagen.texto} onclick="funcionAmpliar(this);">
    `

    seleccionGaleria.innerHTML+=galeria;
});

//Ventana modal para expandir imagen

let modal = document.getElementById('popUp');
let modalImg = document.getElementById("img");
let captionText = document.getElementById("caption");
function funcionAmpliar(imgs){
    modal.style.display = "block";
    modalImg.src = imgs.src;
    captionText.innerHTML = imgs.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
    modal.style.display = "none";
}



/* Constantes  */
const cuadrito = document.getElementById("lienzo");
const papel = cuadrito.getContext("2d");
const color_lapiz = "red";
/* Variables */
let xi,yi = 0; /* X, Y iniciales */
let pintar =false;
/* Funciones */
function dibuja(e){
    /* e = al evento para identificar que botón fue pulsado */
    if (pintar){
        linea(color_lapiz,xi,yi,e.layerX,e.layerY,papel);
        xi=e.layerX;
        yi=e.layerY;
    }
}

function linea(color, xi, yi, xf, yf, papel){
    papel.beginPath();
    papel.strikeStyle = color;
    papel.lineWidth = 2;
    papel.moveTo(xi,yi);
    papel.lineTo(xf,yf);
    papel.stroke();
    papel.closePath();
}

/* escuchamos eventos  */
cuadrito.addEventListener("mousedown", (e)=>{ 
    xi=e.layerX;
    yi=e.layerY;
    pintar=true;
}); 
cuadrito.addEventListener("mouseup", ()=>{ pintar=false}); 
cuadrito.addEventListener("mousemove", dibuja);
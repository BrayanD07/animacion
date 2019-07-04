var arregloBarcov;
var arregloBarcoh;
var y_inicio = 50;
var x_inicio = 382;
var id1;
var id2;
var t = 0;
var t2= 0;


function crearBarcos()
{
var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");
	context.fillStyle = "white";
	context.fillRect(0,0,myCanvas.width,myCanvas.height);

	var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");

	arregloBarcov = new Array(new Barcov("brown", 60, 50, 50+332, y_inicio,30));
	for (var i = arregloBarcov.length - 1; i >= 0; i--) 
	{
		arregloBarcov[i].Dibujar(context);
	}	

	arregloBarcoh = new Array(new Barcoh("brown", 70, 50, x_inicio , 50 ,40));
	for (var e = arregloBarcoh.length - 1; e >= 0; e--) 
	{
		arregloBarcoh[e].Dibujar(context);
	}	
	//objmensaje.Calcular(Math.sqrt(Math.pow(arregloBarcoh.x,2)+Math.pow(arregloBarcov.Y,2)));


clearInterval(id1);
clearInterval(id2);
t = null;
t2= null;
}
/*
function calcularDistancia()
{
var myCanvas = document.getElementById("myCanvas");
var context = myCanvas.getContext("2d");


var objmensajes=new mensaje(0,0,0,0,0,0,0);
objmensaje.Calcular(Math.sqrt(Math.pow(arregloBarcoh.x,2)+Math.pow(arregloBarcov.Y,2)));

}

*/
function iniciarAnimacion()
{
	id1 = setInterval(animacionv,42);
	id2 = setInterval(animacionh,42);
}

function animacionv()
{
	
	var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");
	context.fillStyle = "white";
	context.fillRect(382,0,myCanvas.width,myCanvas.height);

	arregloBarcov.forEach
	(
		function(element)
	    {
	  		element.Y = y_inicio + (element.Velocidad*(t/1000));
		}
	);

	arregloBarcov.forEach(
		function(element) 
		{
	  		element.Dibujar(context);
	  		//console.log(element.Color);
	  		//console.log("X: " + element.X + ", Y: " + element.Y);	
		}
	);

	t+=42;


}

function animacionh()
{
	
	var myCanvas = document.getElementById("myCanvas");
	var context = myCanvas.getContext("2d");
	context.fillStyle = "white";
	context.fillRect(0,0,myCanvas.width,myCanvas.height/9.5);

	arregloBarcoh.forEach
	(
		function(element)
	    {
	  		element.X = x_inicio - (element.Velocidad*(t2/1000));
		}
	);

	arregloBarcoh.forEach(
		function(element) 
		{
	  		element.Dibujar(context);
	  		//console.log(element.Color);
	  		//onsole.log("X: " + element.X + ", Y: " + element.Y);	
	  		//console.log(Math.sqrt(Math.pow(arregloBarcoh.x_inicio,2)+Math.pow(arregloBarcov.y_inicio,2)));
		}
	);


	t2+=42;


	
}

function detenerAnimacion()
{
	if(id1 != null)
		clearInterval(id1);

	if(id2 != null)
		clearInterval(id2);
}
/*
if(element.Y==500)
	{
		clearInterval(id2);
	}

function calcularDistancia()
{
var myCanvas = document.getElementById("myCanvas");
var context = myCanvas.getContext("2d");

var Hablar(mensaje)
{
alert(mensaje);
}

objmensaje.Calcular(Math.sqrt(Math.pow(arregloBarcoh.x,2)+Math.pow(arregloBarcov.Y,2)));

}
*/
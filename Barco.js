class Barcov
{

constructor(c, al, an, x, y,vel)
{
this.Color = c;
this.Altura = al;
this.Ancho = an;
this.X = x;
this.Y = y;
this.Velocidad = vel;

}

Calcular(mensaje)
{
alert(mensaje);
}

Dibujar(contextoDeDibujo)
{

//Crear una pluma con el color
contextoDeDibujo.strokeStyle = this.Color; 

//cbarco
contextoDeDibujo.beginPath();
contextoDeDibujo.moveTo(this.X,this.Y);
contextoDeDibujo.fillStyle=this.Color;
contextoDeDibujo.fillRect(this.X+this.Ancho/2,
                          this.Y,this.Ancho/3,this.Altura/2);
contextoDeDibujo.fill();
contextoDeDibujo.stroke();
contextoDeDibujo.closePath();
//punta
contextoDeDibujo.beginPath();
contextoDeDibujo.fillStyle=this.Color;
contextoDeDibujo.strokeStyle="brow";
contextoDeDibujo.moveTo(this.X+this.Ancho/2,this.Y+this.Altura/2);
contextoDeDibujo.lineTo(this.X+this.Ancho/1.5,this.Y+this.Altura/1.5);
contextoDeDibujo.lineTo(this.X+this.Ancho/1.2,this.Y+this.Altura/2)
contextoDeDibujo.lineTo(this.X+this.Ancho/2,this.Y+this.Altura/2);
contextoDeDibujo.fill();

contextoDeDibujo.stroke();
contextoDeDibujo.closePath();

/*
if(this.orientacion=="horizontal")
{
contextoDeDibujo.moveTo(this.X, this.Y);
contextoDeDibujo.fillStyle="#8a9597"
contextoDeDibujo.fillRect(this.X+this.Ancho/2,
                         this.Y,this.Ancho/2,this.Altura/3);
contextoDeDibujo.stroke();
}
else if(this.orientacion=="vertical")
{
contextoDeDibujo.moveTo(this.X, this.Y);
contextoDeDibujo.fillStyle="#8a9597"
contextoDeDibujo.fillRect(this.X+this.Ancho/2,
                         this.Y,this.Ancho/3,this.Altura/3);
contextoDeDibujo.stroke();
}*/

}
}
class Barcoh
{

constructor(c, al, an, x, y,vel)
{
this.Color = c;
this.Altura = al;
this.Ancho = an;
this.X = x;
this.Y = y;
this.Velocidad = vel;
}


Dibujar(contextoDeDibujo)
{

//Crear una pluma con el color
contextoDeDibujo.strokeStyle = this.Color; 

//hoja
contextoDeDibujo.moveTo(this.X,this.Y);
contextoDeDibujo.fillStyle=this.Color;
contextoDeDibujo.fillRect(this.X+this.Ancho/2,
                          this.Y,-this.Ancho/1.5,-this.Altura/4);

contextoDeDibujo.stroke();

//punta
contextoDeDibujo.beginPath();
contextoDeDibujo.fillStyle=this.Color;
contextoDeDibujo.strokeStyle="brow";
contextoDeDibujo.moveTo(this.X-this.Altura/8,this.Y);
contextoDeDibujo.lineTo(this.X-this.Altura/4,this.Y-this.Ancho/5.5);
contextoDeDibujo.lineTo(this.X-this.Altura/8,this.Y-this.Altura/4)
contextoDeDibujo.lineTo(this.X-this.Altura/8,this.Y);
contextoDeDibujo.fill();
contextoDeDibujo.stroke();
contextoDeDibujo.closePath();
}
}

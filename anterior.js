
//ejercicio1
function rectangulo(base, altura) {
  this.base = base;
  this.altura = altura;
  this.area = function() {
    return this.base * this.altura; };
  }
  var es = new rectangulo(2,2);
//ejercicio2

function Mujer(nombre,dia,mes,nacimiento){
   this.nombre = nombre;
   this.dia = dia;
   this.mes = mes;
   this.nacimiento = nacimiento;
   this.edad = function() {

     var fecha = new Date();
     var anioA = fecha.getFullYear();
     var mesA =fecha.getMonth()+1;
     var diaA = fecha.getDate();

    var edadSi = anioA -this.nacimiento;
   if (mesA <= this.mes && diaA <= this.dia) {
     edadSi--;
   }
     return "La edad actual de "+ this.nombre +" es: "+ edadSi;
   }
}
   var cosa = new Mujer("Esserit",30, 10,1996);

//ejercicio 3
function Cosa(nombre, edad,pasatiempo) {
  this.nombre = nombre;
  this.edad = edad;
  this.pasatiempo = pasatiempo;
  this.mensaje = function(){
    return "Hola soy " + this.nombre + " tengo " + this.edad + " y me gusta " + this.pasatiempo;
  }
}
  var men = new Cosa("Su", 34, "comer");
  

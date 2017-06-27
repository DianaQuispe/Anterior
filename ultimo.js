var assert = require("assert");
//ejercicio1
function ejercicio1(numInicial,numFinal) {
   var objeto = {
      inicia : numInicial,
      fin : numFinal,
   };
           var a = 0;
      for (i = objeto.inicia; i <= objeto.fin ; i++) {
        a +=i;
     }
      return a;
    }
    //ejercicio2
   function Ejercicio2(nombre,edad,ocupacion,genero) {
     this.nombre = nombre,
     this.edad = edad,
     this.ocupacion = ocupacion,
     this.genero = genero,
     this.mensaje = function() {
       var menFinal = "";
       if(this.edad > 17 && this.genero == "femenino" && (ocupacion == "Web Developer" || ocupacion == "Estudiante Laboratoria"))  {
        menFinal = "You're awesome";
     return menFinal;
 }
 }
 // Ejercicio3
 function Ejercicio3(array) {
 var  texto = {};
 for (var x in array) {
    var y= parseInt(x)+1;
  texto["propiedad" + y]= array[x];
  }
    var respuesta = Object.keys(texto);
    var res = "";
    for (var x in respuesta) {
      res = res + respuesta[x] + "-->" + array[x] + ",";
    } return res.substr(0,res.length -1);
}
      //ejercicio4
function ejercicio4(nombre, apellido, edad, genero, ciudad, pais) {
  this.nombre = nombre,
  this.apellido = apellido,
  this.edad = edad,
  this.genero = genero,
  this.ciudad = ciudad,
  this.pais = pais,
  this.ficha = function() {
    return "Nombre: " + this.nombre + " " +this.apellido + "\nEdad: " + this.edad +  "\nPais: " + this.pais;
  }
}

describe('Ejercicio 1', function(){
  it('Prueba empieza en 1 y termina en 10', function(){
  assert.equal(55, ejercicio1(1,10));
   });
});
describe('Ejercicio 2', function(){
  it('Es o no una Super Coder', function(){
    var nuevo = new Ejercicio2("Diana",18,"Estudiante Laboratoria","femenino");
  assert.equal("You're awesome",nuevo.mensaje());
   });
});
describe('Ejercicio 3', function(){
  it('"propiedad1-->6,propiedad2-->5,propiedad3-->4,propiedad4-->3,propiedad5-->2,propiedad6-->1"', function(){
  assert.equal("propiedad1-->6,propiedad2-->5,propiedad3-->4,propiedad4-->3,propiedad5-->2,propiedad6-->1",Ejercicio3([6,5,4,3,2,1]));
   });
});
describe('Ejercicio 4', function(){
  it('Es o no una Super Coder', function(){
    var nuevo = new ejercicio4("Diana","Quispe", 18,"Estudiante Laboratoria","femenino","Peru", "Arequipa");
  assert.equal("Nombre: Diana Quispe" + "\nEdad: 18" + "\nPais: Peru",nuevo.ficha("Diana", " Quispe", 23, "femenino", "Arequipa", "Peru"));
   });
});

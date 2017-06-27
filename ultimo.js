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
       if(edad > 17 && genero == "femenino") {
         if (ocupacion == "Web Developer" || ocupacion == "Estudiante Laboratoria") {
           return "You're awesome";
         }
          else {return "upsii";  }

       } else {return "upsii"; }
   }

describe('Ejercicio 1', function(){
  it('Prueba empieza en 1 y termina en 10', function(){

  assert.equal(55, ejercicio1(1,10));
   });
});
describe('Ejercicio 2', function(){
  it('Es o no una Super Coder', function(){
    var nuevo = new Ejercicio2("Diana",18,"Estudiante Laboratoria","femenino")

  assert.equal("You're awesome", ejercicio2(nuevo.mensaje()));
   });
});

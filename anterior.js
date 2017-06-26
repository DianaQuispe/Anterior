var assert = require("assert");
//ejercicio1
function rectangulo(base, altura) {
  this.base = base;
  this.altura = altura;
  this.area = function() {
    return this.base * this.altura; };
  }
//ejercicio2
  function ejercicio2(nombre,dia,mes,nacimiento){
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
   if (mesA < this.mes) {
     edadSi--;
   } if (mesA == this.mes && diaA <= this.dia) {
     edadSi--;
   }
     return "La edad actual de "+ this.nombre +" es "+ edadSi;
   }
}
//ejercicio3
function Cosa(nombre, edad,pasatiempo) {
  this.nombre = nombre;
  this.edad = edad;
  this.pasatiempo = pasatiempo;
  this.mensaje = function(){
    return "Hola soy " + this.nombre + " tengo " + this.edad + " y me gusta " + this.pasatiempo;
  }
}

  describe('Ejercicio 1', function(){
  it('Prueba de  2 y 2 son 4', function(){
    var es = new rectangulo(2,2);
    assert.equal(4, es.area());
  });
    });
    describe('Ejercicio 2', function(){
    it('Prueba deLa edad actual de Su es 25', function(){
    var cosa = new ejercicio2("Su",23,8 ,1991);
      assert.equal("La edad actual de Su es 25", cosa.edad());
  });
    });
    describe('Ejercicio 2', function(){
    it('Prueba deLa edad actual de Su es 25', function(){
      var men = new Cosa("Su", 34, "comer");
    assert.equal("Hola soy Su tengo 34 y me gusta comer", men.mensaje());
    });
});


//efecto teclas
var teclas = document.getElementsByClassName("tecla");
for (let i = 0; i < teclas.length; i++) {
teclas[i].addEventListener("mousedown", function () {
teclas[i].style.transform = "scale(.95, .95)";
});
teclas[i].addEventListener("mouseup", function () {
teclas[i].setAttribute("style", "transform:scale(1, 1)");
});
};
document.getElementsByClassName("tecla").onclick= teclas;

//variables y asignacion
    //Variables
var actual, num, num1, num2, resultado, operacion;
var cantNumDisplay=0;
    //Numeros
document.getElementById('1').addEventListener("click",n1);
document.getElementById('2').addEventListener("click",n2);
document.getElementById('3').addEventListener("click",n3);
document.getElementById('4').addEventListener("click",n4);
document.getElementById('5').addEventListener("click",n5);
document.getElementById('6').addEventListener("click",n6);
document.getElementById('7').addEventListener("click",n7);
document.getElementById('8').addEventListener("click",n8);
document.getElementById('9').addEventListener("click",n9);
document.getElementById('0').addEventListener("click",n0);

    //operaciones
document.getElementById('mas').addEventListener("click", mas);
document.getElementById('menos').addEventListener("click", menos);
document.getElementById('por').addEventListener("click", por);
document.getElementById('dividido').addEventListener("click", dividido);

    //tecla especiales
document.getElementById('igual').addEventListener("click", igual);
document.getElementById('on').addEventListener("click", on);
document.getElementById('sign').addEventListener("click", sign);
document.getElementById('punto').addEventListener("click", punto);

    //asignacion numeros
function n1 (){
  actual = document.getElementById('display').innerHTML;
  if (actual==="0") {
    num = document.getElementById('1');
    document.getElementById('display').innerHTML= num.alt;
    cantNumDisplay = cantNumDisplay + 1;
  } else if (cantNumDisplay < 8) {
    num = document.getElementById('1');
    document.getElementById('display').innerHTML= actual + num.alt;
    cantNumDisplay = cantNumDisplay +1;
  }
}
function n2 (){
  actual = document.getElementById('display').innerHTML;
  if (actual==="0") {
    num = document.getElementById('2');
    document.getElementById('display').innerHTML= num.alt;
    cantNumDisplay = cantNumDisplay + 1;
  } else if (cantNumDisplay < 8) {
    num = document.getElementById('2');
    document.getElementById('display').innerHTML= actual + num.alt;
    cantNumDisplay = cantNumDisplay +1;
  }
}
function n3 (){
  actual = document.getElementById('display').innerHTML;
  if (actual==="0") {
    num = document.getElementById('3');
    document.getElementById('display').innerHTML= num.alt;
    cantNumDisplay = cantNumDisplay + 1;
  } else if (cantNumDisplay < 8) {
    num = document.getElementById('3');
    document.getElementById('display').innerHTML= actual + num.alt;
    cantNumDisplay = cantNumDisplay +1;
  }
}
function n4 (){
  actual = document.getElementById('display').innerHTML;
  if (actual==="0") {
    num = document.getElementById('4');
    document.getElementById('display').innerHTML= num.alt;
    cantNumDisplay = cantNumDisplay + 1;
  } else if (cantNumDisplay < 8) {
    num = document.getElementById('4');
    document.getElementById('display').innerHTML= actual + num.alt;
    cantNumDisplay = cantNumDisplay +1;
  }
}
function n5 (){
  actual = document.getElementById('display').innerHTML;
  if (actual==="0") {
    num = document.getElementById('5');
    document.getElementById('display').innerHTML= num.alt;
    cantNumDisplay = cantNumDisplay + 1;
  } else if (cantNumDisplay < 8) {
    num = document.getElementById('5');
    document.getElementById('display').innerHTML= actual + num.alt;
    cantNumDisplay = cantNumDisplay +1;
  }
}
function n6 (){
  actual = document.getElementById('display').innerHTML;
  if (actual==="0") {
    num = document.getElementById('6');
    document.getElementById('display').innerHTML= num.alt;
    cantNumDisplay = cantNumDisplay + 1;
  } else if (cantNumDisplay < 8) {
    num = document.getElementById('6');
    document.getElementById('display').innerHTML= actual + num.alt;
    cantNumDisplay = cantNumDisplay +1;
  }
}
function n7 (){
  actual = document.getElementById('display').innerHTML;
  if (actual==="0") {
    num = document.getElementById('7');
    document.getElementById('display').innerHTML= num.alt;
    cantNumDisplay = cantNumDisplay + 1;
  } else if (cantNumDisplay < 8) {
    num = document.getElementById('7');
    document.getElementById('display').innerHTML= actual + num.alt;
    cantNumDisplay = cantNumDisplay +1;
  }
}
function n8 (){
  actual = document.getElementById('display').innerHTML;
  if (actual==="0") {
    num = document.getElementById('8');
    document.getElementById('display').innerHTML= num.alt;
    cantNumDisplay = cantNumDisplay + 1;
  } else if (cantNumDisplay < 8) {
    num = document.getElementById('8');
    document.getElementById('display').innerHTML= actual + num.alt;
    cantNumDisplay = cantNumDisplay +1;
  }
}
function n9 (){
  actual = document.getElementById('display').innerHTML;
  if (actual==="0") {
    num = document.getElementById('9');
    document.getElementById('display').innerHTML= num.alt;
    cantNumDisplay = cantNumDisplay + 1;
  } else if (cantNumDisplay < 8) {
    num = document.getElementById('9');
    document.getElementById('display').innerHTML= actual + num.alt;
    cantNumDisplay = cantNumDisplay +1;
  }
}
function n0 (){
  actual = document.getElementById('display').innerHTML;
  if (actual ==="0") {
    num = document.getElementById('0');
    document.getElementById('display').innerHTML= num.alt;
  } else {
    num = document.getElementById('0');
    document.getElementById('display').innerHTML= actual + num.alt;
  }
}

    //asignacion operaciones
function mas() {
  num1 = document.getElementById("display").innerHTML;
  operacion= "mas";
  document.getElementById("display").innerHTML = 0;
  cantNumDisplay=0;
}
function menos() {
  num1 = document.getElementById("display").innerHTML;
  operacion= "menos";
  document.getElementById("display").innerHTML = 0;
  cantNumDisplay=0;
}
function por() {
  num1 = document.getElementById("display").innerHTML;
  operacion= "por";
  document.getElementById("display").innerHTML = 0;
  cantNumDisplay = 0;
}
function dividido() {
  num1 = document.getElementById("display").innerHTML;
  operacion= "dividido";
  document.getElementById("display").innerHTML = 0;
  cantNumDisplay = 0;
}

    //tecla igual
function igual() {
  num2 = document.getElementById("display").innerHTML;
  switch (operacion) {
    case "mas":
      resultado = Number(num1)+Number(num2);
      document.getElementById('display').innerHTML= resultado.toFixed(2);
      break;
    case "menos":
      resultado = Number(num1)-Number(num2);
      document.getElementById('display').innerHTML= resultado.toFixed(2);
      break;
    case "por":
      resultado = Number(num1)*Number(num2);
      document.getElementById('display').innerHTML= resultado.toFixed(2);
      break;
    case "dividido":
      resultado = Number(num1)/Number(num2);
      document.getElementById('display').innerHTML= resultado.toFixed(2);
      break;
  }
}

    //tecla On/case
function on() {
  document.getElementById("display").innerHTML = 0;
  operacion="";
  cantNumDisplay=0;
}

    //tecla signo
function sign() {
  actual = document.getElementById("display").innerHTML;
  if (actual!=="0") {
    document.getElementById("display").innerHTML = actual * -1;
  }
}

    //tecla punto
function punto() {
  actual = document.getElementById("display").innerHTML;
  if (actual.indexOf(".")== -1) {
    document.getElementById("display").innerHTML = actual + ".";
    cantNumDisplay = actual.length +1;
  }
}

    /*ayudas del tutor
validar cant de num en el display:
var display = document.getElementById("display")
if(display.innerHTML.length<8){
//es menor asi que puede escribir el siguiente digito
}
verificar si hay punto
if(display.textContent.indexOf(".")==-1){
//no se encuentra el punto, lo pude escribir
}
efecto boton
https://www.w3schools.com/code/tryit.asp?filename=G3RWURIWO5EX
*/

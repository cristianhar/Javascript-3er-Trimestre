
function calcular() {
    // Obtener los valores del formulario

   // para convertir lo de adentro de los parentesis parseFloat()
   //document.getElementById("num1".value)
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operacion = document.getElementById('operacion').value;


    // Realizar la operación seleccionada
    let resultado;
    switch (operacion) {
        
        case 'suma':
            resultado = num1 + num2;
            break;
        case 'resta':
            resultado = num1 - num2;
            break;
        case 'multiplicacion':
            resultado = num1 * num2;
            break;
        case 'division':
            resultado = num1 / num2;
            break;
        default:
            resultado = 'Operación no válida';
    }

    // Mostrar el resultado
    document.getElementById('resultado').value = resultado;
    
}

function conviertaNumero()
{

var numero = parseInt(document.getElementById("num1").value);
let resultado ;

switch(numero)
{
    case 1 : resultado = "Enero" ; break;
    case 2 : resultado = "Febrero"; break;
    case 3 : resultado = "Marzo";  break;
    case 4 : resultado = "Abril";  break;
    case 5 : resultado = "Mayo";  break;
    case 6 : resultado = "Junio"; break;
    case 7 : resultado = "Julio"; break;
    case 8 : resultado = "Agosto"; break;
    case 9 : resultado = "Septiembre";break;
    case 10: resultado = "Octubre";break;
    case 11: resultado = "Noviembre";break;
    case 12: resultado = "Diciembre";break;
    default: window.alert("No existe un mes con el numero 0") ; break;
}

    // Mostrar el resultado
    document.getElementById('mes').value = resultado;
}


function cobrominutos()
{

var numero = parseInt(document.getElementById("minutos").value);
var llamada = document.getElementById("tipo").value;
let resultado ;
if(numero <=3 )
{
    resultado = 500;
}
switch (llamada)
{

case "local" : if(numero >3 ){resultado = (numero-3)* 200+500 ; break;} 
case "nacional" : if(numero >3 ) {resultado = (numero-3)* 300+500 ; break;} 

}
    // Mostrar el resultado
    document.getElementById('cobro').value = resultado;
}

function triangulotipo()
{

    var l1 = parseInt(document.getElementById("lado1").value);
    var l2 = parseInt(document.getElementById("lado2").value);
    var l3 = parseInt(document.getElementById("lado3").value);
    let resultado ;
    if(l1==l2 && l3 != l1) // Isosceles// Lado a y b iguales y c diferente
    {
    resultado = "Isosceles";
    }
    else if(l1!=l2 && l3 != l1 && l3!= l2) // 
    {
    resultado = "Escaleno";
    }
    else if(l1==l2 && l3 == l1) // 
    {
    resultado = "Equilatero";
    }


    document.getElementById('triangulo').value = resultado;



}


function cobrointeres()
{

var numero = parseInt(document.getElementById("prestamo").value);
var periodos = parseInt(document.getElementById("periodo").value);
var porcentaje = document.getElementById("interes").value;
let resultado ;


switch (porcentaje)
{
// 800 = 800 + (16000)* periodos )
case "dos" :  resultado = numero + (numero *0.02)*periodos; break;
case "ocho" : resultado = numero + (numero *0.08)*periodos; break;

}
    // Mostrar el resultado
    document.getElementById('cobro').value = resultado;
}

function calcularnota()
{
    var n1 = parseFloat(document.getElementById("nota1").value);
    var n2 = parseFloat(document.getElementById("nota2").value);
    var n3 = parseFloat(document.getElementById("nota3").value);
    let resultado ;  
    n1 = (n1*0.5);
    n2 = (n2*0.25);
    n3 = (n3*0.25);
    resultado = n1+n2+n3;
    document.getElementById('notafinal').value = resultado
    if(resultado >=3.5){window.alert("Ganaste la materia");}else {window.alert("Perdiste la materia");}

}

function cobrar(){
var cuenta = parseFloat(document.getElementById("compra").value);
let resultado;
var tipopago = document.getElementById("tipopago").value;
if (cuenta <= 100000 && tipopago == "efectivo")
    {
    resultado = cuenta - (cuenta *0.1);
    }
else if (cuenta <= 100000 && tipopago == "tarjeta")
    {
    resultado = cuenta - (cuenta *0.2);
    }
else if (cuenta >= 100000 && cuenta <= 200000 && tipopago == "efectivo")
    {
    resultado = cuenta - (cuenta *0.3);
    }
else if (cuenta >= 100000 && cuenta <= 200000 && tipopago == "tarjeta")
    {
    resultado = cuenta - (cuenta *0.15);
    }
else if (cuenta >= 200000  && tipopago == "efectivo")
    {
    resultado = cuenta - (cuenta *0.4);
    }
else if (cuenta >= 200000  && tipopago == "tarjeta")
    {
    resultado = cuenta - (cuenta *0.2);
    }

document.getElementById('cobrofinal').value = resultado;
}


function buscaratleta(){

    var edad = parseInt(document.getElementById('edad').value);
    var tiempo = parseInt(document.getElementById('tiempo').value);
    var sexo = document.getElementById('sexo').value;
    let resultado ;
if(tiempo >= 150 && edad < 40 && sexo == 'hombre')
{
 
 resultado = "Es apto para participar en la competencia"+sexo;
}
else if (tiempo >= 175 && edad >= 40 && sexo =="hombre" )
{
   
    resultado = "Es apto para participar en la competencia"+sexo;
}
else if (tiempo >= 180 && edad >= 40 && sexo =="mujer" )
{
    
    resultado = "Es apto para participar en la competencia"+sexo;
}
else {resultado = "No son aptos";}

document.getElementById('atleta').value = resultado;
}        


function aplicarDescuento() {
   
    var cantidadManzanas = parseInt(document.getElementById('cantidadManzanas').value);
    var descuento = 0;

    if (cantidadManzanas >= 3 && cantidadManzanas <= 5) {
        descuento = 10;
    } else if (cantidadManzanas >= 6 && cantidadManzanas <= 10) {
        descuento = 15;
    } else if (cantidadManzanas >= 11) {
        descuento = 20;
    }

    var precioSinDescuento = cantidadManzanas * 5000;
    var precioConDescuento = precioSinDescuento - (precioSinDescuento * (descuento / 100));
    var resultado = document.getElementById('resultado');

    resultado.innerHTML = "Cantidad de manzanas: " + cantidadManzanas + "<br>Descuento aplicado: " + descuento + "%<br>Precio final: $" + precioConDescuento.toFixed(2);
}

function calcularPrecioPasaje() 
{
    var distancia = parseFloat(document.getElementById("distancia").value);
    var diasEstancia = parseInt(document.getElementById("diasEstancia").value);
    var precioPorKilometro = 89.50;
    var descuento = (distancia > 1000 && diasEstancia > 7) ? 0.30 : 0;
    var precioTotal = distancia * precioPorKilometro * 2 * (1 - descuento);
    document.getElementById('precioPasaje').value = precioTotal.toFixed(2);
    
    if (descuento > 0) {
        window.alert("¡Tienes un descuento del 30% en el pasaje!");
    } else {
        window.alert("No hay descuento en el pasaje.");
    }
}
function calcularSalarioNeto() {
    
    var nombreTrabajador = document.getElementById("nombreTrabajador").value;
    var valorHora = parseFloat(document.getElementById("valorHora").value);
    var horasAlMes = parseInt(document.getElementById("horasAlMes").value);

    var salarioBasico = 0;
    var horasNormales = 0;
    var horasExtras = 0;

    if (horasAlMes <= 120) {
        horasNormales = horasAlMes;
    } else {
        horasNormales = 120;
        horasExtras = horasAlMes - 120;
    }

    salarioBasico = valorHora * horasNormales + valorHora * 2 * horasExtras;


    var deduccionImpuestos = 0;

    if (salarioBasico <= 380000) {
        deduccionImpuestos = salarioBasico * 0.10;
    } else if (salarioBasico <= 480000) {
        deduccionImpuestos = salarioBasico * 0.20;
    } else {
        deduccionImpuestos = salarioBasico * 0.30;
    }

    
    var salarioNeto = salarioBasico - deduccionImpuestos;

    document.getElementById('salarioNeto').value = salarioNeto.toFixed(2);
    alert("El salario neto de " + nombreTrabajador + " es: $" + salarioNeto.toFixed(2));
}
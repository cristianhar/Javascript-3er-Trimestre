
var n1, n2 ,suma,resta,division,mutiplo,resultado;

function sumar()
{
    n1 = document.getElementById("num1").value;
    n2 = document.getElementById("num2").value;
    resultado= document.getElementById("resultado");
    suma=parseInt(n1)+parseInt(n2);
    resultado.value = suma;
    //document.writeln("La suma es " +suma);
}
function restar()
{
    n1 = document.getElementById("num1").value;
    n2 = document.getElementById("num2").value;
    resultado= document.getElementById("resultado");
    resta=parseInt(n1)-parseInt(n2);
    resultado.value = resta;
    //document.writeln("La suma es " +suma);
}

function multiplicar()
{

    n1 = document.getElementById("num1").value;
    n2 = document.getElementById("num2").value;
    resultado= document.getElementById("resultado");
    multiplo=parseInt(n1)*parseInt(n2);
    resultado.value = multiplo;
    //document.writeln("La suma es " +suma);
}

function dividir()
{
    n1 = document.getElementById("num1").value;
    n2 = document.getElementById("num2").value;
    if(n2 ==0){alert("No puedes dividir por 0 ")}
    resultado= document.getElementById("resultado");
    division=parseInt(n1)/parseInt(n2);
    resultado.value = division;
    //document.writeln("La suma es " +suma);
}

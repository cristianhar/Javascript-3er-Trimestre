function verificarMultiplos() 
{
    let cantidadNumeros = parseInt(document.getElementById("cantidadNumeros").value);
    let resultado = "";
    for (let i = 0; i < cantidadNumeros; i++) 
    {
        let valor = parseInt(prompt("Ingresa el número a evaluar: "));
        if (valor % 3 === 0) 
        {
           resultado += `El número ${valor} es múltiplo de 3 <br>`;
        } else {
            resultado += `El número  ${valor} no es múltiplo de 3: <br>`;
        }
    }

    document.getElementById("resultado").innerHTML = resultado;
}

function verificarpositivosnegativos() 
{
    let cantidadNumeros = parseInt(document.getElementById("cantidadNumeros").value);
    let resultado,positivos,negativos= 0;

    for (let i = 0; i < cantidadNumeros; i++) 
    {
        let valor = parseInt(prompt("Ingresa el número a evaluar: "));
        if (valor  > 0) 
        {  positivos++;
          
        } else {
            negativos++;
            
        }
        
    }
    resultado = `Ingresaste ${positivos} numeros positivos y ${negativos} numeros negativos`;
    
    document.getElementById("resultado").innerHTML = resultado;
}

function cantidadEstudiantes() 
{
    let cantidadNumeros = parseInt(document.getElementById("cantidadNumeros").value);
    let resultado,mayornota,sumatoria,promedio,perdieron = 0;

    for (let i = 0; i < cantidadNumeros; i++) 
    {

        let valor = parseFloat(prompt(`Ingresa la calificacion del estudiante # ${i+1} `));
        sumatoria = sumatoria + valor;
        if(i==0){mayornota = valor}
        if (valor  > mayornota) 
        {  

            mayornota = valor;
      
        } 
        if(valor <3){perdieron++;}
  
        
    }
    promedio = sumatoria /cantidadNumeros;
    resultado = `Ingresastes  ${cantidadNumeros} estudiantes la nota mayor es  ${mayornota} y perdieron ${perdieron} estudiantes`;
    
    document.getElementById("resultado").innerHTML = resultado;
}

function sumarenteros(){

    let cantidadNumeros=parseInt(document.getElementById('cantidadNumeros').value);
    let sumatoria,promedio = 0;
    for(let i = 0; i<= cantidadNumeros; i++)
    {
    sumatoria = sumatoria + i;
    }
    promedio = sumatoria/cantidadNumeros;

    document.getElementById('resultado').innerHTML = `El resultado de la suma es ${sumatoria} y el promedio es : ${promedio}`;
}

function sumarfibonnaci()
{
    let cantidadNumeros=parseInt(document.getElementById('cantidadNumeros').value);
    let resultado,anterior = 0;
    let siguiente = 1;
    for (let i = 0; i < cantidadNumeros; i++) {
        resultado += anterior;
        let temp = siguiente;
        siguiente = anterior + siguiente;
        anterior = temp;
    }

    document.getElementById('resultado').innerHTML = "La suma de los primeros " + cantidadNumeros + " números de la secuencia de Fibonacci es: " + resultado;

}

function verificarPrimo() {
    let inputNumero = parseInt(document.getElementById("cantidadNumeros").value);
    let resultadoDiv = document.getElementById("resultado");

    let numero = inputNumero;
    if (numero == 0 || numero < 2) {
        resultadoDiv.innerHTML = "Por favor, ingrese un número entero mayor que uno.";
        return;
    }

    let esPrimo = true;

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            esPrimo = false;
            break;
        }
    }

    if (esPrimo) {
        resultadoDiv.innerHTML = `El número ${numero} es primo.`;
    } else {
        resultadoDiv.innerHTML = `El número ${numero} no es primo.`;
    }
}

function validaredades()
{
    let edadesaEvaluar = parseInt(document.getElementById("edades").value);
    let resultados = document.getElementById("resultado");
    let mayores,menores,sumatotaledades =0;
    for(let i=0 ; i< edadesaEvaluar ;i++)
    {
        let edadingresada = parseInt(prompt(`Edad # ${i+1}`));
        sumatotaledades = sumatotaledades + edadingresada;
        if(edadingresada >25){
        mayores++;
        }
        else{menores++}
    }
    promedio = sumatotaledades/edadesaEvaluar;
    let porcentajeMenores = (menores / edadesaEvaluar) * 100;
    resultados.innerHTML = `La edad promedio es : ${promedio} las personas mayores son :${mayores} y menores :${menores} y un porcentaje de ${porcentajeMenores} `;
}


function numerospares()
{
let sumapares = 0;
let resultados=document.getElementById("resultado");
for(let i = -15; i<= 2000;i++)
{
    if(i% 2 ==0)
    {
    sumapares = sumapares + i;

    }
}

 resultados.innerHTML =`La suma de pares comprendidos entre -15 y 2000 son ${sumapares}`;

}

function validarNumeros(){

let numeros = document.getElementById("numeros").value;
let resultados = document.getElementById("resultado");
let mayor,vecesmayor,impares,multiplos7 =0;
    for(let i = 0; i< numeros;i++)
    {
    let valor = parseInt(prompt(`Ingrese el numero ${i+1} :`));
    if(valor > mayor)
    {
        mayor=valor;
        vecesmayor=1;
    }
    else if(valor == mayor){vecesmayor++;}
    
        if(i % 2 !=0)
        {
            impares++;
        }
            if(i %7==0)
            {
                multiplos7++;
            }

    }
    resultados.innerHTML = `Los numeros Impares encontrados son ${impares} Los multiplos de 7 son ${multiplos7} El numero mayor es ${mayor} y se repitio ${vecesmayor} veces`;
    
}

let boletosVendidosPorRuta = {};
var boletosDisponibles = 200;

function validarCompra() {
    
    var resultados = document.getElementById("resultado");
    var rutaSeleccionada = document.getElementById("ruta").value;
    var cantidadBoletos = parseInt(document.getElementById("cantidad").value);

    if (!boletosVendidosPorRuta[rutaSeleccionada]) {
        boletosVendidosPorRuta[rutaSeleccionada] = 0;
    }
    boletosVendidosPorRuta[rutaSeleccionada] += cantidadBoletos;

    if (cantidadBoletos > boletosDisponibles) {
        resultados.innerHTML = "No hay suficientes boletos disponibles para la ruta seleccionada.";
        return;
    }

    resultados.innerHTML = `Compra exitosa: ${cantidadBoletos} boletos para la ruta ${rutaSeleccionada}.`;
    document.getElementById("formulario").reset();

 
    var totalBoletosDiv = document.getElementById("totalBoletos");
    totalBoletosDiv.innerHTML = "";
    for (var ruta in boletosVendidosPorRuta) {
        var totalPorRuta = boletosVendidosPorRuta[ruta];
        var parrafo = document.createElement("p");
        parrafo.textContent = `${ruta}: ${totalPorRuta} boletos vendidos.`;
        totalBoletosDiv.appendChild(parrafo);
    }
}



let totalMujeres = 0;
let totalHombres = 0;
let sumaEdadesHombres = 0;
let sumaEdadesMujeres = 0;
let promedioEdad = 0;
let sumaTotalEdades = 0;

function registrarEntrevista() {

    let genero = document.getElementById("genero").value;
    let edad = parseInt(document.getElementById("edad").value);

    if (genero === "mujer") {
        totalMujeres++;
        sumaEdadesMujeres += edad;
    } else if (genero === "hombre") {
        totalHombres++;
        sumaEdadesHombres += edad;
    }

    totalPersonas = totalMujeres + totalHombres;
    sumaTotalEdades = sumaEdadesMujeres + sumaEdadesHombres;

    if (totalPersonas > 0) {
        promedioEdad = sumaTotalEdades / totalPersonas;
    }

    document.getElementById("totalMujeres").textContent = totalMujeres;
    document.getElementById("totalHombres").textContent = totalHombres;
    document.getElementById("sumaEdadesMujeres").textContent = sumaEdadesMujeres;
    document.getElementById("sumaEdadesHombres").textContent = sumaEdadesHombres;
    document.getElementById("promedioEdad").textContent = promedioEdad.toFixed(2);
    document.getElementById("formulario").reset();

}


function calcularResultados() {
    var numExperimentos = parseInt(document.getElementById("numExperimentos").value);

    var totalAcelerados = 0;
    var totalDesacelerados = 0;
    var totalSinAceleracion = 0;
    var sumaAceleracion = 0;
    var sumaDesaceleracion = 0;

    for (var i = 0; i < numExperimentos; i++) {
        var velocidadInicial = parseFloat(prompt("Ingrese la velocidad inicial para el experimento " + (i + 1)));
        var velocidadFinal = parseFloat(prompt("Ingrese la velocidad final para el experimento " + (i + 1)));
        var distancia = parseFloat(prompt("Ingrese la distancia recorrida para el experimento " + (i + 1)));

        var aceleracion = (velocidadFinal - velocidadInicial) / distancia;

        if (aceleracion > 0) {
            totalAcelerados++;
            sumaAceleracion += aceleracion;
        } else if (aceleracion < 0) {
            totalDesacelerados++;
            sumaDesaceleracion += aceleracion;
        } else {
            totalSinAceleracion++;
        }
    }

    var promedioAceleracion = sumaAceleracion / totalAcelerados;
    var promedioDesaceleracion = sumaDesaceleracion / totalDesacelerados;

    document.getElementById("acelerados").textContent = totalAcelerados;
    document.getElementById("desacelerados").textContent = totalDesacelerados;
    document.getElementById("sinAceleracion").textContent = totalSinAceleracion;
    document.getElementById("promedioAceleracion").textContent = promedioAceleracion.toFixed(2);
    document.getElementById("promedioDesaceleracion").textContent = promedioDesaceleracion.toFixed(2);
}
function liquidarMatricula() {
    var totalMatriculas = 0;
    var resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = ""; 

    for (var i = 0; i < 100; i++) {
        var numeroCarnet = prompt("Ingrese el número de carnet para el estudiante " + (i + 1));
        var valorCredito = parseFloat(prompt("Ingrese el valor del crédito para el estudiante " + (i + 1)));
        var numeroCreditos = parseInt(prompt("Ingrese el número de créditos para el estudiante " + (i + 1)));

   
        var cargoFijo = 12500;
        var cargoVariable = Math.max(valorCredito * numeroCreditos, 180000);
        var totalMatricula = cargoFijo + cargoVariable;

      
        var resultado = `Estudiante ${numeroCarnet}: Cargo Fijo = ${cargoFijo}, Cargo Variable = ${cargoVariable}, Total a Pagar = ${totalMatricula}`;
        var parrafo = document.createElement("p");
        parrafo.textContent = resultado;
        resultadosDiv.appendChild(parrafo);

        totalMatriculas += totalMatricula;
    }

    var totalResultados = `Total de todas las matrículas calculadas: ${totalMatriculas}`;
    var parrafoTotal = document.createElement("p");
    parrafoTotal.textContent = totalResultados;
    resultadosDiv.appendChild(parrafoTotal);
}
function calcularSalarios() {
    var totalSalarios = 0;
    var totalRetencionSocial = 0;
    var totalMujeres = 0;
    var totalHorasTrabajadas = 0;
    var totalSalariosBasicos = 0;

    var resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = ""; // Limpiar resultados anteriores

    for (var i = 1; i <= 1; i++) {
        var nombre = prompt("Ingrese el nombre del trabajador " + i);
        var codigo = prompt("Ingrese el código del trabajador " + i);
        var estadoCivil = prompt("Ingrese el estado civil del trabajador " + i);
        var sexo = prompt("Ingrese el sexo del trabajador " + i);
        var valorHora = parseFloat(prompt("Ingrese el valor de la hora del trabajador " + i));
        var horasTrabajadas = parseInt(prompt("Ingrese el número de horas trabajadas en el mes para el trabajador " + i));

        var salarioBasico = valorHora * horasTrabajadas;
        var retencionImpuestos = salarioBasico >= 750000 ? 0.05 : 0;
        var retencionSeguridadSocial = salarioBasico >= 750000 ? 0.03 : 0.02;
        var salarioNeto = salarioBasico - (salarioBasico * (retencionImpuestos + retencionSeguridadSocial));

        var resultado = `Trabajador ${nombre} (Código ${codigo}): Salario Neto = ${salarioNeto.toFixed(2)}`;
        var parrafo = document.createElement("p");
        parrafo.textContent = resultado;
        resultadosDiv.appendChild(parrafo);

        totalSalarios += salarioNeto;
        totalRetencionSocial += salarioBasico * retencionSeguridadSocial;
        totalHorasTrabajadas += horasTrabajadas;
        totalSalariosBasicos += salarioBasico;

        if (sexo.toLowerCase() === "femenino") {
            totalMujeres++;
        }
    }

    var porcentajeMujeres = (totalMujeres / 30) * 100;
    var promedioSalariosBasicos = totalSalariosBasicos / 30;

    var totalResultados = `
        Total de salarios netos: ${totalSalarios.toFixed(2)}<br>
        Total de retención para seguridad social: ${totalRetencionSocial.toFixed(2)}<br>
        Porcentaje de mujeres: ${porcentajeMujeres.toFixed(2)}%<br>
        Promedio de salario básico: ${promedioSalariosBasicos.toFixed(2)}<br>
    `;
    var parrafoTotal = document.createElement("p");
    parrafoTotal.innerHTML = totalResultados;
    resultadosDiv.appendChild(parrafoTotal);
}

function procesarNumeros() {
    var cantidadNumeros = parseInt(document.getElementById("cantidadNumeros").value);
    var multiplosDe5 = 0;
    var sumaNoMultiplos = 0;
    var sumaTotal = 0;
    var cantidadPositivos = 0;

    for (var i = 1; i <= cantidadNumeros; i++) {
        var numero = parseFloat(prompt("Ingrese el número " + i));
        sumaTotal += numero;

        if (numero % 5 === 0) {
            multiplosDe5++;
        } else {
            sumaNoMultiplos += numero;
        }

        if (numero > 0) {
            cantidadPositivos++;
        }
    }

    var promedio = sumaTotal / cantidadNumeros;
    var porcentajePositivos = (cantidadPositivos / cantidadNumeros) * 100;

    var resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = ""; 

    resultadosDiv.innerHTML = `
        Números múltiplos de 5: ${multiplosDe5}<br>
        Suma de números no múltiplos de 5: ${sumaNoMultiplos}<br>
        Valor promedio de todos los números: ${promedio.toFixed(2)}<br>
        Porcentaje de números positivos: ${porcentajePositivos.toFixed(2)}%
    `;
}
function calcularSalariodos() {
    var cantidadObreros = parseInt(document.getElementById("cantidadObreros").value);
    var totalSalarios = 0;
    var totalHorasExtras = 0;

    for (var i = 1; i <= cantidadObreros; i++) {
        var nombre = prompt("Ingrese el nombre del obrero " + i);
        var codigo = prompt("Ingrese el código del obrero " + i);
        var horasTrabajadas = parseFloat(prompt("Ingrese las horas trabajadas para el obrero " + i));

        var salarioSemanal = 0;

        if (horasTrabajadas <= 40) {
            salarioSemanal = horasTrabajadas * 500;
        } else {
            salarioSemanal = (40 * 500) + ((horasTrabajadas - 40) * 700);
            totalHorasExtras += (horasTrabajadas - 40);
        }

        totalSalarios += salarioSemanal;
    }

    var promedioHorasExtras = totalHorasExtras / cantidadObreros;

    var resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = ""; 

    resultadosDiv.innerHTML = `
        Total de salarios pagados: $${totalSalarios.toFixed(2)}<br>
        Valor promedio de horas extras pagadas: ${promedioHorasExtras.toFixed(2)} horas
    `;
}
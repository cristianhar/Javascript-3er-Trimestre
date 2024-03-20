function insertarnumeros()
{
let cantidad = document.getElementById("numeros").value; 
let resultados = document.getElementById("resultado");

let valor =0;
var arreglo =[];
for(let i =0; i< cantidad;i++)
{
valor = parseInt(prompt(`Ingresa el numero :${i+1}`));
arreglo.push(valor);
}

resultados.innerHTML = arreglo;
}

function insertarpares()
{
let rangouno = document.getElementById("numerouno").value;
let rangodos = document.getElementById("numerodos").value;
let resultados = document.getElementById("resultado");
let valor =0;
var arreglo =[];
for(let i = rangouno; i<=rangodos;i++)
{
if(i%2==0){arreglo.push(`<br>`+i);}

}

resultados.innerHTML = arreglo;
}

function diezmultiplosdetres(){
let arreglo = [];
let valor = document.getElementById("numeros").value;
resultados=document.getElementById("resultado");

for(let i =1;i<=10;i++){
arreglo.push(i*valor)
}

resultados.innerHTML= arreglo;

}

function calcularresultados() {
    let arreglo = [];
    let cantidad = parseInt(document.getElementById("numeros").value);
    
    // Obtener los valores de los elementos del formulario
    for (let i = 1; i <= cantidad; i++) {
        let valor = parseInt(prompt(`Ingrese el numero #${i}:`));
        arreglo.push(valor);
    }

    
    let mayorValor = Math.max(...arreglo);
    let posicionMayor = arreglo.indexOf(mayorValor) + 1;
    let valorPromedio = arreglo.reduce((total, arreglo) => total + arreglo, 0) / arreglo.length;

    // Mostrar los resultados
    let resultados = document.getElementById("resultado");
    resultados.innerHTML = `
        <p>mayor valor: ${mayorValor}</p>
        <p>posicion del mayor Valor: ${posicionMayor}</p>
        <p>valor  promedio: ${valorPromedio.toFixed(2)}</p>
    `;
}

function evaluarnumeros() {
    let arreglo = [];
    let numeros = parseInt(document.getElementById("numeros").value);

    for (let i = 0; i < numeros; i++) {
        let valor = parseInt(prompt(`Ingrese el elemento #${i + 1}:`));
        arreglo.push(valor);
    }

    let vecesRepite10 = 0;
    for (let j = 0; j < arreglo.length; j++) {
        if (arreglo[j] == 10) {
            vecesRepite10++;
        }
    }

    let sumaPosicionesPares = 0;
    for (let i = 0; i < arreglo.length; i += 2) {
        sumaPosicionesPares += arreglo[i];
    }

    let arregloreverso = [];
    for (let i = arreglo.length - 1; i >= 0; i--) {
        arregloreverso.push(arreglo[i]);
    }

    let resultados = document.getElementById("resultado");
    resultados.innerHTML = `
        <p>Veces que se repite el numero 10: ${vecesRepite10}</p>
        <p>Suma de elementos en posiciones pares: ${sumaPosicionesPares}</p>
        <p>Elementos del vector en orden inverso: ${arregloreverso}</p>
    `;
}


function analizarVector() {
    let arreglo = [];

    let cantidad =parseInt(document.getElementById("numeros").value);
    for (let i = 0; i < cantidad; i++) {
        let numero = Math.floor(Math.random() * 201) - 100; // Genera números aleatorios entre -100 y 100
        arreglo.push(numero);
    }
    let pares = 0;
    let impares = 0;
    let positivos = 0;
    let negativos = 0;
    
    for (let i = 0; i < arreglo.length; i++) {
        
        if (arreglo[i] % 2 == 0) {
            pares++;
        } else {
            impares++;
        }

       
        if (arreglo[i] > 0) {
            positivos++;
        } else if (arreglo[i] < 0) {
            negativos++;
        }
    }

   
    let resultados = document.getElementById("resultado");
    resultados.innerHTML = `
        <p>numeros pares: ${pares}</p>
        <p>numeros impares: ${impares}</p>
        <p>numeros positivos: ${positivos}</p>
        <p>numeros negativos: ${negativos}</p>
        <p>Arreglo: ${arreglo}</p>
    `;
}

function sumarElementos() {
    let totales = [];
    let sumaParcial = 0;


    for (let i = 0; i < 40; i++) {
        let numero = Math.floor(Math.random() * 101);
        totales.push(numero);
    }

   
    for (let i = 1; i < totales.length && i <= 25; i++) {
        if (totales[i] > totales[0] && totales[i] < totales[24]) {
            sumaParcial += totales[i];
        }
    }

    let resultados = document.getElementById("resultado");
    resultados.innerHTML = `
        <p>vector original: ${totales}</p>
        <p>suma de elementos entre el primero y el 25: ${sumaParcial}</p>
    `;
}
function calcularEstadisticasNotas() {
    let arreglo = [];

    for (let i = 0; i < 30; i++) {
        let nota = Math.floor(Math.random() * 101);
        arreglo.push(nota);
    }


    let resultados = document.getElementById("resultado");
    resultados.innerHTML += "<p>Notas originales: " + arreglo + "</p>";

   
    let notaMasAlta = Math.max(...arreglo);
    let notaMasBaja = Math.min(...arreglo);


    let personasPerdieron = 0;
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] < 60) {
            personasPerdieron++;
        }
    }

    let sumaNotas = 0;
    for (let i = 0; i < arreglo.length; i++) {
        sumaNotas += arreglo[i];
    }
    let notaPromedio = sumaNotas / arreglo.length;

   
    resultados.innerHTML += "<p>Nota mas alta: " + notaMasAlta + "</p>";
    resultados.innerHTML += "<p>Nota mas baja: " + notaMasBaja + "</p>";

    if (personasPerdieron > 0) {
        resultados.innerHTML += "<p>Personas que perdieron: " + personasPerdieron + "</p>";
    } else {
        resultados.innerHTML += "<p>Nadie perdió</p>";
    }

    resultados.innerHTML += "<p>Nota promedio del grupo: " + notaPromedio.toFixed(2) + "</p>";
}
function doblearreglo() {
    let arreglouno = [];
    let arreglodos = [];
    let arregloproductomultiplicacion = [];

    for (let i = 0; i < 10; i++) {
        let numeroalazar = Math.floor(Math.random() * 101);
        arreglouno.push(numeroalazar);
    }

    for (let i = 0; i < 15; i++) {
        let numeroalazardos = Math.floor(Math.random() * 101);
        arreglodos.push(numeroalazardos);
    }

    for (let i = 0; i < arreglouno.length; i++) {
        arregloproductomultiplicacion.push(arreglouno[i] * arreglodos[i]);
    }

    let arregloconsobra = arreglodos.slice(arreglouno.length);

    let resultados = document.getElementById("resultado");
    resultados.innerHTML = `
        <p>Arreglo Uno: ${arreglouno}</p>
        <p>Arreglo Dos: ${arreglodos}</p>
        <p>Arreglo producto: ${arregloproductomultiplicacion}</p>
        <p>Faltantes: ${arregloconsobra}</p>
    `;
}

function doblearreglocombinado(){

    let arreglouno = [];
    let arreglodos = [];
    let arreglotres = [];

    for (let i = 0; i < 10; i++) {
        let numeroalazar = Math.floor(Math.random() * 101);
        arreglouno.push(numeroalazar);
    }

    for (let i = 0; i < 15; i++) {
        let numeroalazardos = Math.floor(Math.random() * 101);
        arreglodos.push(numeroalazardos);
    }

    arreglotres=arreglouno.concat(arreglodos);
    let resultados = document.getElementById("resultado");
    resultados.innerHTML = `
        <p>Arreglo Uno: ${arreglouno}</p>
        <p>Arreglo Dos: ${arreglodos}</p>
        <p>Completo: ${arreglotres}</p>
    `;

}

function obtenerPerdieronAmbas(){

    let codigosC = [101, 102, 103, 104, 105];
    let codigosJava = [103, 105, 107, 108, 109];
    let codigosPerdieronAmbas = [];

    for (let i = 0; i < codigosC.length; i++) {
        for (let j = 0; j < codigosJava.length; j++) {
            if (codigosC[i] === codigosJava[j]) {
                codigosPerdieronAmbas.push(codigosC[i]);
                break;
            }
        }
    }

    let resultados = document.getElementById("resultado");
    resultados.innerHTML = `
        <p>Códigos de Estudiantes que Perdieron en C: ${codigosC}</p>
        <p>Códigos de Estudiantes que Perdieron en Java: ${codigosJava}</p>
        <p>Códigos de Estudiantes que Perdieron en Ambas Materias: ${codigosPerdieronAmbas}</p>
    `;

}

function invertirVector() {
    
    let vectorOriginal = [];
    let cantidadElementos = parseInt(prompt("Ingrese la cantidad de elementos del vector:"));

    for (let i = 0; i < cantidadElementos; i++) {
        let elemento = parseInt(prompt(`Ingrese el elemento #${i + 1}:`));
        vectorOriginal.push(elemento);
    }

   
    let vectorInvertido = [];

    for (let i = vectorOriginal.length - 1; i >= 0; i--) {
        vectorInvertido.push(vectorOriginal[i]);
    }

  
    let resultados = document.getElementById("resultado");
    resultados.innerHTML = `
        <p>Vector Original: ${vectorOriginal}</p>
        <p>Vector Invertido: ${vectorInvertido}</p>
    `;
}

function contarDiasVerano() {
 
    let vectorEstaciones = [];

   
    for (let i = 0; i < 365; i++) {
        let estacionAleatoria = ['V', 'I', 'O', 'P'][Math.floor(Math.random() * 4)];
        vectorEstaciones.push(estacionAleatoria);
    }

    
    let diasVerano = vectorEstaciones.filter(estacion => estacion === 'V').length;

    
    let resultados = document.getElementById("resultado");
    resultados.innerHTML = `
        <p>Vector de Estaciones: ${vectorEstaciones.join(', ')}</p>
        <p>Número de días de Verano (V): ${diasVerano}</p>
    `;
}

function intercambiarElementos() {
    let cantidad = parseInt(document.getElementById("numeros").value);
    let arreglo = [];

   
    while (cantidad % 2 !== 0) {
        alert("Por favor, ingrese una cantidad par de números.");
        cantidad = parseInt(prompt("Cantidad de Números (par):"));
    }

  
    for (let i = 1; i <= cantidad; i++) {
        let valor = parseInt(prompt(`Ingrese el número #${i}:`));
        arreglo.push(valor);
    }


    for (let i = 0; i < cantidad; i += 2) {
        let temp = arreglo[i];
        arreglo[i] = arreglo[i + 1];
        arreglo[i + 1] = temp;
    }

    let resultados = document.getElementById("resultado");
    resultados.innerHTML = `<p>Vector Final: ${arreglo.join(', ')}</p>`;
}

function realizarOperaciones() {
    let arreglo = [];

  
    for (let i = 1; i <= 144; i++) {
        arreglo.push(i);
    }


    let mayorElemento = Math.max(...arreglo);
    let posicionMayor = arreglo.indexOf(mayorElemento) + 1;

  
    let sumaPares = arreglo.filter(function (elemento, index) {
        if (index % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }).reduce(function (total, num) {
        return total + num;
    }, 0);

 
    let elementosEntre80y120 = arreglo.filter(function (elemento) {
        if (elemento > 80 && elemento < 120) {
            return true;
        } else {
            return false;
        }
    }).length;


    let multiplosDe7 = arreglo.filter(function (elemento) {
        if (elemento % 7 === 0) {
            return true;
        } else {
            return false;
        }
    }).length;

    let arregloInverso = arreglo.slice().reverse();

    
    let resultados = document.getElementById("resultado");
    resultados.innerHTML = "<p>Mayor Elemento: " + mayorElemento + ", Posición: " + posicionMayor + "</p>" +
        "<p>Suma de Elementos en Posiciones Pares: " + sumaPares + "</p>" +
        "<p>Elementos entre 80 y 120: " + elementosEntre80y120 + "</p>" +
        "<p>Múltiplos de 7: " + multiplosDe7 + "</p>" +
        "<p>Vector Inverso: " + arregloInverso.join(', ') + "</p>";
}

function realizarOperacionesVector() {
  
    let arreglo = [];
    for (let i = 1; i <= 125; i++) {
        arreglo.push(Math.floor(Math.random() * 201) - 100); // Números aleatorios entre -100 y 100
    }


    let sumaTotal = 0;
    for (let i = 0; i < arreglo.length; i++) {
        sumaTotal += arreglo[i];
    }
    let valorPromedio = sumaTotal / arreglo.length;

   
    let valorX = parseInt(prompt("Ingrese un valor para buscar en el vector:"));
    let posicionX = -1;
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === valorX) {
            posicionX = i;
            break;
        }
    }

    
    let vectorImpares = [];
    for (let i = 1; i < arreglo.length; i += 2) {
        vectorImpares.push(arreglo[i]);
    }

    let multiplosDe3Positivos = 0;
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 3 === 0 && arreglo[i] > 0) {
            multiplosDe3Positivos++;
        }
    }

    
    let resultados = document.getElementById("resultado");
    resultados.innerHTML = `
        <p>Valor Promedio del Vector: ${valorPromedio.toFixed(2)}</p>
        <p>Posición del Valor ${valorX}: ${posicionX !== -1 ? posicionX : "No encontrado"}</p>
        <p>Vector de Posiciones Impares: ${vectorImpares.join(', ')}</p>
        <p>Múltiplos de 3 y Positivos: ${multiplosDe3Positivos}</p>
    `;
}

